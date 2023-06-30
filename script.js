const nouns = [
    "field", "machine", "relation",
    "blade", "ink", "circle", 
    "sleep", "mice", "son", 
    "quiver", "border", "furniture", 
    "page", "north", "event", 
    "start", "berry", "servant", 
    "sea", "gate", "suit", 
    "test", "butter", "birthday", 
    "sheep"
];
const adjectives = [    
    "tastier", "sharper", "more awesome", 
    "less elastic", "browner", "more unequal", 
    "more debonair"
];

const randAdj = () => {
    const adjIndex = Math.floor(Math.random() * adjectives.length);
    return adjectives[adjIndex];
};

const randNoun = () => {
    const nounIndex = Math.floor(Math.random() * nouns.length);
    return nouns[nounIndex];
};

const randNum = num => Math.floor(Math.random() * num);

const quoteBuilder = () => {
    const noun1 = randNoun();
    const noun2 = randNoun();
    const adj1 = randAdj();
    const num1 = randNum(70);
    const num2 = randNum(800);
    return `The only thing ${adj1} than ${num1} ${noun1}, is ${num2} ${noun2}!`;
}

console.log(quoteBuilder());