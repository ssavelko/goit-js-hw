const findLongestWord = function(string) {
  
  // let word = string.split(' ');
  // let longestWord = 0;
  //  for (let i = 0; i < word.length; i++) {
  //    if (word[i].length > longestWord) {
  //      longestWord = word[i].length;
  //    }
  //  }
  //  return longestWord;
  // }

  const words = string.split(' ')
  let maxWordsLength = '';

  for (const word of words) {
    if (word.length > maxWordsLength.length) {
      maxWordsLength = word
    }
  }
  return maxWordsLength
}



  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'