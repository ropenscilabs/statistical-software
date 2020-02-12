library (cloc)
library (dplyr)

pkgs <- list.files ("<local>/<CRAN>/<archive>", full.names = TRUE)

res <- lapply (pks, function (i) {
                   res <- cloc (file.path (i, "R"))
                   if (file.exists (file.path (i, "src")))
                       res <- rbind (res, cloc (file.path (i, "src")))
                   if (file.exists (file.path (i, "inst")))
                       res <- rbind (res, cloc (file.path (i, "inst")))
                   return (res) })
res <- do.call (rbind, res)

res <- group_by (res, language) %>%
    summarise (loc = sum (loc),
               file_count = sum (file_count),
               comment_lines = sum (comment_lines))
