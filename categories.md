# Categories of Statistical Software

# Primary Categories

We have identified the following primary categories of statistical
software, the current intention of which is twofold:

1.  To guide decisions of which categories (or sub-components) may or
    may not be in scope; and
2.  To relate these categories to corresponding standards.

These categories ought not be considered in any way mutually exclusive,
and it is very likely that any individual piece of software will be
described by multiple categories. Decisions of whether a particular
piece of software is described by any particular category will also
generally involve some degree of ambiguity. These categories have been
identified through empirical analyses of both software and conference
presentations from the following sources:

1.  All software packages published as articles in both the Journal of
    Statistical Software and the Journal of Open Source Software.
2.  All software presented at Joint Statistical Meetings (JSMs) 2018 and
    2019, or Symposia on Data Science and Statistics (SDSS) 2018, 2019,
    and 2020.
3.  All conference sessions and associated abstracts from JSM 2018 and
    2019, and SDSS 2018, 2019, and 2020.
4.  All CRAN Task Views, and perusal of R packages mentioned therein.

Several descriptions and graphical representations of these raw data are
included in the main [github
repository](https://github.com/ropenscilabs/statistical-software)
containing this document. The following categorical descriptions are
based primarily on examples which serve to illustrates the kinds of
ambiguities and difficulties likely to arise in establishing and
delineating the respective categories, and accordingly to guide the
construction of standards corresponding to each category.

## Methods and Algorithms

This main category encompasses all software which implements statistical
methods and algorithms. See below in the [“Raw Data”](#raw-data) section
for details of the myriad of potential sub-categories of statistical
methods and algorithms. There are a number of sub-categories which some
may consider effectively independent, or otherwise beyond the general
scope of “Methods and Algorithms”, yet which we consider under this
single category because of perceived inability to provide sufficient
categorical distinction. These include:

1.  Network software, either for representing, processing, visualising,
    or analysing networks. Ambiguous examples of such include
    [`tcherry`](https://github.com/nvihrs14/tcherry) (with accompanying
    [JOSS paper](https://joss.theoj.org/papers/10.21105/joss.01480));
    [`grapherator`](https://github.com/jakobbossek/grapherator) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.00528)) which is
    effectively a distribution generator for data represented in a
    particular format; and three JSM presentations, one on
    [network-based clustering of high-dimensional
    data](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=327171),
    one on [community structure in dynamic
    networks](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=328764);
    and one on [Gaussian graphical
    models](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=328764).
2.  Software for analysing categorical or qualitative data, which can
    not be unambiguously distinguished because many methods for
    dimensionality reduction, and particularly clustering methods,
    effectively transform data to categorical forms for subsequent
    (post-)processing.
3.  Spatial software, because spatial statistics are often analogous to
    non-spatial statistics, yet merely differ by being bound two two
    orthogonal dimensions (arbitrary numbers of additional dimensions
    notwithstanding).

We have also prepared an interactive [network
diagram](https://ropenscilabs.github.io/statistical-software/abstracts/network-terms/)
with nodes representing statistical terms scaled by approximate
frequencies of occurrence within JOSS papers, and edges between each
pair of nodes scaled according to numbers of JOSS papers which encompass
those two terms or concepts. This diagram immediately illustrates the
entangled nature of categorical definitions within contemporary
statistical software, and provides a strong argument against attempts to
distinguish sub-categories.

## Workflow

This category encompasses software which is more aimed at supporting
common statistical *workflows* than direct analysis. The primary
development effort for software in this category is presumed *not* to be
the implementation of particular statistical methods or algorithms,
rather the algorithmic support of general statistical workflows. Whereas
software in the preceding category may ultimately yield one or more
specific models or statistical values, workflow software generally
provides more than one of the following:

1.  Classes (whether explicit or not) for representing or processing
    input and output data;
2.  Generic interfaces to multiple statistical methods or algorithms;
3.  Homogeneous reporting of the results of a variety of methods or
    algorithms; and
4.  Methods to synthesise, visualise, or otherwise collectively report
    on analytic results.

Methods and Algorithms software may only provide a specific interface to
a specific method or algorithm, although it may also be more general and
offer several of the above “workflow” aspects, and so ambiguity may
often arise between these two categories. We note in particular that the
“workflow” node in the [interactive network
diagram](https://ropenscilabs.github.io/statistical-software/abstracts/network-terms/)
mentioned above is very strongly connected to the “machine learning”
node, generally reflecting software which attempts to unify varied
interfaces to varied platforms for machine learning.

Among the numerous examples of software in this category are:

1.  The [`mlr3` package](https://github.com/mlr-org/mlr3) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.01903)), which
    provides, “A modern object-oriented machine learning framework in
    R.”
2.  The [`fmcmc` package](https://github.com/USCbiostats/fmcmc) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.01427)), which
    provides a unified framework and workflow for Markov-Chain Monte
    Carlo analyses.
3.  The [`bayestestR` package](https://github.com/easystats/bayestestR)
    (with accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.01541)) for
    "describing effects and their uncertainty, existence and
    significance within the Bayesian framework. While this packages
    includes its own algorithmic implementations, it is primarily
    intended to aid general Bayesian workflows through a unified
    interface.

Workflows are also commonly required and developed for specific areas of
application, as exemplified by the [`tabular`
package](https://github.com/nfrerebeau/tabula) (with accompanying [JOSS
article](https://joss.theoj.org/papers/10.21105/joss.01821)) for
“Analysis, Seriation, and visualisation of Archaeological Count Data”.

## Statistical Reporting and Meta-Software

Many packages aim to simplify and facilitate the reporting of complex
statistical results. Such reporting commonly involves visualisation, and
there is direct overlap between this and the Visualisation category.
Examples of this category include one package rejected by rOpenSci as
out-of-scope, [`gtsummary`](https://github.com/ddsjoberg/gtsummary),
which provides, “Presentation-ready data summary and analytic result
tables.” Other examples include:

1.  The [`smartEDA` package](https://github.com/daya6489/SmartEDA) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.01509)) “for
    automated exploratory data analysis”. The package, “automatically
    selects the variables and performs the related descriptive
    statistics. Moreover, it also analyzes the information value, the
    weight of evidence, custom tables, summary statistics, and performs
    graphical techniques for both numeric and categorical variables.”
    This package is potentially as much a workflow package as it is a
    statistical reporting package, and illustrates the ambiguity between
    these two categories.
2.  The [`modeLLtest`
    package](https://github.com/ShanaScogin/modeLLtest) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.01542)) is “An R
    Package for Unbiased Model Comparison using Cross Validation.” Its
    main functionality allows different statistical models to be
    compared, likely implying that this represents a kind of meta
    package.
3.  The [`insight` package](https://github.com/easystats/insight) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.01412)) provides
    “a unified interface to access information from model objects in
    R,” with a strong focus on unified and consistent reporting of
    statistical results.
4.  The [`arviz` software for
    python](https://github.com/arviz-devs/arviz) (with accompanying
    [JOSS paper](https://joss.theoj.org/papers/10.21105/joss.01143))
    provides “a unified library for exploratory analysis of Bayesian
    models in Python.”
5.  The [`iRF` package](https://github.com/sumbose/iRF) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.01077)) enables
    “extracting interactions from random forests”, yet also focusses
    primarily on enabling interpretation of random forests through
    reporting on interaction terms.

## Education

See [CRAN Task View: Teaching
Statistics](https://cran.r-project.org/web/views/TeachingStatistics.html).
A prominent example of this category is the [`LearnBayes`
package](https://cran.r-project.org/web/packages/LearnBayes/index.html),
which provides functions for learning Bayesian inference, and includes
many of its own implementations.

## Visualisation

While many may consider software primarily aimed at visualisation to be
out of scope, there are nevertheless cases which may indeed be within
scope, notably including the [`ggfortify`
package](https://github.com/sinhrks/ggfortify) which allows results of
statistical tests to be “automatically” visualised using the [`ggplot2`
package](https://ggplot2.tidyverse.org/). The list of “fortified”
functions on the packages
[webpage](https://github.com/sinhrks/ggfortify) clearly indicates the
very predominantly statistical scope of this software which is in effect
a package for statistical reporting, yet in visual rather than tabular
form. Other examples of visualisation software include:

1.  [`modelStudio`](https://github.com/ModelOriented/modelStudio) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.01798)), a
    package which is also very much a workflow package.
2.  The [`shinyEFA` package](https://github.com/PsyChiLin/EFAshiny)
    (with accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.00567)) which
    provides a, “User-Friendly Shiny Application for Exploratory Factor
    Analysis.”
3.  The [`autoplotly`
    package](https://github.com/terrytangyuan/autoplotly) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.00657)) which
    provides, “Automatic Generation of Interactive Visualisations for
    Statistical Results”, primarily by porting the output of the
    authors’ above-mentioned [`ggfortify`
    package](https://github.com/sinhrks/ggfortify) to `plotly.js`.

## Wrapper Packages

Wrapper packages provide an interface to previously-written software,
often in a different computer language to the original implentation.
While this category is reasonably unambiguous, there may be instances in
which a “wrapper” additionally offers extension beyond original
implementations, or in which only a portion of a package’s functionality
may be “wrapped.” Issues to consider for wrapper packages include the
extent of functionality represented by wrapped code, and the computer
language being wrapped. Rather than internally bundling or wrapping
software, a package may also serve as a wrapper thorugh providing access
to some external interface, such as a web server. Examples of potential
wrapper packages include the following:

1.  The [`greta` package](https://github.com/greta-dev/greta) (with
    accompanying [JOSS
    article](https://joss.theoj.org/papers/10.21105/joss.01601)) “for
    writing statistical models and fitting them by MCMC and
    optimisation” provides a wrapper around google’s [`TensorFlow`
    library](https://www.tensorflow.org/). It is also clearly a workflow
    package, aiming to provide a single, unified workflow for generic
    machine learning processes and analyses.
2.  The [`nse` package](https://github.com/keblu/nse) (with accompanying
    [JOSS paper](https://joss.theoj.org/papers/10.21105/joss.00172))
    which offers “multiple ways to calculate numerical standard errors
    (NSE) of univariate (or multivariate in some cases) time series,”
    through providing a unified interface to several other R packages to
    provide more than 30 NSE estimators. This is an example of a wrapper
    package which does not wrap either internal code or external
    interfaces, rather it effectively “wraps” the algorithms of a
    collection of R packages.

## Statistical Indices and Scores

Many packages are designed to provide one or more specific statistical
indices or scores from some assumed type of input data. Even though
methodology used to derive indices or scores may draw on many of the
methods or algorithms considered in the first category above, and
detailed below, such software may likely be considered within its own
category through a singular aim to provide particular indices or scores,
in contrast with generic “Methods and Algorithms” software which offers
some degree of abstraction in terms of either input or output data, or
both. Examples include,

1.  The [`spatialwarnings`
    package](https://github.com/spatial-ews/spatialwarnings) which
    provides “early-warning signal of ecosystem degradation,” where
    these signals and associated indices are highly domain-specific.
2.  The [`heatsaveR` package](https://github.com/robwschlegel/heatwaveR)
    which calculates and displays marine heatwaves using specific
    indices established in previously-published literature.
3.  The [`hhi`](https://github.com/pdwaggoner/hhi) which calculates and
    visualizes “Herfindahl-Hirschman Index Scores,” which are measures
    of numeric concentration.
4.  The [`DscoreApp` package](https://github.com/OttaviaE/DscoreApp)
    which provides an index (the “D-Score”) to quantify the results of
    [Implicit Association
    Tests](https://en.wikipedia.org/wiki/Implicit-association_test).
5.  The [`thurstonianIRT`
    package](https://github.com/paul-buerkner/thurstonianIRT) (with
    accompanying [JOSS
    paper](https://joss.theoj.org/papers/10.21105/joss.01662)) for score
    forced-choice questionnaires using [“Item Response
    Theory”](https://en.wikipedia.org/wiki/Item_response_theory).

## Additional Applied Categories

There will likely be a host of additional categories of software
developed for particular applied domains. One distinguishing feature of
such software appears to be the use of custom-developed classes or
equivalent representations for input (and often output) data.

-----

# Raw Data from Conference Programs

Taken from programs for the following conferences:

  - Joint Statistical Meetings
    [2018](https://ww2.amstat.org/meetings/jsm/2018/pdfs/JSM2018-SessionBooklet.pdf),
    [2019](https://ww2.amstat.org/meetings/jsm/2019/pdfs/JSM2019-SessionBooklet.pdf),
    or online text versions with links to abstracts here for
    [2018](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/MainSearchResults.cfm),
    [2019](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/MainSearchResults.cfm).
  - Symposium on Data Science and Statistics (SDSS)
    [2018](https://ww2.amstat.org/meetings/sdss/2018/onlineprogram/Program.cfm),
    [2019](https://ww2.amstat.org/meetings/sdss/2019/onlineprogram/Program.cfm),
    [2020](https://ww2.amstat.org/meetings/sdss/2020/onlineprogram/Program.cfm).

Categories which arise from analyses of JOSS abstracts yet do not emerge
from these conference programs include:

  - workflow
  - exploratory data analysis
  - summary statistics
  - statistical reporting

Each of the items listed below is followed by a list of sub-categories.
As for the primary categories above, these ought be considered neither
mutually exclusive nor unambiguous, and indeed many piece of software
and conference presentations explicitly seek to combine and traverse
multiple categories.

## Algorithms & Methods Categories

  - Analyses of (multivariate) extremes; anomaly detection
      - See [CRAN Task View: Extreme Value
        Analysis](https://cran.r-project.org/web/views/ExtremeValue.html)
      - distributional properties
      - reproducibility
      - sensitivity to thresholds
      - Examples
          - [`molic`](https://github.com/mlindsk/molic) with
            accompanying [JOSS
            paper](https://joss.theoj.org/papers/10.21105/joss.01665)
          - Conference presentations:
            [1](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=305170),
            [2](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=304741),
            [3](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=305246)
  - (Automated) Variable and model selection
      - reproducibility
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=330806),
        [2](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=328563),
        [3](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=329844),
        [4](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=328716),
        [5](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=329500),
        [6](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=332632),
        [7](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=330418)
  - Bayesian modelling and statistics
      - See [CRAN Task View: Bayesian
        Inference](https://cran.r-project.org/web/views/Bayesian.html)
      - sensitivity to prior distributions
      - model behaviour under null prior
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=329025),
  - Causal inference, graphical models, and statistical decision making
      - causal tree complexity and traversal behaviour
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=328682),
        [2](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=306385)
  - Clustering
      - See [CRAN Task View: Cluster Analysis & Finite Mixture
        Models](https://cran.r-project.org/web/views/Cluster.html)
      - algorithm
      - benchmarking against other algorithms
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=303055),
        [2](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=304606),
        [3](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=300541),
        [4](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=328764),
        [5](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=327171),
        [6](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=330418)
  - Dynamical systems
  - Feature selection
      - benchmarking against other algorithms
  - Functional data analysis
      - See [CRAN Task View: Functional Data
        Analysis](https://cran.r-project.org/web/views/FunctionalData.html)
      - representation of functions
      - statistical properties
  - Genetic Algorithms
  - High-dimensional data and (non-linear) dimensionality reduction
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=302972)
  - Hypothesis testing
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=329601)
  - Maximum likelihood
  - Measurement error, missing data, reliability, model uncertainty
      - See [CRAN Task View: Missing
        Data](https://cran.r-project.org/web/views/MissingData.html)
  - Monte Carlo, including Markov Chain processes
      - sensitivity and reproduciblity
  - (Multiple) Imputation and synthetic data
      - sensitivity and reproduciblity
  - Non- and semi-parametric methods
      - comparison with parametric methods
  - Non-probability samples and probability samples; sampling techniques
      - distributional properties
      - divergence of non-probability samples from underlying
        distribution
  - (Multivariate) Time series, non-stationarity, changepoint analysis
      - See [CRAN Task View: Time Series
        Analysis](https://cran.r-project.org/web/views/TimeSeries.html)
      - comparison with stationary methods
      - sensitivity of changepoints
      - model error
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=304637),
        [2](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=304493),
        [3](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=328764)
        [4](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=328764)
  - Power calculations
  - Probability
  - Regression / random trees and forests
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/MainSearchResults.cfm)
  - Risk prediction and analysis
      - sensitivity
      - error
  - (Single- and multi-dimensional, static and dynamic) smoothing
      - tolerance; feature loss
  - (Stochastic) Optimization
      - See [CRAN Task View: Optimization and Mathematical
        Programming](https://cran.r-project.org/web/views/Optimization.html)
  - (Supervised, Unsupervised, Automated, Interactive) Machine and Deep
    Learning, Statistical Learning
      - See [CRAN Task View: Machine Learning & Statistical
        Learning](https://cran.r-project.org/web/views/MachineLearning.html)
  - Survival analysis
      - See [CRAN Task View: Survival
        Analysis](https://cran.r-project.org/web/views/Survival.html)
  - Warping

## Data Categories

  - Binary and ordinal data
  - Complex-valued data
  - Discrete data
  - Longitudinal and correlated data analyses
  - Structured and dynamically dependent data
  - Time-to-event data
  - Anonymization and (data) privacy; blockchain
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2019/onlineprogram/AbstractDetails.cfm?abstractid=308049)
  - Backcasting, nowcasting, forecasting
  - (Dynamic) Networks and networks statistics
      - underlying data representation
      - transferability within other network software
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=328764),
        [2](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=327171)
  - Financial data and econometrics
      - See [CRAN Task View:
        Econometrics](https://cran.r-project.org/web/views/Econometrics.html)
        and [CRAN Task View: Empirical
        Finance](https://cran.r-project.org/web/views/Finance.html)
  - Information statistics
  - “omics” data
  - Randomized clinical trials
      - See [CRAN Task View: Clinical Trial Design, Monitoring, and
        Analyzing](https://cran.r-project.org/web/views/ClinicalTrials.html).
  - Seasonal data
  - Spatial and spatio-temporal modelling
      - See [CRAN Task View: Analysis of Spatial
        Data](https://cran.r-project.org/web/views/Spatial.html) and
        [CRAN Task View: Handling and Analyzing Spatio-Temporal
        Data](https://cran.r-project.org/web/views/SpatioTemporal.html)
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=327171)
  - Streaming data

## Miscellaneous Categories

  - Data visualisation
  - Statistical education
      - See [CRAN Task View: Teaching
        Statistics](https://cran.r-project.org/web/views/TeachingStatistics.html)
      - Examples
        [1](https://ww2.amstat.org/meetings/jsm/2018/onlineprogram/AbstractDetails.cfm?abstractid=329246),
        [2](https://cran.r-project.org/web/packages/TeachingDemos/)
  - Meta analysis
      - See [CRAN Task View:
        Meta-Analysis](https://cran.r-project.org/web/views/MetaAnalysis.html)

An additional category of both software, and likely ubiquitous within
conference programs, concerns the calculation of specific statistical
metrics or indices.

# Software packages

There are no python packages mentioned or presented in JMS abstracts.

  - [`LearnBayes`](https://cran.r-project.org/web/packages/LearnBayes/index.html):
    Functions for learning Bayesian inference
  - [`rethinking`](https://github.com/rmcelreath/rethinking):
    Statistical rethinking course and book packages
  - [`rms`](https://cran.r-project.org/web/packages/rms/index.html):
    Regression modelling strategies
  - [`revisit`](https://github.com/matloff/revisit): a Tool for
    Statistical Reproducibility and for Teaching
  - [`liftr`](https://cran.r-project.org/web/packages/liftr/index.html):
    Persistent reproducible reporting by containerization of R Markdown
    documents
  - [`gmediation`](https://cran.r-project.org/web/packages/gmediation/):
    Mediation Analysis for Multiple and Multi-Stage Mediators
  - [`scdensity`](https://cran.r-project.org/web/packages/scdensity/):
    Shape-Constrained Kernel Density Estimation
  - [`SurvBoost`](https://cran.r-project.org/web/packages/SurvBoost/):
    Gradient Boosting for Survival Data
  - [`EAinference`](https://cran.r-project.org/web/packages/EAinference/):
    Estimator Augmentation and Simulation-Based Inference
  - [`gLRTH`](https://cran.r-project.org/web/packages/gLRTH/index.html):
    Genome-Wide Association and Linkage Analysis under Heterogeneity
  - [`rpms`](https://cran.r-project.org/web/packages/rpms/index.html):
    Recursive Partitioning for Modeling Survey Data
  - [`ggdag`](https://cran.r-project.org/web/packages/ggdag/index.html):
    Analyze and Create Elegant Directed Acyclic Graphs
  - [`confoundr`](https://cran.r-project.org/web/packages/confoundr/):
    Diagnostics for Confounding of Time-Varying and Other Joint
    Exposures
  - [`adapr`](https://cran.r-project.org/web/packages/adapr/):
    Implementation of an Accountable Data Analysis Process
  - [`conf`](https://cran.r-project.org/web/packages/conf/):
    Visualisation and Analysis of Statistical Measures of Confidence
  - [`medExtractR`](https://cran.r-project.org/web/packages/medExtractR/index.html):
    Extraction of Medication Information from Clinical Text
  - [`isni`](https://cran.r-project.org/web/packages/isni/): Index of
    Local Sensitivity to Nonignorability
  - [`PhysicalActivity`](https://cran.r-project.org/web/packages/PhysicalActivity/):
    Process Accelerometer Data for Physical Activity Measurement
  - [`accelmissing`](https://cran.r-project.org/web/packages/accelmissing/index.html):
    Missing Value Imputation for Accelerometer Data
  - [`lmboot`](https://cran.r-project.org/web/packages/lmboot/index.html):
    Bootstrap in Linear Models
  - [`TeachingDemos`](https://cran.r-project.org/web/packages/TeachingDemos/):
    Demonstrations for Teaching and Learning
  - [`ghclass`](https://github.com/rundel/ghclass): Tools for managing
    classroom organizations
  - [`ggvoronoi`](https://cran.r-project.org/web/packages/ggvoronoi/index.html):
    Voronoi Diagrams and Heatmaps with ‘ggplot2’
  - [`igraphmatch`](https://github.com/dpmcsuss/iGraphMatch): Tools to
    find the correspondences between vertices in different graphs
  - [`Intkrige`](https://cran.r-project.org/web/packages/intkrige/index.html):
    A Numerical Implementation of Interval-Valued Kriging
  - [`Bioc2mlr`](https://github.com/drorberel/Bioc2mlr): Utility
    functions to transform Bioconductor’s S4 omic classes into mlr’s
    task and CPOs
  - [`MHTdiscrete`](https://cran.r-project.org/web/packages/MHTdiscrete/index.html):
    Multiple Hypotheses Testing for Discrete Data

Packages mentioned but not as focus:

  - [`twang`](https://cran.r-project.org/web/packages/twang/index.html):
    Toolkit for Weighting and Analysis of Nonequivalent Groups
  - [`Zelig`](https://cran.r-project.org/web/packages/Zelig/):
    Everyone’s Statistical Software
  - [`rbounds`](https://cran.r-project.org/web/packages/rbounds/):
    Perform Rosenbaum bounds sensitivity tests for matched and unmatched
    data
  - [`refund`](https://cran.r-project.org/web/packages/refund/):
    Regression with Functional Data
  - [`mgcv`](https://cran.r-project.org/web/packages/mgcv/): Mixed GAM
    Computation Vehicle with Automatic Smoothness Estimation

As well as the [`neurconductor`](https://neuroconductor.org/) and
[`cloudyr`](https://cloudyr.github.io/) platforms.

Python packages presented or mentioned in SDSS programs:

  - [`altair`](https://altair-viz.github.io/): Declarative Visualisation
    in Python
  - [`salmon`](https://arxiv.org/abs/1911.00648) +
    [github](https://github.com/ajboyd2/salmon): Symbolic algebra of
    linear regression and modeling
  - [`symbulate`](https://github.com/dlsun/symbulate): A symbolic
    algebra for specifying simulations
