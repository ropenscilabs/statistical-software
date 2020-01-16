
# Abstracts of selected (recent) statistical packages submitted to the [Journal of Open Source Software](https://joss.theoj.org/papers/in/R)

-----

### [ivis: dimensionality reduction in very large datasets using Siamese Networks](https://joss.theoj.org/papers/10.21105/joss.01596)

Paper Summary states:

> `ivisis` a dimensionality reduction technique that implements a Siamese Neural Network architecture trained using a novel triplet loss function. Results on simulated and real datasets demonstrate that `ivis` preserves global data structures in a low-dimensional space and adds new data points to existing embeddings using a parametric mapping function.
>
> `ivis` is easily integrated into standard machine learning pipelines through a scikit-learn compatible API and scales well to out-of-memory datasets. Both supervised and unsupervised dimensionality reduction modes are supported.

-----

### [greta: simple and scalable statistical modelling in R](https://joss.theoj.org/papers/10.21105/joss.01601)

Paper Summary states:

> Statistical modelling is used throughout the sciences. Often, statistical analyses require custom models that cannot be fitted using off-the shelf statistical software. These models can be specified in a statistical syntax and can then be automatically fit to data using methods such as Markov Chain monte Carlo (MCMC) and maximum likelihood. This lets users focus on the statistical nature of the model, rather than implementation details and inference procedures. Since the development of the widely successful WinBUGS (later developed as OpenBUGS; Spiegelhalter, Thomas, Best, & Lunn (2014)) a number of alternative software packages for custom statistical modelling have been introduced, including JAGS, Stan, and NIMBLE (Carpenter et al., 2017; de Valpine et al., 2017; Plummer & others, 2003). In these software packages, users typically write out models in a domain-specific language, which is then compiled into computational code. Though see the Python packages PyMC and Edward (Salvatier, Wiecki, & Fonnesbeck, 2016; Tran et al., 2016) in which models are specified in Python code.
>
> With increasing quantities of data, complexity, and realism of statistical models that users wish to build with these software, there is a push for software that scales better with data size and model complexity. More recently, custom statistical modelling software has focussed on methods such as Hamiltonian Monte Carlo (rather than Gibbs samplers) in order to improve to computational efficiency. This can be seen for example in the development of Stan (Carpenteret al., 2017).
>
> `greta` is an package for statistical modelling in R (R Core Team, 2019) that has three core differences to commonly used statistical modelling software packages:
>
> 1. `greta` models are written interactively in R code rather than in a compiled domain specific language.
>
> 2. `greta` can be extended by other R packages; providing a fully-featured package management system for extensions.
>
> 3. `greta` performs statistical inference using TensorFlow (Abadi et al., 2015), enabling it to scale across modern high-performance computing systems.
>
>  `greta` can be used to construct both Bayesian and non-Bayesian statistical models, and perform inference via MCMC or optimisation (for maximum likelihood or maximuma posteriori estimation). The default MCMC algorithm is Hamiltonian Monte Carlo, which is generally very efficient for Bayesian models with large numbers of parameters or highly-correlated posteriors.

-----

### [bayestestR: Describing Effects and their Uncertainty, Existence and Significance within the Bayesian Framework](https://joss.theoj.org/papers/10.21105/joss.01541)

Paper Summary states:

> The Bayesian framework for statistics is quickly gaining in popularity among scientists, for reasons such as reliability and accuracy (particularly in noisy data and small samples), the possibility of incorporating prior knowledge into the analysis, and the intuitive interpretation of results (Andrews & Baguley, 2013; Etz & Vandekerckhove, 2016; Kruschke, 2010; Kruschke, Aguinis, & Joo, 2012; Wagenmakers et al., 2017). Adopting the Bayesian framework is more of a shift in the paradigm than a change in the methodology; all the common statistical procedures (t-tests, correlations, ANOVAs, regressions, etc.) can also be achieved within the Bayesian framework. One of the core difference is that in the frequentist view, the effects are fixed (but unknown) and data are random. On the other hand, instead of having single estimates of the “true effect”, the Bayesian inference process computes the probability of different effects given the observed data, resulting in a distribution of possible values for the parameters, called the posterior distribution. The `bayestestR` package provides tools to describe these posterior distributions.
>
> Effects in the Bayesian framework can be described by characterizing their posterior distribution. Commonly reported indices include measures of centrality (e.g., the median, mean or MAP estimate) and uncertainty (the credible interval- CI). With caution, these can be considered the counterparts to the coefficient point-estimates and confidence intervals of the frequentist framework. Additionally, `bayestestR` also focuses on implementing a Bayesian null-hypothesis testing framework (in a Bayesian sense, i.e., extended to general testing of“effect existence”) by providing access to both established and exploratory indices of effect existence and significance (such as the ROPE, Kruschke & Liddell, 2018; the MAP-basedp-value, Mills, 2018; the Bayes factor, Morey & Rouder, 2011, or the Probability of Direction-pd).
>
> Existing R packages allow users to easily fit a large variety of models and extract and visualize the posterior draws. However, most of these packages only return a limited set of indices (e.g.,point-estimates and CIs). `bayestestR` provides a comprehensive and consistent set of functions to analyze and describe posterior distributions generated by a variety of models objects,including popular modeling packages such `asrstanarm` (Goodrich, Gabry, Ali, & Brilleman,2018), `brms` (Bürkner, 2017), `BayesFactor` (Morey & Rouder, 2018), `andemmeans` (Lenth,2019), thus making it a useful tool supporting the usage and development of Bayesian statistics. The main functions are described below, and full documentation is available on the package’s website.

-----

### [survPen: an R package for hazard and excess hazard modelling with multidimensional penalized splines](https://joss.theoj.org/papers/10.21105/joss.01434)

Paper Background states:

> Survival analysis deals with studying the elapsed time until an event occurs. When the event of interest is death, it aims at describing the survival probability and its corresponding mortality hazard. In epidemiology, as patients may die from their disease or from other causes, it is relevant to study the mortality due to their disease; also called “excess mortality”. This excess mortality is useful to make comparisons between different countries and time periods (Allemaniet al., 2018; Uhry et al., 2017) and is directly linked to the concept of net survival (Perme,Stare, & Estève, 2012), i.e. the survival that would be observed if patients could only die from their disease.
>
> `survPen` is an R package that implements flexible regression models for (net) survival analysis. Model specification is carried out on the logarithm of the (excess) hazard scale. `survPen` provides an efficient procedure to estimate the model parameters, and tools for (excess)hazard and (net) survival predictions with associated confidence intervals.
>
> In survival and net survival analysis, in addition to modelling the effect of time (via the baseline hazard), one has often to deal with several continuous covariates and model their functional forms, their time-dependent effects, and their interactions. Model specification becomes therefore a complex problem and penalized regression splines (Ruppert, Wand, &Carroll, 2003; Wood, 2017) represent an appealing solution to that problem as splines offer the required flexibility while penalization limits overfitting issues.
>
> Current implementations of penalized survival models can be slow or unstable and sometimes lack some key features like taking into account expected mortality to provide net survival and excess hazard estimates. In contrast, `survPen` provides an automated, fast, and stable implementation (thanks to explicit calculation of the derivatives of the likelihood) and offers a unified framework for multidimensional penalized hazard and excess hazard models

-----

### [modeLLtest: An R Package for Unbiased Model Comparison using Cross Validation](https://joss.theoj.org/papers/10.21105/joss.01542)

Paper Summary states:

> Selection among statistical models describing the same process is a crucial methodological step in quantitative research. Because different estimators for the same process are commonly available, researchers have developed tests for selecting among models. The R package `modeLLtest` implements a variety of such tests using leave-one-out cross-validation (LOOCV) to adjudicate among estimation methods. LOOCV accounts for outliers in data by comparing results across samples in which one observation has been left out (Diebold & Mariano, 2002).
>
> The R package `modeLLtest` has three main functionalities. It implements an unbiased comparison of two linear parametric, non-nested models (Desmarais & Harden, 2014; Harden &Desmarais, 2011), a test comparing two estimations of the Cox proportional hazards model -the conventional partial likelihood maximization (PLM) and the iteratively reweighted robust model (IRR) (Desmarais & Harden, 2012), and a set of more general functions for comparison of arbitrary models. In addition to making these comparison tests easily accessible in an R package, we improve the running speed of selected functions by making use of C++ to per-form LOOCV before pulling the output into R. As a result, these tests now run in a reasonable amount of time on large data sets. Researchers can use the fast LOOCV results as inputs to alternative and new model testing procedures.

-----

### [SmartEDA: An R Package for Automated Exploratory Data Analysis](https://joss.theoj.org/papers/10.21105/joss.01509)

Paper Summary states:

> Nowadays, we see applications of Data Science almost everywhere.  Some of the well-highlighted aspects of data science are the various statistical and machine learning techniques applied to solve a problem. However, any data science activity starts with an Exploratory Data Analysis (EDA). The term “Exploratory Data Analysis” was coined by Tukey (1977). EDA can be defined as the art and science of performing an initial investigation on the data by means of statistical and visualization techniques that can bring out the important aspects in the data that can be used for further analysis (Tukey, 1977). There have been many studies conducted on EDA reported in the Statistics literature. Some of the earliest work done on Exploratory Data Analysis (EDA), including coining the term and defining some of the basic EDA techniques was done by Tukey (1977). However, many researchers have formulated different definitions of EDA over the years.
>
> Chon Ho (2010) introduced EDA in the context of data mining and resampling with a focus on pattern recognition, cluster detection, and variable selection. Over the years, EDA has been used various applications across different domains such as geoscience research (Ma etal., 2017), game-based assessments (DiCerbo et al., 2015), clinical study groups (Konopka etal., 2018), and more.
>
> EDA can be categorized into descriptive statistical techniques and graphical techniques. The first category encompasses various univariate and multivariate statistical techniques, whereas the second category comprises various visualization techniques. Both of these techniques are used to explore the data, understand the patterns in the data, understand the existing relationships between the variables and most importantly, generate data driven insights that can be used by the business stakeholders. However, EDA requires a lot of manual effort and also a substantial amount of coding effort in a programming environment such as R (R CoreTeam, 2017). There is a huge need for automation of the EDA process, and this motivated us to develop the `SmartEDA` package and come up with this paper

-----

### [ccostr: An R package for estimating mean costs with censored data](https://joss.theoj.org/papers/10.21105/joss.01593)

Paper Summary states:

> Censoring is a frequent obstacle when working with time to event data, as e.g. not all patients in a medical study can be observed until death. For estimating the distribution of time to event the Kaplan-Meier estimator is useful, but when estimating mean costs it is not, since costs,as opposed to time, typically don’t accumulate at a constant rate. Often costs accumulate at a higher rate at the beginning (e.g. at diagnosis) and end (e.g. death) of the study.
>
> Several methods for estimating mean costs when working with censored data have been developed. Of note is the work by Lin, Feuer, Etzioni, & Wax (1997), who proposed three different estimators. The first, `LinT`, partitions the time period into small intervals and then estimates the mean costs by weighting the mean total cost of fully observed individuals in the interval with the probability of dying in the interval. The two others, `LinA` and `LinB`, weight the mean total cost within each interval with the probability of being alive at respectively the start or end of the interval.
>
> Later Bang & Tsiatis (2000) proposed another method based on inverse probability weighting,where complete (fully observed) cases are weighted with the probability of being censored at their event time. Two estimators were presented: the simple weighted estimator, $BT$, using total costs for fully observed cases, and the partitioned estimator, $BT_p$, utilizing cost history. Hongwei Zhao & Tian (2001) proposed an extension of the $BT$ estimator, $ZT$, which includes cost history from both censored and fully observed cases. The $ZT$ estimator was later simplified by Pfeifer & Bang (2005).
>
> In Hongwei Zhao, Bang, Wang, & Pfeifer (2007) they demonstrated the similarity of the different estimators when using the distinct censoring times for defining intervals. They concluded that the following equalities hold for the estimates of mean cost: $\mu_{BT}= \mu_{LinT}$ and $\mu_{LinA} = \mu_{LinB} = \mu_{BT_p}= \mu_{ZT}$. The estimators can be split into two classes: those that use and those that do not use cost history. As cost history contributes additional information these estimators are in general more efficient, and should be chosen if cost history is available.
>
> Previous implementations of these estimators into statistical software have been done in Stata,first by Kim & Thompson (2011) who implemented the method from Lin et al. (1997), and later by Chen, Rolfes, & Zhao (2015) who implemented the $BT$ and $ZT$ estimators, and in SAS by Honwei Zhao & Wang (2010). To our knowledge none of the methods have previously been implemented in an R package

-----

### [BayesPostEst: An R Package to Generate Postestimation Quantities for Bayesian MCMC Estimation](https://joss.theoj.org/papers/10.21105/joss.01722)

Paper Summary states:

> `BayesPostEst` is an R (R Core Team, 2019) package with convenience functions to generate and present quantities of interest after estimating Bayesian regression models fit using MCMC via JAGS (Plummer, 2017), Stan (Stan Development Team, 2019), MCMCpack (Martin,Quinn, & Park, 2011), or other MCMC samplers. Quantities of interest include predicted probabilities and changes in probabilities in generalized linear models and analyses of model fit using ROC curves and precision-recall curves. The package also contains two functions to create publication-ready tables summarizing model results with an assessment of substantively meaningful effect sizes.
>
> The package currently consists of seven functions:
>
> • `mcmcTab`: Summarize Bayesian MCMC output in a table
>
> • `mcmcReg`: Create regression tables for multiple Bayesian MCMC models using `texreg`
>
> • `mcmcAveProb`: Calculate predicted probabilities using Bayesian MCMC estimates for the “Average Case”
>
> • `mcmcObsProb`: Calculate predicted probabilities using Bayesian MCMC estimates using the “Observed Value” approach, calculating probabilities for the average of observed cases
>
> • `mcmcFD`: Calculate first differences of a Bayesian logit or probit model
>
> • `mcmcFDplot`: Plot first differences from MCMC output
>
> • `mcmcRocPrc`: Generate ROC and precision-recall curves using Bayesian MCMC estimates

-----

### [kdensity: An R package for kernel density estimation with parametric starts and asymmetric kernels](https://joss.theoj.org/papers/10.21105/joss.01566)

Paper Summary states:

> It is often necessary to estimate a probability density non-parametrically, that is, without making strong parametric assumptions such as normality.  This R (R Core Team, 2019)package provides a non-parametric density estimator that can take advantage of some of the knowledge the user has about the probability density.
>
> Kernel density estimation (Silverman, 2018) is a popular method for non-parametric density estimation based on placing kernels on each data point.  Hjort & Glad (1995) extended kernel density estimation with parametric starts. The parametric start is a parametric density that is multiplied with the kernel estimate. When the data-generating density is reasonably close to the parametric start density, kernel density estimation with that parametric start will outperform ordinary kernel density estimation.
>
> Moreover, when estimating densities on the half-open interval [0;1) and bounded intervals, such as [0;1], symmetric kernels are prone to serious boundary bias that should be corrected(Marron & Ruppert, 1994). Asymmetric kernels have been designed to avoid boundary bias and many of them are implemented in `kdensity` in addition to the classical symmetric kernels. For the unit interval, the Gaussian copula kernel of M. Jones & Henderson (2007) and the beta kernels of Chen (1999) are supported. The gamma kernel of Chen (2000) is available for the half-open interval.
>
> The supported non-parametric starts include the normal, Laplace, Gumbel, exponential, gamma, log-normal, inverse Gaussian, Weibull, Beta, and Kumaraswamy densities.  The parameters of all parametric starts are estimated using maximum likelihood.  The implemented bandwidth selectors are the classical bandwidth selectors from `stats`, unbiased cross-validation, the Hermite polynomial method from Hjort & Glad (1995), and the tailored bandwidth selector for the Gaussian copula method of M. Jones & Henderson (2007). User-defined parametric starts, kernels and bandwidth selectors can also be set.
>
> Several R packages deal with kernel estimation, see Deng & Wickham (2011) for an overview. While no other R package handles density estimation with parametric starts, several packages supports methods that handle boundary bias. Hu & Scarrott (2018) provides a variety of boundary bias correction methods in the `bckden` functions. Nagler & Vatter (2019) corrects for boundary bias using probit or logarithmically transformed local polynomial kernel density estimation. A. T. Jones, Nguyen, & McLachlan (2018) corrects for boundary bias on the halfline using a logarithmic transform. Duong (2019) supports boundary correction through the `kde.boundary` function, while Wansouwé, Somé, & Kokonendji (2015) corrects for boundary bias using asymmetric kernels.

-----

### [molic: An R package for multivariate outlier detection in contingency tables](https://joss.theoj.org/papers/10.21105/joss.01665)

Paper Summary states:

> Outlier detection is an important task in statistical analyses. An outlier is a case-specific unit since it may be interpreted as natural extreme noise in some applications, whereas in other applications it may be the most interesting observation. The `molic` package has been written to facilitate the novel outlier detection method in high-dimensional contingency tables (Lindskou, Eriksen, & Tvedebrink, 2019). In other words, the method works for data sets in which all variables are categorical, implying that they can only take on a finite set of values(also called levels).
>
> The software uses decomposable graphical models (DGMs), where the probability mass function can be associated with an interaction graph, from which conditional independences among the variables can be inferred. This gives a way to investigate the underlying nature of outliers.This is also called understandability in the literature. Outlier detection has many applications including areas such as
>
> • Fraud detection
>
> • Medical and public health
>
> • Anomaly detection in text data
>
> • Fault detection (on critical systems)
>
> • Forensic science

-----

### [DscoreApp: An user-friendly web application for computing the Implicit Association Test D-score](https://joss.theoj.org/papers/10.21105/joss.01764)

Paper Summary states:

> The Implicit Association Test (IAT; Greenwald, McGhee, & Schwartz, 1998) is one of the most commonly used measures in psychology for the implicit assessment of attitudes and preferences.  It is based on the speed and accuracy with which stimuli representing four different categories (e.g., flowers and insects, positive and negative words in a Flowers-Insects IAT) are assigned to the category to which they belong by means of two response keys. The IAT is usually composed of seven blocks, three of which are pure practice blocks where either flowers-insects images or positive-negative words are sorted in their categories. The remaining four blocks are associative practice and associative test blocks. These blocks forms the two contrasting associative conditions under which the categorization task takes place. In one associative condition (i.e., practice blocks Mapping A and test blocks Mapping A), images of flowers and positive words share the same response key, while images of insects and negative words share the other response key. In the contrasting associative condition (i.e., practice blocks Mapping B and test blocks Mapping B), images of insects and positive words share the same response key, while images of flowers and negative words share the opposite response key.
>
> The categorization task is supposed to be easier (i.e., having faster response times and higher accuracy) in the associative condition consistent with respondents’ automatically activated associations. The IAT effect results from the difference in respondents’ performance between the two contrasting conditions, and the D-score(Greenwald, Nosek, & Banaji, 2003) is the most common measure used for interpreting the strength and direction of this effect. Despite the fact that different options are available for the D-score computation (Table 1), the core procedure is the same. The difference between the D-scores only concerns the treatment for the error responses and the treatment for the fast responses

-----

### [modelStudio: Interactive Studio with Explanations for ML Predictive Models](https://joss.theoj.org/papers/10.21105/joss.01798)

Paper Introduction states:

> Machine learning predictive models are widely used in many areas of business and research.Their rising popularity is due to them being effective but often leads to problems with explaining their prediction. This has led to development of many Interpretable Machine Learning tools, e.g., `DALEX` (Biecek, 2018) R package, `lime` (Ribeiro, Singh, & Guestrin, 2016) and `shap` (Lundberg & Lee, 2017) Python packages and `H2o.ai` Driverless AI (Hall, Gill,Kurka, & Phan, 2017).
>
> Nowadays, we can see a huge demand for automation in many areas. This is how Automated Machine Learning and Automated Exploratory Data Analysis came to existence. AutoML (Truong et al., 2019) and AutoEDA (Staniak & Biecek, 2018) tools not only speed up the model development process but also often lead to new discoveries or higher quality of models.
>
> Explaining predictive models might be a time consuming and tedious task.  Libraries for interpretable machine learning (Biecek, 2018; Carme, 2019; Jenkins, Nori, Koch, & Caruana,2019; Meudec, 2019; Molnar, Casalicchio, & Bischl, 2018) require high programing skills and endless exploration of different aspects of a predictive model.
>
> There are tools for automation of the XAI process like `modelDown` (Romaszko, Tatarynowicz,Urbański, & Biecek, 2019) which produces static HTML site to compare and explain various models. Unfortunately, such tools are focused on global level explanations and deliver monotonous experience.

-----

### [hopit: An R Package for Analysis of ReportingBehavior Using Generalized Ordered Probit Models](https://joss.theoj.org/papers/10.21105/joss.01508)

Paper Summary states:

> `hopit` is an open source software library written in the R (R-Core-Team,2018) and C++(Bates & Eddelbuettel,2013; Eddelbuettel & François,2011) programming languages. The `hopit` package provides versatile methods for fitting and analyzing ordered response data in the context of heterogeneity in self reporting behavior.
>
> The ordered response data classify a measure of interest into ordered categories collected during a survey. For example, if the dependent variable is a happiness rating, then a respondent typically answers a question such as: “Taking all things together, would you say you are ... ?;and then selects from response options such as:”very happy“,”pretty happy“,”not too happy“,and”very unhappy” (Liao, Fu, & Yi,2005). Similarly, if interviewees are asked to evaluate their health in general (e.g., “Would you say your health is ... ?”), they may choose among several categories, such as “very good”, “good”, “fair”, “bad”, and “very bad” (Jürges,2007;King, Murray, Salomon, & Tandon,2004; Oksuzyan, Dańko, Caputo, Jasilionis, & Shkolnikov,2019; Rebelo & Pereira,2014). In political science, a respondent may be asked for an opinion about recent legislation (e.g. “Rate your feelings about the proposed legislation.”) and asked to choose among categories like “strongly oppose”, “mildly oppose”, “indifferent”, “mildly support”, and “strongly support” (Greene & Hensher,2010). It is easy to imagine other multi-level ordinal variables that might be used during a survey and to which the methodology described below could be applied.
>
> In practice, it is assumed that when responding to a survey question about their general happiness, health, feelings, attitudes or other status, participants are assessing their true value of this unobserved continuous variable, and project it onto the discrete scale provided. The thresholds that individuals use to categorize their true status by selecting a specific response option may be affected by the reference group chosen, their earlier life experiences, and cross-cultural differences in using scales. Thus, the responses of individuals may differ depending on their gender, age, cultural background, education, and personality traits; among other factors.
>
> From the perspective of reporting behavior modeling, one of the main tasks researchers face is to compute this continuous estimate of the underlying, latent measures of individuals based on several specific characteristics of the responses considered (e.g., health variables or happiness variables), and to account for variations in reporting across socio-demographic and cultural groups. More specifically, to build a latent, underlying measure, a generalized hierarchical ordered threshold model is fitted that regresses the reported status/attitude/feeling on two sets of independent variables (Boes & Winkelmann,2006; Greene, Harris, Hollingsworth, &Weterings,2014). When the dependent reported ordered variable is self-rated health status,then the first set of variables – i.e., health variables – assess specific aspects of individuals’health, such as measures of chronic conditions, mobility, difficulties with a range of daily activities, grip strength, anthropometric characteristics, and lifestyle behaviors. Using the second set of independent variables (threshold variables), the model also adjusts for differences across socio-demographic and cultural groups, such as differences in cultural background, gender, age, and education (Jürges,2007; King et al.,2004; Oksuzyan et al.,2019; but see Rebelo & Pereira,2014).
>
> The `hopit` package delivers functions and methods to fit (`hopit`), summarize (e.g., `summary`), check (e.g., `profile`), and compare (e.g., `AICandanova`) fitted models. The latent and threshold formulas are defined separately. The interactions can be specified both within and between these formulas. Depending on how an interactions between latent and threshold variables is interpreted, it can be added to either the latent or the threshold formula. The package has also an option to include a survey design using the `survey` package (Lumley,2004,2019).

-----

### [memochange: An R package for estimation procedures and tests for persistent time series](https://joss.theoj.org/papers/10.21105/joss.01820)

Paper Summary states:

> For modeling and forecasting time series it is essential to know whether the series are stationary or non-stationary since many commonly applied statistical methods (such as OLS) are invalid under non-stationarity. Two features that cause a time series to be non-stationary are considered here. On the one hand a time series can be subject to a change in mean, i.e. the expected value of the series changes over time.  On the other hand a time series can be subject to a break in the autocovariance often referred to as a change in persistence, i.e. the dependence structure of the series changes over time. Potential examples for both a change in mean and a change in persistence can be found in Figure 1.
>
> ... The `memochange` package is an R (R Core Team, 2019) package that identifies such changes in mean and persistence. This helps to avoid model misspecification and improves forecasts of the time series. 

-----

### [tabula: An R Package for Analysis, Seriation, and Visualization of Archaeological Count Data](https://joss.theoj.org/papers/10.21105/joss.01821)

Paper Background states:

> Detecting and quantifying material and cultural variations in time and space are important methodological issues in archaeology. To solve these issues, we need to construct reliable chronologies and quantitative descriptions of archaeological assemblages, i. e. archaeological sites or intrasite units, each described as a set of $p$ different objects.
>
> Building chronologies involves distinguishing between relative (providing only a chronological sequence) and absolute dating methods (that yield calendric indicators) (O’Brien & Lyman,2002). Within relative dating, matrix seriation is a long-established method—it was first formulated by Petrie (1899)—and has allowed for the construction of reference chronologies(Ihm, 2005). For a set $X$ of $n$ archaeological assemblages, the seriation problem comes down to discovering in $X$ an order inferred as chronological. This approach relies on a set of well-defined statistical and archaeological assumptions (Dunnell, 1970). It may use *a priori* information, e.g., absolute dates or stratigraphical constraints (Poblome & Groenen, 2003) and allows for the analysis of chronological patterns in a socio-economic or cultural perspective(e.g., (Bellanger & Husi, 2012), (Lipo, Madsen, & Dunnell, 2015)).
>
> The quantitative analysis of archaeological assemblages can thus be carried out in a synchronic,e.g., diversity measurements, or diachronic, e.g., evolutionary studies: selection process, pat-terns of cultural transmission, etc., way. These approaches cover a wide range of applications and have led to the development of a multitude of statistical models, but none have been systematically implemented to enable the deployment of reproducible workflows

-----

### [tidyLPA: An R Package to Easily Carry Out Latent Profile Analysis (LPA) Using Open-Source or Commercial Software](https://joss.theoj.org/papers/10.21105/joss.00978)

Paper Summary states:

> Researchers are often interested in identifying homogeneous subgroups within heterogeneous samples on the basis of a set of measures, such as profiles of individuals’ motivation (i.e.,their values, competence beliefs, and achievement goals). Latent Profile Analysis (LPA) isa statistical method for identifying such groups, or latent profiles, and is a special case ofthe general mixture model where all measured variables are continuous (Harring & Hodis,2016; Pastor, Barron, Miller, & Davis, 2007). The `tidyLPA` package allows users to specify different models that determine whether and how different parameters (i.e., means, variances,and covariances) are estimated, and to specify and compare different solutions based on the number of profiles extracted.
>
> The aim of the `tidyLPA` package is to provide a simple interface for conducting and evaluating LPA models. Given that LPA is only one type of mixture model, we do not expect it to replace the more general functionality of other tools that allow for the estimation of wider range of models. Nevertheless, this package provides convenient methods for conducting LPA using both open-source and commercial software, while aligning with a widely used coding framework (i.e., tidy data, described more below). In doing so, `tidyLPA` allows researchers with and without access to proprietary tools, such as `MPlus`, to conduct LPA. 



-----

### [univariateML: An R package for maximum likelihood estimation of univariate densities](https://joss.theoj.org/papers/10.21105/joss.01863)

Paper Summary states:

> `univariateML` is an R (R Core Team, 2019) package for user-friendly univariate maximum likelihood estimation (Cam, 1990). It supports more than 20 densities, the most popular generic functions such `asplot`, `AIC`, and `confint`, and a simple parametric bootstrap (Efron & Tibshirani, 1994) interface.
>
> When looking at univariate data it is natural to ask if there is a known parametric density that fits the data well. The following example uses the `egypt` (Pearson, 1902) data set included in the package and a plot of the Weibull and Gamma densities (Johnson, Kotz, & Balakrishnan,1995, Chapter 17 & 21)... A natural question to ask is which among several models fits the data best. This can be done using tools of model selection such as the AIC(Akaike, 1998).
>
> Problems involving estimation of univariate densities are common in statistics. Estimation of univariate densities is used in for instance exploratory data analysis, in the estimation of copulas (Ko, Hjort, & Hobæk Haff, 2019), as parametric starts in density estimation (Hjort & Glad, 1995; Moss & Tveten, 2019), and is of interest in and of itself.
>
> Analytic formulas for the maximum likelihood estimates are used whenever they exist. Most estimators without analytic solutions have a custom made Newton-Raphson solver. This is in contrast to the `mle` function in the built-in R package `stats4`, which supports more general maximum likelihood estimation through numerical optimization on a supplied negative log-likelihood function.
>
> `Rfast` (Papadakis et al., 2019) is an R package with fast Newton-Raphson implementations of many univariate density estimators.`univariateML` differs from `Rfast` mainly in focus: While `univariateML` is focused on user-friendly univariate density estimation, `Rfast` aims to have the fastest possible implementations of many kinds of functions


-----

### [xrnet: Hierarchical Regularized Regression to Incorporate External Data](https://joss.theoj.org/papers/10.21105/joss.01761)

Paper Summary states:

> Regularized regression is an essential tool for both feature selection and prediction with high-dimensional data. A number of R (R Core Team, 2019) packages have been developed to fit regularized regression models, including `glmnet` (Friedman, Hastie, & Tibshirani, 2010), `biglasso` (Zeng & Breheny, 2017), and `ncvreg` (Breheny & Huang, 2011). These packages can fit multiple model types including linear, multivariate linear, logistic, and Cox regression with different regularization penalties. The penalties control the complexity of the models by shrinking the coefficients toward zero, with the degree of shrinkage controlled by a tuning parameter that is typically selected by cross-validation. In addition to shrinkage, penalties like the lasso, elastic-net, SCAD (Fan & Li, 2001), and MCP (Zhang, 2010) also perform feature selection by shrinking some coefficients to exactly zero.
>
> In statistical genetics and bioinformatics, there has been an increased interest in extending regularized regression methods to integrate external data that may be informative for the association of high-dimensional genomic features (i.e., gene expression, methylation, genotypes)with a health-related outcome (i.e., cancer recurrence). Potential sources of external information within these domains include genomic annotations that describe the underlying functions of a genomic region, and summary statistics derived from external data sources or previous studies. The primary interest is to exploit the external data to both improve the estimation of the regression coefficients and increase the overall predictive performance of the fitted model.
>
> The `xrnetR` package implements a novel extension of regularized regression that enables the integration of meta-features, a particular type of external data. Meta-features, also known as meta-variables or co-data, refer to characteristics of the predictor variables. For example,meta-features of a gene expression variable can be the known function/s of the particular gene. Meta-features of a single nucleotide polymorphism (SNP) genotype variable could be information about whether the SNP is within a regulatory region. Let $y$ be an $n$-dimensional outcome vector, $X$ be a set of $p$ potential predictors measured for the $n$ observations, and $Z$ be a set of $q$ meta-features available for the $p$ predictors. Our model is related to a standard two-level hierarchical regression model, where the mean effects of the predictors, $\beta$, on a outcome are assumed to be dependent on the set of meta-features, $Z$, through a second set of regression coefficients, $\alpha$.

... plus further mathematical and technical descriptions

-----

### [perccalc: An R package for estimating percentiles from categorical variables](https://joss.theoj.org/papers/10.21105/joss.01796)

Paper Summary states:

> Social science research makes extensive use of categorical variables. This means that most variables in model definitions are a combination of categorical and ordered categorical variables,which sometimes are proxies of continuous variables such as income or years of education. The seriousness of this phenomena can be best exemplified by the surge and usage of techniques tailored specifically for this type of analysis in social science research (Agresti, 2007, 2010).
>
> In particular, educational research, where there’s a maturing literature on calculating inequality gaps, categorical data are essential for estimating inequality. For example, the income of a person is often asked in income brackets rather than the exact amount of money; researchers would prefer the exact amount but to avoid non-response accumulation and privacy concerns,income brackets are a partial solution. This solution gives the income information of respondents but at the same time in a limited fashion given that we cannot estimate traditional statistics such as the differences of percentiles from the income brackets. One example of thisis calculating the gap in cognitive abilities between the top (e.g 90th percentiles) and bottom(e.g 10th percentiles) groups in the income distribution.
>
> `perccalc` is a direct implementation of the theoretical work of Reardon (2011) where it is possible to estimate the difference between two percentiles from an ordered categorical variable. More concretely, by specifying an ordered categorical variable and a continuous variable,this method can estimate differences in the continuous variable between percentiles of the ordered categorical variable. This bring forth a relevant strategy to contrast ordered categorical variables which usually have alternative continuous measures to the percentiles of the continuous measures. Moreover, this opens an avenue for calculating percentile distributions and percentile differences for ordered categorical variables which don’t necessarily have an alternative continuous measure such as job occupation classifications; one relevant example being the classification from Erikson, Goldthorpe, & Portocarero (1979).
>
> Recently, this method has been growing in usage in education research (Bassok, Finch, Lee,Reardon, & Waldfogel, 2016; Chmielewski & Reardon, 2016; Reardon, 2011; Reardon &Portilla, 2016), yet this technique is not limited to this field alone and can be used essentially in any context where percentiles of ordered categorical variables are of interest. One example where this would provide useful would be in medicine based research, where demographic characteristics such as education categories are common factors for looking at differences between groups.
>
> The field of computational categorical data analysis has a long history in R with packages addressing small-area estimation for categorical variables (Boonstra, 2012), missing data imputation (van Buuren & Groothuis-Oudshoorn, 2011) and standard generalized models for ordinal data (Christensen, 2019). The `qualvar` package (Gombin, 2018) is one attempt to focus not on the modelling of categorical variable but rather on the properties of such variables to calculate variation in categorical variables. Yet despite the popularity of categorical-based methods, there is still not an official software package that reliably implements and tests Reardon’s method in the R programming language (R Core Team, 2019); nor in any other programming language, that I’m aware of.
>
> Currently, `perccalc` implements:
>
>   - Calculating differences in a continuous variable relative to the percentiles of an orderedcategorical variable
>
>   - Calculating values for a continuous variable relative to the percentiles of an orderedcategorical variable (values of a continuous variable for the 1th, 10th, 20th, ..., 100thpercentile of the ordered categorical variable)
>
>   - Weight-adjusted estimations for all percentile calculations
>
>   - Provides uncertainty estimates for all calculations which allows the user to produceuncertainty intervals or propagate further calculations with these uncertainty coefficients
>
> `perccalc` offers flexibility and reliability for estimating any number of percentile differences for ordered categorical variables as well as the distribution of percentiles values for an ordered categorical variable. Moreover, it provides the standard errors for the estimation which can be used to construct uncertainty intervals. This full-featured implementation offers a reliable software to use in serious peer-review research. Researchers can trust this implementation as an accurate representation given that it has been built by testing it to decimal accuracy to the theoretical model of Reardon (2011); these tests are continually checked on a weekly basis making the package particularly reliable.
>
> The major features (including examples addressing real world problems) of `perccalc` are shown in a series of vignettes in the package’s website (https://cimentadaj.github.io/perccalc/), where there is a direct implementation that matches Reardon (2011)’s initial implementation.  Additionally, the package is hosted on it’s own open source repository on Github (https://github.com/cimentadaj/perccalc/) and on the official CRAN repository (https://cran.r-project.org/web/packages/perccalc/index.html)

-----

### [mlr3: A modern object-oriented machine learning framework in R](https://joss.theoj.org/papers/10.21105/joss.01903)

Paper Summary states:

> The R(R Core Team, 2019) package `mlr3` and its associated ecosystem of extension packages implements a powerful, object-oriented and extensible framework for machine learning (ML) inR. It provides a unified interface to many learning algorithms available on CRAN, augmenting them with model-agnostic general-purpose functionality that is needed in every ML project,for example train-test-evaluation, resampling, preprocessing, hyperparameter tuning, nested resampling, and visualization of results from ML experiments. The package is a complete reimplementation of the `mlr` (Bischl et al., 2016) package that leverages many years of experience and learned best practices to provide a state-of-the-art system that is powerful,flexible, extensible, and maintainable. We target both practitioners who want to quickly apply ML algorithms to their problems and researchers who want to implement, benchmark,and compare their new methods in a structured environment. `mlr3` is suitable for short scripts that test an idea, for complex multi-stage experiments with advanced functionality that use a broad range of ML functionality, as a foundation to implement new ML (meta-)algorithms(for example AutoML systems), and everything in between. Functional correctness is ensured through extensive unit and integration tests.
>
> Several other general-purpose ML toolboxes exist for different programing languages. Themost widely used ones are scikit-learn (Pedregosa et al., 2011) for Python ,Weka(Hall etal., 2009) for Java, `andmlj` (Blaom, Kiraly, Lienart, & Vollmer, 2019) for Julia. The most important toolboxes for R are `mlr`, `caret` (Kuhn, 2008) and `tidymodels` (Kuhn & Wickham,2019).

-----

### [simode: R Package for Statistical Inference of Ordinary Differential Equations using Separable Integral-Matching](https://joss.theoj.org/papers/10.21105/joss.01850)

Paper Summary states:

> Systems of ordinary differential equations (ODEs) are commonly used for mathematical modeling of the rate of change of dynamic processes in areas such as mathematical biology (Edelstein-Keshet, 2005), biochemistry (Voit, 2000) and compartmental models in epidemiology (Anderson & May, 1992), to mention a few. Inference of ODEs involves the ‘standard’statistical problems such as studying the identifiability of a model, estimating model parameters, predicting future states of the system, testing hypotheses, and choosing the ‘best’ model.However, dynamical systems are typically very complex: nonlinear, high dimensional and only partialy measured. Moreover, data may be sparse and noisy. Thus, statistical learning (inference, prediction) of dynamical systems is not a trivial task in practice. In particular, numerical application of standard estimators, like maximum-likelihood or least-squares, may be difficult or computationally costly. It typically requires solving the system numerically for a large set of potential parameters values, and choosing the optimal values using some nonlinear optimization technique. Starting from a random initial guess, the optimization can take a long time to converge to the optimal solution. Furthermore, there is no guarantee the optimization will converge to the optimal solution at all.
>
> `simodeis` an R package for conducting statistical inference for ordinary differential equations that aims to ease the optimization process and provide more robust solutions to parameter estimation problems. The package implements a ‘two-stage’ approach. In the first stage,fast estimates of the ODEs’ parameters are calculated by way of minimization of an integral criterion function while taking into account separability of parameters and equations (if such a mathematical feature exists). In the second stage, a regular nonlinear least-squares optimization is performed starting from the estimates obtained in the first stage, in order to try and improve these estimates.
>
> The statistical methodologies applied in the package are based on recent publications that study theoretical and applied aspects of smoothing methods in the context of ordinary differential equations (Dattner, 2015; Dattner & Gugushvili, 2018; Dattner & Klaassen, 2015; Dattner et al., 2017; Yaari et al., 2018). In that sense `simode` is close in spirit to the `CollocInferR` package of (Hooker, Ramsay, & Xiao, 2015) and the `episodeR` package of (Mikkelsen & Hansen, 2017). Unlike `CollocInfer`, `simode` does not involve penalized estimation but focuses on integral-matching criterion functions instead. Unlike `episode` that also uses integral-matching criteria, `simode` uses a minimization procedure that takes advantage of the mathematical structure of the ODEs (i.e., separability of parameters from equations).


