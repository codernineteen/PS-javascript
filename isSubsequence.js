var isSubsequence = function(s, t) {
    let lastIndex = 0;
    let isMatched = false;
    for(char of s) {
        let matchCount = 0;
        
        for(let i=lastIndex; i < t.length; i++) {

            if(char === t[i]) {
                lastIndex = i+1;
                isMatched = true;
                matchCount++;
                break;
            }
            
        }
        
        if(matchCount === 0) {
            isMatched = false;
            return isMatched;
        }
    }
    return isMatched;
};

console.log(isSubsequence("axc", "ahbgdc"));