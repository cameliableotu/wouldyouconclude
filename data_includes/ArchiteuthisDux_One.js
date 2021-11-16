// Modalityandnegationexperiments//
// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("sep", rshuffle(startsWith('MODALITYNEGATION'),startsWith('filler'))),
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
        leftComment: "(Fully unacceptable)", rightComment: "(Fully acceptable)"        /// Labels on end-points of scale
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
['shared-intro', "Question", {q:"In ‘Linda doesn't have to shout. Everyone can hear her.’, the sentence ‘Linda doesn't have to shout’ means",as: [['s', 'Linda is obliged not to shout.'], ['k','Linda is not obliged to shout.']]},
                   "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda doesn't have to shout’ is in the context ‘Linda doesn't have to shout. Everyone can hear her.’?"}],                                                                                            

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "How did you find it? You simply have to choose the interpretation that seems more suitable, and, afterwards, you have to say how acceptable you find the sentence’."],           
                           ["p", "Let's practice more."],
                           ]}],
                   
['shared-intro', "Question", {q:"In ‘Don't tell lies! Your friend will be upset with you’., the sentence ‘Don't tell lies!’ means",as: [['s', 'You are obliged not to tell lies.'], ['k','You are not obliged to tell lies.']]},
                  "AcceptabilityJudgment", {s: "How acceptable do you think ‘Dont tell lies!’ is in the context ‘Don't tell lies! Your friend will be upset with you’?"}],  
['shared-intro', "Question", {q:"In ‘You don't have to fret. You will lose the case.’, the sentence ‘You don't have to fret.’ means",as: [['s', 'You are obliged not to fret.'], ['k', 'You are not obliged to fret.']]},
                  "AcceptabilityJudgment", {s: "How acceptable do you think ‘You don't have to fret.’ is in the context ‘You don't have to fret. You will lose the case.’?"}],   
['shared-intro', "Question", {q:"In ‘Don't be tall! There are enough tall people in the room.’ the sentence ‘Don't be tall!’ means ",as: [['s', 'You are obliged not to be tall.'], ['k', 'You are not obliged to be tall.']]},
                 "AcceptabilityJudgment", {s: "How acceptable do you think ‘Dont be tall!’ is in the context ‘Don't be tall! There are enough tall people in the room.’?"}], 


['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Great, you are done practicing! Press any key when you are ready to begin."]
                        ]}],
  
// Shared experimental items + fillers
  

[["MODALITYNEGATION-notnecessary",1], "Question", {q:"In ‘You mustn't worry. The woman will give you the money.’, ‘You mustn't worry’ means",as: [['s','You are obliged not to worry.'],['k','You are not obliged to worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't worry’ is in the context ‘You mustn't worry. The woman will give you the money’?"}],
[["MODALITYNEGATION-necessarynot",1],  "Question", {q:"In ‘You mustn't worry. You will get sick otherwise’, ‘You mustn't worry’ means",as: [['s','You are obliged not to worry.'],['k','You are not obliged to worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't worry’ is in the context ‘You mustn't worry. You will get sick otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",2],  "Question",{q:"In ‘He mustn't panic. The teacher will give the class an easy test.’, ‘He mustn't panic’ means",as: [['s','He is obliged not to panic.'],['k','He is not obliged to panic.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘He mustn't panic’ is in the context ‘He mustn't panic. The teacher will give the class an easy test.’?"}],
[["MODALITYNEGATION-notnecessary",2], "Question", {q:"In ‘He mustn't panic. The bears will attack him otherwise.’, ‘He mustn't panic’ means",as: [['s','He is obliged not to panic.'],['k','He is not obliged to panic.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘He mustn't panic’ is in the context ‘He mustn't panic. The bears will attack him otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",3], "Question", {q:"In ‘She mustn't be sad. Her mom will find the doll.’, ‘She mustn't be sad.’ means",as: [['s','She is obliged not to be sad.'],['k','She is not obliged to be sad.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘She mustn't be sad.’ is in the context ‘She mustn't be sad. Her mom will find the doll.’?"}],
[["MODALITYNEGATION-necessarynot",3],  "Question", {q:"In ‘She mustn't be sad. She will ruin the party otherwise.’, ‘She mustn't be sad.’ means", as: [['s','She is obliged not to be sad.'],['k','She is not obliged to be sad.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘She mustn't be sad.’ is in the context ‘She mustn't be sad. She will ruin the party otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",4],  "Question", {q:"In ‘You mustn't be angry. The man will reward you for your efforts.’, ‘You mustn't be angry.’ means",as: [['s','You are obliged not to be angry.'],['k','You are not obliged to be angry.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't be angry.’ is in the context ‘You mustn't be angry. The man will reward you for your efforts.’?"}],
[["MODALITYNEGATION-necessarynot",4], "Question", {q:"In ‘You mustn't be angry. Your mother will punish you otherwise.’,‘You mustn't be angry.’means",as: [['s','You are obliged not to be angry'],['k','You are not obliged to be angry']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't be angry.’ is in the context ‘You mustn't be angry. Your mother will punish you otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",5], "Question", {q:"In ‘Tom mustn't eat the bread. It won't go stale by tomorrow.’, ‘Tom mustn't eat the bread.’ means",as: [['s','Tom is obliged not to eat the bread.'],['k','Tom is not obliged to eat the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom mustn't eat the bread.’ is in the context ‘Tom mustn't eat the bread. It won't go stale by tomorrow.’?"}],
[["MODALITYNEGATION-necessarynot",5], "Question", {q:"In ‘Tom mustn't eat the bread. They have visitors coming over.’, ‘Tom mustn't eat the bread.’ means",as: [['s','Tom is obliged not to eat the bread.'],['k','Tom is not obliged to eat the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom mustn't eat the bread.’ is in the context ‘Tom mustn't eat the bread. They have visitors coming over.’?"}],
[["MODALITYNEGATION-notnecessary",6], "Question", {q:"In ‘You mustn't do office work at home. You managed to get it done already.’, ‘You mustn't do office work.’ means",as: [['s','You are obliged not to do office work.'],['k','You are not obliged to do office work.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't do office work at home.’ is in the context ‘You mustn't do office work at home. You managed to get it done already.’?"}],
[["MODALITYNEGATION-necessarynot",6], "Question", {q:"In ‘You mustn't do  office work at home. Your wife and kids will be upset.’ ,‘You mustn't do office work.’ means",as: [['s','You are obliged not to do office work.'],['k','You are not obliged to do office work.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't do office work at home.’ is in the context ‘You mustn't do  office work at home. Your wife and kids will be upset.’?"}],
[["MODALITYNEGATION-notnecessary",7], "Question", {q:"In ‘Linda mustn't speak German. All the German people in the office speak English.’, ‘Linda mustn't speak German.’ means",as: [['s','You are obliged not to speak German.'],['k','You are not obliged to speak German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda mustn't speak German.’ is in the context ‘Linda mustn't speak German. All the German people in the office speak English.’?"}],
[["MODALITYNEGATION-necessarynot",7], "Question", {q:"In ‘Linda mustn't speak German. Our guests only speak English.’, ‘Linda mustn't speak German.’ means",as: [['s','You are obliged not to speak German.'],['k','You are not obliged to speak German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda mustn't speak German.’ is in the context ‘Linda mustn't speak German. Our guests only speak English.’?"}],
[["MODALITYNEGATION-notnecessary",8], "Question", {q:"In ‘You mustn't drink alcohol. You are already in good spirits.’,‘You mustn't drink alcohol.’ means",as: [['s','You are obliged not to drink alcohol.'],['k','You are not obliged to drink alcohol.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't drink alcohol’ is in the context ‘You mustn't drink alcohol. You are already in good spirits.’?"}],
[["MODALITYNEGATION-necessarynot",8], "Question", {q:"In‘You mustn't drink alcohol. It will make you feel sick.’,‘You mustn't drink alcohol.’ means",as: [['s','You are obliged not to drink alcohol.'],['k','You are not obliged to drink alcohol.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't drink alcohol.’ is in the context ‘You mustn't drink alcohol. It will make you feel sick.’?"}],


//// Fillers
[["filler-should",9],"Question", {q:"In ‘Mary shouldn't be upset. Her father will give her a new car.’, ‘Mary shouldn't be upset.’ means",as: [['s','Mary is obliged not to be upset.'],['k','Mary is not obliged to be upset.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘Mary shouldn't be upset.’ is in the context ‘Mary shouldn't be upset. Her father will give her a new car.’?"}],          
[["filler-should",10], "Question", {q:"In ‘You shouldn't be annoyed. Your wife will cook dinner for you.’, ‘You shouldn't be annoyed.’ means",as: [['s','You are obliged not to be annoyed.'],['k','You are not obliged to be annoyed.']]},
                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't be annoyed.’ is in the context ‘You shouldn't be annoyed.Your wife will cook dinner for you.’?"}],
[["filler-should",11],  "Question", {q:"In ‘Tim shouldn't cook rice. His girlfriend does not like it.’, ‘Tim shouldn't cook rice.’ means",as: [['s','Tim is obliged not to cook rice.'],['k','Tim is not obliged to cook rice.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tim shouldn't cook rice.’ is in the context ‘Tim shouldn't cook rice. His girlfriend does not like it.’?"}],
[["filler-should",12],  "Question", {q:"In  ‘You shouldn't write the first draft yourself. Linda is the first author.’, 'You shouldn't write the first draft yourself.' means",as: [['s','You are obliged not to write the first draft yourself.'],['k','You are not obliged to write the first draft yourself.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't write the first draft yourself.’ is in the context ‘You shouldn't write the first draft yourself. Linda is the first author.’?"}],
[["filler-need",13], "Question", {q:"In ‘Tom needn't be offended. The woman didn't want to insult him at all.’, 'Tom needn't be offended.' means",as: [['s','Tom is obliged not to be offended.'],['k','Tom is not obliged to be offended.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom needn't be offended.’ is in the context ‘Tom needn't be offended. The woman didn't want to insult him at all.’?"}],
[["filler-need",14], "Question", {q:"In  ‘You needn't be outraged. The professor is simply joking a bit.’, ‘You needn't be outraged. ’ means",as: [['s','You are obliged not to be outraged.'],['k','You are not obliged to be outraged.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn't be outraged.’ is in the context ‘You needn't be outraged. The professor is simply joking a bit.’?"}],
[["filler-need",15], "Question", {q:"In ‘Sophie needn't tidy the room today. It still looks quite great.’, ‘Sophie needn't tidy the room today.’ means",as: [['s','Sophie is obliged not to tidy the room.'],['k','Sophie is not obliged to tidy the room.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Sophie needn't tidy the room today.’ is in the context ‘Sophie needn't tidy the room today. It still looks quite great.’?"}],
[["filler-need",16], "Question", {q:"In ‘You needn't draw all the materials yourself. You can hire a designer.’, ‘You needn't draw all the materials yourself.’ means",as: [['s','You are obliged not to draw all the materials yourself.'],['k','You are not obliged to draw all the materials yourself.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn't draw all the materials yourself.’ is in the context ‘You needn't draw all the materials yourself. You can hire a designer.’?"}],

[["filler-should",17],"Question", {q:"In ‘Tom shouldn't be happy. The school will give him a lot of money.’, ‘Tom shouldn't be happy.’ means",as: [['s','Tom is obliged not to be happy.'],['k','Tom is not obliged to be happy.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom shouldn’t be happy.’ is in the context ‘Tom shouldn't be happy. The school will give him a lot of money.’?"}],          
[["filler-should",18], "Question", {q:"In ‘You shouldn't be amazed. Your wife won the biggest film prize ever.’, ‘You shouldn't be amazed.’ means",as: [['s','You are obliged not to be amazed.'],['k','You are not obliged to be amazed.']]},
                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't be amazed.’ is in the context ‘You shouldn't be amazed. Your wife won the biggest film prize ever.’?"}],
[["filler-should",19],  "Question", {q:"In ‘Linda shouldn’t help Mary. Mary is feeling very lost.’, ‘Linda shouldn’t help Mary.’ means",as: [['s','Linda is obliged not to help Mary.'],['k','Tim is not obliged to cook rice.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda shouldn’t help Mary.’ is in the context ‘Linda shouldn’t help Mary. Mary is feeling very lost.’?"}],
[["filler-should",20],  "Question", {q:"In  ‘You shouldn't talk kindly to yourself. You will end up with depression.’, 'You shouldn't talk kindly to yourself.' means",as: [['s','You are obliged not to talk kindly to yourself.'],['k','You are not obliged to talk kindly to yourself.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't talk kindly to yourself.’ is in the context ‘You  shouldn't talk kindly to yourself. You will end up with depression.’?"}],
[["filler-need", 21], "Question", {q:"In ‘Bill needn't be excited. The woman invited him to his favorite film.’, ‘Bill needn't be excited.’ means",as: [['s','Bill is obliged not to be excited.'],['k','Bill is not obliged to be excited.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Bill needn't be excited.’ is in the context ‘Bill needn't be excited. The woman invited him to his favorite film.’?"}],
[["filler-need",22], "Question", {q:"In  ‘You needn't be pleased. Your husband gave you a wonderful gift.’, ‘You needn't be pleased. ’ means",as: [['s','You are obliged not to be pleased.'],['k','You are not obliged to be pleased.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn't be pleased.’ is in the context ‘' You needn't be pleased. Your husband gave you a wonderful gift.’?"}],
[["filler-need",23], "Question", {q:"In ‘Sarah needn't take care of the sick. They are in great suffering.’, ‘Sarah needn't take care of the sick.’ means",as: [['s','Sarah is obliged not to take care of the sick.'],['k','Sarah is not obliged to take care of the sick.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Sophie needn't take care of the sick.’ is in the context ‘Sarah needn't take care of the sick. They are in great suffering.’?"}],
[["filler-need",24], "Question", {q:"In ‘You needn't sweep the floor. It is very dirty.’, ‘You needn't sweep the kitchen.’ means",as: [['s','You are obliged not to sweep the floor.'],['k','You are not obliged to sweep the floor.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn’t sweep the floor. It is very dirty.’ is in the context ‘You needn’t sweep the floor. It is very dirty.’?"}]

];



  
