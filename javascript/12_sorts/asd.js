// 最大子序列和
const nums = [-2,1,-3,4,-1,2,1,-5,4]

function slotion(arr) {
  let pre = 0
  let maxAns = nums[0];
  arr.forEach(item => {
    pre = Math.max(pre + item, pre)
    maxAns = Math.max(pre, maxAns)
  })
  return maxAns
}

// // 树id 路径
// let catalog = [
//   {
//     id: 1001,
//     children: [
//       {
//         id: 100101,
//         children: [
//           {
//             id: 10010101,
//             children: [
//               {
//                 id: 111,
//                 children: [
//                   {
//                     id: 222,
//                     children: [
//                       { id: 333, children: [] },
//                       { id: 444, children: [] },
//                     ],
//                   },
//                   {
//                     id: 555,
//                     children: [
//                       { id: 777, children: [] },
//                       { id: 6666, children: [] },
//                       { id: 888, children: [] },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//           { id: 10010102, children: [] },
//         ],
//       },
//       {
//         id: 100102,
//         children: [
//           { id: 10010201, children: [] },
//           { id: 10010202, children: [] },
//           { id: 10010203, children: [] },
//         ],
//       },
//     ],
//   },
// ];

// function getPath(data, id, pathArr) {
//   if (!pathArr) {
//     pathArr = [];
//   }

//   for (let i = 0; i < data.length; i++) {
//     const tempArr = [...pathArr];
//     // console.log(tempArr);
//     tempArr.push(data[i].id);

//     if (data[i].id === id) {
//       console.log(222222, pathArr);
//       return pathArr;
//     }
//     if (data[i].children) {
//       const asd = getPath(data[i].children, id, tempArr);
//       if (asd) {
//         console.log(111);
//         return asd;
//       }
//     }
//   }
// }

// console.log(getPath(catalog, 10010201));
