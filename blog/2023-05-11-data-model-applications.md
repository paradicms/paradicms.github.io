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

As Andrew Tanenbaum once said, "the good thing about standards is that there are so many to choose from". Thousands of person-hours have been spent producing CIDOC CRM, Linked Art, VRA Core, and other comprehensive models in the cultural heritage space, yet they've seen limited use beyond a smattering of one-off, grant-funded prototypes and proprietary systems.

There is a widespread assumption that the use of Linked Data technologies such as [RDF](https://www.w3.org/RDF/) and [JSON-LD](https://json-ld.org/) and adherence to the [Linked Data](https://www.w3.org/wiki/LinkedData) and [FAIR](https://www.go-fair.org/fair-principles/) principles obviate the need for additional tooling to support a data model, such as software libraries. The implication is that data and data models that embrace these technologies and principles will automatically be useful to existing applications and libraries. However, it is perfectly possible, and common, to create data silos with data represented in RDF.

The absence of a supporting software ecosystem around data models like VRA Core exacerbates the problems of integration, interoperability, and reuse that the models are ostensibly trying to solve. Few publicly-available applications and software libraries appear to have adopted these data models. A software developer who wishes to use one of the models has to write new code for that purpose. The same developer might have to create new data as well, since there are hardly any publicly-available datasets that follow models such as CIDOC-CRM and VRA Core. These are common challenges for emerging standards, which is why established standards bodies such as the [W3C](https://www.w3.org/participate/implementation.html) and the [IETF](https://datatracker.ietf.org/doc/html/rfc5657) insist on multiple implementations, test suites, and other processes that demonstrate a standard's viability.

In contrast to cultural heritage standards like VRA Core, data models in the life sciences such as [PubChem](https://pubchem.ncbi.nlm.nih.gov/) and the [BioPortal ontologies](https://bioportal.bioontology.org/) are embedded in rich ecosystems of software libraries and applications. [Wikidata](https://wikidata.org/) and [schema.org](https://schema.org/) are even more ambitious examples. The data models for these systems were not developed in isolation, but driven by the needs of users and task-specific applications beyond browsing and searching the data as data.

Conceiving of [collections as data](https://collectionsasdata.github.io/) and representing them as Linked Data are good first steps for the cultural heritage sector, but collection data is only as useful as what you can do it. [Galleries, libraries, archives, and museums](https://en.wikipedia.org/wiki/GLAM_(cultural_heritage)) are rich in data (and data models) and poor in engaging uses of them. No one needs another siloed [collections management system](https://en.wikipedia.org/wiki/Collections_management_system) with an incompatible data model, no matter how nice the interface looks. Instead, we should be answering the question: what can we do with collection data integrated from multiple sources that we can't do with any one of those sources? Creating another [union catalog](https://en.wikipedia.org/wiki/Union_catalog) is an answer, but not a good one; the best applications need richer data models than the lowest common denominator union catalogs provide. We can do better than that.

[^1]: Natalya F. Noy and Deborah L. McGuinness, ["Ontology Development 101: A Guide to Creating Your
First Ontology"](https://protege.stanford.edu/publications/ontology_development/ontology101.pdf)
