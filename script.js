// Initialize an empty array
let itemsArray = [];

// Function to add an item to the array
function addItem() {
    const inputField = document.getElementById("itemInput");
    const value = inputField.value;

    if (value !== "") {
        itemsArray.push(value); // Add the value to the array
        inputField.value = ""; // Clear the input field
        alert("Item added to the array!");
    } else {
        alert("Please enter a value before adding!");
    }
}

// Function to display the items in the array
function displayItems() {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; // Clear any previous output

    if (itemsArray.length === 0) {
        outputDiv.innerHTML = "The array is empty.";
        return;
    }

    itemsArray.forEach((item, index) => {
        const element = document.createElement("p");
        element.textContent = `Element ${index + 1} = ${item}`;
        outputDiv.appendChild(element);
    });
}
