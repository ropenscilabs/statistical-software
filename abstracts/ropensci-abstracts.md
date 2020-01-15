
# Abstracts of statistical packages previously submitted to rOpenSci

All of the following packages were rejected as being out-of-scope either
because their focus was primarily statistical, or because they were
implementations of statistical methods.

-----

### [spatialwarnings](https://github.com/ropensci/software-review/issues/197)

The issue included the following description:

> The idea of spatialwarnings is to provide a common three-step workflow to
work with all these metrics on empirical data. The basic usage is to start from
a list of matrix objects in R, (i) compute the indicators, (ii) review their
significance and (iii) display the results through classical generic functions
(plot, summary, etc.). 

while the actual [`DESCRIPTION`
file](https://github.com/spatial-ews/spatialwarnings/blob/master/DESCRIPTION)
states that the package provides,

> Tools to compute and assess significance of early-warnings signals (EWS) of
ecosystem degradation on raster data sets. EWS are metrics derived from the
observed spatial structure of an ecosystem -- e.g. spatial autocorrelation --
that increase before an ecosystem undergoes a non-linear transition (Genin et
al. (2018) <doi:10.1111/2041-210X.13058>).

-----

### [heatwaver](https://github.com/ropensci/software-review/issues/219)

The package [`DESCRIPTION`
file](https://github.com/robwschlegel/heatwaveR/blob/master/DESCRIPTION)
states,

> The different methods of defining and detecting extreme events, known as heatwaves or cold-spells in both air and water temperature data are encompassed within this package. These detection algorithms may be used on non-temperature data as well however, this is not catered for explicitly here as no use of this technique in the literature currently exists.

-----

### [hhi](https://github.com/ropensci/software-review/issues/275)

Package [`DESCRIPTION` file](https://github.com/pdwaggoner/hhi) states,

> Based on the aggregated shares retained by individual firms or actors within
a market or space, the Herfindahl-Hirschman Index (HHI) measures the level of
concentration in a space. This package allows for intuitive and straightforward
computation of HHI scores, requiring placement of objects of interest directly
into the function. The package also includes a plot function for quick visual
display of an HHI time series using any measure of time (year, quarter, month,
etc.). For usage, please cite the Journal of Open Source Software paper
associated with the package: Waggoner, Philip D. (2018)
<doi:10.21105/joss.00828>.

----

### [COGA](https://github.com/ropensci/software-review/issues/304)

The pre-submission enquiry described an *idea* for a package that was yet to be
developed:

> We designed an internalizing symptom scale based on the Semi-Structured
Assessment for the Genetics of Alcoholism (SSAGA). The score for that scale can
be calculated by any researcher using the SSAGA. SSAGA has been used in over
250 studies in the US and translated into 9 foreign languages. The paper
published contains the SAS code to calculate the scale score here.

----

### [economiccomplexity](https://github.com/ropensci/software-review/issues/312)

[`DESCRIPTION`
file](https://github.com/pachamaltese/economiccomplexity/blob/master/DESCRIPTION)
states,

> A wrapper of different indices and networks commonly used in Economic Complexity
  to explore bipartite relations such as countries and their exported products. These methods
    are also useful for different kind of relations such as countries and their spoken languages.

-----

### [gravity](https://github.com/ropensci/software-review/issues/313)

[`DESCRIPTION`
file](https://github.com/pachamaltese/gravity/blob/master/DESCRIPTION) states,

> A wrapper of different standard estimation methods for gravity models. This
package provides estimation methods for log-log models and multiplicative
models.

-----

### [windfarmGA](https://github.com/ropensci/software-review/issues/331)

[`DESCRIPTION`
file](https://github.com/YsoSirius/windfarmGA/blob/master/DESCRIPTION) states,

> The genetic algorithm is designed to optimize wind farms of any shape. It
requires a predefined amount of turbines, a unified rotor radius and an average
wind speed value for each incoming wind direction. A terrain effect model can
be included that downloads an 'SRTM' elevation model and loads a Corine Land
Cover raster to approximate surface roughness.

-----

### [gtsummary](https://github.com/ropensci/software-review/issues/334)

[`DESCRIPTION`
file](https://github.com/ddsjoberg/gtsummary/blob/master/DESCRIPTION) states
that the package,

> Creates presentation-ready tables summarizing data sets, regression models,
and more. The code to create the tables is concise and highly customizable.
Data frames can be summarized with any function, e.g. mean(), median(), even
user-written functions. Regression models are summarized and include the
reference rows for categorical variables. Common regression models, such as
logistic regression and Cox proportional hazards regression, are automatically
identified and the tables are pre-filled with appropriate column headers. The
package is enhanced when the {gt} package is installed.

