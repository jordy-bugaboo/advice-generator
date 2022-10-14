const JS_DICE_HOOK = '.js-hook-dice';
const DICE = document.querySelector(JS_DICE_HOOK);
const ENDPOINT = 'https://api.adviceslip.com/advice';

const init = () => {
    const fetchQuotes = async () => {
        const response = await fetch(ENDPOINT)
        return response;
    }
    
    const handlError= (err) => {
        console.log(err);
        throw new Error ('Error in data handling');
    }
    
    fetchQuotes().then(response => {
        const quotes =  response.json();
        return quotes;
    }).then (data => {
        const quoteId = document.querySelector('.quotesId');
        const quote = document.querySelector('.quotes');
        quote.textContent = `"${data.slip.advice}"`;
        quoteId.textContent = `ADVICE # ${data.slip.id}`;
    }).catch (handlError);
}

init();

DICE.addEventListener('click', () => {
    init();
})