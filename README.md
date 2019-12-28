# What is (open-source) statistical software and how can it be validated, tested, and reviewed?

A repo of ideas and explorations for rOpenSci’s project on peer-reviewed
statistical software. The current form of this document summarises
results from attempts to *empirically* define the concepts that follow,
in the belief that initial attempts at definition should be as empirical
reproducible and defensible as possible, to allow a maximally neutral
initial assessment prior to posterior, subjective modification. The
document presents four primary aspects, and sub-aspects within each, in
a linear sequential order, and treats each as an independent unit. There
will of course be many inter-dependencies between these units.

# 1\. Peer Review

Important Questions:

  - What is Peer Review?
  - How can a system of peer review best be constructed *ab initio*?
  - How can a system of peer review be cultivated and maintained? (That
    component directly connects to the final Community component
    considered below)
  - At what points does peer review start and end? (That component
    directly relates to the issue of software life cycles considered
    below)
  - Related to the previous question: Is peer-review a one-off
    phenomenon, or should there be some degree of ongoing engagement?
  - To the extent that ongoing engagement may be considered desirable,
    how can we best ensure the ongoing *independence* of peer review
    from the development itself? Is that even possible? (Some of the
    only role models for such appear to be external peer-review of code,
    for which independent auditing bodies are widely available, the
    functions of which are generally *not* transferable to the current
    context of peer-reviews of open-source code.)

# 2\. Statistical Software

## 2.1 Summary

The project requires a degree of consensus on the scope of “Statistical
Software”. One of the primary, coherent bodies of reference for
statistical software is the eponymous [academic
journal](https://www.jstatsoft.org). The following summarises detailed
explorations in a [sub-directory of this
repository](https://github.com/mpadge/statistical-software/tree/master/jss),
involving code to extract and analyse the abstracts of all articles
published by the Journal of Statistical Software. Textual descriptions
of statistical software are very generic and homogeneous, and have
become more so over time, most notably from around 2008 onwards. It is
therefore difficult to apply standard “text mining” algorithms to
discern topics, clusters, or other textual phenomena which might help to
distinguish categories of statistical software. The following
nevertheless provides a brief list of nouns which define potentially
distinct topics within the broader realm of statistical software:

## 2.2 Terms Defining Statistical Software (from JSS Abstracts)

### 2.2a Applications

1.  paleo, ecosystems, sediment, fossil, pollution, water, diatom,
    acidifation
2.  genealogy, varieties, branches, cultivars,
3.  ordination, migrants, pioneering, kendall, infections, dyads,
    disorders, lifestyle, susceptibility, nucleotide, polymorphisms,
    chromosome, cofactors, proteins, organism, liquid chromatography,
    compensation, bioreactors, substrates, carbon, lymph

### 2.2b General Statistics

1.  model(s), data, user(s), program, analysis, code, regression,
    linear, error, cluster(ing), likelihood, matrix, estimates, effects,
    multivariate, distributions, language, survival, time, distribution,
    simulation, optimal, density, information, classification, test,
    response, estimation, parameter, risk,, effect, comparison, sample,
    markov chain, monte carlo, optimization, population, imputation
2.  quality, processes, ratio, web, computer, poisson, disease, graph,
    area densities, gamma, dirichlet, factor, bayes, interval, length,
    simulations, estimator, groups, wavelet, individual, dimension
    reduction, plot, inverse, principal, table, value, decomposition,
    species, group, curve, covariate, accuracy, dose, pattern, feature,
    threshold, anova, hazard map, subjects, panel, field, odds
3.  concentration, observation, step, failure, cause, patient, origin,
    variate, region, loss, run, gibbs, combinations, contrast, behavior,
    complexity, coefficient, priors, stage, splines, phase, batch,
    shape, tail, element, decision, cost, resolution, log, rank,
    iterative, trait, haplotype, location, gradient, domain, array,
    reduce, skew, trajectories, variation, intervention, voxels,
    maximization, expectation, escalation, cytometry, randomization,
    genotype
4.  nonstationarity, implemenation, kaufman, calibrate, likelikhood,
    loading, candidates, travel, consumers, manipulations, hyper,
    coordination, majorization, covariation, tract, norms,
    microstructure, imbalances, registers, optimizes, proof, supervisor,
    dendrograms, organisation, saturation, convexity, geophysics
5.  bounds, script, pearson, deviance, generator, macros, term, lattice,
    researcher, fourier, product, mode, similarity, consistency, box,
    spline, education, intensity, situation, goal, partition, surface,
    path, attribute, entries, combine, tails
6.  install, year, separation, folds, censoring, scoring, symmetry,
    mantel, forward, occurrence, passing, zeros, width, art, score,
    author, voting, pca, indicator, parent, rule, pair, turn, products,
    correction, circular, physical, orders, magnitude, sunspot,
    autoregression, inflation, fisher, impute, split, marker, equality,
    membership, derivative, moment, chromatograms, cloud, spread,
    ridges, identity

### 2.2c Special Issues

1.  ihaka, gentleman, redesign, reimplementation, respond, stimuli,
    visibility, obstruction, probabilites, rcppeigen, eigen,
    eddelbuettel, mosaicplots, spineplots, ceiling, shadings, palettes,
    pngs, overlay, hotspot, oscillation, teleconnections,
    microsimulation, businesses, microdatasets, inequalities,
    celebrates, anniversary, festschrift, chair, accomplishments, guest,
    editors, reproduction, cohorts, hosts, retrieval, completing

### 2.2d Miscellaneous terms beyond the above clusters

1.  multifactor, hyperparameter, concentrates, gauss, tukey,
    congruential, modulus, fibonacci, cryptography, infer, geography,
    obstacle, bayesians, nuances, jackknifed, respondent,
    cheminformatics, microscopy, nanosecond, spectrochromatograms,
    elution, analytes, imperfections, observatory, terabyte, inverses,
    wildlife, policies, underestimation, accelerations, biodiversity,
    dispense, salesman, vehicle, presenceabsence, percent, reactions,
    neuropsychology, implemantation, transversal, discordance, benefit,
    refinement, metaheuristics, district, irregularities, saddlepoints,
    discontinuities, hygiene, agents, vocabulary, critics, weaknesses,
    demographers, actuaries, photovoltaics, incident, feathers, flight,
    insurances, portfolios, decomposes, ultimatum game, chunks, queries,
    pressure, materials, subclasses, longitudes, latitudes, outbreaks,
    runtimes, origins, biometrics, overlaps, career, monograph,
    expectancy, pyramids, ergonomics, clothing, workstation, ontologies,
    plasma, clearance, humans, generalisation, violates, myocardial
    infarction, aesthetics, heritability, declaration,
    parameterizations, tensors, wraps, differentiates, archives,
    geology, continuum, ingredient

## 2.3 Approaches to Defining Statistical Software

While the preceding terms might help somewhat to attempt a definition of
“Statistical Software”, there is clearly going to be a need to
subjectively define what the scope of such might be. The Journal of
Statistical Software simply defines [its own
scope](https://www.jstatsoft.org/pages/view/mission) as,

> statistical computing in all areas of empirical research,

presumably leaving the task of defining the boundaries of scope to *ad
hoc* decisions. We note only that conventional (sociological) attempts
at defining culturally shared concepts are generally approached via
surveys along the lines of lists of potential topics which participants
are asked to allocate to within or beyond definition or scope. Scope is
then readily defined through (probabilistically) demarcating all items
adjudged as “beyond scope”.

## 2.4 Difficulties in Defining/Delieating Statistical Software

While this document will not (currently) attempt to provide any
definitions of “statistical software”, it is nevertheless instructive to
consider a few “edge cases” which illustrate the potential difficulties
faced in attempting such definition. The following brief digressions are
made with reference to the “fitness” of statistical software for some
particular purpose, by which is meant any and all potential definitions
of applicability, validity, accuracy, or similar concepts.

### 2.4a Artificial Intelligence Algorithms

Artificial Intelligence (AI) algorithms have become deeply embedded
within many areas of modern computational science, and certainly can not
be excluded from an (increasingly?) active role in statistical software.
Yet AI algorithms present an immediate challenge to two of the surest
measures of the “fitness” of statistical software: (i) They are very
generally unable to generate reproducible results; and (ii) they almost
always suffer from some form of bias, particularly as generated by a
necessarily incomplete set of training data. At the risk of
over-simplification, it may be simply stated that AI algorithms may
generally not be presumed to generate either reproducible or unbiased
results (absent some kind of explicit and external demonstration of such
absence). Yet such inability can not exclude such software from
consideration as a valid form of “statistical software,” rather these
issues illustrate the need to adapt any specifications or definitions to
particular cases.

### 2.4b Genetic Algorithms

Similar to AI algorithms, genetic algorithms can not be excluded from
the domain of “statistical software”, yet their results may also
generally not be precisely predictable for any given input, and so they
may not be considered to generate truly reproducible results.

### 2.4c Clustering Algorithms and their Relations

Clustering Algorithms are included here as a synecdoche for the general
class of techniques which can not fail to generate an intelligible
output, entirely regardless of the validity or otherwise of that output.
Clustering algorithms must generate a result, yet that result may be
entirely devoid of meaning or significance. Yet clustering algorithms
are also an integral part of contemporary statistics, and can not be
excluded from consideration. This suggests in turn that statistical
software must consider implementations which are potentially unable to
generate meaningful output.

### 2.4d Summary

The following table summarises these three brief classes of statistical
software, and the potential problems they encapsulate.

| Algorithm  | Reproducible? | Unbiased? | Meaningful? |
| ---------- | ------------- | --------- | ----------- |
| AI         | No            | No        | Yes         |
| GA         | No            | Yes       | Yes         |
| Clustering | Yes           | Yes       | No          |

These cases suffice to demonstrate that statistical software can not be
defined or assessed in terms of any notions of absolute reproducibility;
of being unbiased; or of being able to generate meaningful results. The
question is how such issues might best be approached in defining and
assessing statistical software? Perhaps the simplest approach would be
to have these as notionally defined categories of statistical software,
with due and encompassing acknowledgement that software within any of
these categories may suffer or manifest the nominated shortcomings. The
latter case of clustering algorithms nevertheless illustrates the
difficulties such a categorisation may face. As mentioned, the term
“clustering algorithms” was intended only as a synecdoche for a
general, encompassing category of software *potentially* incapable of
generating statistically meaningful results. Many other algorithms,
implementations, and pieces of software could also fit within this
general category, many of which may also fit within the other two
categories considered here.

An AI algorithm capable of categorising some set of input objects to an
accuracy determined by some selected set of human assessors can only be
deemed to yield meaningful output to the extent that the judgements of
the selected set of assessors may be adjudged meaningful by some
general, and generally representative, portion of (some) society. An
element of subjectivity may be accordingly unavoidable in assessing
statistical software, suggesting perhaps a need to have developers
attempt to explicate potential areas or causes of subjectivity.

A tentative suggestion at this early point of development would be to
reach a binary decision of whether to categorise software along the
lines of the row names in the above table, and associate a list of
potential problems or shortcomings with each of the given categories; or
to categorise software directly according to the column names of
potential problems or shortcomings, regardless of the explicit category
to which it may be judged to belong

# 3\. Software Reviews, Testing and Validation

There is a wealth of literature on software reviews, software
verification and validation, and software testing, either as independent
topics, of considered as aspects of a unified whole. Of particular use
in developing the following have been the reference works of Mili (2015)
and Ammann and Offutt (2017). All of the following topics and concepts
are inextricably entwined, as can be seen in the associated [network
diagram presented
here](https://mpadge.github.io/statistical-software/testing-and-validation/).
The following sub-sections roughly correspond to the individual groups
within that diagram.

## 3.1 Verification and Validation

The topics of Software Verification and Validation have been granted
very extensive consideration. One work of particular note is the
comprehensive reference of Vogel (2011). The concepts of verification
and validation may often have only peripheral validity of open source
software in general, and to much of the software curated by rOpenSci,
yet these concepts are nevertheless of direct relevance within
particular fields, very notably software for pharmacological research.
Within these field, these concepts are being concurrently investigated
by the [“R Validation Hub”](https://www.pharmar.org/), which is,

> a cross-industry initiative whose mission is to enable the use of R by
> the bio-pharmaceutical industry in a regulatory setting, where the
> output may be used in submissions to regulatory agencies.

One regulatory agency of particular focus in that context is the United
States Food and Drug Administration (FDA), who publish their own
[“General Principles of Software Validation”
(2002)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-principles-software-validation)
(for Devices and adiological Health 2019). Much validation and
verification work has also been directed towards the R language itself,
resulting in the R Foundation’s document on “Regulatory Compliance and
Validation Issues” (The R Foundation for Statistical Computing 2018).
Such work is considered beyond the scope of rOpenSci’s Statistical
Software project, which will retain a focus on R *packages* rather than
the language as a whole. Some of the procedures and protocols developed
for such endeavours may nevertheless be of relevance and interest for
this project. Of more direct relevance is the current primary output of
the R Validation Hub, in the form of a [White
Paper](https://github.com/pharmaR/white_paper), the content of which
overlaps many of the concepts presented and discussed here.

Of critical importance in the present context is the fact that almost
all work on software verification and validation has been focussed on
closed-source commercial software, with one of the only works of note to
date on verification and validation of open-source software being a
conference paper from 2012 (Stokes 2012). That paper is nevertheless
largely discursive in nature, and largely rests on unproven assumptions
that open-source software *may* pose greater probabilities of risk due
to such factors as novelty, poor software quality, poor documentation,
difficulties in controlling the production environment, and
compatibility issues with unverified infrastructure, and a decreased
risk detectability. All of this issues may equally plague closed-source
software. The merit of that work appears to lie in its consideration of
the importance of community for open-source software, and the importance
for the purposes of verification and validation of *assessing* such
community. They consider the following questions:

>   - Is there a formal community supporting the software or is it just
>     a loose collection of individuals?
>   - Does the community have any formal rules or charter that provide a
>     degree of assurance with respect to support for the software?
>   - How mature is the software? How likely is it that the open source
>     community will remain interested in the development of the
>     software once the immediate development activities are complete?
>   - What level of documentation is available within the community? How
>     up-to-date is the documentation compared to the software?
>   - How does the community respond to identified software bugs? Are
>     these fixed in a timely manner and are the fixes reliable?
>   - What level of testing is undertaken by the community? Is this
>     documented and can it be relied upon in lieu of testing by the
>     regulated company?
>   - What level of involvement are we willing to play in the community?
>     Will we only leverage the software outputs, or actively support
>     the development?

## 3.2 Software Review

The primary emphasis of almost all prior work on software review is the
need for review to be *external and independent* in order to ensure
objectivity and impartiality. While is may be tritely assumed that
rOpenSci’s system goes a great way to ensuring such externality and
independence, it is important to note that current review practices only
partially overlap conventional or traditional domains of “software
review”. In particular, software review is traditionally very directly
focussed on explicit review of code, and less so on broader or more
general aspects of functionality and usage. All of these aspects are
entwined ([click here to view interactive network
diagram](https://mpadge.github.io/statistical-software/testing-and-validation/)),
that such entwinement should rightly be interpreted to reflect a need to
clearly clarify the scope and design of review itself.

It should also be noted in relation to the interactive network diagram
that the centrality of review within that network likely reflects a
pervasive difficulty within the extant literature in defining the scope
of review. This difficulty in definition translates into the concept of
review being tentatively related to many more diverse aspects that
other, more readily defined aspects such as testing. Whether or not the
centrality of review is an artefact, the following two important aspects
emerge as subsets, and direct repeats, of the more general questions
considered under the general topic of “Review” at the outset:

1.  At what point(s) during the development of software should review
    start and end?
2.  Should review be a one-off phenomenon, or should there be ongoing
    engagement?

## 3.3 Software Metrics

There are uncountably many software metrics, many of which are equally
applicable to both closed- and open-source software. These can be
broadly categorised into the following three sub-classes.

### 3.3a Formal Computer Science Metrics

There are many formal computer science software metrics, for which one
particularly useful reference is Myers, Badgett, and Sandler (2012).
This book provides a solid semi-theoretical basis for graph-based
metrics of software performance, testing, and evaluation. One
particularly useful insight they provide is a formula defining a
required number of users to achieve an expected rate of fault discovery.
This could be very usefully and directly translated into formal
procedures for verification and validation of open-source software.

The book discusses many other formal computer science metrics such as
cyclomatic complexity and code volume. Importantly, almost all formal
computer science metrics for code quality are *graph based*, yet there
is no current software within R capable of providing such analyses.
(Current metrics of cyclomatic complexity are based on sub-graphs within
single functions only, and are not based on analyses of entire package
graphs.) While graph-based metrics may be criticised, the inability of
any current system to provide a comprehensive graph-based insight into
package structure and functionality can not be ignored.

Of particular use in devising graph-based analyses of R packages is
almost certainly the [`pkgapi`
package](https://github.com/r-lib/pkgapi), which relies on the
relatively recently re-designed `R::utils` function `getParseData`.

### 3.3b Documentation Metrics

Documentation metrics are generally very straightforward to assess, and
may consist of one of more of the following aspects:

1.  Total numbers of line of documentation
2.  Proportion of documentation to code lines
3.  Proportion of exported functions that are documented
4.  Extended documentation in the form of vignettes
5.  Documented examples for exported functions

### 3.3c Meta Metrics

Meta metrics include aspects such as development histories of packages,
usage statistics, and empirical reputation metrics of software
developers. The [`riskmetric`
package](https://github.com/pharmar/riskmetric) developed as part of the
[PharmaR initiative](https://pharmar.org) is currently primarily
focussed on meta metrics, including the following (in arbitrary order)

1.  Size of code base
2.  Release rate
3.  Website availability
4.  Version control availability
5.  Metrics of response to bug tracker issues
6.  Presence of a package maintainer
7.  Numbers of active contributors
8.  Suitability of software license
9.  Number of package downloads, and download history
10. Metric of “community enthusiasm”
11. Time for develop(s) to respond to bug reports
12. Time for develop(s) to respond to pull requests
13. Metric of community engagement in issues
14. Availability of a public code repository
15. Code coverage
16. Code coverage assessed by function examples only
17. Availability of examples
18. Documentation

## 3.4 Testing

Current R testing is arguably very focussed on “unit testing”, largely
in ignorance of the maxim that (Vogel 2011),

> A validation program that depends on testing alone for a defect-free
> device is depending on perfection in testing.

There are entire taxonomies of, and systematic approaches to, testing,
for which Mili (2015) provides a notably comprehensive overview.

### 3.4a Types of Tests

It ought to be particularly emphasised that unit testing is very
generally considered an activity conducted by developers and relevant to
developers (only). Testing of software minimally requires *Integration
Testing* in addition to, and beyond, Unit Testing. The structure of R
packages makes for a particularly clear distinction between these two:

1.  Unit Testing tests all functions and functionality *internal* to a
    package
2.  Integration Testing tests all *exported* functions of a package—and
    only those functions.

That consideration alone highlights the importance of explicitly
determining whether tests of and within an R package should best focus
on testing *exported* functions (only), or whether they should focus on
testing internal (non-exported) functions?

There are many other taxonomies and types of tests, with most texts on
the subject emphasising the importance of explicitly developing a schema
to guide the entire process of testing, including considerations of:

1.  The test environment
2.  The test data
3.  The test reporter
4.  Test termination conditions
5.  The test driver
6.  The test execution
7.  Analysis of test outcomes

It is worthwhile annotating and repeating these components within the
context of current practice for R packages:

1.  The test environment — generally, and justifiably, not considered
    relevant
2.  The test data — entirely ad hoc, and left to developer
3.  The test reporter — commonly `testthat` output parsed by `R CMD
    check`
4.  Test termination conditions — generally not considered relevant?
5.  The test driver — very generally `testthat`
6.  The test execution — always `R CMD check`, but other options ought
    to be considered
7.  Analysis of test outcomes

Testing can also have different goals, such as:

1.  Finding and removing faults
2.  Proving absence of faults
3.  Estimating frequencies of failure
4.  Ensuring infrequency of failure
5.  Estimating fault densities

There is arguably no current practice within the development of R
packages that considers testing to have any particular defined goal, let
alone consideration of the consequences of potential differences between
these goals. The entire domain of testing within R packages only very
cursorily reflects current approaches to, practices and theories of,
testing within modern computer science texts.

### 3.4b Content of Tests

Tests should be designed to explicitly measure one of more of the above
aspects of software faults and failures (generally presence/absence or
frequencies). The structure of `R CMD check` has arguably enforced on
the R community a practice of testing as confirming the absence of
faults. This is of course never possible, and is emphasised in most
texts as extremely undesirable, because it does little more than confirm
the limitation of implemented tests.

Contents of tests depend directly on the intended types of tests. In
particular, Mili (2015) distinguish “concrete”, “symbolic”, and
“stochastic” tests. The former of these arguably describes all current
R practices: testing concrete inputs against concretely-specified
expected outputs. In contrast, symbolic tests are exceedingly difficult,
and examine and test the “impact of execution on symbolic data”, while
“stochastic” testing aims to statistically summarise the expected
output of full symbolic tests, obviating the necessity of implementing
full symbolic tests.

### 3.4c Property-Based Testing

Parallel to works on formal taxonomies of testing are systems for
specifying and testing *expectations* of software inputs and outputs.
There appears to be no current consensus on vocabulary for such, but
domains in which expectations have been considered include property
testing, fuzzing, and particularly the above-mentioned domain of
stochastic testing. Fuzzing encapsulates the underlying concept of
examining software outputs in response to stochastically generated
inputs. Fuzzing was, and continues to be, developed in a largely
independent domain of software *security*, where it has proven to be
particularly useful in detecting software vulnerabilities. Although this
domain of application may not be directly relevant to much of R package
development, the underlying tools and methodologies may nevertheless be
relevant. In particular, many of the most widely used fuzzing tools
employ what are referred to as “coverage-based fuzzing” as a form of
effectively black-box testing. A program is compiled with symbolic links
to code entities, and the “fuzzer” modifies its input to attempt to
maximise the exploration space traced between input and output.

As explained, fuzzing has been largely confined to its own domain of
software security and vulnerability, yet there are strong and direct
parallels to incipient domains of “property-based testing” (credit for
that term to David MacIver, lead developer of the python [`hypothesis`
software](https://github.com/HypothesisWorks/hypothesis) for doing
exactly that). Property-based testing replaces standard concrete
testing—what might be term “instantiation testing” because what is
tested are concrete instantiations of particular inputs and outputs—with
generic *properties*. The canonical example is replacing an
instantiation test with a univariate input such as,

``` r
output <- my_function(input = 31)
```

with a property-based equivalent,

``` r
output <- my_function(input = rnorm(1, mean = 0, sd = 1))
```

or more powerfully,

``` r
output <- my_function(input = norm_dist)
```

where `norm_dist` is ascribed some set of defined properties. These
properties then form the basis of the “property-based testing” of
`my_function`, and may include, for example, the extent to which the
input might deviate from strict normality. There have been previous
attempts to devise such systems for R packages, perhaps most notably the
[`fuzzr` package](https://github.com/mdlincoln/fuzzr), and the
[`quickcheck`
package](https://github.com/RevolutionAnalytics/quickcheck) by
RevolutionAnalytics, both of which appear to have long been abandoned.
The software which appears to best encapsulate current best practices in
this regard in any language appears to be the above-mentioned
[`hypothesis` software](https://github.com/HypothesisWorks/hypothesis)
for python. This software requires explicit specifications of tests
using its own internal grammar of assumptions or pre-conditions, defined
by a series of `@given` statements, a definition of what is being
tested, and a statement of expected output (generally via one or more
`@assert` statements). This is a far more powerful framework than
anything currently considered or possible within R (the two packages
mentioned above notwithstanding).

### 3.4d Testing Grammar

As mentioned, testing is R is currently very largely defined by the
`testthat` package, which offers its own grammar of expectations (via
`expect_that`-type statements). These are directly equivalent to the
`@assert` statement of `hypothesis`, yet absent any ability to define
`@given` statements, and therefore entirely restricted to tests of
concrete instantiations only. The actual grammar of `hypothesis` is
arguably only slightly more extensible in permitting such `@given`
statements of pre-conditions or assumptions, yet these render the
current testing grammar of `hypothesis` enormously more powerful than
`testthat`, through being able to test general properties of inputs,
rather than concrete instantiations. The ultimate aim of `hypothesis`
nevertheless appears to be to develop a far more generic, and more
powerful, grammar for specifying both tests and more general behavioural
expectations of software.

The current “best practices” framework for grammars of expectation
appears to be the [`gherkin`
language](https://cucumber.io/docs/gherkin/) developed for the
[`cucumber` system for “Behavior-Driven
Development”](https://cucumber.io). This grammar enables plain
English-style statements to be made both for test expectations and for
pre-conditions or assumptions. Importantly, these are embedded within
statements of “Scenarios”, which means that the crucial component of
`gherkin`-type systems for open-source software is that precisely the
same grammar is shared by all of:

1.  Software tests;
2.  Software specifications;
3.  Software bug reports; and
4.  Software feature requests.

While the development of such a system may be judged to lie well beyond
the scope of the current rOpenSci project, consideration of such may
nevertheless be warranted, particularly if pursued in conjunction with
concurrent developments in python. It ought to especially be noted that
the `@given` statements of both `hypothesis` and `gherkin/cucumber` very
frequently translate to expectation of *statistical properties*, and are
thus likely to be of particularly direct relevance to statistical
software.

# 4\. Software Design

Like testing, software design has been granted extensive prior
consideration, and a notably useful reference is again Mili (2015), who
identify the following three primary attributes, and sub-components
thereof (all shown within the [interactive network
diagram](https://mpadge.github.io/statistical-software/testing-and-validation/)):

1.  Functional Attributes
      - Correctness
      - Robustness
2.  Useability Attributes
      - Ease of Use
      - Ease of Learning
      - Customizability
      - Calibrability
      - Interoperability
3.  Structural Attributes
      - Design Integrity
      - Modularity
      - Testability
      - Adaptability

rOpenSci’s guide on [package development, maintenance, and peer
review](https://devguide.ropensci.org/) provides arguably one of the
most prominent guides on the design of R packages, primarily with its
first chapter. One of the few other notable examples of guides to design
principles of R packages is the [tidyverse design
guide](https://principles.tidyverse.org/). It is nevertheless notable
that both of these primarily focus on what might be considered more
technical aspects of package development at the expense of the more
general concepts listed above, particularly those listed under
“Useability Attributes”.

# 5\. Community

This section considers aspects related to community engagement,
equality, reach, fairness, representativeness, and other related
aspects.

## 5.1 Passive Community Construction and Engagement

## 5.2 Active Community Construction and Engagement

## 5.3 Metrics of Construction and Engagement

# 6\. References

<div id="refs" class="references">

<div id="ref-ammann_introduction_2017">

Ammann, Paul, and Jeff Offutt. 2017. *Introduction to Software Testing*.
Cambridge University Press.

</div>

<div id="ref-center_for_devices_and_radiological_health_general_2019">

for Devices, Center, and adiological Health. 2019. “General Principles
of Software Validation.” *U.S. Food and Drug Administration*.
<http://www.fda.gov/regulatory-information/search-fda-guidance-documents/general-principles-software-validation>.

</div>

<div id="ref-mili_software_2015">

Mili, Ali. 2015. *Software Testing: Concepts and Operations*.

</div>

<div id="ref-myers_art_2012">

Myers, Glenford J, Tom Badgett, and Corey Sandler. 2012. *The Art of
Software Testing*. Hoboken, NJ: Wiley.

</div>

<div id="ref-stokes_21_2012">

Stokes, David. 2012. “21 - Validation and Regulatory Compliance of
Free/Open Source Software.” In *Open Source Software in Life Science
Research*, edited by Lee Harland and Mark Forster, 481–504. Woodhead
Publishing Series in Biomedicine. Woodhead Publishing.
<https://doi.org/10.1533/9781908818249.481>.

</div>

<div id="ref-the_r_foundation_for_statistical_computing_r:_2018">

The R Foundation for Statistical Computing. 2018. “R: Regulatory
Compliance and Validation IssuesA Guidance Document for the Use of R in
Regulated ClinicalTrial Environments.” The R Foundation for Statistical
Computing. <https://www.r-project.org/doc/R-FDA.pdf>.

</div>

<div id="ref-vogel_medical_2011">

Vogel, David A. 2011. *Medical Device Software Verification, Validation
and Compliance*. Boston: Artech House.
<http://site.ebrary.com/id/10436227>.

</div>

</div>
