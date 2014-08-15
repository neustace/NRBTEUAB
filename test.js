wikiQ = function(qStr, callback) {
   $.get('https://script.google.com/macros/s/AKfycbwbo0CeJtfYKCHanFkX9q93_YnC9N7dOD6FuiR7gsxGVnLgk6Rl/exec?url=http://www.wikipathways.org/wpi/webservice/webservice.php/findPathwaysByText?query=' + qStr, callback);
};
printToDiv = function(s) {
$('#WikiRes').text(str);
};

keggQ = function(qStr, callback) {
   $.get('https://script.google.com/macros/s/AKfycbwbo0CeJtfYKCHanFkX9q93_YnC9N7dOD6FuiR7gsxGVnLgk6Rl/exec?url=http://rest.kegg.jp/get/' + qStr, callback);
};
reactomeQ = function (qStr, callback) {
	url = "https://www.ebi.ac.uk/rdf/services/reactome/servlet/query?query=" + encodeURIComponent(qStr) + "&format=JSON&limit=100&offset=0&inference=false"
	$.get(url, callback);		
};

printToDiv = function(str) {
$('#KeggRes').text(str);
};

parseKegg = function(str) {
	var ret = [];
	var strArr = str.split('\n');
	for( var i = 0; i < strArr.length; i += 1 ) {
		ret[i] = strArr[i].split('\t');
	}
	console.log(ret);
};
//.split('\t');
parseWikiQ = function (str) {
	//var lele = $.xml2json(str);
	var results = ($.xml2json(str)).result;
	console.log(str, results);		
};


//keggQ('list/pathway/hsa', printToDiv);
//keggQ('list/pathway/hsa', parseKegg);
//wikiQ('apoptosis', console.log);
//keggQ('get/C01290', parseKegg)

//reactomeQ('PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> PREFIX owl: <http://www.w3.org/2002/07/owl#> PREFIX xsd: <http://www.w3.org/2001/XMLSchema#> PREFIX dc: <http://purl.org/dc/elements/1.1/> PREFIX dcterms: <http://purl.org/dc/terms/> PREFIX foaf: <http://xmlns.com/foaf/0.1/> PREFIX skos: <http://www.w3.org/2004/02/skos/core#> PREFIX biopax3: <http://www.biopax.org/release/biopax-level3.owl#> SELECT DISTINCT ?pathway ?pathwayname WHERE {?pathway rdf:type biopax3:Pathway .  ?pathway biopax3:displayName ?pathwayname .?pathway biopax3:pathwayComponent ?reaction . ?reaction rdf:type biopax3:BiochemicalReaction . {          {?reaction ?rel ?protein .}   UNION  {  ?reaction  ?rel  ?complex . ?complex rdf:type biopax3:Complex .  ?complex ?comp ?protein . }} ?protein rdf:type biopax3:Protein . ?protein biopax3:entityReference <http://purl.uniprot.org/uniprot/P01308> }', function(x) {console.log(JSON.parse(x))})

/*reactomeQ('PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dcterms: <http://purl.org/dc/terms/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX biopax3: <http://www.biopax.org/release/biopax-level3.owl#>

SELECT DISTINCT ?pathway ?pathwayname 
WHERE 
{?pathway rdf:type biopax3:Pathway .  
?pathway biopax3:displayName ?pathwayname .
?pathway biopax3:pathwayComponent ?reaction . 
?reaction rdf:type biopax3:BiochemicalReaction . 
{          
{?reaction ?rel ?protein .}   
UNION  
{  
?reaction  ?rel  ?complex . 
?complex rdf:type biopax3:Complex .  
?complex ?comp ?protein . 
}} 
?protein rdf:type biopax3:Protein . 
?protein biopax3:entityReference <http://purl.uniprot.org/uniprot/P01308> 
}', printToDiv)
*/
