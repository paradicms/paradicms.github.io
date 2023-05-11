---
title: Data model fever and the case of the missing applications
authors: [minorg]
---

The production of new data models, and data represented in them, is often treated as an end in itself, but data and data models are only as good as what you can do with them.

<!--truncate-->

According to Noy and McGuinness, "the best solution [to modeling a domain] almost always depends on the application that you have in mind and the extensions that you anticipate."[^1] Yet applications are often treated as an afterthought in the data modeling process, on the unspoken assumption that a sufficiently rigorous model will serve any purpose. Novice data modelers in particular have a tendency to become overzealous about the conceptual aspects of a model, at the expense of more practical concerns. Even experienced ontology engineers are often unable or unwilling to [eat their own dog food](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) by developing applications, or collaborating with application developers, to road-test new models on specific tasks. 

Data models designed in isolation from applications may impress on paper but be challenging to adopt in practice. In the cultural heritage space alone there are a number of mature data models that fit that description:

* [CIDOC CRM](https://www.cidoc-crm.org/), "a theoretical and practical tool for information integration in the field of cultural heritage" that can "help researchers, administrators and the public explore complex questions with regards to our past across diverse and dispersed datasets"
* [Linked Art](https://linked.art/), "a shared Model based on Linked Open Data to describe Art"
* [VRA Core](https://www.loc.gov/standards/vracore/), "a data standard for the description of works of visual culture as well as the images that document them"

As Andrew Tanenbaum once said, "the good thing about standards is that there are so many to choose from". Thousands of person-hours have been spent producing CIDOC CRM, Linked Art, VRA Core, and other comprehensive models in the cultural heritage space, yet they've seen limited use beyond a smattering of one-off, grant-funded prototypes and proprietary systems. Few publicly-available applications and software libraries appear to have incorporated these models. A software developer who wishes to use one of the models has to write new code for that purpose. The same developer might have to create new data as well, since there are hardly any publicly-available datasets that follow models such as CIDOC-CRM and VRA Core.

The absence of a supporting software ecosystem around these models exacerbates the problems the models are ostensibly trying to solve, such as integration and reuse. Incorporating Linked Data technologies such as [RDF](https://www.w3.org/RDF/) and [JSON-LD](https://json-ld.org/) into a "standard" doesn't automatically make data that adheres to the standard reusable by existing applications. It is perfectly possible, and common, to create data silos with data represented in RDF.

Contrast data models in the life sciences such as [PubChem](https://pubchem.ncbi.nlm.nih.gov/) and the [BioPortal ontologies](https://bioportal.bioontology.org/), which are cornerstones of rich ecosystems of software libraries and applications. [Wikidata](https://wikidata.org/) and [schema.org](https://schema.org/) are even more ambitious examples. Applications of these models go well beyond browsing and searching the data as data, and support specific tasks that end users care about.

[Galleries, libraries, archives, and museums](https://en.wikipedia.org/wiki/GLAM_(cultural_heritage)) are rich in data (and data models) and poor in engaging uses of them. [Paradicms](https://paradicms.org/) is partly a response to this situation. The project is an ongoing attempt to answer the question: what can you do with collection data integrated from multiple sources that you can't do with any one of those sources? The world has enough monolithic, proprietary [collections management systems](https://en.wikipedia.org/wiki/Collections_management_system) with incompatible data models. Creating another [union catalog](https://en.wikipedia.org/wiki/Union_catalog) is an answer, but not a good one; the best applications need richer data models than the lowest common denominator union catalogs provide. The [Linked Data](https://www.w3.org/wiki/LinkedData) and [FAIR](https://www.go-fair.org/fair-principles/) principles are important and necessary, but not sufficient; the success or failure of the enterprise ultimately depends on the quality of the applications.


[^1]: Natalya F. Noy and Deborah L. McGuinness, ["Ontology Development 101: A Guide to Creating Your
First Ontology"](https://protege.stanford.edu/publications/ontology_development/ontology101.pdf)
