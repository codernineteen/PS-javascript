//This initial algorithm couldn't detect duplications in cases
function findAnagramsOne(s: string, p: string): number[] {
  const anagramMap: any = {};
  for (const c of p) {
    anagramMap[c] = 1;
  }

  const result: number[] = [];

  for (let i = 0; i < s.length; i++) {
    let isAnagram = true;
    for (let j = i; j < i + p.length; j++) {
      if (!anagramMap[s[j]]) {
        break;
      } else {
        anagramMap[s[j]] += 1;
      }
    }

    const anagramMapShouldBe = anagramMap[0];
    console.log(anagramMap);
    for (const key in anagramMap) {
      if (anagramMap[key] !== anagramMapShouldBe) {
        isAnagram = false;
      }
      anagramMap[key] = 1;
    }
    console.log(anagramMap);
    console.log("\n");

    if (isAnagram === true) {
      result.push(i);
    }
  }

  return result;
}

//This algorithm was right, but time exceeded..
function findAnagramsTwo(s: string, p: string) {
  const charMap: { [key: string]: number } = {};
  for (const c of p) {
    if (charMap[c]) {
      charMap[c] += 1;
    } else {
      charMap[c] = 1;
    }
  }

  const resultIndices = [];
  for (let i = 0; i < s.length; i++) {
    const tempSMap: { [key: string]: number } = {};
    for (let j = i; j < i + p.length; j++) {
      if (tempSMap[s[j]]) {
        tempSMap[s[j]] += 1;
      } else {
        tempSMap[s[j]] = 1;
      }
    }

    let isAnagram = true;
    for (const key in tempSMap) {
      if (!charMap[key]) {
        isAnagram = false;
        break;
      }
      if (tempSMap[key] !== charMap[key]) {
        isAnagram = false;
        break;
      }
    }

    if (isAnagram === true) {
      resultIndices.push(i);
    }
  }

  return resultIndices;
}
