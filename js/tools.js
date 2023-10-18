export const sentencize = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)+'.';
}

export const repleceAll = (text, search, replacement) => {
    return text.split(search).join (replacement);
}