function reverseWord(stri) {
  let str = stri.split("");
  let firstPointer = 0;
  let lastPointer = str.length - 1;
  let temp = "";

  while (firstPointer <= lastPointer) {
    temp = str[firstPointer];
    str[firstPointer] = str[lastPointer];
    str[lastPointer] = temp;
    // console.log(str[firstPointer]);
    // console.log(str[lastPointer]);
    firstPointer++;
    lastPointer--;
  }
  joinedList = str.join("");

  console.log(`Reversed String is `, joinedList);
}

