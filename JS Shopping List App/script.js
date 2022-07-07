// Variables
const alert = document.querySelector('.status');
const form  = document.querySelector('.form-control');
const groceryItem = document.getElementById('grocery-item');
const submitBtn = document.querySelector('.submit-btn');
const list = document.querySelector('.grocery-list');
const groceryListItem = document.querySelector('.grocery-list-items');

// Event Listener to add item
form.addEventListener('submit', addItems);

// Function
function addItems(e) {
    e.preventDefault();
    const value = groceryItem.value;
    if (value !== '' && value.length <= 13) {
        list.style.visibility = 'visible';
        groceryListItem.innerHTML += `
        <li>
            <h4>${value}</h4>
            <div class="btn-container">
                <button id="del" class="fas fa-trash"></button>
            </div>
        </li>`;

        // Display the customised alert
        displayAlert('value succesfully added', 'green');
        setDefaults();
    }
    else if (value.length > 15) {
        displayAlert('Please enter only 13 character word', 'red');
    }
    else if (value === '') {
        displayAlert('Please enter value', 'red');
    }
}

function displayAlert(text, action) {
    alert.style.visibility = 'visible';
    alert.textContent = text;
    alert.classList.add(`status-${action}`);

    // Remove Alert
    setTimeout(function() {
        alert.textContent = '';
        alert.classList.remove(`status-${action}`)
    }, 1000);
}

// Count the character to check
function countChar() {
    document.querySelector('.count').textContent = groceryItem.value.length;

    if (groceryItem.value > 15) {
        displayAlert('Enter only 13 characters word', 'red');

        // Change color to red
        document.querySelector('.character').style.color = 'red';
    }
    else if (groceryItem.value < 13) {
        document.querySelector('.character').style.color = 'green';
    }
}

// Event Listener to check count on input
groceryItem.addEventListener('input', countChar);

// Set to default
function setDefaults() {
    groceryItem.value = '';
    document.querySelector('.count').textContent = 0;
    document.querySelector('.character').style.color = 'black';
}

// Delete item
function deleteItem(e) {
    if (e.target.id === 'del') {
        e.target.parentElement.parentElement.remove();
        displayAlert('Item succesufully removed', 'red');
    }
}

// Event Listener to delete the items
groceryListItem.addEventListener('click', deleteItem);