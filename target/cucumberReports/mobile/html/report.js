$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Post.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    },
    {
      "line": 2,
      "value": "# encoding: utf8"
    }
  ],
  "line": 5,
  "name": "consulta",
  "description": "",
  "id": "consulta",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 2711065399,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Consultar Ovo de Pascoa",
  "description": "",
  "id": "consulta;consultar-ovo-de-pascoa",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 7,
  "name": "que acesso a Wikipedia em Portugues",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "pesquiso por \"Ovo de Páscoa\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 9,
  "name": "Exibe a expressao \"Ovo de Páscoa\" no titulo da guia",
  "keyword": "Entao "
});
formatter.match({
  "location": "Post.queAcessoAWikipediaEmPortugues()"
});
formatter.result({
  "duration": 2683039800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 14
    }
  ],
  "location": "Post.pesquisoPor(String)"
});
formatter.result({
  "duration": 2491675699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ovo de Páscoa",
      "offset": 19
    }
  ],
  "location": "Post.exibeAExpressaoNoTituloDaGuia(String)"
});
formatter.result({
  "duration": 59113000,
  "status": "passed"
});
formatter.after({
  "duration": 850829001,
  "status": "passed"
});
});