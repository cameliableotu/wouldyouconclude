// Modalityandnegationexperiments//
// Do show progress bar (fine! I give in)
uniqueID = [1,2,3,4].map(v=>Math.floor((1+Math.random())*0x10000).toString(16).substring(1)).join('-');

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("sep", rshuffle(startsWith('MODALITYNEGATION'),startsWith('filler'))),
    "debrief", 
    "hiddenCompletionCode");

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
var randomnumber=Math.floor(Math.random()*10000000001); 
var completionCode=String("LIR" + randomnumber); 
var sendingResultsMessage = "The results are now being transferred. Please wait."; 
var completionMessage = "Thank you for your participation. The results were successfully transmitted. Your participation code is: " + completionCode; 
var completionErrorMessage = "The transmission of the results failed. Please contact cameliableotu@gmail.com and retry the transmission again by clicking the link. Your participation code is: " + completionCode; 


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
['shared-intro', "Question", {q:"In ‘Linda doesn't have to shout. Everyone can hear her.’, the sentence ‘Linda doesn't have to shout’ means",as: [['s', 'It is necessary that Linda does not shout.'], ['k','It is not necessary that Linda shouts.']]},
                   "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda doesn't have to shout’ is in the context ‘Linda doesn't have to shout. Everyone can hear her.’?"}],                                                                                            

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "How did you find it? You simply have to choose the interpretation that seems more suitable, and, afterwards, you have to say how acceptable you find the sentence’."],           
                           ["p", "Let's practice more."],
                           ]}],
                   
['shared-intro', "Question", {q:"In ‘Don't tell lies! Your friend will be upset with you’., the sentence ‘Don't tell lies!’ means",as: [['s', 'It is necessary that you do not tell lies.'], ['k','It is not necessary that you tell lies.']]},
                  "AcceptabilityJudgment", {s: "How acceptable do you think ‘Dont tell lies!’ is in the context ‘Don't tell lies! Your friend will be upset with you’?"}],  
['shared-intro', "Question", {q:"In ‘You don't have to fret. You will lose the case.’, the sentence ‘You don't have to fret.’ means",as: [['s', 'It is necessary that you do not fret.'], ['k', 'It is not necessary that you fret fret.']]},
                  "AcceptabilityJudgment", {s: "How acceptable do you think ‘You don't have to fret.’ is in the context ‘You don't have to fret. You will lose the case.’?"}],   
['shared-intro', "Question", {q:"In ‘Don't be tall! There are enough tall people in the room.’ the sentence ‘Don't be tall!’ means ",as: [['s', 'It is necessary that you are not tall.'], ['k', 'It is not necessary that you are tall.']]},
                 "AcceptabilityJudgment", {s: "How acceptable do you think ‘Dont be tall!’ is in the context ‘Don't be tall! There are enough tall people in the room.’?"}], 


['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Great, you are done practicing! Press any key when you are ready to begin."]
                        ]}],
  
// Shared experimental items + fillers
  

[["MODALITYNEGATION-notnecessary",1], "Question", {q:"In ‘You mustn't worry. The woman will give you the money.’, ‘You mustn't worry’ means",as: [['s','It is necessary that you do not worry.'],['k','It is not necessary that you  worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't worry’ is in the context ‘You mustn't worry. The woman will give you the money’?"}],
[["MODALITYNEGATION-necessarynot",1],  "Question", {q:"In ‘You mustn't worry. You will get sick otherwise’, ‘You mustn't worry’ means",as: [['s','It is necessary that you do not worry.'],['k','It is not necessary that you worry.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't worry’ is in the context ‘You mustn't worry. You will get sick otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",2],  "Question",{q:"In ‘He mustn't panic. The teacher will give the class an easy test.’, ‘He mustn't panic’ means",as: [['s','It is necessary that he does not panic.'],['k','It is not necessary that he panics.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘He mustn't panic’ is in the context ‘He mustn't panic. The teacher will give the class an easy test.’?"}],
[["MODALITYNEGATION-notnecessary",2], "Question", {q:"In ‘He mustn't panic. The bears will attack him otherwise.’, ‘He mustn't panic’ means",as: [['s','It is necessary that he does not panic.'],['k','It is not necessary that he panics.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘He mustn't panic’ is in the context ‘He mustn't panic. The bears will attack him otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",3], "Question", {q:"In ‘She mustn't be sad. Her mom will find the doll.’, ‘She mustn't be sad.’ means",as: [['s','It is necessary that she is not sad.'],['k','It is not necessary that she is sad.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘She mustn't be sad.’ is in the context ‘She mustn't be sad. Her mom will find the doll.’?"}],
[["MODALITYNEGATION-necessarynot",3],  "Question", {q:"In ‘She mustn't be sad. She will ruin the party otherwise.’, ‘She mustn't be sad.’ means", as: [['s','It is necessary that she is not sad.'],['k','It is not necessary that she is sad.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘She mustn't be sad.’ is in the context ‘She mustn't be sad. She will ruin the party otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",4],  "Question", {q:"In ‘You mustn't be angry. The man will reward you for your efforts.’, ‘You mustn't be angry.’ means",as: [['s','It is necessary that you are not angry.'],['k','It is not necessary that you are angry.']]}, 
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't be angry.’ is in the context ‘You mustn't be angry. The man will reward you for your efforts.’?"}],
[["MODALITYNEGATION-necessarynot",4], "Question", {q:"In ‘You mustn't be angry. Your mother will punish you otherwise.’,‘You mustn't be angry.’means",as: [['s','It is necessary that you are not angry.'],['k','It is not necessary that you are angry']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't be angry.’ is in the context ‘You mustn't be angry. Your mother will punish you otherwise.’?"}],
[["MODALITYNEGATION-notnecessary",5], "Question", {q:"In ‘Tom mustn't eat the bread. It won't go stale by tomorrow.’, ‘Tom mustn't eat the bread.’ means",as: [['s','It is necessary that Tom does not the bread.'],['k','It is not necessary that Tom eats the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom mustn't eat the bread.’ is in the context ‘Tom mustn't eat the bread. It won't go stale by tomorrow.’?"}],
[["MODALITYNEGATION-necessarynot",5], "Question", {q:"In ‘Tom mustn't eat the bread. They have visitors coming over.’, ‘Tom mustn't eat the bread.’ means",as: [['s','It is necessary that Tom does not the bread.'],['k','It is not necessary that Tom eats the bread.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom mustn't eat the bread.’ is in the context ‘Tom mustn't eat the bread. They have visitors coming over.’?"}],
[["MODALITYNEGATION-notnecessary",6], "Question", {q:"In ‘You mustn't do office work. Bill managed to get it done already.’, ‘You mustn't do office work .’ means",as: [['s','It is necessary that you do not do office work.'],['k','It is not necessary that you do office work.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't do office work at home.’ is in the context ‘You mustn't do office work. Bill managed to get it done already.’?"}],
[["MODALITYNEGATION-necessarynot",6], "Question", {q:"In ‘You mustn't do  office work. Your wife and kids will be upset.’ ,‘You mustn't do office work.’ means",as: [['s','It is necessary that you do not do office work.'],['k','It is not necessary that you do office work.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't do office work at home.’ is in the context ‘You mustn't do  office work at home. Your wife and kids will be upset.’?"}],
[["MODALITYNEGATION-notnecessary",7], "Question", {q:"In ‘Linda mustn't speak German. All the German people in the office speak English.’, ‘Linda mustn't speak German.’ means",as: [['s','It is necessary that Linda does not speak German.'],['k','It is not necessary that Linda speaks German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda mustn't speak German.’ is in the context ‘Linda mustn't speak German. All the German people in the office speak English.’?"}],
[["MODALITYNEGATION-necessarynot",7], "Question", {q:"In ‘Linda mustn't speak German. Our guests only speak English.’, ‘Linda mustn't speak German.’ means",as: [['s','It is necessary that you speak German speak German.'],['k','It is not necessary that Linda speaks German.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda mustn't speak German.’ is in the context ‘Linda mustn't speak German. Our guests only speak English.’?"}],
[["MODALITYNEGATION-notnecessary",8], "Question", {q:"In ‘You mustn't drink alcohol. You are already in good spirits.’,‘You mustn't drink alcohol.’ means",as: [['s','It is necessary that you do not drink alcohol.'],['k','It is not necessary that you drink alcohol.']]},
                                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't drink alcohol’ is in the context ‘You mustn't drink alcohol. You are already in good spirits.’?"}],
[["MODALITYNEGATION-necessarynot",8], "Question", {q:"In ‘You mustn't drink alcohol. It will make you feel sick.’,‘You mustn't drink alcohol.’ means",as: [['s','It is necessary that you do not drink alcohol.'],['k','It is not necessary that you drink alcohol.']]},
                                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You mustn't drink alcohol.’ is in the context ‘You mustn't drink alcohol. It will make you feel sick.’?"}],


//// Fillers
[["filler-should",9],"Question", {q:"In ‘Mary shouldn't be upset. Her father will give her a new car.’, ‘Mary shouldn't be upset.’ means",as: [['s','It is necessary that Mary is not upset.'],['k','It is not necessary that Mary is upset.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘Mary shouldn't be upset.’ is in the context ‘Mary shouldn't be upset. Her father will give her a new car.’?"}],          
[["filler-should",10], "Question", {q:"In ‘You shouldn't be annoyed. Your wife will cook dinner for you.’, ‘You shouldn't be annoyed.’ means",as: [['s','It is necessary that you are not annoyed.'],['k','It is not necessary that you are annoyed.']]},
                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't be annoyed.’ is in the context ‘You shouldn't be annoyed.Your wife will cook dinner for you.’?"}],
[["filler-should",11],  "Question", {q:"In ‘Tim shouldn't cook rice. His girlfriend does not like it.’, ‘Tim shouldn't cook rice.’ means",as: [['s','It is necessary that Tim does not cook rice.'],['k','It is not necessary that Tom cooks rice.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tim shouldn't cook rice.’ is in the context ‘Tim shouldn't cook rice. His girlfriend does not like it.’?"}],
[["filler-should",12],  "Question", {q:"In  ‘You shouldn't write the first draft yourself. Linda is the first author.’, 'You shouldn't write the first draft yourself.' means",as: [['s','It is necessary that you do not write the first draft yourself.'],['k','It is not necessary that you write the first draft yourself.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't write the first draft yourself.’ is in the context ‘You shouldn't write the first draft yourself. Linda is the first author.’?"}],
[["filler-need",13], "Question", {q:"In ‘Tom needn't be offended. The woman didn't want to insult him at all.’, 'Tom needn't be offended.' means",as: [['s','It is necessary Tom is not offended.'],['k','It is not necessary that Tom is offended.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom needn't be offended.’ is in the context ‘Tom needn't be offended. The woman didn't want to insult him at all.’?"}],
[["filler-need",14], "Question", {q:"In  ‘You needn't be outraged. The professor is simply joking a bit.’, ‘You needn't be outraged. ’ means",as: [['s','It is necessary that you are not outraged.'],['k','It is not necessary that you are outraged.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn't be outraged.’ is in the context ‘You needn't be outraged. The professor is simply joking a bit.’?"}],
[["filler-need",15], "Question", {q:"In ‘Sophie needn't tidy the room today. It still looks quite great.’, ‘Sophie needn't tidy the room today.’ means",as: [['s','It is necessary that Sophie does not tidy the room.'],['k','It is not necessary that Sophie tidies the room.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Sophie needn't tidy the room today.’ is in the context ‘Sophie needn't tidy the room today. It still looks quite great.’?"}],
[["filler-need",16], "Question", {q:"In ‘You needn't draw all the materials yourself. You can hire a designer.’, ‘You needn't draw all the materials yourself.’ means",as: [['s','It is necessary that you do not draw all the materials yourself.'],['k','It is not necessary that you draw all the materials yourself.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn't draw all the materials yourself.’ is in the context ‘You needn't draw all the materials yourself. You can hire a designer.’?"}],

[["filler-should",17],"Question", {q:"In ‘Tom shouldn't be happy. The school will give him a lot of money.’, ‘Tom shouldn't be happy.’ means",as: [['s','It is necessary that Tom is not happy.'],['k','It is not necessary that Tom is happy.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tom shouldn’t be happy.’ is in the context ‘Tom shouldn't be happy. The school will give him a lot of money.’?"}],          
[["filler-should",18], "Question", {q:"In ‘You shouldn't be amazed. Your wife won the biggest film prize ever.’, ‘You shouldn't be amazed.’ means",as: [['s','It is necessary that you are not amazed.'],['k','It is not necessary that you are amazed.']]},
                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't be amazed.’ is in the context ‘You shouldn't be amazed. Your wife won the biggest film prize ever.’?"}],
[["filler-should",19],  "Question", {q:"In ‘Linda shouldn’t help Mary. Mary is feeling very lost.’, ‘Linda shouldn’t help Mary.’ means",as: [['s','It is necessary that Linda does not help Mary.'],['k','It is not necessary that Linda helps Mary.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘Linda shouldn’t help Mary.’ is in the context ‘Linda shouldn’t help Mary. Mary is feeling very lost.’?"}],
[["filler-should",20],  "Question", {q:"In  ‘You shouldn't talk kindly to yourself. You will end up with depression.’, 'You shouldn't talk kindly to yourself.' means",as: [['s','It is necessary that you do not talk kindly to yourself.'],['k','It is not necessary that you talk kindly to yourself.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't talk kindly to yourself.’ is in the context ‘You  shouldn't talk kindly to yourself. You will end up with depression.’?"}],
[["filler-need", 21], "Question", {q:"In ‘Bill needn't be excited. The woman invited him to his favorite film.’, ‘Bill needn't be excited.’ means",as: [['s','It is not necessary that Bill is excited.'],['k','It is not necessary that Bill is excited.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Bill needn't be excited.’ is in the context ‘Bill needn't be excited. The woman invited him to his favorite film.’?"}],
[["filler-need",22], "Question", {q:"In  ‘You needn't be pleased. Your husband gave you a wonderful gift.’, ‘You needn't be pleased. ’ means",as: [['s','It is not necessary that you are pleased.'],['k','It is not necessary that you are pleased.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn't be pleased.’ is in the context ‘' You needn't be pleased. Your husband gave you a wonderful gift.’?"}],
[["filler-need",23], "Question", {q:"In ‘Sarah needn't take care of the sick. They are in great suffering.’, ‘Sarah needn't take care of the sick.’ means",as: [['s','It is not necessary that Sarah takes care of the sick.'],['k','It is not necessary that Sarah takes care of the sick.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Sophie needn't take care of the sick.’ is in the context ‘Sarah needn't take care of the sick. They are in great suffering.’?"}],
[["filler-need",24], "Question", {q:"In ‘You needn't sweep the floor. It is very dirty.’, ‘You needn't sweep the floor.’ means",as: [['s','It is not necessary that you sweep the floor.'],['k','It is not necessary that you sweep the floor.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn’t sweep the floor. It is very dirty.’ is in the context ‘You needn’t sweep the floor. It is very dirty.’?"}],
["hiddenCompletionCode", "FlashSentence", {s: String(completionCode), timeout: 1, sentenceDescType: "literal"}] 


    ]   





  
