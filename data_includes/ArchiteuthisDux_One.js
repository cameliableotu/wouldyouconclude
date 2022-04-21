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
['shared-intro', "Question", {q:"In ‘You don't have to fret. You will lose the case.’, the sentence ‘You don't have to fret.’ means",as: [['s', 'It is necessary that you do not fret.'], ['k', 'It is not necessary that you fret.']]},
                  "AcceptabilityJudgment", {s: "How acceptable do you think ‘You don't have to fret.’ is in the context ‘You don't have to fret. You will lose the case.’?"}],   
['shared-intro', "Question", {q:"In ‘Don't be tall! There are enough tall people in the room.’ the sentence ‘Don't be tall!’ means ",as: [['s', 'It is necessary that you are not tall.'], ['k', 'It is not necessary that you are tall.']]},
                 "AcceptabilityJudgment", {s: "How acceptable do you think ‘Dont be tall!’ is in the context ‘Don't be tall! There are enough tall people in the room.’?"}], 


['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Great, you are done practicing! Press any key when you are ready to begin."]
                        ]}],
  
// Shared experimental items + fillers
  

[["IMPLICATURES-a1",1],   "Question", {q:"Would you infer from ‘Some meals are adequate.’ that 'Some but not all meals are adequate.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some meals are adequate.’ that 'Some meals are adequate but not good.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some meals are adequate.’ that 'No meal is good.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some meals are adequate.’ that 'Some but not all meals are adequate but not good.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",1],   "Question", {q:"Would you infer from ‘Some salaries are adequate.’ that 'Some but not all salaries are adequate.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some salaries are adequate.’ that 'Some salaries are adequate but not good.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some salaries are adequate.’ that 'No salary is good.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some salaries are adequate.’ that 'Some but not all salaries are adequate but not good.'?",as: [['s','Yes'],['k','No']]}],
  [["IMPLICATURES-a1",2], "Question", {q:"Would you infer from ‘Some work breaks are allowed.’ that 'Some but not all work breaks are allowed.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some work breaks are allowed.’ that 'Some work breaks are allowed but not obligatory.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some work breaks are allowed.’ that 'No work break is allowed.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some work breaks are allowed.’ that 'Some but not all work breaks are allowed but not obligatory.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",2],   "Question", {q:"Would you infer from ‘Some dance moves are allowed.’ that 'Some but not all dance moves are allowed.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some dance moves are allowed.’ that 'Some dance moves are allowed but not obligatory.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some dance moves are allowed.’ that 'No dance move is obligatory.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some dance moves are allowed.’ that 'Some, but not all dance moves are allowed, not obligatory.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a1",3],   "Question", {q:"Would you infer from ‘Some singers are attractive.’ that 'Some, but not all singers are attractive.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some singers are attractive.’ that 'Some singers are attractive, but not stunning.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some singers are attractive.’ that 'No singer is stunning.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some singers are attractive.’ that 'Some, but not all singers are attractive, but not stunning'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",3],   "Question", {q:"Would you infer from ‘Some models are attractive.’ that 'Some, but not all models are attractive.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some models are attractive.’ that 'Some models are attractive.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some models are attractive.’ that 'No model is attractive.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some models are attractive.’ that 'Some, but not all models are attractive, but not stunning.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a1",4],   "Question", {q:"Would you infer from ‘Some mothers believe it will happen.’ that 'Some, but not all mothers believe it will happen.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some mothers believe it will happen.’ that 'Some mothers believe, but do not know it will happen.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some mothers believe it will happen.’ that 'No mother knows it will happen.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some mothers believe it will happen.’ that 'Some but not all mothers believe, but do not know it will happen.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",4],   "Question", {q:"Would you infer from ‘Some teachers believe it will happen.’ that 'Some, but not all teachers believe it will happen.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some teachers believe it will happen.’ that 'Some teachers believe, but do not know it will happen.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some teachers believe it will happen.’ that 'No teacher knows it will happen.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some teachers believe it will happen.’ that 'Some but not all teachers believe, but do not know it will happen.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a1",5],    "Question", {q:"Would you infer from ‘Some elephants are big.’ that 'Some but not all elephants are big.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some elephants are big.’ that 'Some elephants are big but not enormous.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some elephants are big.’ that 'No elephants are enormous.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some elephants are big.’ that 'Some but not all elephants are big but not enormous.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",5],   "Question", {q:"Would you infer from ‘Some houses are big.’ that 'Some but not all houses are big.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some houses are big.’ that 'Some houses are big but not enormous.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some houses are big.’ that 'No house is enormous.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some houses are big.’ that 'Some but not all houses are big but not enormous.'?",as: [['s','Yes'],['k','No']]}],   
[["IMPLICATURES-a1",6],    "Question", {q:"Would you infer from ‘Some meals are cheap.’ that 'Some but not all meals are cheap.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some meals are cheap.’ that 'Some meals are cheap but not free.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some meals are cheap.’ that 'No meal is free.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some meals are cheap.’ that 'Some but not all meals are cheap but not free.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",6],   "Question", {q:"Would you infer from ‘Some drinks are cheap.’ that 'Some but not all drinks are cheap.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some drinks are cheap.’ that 'Some but not all drinks are cheap but not free.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some drinks are cheap.’ that 'No drink is free.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some drinks are cheap.’ that 'Some but not all drinks are cheap but not free.'?",as: [['s','Yes'],['k','No']]}],   
    
[["IMPLICATURES-a1",7],    "Question", {q:"Would you infer from ‘Some homemakers are content.’ that 'Some but not all homemakers are content.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some homemakers are content.’ that 'Some homemakers are content but not happy.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some homemakers are content.’ that 'No homemaker is happy.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some homemakers are content.’ that 'Some but not all meals are cheap but not free.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",7],   "Question", {q:"Would you infer from ‘’ that 'Some but not all drinks are cheap.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some drinks are cheap.’ that 'Some but not all drinks are cheap but not free.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some drinks are cheap.’ that 'No drink is free.'?",as: [['s','Yes'],['k','No']]},
                          "Question", {q:"Would you infer from ‘Some drinks are cheap.’ that 'Some but not all drinks are cheap but not free.'?",as: [['s','Yes'],['k','No']]}], 
[["IMPLICATURES-a1",8],"Question", {q:"Would you infer from ‘Some days are cool.’ that 'Some but not all days are cool.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some days are cool.’ that 'Some days are cool but not cold.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some days are cool.’ that 'No day is cold.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some days are cool.’ that 'Some but not all days are cool, but not cold.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",8],"Question", {q:"Would you infer from ‘Some temperatures are cool.’ that 'Some but not all temperatures are cool.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some temperatures are cool.’ that 'Some temperatures are cool but not cold.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some temperatures are cool.’ that 'No temperature is cold.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some temperatures are cool.’ that 'Some but not all temperatures are cool but not cold.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a1",9],"Question", {q:"Would you infer from ‘Some fabrics are dark.’ that 'Some but not all fabrics are dark.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some fabrics are dark.’ that 'Some fabrics are dark but not black.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some fabrics are dark.’ that 'No day is black.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some fabrics are dark.’ that 'Some but not all fabrics are dark, but not black.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",9],"Question", {q:"Would you infer from ‘Some skies are dark.’ that 'Some but not all skies are dark.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some skies are dark.’ that 'Some skies are dark but not black.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some skies are dark.’ that 'No day is black.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some skies are dark.’ that 'Some but not all skies are dark, but not black.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a1",10],"Question", {q:"Would you infer from ‘Some problems are difficult.’ that 'Some but not all problems are difficult.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some problems are difficult.’ that 'Some problems are difficult but not impossible.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some problems are difficult.’ that 'No day is impossible.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some problems are difficult.’ that 'Some but not all problems are difficult, but not impossible.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",10],"Question", {q:"Would you infer from ‘Some tasks are difficult.’ that 'Some but not all tasks are difficult.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some tasks are difficult.’ that 'Some tasks are difficult but not impossible.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some tasks are difficult.’ that 'No day is impossible.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some tasks are difficult.’ that 'Some but not all tasks are difficult but not impossible.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a1",10],"Question", {q:"Would you infer from ‘Some doctors dislike coffee.’ that 'Some but not all doctors dislike coffee.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some doctors dislike coffee.’ that 'Some doctors dislike but do not loathe coffee.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some doctors dislike coffee.’ that 'No doctor loathes coffee.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some doctors dislike coffee.’ that 'Some but not all doctors dislike but do not loathe coffee.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",10],"Question", {q:"Would you infer from ‘Some teachers dislike fighting.’ that 'Some but not all teachers dislike fighting.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some teachers dislike fighting.’ that 'Some teachers dislike but do not loathe fighting.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some teachers dislike fighting.’ that 'No doctor loathes fighting.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some teachers dislike fighting.’ that 'Some but not all teachers dislike but do not loathe fighting.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a1",11],"Question", {q:"Would you infer from ‘Some biologists saw few of the birds.’ that 'Some but not all biologists saw few of the birds.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some biologists saw few of the birds.’ that 'Some biologists saw few but not none of the birds.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some biologists saw few of the birds.’ that 'No biologist saw none of the birds.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some biologists saw few of the birds.’ that 'Some but not all biologists saw few but not none of the birds.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",11],"Question", {q:"Would you infer from ‘Some cops saw few of the children.’ that 'Some but not all cops saw few of the children.'?",as: [['s','Yes'],['k','No']]},
                        "Question", {q:"Would you infer from ‘Some cops saw few of the children.’ that 'Some cops saw few but not none of the children.'?",as: [['s','Yes'],['k','No']]},
                        "Question", {q:"Would you infer from ‘Some cops saw few of the children.’ that 'No cop saw none of the children.'?",as: [['s','Yes'],['k','No']]},
                        "Question", {q:"Would you infer from ‘Some cops saw few of the children.’ that 'Some but not all cops saw few but not none of the children.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a1",12],"Question", {q:"Would you infer from ‘Some jokes are funny.’ that 'Some but not all jokes are funny but not hilarious.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some jokes are funny.’ that 'Some jokes are funny but not hilarious.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some jokes are funny.’ that 'No joke  is hilarious.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some jokes are funny.’ that 'Some but not all jokes are funny but not hilarious.'?",as: [['s','Yes'],['k','No']]}],
[["IMPLICATURES-a2",12],"Question", {q:"Would you infer from ‘Some movies are funny.’ that 'Some but not all movies are funny but not hilarious.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some movies are funny.’ that 'Some movies are funny but not hilarious.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some movies are funny.’ that 'No movie is hilarious.'?",as: [['s','Yes'],['k','No']]},
                       "Question", {q:"Would you infer from ‘Some movies are funny.’ that 'Some but not all movies are funny but not hilarious.'?",as: [['s','Yes'],['k','No']]}],

//// Fillers
[["filler-should",9],"Question", {q:"In ‘Mary shouldn't be upset. Her father will give her a new car.’, ‘Mary shouldn't be upset.’ means",as: [['s','It is necessary that Mary is not upset.'],['k','It is not necessary that Mary is upset.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘Mary shouldn't be upset.’ is in the context ‘Mary shouldn't be upset. Her father will give her a new car.’?"}],          
[["filler-should",10], "Question", {q:"In ‘You shouldn't be annoyed. Your wife will cook dinner for you.’, ‘You shouldn't be annoyed.’ means",as: [['s','It is necessary that you are not annoyed.'],['k','It is not necessary that you are annoyed.']]},
                       "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't be annoyed.’ is in the context ‘You shouldn't be annoyed.Your wife will cook dinner for you.’?"}],
[["filler-should",11],  "Question", {q:"In ‘Tim shouldn't cook rice. His girlfriend does not like it.’, ‘Tim shouldn't cook rice.’ means",as: [['s','It is necessary that Tim does not cook rice.'],['k','It is not necessary that Tom cooks rice.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘Tim shouldn't cook rice.’ is in the context ‘Tim shouldn't cook rice. His girlfriend does not like it.’?"}],
[["filler-should",12],  "Question", {q:"In  ‘You shouldn't write the first draft yourself. Linda is the first author.’, 'You shouldn't write the first draft yourself.' means",as: [['s','It is necessary that you do not write the first draft yourself.'],['k','It is not necessary that you write the first draft yourself.']]},
                        "AcceptabilityJudgment", {s: "How acceptable do you think ‘You shouldn't write the first draft yourself.’ is in the context ‘You shouldn't write the first draft yourself. Linda is the first author.’?"}],
[["filler-need",13], "Question", {q:"In ‘Tom needn't be offended. The woman didn't want to insult him at all.’, 'Tom needn't be offended.' means",as: [['s','It is necessary that Tom is not offended.'],['k','It is not necessary that Tom is offended.']]},
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
[["filler-need", 21], "Question", {q:"In ‘Bill needn't be excited. The woman invited him to his favorite film.’, ‘Bill needn't be excited.’ means",as: [['s','It is necessary that Bill is not excited.'],['k','It is not necessary that Bill is excited.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Bill needn't be excited.’ is in the context ‘Bill needn't be excited. The woman invited him to his favorite film.’?"}],
[["filler-need",22], "Question", {q:"In  ‘You needn't be pleased. Your husband gave you a wonderful gift.’, ‘You needn't be pleased. ’ means",as: [['s','It is necessary that you are not pleased.'],['k','It is not necessary that you are pleased.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn't be pleased.’ is in the context ‘' You needn't be pleased. Your husband gave you a wonderful gift.’?"}],
[["filler-need",23], "Question", {q:"In ‘Sarah needn't take care of the sick. They are in great suffering.’, ‘Sarah needn't take care of the sick.’ means",as: [['s','It is necessary that Sarah does not take care of the sick.'],['k','It is not necessary that Sarah takes care of the sick.']]},
                      "AcceptabilityJudgment", {s: "How acceptable do you think ‘Sophie needn't take care of the sick.’ is in the context ‘Sarah needn't take care of the sick. They are in great suffering.’?"}],
[["filler-need",24], "Question", {q:"In ‘You needn't sweep the floor. It is very dirty.’, ‘You needn't sweep the floor.’ means",as: [['s','It is necessary that you do not sweep the floor.'],['k','It is not necessary that you sweep the floor.']]},
                     "AcceptabilityJudgment", {s: "How acceptable do you think ‘You needn’t sweep the floor. It is very dirty.’ is in the context ‘You needn’t sweep the floor. It is very dirty.’?"}],
["hiddenCompletionCode", "FlashSentence", {s: String(completionCode), timeout: 1, sentenceDescType: "literal"}] 


    ]   





  
