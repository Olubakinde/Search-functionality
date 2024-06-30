// script.js

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let middle = Math.floor(start + (end - start) / 2);
        let value = array[middle];

        if (target === value) {
            return middle;
        } else if (target > value) {
            start = middle + 1;
        } else if (target < value) {
            end = middle - 1;
        }
    }

    return -1;
}

function performBinarySearch() {
    let sortedArrayInput = document.getElementById("sortedArrayInput").value.trim();
    let targetInput = parseInt(document.getElementById("targetInput").value.trim());

    if (!sortedArrayInput || isNaN(targetInput)) {
        alert("Please enter a valid sorted array and target number.");
        return;
    }

    let sortedArray = sortedArrayInput.split(",").map(item => parseInt(item.trim()));

    let resultIndex = binarySearch(sortedArray, targetInput);

    if (resultIndex !== -1) {
        document.getElementById("resultText").innerText = `Found ${targetInput} at index ${resultIndex}.`;
    } else {
        document.getElementById("resultText").innerText = `${targetInput} not found in the array.`;
    }
}
