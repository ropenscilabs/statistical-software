This document explores example categorizations of abstracts from
software or associated manuscripts submitted both to rOpenSci and the
Journal of Open Source Software (JOSS). Categories are considered in two
distinct domains:

1.  Categories of statistical software; and
2.  Categories of statistical standards that may be applied

## Example Categorizations

The categorizations that follow are illustrative only, and are not
intended to be definitive statements of categorization. Rather, they are
intended merely to illustrates the kinds of categories which may be
usefully distinguished and applied.

| software                                                                       | forum    | software categories              | standards categories                                      |
| ------------------------------------------------------------------------------ | -------- | -------------------------------- | --------------------------------------------------------- |
| [`spatialwarnings`](https://github.com/ropensci/software-review/issues/197)    | rOpenSci | workflow                         | numerical, algorithm, method validity, summary stats, viz |
| [`heatwavers`](https://github.com/ropensci/software-review/issues/219)         | rOpenSci | algorithm                        | numerical, algorithm, method validiy                      |
| [`hhi`](https://github.com/ropensci/software-review/issues/275)                | rOpenSci | algorithm                        | numerical, algorithm, viz                                 |
| [`economiccomplexity`](https://github.com/ropensci/software-review/issues/312) | rOpenSci | algorithm, wrapper               | algorithm, method validigy                                |
| [`windfarmGA`](https://github.com/ropensci/software-review/issues/331)         | rOpenSci | (genetic) algorithm              | algorithm                                                 |
| [`gtsummary`](https://github.com/ropensci/software-review/issues/334)          | rOpenSci | workflow, summary stats          | summary stats                                             |
| [`ivis`](https://joss.theoj.org/papers/10.21105/joss.01596)                    | JOSS     | (neural network) algorithm       | algorithm, data, method                                   |
| [`greta`](https://joss.theoj.org/papers/10.21105/joss.01601)                   | JOSS     | wrapper, workflow, summary stats | inference, summary stats                                  |
| [`survPen`](https://joss.theoj.org/papers/10.21105/joss.01434)                 | JOSS     | algorithm                        | algorithm, numerical, methods                             |
| [`smartEDA`](https://joss.theoj.org/papers/10.21105/joss.01509)                | JOSS     | workflow, summary stats          | summary stats                                             |
| [`DscoreApp`](https://joss.theoj.org/papers/10.21105/joss.01764)               | JOSS     | algorithm                        | numerical, algorith, method validity, viz                 |
| [`modelStudio`](https://joss.theoj.org/papers/10.21105/joss.01798)             | JOSS     | workflow, summary stats          | summary stats, viz                                        |
| [`tabula`](https://joss.theoj.org/papers/10.21105/joss.01821)                  | JOSS     | workflow, summary stats          | summary stats, data                                       |

That suffices to estimate what a cross-tabulation of software versus
standards categories might look like:

| Software (down) / Standards (across) | viz | numerical | algorithm | method validity | data | summary stats | inference |  |
| ------------------------------------ | --- | --------- | --------- | --------------- | ---- | ------------- | --------- |  |
| algorithm                            | 2   | 4         | 7         | 5               | 1    | \-            | \-        |  |
| workflow                             | 3   | 1         | 1         | 1               | 1    | 6             | 1         |  |
| wrapper                              | \-  | \-        | 1         | 1               | \-   | 1             | 1         |  |
| summary stats                        | 1   | \-        | \-        | \-              | 1    | 5             | 1         |  |

## Summary

The preceding explorations were intended to reveal what form a potential
cross-tabulation like the above might take. The primary conclusion would
seem to be that such a table can be conceived of and constructed in a
roughly diagonal form (such that the highest entries are on or near the
diagonal), yet that almost any off-diagonal cells may also contain
non-zero values. There is thus a strong relationship between software
and statistical categories, yet the two do differ in potentially
important ways. Notable exceptions in this toy example appear to arise
in regard to standards for *data* and *visualization*.

That table is also useful to indicate the relative commonality of
different categories of software, noting that single software packages
may encompass multiple categories. The *algorithm* category arose 19
times; the *workflow* category 14 times, the *summary stats* category 8
times, and the *wrapper* category 4 times.

# All JOSS Abstracts

Attempted categorisation of *all* JOSS abstracts which might potentially
come within scope (excepting a number of packages which implement
statistical algorithms exclusively to analyse genetic or other molecular
sequences, or (phylo-)genetic trees). The following acronyms are
employed:

  - “EDA”: Exploratory Data Analysis
  - “ML”: Machine Learning

(Note that numbers correspond to the full list of JOSS papers extracted
in
[`get-joss-papers.Rmd`](https://github.com/ropenscilabs/statistical-software/blob/master/abstracts/get-joss-papers.Rmd#L135-L140),
but are markdown-converted here to sequential numbers. For original
enumeration, see the `joss-papersmd-all.html` document produced by
running the entire [`get-joss-papers.Rmd`
script](https://github.com/ropenscilabs/statistical-software/blob/master/abstracts/get-joss-papers.Rmd).)

4.  [`simode`](https://joss.theoj.org/papers/10.21105/joss.01850):
    inference, dynamical systems, likelihood, differential equations;
    input: equations; output: parameter estimates
5.  [`mlr3`](https://joss.theoj.org/papers/10.21105/joss.01903): machine
    learning, workflow; input: parameters; output: trained ML model
6.  [`perccalc`](https://joss.theoj.org/papers/10.21105/joss.01796):
    categorical variables, estimates; input: data.frame; output: numeric
    vectors, parameters
7.  [`xrnet`](https://joss.theoj.org/papers/10.21105/joss.01761):
    regression, high-dimensional data; input: data.frame, parameters;
    output: model estimates
8.  [`univariateML`](https://joss.theoj.org/papers/10.21105/joss.01863):
    estimates, maximum liklihood, probability density, probability
    distributions; input: numeric vector; output: model estimates
9.  [`tabula`](https://joss.theoj.org/papers/10.21105/joss.01821):
    applied statistics, chronology, discrete data, index; input: matrix;
    output: summary statistics, visualization
10. [`memochange`](https://joss.theoj.org/papers/10.21105/joss.01820):
    time series, non-stationarity; input: numeric vector, time series;
    output: summary statistics, model estimates
11. [`hopit`](https://joss.theoj.org/papers/10.21105/joss.01508):
    discrete data, ordered response data, reporting, summary statistics;
    input: data.frame, categorical data; output: model estimates,
    summary statistics
12. [`modelStudio`](https://joss.theoj.org/papers/10.21105/joss.01798):
    machine learning, workflow, EDA; input: data.frame, ML data; output:
    model prediction, visualization
13. [`DscoreApp`](https://joss.theoj.org/papers/10.21105/joss.01764):
    categorical variables, estimates, error estimates; input:
    data.frame, application-specific data format; output: summary
    statistics, visualization
14. [`thurstonianIRT`](https://joss.theoj.org/papers/10.21105/joss.01662):
    latent variables, categorical variables, pairwise comparisons, model
    probability; input: data.frame, categorical data; output: model
    estimates, summary statistics
15. [`molic`](https://joss.theoj.org/papers/10.21105/joss.01665):
    outlier detection, high-dimensional data, networks; input:
    application-specific data format; output: summary statistics, model
    estimates
16. [`kdensity`](https://joss.theoj.org/papers/10.21105/joss.01566):
    non-parametric, density estimator, probability density, probability
    distributions, kernel density, maximum likelihood; input:
    data.frame, numeric vector; output: S3 function
17. [`ccostr`](https://joss.theoj.org/papers/10.21105/joss.01593):
    non-stationarity, estimates, survival; input: numeric vector;
    output: summary statistics
18. [`SmartEDA`](https://joss.theoj.org/papers/10.21105/joss.01509):
    EDA, workflow, variable selection, descriptive statistics,
    information statistics, summary statistics; input: numeric vectors;
    output: summary statistics
19. [`modeLLtest`](https://joss.theoj.org/papers/10.21105/joss.01542):
    model selection, cross-validation, likelihood; input: data.frame,
    formula; output: summary statistics
20. [`survPen`](https://joss.theoj.org/papers/10.21105/joss.01434):
    survival, regression, parameter estimation, multidimensional model,
    splines; input: numeric vector; output: model estimates
21. [`bayestestR`](https://joss.theoj.org/papers/10.21105/joss.01541):
    Bayesian, null-hypothesis testing; input: numeric vectors, formula;
    output: summary statistics
22. [`greta`](https://joss.theoj.org/papers/10.21105/joss.01601):
    Bayesian, Monte Carlo, likelihood; input: numeric vectors, formula;
    output: summary statistics, model prediction
23. [`ivis`](https://joss.theoj.org/papers/10.21105/joss.01596):
    dimensionality reduction, neural network, ML; input: data.frame;
    output: model estimates
24. [`lfda`](https://joss.theoj.org/papers/10.21105/joss.01572):
    dimensionality reduction; input: data.frame; output: model estimates
25. [`tcherry`](https://joss.theoj.org/papers/10.21105/joss.01480):
    trees, networks, maximum likelihood, categorical variables; input:
    data.frame; output: network, adjacency matrix
26. [`fmcmc`](https://joss.theoj.org/papers/10.21105/joss.01427): Monte
    Carlo; input: numeric vector, data.frame; output: model estimates,
    summary statistics
27. [`R-fitODBOD`](https://joss.theoj.org/papers/10.21105/joss.01505):
    binomial distribution, over-dispersion; input: data.frame; output:
    summary statistics
28. [`qtl2pleio`](https://joss.theoj.org/papers/10.21105/joss.01435):
    gene loci, random effects, generalized least squares; input: genetic
    data; output: summary statistics
29. [`modelDown`](https://joss.theoj.org/papers/10.21105/joss.01444):
    ML, summary statistics, graphical output; input: ML data; output:
    summary web page
30. [`insight`](https://joss.theoj.org/papers/10.21105/joss.01412):
    statistical models, summary statistics, algorithm choice; input:
    data.frame, numeric vector; output: summary statistics
31. [`ReinforcementLearning`](https://joss.theoj.org/papers/10.21105/joss.01087):
    reinforcement, ML, sampling, model strategy, dimensionality
    reduction; input: data.frame, numeric vectors; output: model
    estimates, summary statistics
32. [`tsfeaturex`](https://joss.theoj.org/papers/10.21105/joss.01279):
    time series, dimensionality reduction, feature selection; input:
    time series; output: summary statistics, model estimates
33. [`areal`](https://joss.theoj.org/papers/10.21105/joss.01221):
    interpolation, areal weights; input: spatial data; output: model
    estimates
34. [`riskclustr`](https://joss.theoj.org/papers/10.21105/joss.01269):
    risk, clustering, dimensionality reduction; input: data.frame,
    numeric vectors; output: summary statistics, model estimates
35. [`ChiRP`](https://joss.theoj.org/papers/10.21105/joss.01287): Monte
    Carlo, regression, clustering; input: data.frame, numeric vectors;
    output: model estimates
36. [`klrfome`](https://joss.theoj.org/papers/10.21105/joss.00722):
    kernel density, kernel logistic regression, spatial, areal
    statistics, similarity statistics, focal windows; input: data.frame;
    output: summary statistics
37. [`BoltzMM`](https://joss.theoj.org/papers/10.21105/joss.01193): ML,
    probability density, probability distributions, matrix algebra;
    input: binary vectors; output: summary statistics, probability
38. [`polyCub`](https://joss.theoj.org/papers/10.21105/joss.01056):
    integration, cubature; input: numeric vector; output: summary
    statistics
39. [`mbir`](https://joss.theoj.org/papers/10.21105/joss.00746):
    inference, effect sizes, test selection; input: numeric vectors;
    output: statistical parameters, summary statistics
40. [`arviz`](https://joss.theoj.org/papers/10.21105/joss.01143):
    Bayesian, model selection, EDA; input: ML data, data.frame; output:
    summary statistics
41. [`overlapping`](https://joss.theoj.org/papers/10.21105/joss.01023):
    kernel density, probability distributions; input: numeric vectors;
    output: summary statistics
42. [`iRF`](https://joss.theoj.org/papers/10.21105/joss.01077): random
    forests, dimensionality reduction; input: ML data; output: model
    estimates
43. [`qsort`](https://joss.theoj.org/papers/10.21105/joss.00911):
    categorical variables; input: application-specific data format;
    output: model estimates
44. [`ssdtools`](https://joss.theoj.org/papers/10.21105/joss.01082):
    probability distributions, information statistics, confidence
    intervals, maximum likelihood; input: data.frame; output: model
    estimates
45. [`gravity`](https://joss.theoj.org/papers/10.21105/joss.01038):
    probability distributions, regression; input: data.frame; output:
    model estimates, summary statistics
46. [`survxai`](https://joss.theoj.org/papers/10.21105/joss.00961): ML,
    regression, model selection, survival, visualization; input: ML
    data; output: summary statistics, reports
47. [`rr2`](https://joss.theoj.org/papers/10.21105/joss.01028):
    correlation, variance; input: numeric vectors; output: summary
    statistics
48. [`dml`](https://joss.theoj.org/papers/10.21105/joss.01036): ML,
    distance metrics; input: data.frame; output: summary statistics
49. [`data.adapt.multi.test`](https://joss.theoj.org/papers/10.21105/joss.00161):
    inference, effect sizes, dimensionality reduction; input:
    data.frame, ML data; output: summary statistics
50. [`compboost`](https://joss.theoj.org/papers/10.21105/joss.00967):
    dimensionality reduction, feature selection, regression, splines,
    visualization, survival, functional data analysis; input:
    data.frame; output: model prediction, summary statistics
51. [`multistateutils`](https://joss.theoj.org/papers/10.21105/joss.00893):
    discrete data, multi-state model, survival; input: numeric &
    categorical variables; output: model estimates, model predictions
52. [`ungroup`](https://joss.theoj.org/papers/10.21105/joss.00937):
    histograms, grouped data, latent variables, regression; input:
    binned data; output: model estimates
53. [`blendR`](https://joss.theoj.org/papers/10.21105/joss.00886):
    sampling, probability density, probability distributions, estimates,
    bias; input: numeric vectors; output: summary statistics
54. [`TDAstats`](https://joss.theoj.org/papers/10.21105/joss.00860):
    dimensionality reduction, feature selection, workflow; input:
    data.frame, numeric variables; output: model estimates, summary
    statistics
55. [`hhi`](https://joss.theoj.org/papers/10.21105/joss.00828): index,
    visualization, overlap; input: data.frame, numeric variables;
    output: summary statistics, visualization
56. [`logKDE`](https://joss.theoj.org/papers/10.21105/joss.00870): EDA,
    density estimator, kernel density; input: data.frame, numeric
    variables; output: model estimates
57. [`ggeffects`](https://joss.theoj.org/papers/10.21105/joss.00772):
    regression, interaction terms, marginal effects; input: data.frame,
    numeric variables; output: summary statistics, model predictions
58. [`iml`](https://joss.theoj.org/papers/10.21105/joss.00786): ML,
    feature selection; input: ML data; output: model estimates
59. [`rsimsum`](https://joss.theoj.org/papers/10.21105/joss.00739):
    Monte Carlo, estimates, simulation; input: data.frame, ML data;
    output: summary statistics, visualization
60. [`philentropy`](https://joss.theoj.org/papers/10.21105/joss.00765):
    similarity statistics, distance metrics; input: numeric variables,
    data.frame; output: summary statistics
61. [`disclapmix`](https://joss.theoj.org/papers/10.21105/joss.00748):
    probability distributions; input: application-specific data; output:
    probability estimates, model estimates, summary statistics
62. [`qicharts2`](https://joss.theoj.org/papers/10.21105/joss.00699):
    networks, stationarity; input: data.frame; output: summary
    statistics, visualization
63. [`scanstatistics`](https://joss.theoj.org/papers/10.21105/joss.00515):
    spatial, clustering; input: data.frame; output: summary statistics
64. [`humanleague`](https://joss.theoj.org/papers/10.21105/joss.00629):
    synthetic data, probability distributions, sampling; input:
    parameters; output: populations
65. [`autoplotly`](https://joss.theoj.org/papers/10.21105/joss.00657):
    workflow, data transformation, visualization; input: data.frame,
    numeric variables; output: visualization
66. [`MCMCvis`](https://joss.theoj.org/papers/10.21105/joss.00640):
    Monte Carlo, summary statistics; input: data.frame, ML data; output:
    summary statistics
67. [`comorbidity`](https://joss.theoj.org/papers/10.21105/joss.00648):
    categorical variables, index; input: data.frame; output: model
    estimates
68. [`vtreat`](https://joss.theoj.org/papers/10.21105/joss.00584): ML,
    data preparation, missing value processing, categorical variables;
    input: data.frame; output: transformed data.frame
69. [`coalitions`](https://joss.theoj.org/papers/10.21105/joss.00606):
    uncertainty, redistribution, threshold, aggregation, Monte Carlo,
    Bayesian; input: data.frame; output: model prediction
70. [`ivprobit-1.0`](https://joss.theoj.org/papers/10.21105/joss.00523):
    probit model, misspecification; input: data.frame; output: model
    estimates, summary statistics
71. [`registr`](https://joss.theoj.org/papers/10.21105/joss.00557):
    functional data analysis, regression, warping; input: time series;
    output: model estimates
72. [`grapherator`](https://joss.theoj.org/papers/10.21105/joss.00528):
    networks, optimization, benchmarking; input: parameters; output:
    custom graph format
73. [`EFAshiny`](https://joss.theoj.org/papers/10.21105/joss.00567):
    EDA, factor analysis, visualization; input: data.frame; output:
    web-based visualization
74. [`reper`](https://joss.theoj.org/papers/10.21105/joss.00527):
    annotation, classification; input: application-specific data format;
    output: application-specific data format
75. [`psycho.R`](https://joss.theoj.org/papers/10.21105/joss.00470):
    reporting, model selection; input: data.frame, arbitrary data;
    output: summary statistics, visualization
76. [`origami`](https://joss.theoj.org/papers/10.21105/joss.00512):
    cross-validation, ML; input: data.frame; output: model prediction
77. [`GammaGompertzCR`](https://joss.theoj.org/papers/10.21105/joss.00216):
    survival, Bayesian, Monte Carlo; input: matrix; output: model
    prediction
78. [`BayesianNetwork`](https://joss.theoj.org/papers/10.21105/joss.00425):
    Bayesian, networks, ML; input: application-specific data format;
    output: summary statistics, visualization
79. [`hei`](https://joss.theoj.org/papers/10.21105/joss.00417): index;
    input: data.frame, application-specific data format; output: index
    scores
80. [`mcMST`](https://joss.theoj.org/papers/10.21105/joss.00374):
    networks, optimization; input: application-specific data format,
    graph; output: application-specific data format, graph
81. [`varistran`](https://joss.theoj.org/papers/10.21105/joss.00257):
    noise, variance; input: application-specific data format; output:
    summary statistics, model estimates, visualization
82. [`biotmle`](https://joss.theoj.org/papers/10.21105/joss.00295):
    optimization, covariates; input: application-specific data format;
    output: summary statistics, visualization
83. [`learningCurve`](https://joss.theoj.org/papers/10.21105/joss.00202):
    learning curve, estimates, aggregation; input: data.frame; output:
    model estimates
84. [`walkr`](https://joss.theoj.org/papers/10.21105/joss.00061): Monte
    Carlo, spatial, sampling, dimensionality reduction; input: matrix,
    data.frame; output: model estimates, summary statistics
85. [`remBoot`](https://joss.theoj.org/papers/10.21105/joss.00176):
    synthetic data, variance; input: data.frame; output: model estimates
86. [`KraljicMatrix`](https://joss.theoj.org/papers/10.21105/joss.00170):
    sensitivity, matrix algebra; input: data.frame; output: summary
    statistics, model prediction
87. [`nse`](https://joss.theoj.org/papers/10.21105/joss.00172): standard
    error, estimates; input: data.frame, numeric vectors; output:
    summary statistics
88. [`RiskPortfolios`](https://joss.theoj.org/papers/10.21105/joss.00171):
    risk, variance, covariance; input: data.frame, numeric vectors;
    output: model estimates, summary statistics
89. [`vbvs.concurrent`](https://joss.theoj.org/papers/10.21105/joss.00141):
    functional data analysis, Bayesian; input: data.frame, time series;
    output: model predictions, summary statistics
90. [`rucrdtw`](https://joss.theoj.org/papers/10.21105/joss.00100):
    warping, time series; input: time series; output: model estimates
91. [`CTLmapping`](https://joss.theoj.org/papers/10.21105/joss.00087):
    correlation, ANCOVA; input: application-specific data format;
    output: summary statistics
92. [`edarf`](https://joss.theoj.org/papers/10.21105/joss.00092): EDA,
    random forests, covariates, trees; input: data.frame; output: model
    prediction
93. [`gwdegree`](https://joss.theoj.org/papers/10.21105/joss.00036):
    networks, maximum entropy; input: application-specific data format;
    output: summary statistics

Then internally analyse this script to extract the statistical terms,
and the input and output data types.

``` r
x <- readLines ("categories.Rmd")
x <- x [grep ("[0-9]*\\. \\[", x)]
names <- vapply (x, function (i) {
                     res <- strsplit (i, "\\[\\`") [[1]]
                     strsplit (res, "\\`\\]") [[2]] [1] },
                     character (1),
                     USE.NAMES = FALSE)
terms <- lapply (x, function (i) {
                 res <- strsplit (i, ":\\s") [[1]] [2]
                 res <- strsplit (res, ";\\s") [[1]] [1] # rm "; input"
                 strsplit (res, ",\\s") [[1]]   })
input <- lapply (x, function (i) {
                     res <- strsplit (i, "input: ") [[1]] [2]
                     res <- strsplit (res, ";\\s") [[1]] [1]
                     if (grepl (",\\s", res))
                         res <- strsplit (res, ",\\s") [[1]]
                     return (res)   })
output <- lapply (x, function (i) {
                     res <- strsplit (i, "output: ") [[1]] [2]
                     if (grepl (",\\s", res))
                         res <- strsplit (res, ",\\s") [[1]]
                     return (res)   })
names (terms) <- names (input) <- names (output) <- names
knitr::kable (table (unlist (terms)))
```

| Var1                       | Freq |
| :------------------------- | ---: |
| aggregation                |    2 |
| algorithm choice           |    1 |
| ANCOVA                     |    1 |
| annotation                 |    1 |
| applied statistics         |    1 |
| areal statistics           |    1 |
| areal weights              |    1 |
| Bayesian                   |    7 |
| benchmarking               |    1 |
| bias                       |    1 |
| binomial distribution      |    1 |
| categorical variables      |    7 |
| chronology                 |    1 |
| classification             |    1 |
| clustering                 |    3 |
| confidence intervals       |    1 |
| correlation                |    2 |
| covariance                 |    1 |
| covariates                 |    2 |
| cross-validation           |    2 |
| cubature                   |    1 |
| data preparation           |    1 |
| data transformation        |    1 |
| density estimator          |    2 |
| descriptive statistics     |    1 |
| differential equations     |    1 |
| dimensionality reduction   |   10 |
| discrete data              |    3 |
| distance metrics           |    2 |
| dynamical systems          |    1 |
| EDA                        |    6 |
| effect sizes               |    2 |
| error estimates            |    1 |
| estimates                  |    8 |
| factor analysis            |    1 |
| feature selection          |    4 |
| focal windows              |    1 |
| functional data analysis   |    3 |
| gene loci                  |    1 |
| generalized least squares  |    1 |
| graphical output           |    1 |
| grouped data               |    1 |
| high-dimensional data      |    2 |
| histograms                 |    1 |
| index                      |    4 |
| inference                  |    3 |
| information statistics     |    2 |
| integration                |    1 |
| interaction terms          |    1 |
| interpolation              |    1 |
| kernel density             |    4 |
| kernel logistic regression |    1 |
| latent variables           |    2 |
| learning curve             |    1 |
| likelihood                 |    3 |
| machine learning           |    2 |
| marginal effects           |    1 |
| matrix algebra             |    2 |
| maximum entropy            |    1 |
| maximum likelihood         |    3 |
| maximum liklihood          |    1 |
| missing value processing   |    1 |
| misspecification           |    1 |
| ML                         |   10 |
| model probability          |    1 |
| model selection            |    4 |
| model strategy             |    1 |
| Monte Carlo                |    8 |
| multi-state model          |    1 |
| multidimensional model     |    1 |
| networks                   |    7 |
| neural network             |    1 |
| noise                      |    1 |
| non-parametric             |    1 |
| non-stationarity           |    2 |
| null-hypothesis testing    |    1 |
| optimization               |    3 |
| ordered response data      |    1 |
| outlier detection          |    1 |
| over-dispersion            |    1 |
| overlap                    |    1 |
| pairwise comparisons       |    1 |
| parameter estimation       |    1 |
| probability density        |    4 |
| probability distributions  |    9 |
| probit model               |    1 |
| random effects             |    1 |
| random forests             |    2 |
| redistribution             |    1 |
| regression                 |    9 |
| reinforcement              |    1 |
| reporting                  |    2 |
| risk                       |    2 |
| sampling                   |    4 |
| sensitivity                |    1 |
| similarity statistics      |    2 |
| simulation                 |    1 |
| spatial                    |    3 |
| splines                    |    2 |
| standard error             |    1 |
| stationarity               |    1 |
| statistical models         |    1 |
| summary statistics         |    5 |
| survival                   |    6 |
| synthetic data             |    2 |
| test selection             |    1 |
| threshold                  |    1 |
| time series                |    3 |
| trees                      |    2 |
| uncertainty                |    1 |
| variable selection         |    1 |
| variance                   |    4 |
| visualization              |    5 |
| warping                    |    2 |
| workflow                   |    5 |

Then convert to `visNetwork` nodes and edges tables:

``` r
library (dplyr)
#> 
#> Attaching package: 'dplyr'
#> The following objects are masked from 'package:stats':
#> 
#>     filter, lag
#> The following objects are masked from 'package:base':
#> 
#>     intersect, setdiff, setequal, union
library (igraph)
#> 
#> Attaching package: 'igraph'
#> The following objects are masked from 'package:dplyr':
#> 
#>     as_data_frame, groups, union
#> The following objects are masked from 'package:stats':
#> 
#>     decompose, spectrum
#> The following object is masked from 'package:base':
#> 
#>     union
nodes <- table (unlist (terms))
nodes <- data.frame (id = names (nodes),
                     label = names (nodes),
                     value = as.integer (nodes),
                     stringsAsFactors = FALSE)
edges <- lapply (terms, function (i) {
                     if (length (i) > 1) {
                         res <- sort (i)
                         n <- combn (seq_along (res), 2)
                         cbind (res [n [1, ]],
                                res [n [2, ]])
                     }  })
edges <- do.call (rbind, edges)
edges <- data.frame (from = edges [, 1],
                     to = edges [, 2],
                     stringsAsFactors = FALSE) %>%
    group_by (from, to) %>%
    summarise (width = length (from))
# Remove isolated edges:
# annotation, areal weights, binomial distribution, cubature, gene loci,
# generalized least squares, misspecification, classification, interpolation,
# over-dispersion, integration, random effects, probit model
cl <- graph_from_data_frame (edges) %>%
    clusters ()
out <- names (cl$membership [which (cl$membership != which.max (cl$csize))])
nodes <- nodes [which (!nodes$id %in% out), ]
edges <- edges [which (!(edges$from %in% out | edges$to %in% out)), ]
```

``` r
library (visNetwork)
visNetwork (nodes, edges)
```

<img src="figures/visNetwork-1.png" width="100%" />

or a manually-coded version, starting by converting node IDs and edge
(from, to) to integer values:

``` r
nodes$id <- seq_along (nodes$id)
edges$from <- nodes$id [match (edges$from, nodes$label)]
edges$to <- nodes$id [match (edges$to, nodes$label)]
```

``` r
index <- c ("<!--",
            "https://visjs.github.io/vis-network/examples/",
            "-->",
            "",
            "<!doctype html>",
            "<html>",
            "<head>",
            "   <meta charset=\"utf-8\" />",
            "   <title>Statistical Software Terms</title>",
            "   <script type=\"text/javascript\"",
            "       src=\"https://unpkg.com/vis-network/standalone/umd/vis-network.min.js\"></script>",
            "   <style type=\"text/css\">",
            "       html,",
            "       body {",
            "           font: 12pt arial;",
            "       }",
            "       #mynetwork {",
            "           width: \"100%\";",
            "           height: 90vh;",
            "           border: 1px solid lightgray;",
            "       }",
            "       code {",
            "           font-size: 15px;",
            "       }",
            "       indented {",
            "           margin-left: 30px;",
            "       }",
            "   </style>",
            "",
            "</head>",
            "",
            "<body>",
            "",
            "   <p>",
            "       Network connections between statistical terms used in JOSS papers.",
            "       Network magic courtesy of ",
            "       <a target=\"_blank\" rel=\"noopener noreferrer\"",
            "           href=\"https://github.com/visjs/vis-network\">",
            "           visjs/vis-network</a>, with",
            "       <a target=\"_blank\" rel=\"noopener noreferrer\"",
            "           href=\"https://github.com/ropenscilabs/statistical-software/blob/master/abstracts/categories.Rmd\">",
            "           code here</a>.",
            "   </p>",
            "   <div id=\"mynetwork\"></div>",
            "",
            "   <script src=\"mynetwork.js\" type=\"text/javascript\"></script>",
            "</body>",
            "</html>")
con <- file ("network-terms/index.html", "w")
writeLines (index, con = con)
close (con)
```

``` r
out <- c ("var", 
          "   GREEN = \"rgba(0,255,150,0.8)\",",
          "   RED = \"rgba(255,50,0,0.8)\",",
          "   BLUE = \"rgba(0,150,255,0.8)\",",
          "   ORANGE = \"orange\";", "", "",
          "var nodes = new vis.DataSet([")
for (i in seq (nrow (nodes))) {
    out <- c (out,
              paste0 ("    { id: ", nodes$id [i], ","),
              paste0 ("      value: ", nodes$value [i], ","),
              paste0 ("      label: \"", nodes$label [i], "\" },"))
}
# rm terminal comma:
out [length (out)] <- gsub ("\\}\\,", "}", out [length (out)])
out <- c (out, "]);",
          "", "", "",
          "var edges = new vis.DataSet([")
for (i in seq (nrow (edges))) {
    out <- c (out,
              paste0 ("    { from: ", edges$from [i], ","),
              paste0 ("      to: ", edges$to [i], ","),
              paste0 ("      value: ", edges$width [i], " },"))
}
out [length (out)] <- gsub ("\\}\\,", "}", out [length (out)])

# remaining code:
out <- c (out,
          "]);", "", "", "",
          "var container = document.getElementById(\"mynetwork\");",
          "var data = {",
          "  nodes: nodes,",
          "  edges: edges",
          "};",
          "var options = {",
          "  nodes: {",
          "      shape: \"dot\",",
          "      scaling: {",
          "          customScalingFunction: function(min, max, total, value) {",
          "              return value / total;",
          "          },",
          "          min: 5,",
          "          max: 1000,",
          "      },",
          "      shadow: true",
          "  },",
          "  edges: {",
          "    shadow: true,",
          "    smooth: true",
          "  },",
          "  physics: {",
          "    barnesHut: { gravitationalConstant: -20000 },",
          "    stabilization: { iterations: 2500 }",
          "  }",
          "};",
          "",
          "var network = new vis.Network(container, data, options);",
          "",
          "network.on(\"click\", function(params) {",
          "    var node = nodes.get(params.nodes[0]);",
          "    if (typeof node.URL != 'undefined') {",
          "        window.open(node.URL,'_blank');",
          "    }",
          "});")
con <- file ("network-terms/mynetwork.js", "w")
writeLines (out, con = con)
close (con)
```

## Input-Output Relationships

Then do a similar network analysis relating input and output data forms

``` r
library (dplyr)
terms <- table (c (unlist (input), unlist (output)))
nodes <- data.frame (id = seq_along (terms),
                     label = names (terms),
                     value = as.integer (terms),
                     stringsAsFactors = FALSE)
edges <- list ()
for (i in seq_along (input))
    edges [[i]] <- expand.grid (input [[i]], output [[i]])
edges <- do.call (rbind, edges) %>%
    data.frame (from = .$Var1,
                to = .$Var2) %>%
    group_by (from, to) %>%
    summarise (width = length (from))
edges$from <- nodes$id [match (edges$from, nodes$label)]
edges$to <- nodes$id [match (edges$to, nodes$label)]
# remove isolated edges:
cl <- graph_from_data_frame (edges) %>%
    clusters ()
out <- names (cl$membership [which (cl$membership != which.max (cl$csize))])
nodes <- nodes [which (!nodes$id %in% out), ]
edges <- edges [which (!(edges$from %in% out | edges$to %in% out)), ]
```

``` r
index <- c ("<!--",
            "https://visjs.github.io/vis-network/examples/",
            "-->",
            "",
            "<!doctype html>",
            "<html>",
            "<head>",
            "   <meta charset=\"utf-8\" />",
            "   <title>Statistical Software I/O</title>",
            "   <script type=\"text/javascript\"",
            "       src=\"https://unpkg.com/vis-network/standalone/umd/vis-network.min.js\"></script>",
            "   <style type=\"text/css\">",
            "       html,",
            "       body {",
            "           font: 12pt arial;",
            "       }",
            "       #mynetwork {",
            "           width: \"100%\";",
            "           height: 90vh;",
            "           border: 1px solid lightgray;",
            "       }",
            "       code {",
            "           font-size: 15px;",
            "       }",
            "       indented {",
            "           margin-left: 30px;",
            "       }",
            "   </style>",
            "",
            "</head>",
            "",
            "<body>",
            "",
            "   <p>",
            "       Network connections between input and output data used in JOSS software",
            "       Network magic courtesy of ",
            "       <a target=\"_blank\" rel=\"noopener noreferrer\"",
            "           href=\"https://github.com/visjs/vis-network\">",
            "           visjs/vis-network</a>, with",
            "       <a target=\"_blank\" rel=\"noopener noreferrer\"",
            "           href=\"https://github.com/ropenscilabs/statistical-software/blob/master/abstracts/categories.Rmd\">",
            "           code here</a>.",
            "   </p>",
            "   <div id=\"mynetwork\"></div>",
            "",
            "   <script src=\"mynetwork.js\" type=\"text/javascript\"></script>",
            "</body>",
            "</html>")
con <- file ("network-io/index.html", "w")
writeLines (index, con = con)
close (con)
```

``` r
out <- c ("var", 
          "   GREEN = \"rgba(0,255,150,0.8)\",",
          "   RED = \"rgba(255,50,0,0.8)\",",
          "   BLUE = \"rgba(0,150,255,0.8)\",",
          "   ORANGE = \"orange\";", "", "",
          "var nodes = new vis.DataSet([")
for (i in seq (nrow (nodes))) {
    out <- c (out,
              paste0 ("    { id: ", nodes$id [i], ","),
              paste0 ("      value: ", nodes$value [i], ","),
              paste0 ("      label: \"", nodes$label [i], "\" },"))
}
# rm terminal comma:
out [length (out)] <- gsub ("\\}\\,", "}", out [length (out)])
out <- c (out, "]);",
          "", "", "",
          "var edges = new vis.DataSet([")
for (i in seq (nrow (edges))) {
    out <- c (out,
              paste0 ("    { from: ", edges$from [i], ","),
              paste0 ("      to: ", edges$to [i], ","),
              paste0 ("      arrows: \"to\","),
              paste0 ("      value: ", edges$width [i], " },"))
}
out [length (out)] <- gsub ("\\}\\,", "}", out [length (out)])

# remaining code:
out <- c (out,
          "]);", "", "", "",
          "var container = document.getElementById(\"mynetwork\");",
          "var data = {",
          "  nodes: nodes,",
          "  edges: edges",
          "};",
          "var options = {",
          "  nodes: {",
          "      shape: \"dot\",",
          "      scaling: {",
          "          customScalingFunction: function(min, max, total, value) {",
          "              return value / total;",
          "          },",
          "          min: 5,",
          "          max: 500,",
          "      },",
          "      shadow: true",
          "  },",
          "  edges: {",
          "    shadow: true,",
          "    smooth: true",
          "  },",
          "  physics: {",
          "    barnesHut: { gravitationalConstant: -20000 },",
          "    stabilization: { iterations: 2500 }",
          "  }",
          "};",
          "",
          "var network = new vis.Network(container, data, options);",
          "",
          "network.on(\"click\", function(params) {",
          "    var node = nodes.get(params.nodes[0]);",
          "    if (typeof node.URL != 'undefined') {",
          "        window.open(node.URL,'_blank');",
          "    }",
          "});")
con <- file ("network-io/mynetwork.js", "w")
writeLines (out, con = con)
close (con)
```
