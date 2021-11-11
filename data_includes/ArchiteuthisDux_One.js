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
    
        "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],            /// What are options on Likert scale? Define both # of options and their labels.
        presentAsScale: true,                               /// Should it be presented as a scale? 'true' or 'false'
        instructions: "Use number keys or click boxes to answer.",    /// Brief instructions present on each trial
        leftComment: "(Bad)", rightComment: "(Good)"        /// Labels on end-points of scale
    }
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
['shared-intro', "Question", {q:"Pentru propoziţia <i>‘Omul a telefonat.’</i> ce interpretare aţi accepta? ",as: ["Omul a devenit ca un telefon.", "Omul a făcut ceva cu un telefon.",
                                                                                                            "Ambele"]}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut? Pur şi simplu alegeţi interpretarea/interpretările care vi se pare/par potrivită/potrivite’."],           
                           ["p", "Hai să mai exersăm un pic."],
                         ]}],
['shared-intro', "Question", {q:"Pentru propoziţia <i>‘Grădina a înflorit.’</i> ce interpretare aţi accepta? ",as: ["Grădina a devenit plină cu flori.", "Grădina a făcut ceva cu ((nişte) flori.",
                                                                                                            "Ambele"]}],
  ['shared-intro', "Question", {q:"Pentru propoziţia <i>‘Mihai a înroşit ouăle.’</i> ce interpretare aţi accepta? ",as: ["Ouăle au devenit roşii.", "Mihai a făcut ceva cu ouăle.",
                                                                                                            "Ambele"]}],
  ['shared-intro', "Question", {q:"Pentru propoziţia <i>‘Claudia s-a aricit la auzul veştii.’</i> ce interpretare aţi accepta? ",as: ["Claudia a devenit ca ariciul.", "Claudia a făcut ceva cu un arici.",
                                                                                                            "Ambele"]}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],
  
// Shared experimental items + fillers
  

[["SAD-verb",1], "Question", {q:"Pentru propoziţia <i>‘Maria a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["SAD-se",1], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                   "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["SAD-pe",1], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit pe mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["SAD-la",1], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit la mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                "AcceptabilityJudgment", {s:"How would you rate this statement?"}],

[["SAD-verb",2], "Question", {q:"Pentru propoziţia <i>‘Dumitru a piersicit.’</i> ce interpretare aţi accepta? ",as: ["Dumitru a devenit ca o piersică.", "Dumitru a făcut ceva cu o piersică.", "Ambele"]},
                  "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["SAD-se",2], "Question", {q:"Pentru propoziţia <i>‘Dumitru s-a piersicit.’</i> ce interpretare aţi accepta? ",as: ["Dumitru a devenit ca o piersică.", "Dumitru a făcut ceva cu o piersică.", "Ambele"]},
                  "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["SAD-pe",2], "Question", {q:"Pentru propoziţia <i>‘Dumitru s-a piersicit pe mȃini.’</i> ce interpretare aţi accepta? ",as: ["Dumitru sau mȃinile lui au devenit ca o piersică.", "Dumitru a făcut ceva cu o piersică.", "Ambele"]},
                  "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["SAD-la",2], "Question", {q:"Pentru propoziţia <i>‘Dumitru s-a piersicit la mȃini.’</i> ce interpretare aţi accepta? ",as: ["Dumitru sau mȃinile lui au devenit ca o piersică.", "Dumitru a făcut ceva cu o piersică.", "Ambele"]},
                  "AcceptabilityJudgment", {s:"How would you rate this statement?"}],

[["SAD-verb",3], "Question", {q:"Pentru propoziţia <i>‘Marina a zmeurit.’</i> ce interpretare aţi accepta? ",as: ["Marina a devenit ca o zmeură.", "Marina a făcut ceva cu o zmeură.", "Ambele"]}],
[["SAD-se",3], "Question", {q:"Pentru propoziţia <i>‘Marina s-a zmeurit.’</i> ce interpretare aţi accepta? ",as: ["Marina a devenit ca o zmeură.", "Marina a făcut ceva cu o zmeură.", "Ambele"]}],
[["SAD-pe",3], "Question", {q:"Pentru propoziţia <i>‘Marina s-a zmeurit pe mȃini.’</i> ce interpretare aţi accepta? ",as: ["Marina sau mȃinile ei au devenit ca o zmeură.", "Marina a făcut ceva cu o zmeură.", "Ambele"]}],
[["SAD-la",3], "Question", {q:"Pentru propoziţia <i>‘Marina s-a zmeurit la mȃini.’</i> ce interpretare aţi accepta? ",as: ["Marina sau mȃinile ei au devenit ca o zmeură.", "Marina a făcut ceva cu o zmeură.", "Ambele"]}],

[["SAD-verb",4], "Question", {q:"Pentru propoziţia <i>‘Daniel a castraveţit.’</i> ce interpretare aţi accepta? ",as: ["Daniel a devenit ca un castravete.", "Daniel a făcut ceva cu un castravete.", "Ambele"]}],
[["SAD-se",4], "Question", {q:"Pentru propoziţia <i>‘Daniel s-a castraveţit.’</i> ce interpretare aţi accepta? ",as: ["Daniel a devenit ca un castravete.", "Daniel a făcut ceva cu un castravete.", "Ambele"]}],
[["SAD-pe",4], "Question", {q:"Pentru propoziţia <i>‘Daniel s-a castraveţit pe mȃini.’</i> ce interpretare aţi accepta? ",as: ["Daniel sau mȃinile lui au devenit ca un castravete.", "Daniel a făcut ceva cu un castravete.", "Ambele"]}],
[["SAD-la",4], "Question", {q:"Pentru propoziţia <i>‘Daniel s-a castraveţit la mȃini.’</i> ce interpretare aţi accepta? ",as: ["Daniel sau mȃinile lui au devenit ca un castravete.", "Daniel a făcut ceva cu un castravete.", "Ambele"]}],



[["SAD-verb",5], "Question", {q:"Pentru propoziţia <i>‘Laura a ciupercit.’</i> ce interpretare aţi accepta? ", as: ["Laura a devenit ca o ciupercă.", "Laura a făcut ceva cu o ciupercă.", "Ambele"]}],
[["SAD-se",5], "Question", {q:"Pentru propoziţia <i>‘Laura s-a ciupercit.’</i> ce interpretare aţi accepta? ", as: ["Laura a devenit ca o ciupercă.", "Laura a făcut ceva cu o ciupercă.", "Ambele"]}],
[["SAD-pe",5], "Question", {q:"Pentru propoziţia <i>‘Laura s-a ciupercit pe mȃini.’</i> ce interpretare aţi accepta? ", as: ["Laura sau mȃinile ei au devenit ca o ciupercă.", "Laura a făcut ceva cu o ciupercă.", "Ambele"]}],
[["SAD-la",5], "Question", {q:"Pentru propoziţia <i>‘Laura s-a ciupercit la mȃini.’</i> ce interpretare aţi accepta? ", as: ["Laura sau mȃinile ei au devenit ca o ciupercă.", "Laura a făcut ceva cu o ciupercă.", "Ambele"]}],

[["SAD-verb",6], "Question", {q:"Pentru propoziţia <i>‘Matei a conopidit.’</i> ce interpretare aţi accepta? ", as: ["Matei a devenit ca o conopidă.", "Matei a făcut ceva cu o conopidă.", "Ambele"]}],
[["SAD-se",6], "Question", {q:"Pentru propoziţia <i>‘Matei s-a conopidit.’</i> ce interpretare aţi accepta? ", as: ["Matei a devenit ca o conopidă.", "Matei a făcut ceva cu o conopidă.", "Ambele"]}],
[["SAD-pe",6], "Question", {q:"Pentru propoziţia <i>‘Matei s-a conopidit pe mȃini.’</i> ce interpretare aţi accepta? ", as: ["Matei sau mȃinile lui au devenit ca o conopidă.", "Matei a făcut ceva cu o conopidă.", "Ambele"]}],
[["SAD-la",6], "Question", {q:"Pentru propoziţia <i>‘Matei s-a conopidit la mȃini.’</i> ce interpretare aţi accepta? ", as: ["Matei sau mȃinile lui au devenit ca o conopidă.", "Matei a făcut ceva cu o conopidă.", "Ambele"]}],

[["SAD-verb",7], "Question", {q:"Pentru propoziţia <i>‘Elena a cartofit.’</i> ce interpretare aţi accepta? ", as: ["Elena a devenit ca un cartof.", "Elena a făcut ceva cu un cartof.", "Ambele"]}],
[["SAD-se",7], "Question", {q:"Pentru propoziţia <i>‘Elena s-a cartofit.’</i> ce interpretare aţi accepta? ", as: ["Elena a devenit ca un cartof.", "Elena a făcut ceva cu un cartof.", "Ambele"]}],
[["SAD-pe",7], "Question", {q:"Pentru propoziţia <i>‘Elena s-a cartofit pe mȃini.’</i> ce interpretare aţi accepta? ", as: ["Elena sau mȃinile ei au devenit ca un cartof.", "Elena a făcut ceva cu un cartof.", "Ambele"]}],
[["SAD-la",7], "Question", {q:"Pentru propoziţia <i>‘Elena s-a cartofit la mȃini.’</i> ce interpretare aţi accepta? ", as: ["Elena sau mȃinile ei devenit ca un cartof.", "Elena a făcut ceva cu un cartof.", "Ambele"]}],

[["SAD-verb",8], "Question", {q:"Pentru propoziţia <i>‘Monica a pepenit.’</i> ce interpretare aţi accepta? ", as: ["Monica a devenit ca un pepene.", "Monica a făcut ceva cu un pepene.", "Ambele"]}],
[["SAD-se",8], "Question", {q:"Pentru propoziţia <i>‘Monica s-a pepenit.’</i> ce interpretare aţi accepta? ", as: ["Monica a devenit ca un pepene.", "Monica a făcut ceva cu un pepene.", "Ambele"]}],
[["SAD-pe",8], "Question", {q:"Pentru propoziţia <i>‘Monica s-a pepenit pe mȃini.’</i> ce interpretare aţi accepta? ", as: ["Monica sau mȃinile ei au devenit ca un pepene.", "Monica a făcut ceva cu un pepene.", "Ambele"]}],
[["SAD-la",8], "Question", {q:"Pentru propoziţia <i>‘Monica s-a pepenit la mȃini.’</i> ce interpretare aţi accepta? ", as: ["Monica sau mȃinile ei au devenit ca un pepene.", "Monica a făcut ceva cu un pepene.", "Ambele"]}],


[["SAD-verb",9], "Question", {q:"Pentru propoziţia <i>‘Alexandru a dovlecit.’</i> ce interpretare aţi accepta? ", as: ["Alexandru a devenit ca un dovleac.", "Alexandru a făcut ceva cu un dovleac.", "Ambele"]}],
[["SAD-se",9], "Question", {q:"Pentru propoziţia <i>‘Alexandru s-a dovlecit.’</i> ce interpretare aţi accepta? ", as: ["Alexandru a devenit ca un dovleac.", "Alexandru a făcut ceva cu un dovleac.", "Ambele"]}],
[["SAD-pe",9], "Question", {q:"Pentru propoziţia <i>‘Alexandru s-a dovlecit pe mȃini.’</i> ce interpretare aţi accepta? ", as: ["Alexandru sau mȃinile lui au devenit ca un dovleac.", "Alexandru a făcut ceva cu un dovleac.", "Ambele"]}],
[["SAD-la",9], "Question", {q:"Pentru propoziţia <i>‘Alexandru s-a dovlecit la mȃini.’</i> ce interpretare aţi accepta? ", as: ["Alexandru sau mȃinile lui au devenit ca un dovleac.", "Alexandru a făcut ceva cu un dovleac.", "Ambele"]}],


[["filler-passive",10], "Question", {q:" Pentru propoziţia <i>‘Mirela a fost spănacită.’</i> ce interpretare aţi accepta? ", as: ["Mirela a devenit ca spanacul.", "Cineva i-a făcut ceva Mirelei cu spanacul.", "Ambele"]}],
[["filler-passive",11], "Question", {q:" Pentru propoziţia <i>‘Mihai a fost caisit.’</i>  ce interpretare aţi accepta? ", as: ["Mihai a devenit ca o caisă.", "Cineva i-a făcut ceva lui Mihai cu o caisă.", "Ambele"]}],
[["filler-passive",12], "Question", {q:" Pentru propoziţia <i>‘Miriam a fost sălăţită.’</i> ce interpretare aţi accepta? ", as: ["Miriam a devenit ca o salată.", "Cineva i-a făcut ceva lui Miriam cu o salată.", "Ambele"]}],
[["filler-passive",13], "Question", {q:" Pentru propoziţia <i>‘Tiberiu a fost ananasit.’</i> ce interpretare aţi accepta? ", as: ["Tiberiu a devenit ca un ananas.", "Cineva i-a făcut ceva lui Tiberiu cu un ananas.", "Ambele"]}],
[["filler-passive",14], "Question", {q:" Pentru propoziţia <i>‘Lorena a fost ţelinită.’</i> ce interpretare aţi accepta? ", as: ["Lorena a devenit ca o ţelină.", "Cineva i-a făcut ceva Lorenei cu o ţelină.", "Ambele"]}],
[["filler-passive",15], "Question", {q:" Pentru propoziţia <i>‘Andu a fost smochinit.’</i> ce interpretare aţi accepta? ", as: ["Andu a devenit ca o smochină.", "Cineva i-a făcut ceva lui Andu cu o smochină.", "Ambele"]}],
[["filler-passive",16], "Question", {q:" Pentru propoziţia <i>‘Mihaela a fost gogoşărită.’</i> ce interpretare aţi accepta? ", as: ["Mihaela a devenit ca un gogoşar.", "Cineva i-a făcut ceva Mihaelei cu un gogoşar.", "Ambele"]}],
[["filler-passive",17], "Question", {q:" Pentru propoziţia <i>‘Silviu a fost nectarinit.’</i> ce interpretare aţi accepta? ", as: ["Silviu a devenit ca o nectarină.", "Cineva i-a făcut ceva lui Silviu cu o nectarină.", "Ambele"]}],
[["filler-passive",18], "Question", {q:" Pentru propoziţia <i>‘Sofia a fost prunită.’</i> ce interpretare aţi accepta? ", as: ["Sofia a devenit ca o prună.", "Cineva i-a făcut ceva Sofiei cu o prună.", "Ambele"]}],

[["filler-inanimate",19], "Question", {q:" Pentru propoziţia <i>‘Copacul a lămȃit.’</i> ce interpretare aţi accepta? ", as: ["Copacul a devenit plin cu lămȃi.", "Copacul a făcut ceva cu (nişte) lămȃi.", "Ambele"]}],
[["filler-inanimate",20], "Question", {q:" Pentru propoziţia <i>‘Tufa a lămȃit.’</i> ce interpretare aţi accepta? ", as: ["Tufa a devenit plină cu lămȃi. ", "Tufa a făcut ceva cu (nişte) lămȃi.", "Ambele"]}],
[["filler-inanimate",21], "Question", {q:" Pentru propoziţia <i>‘Arborele a alunit.’</i> ce interpretare aţi accepta? ", as: ["Arborele a devenit plin cu alune. ", "Arborele a făcut ceva cu (nişte) alune.", "Ambele"]}],
[["filler-inanimate",22], "Question", {q:" Pentru propoziţia <i>‘Via a strugurit.’</i> ce interpretare aţi accepta? ", as: ["Via a devenit plină cu struguri. ", "Via a făcut ceva cu (nişte) struguri.", "Ambele"]}],
[["filler-inanimate",23], "Question", {q:" Pentru propoziţia <i>‘ Ramura a corcoduşit.’</i> ce interpretare aţi accepta? ", as: ["Ramura a devenit plină cu corcoduşe. ", "Ramura a făcut ceva cu (nişte) corcoduşe.", "Ambele"]}],
[["filler-inanimate",24], "Question", {q:" Pentru propoziţia <i>‘Planta a măzărit.’</i> ce interpretare aţi accepta? ", as: ["Planta a devenit plină cu măzăre.", "Planta a făcut ceva cu (nişte) măzăre.", "Ambele"]}],
[["filler-inanimate",25], "Question", {q:" Pentru propoziţia <i>‘Bulbul a cepuit.’</i> ce interpretare aţi accepta? ", as: ["Bulbul a devenit ceapă.", "Bulbul a făcut ceva cu (nişte) ceapă.", "Ambele"]}],
[["filler-inanimate",26], "Question", {q:" Pentru propoziţia <i>‘Pămȃntul a ridichit.’</i> ce interpretare aţi accepta? ", as: ["Pămȃntul a devenit plin cu ridichi.", " Pămȃntul a făcut ceva cu (nişte) ridichi.", "Ambele"]}],
[["filler-inanimate",27], "Question", {q:" Pentru propoziţia <i>‘Livada a măruit.’</i> ce interpretare aţi accepta? ", as: ["Livada a devenit plină cu mere.", "Livada a făcut ceva cu (nişte) mere.", "Ambele"]}]
];
  
