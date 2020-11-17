let quote = Array(
    {
        'quote': 'Better to remain silent and be thought a fool than to speak out and remove all doubt.',
        'author': 'Abraham Lincoln'
    },
    {
        'quote': 'The difference between stupidity and genius is that genius has its limits',
        'author': 'Albert Einstein'
    },
    {
        'quote': 'The average dog is a nicer person than the average person.',
        'author': 'Andy Rooney'
    },
    {
        'quote': 'Trouble knocked at the door, but, hearing laughter, hurried away.',
        'author': 'Benjamin Franklin'
    },
    {
        'quote': 'Facebook just sounds like a drag, in my day seeing pictures of peoples vacations was considered a punishment.',
        'author': 'Betty White'
    }
);
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
function newQuote () {
    let randomQuote = Math.floor(Math.random() * 5);
    console.log(randomQuote);
 quoteText.innerHTML = quote[randomQuote].quote;
 authorText.innerHTML = quote[randomQuote].author;
}
