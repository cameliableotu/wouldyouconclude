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

var sendingResultsMessage = "Please wait. Your answers are being sent to the server."; 
var completionMessage = "Thanks for taking part in the experiment!";
var completionErrorMessage = "There was an error in sending your answer to the server."; 

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
                           ["p", "Let's practice a bit before we start."]
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
  

[["MODALITYNEGATION-notnecessary",1], "Question", {q:"Pentru propoziţia <i>‘Maria a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-necessarynot",1], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                   "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-notnecessary",2], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit pe mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-necessarynot",2], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit la mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-notnecessary",3], "Question", {q:"Pentru propoziţia <i>‘Maria a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-necessarynot",3], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                   "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-notnecessary",4], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit pe mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-necessarynot",4], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit la mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-notnecessary",5], "Question", {q:"Pentru propoziţia <i>‘Maria a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-necessarynot",5], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                   "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-notnecessary",6], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit pe mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-necessarynot",6], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit la mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-notnecessary",7], "Question", {q:"Pentru propoziţia <i>‘Maria a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-necessarynot",7], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit.’</i> ce interpretare aţi accepta? ",as: ["Maria a devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                   "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-notnecessary",8], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit pe mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                 "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
[["MODALITYNEGATION-necessarynot",8], "Question", {q:"Pentru propoziţia <i>‘Maria s-a cireşit la mȃini.’</i> ce interpretare aţi accepta? ",as: ["Maria sau mȃinile ei au devenit ca o cireaşă.", "Maria a făcut ceva cu o cireaşă.", "Ambele"]},
                "AcceptabilityJudgment", {s:"How would you rate this statement?"}],
    
    
    
    
    [["MODALITYNEGATION-notnecessary",1], "Question", {s:"In <i>‘You mustn't worry. The woman will give you the money.’</i> , <i>‘You mustn't worry’</i>  means",as: [['s','It is neccessary that you do not worry.'],['k','It is not necessary that you worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't worry’</i> is in the context  <i>‘You mustn't worry. The woman will give you the money’?</i>’?"}],
[["MODALITYNEGATION-necessarynot",1],  "Question", {s:"In <i>‘You mustn't worry. You will get sick otherwise’</i>, <i>‘You mustn't worry’</i> means",as: [['s','It is necessary that you do not worry.'],['k','It is not necessary that you worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't worry’</i>  is in the context <i>‘You mustn't worry. You will get sick otherwise.’</i>?"}],
[["MODALITYNEGATION-notnecessary",2],  "Question",{s:"In <i>‘He mustn't panic. The teacher will give the class an easy test.’</i>, <i>‘He mustn't panic’</i> means",as: [['s','It is necessary that he does not panic.'],['k','It is not necessary that he panics.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘He mustn't panic’</i> is in the context <i>‘He mustn't panic. The teacher will give the class an easy test.’</i>?"}],
[["MODALITYNEGATION-notnecessary",2], "Question", {s:"In  <i>‘He mustn't panic. The bears will attack him otherwise.’</i>, <i>‘He mustn't panic’</i> means",as: [['s','It is necessary that he does not panic.'],['k','It is not necessary that he panics.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘He mustn't panic’</i> is in the context <i>‘He mustn't panic. The bears will attack him otherwise.’</i>?"}],
[["MODALITYNEGATION-notnecessary",3], "Question", {s:"In <i>‘She mustn't be sad. Her mom will find the doll.’</i>, <i>‘She mustn't be sad.’</i> means",as: [['s','It is necessary that she is not sad.'],['k','It is not necessary that she is sad.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘She mustn't be sad.’</i> is in the context <i>‘She mustn't be sad. Her mom will find the doll.’</i>?"}],
[["MODALITYNEGATION-necessarynot",3],  "Question", {s:"In <i>‘She mustn't be sad. She will ruin the party otherwise.’</i>, <i>‘She mustn't be sad.’</i> means", as: [['s','It is necessary that she is not sad.'],['k','It is not necessary that she is sad.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘She mustn't be sad.’</i> is in the context <i>‘She mustn't be sad. She will ruin the party otherwise.’</i>?"}],
[["MODALITYNEGATION-notnecessary",4],  "Question", {s:"In <i>‘You mustn't be angry. The man will reward you for your efforts.’</i>, <i>‘You mustn't be angry.’</i> means",as: [['s','It is necessary that you are not angry.'],['k','It is not necessary that you are angry.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't be angry.’</i> is in the context ‘You mustn't be angry. The man will reward you for your efforts.’</i>?"}],
[["MODALITYNEGATION-necessarynot",4], "Question", {s:"In <i>‘You mustn't be angry. Your mother will punish you otherwise.’</i>,<i>‘You mustn't be angry.’</i> means",as: [['s','It is necessary that you are not angry'],['k','It is not necessary that you are angry']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't be angry.’</i> is in the context <i>‘You mustn't be angry. Your mother will punish you otherwise.’</i>?"}],
[["MODALITYNEGATION-notnecessary",5], "Question", {s:"In <i>‘Tom mustn't eat the bread. It won't go stale by tomorrow.’</i>, <i>‘Tom mustn't eat the bread.’</i> means",as: [['s','It is necessary that Tom does not eat the bread.'],['k','It is not necessary that Tom eats the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Tom mustn't eat the bread.’</i> is in the context <i>‘Tom mustn't eat the bread. It won't go stale by tomorrow.’</i>?"}],
[["MODALITYNEGATION-necessarynot",5], "Question", {s:"In <i>‘Tom mustn't eat the bread. They have visitors coming over.’</i>, <i>‘Tom mustn't eat the bread.’</i> means",as: [['s','It is necessary that Tom does not eat the bread.'],['k','It is not necessary that Tom eats the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Tom mustn't eat the bread.’</i> is in the context <i>‘Tom mustn't eat the bread. They have visitors coming over.’?"}],
[["MODALITYNEGATION-notnecessary",6], "Question", {s:"In <i>‘You mustn't do office work at home. You managed to get it done already.’</i>, <i>‘You mustn't do office work.’</i> means",as: [['s','It is necessary that you do not do office work.'],['k','It is not necessary that you do office work.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't do office work at home.’</i> is in the context <i>‘You mustn't do office work at home. You managed to get it done already.’</i>?"}],
[["MODALITYNEGATION-necessarynot",6], "Question", {s:"In <i>‘You mustn't do  office work at home. Your wife and kids will be upset.’</i>,<i>‘You mustn't do office work.’</i> means",as: [['s','It is necessary that you do not do office work.'],['k','It is not necessary that you do office work.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't do office work at home.’</i> is in the context <i>‘You mustn't do  office work at home. Your wife and kids will be upset.’</i>?"}],
[["MODALITYNEGATION-notnecessary",7], "Question", {s:"In <i>‘Linda mustn't speak German. All the German people in the office speak English.’</i>, <i>‘Linda mustn't speak German.’</i> means",as: [['s','It is necessary that you do not speak German.'],['k','It is not necessary that you speak German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Linda mustn't speak German.’</i> is in the context<i>‘Linda mustn't speak German. All the German people in the office speak English.’</i>?"}],
[["MODALITYNEGATION-necessarynot",7], "Question", {s:"In <i>‘Linda mustn't speak German. Our guests only speak English.’</i>, <i>‘Linda mustn't speak German.’</i> means",as: [['s','It is necessary that you do not speak German.'],['k','It is not necessary that you speak German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think  <i>‘Linda mustn't speak German.’</i> is in the context <i>‘Linda mustn't speak German. Our guests only speak English.’</i>?"}],
[["MODALITYNEGATION-notnecessary",8], "Question", {s:"In <i>‘You mustn't drink alcohol. You are already in good spirits.’</i>, <i>‘You mustn't drink alcohol.’</i> means",as: [['s','It is necessary that you do not drink alcohol.'],['k','It is not necessary that you drink alcohol.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't drink alcohol’</i> is in the context <i>‘You mustn't drink alcohol. You are already in good spirits.’</i>?"}],
[["MODALITYNEGATION-necessarynot",8], "Question", {s:"In <i>‘You mustn't drink alcohol. It will make you feel sick.’</i>, <i>‘You mustn't drink alcohol.’</i> means",as: [['s','It is necessary that you do not drink alcohol.'],['k','It is not necessary that you drink alcohol.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't drink alcohol.’</i> is in the context <i>‘You mustn't drink alcohol. It will make you feel sick.’</i>?"}],


//// Fillers
[["filler-should",9],  "EPDashedSentence", {s:"+"},DS,  {s:"In 'Mary shouldn't be upset. Her father will give her a new car.', 'Mary shouldn't be upset.' means",as: [['s','It is necessary that Mary is not upset.'],['k','It is not necessary that Mary is upset.']]}],
[["filler-should",10], "EPDashedSentence", {s:"+"}, DS, {s:"You shouldn't be annoyed. Your wife will cook dinner for you.', 'You shouldn't be annoyed.' means",as: [['s','It is necessary that you are not annoyed.'],['k','It is not necessary that you are annoyed.']]}],
[["filler-should",11],  "EPDashedSentence", {s:"+"},DS, {s:"In 'Tim shouldn't cook rice. His girlfriend does not like it.', 'Tim shouldn't cook rice.' means",as: [['s','It is necessary that Tim does not cook rice.'],['k','It is not necessary that Tim cooks rice.']]}],
[["filler-should",12],  "EPDashedSentence", {s:"+"},DS, {s:"In 'You shouldn't write the first draft yourself. Linda is the first author.', 'You shouldn't write the first draft yourself.' means",as: [['s','It is necessary that you do not write the first draft yourself.'],['k','It is not necessary that you write the first draft yourself.']]}],
[["filler-need",13], "EPDashedSentence", {s:"+"},DS, {s:"In 'Tom needn't be offended. The woman didn't want to insult him at all.' means",as: [['s','It is necessary that Tom is not offended.'],['k','It is not necessary that Tom is offended.']]}],
[["filler-need",14], "EPDashedSentence", {s:"+"},DS, {s:"+"}, DS, {s:"In 'You needn't be outraged. The professor is simply joking a bit.', 'You needn't be outraged.' means",as: [['s','It is necessary that you are not outraged.'],['k','It is not necessary that you are outraged.']]}],
[["filler-need",15], "EPDashedSentence", {s:"+"},DS, {s:"In 'Sophie needn't tidy the room today. It still looks quite great.', 'Sophie needn't tidy the room today.' means",as: [['s','It is necessary that Sophie does not tidy the room.'],['k','It is not necessary that Sophie tidies the room.']]}],
[["filler-need",16], "EPDashedSentence", {s:"+"},DS, {s:"In 'You needn't draw all the materials yourself. You can hire a designer', 'You needn't draw all the materials yourself.' means",as: [['s','It is necessary that you do not draw all the materials yourself.'],['k','It is not necessary that you draw all the materials yourself.']]}]

];


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
  
