function checkMagazine(magazine: string[], note: string[]): void {
    // Write your code here
    let answer: string = 'No';
    let magazineSet: Set<string> = new Set(magazine);
    let magazineFreq : Map<string, number> = findWordFrequencyMap(magazine);
    let noteFreq : Map<string, number> = findWordFrequencyMap(note);
    
    for (let noteWord of note) {
        if (magazineSet.has(noteWord)) {
            if (noteFreq.get(noteWord) > magazineFreq.get(noteWord)) {
                answer = 'No';
                break;
            } else {
                answer = 'Yes';
            }
        } else {
            answer = 'No';
            break;
        }
    }
    console.log(answer);
  }
  
  function findWordFrequencyMap(arr: string[]): Map<string, number> {
  let freqMap: Map<string, number> = new Map();
  for (let arrWord of arr) {
    if (freqMap.has(arrWord) && typeof freqMap.get(arrWord) === "number") {
      freqMap.set(arrWord, freqMap.get(arrWord) + 1);
    } else {
      freqMap.set(arrWord, 1);
    }
  }
  return freqMap;
  }
  