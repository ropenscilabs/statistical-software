``` r
knitr::opts_chunk$set(
  out.width = "100%",
  collapse = TRUE,
  comment = "#>",
  fig.path="figures/"
)
```

## Scrape the Abstracts

This code gets the number of papers for each volume:

``` r
library (magrittr)
num_papers <- function (volume = 13) {
    u <- paste0 ("https://www.jstatsoft.org/issue/view/v",
                 sprintf ("%03d", volume))
    x <- xml2::read_html (u)

    # content is sometimes only Articles, but other times Articles, Reviews,
    # Technical Notes, and other categories. Each of this is delineated by
    # a simple div:tocSectionTitle, so these need to be identified, and content
    # parsed only for "Articles".
    content <- rvest::html_nodes (x, "#content") %>%
        rvest::html_children ()
    index <- grep ("tocSectionTitle", rvest::html_attrs (content))
    divs <- rvest::html_text (content [index])
    articles <- grep ("Articles", divs)
    if (articles == 1 & length (index) > 1) {
        content <- content [(index [1] + 1):(index [2] - 1)]
    } else if (articles == length (divs)) {
        content <- content [(index [articles] + 1):length (content)]
    } else {
        content <- content [(index [articles] + 1):(index [articles + 1] - 1)]
    }
    content <- content [grep ("tocArticle", content)]

    #td <- rvest::html_nodes (x, "td") %>%
    #    rvest::html_attrs () %>%
    #    unlist () %>%
    #    unname ()
    #length (which (td == "tocTitle"))
    return (length (content))
}
volume <- 1
npapers <- num_papers (volume)
message ("Volume ", volume, " has ", npapers, " papers")
#> Volume 1 has 4 papers
```

This extracts the title and abstract for one paper:

``` r
get_abstract <- function (volume = 13, paper = 1) {
    u <- paste0 ("https://www.jstatsoft.org/index.php/jss/article/view/v",
                 sprintf ("%03d", volume), "i", sprintf ("%02d", paper))
    x <- xml2::read_html (u)
    # The 2 fields are embedded in meta:
    title <- rvest::html_nodes (x, "meta[name='description']") %>%
        rvest::html_attr ("content")
    abstract <- rvest::html_nodes (x, "meta[name='DC.Description']") %>%
        rvest::html_attr ("content")
    date <- rvest::html_nodes (x, "meta[name='DC.Date.issued']") %>%
        rvest::html_attr ("content")

    # alternative: Extract from body - some volumes/papers don't have the meta:
    if (nchar (abstract) == 0 | nchar (title) == 0) {
        txt <- rvest::html_nodes (x, "td") %>%
            rvest::html_text ()
        title <- txt [grep ("^Title:", txt) + 1]
        abstract <- txt [grep ("^Abstract:", txt) + 1]
    }

    # Volume 76 has final 2 articles with non-standard URLs which fail here
    ret <- NULL
    if (length (abstract) > 0 | length (title) > 0) {
        ret <- list (title = title,
                     abstract = abstract,
                     date = date)
    }
    return (ret)
}
get_abstract (1, 3)
#> $title
#> [1] "XLISP-Stat Tools for Building Generalised Estimating Equation Models"
#> 
#> $abstract
#> [1] "This paper describes a set of Lisp-Stat tools for building Generalised Estimating Equation models to analyse longitudinal or clustered measurements. The user interface is based on the built-in regression and generalised linear model prototypes, with the addition of object-based error functions, correlation structures and model formula tools. Residual and deletion diagnostic plots are available on the cluster and observation level and use the dynamic graphics capabilities of Lisp-Stat."
#> 
#> $date
#> [1] "1996-08-16"
```

Get the current—and therefore maximal—volume number:

``` r
current_vol <- function () {
    u <- "https://www.jstatsoft.org/issue/archive"
    x <- xml2::read_html (u)
    n <- rvest::html_nodes (x, "div[id='issues']") %>%
        rvest::html_nodes ("div[id]") %>%
        rvest::html_attrs () %>%
        unlist () %>%
        unname ()
    as.integer (gsub ("issue-", "", n [grep ("issue-", n)]) [1])
}
current_vol ()
#> [1] 91
```

Get all abstracts:

``` r
#get_all_abstracts <- function () {
    vmax <- current_vol ()
    res <- tibble::tibble (date = character (),
                           volume = integer (),
                           number = integer (),
                           title = character (),
                           abstract = character ())

    pb <- utils::txtProgressBar (style = 3)
    for (i in seq (vmax)) {
        n <- num_papers (i)
        for (j in seq (n)) {
            a <- get_abstract (i, j)
            if (!is.null (a)) {
                res <- rbind (res, tibble::tibble (date = a$date,
                                                   volume = i,
                                                   number = j,
                                                   title = a$title,
                                                   abstract = a$abstract))
            }
        }
        utils::setTxtProgressBar (pb, i / vmax)
    }
    close (pb)

    return (res)
#}
#a <- get_all_abstracts ()
saveRDS (res, file = "jss-abstracts.Rds")
```

## Analyses

These presume all of the above to have been run, and a local
`"jss-abstracts.Rds"` file to have been created.

``` r
library (magrittr)
library (quanteda)
library (topicmodels)
a <- readRDS ("jss-abstracts.Rds")
q <- corpus (a$abstract)
docvars (q, "year") <- as.integer (substring (a$date, 1, 4))
docvars (q, "volume") <- as.integer (a$volume)
docvars (q, "number") <- as.integer (a$number)

d <- dfm (q, remove = quanteda::stopwords (), remove_punct = TRUE)
```

topic models don’t reveal anything:

``` r
#quanteda::textplot_wordcloud (d)
d <- dfm_trim (d, min_termfreq = 10)
my_lda <- LDA (d, k = 5)
knitr::kable (get_terms (my_lda, 20))
```

| Topic 1      | Topic 2         | Topic 3          | Topic 4     | Topic 5     |
| :----------- | :-------------- | :--------------- | :---------- | :---------- |
| package      | models          | r                | package     | data        |
| models       | can             | data             | data        | r           |
| model        | data            | analysis         | methods     | methods     |
| can          | using           | paper            | functions   | model       |
| use          | model           | can              | r           | models      |
| estimation   | used            | used             | using       | software    |
| also         | r               | provides         | statistical | statistical |
| different    | regression      | provide          | two         | paper       |
| examples     | also            | based            | estimation  | functions   |
| using        | approach        | also             | used        | use         |
| several      | time            | function         | provides    | analysis    |
| based        | available       | functions        | can         | variables   |
| provides     | use             | method           | developed   | several     |
| likelihood   | inference       | provided         | multiple    | also        |
| analysis     | distribution    | implementation   | time        | well        |
| regression   | may             | algorithm        | analysis    | one         |
| available    | methods         | software         | software    | method      |
| bayesian     | function        | set              | paper       | random      |
| standard     | functions       | test             | examples    | tools       |
| linear       | one             | algorithms       | many        | can         |
| spacy-parsed | nouns and verbs | also don’t revea | l anything: |             |

``` r
library (spacyr)
spacy_initialize ()

# extract lists of nouns and verbs:
nv <- pbapply::pblapply (a$abstract, function (i) {
    s <- spacy_parse (i)
    list (noun = s$token [grep ("NOUN", s$pos)],
          verb = s$token [grep ("VERB", s$pos)])
                           })
nouns <- unlist (lapply (nv, function (i) paste0 (i$noun, collapse = " ")))
verbs <- unlist (lapply (nv, function (i) paste0 (i$verb, collapse = " ")))
dn <- dfm (nouns, remove = stopwords (), remove_punct = TRUE)
dv <- dfm (verbs, remove = stopwords (), remove_punct = TRUE)
textplot_wordcloud (dn)
```

<img src="figures/spacy-1.png" width="100%" />

``` r
textplot_wordcloud (dv)
```

<img src="figures/spacy-2.png" width="100%" />

``` r

lda_n <- LDA (dn, k = 5)
knitr::kable (get_terms (lda_n, 10))
```

| Topic 1    | Topic 2    | Topic 3   | Topic 4       | Topic 5   |
| :--------- | :--------- | :-------- | :------------ | :-------- |
| data       | models     | data      | r             | package   |
| model      | r          | package   | package       | data      |
| package    | package    | methods   | methods       | models    |
| regression | analysis   | model     | models        | r         |
| models     | algorithm  | models    | paper         | analysis  |
| analysis   | estimation | analysis  | model         | functions |
| functions  | paper      | r         | software      | time      |
| r          | time       | software  | analysis      | software  |
| user       | user       | functions | distributions | model     |
| estimation | functions  | tools     | approach      | method    |

``` r
lda_v <- LDA (dv, k = 5)
knitr::kable (get_terms (lda_v, 10))
```

| Topic 1     | Topic 2     | Topic 3    | Topic 4    | Topic 5    |
| :---------- | :---------- | :--------- | :--------- | :--------- |
| can         | can         | using      | based      | can        |
| based       | includes    | used       | using      | using      |
| provides    | implemented | provides   | used       | developed  |
| allows      | used        | can        | provide    | provides   |
| used        | illustrated | including  | describe   | proposed   |
| implemented | use         | illustrate | provided   | may        |
| using       | describe    | provided   | can        | provide    |
| called      | presented   | provide    | illustrate | including  |
| implements  | using       | may        | may        | implements |
| describes   | provided    | introduce  | present    | given      |

## changes over time

First collate the abstract on annual bases:

``` r
a <- readRDS ("jss-abstracts.Rds")
library (stringr)
# The vectorized version of stringr::str_replace_all is nearly 10 times faster
# than gsub on stops <- paste0 (stops, collapse = "|"). Note that it needs the
# vector of patterns to be named.
collate_abstracts <- function (a) {
    a$year <- as.integer (substring (a$date, 1, 4))
    years <- sort (unique (a$year))
    abstracts <- rep (NA, length (years))
    #stops <- paste0 (paste0 ("\\s", quanteda::stopwords (), "\\s"), collapse = "|")
    stops <- paste0 ("\\s", quanteda::stopwords (), "\\s")
    repl <- rep ("", length (stops))
    names (stops) <- names (repl) <- paste0 (seq_along (stops)) # necessary!
    for (y in seq (years)) {
        ab <- paste0 (a$abstract [a$year == years [y]], collapse = " ")
        #ab <- gsub (stops, " ", ab)
        #ab <- gsub ("[[:punct:]]", "", ab)
        ab <- str_replace_all (ab, stops, repl)
        ab <- str_replace_all (ab, "[[:punct:]]", "")
        abstracts [y] <- ab
    }
    names (abstracts) <- years
    return (abstracts)
}
abstracts <- collate_abstracts (a)
```

Then convert to word-frequency tables and correlate inter-annual
frequencies between word frequencies (for all words with freq \> 1).

``` r
library (ggplot2)
abstract_freqs <- lapply (abstracts, function (i) {
            res <- table (paste0 (tolower (tokens (i))))
            freqs <- as.integer (res)
            names (freqs) <- names (res)
            res <- stats::aggregate (freqs, by = list (names (freqs)), FUN = sum)
            names (res) <- c ("token", "n")
            return (res)
            })
a1 <- abstract_freqs [-length (abstract_freqs)]
a2 <- abstract_freqs [-1]
r2 <- rep (NA, length (a1))
for (i in seq_along (a1)) {
    a1i <- a1 [[i]] [a1 [[i]]$n > 1, ]
    a2i <- a2 [[i]] [a2 [[i]]$n > 1, ]
    a <- dplyr::inner_join (a1i, a2i, by = "token")
    r2 [i] <- cor (a [, 2], a [, 3])
}
dat <- data.frame (year = as.integer (names (a2)),
                   r2 = r2 ^ 2)
ggplot (dat, aes (x = year, y = r2)) +
    geom_point (col = "#D24373", cex = 2) +
    geom_line (col = "#FF4373") +
    ylab ("Similarity in abstract texts to previous year") +
    theme (axis.title.y = element_text (angle = 90))
```

<img src="figures/annual-correlations-1.png" width="100%" />
