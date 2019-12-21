# Summary of currently available metrics for R packages

## 1. From mango's packagemetrics2

[github.com/MangoTheCat/packageMetrics2](https://github.com/MangoTheCat/packageMetrics2)

1. Number of times = is used for assignment
2. Author Test Coverage
3. Number of Downloads
4. Num of Dependencies
5. Number of Reverse-Dependencies
6. Cyclomatic Complexity
7. Average number of code lines per function
8. Date of First Release
9. Number of library and require calls
10. Number of code lines longer than 80 characters
11. Number of lines of compiled code
12. Number of lines of R code
13. Date of Last Release
14. Number of attach and detach calls
15. Number of times T/F is used instead of TRUE/FALSE
16. Updates During the Last 6 Months
17. Whether the package is on GitHub
18. Number of sapply calls
19. Number of trailing semicolons in the code
20. Number of 1:length(vec) expressions
21. Number of setwd calls
22. Number of vignettes

## 2. From pharmar/riskmetric

[github.com/pharmaR/riskmetric](https://github.com/pharmaR/riskmetric), with
detail at
[github.com/pharmaR/pharmaR.github.io/blob/master/content/risk.md](https://github.com/pharmaR/pharmaR.github.io/blob/master/content/risk.md)
and a metrics project board at
[github.com/pharmaR/riskmetric/projects/1](https://github.com/pharmaR/riskmetric/projects/1)

Two categories of metrics:

### Package maintenance

1. Vignette
2. Website
3. Source control (public)
4. Formal bug tracking
5. News
6. Release rate (18 months)
7. Size of codebase (lines of code)
8. License?
9. Author reputation?

### Community Usage and Testing

1. Maturity (package)
2. Maturity (version)
3. Package available from CRAN or Bioconductor
4. Implements a standard unit-testing framework
5. Code coverage
6. Number of reverse dependencies
7. Average downloads in past 12 months (all versions)

Additional current and proposed issues on [github site (Nov 27 2019)](https://github.com/pharmaR/riskmetric/issues)

1. percentage of issues open/closed/with response on bug tracker [#56](https://github.com/pharmaR/riskmetric/issues/56)
2. presence of a maintainer [#55](https://github.com/pharmaR/riskmetric/issues/55)
3. source code repository community enthusiasm [#51](https://github.com/pharmaR/riskmetric/issues/51)
4. developer time to pull request / patch response [#50](https://github.com/pharmaR/riskmetric/issues/50)
5. developer response to community reported issues [#49](https://github.com/pharmaR/riskmetric/issues/49)
6. community engagement in issues [#48](https://github.com/pharmaR/riskmetric/issues/48)
7. examples assessed by code coverage when running only function examples [#44](https://github.com/pharmaR/riskmetric/issues/44)
8. Examples available for exported objects [#43](https://github.com/pharmaR/riskmetric/issues/43)
9. Documentation of function parameters & returned values [#42](https://github.com/pharmaR/riskmetric/issues/42)

## 3. From goodpractice

Direct output of `goodpractice::all_checks()` lists 230 enumerated checks.
Numbers 17--229 (and so 213 of these 230) are `grep`s of all possible warning,
error, and note patterns that can be output from `R CMD check`. These just
redirect the specific output from `R CMD check` to the `goodpractice` output
summary. The remaining 17 checks are:

n | name | description
--- | --- | ---
1  | covr | `covr::package_coverage()`
2  | cyclocomp | `cyclocomp::cyclocomp_package_dir()`
3  | no_description_depends | No "Depends" in DESCR
4  | no_description_date | No "Date" in DESCR
5  | description_url | URL in DESCR
6  | description_bugreports | BugReports in DESCR
7  | lintr_assignment_linter | "<- not ="
8  | lintr_line_length_linter | Hard-coded to 80 characters
9  | lintr_trailing_semicolon_linter | ...;
10  | lintr_attach_detach_linter | No `attach` or `detach` statements
11  | lintr_setwd_linter | No `setwd` statements
12  | lintr_sapply_linter | No `sapply` statements
13  | lintr_library_require_linter | No `require` statements
14  | lintr_seq_linter | No `1:length`, `1:nrow`, `1:ncol`-type expressions
15  | no_import_package_as_a_whole | No whole-package Imports in NAMESPACE
16  | no_export_pattern | No whole-package Exports in NAMESPACE
230  | truefalse_not_tf | Output of `tools::checkTnF()`

## 4. From ropenscilabs/packagemetrics

1. tidyverse_happy (= uses any tidyverse package)
2. has_vignette_build
3. has_tests
4. depends_counts
5. reverse_count
6. dl_last_month
7. forks
8. stars
9. last_commit
10. last_issue_closed

## 5. Other sources and resources

https://github.com/ropenscilabs/checkers

https://github.com/ropenscilabs/gramr
