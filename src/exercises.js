function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }
  if (a[0] ===b[0]) {
     return true;
   }
   else if (a[a.length-1] === b[b.length-1]) {
     return true;
   }
   else {
     return false;
   }
}

function endsMeet(values, n) {
    if (!values || values.length < n || n < 0) {
      return arr;
    }
    for (i = 0; i < n; i++) {
      arr.push(values[i]);
    }
  for (z = values.length - n; z < values.length; z++) {
    arr.push(values[z])
  }
  if (n === 0) {
    arr = values
  }
    return arr
}

function difference(numbers) {
  let difference = 0;
  let large = 0;
  let small = 0;
  let counter = 0;
  if (!numbers || numbers.length <= 0) {
    difference = undefined
    return difference;
  }
  if (numbers.some(isNaN)) {
    return undefined;
    counter = 1
  }
  if (counter != 1) {
    let y = Number.MIN_SAFE_INTEGER
    for (z = 0; z < numbers.length; z++) {
      if (numbers[z] > y) {
        y = numbers[z];
        large = numbers[z];
      }
    }
    if (counter != 1) {
      let v = Number.MAX_SAFE_INTEGER
      for (x = 0; x < numbers.length; x++) {
        if (numbers[x] < v) {
          v = numbers[x];
          small = numbers[x];
        }
      }
      difference = large - small;
      return difference;
    }
  }

function max(number) {
  function max(number) {
    if (!number || number.length < 3 || number.length % 2 == 0) {
      return undefined;
    }
    if (number.some(isNaN)) {
      return undefined;
    }
    let first = number[0]
    let last = number[number.length-1]
    let middle = number[((number.length/2)-1) + 0.5]
    if ((first > last) && (first > middle)) {
      return first;
    }
    else if ((middle > last) && (middle > first)) {
      return middle;
    }
    else if ((last > first) && (last > middle)) {
      return last;
    }
    else {
      return first;
    }
  }

function middle(values) {
  let array = []
   if (!values || values.length < 3 || values.length % 2 == 0) {
     return [];
   }
   let index = (values.length/2)-1 + 0.5
   let two_middle = values[index]
   let one_middle = values[index - 1]
   let three_middle = values[index + 1]
   array.push(one_middle);
   array.push(two_middle);
   array.push(three_middle);
   return array;
 }

 function increasing(numbers) {
   let tmp = numbers;
   if (!tmp || tmp.length < 3) {
     return false;
   }
   if (tmp.some(isNaN)) {
     return false;
   }
   for (i = 0; i < tmp.length; i++) {
     if (tmp[i] % 1 != 0) {
       return false;
     }
   }
   let counter = 0
 let one_last = -1
 for (x = 0; x < tmp.length; x++) {
   if (tmp[x] == one_last + 1) {
     one_last = tmp[x]
     if (tmp[x+1] == one_last + 1) {
       return true
       counter = 1
       break;
     }
     else {
     one_last = -1
   }
     }
   else {
     one_last = tmp[x]
   }
 }
 if (counter == 0) {
   return false;
 }
}


function everywhere(values, x) {
  if (values == undefined || x === undefined) {
     return false;
   } else if (values.length < 1) {
     return false;
   } else if (!values.includes(x)) {
     return false;
   } else {

       for (let y = values.indexOf(x); y < values.length; y++) {
         if (values[y] === values[y + 1] && values[y + 1] !== undefined) {
           return true;
           break;
         } else if (x === 0) {
           return false;
           break;
         } else if (values[y] === values[y + 2] && values[y + 2] !== undefined && values[y + 1] !== values[y]) {
           return true;
           break;
         } else if (values[y] === values[y + 3] && values[y + 3] !== undefined && (values[y + 1] && values[y + 2]) !== values[y + 3]) {
           return true;
           break;
         } else {
           return false;
           break;
         }
       }
   }
}

function consecutive(numbers) {
  if (!numbers || numbers.length < 3) {
         return false;
     }
     let test = false;
     for (let i = 0; i < numbers.length - 2; i++ ) {
         let a = numbers[i];
         let b = numbers[i + 1];
         let c = numbers[i + 2];
         if (Number.isInteger(a) == false || Number.isInteger(b) == false || Number.isInteger(c) == false ) {
             return false;
         }
         if (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
              test = true;
         } else if (a % 2 == 1 && b % 2 == 1 && c % 2 == 1) {
              test = true;
         }

     }
     return test;
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
