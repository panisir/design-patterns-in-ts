
// PrepareInterview Preparation KitString ManipulationStrings: Making Anagrams

function makeAnagram(a: string, b: string): number {
    // Write your code here
    let arrA = a.split("");
    let arrB = b.split("");
    let setA = new Set(arrA);
    let setB = new Set(arrB);
    let letterFreqA: Map<string, number> = findLetterFrequencyMap(arrA);
    let letterFreqB: Map<string, number> = findLetterFrequencyMap(arrB);
    let deletionSum: number = 0;
  
    let sameLetters: Set<string> = new Set();
    let differentLetters: Set<string> = new Set();
    for (let letter of arrA) {
      if (setB.has(letter)) {
        sameLetters.add(letter);
      } else {
        differentLetters.add(letter);
      }
    }
  
    for (let letter of arrB) {
      if (setA.has(letter)) {
        if (!sameLetters.has(letter)) {
          sameLetters.add(letter);
        }
      } else {
        if (!differentLetters.has(letter)) {
          differentLetters.add(letter);
        }
      }
    }
  
    const dArr = Array.from(differentLetters);
    for (let dLetter of dArr) {
      if(letterFreqA.get(dLetter)){
        deletionSum = deletionSum + letterFreqA.get(dLetter);
      }
  
      if(letterFreqB.get(dLetter)){
        deletionSum = deletionSum + letterFreqB.get(dLetter);
      }
    }
  
    const sArr = Array.from(sameLetters);
    for (let sLetter of sArr) {
      let abs = Math.abs(letterFreqA.get(sLetter) - letterFreqB.get(sLetter));
      deletionSum = deletionSum + abs;
    }
  
    return deletionSum;
  }
  
  function findLetterFrequencyMap(arr: string[]): Map<string, number> {
    let freqMap: Map<string, number> = new Map();
    for (let letter of arr) {
      if (freqMap.has(letter) && typeof freqMap.get(letter) === "number") {
        freqMap.set(letter, freqMap.get(letter) + 1);
      } else {
        freqMap.set(letter, 1);
      }
    }
    return freqMap;
  }
  
  console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke"));
  