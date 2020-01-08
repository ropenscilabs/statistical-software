# rOpenSci Statistical Software Review: Scoping Document

# Project Goals:

  - Foster a community of practice in which users and developers of
    statistical software mutually improve quality, reproducibility, and
    reliability of research.
  - Provide software creators with a set of tools to assess the quality
    of their work and a process by which to improve it.
  - Provide users of statistical software a discoverable “badge” that
    transparently conveys a level of assurance of software quality.
  - Create a set of standards that may be adopted and adapted by open
    source and private groups, academic journals, or other statistical
    software evaluation projects.
  - Focus on R as primary language, but separate language-specific from
    language- agnostic components so as to maximize adaptability to
    other contexts
  - Focus on problems specific to statistical software

-----

# Scope: What counts as “statistical software” in the context of peer review

  - We analysed all historical submissions to Journal of Statistical
    Software, but little insight gained.
  - Specific to our own peer review
      - R packages with standard structure implementing the above.
      - Primary interface in R code, some code written in a limited set
        of other compiled and non-compiled (e.g. javascript) languages

## Key considerations

  - Purpose and scope of use of the software
  - Lifecycles of software, and at which point in development peer
    review occurs, or might best occur.
  - Do we need to define broad sub-categories of statistical software,
    in order to potentially develop different approaches for these
    categories? Categories might include:
      - Visualization and exploratory data analysis?
      - Summary statistics reporters?
      - Only analytically tractable methods?
  - An alternative might be to identify general attributes of software
    or algorithms, such as reproducibility, potential sources and
    degrees of bias, or measures of verifiability, and to assess or
    categorise software based on these rather than potentially ambiguous
    categories per se?

-----

# Review Process

How should the review process be organized and managed?

## Key considerations

  - Are we reviewing full packages or only limited pieces of packages?
  - What is the outcome of review? Binary, rating, checklist,
    acceptance/rejection?
  - To what extent should the review process be automated or
    self-certified?
  - Reviewer pool and qualifications
      - Extent and type of effort expected of reviewers
      - To what extent might searches for suitable reviewers be
        automated?
      - What sort of metrics might be useful in such searches? (Noting
        that code analyses can quantify such aspects as commonality in
        functional calls, but generally only within single languages.)
  - Open or closed parts of the process
  - Should review be a one-off phenomenon, or should there be multiple
    review phases throughout the software lifecycle?
  - If multiple review phases, should there also be different reviewers
    for different phases?
  - Is it likely to be important to maintain separation/independence of
    reviewers from code development, or might it be better to encourage
    direct engagement of reviewers with ongoing code development?

-----

# Standards

  - General and language-specific software standards
  - Standards specific to statistical software
  - To what extent should we aim for “verification” or “validation” of
    software?

## Statistical

  - Numerical issues
  - Method validity (i.e., is the method itself valid, independent of
    implementation? Has to do with, perhaps, whether there’s literature
    supporting the method.)
  - Scope of applicability of the software / method
  - Is a submission intended to support future or subsequent
    publications?

## Software Interface

There are likely aspects of overall software “design” that might be
considered, reviewed, encouraged, or expected. rOpenSci’s guide on
[package development, maintenance, and peer
review](https://devguide.ropensci.org/) provides arguably one of the
most prominent guides on the design of R packages, primarily with its
first chapter. One of the few other notable examples of guides to design
principles of R packages is the [tidyverse design
guide](https://principles.tidyverse.org/). The following useful list of
design principles is provided by Mili (2015):

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

### Key Considerations

  - Might there be an advantage to explicitly considering some of these
    aspects of general software design?
  - If so, which?
  - At what point in the general lifecycle of software or review might
    such design aspects best be considered or integrated?

## Documentation

  - Standard documentation metrics:
      - Numbers of lines per function
      - proportion of documentation to code lines
      - presence of examples
      - coverage of examples
      - vignettes.

## Testing

Vogel (2011) states: Software that

> depends on testing alone for a defect-free \[state\] is depending on
> perfection in testing

There are no unambiguous categories of tests, but the structure of R
packages which contain both external (exported) and internal
(non-exported) functions provides for a convenient distinction between
“unit tests” as tests of *internal* functions, and *functional* or
*integration tests* as tests of *exported* functions. Almost all testing
as currently implemented in R is “concrete testing” (Mili 2015), and
little consideration has been given in R to “stochastic” or
“property-based” testing, in which expectation values of inputs and
outputs are tested, rather than concrete instantiations of such. Other
languages have developed grammars for stochastic or property-based
testing, notably through the [`hypothesis` package for
python](https://github.com/HypothesisWorks/hypothesis). These grammars
enable specification of test assumptions as well as expected test
outputs. Assumptions in `hypothesis` are declared through simple
`@given` statements that might, for example, quantify an assumed
probability distribution for input data, while outputs are specified
through equivalent `@expect` statements that might, for example, specify
expected *distributional properties* of an output rather than just
concrete values.

### Key considerations

  - To what extend should testing focus on *functional* rather than
    *unit* testing?
  - What test reporter should be used? The `testthat` package and
    similar, or might it be worth considering new test reporting
    systems?
  - Is it sufficient to consider test execution as an integral part of
    `R CMD check` only? Or might there by a case for developing
    alternative, potentially longer-running, test execution
    environments?
  - Is it worthwhile concretely defining one or more goals of testing?
    (Such as error detection, error frequencies, error tolerance,
    accuracy.)
  - What are the test data? And how easy is it to input alternative data
    to tests?
  - Is there scope for “stochastic” or “property-based” testing?

# Tools for Evaluation and Review

  - What tools should we focus on developing?
  - What metrics or reports are useful to authors and reviewers?
  - What metrics or measures should be the basis for standards, in
    absolute or relative terms?

## Metrics

  - Code structure
      - Cyclomatic complexity
      - Codebase size
      - Function size / number
      - Exported / non exported functions
  - Documentation metrics detailed above
  - Meta metrics
      - Version control?
      - Availability of website
      - Availability of source code (beyond CRAN or similar)
      - Community:
          - Software downloads and usage statistics
          - Numbers of active contributors
          - Numbers or rates of issues reported
      - Maintenance:
          - Release rate
          - Rate of response to reported issues
  - Extent of testing
      - Code coverage
      - Examples
      - Range of inputs tested
  - Dynamic metrics derived from function call networks

## Diagnostic reports

  - Extensions of packages such as **lintr**, **covr**, **goodpractice**
  - Comparisons of package metrics to distributions for other packages
  - Diagnostic and report aggregation, design, automatic creation

-----

# Related Frameworks and Projects

## Risk-Based Validation

  - R Validation Hub work

-----

# Annotated Bibliography

Lots to put here, but some in addition to stuff in current document:

  - <https://www.alexpghayes.com/blog/type-stable-estimation/>,
    <https://www.alexpghayes.com/blog/testing-statistical-software/>
  - <https://tidymodels.github.io/model-implementation-principles/>
  - <https://github.com/pharmaR/white_paper>
  - <https://github.com/coreinfrastructure/best-practices-badge/blob/master/doc/criteria.md>

<div id="refs" class="references hanging-indent">

<div id="ref-mili_software_2015">

Mili, Ali. 2015. *Software Testing: Concepts and Operations*.

</div>

<div id="ref-vogel_medical_2011">

Vogel, David A. 2011. *Medical Device Software Verification, Validation
and Compliance*. Boston: Artech House.
<http://site.ebrary.com/id/10436227>.

</div>

</div>