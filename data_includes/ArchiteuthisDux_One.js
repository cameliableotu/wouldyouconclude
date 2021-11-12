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
['shared-intro', "Question", {q:"In <i>‘Linda doesn't have to shout. Everyone can hear her.’</i> the sentence <i>‘Linda doesn't have to shout’</i> means",as: ["It is necessary that Linda does not shout.", "It is not necessary that Linda shouts."]]},
                   "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Linda doesn't have to shout’</i> is in the context  <i>‘Linda doesn't have to shout. Everyone can hear her.’?</i>’?"}],                                                                                            

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "How did you find it? You simply have to choose the interpretation that seems more suitable, and, afterwards, you have to say how acceptable you find the sentence’."],           
                           ["p", "Let's practice more."],
                   
['shared-intro', "Question", {q:"In <i>‘Don't tell lies! Your friend will be upset with you.’</i>, the sentence <i>‘Don't tell lies!’</i> means",as: ["It is necessary that you do not tell lies.", "It is not necessary that you tell lies."]]},
                  "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Dont tell lies!’</i> is in the context  <i>‘Don't tell lies! Your friend will be upset with you’</i>’?"}],  
['shared-intro', "Question", {q:"In <i>‘You don't have to fret. You will lose the case.’</i>, the sentence <i>‘ You don't have to fret. ’</i> means",as: ["It is necessary that you do not fret.", "It is not necessary that you fret."]]},
                  "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You don't have to fret. ’</i> is in the context  <i>‘You don't have to fret. You will lose the case.’</i>’?"}],   
['shared-intro', "Question", {q:"In <i>‘Don't be tall! There are enough tall people in the room.’</i> the sentence  <i>‘Don't be tall!’ means ",as: ["It is necessary that you are tall.", "It is not necessary that you are tall."]]},
                 "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Dont be tall!’</i> is in the context  <i>‘Don't be tall! There are enough tall people in the room.’</i>’?"}], 


['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],
  
// Shared experimental items + fillers
  

[["MODALITYNEGATION-notnecessary",1], "Question", {q:"In <i>‘You mustn't worry. The woman will give you the money.’</i> , <i>‘You mustn't worry’</i>  means",as: [['s','It is neccessary that you do not worry.'],['k','It is not necessary that you worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't worry’</i> is in the context  <i>‘You mustn't worry. The woman will give you the money’?</i>’?"}],
[["MODALITYNEGATION-necessarynot",1],  "Question", {q:"In <i>‘You mustn't worry. You will get sick otherwise’</i>, <i>‘You mustn't worry’</i> means",as: [['s','It is necessary that you do not worry.'],['k','It is not necessary that you worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't worry’</i>  is in the context <i>‘You mustn't worry. You will get sick otherwise.’</i>?"}],
[["MODALITYNEGATION-notnecessary",2],  "Question",{q:"In <i>‘He mustn't panic. The teacher will give the class an easy test.’</i>, <i>‘He mustn't panic’</i> means",as: [['s','It is necessary that he does not panic.'],['k','It is not necessary that he panics.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘He mustn't panic’</i> is in the context <i>‘He mustn't panic. The teacher will give the class an easy test.’</i>?"}],
[["MODALITYNEGATION-notnecessary",2], "Question", {q:"In  <i>‘He mustn't panic. The bears will attack him otherwise.’</i>, <i>‘He mustn't panic’</i> means",as: [['s','It is necessary that he does not panic.'],['k','It is not necessary that he panics.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘He mustn't panic’</i> is in the context <i>‘He mustn't panic. The bears will attack him otherwise.’</i>?"}],
[["MODALITYNEGATION-notnecessary",3], "Question", {q:"In <i>‘She mustn't be sad. Her mom will find the doll.’</i>, <i>‘She mustn't be sad.’</i> means",as: [['s','It is necessary that she is not sad.'],['k','It is not necessary that she is sad.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘She mustn't be sad.’</i> is in the context <i>‘She mustn't be sad. Her mom will find the doll.’</i>?"}],
[["MODALITYNEGATION-necessarynot",3],  "Question", {q:"In <i>‘She mustn't be sad. She will ruin the party otherwise.’</i>, <i>‘She mustn't be sad.’</i> means", as: [['s','It is necessary that she is not sad.'],['k','It is not necessary that she is sad.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘She mustn't be sad.’</i> is in the context <i>‘She mustn't be sad. She will ruin the party otherwise.’</i>?"}],
[["MODALITYNEGATION-notnecessary",4],  "Question", {q:"In <i>‘You mustn't be angry. The man will reward you for your efforts.’</i>, <i>‘You mustn't be angry.’</i> means",as: [['s','It is necessary that you are not angry.'],['k','It is not necessary that you are angry.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't be angry.’</i> is in the context ‘You mustn't be angry. The man will reward you for your efforts.’</i>?"}],
[["MODALITYNEGATION-necessarynot",4], "Question", {q:"In <i>‘You mustn't be angry. Your mother will punish you otherwise.’</i>,<i>‘You mustn't be angry.’</i> means",as: [['s','It is necessary that you are not angry'],['k','It is not necessary that you are angry']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't be angry.’</i> is in the context <i>‘You mustn't be angry. Your mother will punish you otherwise.’</i>?"}],
[["MODALITYNEGATION-notnecessary",5], "Question", {q:"In <i>‘Tom mustn't eat the bread. It won't go stale by tomorrow.’</i>, <i>‘Tom mustn't eat the bread.’</i> means",as: [['s','It is necessary that Tom does not eat the bread.'],['k','It is not necessary that Tom eats the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Tom mustn't eat the bread.’</i> is in the context <i>‘Tom mustn't eat the bread. It won't go stale by tomorrow.’</i>?"}],
[["MODALITYNEGATION-necessarynot",5], "Question", {q:"In <i>‘Tom mustn't eat the bread. They have visitors coming over.’</i>, <i>‘Tom mustn't eat the bread.’</i> means",as: [['s','It is necessary that Tom does not eat the bread.'],['k','It is not necessary that Tom eats the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Tom mustn't eat the bread.’</i> is in the context <i>‘Tom mustn't eat the bread. They have visitors coming over.’?"}],
[["MODALITYNEGATION-notnecessary",6], "Question", {q:"In <i>‘You mustn't do office work at home. You managed to get it done already.’</i>, <i>‘You mustn't do office work.’</i> means",as: [['s','It is necessary that you do not do office work.'],['k','It is not necessary that you do office work.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't do office work at home.’</i> is in the context <i>‘You mustn't do office work at home. You managed to get it done already.’</i>?"}],
[["MODALITYNEGATION-necessarynot",6], "Question", {q:"In <i>‘You mustn't do  office work at home. Your wife and kids will be upset.’</i>,<i>‘You mustn't do office work.’</i> means",as: [['s','It is necessary that you do not do office work.'],['k','It is not necessary that you do office work.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't do office work at home.’</i> is in the context <i>‘You mustn't do  office work at home. Your wife and kids will be upset.’</i>?"}],
[["MODALITYNEGATION-notnecessary",7], "Question", {q:"In <i>‘Linda mustn't speak German. All the German people in the office speak English.’</i>, <i>‘Linda mustn't speak German.’</i> means",as: [['s','It is necessary that you do not speak German.'],['k','It is not necessary that you speak German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Linda mustn't speak German.’</i> is in the context<i>‘Linda mustn't speak German. All the German people in the office speak English.’</i>?"}],
[["MODALITYNEGATION-necessarynot",7], "Question", {q:"In <i>‘Linda mustn't speak German. Our guests only speak English.’</i>, <i>‘Linda mustn't speak German.’</i> means",as: [['s','It is necessary that you do not speak German.'],['k','It is not necessary that you speak German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think  <i>‘Linda mustn't speak German.’</i> is in the context <i>‘Linda mustn't speak German. Our guests only speak English.’</i>?"}],
[["MODALITYNEGATION-notnecessary",8], "Question", {q:"In <i>‘You mustn't drink alcohol. You are already in good spirits.’</i>, <i>‘You mustn't drink alcohol.’</i> means",as: [['s','It is necessary that you do not drink alcohol.'],['k','It is not necessary that you drink alcohol.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't drink alcohol’</i> is in the context <i>‘You mustn't drink alcohol. You are already in good spirits.’</i>?"}],
[["MODALITYNEGATION-necessarynot",8], "Question", {q:"In <i>‘You mustn't drink alcohol. It will make you feel sick.’</i>, <i>‘You mustn't drink alcohol.’</i> means",as: [['s','It is necessary that you do not drink alcohol.'],['k','It is not necessary that you drink alcohol.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You mustn't drink alcohol.’</i> is in the context <i>‘You mustn't drink alcohol. It will make you feel sick.’</i>?"}],


//// Fillers
[["filler-should",9],"Question", {q:"In <i>‘Mary shouldn't be upset. Her father will give her a new car.’</i>, <i>‘Mary shouldn't be upset.’</i> means",as: [['s','It is necessary that Mary is not upset.'],['k','It is not necessary that Mary is upset.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Mary shouldn't be upset.’</i> is in the context <i>‘Mary shouldn't be upset. Her father will give her a new car.’</i>?"}],          
[["filler-should",10], "Question", {q:"In <i>‘You shouldn't be annoyed. Your wife will cook dinner for you.’</i>, <i>‘You shouldn't be annoyed.’</i> means",as: [['s','It is necessary that you are not annoyed.'],['k','It is not necessary that you are annoyed.']]},
                       "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You shouldn't be annoyed.’</i> is in the context <i>‘You shouldn't be annoyed.Your wife will cook dinner for you.’</i>?"}],
[["filler-should",11],  "Question", {q:"In <i>‘Tim shouldn't cook rice. His girlfriend does not like it.’</i>, <i>‘Tim shouldn't cook rice.’</i> means",as: [['s','It is necessary that Tim does not cook rice.'],['k','It is not necessary that Tim cooks rice.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Tim shouldn't cook rice.’</i> is in the context <i>‘Tim shouldn't cook rice. His girlfriend does not like it.’</i>?"}],
[["filler-should",12],  "Question", {q:"In  <i>‘You shouldn't write the first draft yourself. Linda is the first author.’</i>, 'You shouldn't write the first draft yourself.' means",as: [['s','It is necessary that you do not write the first draft yourself.'],['k','It is not necessary that you write the first draft yourself.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘You shouldn't write the first draft yourself.’</i> is in the context <i>‘You shouldn't write the first draft yourself. Linda is the first author.’</i>?"}],
[["filler-need",13], "Question", {q:"In  <i>‘Tom needn't be offended. The woman didn't want to insult him at all.’</i> means",as: [['s','It is necessary that Tom is not offended.'],['k','It is not necessary that Tom is offended.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Tom needn't be offended.’</i> is in the context <i>‘Tom needn't be offended. The woman didn't want to insult him at all.’</i>?"}],
[["filler-need",14], "Question", {q:"In  <i>‘You needn't be outraged. The professor is simply joking a bit.’</i>, <i>‘You needn't be outraged.’</i> means",as: [['s','It is necessary that you are not outraged.'],['k','It is not necessary that you are outraged.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Tom needn't be offended.’</i> is in the context <i>‘Tom needn't be offended. The woman didn't want to insult him at all.’</i>?"}],
[["filler-need",15], "Question", {q:"In  <i>‘Sophie needn't tidy the room today. It still looks quite great.’</i>, <i>‘Sophie needn't tidy the room today.’</i> means",as: [['s','It is necessary that Sophie does not tidy the room.'],['k','It is not necessary that Sophie tidies the room.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Sophie needn't tidy the room today.’</i> is in the context <i>‘Sophie needn't tidy the room today. It still looks quite great.’</i>?"}],
[["filler-need",16], "Question", {q:"In <i>‘You needn't draw all the materials yourself. You can hire a designer.’</i>, <i>‘You needn't draw all the materials yourself.’</i> means",as: [['s','It is necessary that you do not draw all the materials yourself.'],['k','It is not necessary that you draw all the materials yourself.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think <i>‘Tom needn't be offended.’</i> is in the context <i>‘Tom needn't be offended. The woman didn't want to insult him at all.’</i>?"}]

];



  
