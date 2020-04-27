// Agreement Attraction in Romanian (simple version without adjectives)
// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("timeoutSep",rshuffle(startsWith('ATTRAGREEROMANIAN'),startsWith('filler'))),
    'debrief'
     );

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedAcceptabilityJudgment';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"
;
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server."; 

// Controller settings.
// Parameter settings taken from Staub 2009
var defaults = [
     "EPDashedSentence", {
        mode: 'speeded acceptability',
        display: 'in place',
        blankText: '+',
        wordTime: 1000,
        wordPauseTime: 150
        },
        DS, {randomOrder: false,
        presentHorizontally: true,
        mode: 'speeded acceptability',
        display: 'in place',
        blankText: '+',
        wordTime: 250,
        wordPauseTime: 150,
        timeout: 3000,
        hasCorrect: false,
        q: ''}
];

// Add breaks every 24 items
function modifyRunningOrder(ro)
{
    for (var i = 0; i < ro.length; ++i)
    {
        if (i % 24 == 1
            && i > 23
            && i < 250)
        {
            ro[i].push(new DynamicElement(
                "Message",
                {html: "<p> Vă rugăm să luaţi o mică pauză. Apăsaţi orice tastă când sunteţi gata să începeţi din nou.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [
["timeoutSep", Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
 ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai să exersăm un pic înainte de a începe efectiv."]
                         ]}],
['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Pisicuţele tigrate",as: [['s','sunt'],['k','este']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut? Pur şi simplu alegeţi rapid varianta care vi se pare o continuare mai bună a propoziţiei."],
                           ["p", "Multor vorbitori nativi de limba română li se pare că 'sunt' este o continuare mai firească a fragmentului anterior. Hai să mai exersăm un pic."],
                         ]}],

['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Zambila roz",as: [['s','miros'],['k','miroase']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],
['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Maria şi Ion",as: [['s','sunt'],['k','este']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."}],


//// Shared experimental items + fillers
//// 
[["ATTRAGREEROMANIAN-mismatchheadsg1",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",1], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",1], "EPDashedSentence", {s:"+"}, DS, {s:"Cărţile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",1], "EPDashedSentence", {s:"+"}, DS, {s:"Cărţile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",1], "EPDashedSentence", {s:"+"}, DS, {s:"Cărţile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",1], "EPDashedSentence", {s:"+"}, DS, {s:"Cărţile de lângă ele mereu ",as: [['s','au'],['k','are']]}],
    
[["ATTRAGREEROMANIAN-mismatchheadsg1",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",2], "EPDashedSentence", {s:"+"}, DS, {s:"Viorile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",2], "EPDashedSentence", {s:"+"}, DS, {s:"Viorile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",2], "EPDashedSentence", {s:"+"}, DS, {s:"Viorile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",2], "EPDashedSentence", {s:"+"}, DS, {s:"Viorile de lângă ele mereu ",as: [['s','au'],['k','are']]}],
    
[["ATTRAGREEROMANIAN-mismatchheadsg1",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochiile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochiile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochiile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochiile de lângă ele mereu ",as: [['s','au'],['k','are']]}], 

[["ATTRAGREEROMANIAN-mismatchheadsg1",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă ele mereu ",as: [['s','au'],['k','are']]}],
    
 [["ATTRAGREEROMANIAN-mismatchheadsg1",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă ele mereu ",as: [['s','au'],['k','are']]}],
 
[["ATTRAGREEROMANIAN-mismatchheadsg1",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă ele mereu ",as: [['s','au'],['k','are']]}],    

[["ATTRAGREEROMANIAN-mismatchheadsg1",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă ele mereu ",as: [['s','au'],['k','are']]}],
    
[["ATTRAGREEROMANIAN-mismatchheadsg1",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oaia de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oaia de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oaia de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oia de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ele mereu ",as: [['s','au'],['k','are']]}], 

[["ATTRAGREEROMANIAN-mismatchheadsg1",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitele de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitele de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitele de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitele de lângă ele mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-mismatchheadsg1",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă ele mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-mismatchheadsg1",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă ele mereu ",as: [['s','au'],['k','are']]}],  
[["ATTRAGREEROMANIAN-mismatchheadsg1",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă ele mereu ",as: [['s','au'],['k','are']]}],    
[["ATTRAGREEROMANIAN-mismatchheadsg1",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",13], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă ele mereu ",as: [['s','au'],['k','are']]}],    

[["ATTRAGREEROMANIAN-mismatchheadsg1",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",14], "EPDashedSentence", {s:"+"}, DS, {s:"Maniferele de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă ele mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-mismatchheadsg1",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă ele mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-mismatchheadsg1",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă ele mereu ",as: [['s','au'],['k','are']]}],

[["ATTRAGREEROMANIAN-mismatchheadsg1",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii de lângă ele mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-mismatchheadsg1",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă ele mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-mismatchheadsg1",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă ele mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-mismatchheadsg1",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorii de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorii de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorii de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorii de lângă ele mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-mismatchheadsg1",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă ele mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEROMANIAN-mismatchheadsg1",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă ele mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg1",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă ele mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg1",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă noi mereu ",as: [['s','avem'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg2",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă voi mereu ",as: [['s','aveţi'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3M",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-mismatchheadsg3F",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă ele mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl1",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă noi mereu ",as: [['s','avem'],['k','au']]}], 
[["ATTRAGREEROMANIAN-matchheadpl2",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă voi mereu ",as: [['s','aveţi'],['k','au']]}],
[["ATTRAGREEROMANIAN-matchheadpl3M",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă ei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEROMANIAN-matchheadpl3F",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă ele mereu",as: [['s','au'],['k','are']]}], 

//// Fillers
[["filler-twonounspluralcorrectchoice",25], "EPDashedSentence", {s:"+"}, DS, {s:"Fata pe care domnii o",as: [['s','iubesc'],['k','iubeşte']]}],
[["filler-twonounspluralcorrectchoice",26], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea pe care fetele o",as: [['s','citesc'],['k','citeşte']]}],
[["filler-twonounspluralcorrectchoice",27], "EPDashedSentence", {s:"+"}, DS, {s:"Pinguinul pe care copiii îl",as: [['s','privesc'],['k','priveşte']]}],
[["filler-twonounspluralcorrectchoice",28], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica pe care băieţii o",as: [['s','lovesc'],['k','loveşte']]}],
[["filler-twonounspluralcorrectchoice",29], "EPDashedSentence", {s:"+"}, DS, {s:"Veveriţa pe care bărbaţii o",as: [['s','prind'],['k','prinde']]}],
[["filler-twonounspluralcorrectchoice",30], "EPDashedSentence", {s:"+"}, DS, {s:"Lumina pe care oamenii o",as: [['s','văd'],['k','vede']]}],
[["filler-twonounspluralcorrectchoice",31], "EPDashedSentence", {s:"+"}, DS, {s:"Casa pe care contabilii o",as: [['s','construiesc'],['k','construieşte']]}],
[["filler-twonounspluralcorrectchoice",32], "EPDashedSentence", {s:"+"}, DS, {s:"Mingea pe care sportivii o",as: [['s','aleg'],['k','alege']]}],
[["filler-twonounspluralcorrectchoice",33], "EPDashedSentence", {s:"+"}, DS, {s:"Vinul pe care bucătarii îl",as: [['s','beau'],['k','bea']]}],
[["filler-twonounspluralcorrectchoice",34], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele pe care doctorii îl",as: [['s','hrănesc'],['k','hrăneşte']]}],
[["filler-twonounspluralcorrectchoice",35],  "EPDashedSentence", {s:"+"}, DS, {s:"Poemul pe care tinerii îl",as: [['s','spun'],['k','spune']]}],
[["filler-twonounspluralcorrectchoice",36], "EPDashedSentence", {s:"+"}, DS, {s:"Omul pe care animalele îl",as: [['s','îndrăgesc'],['k','îndrăgeşte']]}], 
[["filler-twonounssingularcorrectchoice",37], "EPDashedSentence", {s:"+"}, DS, {s:"Vinurile pe care domnul le",as: [['s','iubesc'],['k','iubeşte']]}], 
[["filler-twonounssingularcorrectchoice",38], "EPDashedSentence", {s:"+"}, DS, {s:"Scrisorile pe care fata le",as: [['s','citesc'],['k','citeşte']]}], 
[["filler-twonounssingularcorrectchoice",39], "EPDashedSentence", {s:"+"}, DS, {s:"Girafele pe care copilul le",as: [['s','privesc'],['k','priveşte']]}], 
[["filler-twonounssingularcorrectchoice",40], "EPDashedSentence", {s:"+"}, DS, {s:"Motanii pe care bunicul îi",as: [['s','adăpostesc'],['k','adăposteşte']]}], 
[["filler-twonounssingularcorrectchoice",41], "EPDashedSentence", {s:"+"}, DS, {s:"Şerpii pe care bărbatul îi",as: [['s','strivesc'],['k','striveşte']]}], 
[["filler-twonounssingularcorrectchoice",42], "EPDashedSentence", {s:"+"}, DS, {s:"Stelele pe care înţeleptul le",as: [['s','urmăresc'],['k','urmăreşte']]}], 
[["filler-twonounssingularcorrectchoice",43], "EPDashedSentence", {s:"+"}, DS, {s:"Barurile pe care pictorul le",as: [['s','construiesc'],['k','construieşte']]}], 
[["filler-twonounssingularcorrectchoice",44], "EPDashedSentence", {s:"+"}, DS, {s:"Păsările pe care colecţionarul le",as: [['s','văd'],['k','vede']]}], 
[["filler-twonounssingularcorrectchoice",45], "EPDashedSentence", {s:"+"}, DS, {s:"Sucurile pe care chelnerul le",as: [['s','beau'],['k','bea']]}], 
[["filler-twonounssingularcorrectchoice",46], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile pe care doamna le",as: [['s','îngrijesc'],['k','îngrijeşte']]}], 
[["filler-twonounssingularcorrectchoice",47], "EPDashedSentence", {s:"+"}, DS, {s:"Cuvintele pe care preotul le",as: [['s','rostesc'],['k','rosteşte']]}], 
[["filler-twonounssingularcorrectchoice",48], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii pe care pisica îi",as: [['s','urăsc'],['k','urăşte']]}], 
[["filler-coordination",49], "EPDashedSentence", {s:"+"}, DS, {s:"Femeia şi copilul",as: [['s','beau'],['k','bea']]}], 
[["filler-coordination",50], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul şi bolnavul",as: [['s','plâng'],['k','plânge']]}],
[["filler-coordination",51], "EPDashedSentence", {s:"+"}, DS, {s:"Vulpoiul şi vulpea",as: [['s','sar'],['k','sare']]}],
[["filler-coordination",52], "EPDashedSentence", {s:"+"}, DS, {s:"Găina şi puiul",as: [['s','ciugulesc'],['k','ciuguleşte']]}],
[["filler-coordination",53], "EPDashedSentence", {s:"+"}, DS, {s:"Paharul şi sticla",as: [['s','cad'],['k','cade']]}],
[["filler-coordination",54], "EPDashedSentence", {s:"+"}, DS, {s:"Oboseala şi plictisul",as: [['s','ucid'],['k','ucide']]}],
[["filler-coordination",55], "EPDashedSentence", {s:"+"}, DS, {s:"Iubirea şi prietenia",as: [['s','susţin'],['k','susţine']]}],
[["filler-coordination",56], "EPDashedSentence", {s:"+"}, DS, {s:"Căţelul şi pisica",as: [['s','dorm'],['k','doarme']]}],
[["filler-coordination",57], "EPDashedSentence", {s:"+"}, DS, {s:"Cafeaua şi ceaiul",as: [['s','au'],['k','are']]}],
[["filler-coordination",58], "EPDashedSentence", {s:"+"}, DS, {s:"Trandafirul şi zambila",as: [['s','miros'],['k','miroase']]}],
[["filler-coordination",59], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea şi caietul",as: [['s','sunt'],['k','este']]}],
[["filler-coordination",60], "EPDashedSentence", {s:"+"}, DS, {s:"Papagalul şi băiatul",as: [['s','vorbesc'],['k','vorbeşte']]}],
[["filler-semanticchoice",61], "EPDashedSentence", {s:"+"}, DS, {s:"Lampa de lângă cartea verde ",as: [['s','se aprinde'],['k','se citeşte']]}],
[["filler-semanticchoice",62], "EPDashedSentence", {s:"+"}, DS, {s:"Fetiţa de lângă camera albastră",as: [['s','dansează'],['k','luminează']]}],
[["filler-semanticchoice",63], "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşul de lângă scaunul roşu ",as: [['s','doarme'],['k','se rupe']]}],
[["filler-semanticchoice",64], "EPDashedSentence", {s:"+"}, DS, {s:"Pasărea de lângă masa neagră",as: [['s','cântă'],['k','se pliază']]}],
[["filler-semanticchoice",65], "EPDashedSentence", {s:"+"}, DS, {s:"Măgarul de lângă căţelul maro",as: [['s','rage'],['k','latră']]}],
[["filler-semanticchoice",66], "EPDashedSentence", {s:"+"}, DS, {s:"Papucii de lângă copiii bolnavi",as: [['s','alunecă'],['k','strănută']]}],
[["filler-semanticchoice",67], "EPDashedSentence", {s:"+"}, DS, {s:"Hainele de lângă femeile zâmbăreţe",as: [['s','cad'],['k','vorbesc']]}],
[["filler-semanticchoice",68], "EPDashedSentence", {s:"+"}, DS, {s:"Albinele de lângă portocalele stricate",as: [['s','bâzâie'],['k','miros']]}],
[["filler-semanticchoice",69], "EPDashedSentence", {s:"+"}, DS, {s:"Râul de lângă pădurea frumoasă",as: [['s','curge'],['k','arde']]}],
[["filler-semanticchoice",70], "EPDashedSentence", {s:"+"}, DS, {s:"Urşii de lângă prinţesele minunate ",as: [['s','hibernează'],['k','se căsătoresc']]}],
[["filler-semanticchoice",71], "EPDashedSentence", {s:"+"}, DS, {s:"Florile de lângă sticlele albastre",as: [['s','se ofilesc'],['k','se sparg']]}],
[["filler-semanticchoice",72], "EPDashedSentence", {s:"+"}, DS, {s:"Calculatoarele de lângă copiii năzdrăvani",as: [['s','se strică'],['k','se joacă']]}],
[["filler-onenounplagreement",73], "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşii fricoşi",as: [['s','se ascund'],['k','se ascunde']]}],
[["filler-onenounplagreement",74], "EPDashedSentence",{s:"+"}, DS, {s:"Cutremurele mari",as: [['s','distrug'],['k','distruge']]}],
[["filler-onenounplagreement",75], "EPDashedSentence",{s:"+"}, DS, {s:"Grădinile japoneze",as: [['s','au'],['k','are']]}],
[["filler-onenounplagreement",76], "EPDashedSentence",{s:"+"}, DS, {s:"Fetele seducătoare",as: [['s','atrag'],['k','atrage']]}],
[["filler-onenounplagreement",77], "EPDashedSentence", {s:"+"}, DS, {s:"Muzicienii creativi ",as: [['s','compun'],['k','compune']]}],
[["filler-onenounplagreement",78], "EPDashedSentence", {s:"+"}, DS, {s:"Rănile sufleteşti ",as: [['s','dor'],['k','doare']]}],
[["filler-onenounplagreement",79], "EPDashedSentence", {s:"+"}, DS, {s:"Paharele colorate",as: [['s','conţin'],['k','conţine']]}],
[["filler-onenounplagreement",80], "EPDashedSentence", {s:"+"}, DS, {s:"Hamsterii curioşi",as: [['s','apar'],['k','apare']]}],
[["filler-onenounplagreement",81], "EPDashedSentence", {s:"+"}, DS, {s:"Elevii cuminţi",as: [['s','doresc'],['k','doreşte']]}],
[["filler-onenounplagreement",82], "EPDashedSentence", {s:"+"}, DS, {s:"Parfumurile franţuzeşti",as: [['s','miros'],['k','miroase']]}],
[["filler-onenounplagreement",83], "EPDashedSentence", {s:"+"}, DS, {s:"Bunicii iubitori",as: [['s','dau'],['k','dă']]}],
 [["filler-onenounplagreement",84], "EPDashedSentence", {s:"+"}, DS, {s:"Cheile verzi",as: [['s','deschid'],['k','deschide']]}],
[["filler-onenounsgagreement",85], "EPDashedSentence", {s:"+"}, DS, {s:"Fata şatenă",as: [['s','se ascund'],['k','se ascunde']]}],
[["filler-onenounsgagreement",86], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica năzdrăvană",as: [['s','sparg'],['k','sparge']]}],
[["filler-onenounsgagreement",87], "EPDashedSentence", {s:"+"}, DS, {s:"Caietul negru",as: [['s','au'],['k','are']]}],
[["filler-onenounsgagreement",88], "EPDashedSentence", {s:"+"}, DS, {s:"Magnetul maro",as: [['s','atrag'],['k','atrage']]}],
[["filler-onenounsgagreement",89], "EPDashedSentence", {s:"+"}, DS, {s:"Pixul albastru",as: [['s','scriu'],['k','scrie']]}],
[["filler-onenounsgagreement",90], "EPDashedSentence", {s:"+"}, DS, {s:"Iepurele alb",as: [['s','sar'],['k','sare']]}],
[["filler-onenounsgagreement",91], "EPDashedSentence", {s:"+"}, DS, {s:"Studentul harnic",as: [['s','muncesc'],['k','munceşte']]}],
[["filler-onenounsgagreement",92], "EPDashedSentence", {s:"+"}, DS, {s:"Femeia misterioasă",as: [['s','dispar'],['k','dispare']]}],
[["filler-onenounsgagreement",93], "EPDashedSentence", {s:"+"}, DS, {s:"Poetul talentat",as: [['s','vorbesc'],['k','vorbeşte']]}],
[["filler-onenounsgagreement",94], "EPDashedSentence", {s:"+"}, DS, {s:"Mâncarea gustoasă",as: [['s','miros'],['k','miroase']]}],
[["filler-onenounsgagreement",95], "EPDashedSentence", {s:"+"}, DS, {s:"Cursul masteral",as: [['s','cuprind'],['k','cuprinde']]}],
[["filler-onenounsgagreement",96], "EPDashedSentence", {s:"+"}, DS, {s:"Bagajul mare",as: [['s','conţin'],['k','conţine']]}]


];



