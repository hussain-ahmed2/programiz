function checkRepeat(sentence) {
    const words = sentence.split(' ');
    let i = 0, length = words.length, obj = {};
    
    while(i < length) {
        if (obj[words[i]]) return "Repeat";
        obj[words[i]] = words[i];
        i++;
    }
    return "No repeat";
}
