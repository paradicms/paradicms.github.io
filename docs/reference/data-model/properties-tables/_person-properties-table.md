| Term       | IRI              | Description                                                                      | Cardinality | Value type | Example values                       |
|------------|------------------|----------------------------------------------------------------------------------|-------------|------------|--------------------------------------|
| familyName | foaf:family      | Family name of the person                                                        | 0..1        | string     | Turing                               |             
| givenName  | foaf:givenName   | Given  name of the person                                                        | 0..1        | string     | Alan                                 |             
| name       | foaf:name        | Human-readable name                                                              | 1           | string     | Alan Turing                          |             
| page       | foaf:page        | Website of the person                                                            | 0..n        | string     | https://mysite.com                   |             
| relation   | dcterms:relation | Related IRI e.g., a Wikidata concept IRI                                         | 0..n        | IRI        | http://www.wikidata.org/entity/Q7251 |             
| sortName   | contact:sortName | Name to use in sorting the person in a list of names; if not specified, use name | 0..1        | string     | Alan Turing                          |             
