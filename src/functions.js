import wordSets from "./wordSets";

export function createArrayOfWordSet(language) {
    return wordSets[language].split(' ');
}

export function pickRandomWord(words) {
    const random = Math.floor(Math.random() * words.length);
    return words[random];
}
