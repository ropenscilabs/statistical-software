---
title: "rOpenSci Statistical Software Review: Scoping Document"
author: "Noam Ross"
date: "12/24/2019"
output: html_document
---

# Project Goals:

  - Foster a community of practice in which users and developers of statistical
    software mutually improve quality, reproducibility, and reliability of
    research.
  - Provide software creators with a set of tools to assess the quality of their
    work and a process by which to improve it.
  - Provide users of statistical software a discoverable "badge" that
    transparently conveys a level of assurance of software quality.
  - Create a set of standards that may be adopted and adapted by open source and
    private groups, academic journals, or other statistical software evaluation
    projects.
  - Focus on R as primary language, but separate language-specific from
    language- agnostic components so as to maximize adaptability to other
    contexts
  - Focus on problems specific to statistical software

# Scope: What counts as "statistical software" in the context of peer review

  - Generally
  - Specific to our own peer review
      - R packages with standard structure implementing the above.
      - Primary interface in R code, some code written in a limited set of
        compiled languages

## Key considerations

  - Purpose and scope of use of the software
  - Software life cycle
  - Are we including?
     - Visualization and exploratory data analysis?
     - Summary statistics reporters?
     - Only analytically tractable methods?

# Review Process

How should the review process be organized and managed?

## Key considerations

  - Are we reviewing full packages or only limited pieces of packages?
  - What is the outcome of review? Binary, rating, checklist, acceptance/rejection?
  - To what extent should the review process be automated or self-certified?
  - Reviewer pool and qualifications
     - Extent and type of effort expected of reviewers
  - Open or closed parts of the process

# Standards

_This somewhat parallels the Design section_

  - General and language-specific software standards
  - Standards specific to statistical software

## Statistical

   - Numerical issues
   - Method validity (i.e., is the method itself valid, independent of implementation? Has to do with, perhaps, whether there's literature supporting the method.)
   - Scope of applicability of the software / method

## Interface / API

## Documentation

## Testing

### Key considerations

  - Over what domain of data type/size/context is the package tested?
  - Are tests 
  
# Tools for Evaluation and Review

  - What tools should we focus on developing?
  - What metrics or reports are useful to authors and reviewers?
  - What metrics or measures should be the basis for standards, in absolute
    or relative terms?
  
## Metrics

-  Code structure
   - Cyclomatic complexity
   - Codebase size
   - Function size / number
   - Exported / non exported functions
-  Documentation metrics
-  Meta metrics
   -   Community
   -   Maintenance
-  Extent of testing
   -  Code coverage
   -  Range of inputs tested

## Diagnostic reports 

  - Extensions of packages such as **lintr**, **covr**, **goodpractice**
  - Comparisons of package metrics to distributions for other packages
  - Diagnostic and report aggregation, design, automatic creation

## Testing frameworks

# Related Frameworks and Projects

## Risk-Based Validation

   -  R Validation Hub work

# Annotated Bibliography

Lots to put here, but some in addition to stuff in current document:

   -  https://www.alexpghayes.com/blog/type-stable-estimation/, https://www.alexpghayes.com/blog/testing-statistical-software/
   -  https://tidymodels.github.io/model-implementation-principles/
   -  https://github.com/pharmaR/white_paper