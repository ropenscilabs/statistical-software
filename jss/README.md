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
get_all_abstracts <- function () {
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
}
if (!file.exists ("jss-abstracts.Rds")) {
    a <- get_all_abstracts ()
    saveRDS (a, file = "jss-abstracts.Rds")
}
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

| Topic 1      | Topic 2      | Topic 3    | Topic 4        | Topic 5     |
| :----------- | :----------- | :--------- | :------------- | :---------- |
| package      | can          | methods    | models         | data        |
| r            | analysis     | model      | data           | r           |
| using        | package      | r          | analysis       | paper       |
| model        | r            | models     | using          | package     |
| also         | use          | package    | r              | models      |
| functions    | data         | data       | provides       | model       |
| provides     | using        | functions  | used           | analysis    |
| methods      | software     | used       | can            | different   |
| software     | statistical  | estimation | functions      | software    |
| data         | two          | method     | statistical    | one         |
| paper        | examples     | based      | algorithm      | time        |
| used         | regression   | available  | use            | well        |
| well         | methods      | can        | user           | tools       |
| method       | provide      | also       | regression     | linear      |
| statistical  | models       | regression | new            | also        |
| available    | function     | provides   | approach       | statistical |
| clustering   | describe     | variables  | model          | variables   |
| proposed     | time         | several    | set            | spatial     |
| multivariate | several      | time       | implementation | available   |
| can          | distribution | one        | implements     | two         |

spacy-parsed nouns and verbs also don’t reveal anything:

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
```

### Word cloud of all nouns

``` r
textplot_wordcloud (dn, max_words = 200, max_size = 8)
```

<img src="figures/wordcloud-nouns-1.png" width="100%" />

### Word cloud of all verbs

``` r
textplot_wordcloud (dv, max_words = 200, max_size = 9)
```

<img src="figures/wordcloud-verbs-1.png" width="100%" />

### Topic Models of Nouns and Verbs

``` r
lda_n <- LDA (dn, k = 5)
knitr::kable (get_terms (lda_n, 10))
```

| Topic 1    | Topic 2    | Topic 3    | Topic 4   | Topic 5      |
| :--------- | :--------- | :--------- | :-------- | :----------- |
| package    | models     | data       | data      | package      |
| data       | model      | package    | r         | r            |
| models     | package    | time       | package   | methods      |
| r          | data       | models     | analysis  | software     |
| model      | effects    | r          | user      | optimization |
| regression | r          | analysis   | software  | data         |
| analysis   | regression | methods    | paper     | paper        |
| functions  | response   | series     | interface | problems     |
| estimation | test       | clustering | packages  | functions    |
| methods    | software   | functions  | code      | tests        |

``` r
lda_v <- LDA (dv, k = 5)
knitr::kable (get_terms (lda_v, 10))
```

| Topic 1     | Topic 2     | Topic 3   | Topic 4   | Topic 5     |
| :---------- | :---------- | :-------- | :-------- | :---------- |
| can         | using       | provides  | used      | based       |
| using       | based       | can       | provides  | can         |
| used        | provides    | using     | based     | used        |
| developed   | including   | used      | using     | provide     |
| present     | allows      | include   | describes | includes    |
| implemented | implemented | describe  | present   | describe    |
| based       | may         | including | can       | proposed    |
| fit         | provide     | presented | existing  | developed   |
| provide     | present     | provided  | provided  | implemented |
| described   | provided    | allows    | proposed  | illustrate  |

… none of those reveal anything useful.

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

And that finally reveals one useful insights: The abstracts have over
time become very notably *more* similar, and converted towards a very
pronounced uniformity (R<sup>2</sup> \> 0.98).

## Unique Words

The uniformity, and the generic nature of the wordclouds and topic
models, may indicate that differences between abstracts actually arise
in their focal nouns or verbs, and that these are actually used very
infrequently. The following analysis extracts the unique words from each
abstract.

``` r
library (quanteda)
library (spacyr)
spacy_initialize ()
#> spaCy is already initialized
#> NULL
a <- readRDS ("jss-abstracts.Rds")
toks <- paste0 (a$abstract, collapse = " ") %>%
    tolower () %>%
    tokens () %>%
    paste0 ()
toks <- toks [!toks %in% stopwords () & nchar (toks) > 2]
# remove a few non-words
toks <- toks [!grepl ("^www|[1-9]", toks)]
temp <- table (toks)
tok_n <- as.integer (temp)
names (tok_n) <- names (temp)
toks1 <- spacy_parse (names (tok_n [tok_n == 1]))
verbs <- toks1$token [grep ("VERB", toks1$pos)]
nouns <- toks1$token [grep ("NOUN", toks1$pos)]
```

Then take the nouns and construct a network by measuring textual
positions between each. Note that `spacy_parse` parses some uniquely
identified tokens into multiple spacy-equivalent tokens, and so not all
of these are necessarily unique. This code generates a distance matrix
of the minimal textual distance between each pair of unique words within
the entire corpus of abstracts.

``` r
library (stringr)
nouns <- nouns [nchar (nouns) > 1]
res <- str_locate_all (paste0 (toks, collapse = " "), pattern = nouns)
for (i in seq_along (res)) res [[i]] <- cbind (res [[i]], i)
res <- data.frame (do.call (rbind, res) [, c (1, 3)])
res$noun <- nouns [res$i]
```

That then gives a `data.frame` with 3 columns of (1) start position of
each of the 2747 nouns; an index `i` enumerating the nouns, and the
nouns themselves.

``` r
abstracts <- corpus (a$abstract) %>%
    tokens (remove_punct = TRUE) %>%
    tokens_tolower () %>%
    tokens_remove (pattern = stopwords ("English"))
# make dictionary of nouns
nouns <- unique (nouns)
dict <- as.list (nouns)
names (dict) <- nouns
dict <- dictionary (dict)
fcmat <- fcm (abstracts)
fcmat <- fcm_select (fcmat, pattern = dict)
rs <- rowSums (fcmat)
lens <- vapply (0:10, function (i) length (which (rs > i)), integer (1))
rsi <- (0:10) [which (lens < 1000) [1]]
index <- which (rs > rsi)
fcmat <- fcmat [index, index]
#textplot_network (fcmat, min_freq = 0.9)
```

The `textplot_network` function is unintelligible because it’s static
and illegibly complex. Need to convert it to a dynamic representation,
which the following code does through constructing a `.js`
representation suitable for visualization via `visjs`. (Note that other
options including the `networkD3` and `sigmajs` packages are not at all
responsive for networks of this size.)

``` r
# convert the matrix to non-zero edges:
m <- as.matrix (fcmat)
m <- m + t (m) # render to symmetric matrix:
m [lower.tri (m)] <- 0 # reduce to upper tri only
diag (m) <- 0
res <- rep (list (NULL), nrow (m))
names (res) <- rownames (m)
for (i in seq (nrow (m))) {
    index <- which (m [i, ] > 0)
    res [[i]] <- m [i, index, drop = FALSE]
}
res <- res [which (lapply (res, length) > 0)]
from <- lapply (res, function (i) rep (rownames (i), ncol (i))) %>%
    unlist () %>%
    unname ()
to <- lapply (res, function (i) colnames (i)) %>%
    unlist () %>%
    unname ()
res <- data.frame (from = from,
                   to = to,
                   fromi = match (from, rownames (fcmat)),
                   toi = match (to, rownames (fcmat)),
                   n = unname (unlist (res)),
                   stringsAsFactors = FALSE)
# reduce to edges above defined weight limit:
wlim <- 100
res <- res [res$n > wlim, ]

# output the remaining nodes
nodes <- rbind (data.frame (node = res$from, i = res$fromi),
                data.frame (node = res$to, i = res$toi))
nodes <- nodes [which (!duplicated (nodes)), ]
out <- "var nodes = new vis.DataSet(["
for (i in seq (nrow (nodes)))
    out <- c (out, paste0 ("    { id: ", nodes$i [i], ",",
                           "group: 0,",
                           "label: \"", nodes$node [i], "\" },"))

out <- c (out, "]);", "", "", "var edges = new vis.DataSet([")
res_str <- apply (res, 1, function (i)
                  paste0 ("    { from: ", i [3],
                           ", to: ", i [4],
                           #", arrows: \"to\"",
                           ", value: ", i [5], " },"))
out <- c (out, res_str, "]);")

out <- c (out, "", "",
          "var container = document.getElementById(\"mynetwork\");",
          "var data = {",
          "    nodes: nodes,",
          "    edges: edges",
          "};",
          "var options = {",
          "    nodes: {",
          "        shape: \"box\",",
          "        margin: 10,",
          "        widthConstraint: {",
          "            maximum: 200",
          "        },",
          "        shadow: true",
          "    },",
          "    edges: {",
          "        shadow: true,",
          "        smooth: true",
          "    },",
          "    physics: {",
          "        barnesHut: { gravitationalConstant: -20000 },",
          "        stabilization: { iterations: 2500 }",
          "    }",
          "};",
          "",
          "",
          "var network = new vis.Network(container, data, options);")
```

dump that to a file

``` r
con <- file ("./network.js", "w")
writeLines (out, con = con)
close (con)
```

That works, at least with the high threshold of `wlim = 100`, but the
initial rendering is still quite slow, and so there seems no way to
visualise anything like the full network. That threshold results in 81
nodes and 253 edges. Dropping to `wlim = 50` increases those to 140
nodes and 616 edges. The resultant network does appear after some time,
but is the quite hard to interpret intelligibly at all.

## Network clustering

A “cheaper” way to view relationships within the network might be to
generate simple clusters from the feature co-occurrence matrix. This can
be done by adapting the above code to generate a relationship matrix
between the nodes, and use that to define clusters.

``` r
m <- as.matrix (fcmat)
m <- m + t (m) # render to symmetric matrix:
#m [lower.tri (m)] <- 0 # reduce to upper tri only
diag (m) <- 0
m <- 1 - m / max (m) # convert to a measure of distance
library (dbscan)
x <- dbscan (m, eps = 0.002)
cl <- rownames (m)
split (cl, f = as.factor (x$cluster))
#> $`0`
#>   [1] "model"                "data"                 "user"                
#>   [4] "quality"              "concentration"        "program"             
#>   [7] "analysis"             "technique"            "object"              
#>  [10] "code"                 "order"                "building"            
#>  [13] "models"               "interface"            "regression"          
#>  [16] "linear"               "error"                "cluster"             
#>  [19] "observation"          "level"                "use"                 
#>  [22] "clustering"           "kaufman"              "index"               
#>  [25] "function"             "statistics"           "server"              
#>  [28] "number"               "hand"                 "java"                
#>  [31] "bounds"               "pages"                "cgi"                 
#>  [34] "language"             "step"                 "source"              
#>  [37] "script"               "process"              "processes"           
#>  [40] "install"              "apply"                "year"                
#>  [43] "s"                    "likelihood"           "ratio"               
#>  [46] "web"                  "package"              "computer"            
#>  [49] "tests"                "matrix"               "point"               
#>  [52] "estimates"            "effects"              "poisson"             
#>  [55] "standard"             "pearson"              "deviance"            
#>  [58] "goodness"             "disk"                 "file"                
#>  [61] "count"                "multivariate"         "distributions"       
#>  [64] "calibrate"            "users"                "c"                   
#>  [67] "purpose"              "variety"              "survival"            
#>  [70] "failure"              "time"                 "cause"               
#>  [73] "distribution"         "study"                "disease"             
#>  [76] "component"            "patient"              "origin"              
#>  [79] "em"                   "laird"                "rubin"               
#>  [82] "case"                 "vector"               "software"            
#>  [85] "performs"             "graph"                "separation"          
#>  [88] "points"               "generator"            "simulation"          
#>  [91] "mod"                  "end"                  "matlab"              
#>  [94] "optimal"              "carlo"                "beta"                
#>  [97] "q"                    "document"             "system"              
#> [100] "variables"            "density"              "folds"               
#> [103] "area"                 "y"                    "variate"             
#> [106] "t"                    "von"                  "densities"           
#> [109] "gamma"                "alpha"                "k"                   
#> [112] "mvn"                  "sum"                  "sigma"               
#> [115] "region"               "int"                  "loss"                
#> [118] "problem"              "milton"               "r"                   
#> [121] "run"                  "window"               "text"                
#> [124] "information"          "specification"        "classification"      
#> [127] "test"                 "censoring"            "dirichlet"           
#> [130] "hyperparameter"       "concentrates"         "gibbs"               
#> [133] "interest"             "framework"            "link"                
#> [136] "response"             "sub"                  "dependence"          
#> [139] "uses"                 "estimation"           "scoring"             
#> [142] "factor"               "literature"           "parameter"           
#> [145] "nubmer"               "sas"                  "d"                   
#> [148] "bayes"                "structure"            "spirit"              
#> [151] "theory"               "control"              "estimators"          
#> [154] "combinations"         "space"                "contrast"            
#> [157] "ridout"               "risk"                 "easton"              
#> [160] "effect"               "cell"                 "counts"              
#> [163] "interval"             "length"               "simulations"         
#> [166] "behavior"             "estimator"            "procedure"           
#> [169] "groups"               "tukey"                "comparison"          
#> [172] "type"                 "sample"               "markov"              
#> [175] "chain"                "optimization"         "platform"            
#> [178] "search"               "co"                   "wavelet"             
#> [181] "objects"              "range"                "individual"          
#> [184] "dimension"            "reduction"            "plot"                
#> [187] "inverse"              "principal"            "congruential"        
#> [190] "modulus"              "fibonacci"            "cryptography"        
#> [193] "complexity"           "mcmc"                 "ject"                
#> [196] "row"                  "twoway"               "table"               
#> [199] "singular"             "value"                "decomposition"       
#> [202] "species"              "macros"               "vista"               
#> [205] "selection"            "term"                 "symmetry"            
#> [208] "ordination"           "migrants"             "association"         
#> [211] "mantel"               "valand"               "pioneering"          
#> [214] "kendall"              "population"           "mondrian"            
#> [217] "loading"              "select"               "candidates"          
#> [220] "forward"              "coefficient"          "occurrence"          
#> [223] "group"                "core"                 "passing"             
#> [226] "stata"                "jason"                "making"              
#> [229] "science"              "zeros"                "lattice"             
#> [232] "width"                "u"                    "cuestion"            
#> [235] "format"               "modeling"             "memory"              
#> [238] "alters"               "sciences"             "operating"           
#> [241] "curve"                "art"                  "class"               
#> [244] "covariate"            "accuracy"             "priors"              
#> [247] "score"                "author"               "researcher"          
#> [250] "volume"               "stage"                "student"             
#> [253] "splines"              "mccullagh"            "g"                   
#> [256] "phase"                "fourier"              "marsaglia"           
#> [259] "infer"                "geography"            "voting"              
#> [262] "learning"             "product"              "pca"                 
#> [265] "batch"                "mode"                 "dose"                
#> [268] "pattern"              "shape"                "feature"             
#> [271] "tail"                 "threshold"            "element"             
#> [274] "similarity"           "anova"                "decision"            
#> [277] "travel"               "state"                "consumers"           
#> [280] "cost"                 "obstacle"             "bayesians"           
#> [283] "resolution"           "nuances"              "default"             
#> [286] "date"                 "consistency"          "gui"                 
#> [289] "commander"            "box"                  "hazard"              
#> [292] "obs"                  "spline"               "log"                 
#> [295] "rank"                 "tau"                  "iterative"           
#> [298] "treatment"            "map"                  "jackknifed"          
#> [301] "unit"                 "respondent"           "indicator"           
#> [304] "lee"                  "imputation"           "trait"               
#> [307] "parent"               "haplotype"            "subjects"            
#> [310] "rule"                 "location"             "bailer"              
#> [313] "item"                 "education"            "relaimpo"            
#> [316] "gradient"             "mlm"                  "pair"                
#> [319] "buttons"              "sliders"              "panel"               
#> [322] "turn"                 "block"                "field"               
#> [325] "rcdk"                 "cheminformatics"      "pool"                
#> [328] "microscopy"           "nanosecond"           "intensity"           
#> [331] "domain"               "spectrochromatograms" "elution"             
#> [334] "analytes"             "products"             "imperfections"       
#> [337] "correction"           "start"                "color"               
#> [340] "grid"                 "situation"            "goal"                
#> [343] "m"                    "objective"            "irt"                 
#> [346] "subject"              "partition"            "inverses"            
#> [349] "meyer"                "copula"               "array"               
#> [352] "surface"              "reduce"               "line"                
#> [355] "wildlife"             "policies"             "underestimation"     
#> [358] "accelerations"        "water"                "simecol"             
#> [361] "life"                 "manipulations"        "transition"          
#> [364] "biodiversity"         "dispense"             "salesman"            
#> [367] "returns"              "vehicle"              "hartigan"            
#> [370] "erdman"               "emerson"              "circular"            
#> [373] "skew"                 "path"                 "nearest"             
#> [376] "attribute"            "presenceabsence"      "percent"             
#> [379] "ergm"                 "hyper"                "mlds"                
#> [382] "physical"             "orders"               "coordination"        
#> [385] "reactions"            "gillespie"            "trajectories"        
#> [388] "gillespiessa"         "magnitude"            "dimatteo"            
#> [391] "sunspot"              "autoregression"       "inflation"           
#> [394] "fisher"               "entries"              "impute"              
#> [397] "powerlib"             "hotelling"            "event"               
#> [400] "majorization"         "stretches"            "odds"                
#> [403] "hubert"               "morey"                "mallows"             
#> [406] "adjacent"             "pta"                  "neuropsychology"     
#> [409] "eeg"                  "cns"                  "stream"              
#> [412] "zigams"               "termstrc"             "scene"               
#> [415] "lagoon"               "mururoa"              "atoll"               
#> [418] "covariation"          "tract"                "comp.risk"           
#> [421] "timereg"              "split"                "marker"              
#> [424] "variation"            "transversal"          "views"               
#> [427] "combine"              "affymetrix"           "millions"            
#> [430] "hapmap"               "discordance"          "intervention"        
#> [433] "benefit"              "refinement"           "metaheuristics"      
#> [436] "district"             "equality"             "membership"          
#> [439] "irregularities"       "saddlepoints"         "discontinuities"     
#> [442] "derivative"           "norms"                "moment"              
#> [445] "voxel"                "geobugs"              "voxels"              
#> [448] "microstructure"       "maximization"         "mm"                  
#> [451] "midi"                 "chromatograms"        "mosler"              
#> [454] "subadditivity"        "cloud"                "lemon"               
#> [457] "squeezer"             "spread"               "strokes"             
#> [460] "clicks"               "kits"                 "imbalances"          
#> [463] "bspmma"               "tails"                "photovoltaics"       
#> [466] "incident"             "vine"                 "character"           
#> [469] "feathers"             "flight"               "re"                  
#> [472] "expectation"          "adaboost"             "mixsmsn"             
#> [475] "hood"                 "sponses"              "escalation"          
#> [478] "cytometry"            "mst"                  "cube"                
#> [481] "calcu"                "lmdme"                "decomposes"          
#> [484] "game"                 "ultimatum"            "likert"              
#> [487] "chunks"               "queries"              "micromapst"          
#> [490] "pressure"             "materials"            "subclasses"          
#> [493] "tawn"                 "moyeed"               "reformulation"       
#> [496] "leo"                  "longitudes"           "latitudes"           
#> [499] "fitdistrplus"         "molitor"              "papathomas"          
#> [502] "label"                "touloumis"            "agresti"             
#> [505] "kateri"               "circumvents"          "batchexperiments"    
#> [508] "haynes"               "mlegp"                "gam"                 
#> [511] "randomization"        "pi"                   "registers"           
#> [514] "optimizes"            "covsel"               "jointness"           
#> [517] "mother"               "child"                "genotype"            
#> [520] "royston"              "flexsurvreg"          "surv"                
#> [523] "outbreaks"            "perspective"          "farrington"          
#> [526] "detectors"            "magis"                "nydick"              
#> [529] "proof"                "bayespop"             "expectancy"          
#> [532] "pyramids"             "rjags"                "organisation"        
#> [535] "promises"             "ontologies"           "reluctance"          
#> [538] "hlme"                 "multlcmm"             "ridges"              
#> [541] "loans"                "plasma"               "clearance"           
#> [544] "humans"               "mstmap"               "lonardi"             
#> [547] "intsvy"               "pisa"                 "timss"               
#> [550] "violates"             "randomlca"            "myocardial"          
#> [553] "infarction"           "identity"             "vnm"                 
#> [556] "teigen"               "mplot"                "mirror"              
#> [559] "heritability"         "plummer"              "rmcfs"               
#> [562] "mcfs"                 "emil"                 "saturation"          
#> [565] "declaration"          "stone"                "salient"             
#> [568] "parameterizations"    "relsurv"              "tensors"             
#> [571] "wraps"                "opening"              "archives"            
#> [574] "convexity"            "geophysics"           "geology"             
#> [577] "hsdar"                "continuum"            "ingredient"          
#> [580] "jones"               
#> 
#> $`1`
#>  [1] "nonstationarity" "implemenation"   "asypow"          "applet"         
#>  [5] "multifactor"     "keyboard"        "likelikhood"     "gauss"          
#>  [9] "procure"         "calcfisher"      "observatory"     "terabyte"       
#> [13] "bulk"            "sna"             "calc"            "implemantation" 
#> [17] "maxims"          "hygiene"         "agents"          "banerjee"       
#> [21] "vocabulary"      "inr"             "mea"             "critics"        
#> [25] "weaknesses"      "mortalitysmooth" "demographers"    "actuaries"      
#> [29] "app"             "zoho"            "picard"          "proba"          
#> [33] "bilities"        "insurances"      "portfolios"      "foreach"        
#> [37] "impacts"         "oscillation"     "saha"            "johansson"      
#> [41] "teleconnections" "eot"             "slowdown"        "runtimes"       
#> [45] "gps"             "supervisor"      "origins"         "biometrics"     
#> [49] "overlaps"        "career"          "psychometrician" "monograph"      
#> [53] "ramsay"          "etasflp"         "dendrograms"     "ergonomics"     
#> [57] "clothing"        "workstation"     "generalisation"  "hyslop"         
#> [61] "acts"            "theme"           "tmap"            "aesthetics"     
#> [65] "kárný"           "ettler"          "anovas"          "differentiates" 
#> 
#> $`2`
#>  [1] "downloads"    "installs"     "plugins"      "helpers"      "communicator"
#>  [6] "lynx"         "configure"    "nothing"      "clients"      "compile"     
#> [11] "ranlib"       "dcdflib"      "solaris"      "httpd"        "fork"        
#> 
#> $`3`
#> [1] "dozens"     "vetoes"     "activism"   "infections" "repor"     
#> [6] "fear"       "vations"    "dyads"     
#> 
#> $`4`
#> [1] "disorders"      "lifestyle"      "susceptibility" "nucleotide"    
#> [5] "polymorphisms"  "ignores"        "chromosome"     "cofactors"     
#> 
#> $`5`
#> [1] "proteins"       "organism"       "liquid"         "chromatography"
#> [5] "compensation"   "amsrpm"        
#> 
#> $`6`
#> [1] "bioreactors" "nmrs"        "substrates"  "carbon"      "assembles"  
#> 
#> $`7`
#>  [1] "palaeoecology" "subfossil"     "lake"          "ocean"        
#>  [5] "bog"           "sediments"     "ecosystems"    "fossil"       
#>  [9] "pollution"     "waters"        "acidification" "diatom"       
#> 
#> $`8`
#> [1] "segment"   "lymph"     "kohrt"     "ihaka"     "gentleman" "videos"   
#> 
#> $`9`
#> [1] "dae"     "pde"     "trigger" "lsode"   "lsodes"  "lsoda"  
#> 
#> $`10`
#> [1] "dinges"           "train"            "staff"            "redesign"        
#> [5] "reimplementation" "enrich"           "lectures"         "rin"             
#> 
#> $`11`
#> [1] "respond"    "stimuli"    "rizopoulos" "martin"     "park"      
#> [6] "mirt"       "bock"       "aitkin"    
#> 
#> $`12`
#> [1] "visibility"        "obstruction"       "probabilites"     
#> [4] "sightabilitymodel" "minnesota"        
#> 
#> $`13`
#> [1] "rcppeigen"    "eigen"        "guennebaud"   "jacob"        "eddelbuettel"
#> 
#> $`14`
#> [1] "extracat"    "mosaicplots" "spineplots"  "ceiling"     "shadings"   
#> [6] "palettes"    "iwidgets"   
#> 
#> $`15`
#> [1] "query"         "openstreetmap" "pngs"          "overlay"      
#> [5] "hotspot"      
#> 
#> $`16`
#> [1] "microsimulation" "businesses"      "microdatasets"   "inequalities"   
#> [5] "attainment"      "ballas"          "birkin"         
#> 
#> $`17`
#> [1] "celebrates"      "anniversary"     "festschrift"     "chair"          
#> [5] "accomplishments" "guest"           "editors"        
#> 
#> $`18`
#> [1] "jedidi"      "desarbo"     "asparouhov"  "gottfredson" "mplus"      
#> [6] "moosbrugger" "kelava"     
#> 
#> $`19`
#> [1] "reproduction"    "versionspecific" "cohorts"         "hosts"          
#> [5] "tarballs"        "retrieval"       "completing"     
#> 
#> $`20`
#>  [1] "ggenealogy"  "rutter"      "vanderplas"  "cook"        "connections"
#>  [6] "branches"    "diagrams"    "milestone"   "cultivars"   "soybean"    
#> [11] "varieties"   "hymowitz"
```

Then take the largest cluster and examine that in isolation

``` r
index <- which (x$cluster == 0)
msub <- m [index, index]
x <- dbscan (msub, eps = 0.01)
cl <- rownames (msub)
split (cl, f = as.factor (x$cluster))
#> $`0`
#>   [1] "model"          "data"           "user"           "quality"       
#>   [5] "concentration"  "program"        "analysis"       "technique"     
#>   [9] "object"         "code"           "order"          "building"      
#>  [13] "models"         "interface"      "regression"     "linear"        
#>  [17] "error"          "cluster"        "observation"    "level"         
#>  [21] "use"            "clustering"     "index"          "function"      
#>  [25] "statistics"     "server"         "number"         "hand"          
#>  [29] "java"           "pages"          "cgi"            "language"      
#>  [33] "step"           "source"         "script"         "process"       
#>  [37] "processes"      "apply"          "s"              "likelihood"    
#>  [41] "ratio"          "web"            "package"        "computer"      
#>  [45] "tests"          "matrix"         "point"          "estimates"     
#>  [49] "effects"        "poisson"        "standard"       "file"          
#>  [53] "count"          "multivariate"   "distributions"  "users"         
#>  [57] "c"              "purpose"        "variety"        "survival"      
#>  [61] "failure"        "time"           "cause"          "distribution"  
#>  [65] "study"          "disease"        "component"      "patient"       
#>  [69] "em"             "case"           "vector"         "software"      
#>  [73] "performs"       "graph"          "points"         "simulation"    
#>  [77] "end"            "matlab"         "optimal"        "carlo"         
#>  [81] "beta"           "q"              "document"       "system"        
#>  [85] "variables"      "density"        "area"           "y"             
#>  [89] "t"              "von"            "densities"      "gamma"         
#>  [93] "k"              "sum"            "region"         "loss"          
#>  [97] "problem"        "r"              "run"            "window"        
#> [101] "text"           "information"    "specification"  "classification"
#> [105] "test"           "censoring"      "dirichlet"      "gibbs"         
#> [109] "interest"       "framework"      "link"           "response"      
#> [113] "dependence"     "uses"           "estimation"     "factor"        
#> [117] "literature"     "parameter"      "sas"            "d"             
#> [121] "bayes"          "structure"      "theory"         "control"       
#> [125] "estimators"     "combinations"   "space"          "contrast"      
#> [129] "risk"           "effect"         "cell"           "counts"        
#> [133] "interval"       "length"         "simulations"    "behavior"      
#> [137] "estimator"      "procedure"      "groups"         "comparison"    
#> [141] "type"           "sample"         "markov"         "chain"         
#> [145] "optimization"   "platform"       "search"         "wavelet"       
#> [149] "objects"        "range"          "individual"     "dimension"     
#> [153] "reduction"      "plot"           "inverse"        "principal"     
#> [157] "complexity"     "mcmc"           "table"          "singular"      
#> [161] "value"          "decomposition"  "species"        "vista"         
#> [165] "selection"      "term"           "association"    "mantel"        
#> [169] "population"     "select"         "forward"        "coefficient"   
#> [173] "group"          "core"           "stata"          "making"        
#> [177] "science"        "lattice"        "u"              "format"        
#> [181] "modeling"       "memory"         "sciences"       "operating"     
#> [185] "curve"          "class"          "covariate"      "accuracy"      
#> [189] "priors"         "score"          "volume"         "stage"         
#> [193] "student"        "splines"        "phase"          "learning"      
#> [197] "batch"          "mode"           "dose"           "pattern"       
#> [201] "shape"          "feature"        "threshold"      "element"       
#> [205] "anova"          "decision"       "state"          "cost"          
#> [209] "resolution"     "date"           "consistency"    "gui"           
#> [213] "commander"      "hazard"         "log"            "rank"          
#> [217] "iterative"      "treatment"      "map"            "unit"          
#> [221] "imputation"     "trait"          "subjects"       "location"      
#> [225] "item"           "gradient"       "panel"          "block"         
#> [229] "field"          "intensity"      "domain"         "correction"    
#> [233] "color"          "grid"           "situation"      "goal"          
#> [237] "m"              "objective"      "irt"            "subject"       
#> [241] "copula"         "array"          "reduce"         "line"          
#> [245] "simecol"        "life"           "transition"     "circular"      
#> [249] "skew"           "path"           "nearest"        "ergm"          
#> [253] "trajectories"   "impute"         "event"          "odds"          
#> [257] "stream"         "variation"      "intervention"   "equality"      
#> [261] "maximization"   "mm"             "expectation"    "mst"           
#> 
#> $`1`
#>   [1] "kaufman"              "bounds"               "install"             
#>   [4] "year"                 "pearson"              "deviance"            
#>   [7] "goodness"             "disk"                 "calibrate"           
#>  [10] "origin"               "laird"                "rubin"               
#>  [13] "separation"           "generator"            "mod"                 
#>  [16] "folds"                "variate"              "alpha"               
#>  [19] "mvn"                  "sigma"                "int"                 
#>  [22] "milton"               "hyperparameter"       "concentrates"        
#>  [25] "sub"                  "scoring"              "nubmer"              
#>  [28] "spirit"               "ridout"               "easton"              
#>  [31] "tukey"                "co"                   "congruential"        
#>  [34] "modulus"              "fibonacci"            "cryptography"        
#>  [37] "ject"                 "row"                  "twoway"              
#>  [40] "macros"               "symmetry"             "ordination"          
#>  [43] "migrants"             "valand"               "pioneering"          
#>  [46] "kendall"              "mondrian"             "loading"             
#>  [49] "candidates"           "occurrence"           "passing"             
#>  [52] "jason"                "zeros"                "width"               
#>  [55] "cuestion"             "alters"               "art"                 
#>  [58] "author"               "researcher"           "mccullagh"           
#>  [61] "g"                    "fourier"              "marsaglia"           
#>  [64] "infer"                "geography"            "voting"              
#>  [67] "product"              "pca"                  "tail"                
#>  [70] "similarity"           "travel"               "consumers"           
#>  [73] "obstacle"             "bayesians"            "nuances"             
#>  [76] "default"              "box"                  "obs"                 
#>  [79] "spline"               "tau"                  "jackknifed"          
#>  [82] "respondent"           "indicator"            "lee"                 
#>  [85] "parent"               "haplotype"            "rule"                
#>  [88] "bailer"               "education"            "relaimpo"            
#>  [91] "mlm"                  "pair"                 "buttons"             
#>  [94] "sliders"              "turn"                 "rcdk"                
#>  [97] "cheminformatics"      "pool"                 "microscopy"          
#> [100] "nanosecond"           "spectrochromatograms" "elution"             
#> [103] "analytes"             "products"             "imperfections"       
#> [106] "start"                "partition"            "inverses"            
#> [109] "meyer"                "surface"              "wildlife"            
#> [112] "policies"             "underestimation"      "accelerations"       
#> [115] "water"                "manipulations"        "biodiversity"        
#> [118] "dispense"             "salesman"             "returns"             
#> [121] "vehicle"              "hartigan"             "erdman"              
#> [124] "emerson"              "attribute"            "presenceabsence"     
#> [127] "percent"              "hyper"                "mlds"                
#> [130] "physical"             "orders"               "coordination"        
#> [133] "reactions"            "gillespie"            "gillespiessa"        
#> [136] "magnitude"            "dimatteo"             "sunspot"             
#> [139] "autoregression"       "inflation"            "fisher"              
#> [142] "entries"              "powerlib"             "hotelling"           
#> [145] "majorization"         "stretches"            "hubert"              
#> [148] "morey"                "mallows"              "adjacent"            
#> [151] "pta"                  "neuropsychology"      "eeg"                 
#> [154] "cns"                  "zigams"               "termstrc"            
#> [157] "scene"                "lagoon"               "mururoa"             
#> [160] "atoll"                "covariation"          "tract"               
#> [163] "comp.risk"            "timereg"              "split"               
#> [166] "marker"               "transversal"          "views"               
#> [169] "combine"              "affymetrix"           "millions"            
#> [172] "hapmap"               "discordance"          "benefit"             
#> [175] "refinement"           "metaheuristics"       "district"            
#> [178] "membership"           "irregularities"       "saddlepoints"        
#> [181] "discontinuities"      "derivative"           "norms"               
#> [184] "moment"               "voxel"                "geobugs"             
#> [187] "voxels"               "microstructure"       "midi"                
#> [190] "chromatograms"        "mosler"               "subadditivity"       
#> [193] "cloud"                "lemon"                "squeezer"            
#> [196] "spread"               "strokes"              "clicks"              
#> [199] "kits"                 "imbalances"           "bspmma"              
#> [202] "tails"                "photovoltaics"        "incident"            
#> [205] "vine"                 "character"            "feathers"            
#> [208] "flight"               "re"                   "adaboost"            
#> [211] "mixsmsn"              "hood"                 "sponses"             
#> [214] "escalation"           "cytometry"            "cube"                
#> [217] "calcu"                "lmdme"                "decomposes"          
#> [220] "game"                 "ultimatum"            "likert"              
#> [223] "chunks"               "queries"              "micromapst"          
#> [226] "pressure"             "materials"            "subclasses"          
#> [229] "tawn"                 "moyeed"               "reformulation"       
#> [232] "leo"                  "longitudes"           "latitudes"           
#> [235] "fitdistrplus"         "molitor"              "papathomas"          
#> [238] "label"                "touloumis"            "agresti"             
#> [241] "kateri"               "circumvents"          "batchexperiments"    
#> [244] "haynes"               "mlegp"                "gam"                 
#> [247] "randomization"        "pi"                   "registers"           
#> [250] "optimizes"            "covsel"               "jointness"           
#> [253] "mother"               "child"                "genotype"            
#> [256] "royston"              "flexsurvreg"          "surv"                
#> [259] "outbreaks"            "perspective"          "farrington"          
#> [262] "detectors"            "magis"                "nydick"              
#> [265] "proof"                "bayespop"             "expectancy"          
#> [268] "pyramids"             "rjags"                "organisation"        
#> [271] "promises"             "ontologies"           "reluctance"          
#> [274] "hlme"                 "multlcmm"             "ridges"              
#> [277] "loans"                "plasma"               "clearance"           
#> [280] "humans"               "mstmap"               "lonardi"             
#> [283] "intsvy"               "pisa"                 "timss"               
#> [286] "violates"             "randomlca"            "myocardial"          
#> [289] "infarction"           "identity"             "vnm"                 
#> [292] "teigen"               "mplot"                "mirror"              
#> [295] "heritability"         "plummer"              "rmcfs"               
#> [298] "mcfs"                 "emil"                 "saturation"          
#> [301] "declaration"          "stone"                "salient"             
#> [304] "parameterizations"    "relsurv"              "tensors"             
#> [307] "wraps"                "opening"              "archives"            
#> [310] "convexity"            "geophysics"           "geology"             
#> [313] "hsdar"                "continuum"            "ingredient"          
#> [316] "jones"
```

Split each of those again

``` r
index0 <- which (x$cluster == 0)
index1 <- which (x$cluster == 1)
msub0 <- msub [index0, index0]
msub1 <- msub [index1, index1]
x0 <- dbscan (msub0, eps = 0.03)
cl0 <- rownames (msub0)
split (cl0, f = as.factor (x0$cluster))
#> $`0`
#>   [1] "model"          "data"           "user"           "program"       
#>   [5] "analysis"       "object"         "code"           "order"         
#>   [9] "models"         "interface"      "regression"     "linear"        
#>  [13] "error"          "cluster"        "use"            "clustering"    
#>  [17] "index"          "function"       "statistics"     "server"        
#>  [21] "number"         "java"           "cgi"            "language"      
#>  [25] "process"        "processes"      "likelihood"     "package"       
#>  [29] "tests"          "matrix"         "point"          "estimates"     
#>  [33] "effects"        "poisson"        "standard"       "multivariate"  
#>  [37] "distributions"  "users"          "c"              "variety"       
#>  [41] "survival"       "time"           "distribution"   "study"         
#>  [45] "disease"        "component"      "case"           "software"      
#>  [49] "graph"          "simulation"     "matlab"         "optimal"       
#>  [53] "carlo"          "beta"           "system"         "variables"     
#>  [57] "density"        "t"              "densities"      "problem"       
#>  [61] "r"              "information"    "specification"  "classification"
#>  [65] "test"           "interest"       "framework"      "response"      
#>  [69] "dependence"     "uses"           "estimation"     "literature"    
#>  [73] "parameter"      "sas"            "d"              "structure"     
#>  [77] "theory"         "control"        "estimators"     "space"         
#>  [81] "risk"           "effect"         "estimator"      "procedure"     
#>  [85] "groups"         "comparison"     "sample"         "markov"        
#>  [89] "chain"          "optimization"   "objects"        "range"         
#>  [93] "individual"     "dimension"      "plot"           "principal"     
#>  [97] "mcmc"           "value"          "decomposition"  "selection"     
#> [101] "population"     "modeling"       "class"          "learning"      
#> [105] "threshold"      "state"          "gui"            "commander"     
#> [109] "treatment"      "imputation"     "item"           "irt"           
#> [113] "transition"     "stream"        
#> 
#> $`1`
#>   [1] "quality"       "concentration" "technique"     "building"     
#>   [5] "observation"   "level"         "hand"          "pages"        
#>   [9] "step"          "source"        "script"        "apply"        
#>  [13] "s"             "ratio"         "web"           "computer"     
#>  [17] "file"          "count"         "purpose"       "failure"      
#>  [21] "cause"         "patient"       "em"            "vector"       
#>  [25] "performs"      "points"        "end"           "q"            
#>  [29] "document"      "area"          "y"             "von"          
#>  [33] "gamma"         "k"             "sum"           "region"       
#>  [37] "loss"          "run"           "window"        "text"         
#>  [41] "censoring"     "dirichlet"     "gibbs"         "link"         
#>  [45] "factor"        "bayes"         "combinations"  "contrast"     
#>  [49] "cell"          "counts"        "interval"      "length"       
#>  [53] "simulations"   "behavior"      "type"          "platform"     
#>  [57] "search"        "wavelet"       "reduction"     "inverse"      
#>  [61] "complexity"    "table"         "singular"      "species"      
#>  [65] "vista"         "term"          "association"   "mantel"       
#>  [69] "select"        "forward"       "coefficient"   "group"        
#>  [73] "core"          "stata"         "making"        "science"      
#>  [77] "lattice"       "u"             "format"        "memory"       
#>  [81] "sciences"      "operating"     "curve"         "covariate"    
#>  [85] "accuracy"      "priors"        "score"         "volume"       
#>  [89] "stage"         "student"       "splines"       "phase"        
#>  [93] "batch"         "mode"          "dose"          "pattern"      
#>  [97] "shape"         "feature"       "element"       "anova"        
#> [101] "decision"      "cost"          "resolution"    "date"         
#> [105] "consistency"   "hazard"        "log"           "rank"         
#> [109] "iterative"     "map"           "unit"          "trait"        
#> [113] "subjects"      "location"      "gradient"      "panel"        
#> [117] "block"         "field"         "intensity"     "domain"       
#> [121] "correction"    "color"         "grid"          "situation"    
#> [125] "goal"          "m"             "objective"     "subject"      
#> [129] "copula"        "array"         "reduce"        "line"         
#> [133] "simecol"       "life"          "circular"      "skew"         
#> [137] "path"          "nearest"       "ergm"          "trajectories" 
#> [141] "impute"        "event"         "odds"          "variation"    
#> [145] "intervention"  "equality"      "maximization"  "mm"           
#> [149] "expectation"   "mst"
x1 <- dbscan (msub1, eps = 0.0007)
cl1 <- rownames (msub1)
split (cl1, f = as.factor (x1$cluster))
#> $`0`
#>   [1] "bounds"               "pearson"              "deviance"            
#>   [4] "goodness"             "disk"                 "generator"           
#>   [7] "mod"                  "folds"                "variate"             
#>  [10] "alpha"                "mvn"                  "sigma"               
#>  [13] "int"                  "milton"               "sub"                 
#>  [16] "scoring"              "congruential"         "modulus"             
#>  [19] "fibonacci"            "cryptography"         "ject"                
#>  [22] "row"                  "twoway"               "macros"              
#>  [25] "mondrian"             "loading"              "passing"             
#>  [28] "author"               "researcher"           "mccullagh"           
#>  [31] "g"                    "fourier"              "marsaglia"           
#>  [34] "product"              "pca"                  "tail"                
#>  [37] "similarity"           "obstacle"             "bayesians"           
#>  [40] "nuances"              "default"              "box"                 
#>  [43] "spline"               "indicator"            "parent"              
#>  [46] "haplotype"            "education"            "pair"                
#>  [49] "turn"                 "spectrochromatograms" "elution"             
#>  [52] "analytes"             "products"             "imperfections"       
#>  [55] "start"                "partition"            "surface"             
#>  [58] "underestimation"      "accelerations"        "water"               
#>  [61] "hartigan"             "erdman"               "emerson"             
#>  [64] "orders"               "reactions"            "gillespie"           
#>  [67] "gillespiessa"         "magnitude"            "entries"             
#>  [70] "adjacent"             "pta"                  "neuropsychology"     
#>  [73] "eeg"                  "cns"                  "scene"               
#>  [76] "lagoon"               "mururoa"              "atoll"               
#>  [79] "combine"              "affymetrix"           "millions"            
#>  [82] "hapmap"               "discordance"          "membership"          
#>  [85] "irregularities"       "saddlepoints"         "discontinuities"     
#>  [88] "derivative"           "voxel"                "geobugs"             
#>  [91] "voxels"               "cloud"                "tails"               
#>  [94] "photovoltaics"        "incident"             "vine"                
#>  [97] "feathers"             "flight"               "re"                  
#> [100] "mixsmsn"              "hood"                 "sponses"             
#> [103] "lmdme"                "decomposes"           "chunks"              
#> [106] "queries"              "micromapst"           "leo"                 
#> [109] "longitudes"           "latitudes"            "molitor"             
#> [112] "papathomas"           "label"                "touloumis"           
#> [115] "agresti"              "kateri"               "circumvents"         
#> [118] "gam"                  "randomization"        "pi"                  
#> [121] "mother"               "child"                "genotype"            
#> [124] "royston"              "flexsurvreg"          "surv"                
#> [127] "outbreaks"            "perspective"          "farrington"          
#> [130] "detectors"            "rjags"                "violates"            
#> [133] "randomlca"            "myocardial"           "infarction"          
#> [136] "emil"                
#> 
#> $`1`
#>   [1] "kaufman"           "install"           "year"             
#>   [4] "calibrate"         "origin"            "laird"            
#>   [7] "rubin"             "separation"        "hyperparameter"   
#>  [10] "concentrates"      "nubmer"            "spirit"           
#>  [13] "ridout"            "easton"            "tukey"            
#>  [16] "co"                "symmetry"          "candidates"       
#>  [19] "occurrence"        "jason"             "zeros"            
#>  [22] "width"             "cuestion"          "alters"           
#>  [25] "art"               "infer"             "geography"        
#>  [28] "voting"            "travel"            "consumers"        
#>  [31] "obs"               "tau"               "jackknifed"       
#>  [34] "respondent"        "lee"               "rule"             
#>  [37] "bailer"            "relaimpo"          "mlm"              
#>  [40] "buttons"           "sliders"           "rcdk"             
#>  [43] "cheminformatics"   "pool"              "microscopy"       
#>  [46] "nanosecond"        "inverses"          "meyer"            
#>  [49] "wildlife"          "policies"          "manipulations"    
#>  [52] "biodiversity"      "dispense"          "salesman"         
#>  [55] "returns"           "vehicle"           "attribute"        
#>  [58] "presenceabsence"   "percent"           "hyper"            
#>  [61] "mlds"              "physical"          "coordination"     
#>  [64] "dimatteo"          "sunspot"           "autoregression"   
#>  [67] "inflation"         "fisher"            "powerlib"         
#>  [70] "hotelling"         "majorization"      "stretches"        
#>  [73] "hubert"            "morey"             "mallows"          
#>  [76] "zigams"            "termstrc"          "covariation"      
#>  [79] "tract"             "comp.risk"         "timereg"          
#>  [82] "split"             "marker"            "transversal"      
#>  [85] "views"             "benefit"           "refinement"       
#>  [88] "metaheuristics"    "district"          "norms"            
#>  [91] "moment"            "microstructure"    "midi"             
#>  [94] "chromatograms"     "mosler"            "subadditivity"    
#>  [97] "lemon"             "squeezer"          "spread"           
#> [100] "strokes"           "clicks"            "kits"             
#> [103] "imbalances"        "bspmma"            "character"        
#> [106] "adaboost"          "escalation"        "cytometry"        
#> [109] "cube"              "calcu"             "game"             
#> [112] "ultimatum"         "likert"            "pressure"         
#> [115] "materials"         "subclasses"        "tawn"             
#> [118] "moyeed"            "reformulation"     "fitdistrplus"     
#> [121] "batchexperiments"  "haynes"            "mlegp"            
#> [124] "registers"         "optimizes"         "covsel"           
#> [127] "jointness"         "magis"             "nydick"           
#> [130] "proof"             "bayespop"          "expectancy"       
#> [133] "pyramids"          "organisation"      "promises"         
#> [136] "ontologies"        "reluctance"        "hlme"             
#> [139] "multlcmm"          "ridges"            "loans"            
#> [142] "plasma"            "clearance"         "humans"           
#> [145] "mstmap"            "lonardi"           "intsvy"           
#> [148] "pisa"              "timss"             "identity"         
#> [151] "vnm"               "teigen"            "mplot"            
#> [154] "mirror"            "heritability"      "plummer"          
#> [157] "rmcfs"             "mcfs"              "saturation"       
#> [160] "declaration"       "stone"             "salient"          
#> [163] "parameterizations" "relsurv"           "tensors"          
#> [166] "wraps"             "opening"           "archives"         
#> [169] "convexity"         "geophysics"        "geology"          
#> [172] "hsdar"             "continuum"         "ingredient"       
#> [175] "jones"            
#> 
#> $`2`
#> [1] "ordination" "migrants"   "valand"     "pioneering" "kendall"
```
