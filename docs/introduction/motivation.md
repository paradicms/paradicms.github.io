---
sidebar_position: 1
---

# Motivation

Existing [Collections Management Systems (CMSs)](https://en.wikipedia.org/wiki/Collections_management_system) assume that collection data is sparse, weakly-connected, and inherited from legacy systems. The underlying attitude of scarcity impoverishes the user experience.

Paradicms takes the opposite approach, and assumes an attitude of abundance: rich, strongly-connected metadata and few legacy constraints on any aspect of the system. Although it's challenging to meet those assumptions, having them as a foundation allows us to develop a system with a dramatically higher ceiling than alternatives that are bound to incremental improvements on the status quo.


## Design principles

### Start from a rich data model

Collection administrators should be able to capture the full richness of collection data: images, temporal and spatial grounding, statement qualifications, relationships between elements, et al. The full semantics of the data model should be preserved end-to-end, from data entry to the end user interface. The latter should take advantage of the expressivity of the data model in order to better engage users.

### Support flexible data entry

The system should not force administrators to use a built-in data entry/import tool, but should let administrators choose from a variety of bespoke and off-the-shelf tools according to need and familiarity.

### Provide multiple end user interfaces

There is no such thing as a great one-size-fits-all end user interface. The system should support multiple, lightly-specialized end user interfaces out of the box, and provide a straightforward mechanism for developing new interfaces. 

### Prioritize sustainability

The system should not require administrators to install any software, host an application server or database, or pay a third party for services. The system can take advantage of free, commodity tools, but should avoid specialized features that would increase the risk of vendor lock-in.

### Prefer open standards and open source

The system should leverage open standards and open source software in order to maximize sensible reuse. New software and other artifacts should contribute to improving the user experience instead of reinventing wheels.


## Paradicms

Paradicms meets these design principles through the thoughtful use of Linked Data, static web technologies, and commodity tools.

### Linked Data

> Linked Data is structured data which is interlinked with other data so it becomes more useful through semantic queries. It builds upon standard Web technologies such as HTTP, RDF and URIs, but rather than using them to serve web pages only for human readers, it extends them to share information in a way that can be read automatically by computers. Part of the vision of linked data is for the Internet to become a global database.
> 
([Wikipedia](https://en.wikipedia.org/wiki/Linked_data))

Linked Data is the backbone of Paradicms. The system captures data from various sources ([Airtable](https://www.airtable.com/), [Google Sheets](https://www.google.com/sheets/about/), [Omeka](https://omeka.org/), and others) in the form of [RDF graphs](https://en.wikipedia.org/wiki/Resource_Description_Framework). Paradicms user interfaces preserve the full expressivity of RDF by interpreting it directly instead of converting it to a semantically weaker form like JSON.

### Static web technologies

Paradicms follows the [Lib-Static methodology](https://lib-static.github.io/) in leveraging static web technologies and easy-to-acquire skills to create engaging web publications hosted on minimal infrastructure. The Lib-Static methodology is open data-driven and user-focused. It encourages collaborative open source development, imposes minimal infrastructure requirements and lower barriers to development, and provides full control over content and data.

### Commodity tools

Cloud services such as Google Sheets, markup languages like [Markdown](https://www.markdownguide.org/), and publishing platforms such as Omeka may already be familiar to collection administrators. Paradicms leverages this familarity by allowing administrators to enter collection data in the tool of their choice.

Similarly, Paradicms utilizes free services such as [GitHub](https://github.com/) to simplify the process of transforming collection data into end user-facing websites. 