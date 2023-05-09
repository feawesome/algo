/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = [...new Set(nums)];
  const map = new Map();
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        map.set(nums[i] + nums[j], [nums[i], nums[j]]);
      }
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const val = map.get(-nums[i]);

    if (val !== undefined) {
      console.log(val);
      res.push([...val, nums[i]]);
    }
  }

  console.log(map);
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -1, 0, -4]));
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function (s) {
//   let arr = []
//   let max = 0

//   for (let i = 0;i < s.length;i ++) {
//     let index = arr.indexOf(s[i])
//     if (index !== -1) {
//       arr.splice(0, index + 1)
//     }
//     arr.push(s[i])

//     max = Math.max(arr.length, max)
//   }

//   return max;
// };

// console.log(lengthOfLongestSubstring("ar"));

// let removeDuplicates = function(nums) {
//   let len = nums.length;
//   if (len === 0) {
//       return 0
//   }
//   let i = 0
//   for (let j=1; j < len; j++) {
//       if (nums[j] !== nums[i]) {
//           i++;
//           console.log(i,j);
//           nums[i] = nums[j]
//       }
//   }
//   return i + 1;
// }

// console.log(removeDuplicates([1,2,2,3,4,5]));
// // 对称二叉树

// const symmetricalTree = {
//   val: 8,
//   left: {
//     val: 6,
//     left: { val: 5, left: null, right: null },
//     right: { val: 7, left: null, right: null }
//   },
//   right: {
//     val: 6,
//     left: { val: 7, left: null, right: null },
//     right: { val: 5, left: null, right: null }
//   }
// }

// function isSymmetricalTree (node1, node2) {
//   if ((!node1 && !node2)) return true
//   if (!node1 || !node2) return false
//   if (node1.val !== node2.val) return false
//   return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left)
// }

// a = isSymmetricalTree(symmetricalTree.left, symmetricalTree.right)
// console.log(a);

// a = {
//   "value": "1",
//   "next": {
//     "value": "2",
//     "next": {
//       "value": "3",
//       "next": {
//         "value": "4",
//         "next": null
//       }
//     }
//   }
// }

// b = {
//   "value": "5",
//   "next": {
//     "value": "6",
//     "next": {
//       "value": "7",
//       "next": {
//         "value": "8",
//         "next": null
//       }
//     }
//   }
// }

// function asd() {
//   let count = 1
//   let currentA = a
//   let currentB = b

//   let finalA = null
//   let finalB = null

//   while (currentA && currentA.value) {
//     [currentA.next, currentB.next] = [currentB.next, currentA.next]
//     count++
//     if (!finalA) {
//       finalA = currentA
//     }
//     if (!finalB) {
//       finalB = currentB
//     }
//     currentA = currentA.next
//     currentB = currentB.next
//   }
//   console.log(finalA,'finalA');
//   console.log(finalB,'finalB');
// }
// asd()

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const ll1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 9,
      next: null,
    },
  },
};

const ll2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: {
        val: 9,
        next: null,
      },
    },
  },
};

var addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let node3 = new ListNode();
  let node4 = node3;

  while ((node1 && "val" in node1) || (node2 && "val" in node2)) {
    let sum = ((node1 && node1.val) || 0) + ((node2 && node2.val) || 0);
    // let sum = node1.val + node2.val
    console.log(sum);
    let next = null;
    if ((node1 && node1.next) || (node2 && node2.next)) {
      next = new ListNode();
    }

    if (sum >= 10) {
      node4.val = sum - 10;
      node4.next = next;

      if (node1 && node1.next) {
        node1.next.val = node1.next.val + 1;
      } else if (node2 && node2.next) {
        node2.next.val = node2.next.val + 1;
      } else {
        (node1 || node2).next = new ListNode(1);
        node4.next = new ListNode();
      }
    } else {
      node4.val = sum;
      node4.next = next;
    }
    node4 = node4.next;
    if (node1) node1 = node1.next;
    if (node2) node2 = node2.next;
    // console.log(node1);
    // debugger
  }
  return node3;
};

// console.log(addTwoNumbers(ll1, ll2));
