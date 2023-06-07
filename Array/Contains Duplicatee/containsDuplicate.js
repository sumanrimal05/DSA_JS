function containsDuplicate(num) {
  let sortedNum = num.sort();
  let firstPointer = 0;
  let secondPointer = firstPointer + 1;

  for (let i = 0; i < sortedNum.length; i++) {
    if (sortedNum[i] == sortedNum[i + 1]) {
      return true;
    }
  }
  return false;
}

// containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
console.log(containsDuplicate([1, 2, 3, 1]));
