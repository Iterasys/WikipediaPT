$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 3,
      "value": "# Funcionalidade: consulta"
    },
    {
      "line": 4,
      "value": "#   Cenario: Consultar Ovo de Pascoa"
    },
    {
      "line": 5,
      "value": "#     Dado que acesso a Wikipedia em Portugues"
    },
    {
      "line": 6,
      "value": "#     Quando pesquiso por \"Ovo de Páscoa\""
    },
    {
      "line": 7,
      "value": "#     Entao Exibe a expressao \"Ovo de Páscoa\" no titulo da guia"
    }
  ],
  "line": 9,
  "name": "consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3270610400,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "pesquiso por \"Ovo de Páscoa\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Exibe a expressao \"Ovo de Páscoa\" no titulo da guia",
  "keyword": "Then "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortuguesEn()"
});
formatter.result({
  "duration": 2959717100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPorEn(String)"
});
formatter.result({
  "duration": 2524308000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 19
    }
  ],
  "location": "Post.exibeAExpressaoNoTituloDaGuiaEn(String)"
});
formatter.result({
  "duration": 98723900,
  "status": "passed"
});
formatter.after({
  "duration": 1414648300,
  "status": "passed"
});
});