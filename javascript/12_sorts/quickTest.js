// function quickSort(arr) {

//   if (arr.length <= 1) return arr;
//   let left = []
//   let right = []

//   let baseIndex = parseInt(arr.length / 2)
//   let base = arr.splice(baseIndex, 1)[0]

//   for (let i = 0;i < arr.length;i ++) {
//     if (arr[i] < base) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   const rightArr = quickSort(right)
//   const leftArr = quickSort(left)
//   console.log(leftArr, base, rightArr, 'arr');
//   let ddd = leftArr.concat([base], rightArr)
//   console.log(ddd, 'ddd');
//   return ddd
// }



// function quickSort(arr) {
//   if (arr.length <= 1) return arr
//   let left = []
//   let right = []
//   let baseIndex = parseInt(arr.length / 2)
//   let base = arr.splice(baseIndex, 1)[0] 

//   for (let i = 0;i < arr.length;i ++) {
//     if (arr[i] < base) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat([base], quickSort(right))
// }

function quickSort(arr) {
  if (arr.length <= 1) return arr
  let left = []
  let right = []
  let baseIndex = parseInt(arr.length / 2)
  let base = arr.splice(baseIndex, 1)[0]

  for (let i = 0;i < arr.length;i ++) {
    if (arr[i] < base) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([base], quickSort(right))
}

console.log(quickSort([2,31,1,3,5,6,8,4]));
