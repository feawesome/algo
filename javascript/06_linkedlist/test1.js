a = {
  "value": "1",
  "next": {
    "value": "2",
    "next": {
      "value": "3",
      "next": {
        "value": "4",
        "next": null
      }
    }
  }
}

b = {
  "value": "5",
  "next": {
    "value": "6",
    "next": {
      "value": "7",
      "next": {
        "value": "8",
        "next": null
      }
    }
  }
}

function asd() {
  let count = 1
  let currentA = a
  let currentB = b

  let finalA = null
  let finalB = null

  while (currentA && currentA.value) {
    [currentA.next, currentB.next] = [currentB.next, currentA.next]
    count++
    if (!finalA) {
      finalA = currentA
    }
    if (!finalB) {
      finalB = currentB
    }
    currentA = currentA.next
    currentB = currentB.next
  }
  console.log(finalA,'finalA');
  console.log(finalB,'finalB');
}
asd()