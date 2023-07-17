```turtle
@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://linked.art/example/object/43> a crm:E22_Human-Made_Object ;
    rdfs:label "Example 16x20 Painting" ;
    crm:P2_has_type <http://vocab.getty.edu/aat/300033618>,
        <http://vocab.getty.edu/aat/300133025> ;
    crm:P43_has_dimension [ a crm:E54_Dimension ;
            crm:P2_has_type <http://vocab.getty.edu/aat/300055647> ;
            crm:P90_has_value 16 ;
            crm:P91_has_unit <http://vocab.getty.edu/aat/300379100> ],
        [ a crm:E54_Dimension ;
            crm:P2_has_type <http://vocab.getty.edu/aat/300055644> ;
            crm:P90_has_value 20 ;
            crm:P91_has_unit <http://vocab.getty.edu/aat/300379100> ] .

<http://vocab.getty.edu/aat/300033618> a crm:E55_Type ;
    rdfs:label "Painting" ;
    crm:P2_has_type <http://vocab.getty.edu/aat/300435443> .

<http://vocab.getty.edu/aat/300055644> a crm:E55_Type ;
    rdfs:label "Height" .

<http://vocab.getty.edu/aat/300055647> a crm:E55_Type ;
    rdfs:label "Width" .

<http://vocab.getty.edu/aat/300133025> a crm:E55_Type ;
    rdfs:label "Artwork" .

<http://vocab.getty.edu/aat/300435443> a crm:E55_Type ;
    rdfs:label "Type of Work" .

<http://vocab.getty.edu/aat/300379100> a crm:E58_Measurement_Unit ;
    rdfs:label "inches" .
```
