// Pumpkin//experimentwithRodica
// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("sep", rshuffle(startsWith('SAD'),startsWith('filler'))),
    'debrief'
     );

var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!";
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server."; 

// Controller settings.
// Parameter settings taken from Staub 2009

var defaults = [
    "Separator", {
        transfer: 1000,                                      // How long between sentences? (ms)
        normalMessage: " "  // What is message presented between stims? Can be blank.
    },
    "Question", {
        hasCorrect: false
    },
    "Message", {
        hideProgressBar: true
    }
];

// Items array.
var items = [

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
  ["sep", "Separator", { }],
    ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai să exersăm un pic înainte de a începe efectiv."]
                         ]}],
['shared-intro', "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Omul a căzut.", "Omul a minţit.",
                                                                                                            "Ambele"]}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut? Pur şi simplu alegeţi varianta/variantele care credeţi că poate fi continuată/pot fi continuate cu ‘intenţionat’."],
                           ["p", "Unor vorbitori nativi de limba română li se pare că doar propoziţia 'Omul a minţit' poate fi continuată cu 'intenţionat’."],
                           ["p", "Altor vorbitori li se pare că ambele propoziţii pot fi continuate cu ‘intenţionat’."],           
                           ["p", "Hai să mai exersăm un pic."],
                         ]}],
['shared-intro', "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>?",as: ["Fata a rupt scaunul.", "Fata a murdărit scaunul.",
                                                                                                            "Ambele"]}],
['shared-intro', "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>?", as: ["Actorul a murit.", "Actorul a urlat.",
                                                                                                            "Ambele"]}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],
  
// Shared experimental items + fillers
  

[["SAD-cap",1], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Maria s-a cireşit la cap.", "Maria s-a cireşit pe cap.", "Ambele"]}],
[["SAD-fata",1], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Maria s-a cireşit la faţă.", "Maria s-a cireşit pe faţă.", "Ambele"]}],
[["SAD-maini",1], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Maria s-a cireşit la mȃini.", "Maria s-a cireşit pe mȃini.", "Ambele"]}],
[["SAD-picioare",1], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Maria s-a cireşit la picioare.", "Maria s-a cireşit pe picioare.", "Ambele"]}],
[["SAD-gat",1], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Maria s-a cireşit la gȃt.", "Maria s-a cireşit pe gȃt.", "Ambele"]}],
[["SAD-gura",1], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Maria s-a cireşit la gură.", "Maria s-a cireşit pe gură.", "Ambele"]}],
[["SAD-deget",1], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Maria s-a cireşit la deget.", "Maria s-a cireşit pe deget.", "Ambele"]}],
[["SAD-spate",1], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Maria s-a cireşit la spate.", "Maria s-a cireşit pe spate.","Ambele"]}],
[["SAD-burta",1], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Maria s-a cireşit la burtă.", "Maria s-a cireşit pe burtă.","Ambele"]}],

 
[["SAD-cap",2], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Dumitru s-a piersicit la cap.", "Dumitru s-a piersicit pe cap.", "Ambele"]}],
[["SAD-fata",2], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>?",as: ["Dumitru s-a piersicit la faţă.", "Dumitru s-a piersicit pe faţă.", "Ambele"]}],
[["SAD-maini",2], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Dumitru s-a piersicit la mȃini.", "Dumitru s-a piersicit pe mȃini.", "Ambele"]}],
[["SAD-picioare",2], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Dumitru s-a piersicit la picioare.", "Dumitru s-a piersicit pe picioare.","Ambele"]}],
[["SAD-gat",2], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Dumitru s-a piersicit  la gȃt.", "Dumitru s-a piersicit pe gȃt.","Ambele"]}],
[["SAD-gura",2], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Dumitru s-a piersicit la gură.", "Dumitru s-a piersicit pe gură.","Ambele"]}],
[["SAD-deget",2], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Dumitru s-a piersicit la deget.", "Dumitru s-a piersicit pe deget.","Ambele"]}],
[["SAD-spate",2], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Dumitru s-a piersicit la spate.", "Dumitru s-a piersicit pe spate.", "Ambele"]}],
[["SAD-burta",2], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Dumitru s-a piersicit la burtă.", "Dumitru s-a piersicit pe burtă.","Ambele"]}],

  
[["SAD-cap",3], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Marina s-a zmeurit la cap.", "Marina s-a zmeurit pe cap.", "Ambele"]}],
[["SAD-fata",3], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Marina s-a zmeurit la faţă.", "Marina s-a zmeurit pe faţă.", "Ambele"]}],
[["SAD-maini",3], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Marina s-a zmeurit la mȃini.", "Marina s-a zmeurit pe mȃini.","Ambele"]}],
[["SAD-picioare",3], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Marina s-a zmeurit la picioare.", "Marina s-a zmeurit pe picioare.","Ambele"]}],
[["SAD-gat",3], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Marina s-a zmeurit la gȃt.", "Marina s-a zmeurit pe gȃt.", "Ambele"]}],
[["SAD-gura",3], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Marina s-a zmeurit la gură.", "Marina s-a zmeurit pe gură.", "Ambele"]}],
[["SAD-deget",3], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Marina s-a zmeurit la deget.", "Marina s-a zmeurit pe deget.", "Ambele"]}],
[["SAD-spate",3], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Marina s-a zmeurit la spate.", "Marina s-a zmeurit pe spate.", "Ambele"]}],
[["SAD-burta",3], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Marina s-a zmeurit la burtă.", "Marina s-a zmeurit pe burtă.", "Ambele"]}],     

  
[["SAD-cap",4], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Daniel  s-a castraveţit la cap.", "Daniel  s-a castraveţit pe cap.", "Ambele"]}],
[["SAD-fata",4], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Daniel  s-a castraveţit la faţă.", "Daniel  s-a castraveţit pe faţă.", "Ambele"]}],
[["SAD-maini",4], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Daniel  s-a castraveţit la mȃini.", "Daniel  s-a castraveţit pe mȃini.","Ambele"]}],
[["SAD-picioare",4], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Daniel  s-a castraveţit la picioare.", "Daniel  s-a castraveţit pe picioare.","Ambele"]}],
[["SAD-gat",4], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Daniel  s-a castraveţit la gȃt.", "Daniel  s-a castraveţit pe gȃt.", "Ambele"]}],
[["SAD-gura",4], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Daniel  s-a castraveţit la gură.", "Daniel  s-a castraveţit pe gură.","Ambele"]}],
[["SAD-deget",4], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Daniel  s-a castraveţit la deget.", "Daniel  s-a castraveţit pe deget.","Ambele"]}],
[["SAD-spate",4], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Daniel  s-a castraveţit la spate.", "Daniel  s-a castraveţit pe spate.","Ambele"]}],
[["SAD-burta",4], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Daniel  s-a castraveţit la burtă.", "Daniel  s-a castraveţit pe burtă.","Ambele"]}],
 
[["SAD-cap",5], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura s-a ciupercit la cap.", "Laura s-a ciupercit pe cap.","Ambele"]}],
[["SAD-fata",5], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura s-a ciupercit la faţă.", "Laura s-a ciupercit pe faţă.", "Ambele"]}],
[["SAD-maini",5], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura s-a ciupercit la mȃini.", "Laura s-a ciupercit pe mȃini.", "Ambele"]}],
[["SAD-picioare",5], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura s-a ciupercit la picioare.", "Laura s-a ciupercit pe picioare.","Ambele"]}],
[["SAD-gat",5], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura s-a ciupercit la gȃt.", "Laura s-a ciupercit pe gȃt.", "Ambele"]}],
[["SAD-gura",5], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura s-a ciupercit la gură.", "Laura s-a ciupercit pe gură.", "Ambele"]}],
[["SAD-deget",5], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura s-a ciupercit la deget.", "Laura s-a ciupercit pe deget.", "Ambele"]}],
[["SAD-spate",5], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura s-a ciupercit la spate.", "Laura s-a ciupercit pe spate.","Ambele"]}],
[["SAD-burta",5], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura s-a ciupercit la burtă.", "Laura s-a ciupercit pe burtă.", "Ambele"]}],

  
[["SAD-cap",6], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Matei s-a conopidit la cap.", "Matei s-a conopidit pe cap.", "Ambele"]}],
[["SAD-fata",6], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Matei s-a conopidit la faţă.", "Matei s-a conopidit pe faţă.", "Ambele"]}],
[["SAD-maini",6], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Matei s-a conopidit la mȃini.", "Matei s-a conopidit pe mȃini.", "Ambele"]}],
[["SAD-picioare",6], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Matei s-a conopidit la picioare.", "Matei s-a conopidit pe picioare.","Ambele"]}],
[["SAD-gura",6], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Matei s-a conopidit la gură.", "Matei s-a conopidit pe gură.","Ambele"]}],
[["SAD-gat",6], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Matei s-a conopidit la gȃt.", "Matei s-a conopidit pe gȃt.","Ambele"]}],
[["SAD-deget",6], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Matei s-a conopidit la deget.", "Matei s-a conopidit pe deget.","Ambele"]}],
[["SAD-spate",6], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Matei s-a conopidit la spate.", "Matei s-a conopidit pe spate.","Ambele"]}],
[["SAD-burta",6], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Matei  s-a conopidit la burtă.", "Matei s-a conopidit pe burtă.","Ambele"]}],


  
[["SAD-cap",7], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Elena s-a cartofit la cap.", "Elena s-a cartofit pe cap.", "Ambele"]}],
[["SAD-fata",7], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Elena s-a cartofit la faţă.", "Elena s-a cartofit pe faţă.","Ambele"]}],
[["SAD-maini",7], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Elena s-a cartofit la mȃini.", "Elena s-a cartofit pe mȃini.","Ambele"]}],
[["SAD-picioare",7], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Elena s-a cartofit la picioare.", "Elena s-a cartofit pe picioare.","Ambele"]}],
[["SAD-gat",7], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Elena s-a cartofit la gȃt.", "Elena s-a cartofit pe gȃt.","Ambele"]}],
[["SAD-gura",7], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Elena s-a cartofit la gură.", "Elena s-a cartofit pe gură.", "Ambele"]}],
[["SAD-deget",7], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Elena s-a cartofit la deget.", "Elena s-a cartofit pe deget.","Ambele"]}],
[["SAD-spate",7], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Elena s-a cartofit la spate.", "Elena s-a cartofit pe spate.","Ambele"]}],
[["SAD-burta",7], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Elena s-a cartofit la burtă.", "Elena s-a cartofit pe burtă.","Ambele"]}],


[["SAD-cap",8], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Monica s-a pepenit la cap.", "Monica s-a pepenit pe cap.", "Ambele"]}],
[["SAD-fata",8], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Monica s-a pepenit la faţă.", "Monica s-a pepenit pe faţă.", "Ambele"]}],
[["SAD-maini",8], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Monica s-a pepenit la mȃini.", "Monica s-a pepenit pe mȃini.", "Ambele"]}],
[["SAD-picioare",8], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Monica s-a pepenit la picioare.", "Monica s-a pepenit pe picioare.","Ambele"]}],
[["SAD-gat",8], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Monica s-a pepenit la gȃt.", "Monica s-a pepenit pe gȃt.","Ambele"]}],
[["SAD-gura",8], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Monica s-a pepenit la gură.", "Monica s-a pepenit pe gură.","Ambele"]}],
[["SAD-deget",8], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Monica s-a pepenit la deget.", "Monica s-a pepenit pe deget.", "Ambele"]}],
[["SAD-spate",8], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Monica s-a pepenit la spate.", "Monica s-a pepenit pe spate.","Ambele"]}],
[["SAD-burta",8], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Monica  s-a pepenit la burtă.", "Monica s-a pepenit pe burtă.","Ambele"]}],
 
  
[["SAD-cap",9], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alexandru s-a dovlecit la cap.", "Alexandru s-a dovlecit pe cap.", "Ambele"]}],
[["SAD-fata",9], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alexandru s-a dovlecit la faţă.", "Alexandru s-a dovlecit pe faţă.","Ambele"]}],
[["SAD-maini",9], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alexandru s-a dovlecit la mȃini.", "Alexandru s-a dovlecit pe mȃini.","Ambele"]}],
[["SAD-picioare",9], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alexandru s-a dovlecit la picioare.", "Alexandru s-a dovlecit pe picioare.","Ambele"]}],
[["SAD-gat",9], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alexandru s-a dovlecit la gȃt.", "Alexandru s-a dovlecit pe gȃt.","Ambele"]}],
[["SAD-gura",9], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alexandru s-a dovlecit la gură.", "Alexandru s-a dovlecit pe gură.","Ambele"]}],
[["SAD-deget",9], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alexandru s-a dovlecit la deget.", "Alexandru s-a dovlecit pe deget.","Ambele"]}],
[["SAD-spate",9], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alexandru s-a dovlecit la spate.", "Alexandru s-a dovlecit pe spate.", "Ambele"]}],
[["SAD-burta",9], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alexandru s-a dovlecit la burtă.", "Alexandru s-a dovlecit pe burtă.", "Ambele"]}],




  //// Fillers
[["filler-activepassive",10], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Mirela a fost spănacită.", "Mirela a spănacit.", "Ambele"]}],
[["filler-activepassive",11], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Mihai a fost caisit.", "Mihai a caisit.", "Ambele"]}],
[["filler-activepassive",12], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Miriam a fost sălăţită.", "Miriam a sălăţit.", "Ambele"]}],
[["filler-activepassive",13], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Tiberiu a fost ananasit.", "Tiberiu a ananasit.","Ambele"]}],
[["filler-activepassive",14], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Lorena a fost ţelinită.", "Lorena a ţelinit.","Ambele"]}],
[["filler-activepassive",15], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Andu a fost smochinit.", "Andu a smochinit.", "Ambele"]}],
[["filler-activepassive",16], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Mihaela a fost gogoşărită.", "Mihaela a gogoşărit.", "Ambele"]}],                                                                                                                                                                                                                               
[["filler-activepassive",17], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Silviu a fost nectarinit.", "Silviu a nectarinit.", "Ambele"]}],
[["filler-activepassive",18], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Sofia a fost prunită.", "Sofia a prunit.", "Ambele"]}],
  
[["filler-animateinanimate",19], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Rodica a lămȃit.", "Copacul a lămȃit.", "Ambele"]}],
[["filler-animateinanimate",20], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Luca a căpşunit.", "Tufa a căpşunit.", "Ambele"]}],
[["filler-animateinanimate", 21], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Loredana a alunit.", "Arborele a alunit.", "Ambele"]}],
[["filler-animateinanimate", 22], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Toma a strugurit.", "Via a strugurit.", "Ambele"]}],
[["filler-animateinanimate", 23], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Cristina a corcoduşit.", "Ramura a corcoduşit.", "Ambele"]}],
[["filler-animateinanimate", 24], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Dragoş a măzărit.", "Planta a măzărit.", "Ambele"]}],
[["filler-animateinanimate", 25], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Alina a cepuit.", "Bulbul a cepuit.", "Ambele"]}],  
[["filler-animateinanimate", 26], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Traian a ridichit.", "Pămȃntul a ridichit.", "Ambele"]}],
[["filler-animateinanimate", 27], "Question", {q:"Care propoziţie poate fi continuată cu <i>‘intenţionat’</i>? ",as: ["Laura a măruit.", "Livada a măruit.", "Ambele"]}]
 
];
