// Architeuthis Dux (Giant Atlantic Squid)
// Dillon et al
// 2AFC verb / pronoun continuation task

// Do show progress bar (fine! I give in)
var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'intro',
    'shared-intro',
    sepWith("timeoutSep",rshuffle(startsWith('ARCHITEUTHIS'),startsWith('filler'))),
    'debrief'
     );

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedAcceptabilityJudgment';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Please wait. Your data are being sent to the server."; 
var completionMessage = "Thank you for your participation. Your completion code is ASRJCD6V. To complete this experiment, go to: https://app.prolific.ac/submissions/complete?cc=ASRJCD6V."; 
var completionErrorMessage = "There was an error in sending your data to the server. You may still complete this experiment. Your completion code is ASRJCD6V. Please go to: https://app.prolific.ac/submissions/complete?cc=ASRJCD6V."; 

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
        timeout: null,
        hasCorrect: 1,
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
                {html: "<p>Please take a short break. Press a button to continue when you're ready.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 2500, normalMessage: "Hands in place! Your first sentence of this block will start soon."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [

["timeoutSep", Separator, { transfer: 250, normalMessage: "", errorMessage: ""}],

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Let's try one practice item."]
                         ]}],

['shared-intro', Separator, { transfer: 250, normalMessage: "", errorMessage: ""}, "EPDashedSentence", {s:"+"}, DS, {s:"The cute cats",as: [['s','are'],['k','is']]}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "How was that? Just try and pick whichever word seems to fit better as the next word of the sentence.  "],
                           ["p", "Many English speakers find 'are' to be a more natural completion. Let's try some more."]
                         ]}],

['shared-intro', Separator, { transfer: 250, normalMessage: "", errorMessage: ""}, "EPDashedSentence", {s:"+"}, DS, {s:"The young man behaved",as: [['s','themselves'],['k','himself']]}],
['shared-intro', Separator, { transfer: 250, normalMessage: "", errorMessage: ""}, "EPDashedSentence", {s:"+"}, DS, {s:"Mary and John",as: [['s','are'],['k','is']]}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Alright, that's it for practice! Hit any key when you're ready to begin."]
                        ]}],

['shared-intro',"Separator",{transfer: 2500, normalMessage: "Hands in place! Your first sentence of this block will start soon."}],


//// Shared experimental items + fillers
//// ARCHITEUTHIS:[["ARCHITEUTHIS-matchheadsg",1], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea de lângă femeie mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă femei mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",1], "EPDashedSentence", {s:"+"}, DS, {s:"Cărţile de lângă femei mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",1], "EPDashedSentence", {s:"+"}, DS, {s:" Cărţile de lângă femeie mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadsg",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă cântăreaţă mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",2], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă cântăreţe mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",2], "EPDashedSentence", {s:"+"}, DS, {s:"Viorile de lângă cântăreţe mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",2], "EPDashedSentence", {s:"+"}, DS, {s:" Viorile de lângă  cântăreaţă mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadsg",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă croitoreasă uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă croitorese uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",3], "EPDashedSentence", {s:"+"}, DS, {s:"Rochiile de lângă croitorese uneori ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",3], "EPDashedSentence", {s:"+"}, DS, {s:" Rochiile de lângă  croitoreasă uneori ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadsg",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă gospodină uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă gospodine uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă gospodine uneori ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",4], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceţurile de lângă  gospodină uneori ",as: [['s','au'],['k','are']]}], 


 [["ARCHITEUTHIS-matchheadsg",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă fată mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica de lângă fete mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fete mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",5], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fată mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadsg",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă elevă adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarea de lângă eleve adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă eleve adesea ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",6], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă elevă adesea ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadsg",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă contabilă mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarea de lângă contabile mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",7], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă contabile mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",7], "EPDashedSentence", {s:"+"}, DS, {s:" Vânzătoarele de lângă contabilă mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadsg",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oaia de lângă ţărancă mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oaia de lângă ţărănci mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţărănci mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",8], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţărancă mereu",as: [['s','au'],['k','are']]}],


[["ARCHITEUTHIS-matchheadsg",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organism mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organisme mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",9], "EPDashedSentence", {s:"+"}, DS, {s:" Cuţitele de lângă organisme mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",9], "EPDashedSentence", {s:"+"}, DS, {s:" Cuţitele de lângă organism mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animal mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animale mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă animale mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile de lângă animal mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustaceu adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustacee adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă crustacee adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipurile de lângă crustaceu adesea",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macrou mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macrouri mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă macrouri mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureurile de lângă macrou mereu",as: [['s','au'],['k','are']]}],


[["ARCHITEUTHIS-matchheadsg",13], "EPDashedSentence", {s:"+"}, DS, {s:"Organismul de lângă microorganism mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",13], "EPDashedSentence", {s:"+"}, DS, {s:"Organismul de lângă microorganisme mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",13], "EPDashedSentence", {s:"+"}, DS, {s:"Organismele de lângă microorganisme mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",13], "EPDashedSentence", {s:"+"}, DS, {s:"Organismele de lângă microorganism mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă nevertebrat uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferul de lângă nevertebrate uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă nevertebrate uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",14], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă nevertebrat uneori",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă vertebrat adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macroul de lângă vertebrate adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebrate adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",15], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebrat adesea",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă mamifer uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalul de lângă mamifere uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamifere uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",16], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamifer uneori",as: [['s','au'],['k','are']]}],


[["ARCHITEUTHIS-matchheadsg",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copil adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copii adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",17], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii de lângă copii adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",17], "EPDashedSentence", {s:"+"}, DS, {s:" Câinii de lângă copil adesea",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacient mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacienţi mereu ",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă pacienţi mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",18], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorii de lângă pacient mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugăr mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugări mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă călugări mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",19], "EPDashedSentence", {s:"+"}, DS, {s:"Preoţii de lângă călugăr mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă student uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă studenţi uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",20], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorii de lângă studenţi uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",20], "EPDashedSentence", {s:"+"}, DS, {s:" Profesorii de lângă student uneori",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă hangiu mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnatul de lângă hangii mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangii mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",21], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangiu mereu",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă erou mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buşteanul de lângă eroi mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",22], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă eroi mereu",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",23], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă erou mereu ",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă croitor adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturele de lângă croitori adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitori adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",23], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitor adesea",as: [['s','au'],['k','are']]}],
[["ARCHITEUTHIS-matchheadsg",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă contabil uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadsg",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacul de lângă contabili uneori",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-matchheadpl",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabili adesea",as: [['s','au'],['k','are']]}], 
[["ARCHITEUTHIS-mismatchheadpl",24], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabil adesea",as: [['s','au'],['k','are']]}],


//// Fillers
["filler-25", "EPDashedSentence", {s:"+"}, DS, {s:"Fata pe care domnii o",as: [['s','iubesc'],['k','iubeşte']]}],
["filler-26", "EPDashedSentence", {s:"+"}, DS, {s:"Cartea pe care fetele o",as: [['s','citesc'],['k','citeşte']]}],
["filler-27", "EPDashedSentence", {s:"+"}, DS, {s:"Pinguinul pe care copiii îl",as: [['s','privesc'],['k','priveşte']]}],
["filler-28", "EPDashedSentence", {s:"+"}, DS, {s:"Pisica pe care băieţii o",as: [['s','lovesc'],['k','loveşte']]}],
["filler-29", "EPDashedSentence", {s:"+"}, DS, {s:"Veveriţa pe care bărbaţii o",as: [['s','prind'],['k','prinde']]}],
["filler-30", "EPDashedSentence", {s:"+"}, DS, {s:"Lumina pe care oamenii o",as: [['s','văd'],['k','vede']]}],
["filler-31", "EPDashedSentence", {s:"+"}, DS, {s:"Casa pe care contabilii o",as: [['s','construiesc'],['k','construieşte']]}],
["filler-32", "EPDashedSentence", {s:"+"}, DS, {s:"Mingea pe care sportivii o",as: [['s','aleg'],['k','alege']]}],
["filler-33", "EPDashedSentence", {s:"+"}, DS, {s:"Vinul pe care bucătarii îl",as: [['s','beau'],['k','bea']]}],
["filler-34", "EPDashedSentence", {s:"+"}, DS, {s:"Câinele pe care doctorii îl",as: [['s','hrănesc'],['k','hrăneşte']]}],
["filler-35", "EPDashedSentence", {s:"+"}, DS, {s:"Poemul pe care tinerii îl",as: [['s','spun'],['k','spune']]}],
["filler-36", "EPDashedSentence", {s:"+"}, DS, {s:"Omul pe care animalele îl",as: [['s','îndrăgesc'],['k','îndrăgeşte']]}], 
["filler-37", "EPDashedSentence", {s:"+"}, DS, {s:"Vinurile pe care domnul le",as: [['s','iubesc'],['k','iubeşte']]}], 
["filler-38", "EPDashedSentence", {s:"+"}, DS, {s:"Scrisorile pe care fata le",as: [['s','citesc'],['k','citeşte']]}], 
["filler-39", "EPDashedSentence", {s:"+"}, DS, {s:"Girafele pe care copilul le",as: [['s','privesc'],['k','priveşte']]}], 
["filler-40", "EPDashedSentence", {s:"+"}, DS, {s:"Motanii pe care bunicul îi",as: [['s','adăpostesc'],['k','adăposteşte']]}], 
["filler-41", "EPDashedSentence", {s:"+"}, DS, {s:"Şerpii pe care bărbatul îi",as: [['s','strivesc'],['k','striveşte']]}], 
["filler-42", "EPDashedSentence", {s:"+"}, DS, {s:"Stelele pe care înţeleptul le",as: [['s','urmăresc'],['k','urmăreşte']]}], 
["filler-43", "EPDashedSentence", {s:"+"}, DS, {s:"Barurile pe care pictorul le",as: [['s','construiesc'],['k','construieşte']]}], 
["filler-44", "EPDashedSentence", {s:"+"}, DS, {s:"Tablourile pe care colecţionarul le",as: [['s','văd'],['k','vede']]}], 
["filler-45", "EPDashedSentence", {s:"+"}, DS, {s:"Sucurile pe care chelnerul le",as: [['s','beau'],['k','bea']]}], 
["filler-46", "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile pe care doamna le",as: [['s','îngrijesc'],['k','îngrijeşte']]}], 
 ["filler-47", "EPDashedSentence", {s:"+"}, DS, {s:"Cuvintele pe care preotul le",as: [['s','rostesc'],['k','rosteşte']]}], 
["filler-48", "EPDashedSentence", {s:"+"}, DS, {s:"Câinii pe care pisica îi",as: [['s','urăsc'],['k','urăşte']]}], 
["filler-49", "EPDashedSentence", {s:"+"}, DS, {s:"Femeia şi copilul",as: [['s','beau'],['k','bea']]}], 
["filler-50", "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul şi bolnavul",as: [['s','plâng'],['k','plânge']]}],
["filler-51", "EPDashedSentence", {s:"+"}, DS, {s:"Vulpoiul şi vulpea",as: [['s','sar'],['k','sare']]}],
["filler-52", "EPDashedSentence", {s:"+"}, DS, {s:"Găina şi puiul",as: [['s','ciugulesc'],['k','ciuguleşte']]}],
["filler-53", "EPDashedSentence", {s:"+"}, DS, {s:"Paharul şi sticla",as: [['s','cad'],['k','cade']]}],
["filler-54", "EPDashedSentence", {s:"+"}, DS, {s:"Oboseala şi plictisul",as: [['s','ucid'],['k','ucide']]}],
["filler-55", "EPDashedSentence", {s:"+"}, DS, {s:"Iubirea şi prietenia",as: [['s','susţin'],['k','susţine']]}],
["filler-56", "EPDashedSentence", {s:"+"}, DS, {s:"Căţelul şi pisica",as: [['s','dorm'],['k','doarme']]}],
["filler-57", "EPDashedSentence", {s:"+"}, DS, {s:"Cafeaua şi ceaiul",as: [['s','au'],['k','are']]}],
["filler-58", "EPDashedSentence", {s:"+"}, DS, {s:"Trandafirul şi zambila",as: [['s','miros'],['k','miroase']]}],
["filler-59", "EPDashedSentence", {s:"+"}, DS, {s:"Cartea şi caietul",as: [['s','sunt'],['k','este']]}],
["filler-60", "EPDashedSentence", {s:"+"}, DS, {s:"Papagalul şi băiatul",as: [['s','vorbesc'],['k','vorbeşte']]}],
["filler-61", "EPDashedSentence", {s:"+"}, DS, {s:"Lampa de pe cartea verde ",as: [['s','se aprinde'],['k','se citeşte']]}],
["filler-62", "EPDashedSentence", {s:"+"}, DS, {s:"Fetiţa din camera albastră",as: [['s','dansează'],['k','luminează']]}],
["filler-63", "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşul de lângă scaunul roşu ",as: [['s','doarme'],['k','se rupe']]}],
["filler-64", "EPDashedSentence", {s:"+"}, DS, {s:"Pasărea de lângă masa neagră",as: [['s','cântă'],['k','se pliază']]}],
["filler-65", "EPDashedSentence", {s:"+"}, DS, {s:"Măgarul de lângă căţelul maro",as: [['s','rage'],['k','latră']]}],
["filler-66", "EPDashedSentence", {s:"+"}, DS, {s:"Papucii de pe copiii bolnavi",as: [['s','alunecă'],['k','strănută']]}],
["filler-67", "EPDashedSentence", {s:"+"}, DS, {s:"Cangurii de lângă femeile zâmbăreţe",as: [['s','sar'],['k','vorbesc']]}],
["filler-68", "EPDashedSentence", {s:"+"}, DS, {s:"Albinele de pe portocalele stricate",as: [['s','bâzâie'],['k','miros']]}],
["filler-69", "EPDashedSentence", {s:"+"}, DS, {s:"Râul de lângă pădurea frumoasă",as: [['s','curge'],['k','arde']]}],
["filler-70", "EPDashedSentence", {s:"+"}, DS, {s:"Urşii de lângă prinţesele minunate ",as: [['s','hibernează'],['k','se căsătoresc']]}],
["filler-71", "EPDashedSentence", {s:"+"}, DS, {s:"Florile din sticlele albastre",as: [['s','se ofilesc'],['k','se sparg']]}],
["filler-72", "EPDashedSentence", {s:"+"}, DS, {s:"Calculatoarele de lângă copiii năzdrăvani",as: [['s','se strică'],['k','se joacă']]}],
["filler-73", "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşii fricoşi",as: [['s','se ascund'],['k','se ascunde']]}],
["filler-74", "EPDashedSentence", {s:"+"}, DS, {s:"Cutremurele mari",as: [['s','distrug'],['k','distruge']]}],
["filler-75", "EPDashedSentence", {s:"+"}, DS, {s:"Grădinile japoneze",as: [['s','au'],['k','are']]}],
["filler-76", "EPDashedSentence", {s:"+"}, DS, {s:"Fetele seducătoare",as: [['s','atrag'],['k','atrage']]}],
["filler-77", "EPDashedSentence", {s:"+"}, DS, {s:"Muzicienii creativi ",as: [['s','compun'],['k','compune']]}],
["filler-78", "EPDashedSentence", {s:"+"}, DS, {s:"Rănile sufleteşti ",as: [['s','dor'],['k','doare']]}],
["filler-79", "EPDashedSentence", {s:"+"}, DS, {s:"Paharele colorate",as: [['s','conţin'],['k','conţine']]}],
["filler-80", "EPDashedSentence", {s:"+"}, DS, {s:"Hamsterii curioşi",as: [['s','apar'],['k','apare']]}],
["filler-81", "EPDashedSentence", {s:"+"}, DS, {s:"Elevii cuminţi",as: [['s','doresc'],['k','doreşte']]}],
["filler-82", "EPDashedSentence", {s:"+"}, DS, {s:"Parfumul franţuzesc",as: [['s','miros'],['k','miroase']]}],
["filler-83", "EPDashedSentence", {s:"+"}, DS, {s:"Bunicii iubitori",as: [['s','dau'],['k','dă']]}],
 ["filler-84", "EPDashedSentence", {s:"+"}, DS, {s:"Cheile verzi",as: [['s','deschid'],['k','deschide']]}],
["filler-85", "EPDashedSentence", {s:"+"}, DS, {s:"Fata şatenă",as: [['s','se ascund'],['k','se ascunde']]}],
["filler-86", "EPDashedSentence", {s:"+"}, DS, {s:"Pisica năzdrăvană",as: [['s','sparg'],['k','sparge']]}],
["filler-87", "EPDashedSentence", {s:"+"}, DS, {s:"Caietul negru",as: [['s','au'],['k','are']]}],
["filler-88", "EPDashedSentence", {s:"+"}, DS, {s:"Magnetul maro",as: [['s','atrag'],['k','atrage']]}],
["filler-89", "EPDashedSentence", {s:"+"}, DS, {s:"Pixul albastru",as: [['s','scriu'],['k','scrie']]}],
["filler-90", "EPDashedSentence", {s:"+"}, DS, {s:"Iepurele alb",as: [['s','sar'],['k','sare']]}],
["filler-91", "EPDashedSentence", {s:"+"}, DS, {s:"Studentul harnic",as: [['s','muncesc'],['k','munceşte']]}],
["filler-92", "EPDashedSentence", {s:"+"}, DS, {s:"Femeia misterioasă",as: [['s','dispar'],['k','dispare']]}],
["filler-93", "EPDashedSentence", {s:"+"}, DS, {s:"Poetul talentat",as: [['s','vorbesc'],['k','vorbeşte']]}],
["filler-94", "EPDashedSentence", {s:"+"}, DS, {s:"Mâncarea gustoasă",as: [['s','miros'],['k','miroase']]}],
["filler-95", "EPDashedSentence", {s:"+"}, DS, {s:"Cursul masteral",as: [['s','cuprind'],['k','cuprinde']]}],
 ["filler-96", "EPDashedSentence", {s:"+"}, DS, {s:"Bagajul mare",as: [['s','conţin'],['k','conţine']]}]




;
