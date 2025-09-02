function checkAnnagram(str1, str2) {
    let freq1 = {};
    if (str1.length !== str2.length) return false

    for (c of str1) {

        freq1[c] = (freq1[c] || 0) + 1


    }
    for (c of str2) {
        if (!freq1[c]) {
            return false
        }
        freq1[c]--
    }

    return true
}

// console.log(checkAnnagram("listen", "silent")); // true
// console.log(checkAnnagram("aacc", "ccac"));     // false
// console.log(checkAnnagram("amit", "tima"));     // true



function groupAnagrams(words) {
  let map = {}; // Group banane ke liye

  for (let word of words) {
    let sorted = word.split('').sort().join(''); // Step 1: sort letters

    if (!map[sorted]) {
      map[sorted] = []; // agar group nahi bana to banao
    }
    map[sorted].push(word); // Step 2: group me word daalo
  }

  return Object.values(map); // har group ko array me return karo
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
