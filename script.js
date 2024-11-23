var index = 0;

function changeQuote() {
/** */
    var quotes = [
        `"We are cooked" - St Paisios`,
        `"Partial faithfulness is no faithfulness at all" - St Augustine`,
        `"Every letter of yours breathes Moabitish pride. So much can a single bull inflate a single bubble that you practically make distinguished asses into gods." - Martin Luther`,
        `"You seem to be wrangling about goat's wool, like the man who watched the play in an empty theater." - Martin Luther`,
        `"sigmoid, sigmoid, on the wall, which neuron is the most activated of them all?" - Gabriel Tsui`,
        `"Placeholder Quote, I don't know, just put something there" - Eamon Kerr`,
        `"We should put in Church History quotes, that would be funny probably" - Gabriel Tsui`,
        `"quick say something brainrotted" - Gabriel Tsui`
        `"Why so sigma? HEHEHEHEHEHEHEH" - James Sanmartin`
        `"I boil my friends slowly" - Eamon Kerr`
    ]
    /** 
    var quotesWithSpeaker = [
        ["We are cooked", "St Paisios"],
        ["Sin is stored in the balls", "St Augustine"],
        ["Every letter of yours breathes Moabitish pride. So much can a single bull inflate a single bubble that you practically make distinguished asses into gods.", "Martin Luther"],
        ["You seem to be wrangling about goat's wool, like the man who watched the play in an empty theater.", "Martin Luther"],
        ["sigmoid, sigmoid, on the wall, which neuron is the most activated of them all?", "Gabriel Tsui"]
    ] //unused for now
    */
    var blockquote = document.querySelector("blockquote");

    index++;
    if (index>quotes.length-1){
        index=0
    }
    blockquote.innerHTML = quotes[index]
}
