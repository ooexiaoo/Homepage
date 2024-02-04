let time = document.getElementById("time");
setInterval(() => {
    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Add leading zeros to minutes and seconds if needed
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    time.innerHTML = `${hours}:${minutes}:${seconds}`;
}, 1000);

// Add these functions for managing the modal
function openModal() {
    document.getElementById('usernameModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('usernameModal').style.display = 'none';
}

function saveUsername() {
    const usernameInput = document.getElementById('usernameInput');
    let username = usernameInput.value.trim();
    
     // Limit the username to 8 characters
     username = username.slice(0, 8);

    if (username !== '') {
        // Save the username to local storage
        localStorage.setItem('username', username);

        // Close the modal
        closeModal();

        // Update the greeting
        updateGreeting(username);
    }
}

// Add this function to update the greeting with the saved username
function updateGreeting(username) {
    const greetingTime = getGreetingTime();
    let imagePath = '';

    if (greetingTime === 'Night') {
        imagePath = '/sleep-menhera-chan.png';
    } else if (greetingTime === 'Morning') {
        imagePath = '/8841-menhera-morning2.png';
    } else if (greetingTime === 'Afternoon') {
        imagePath = '/5271-menhera-chillout.png';
    } else {
        imagePath = '/1370-menhera-tired.png';
    }

    document.getElementById('hello').innerHTML =
        `<b><img src="${imagePath}"/><h2>Good ${greetingTime}, ${username}</h2></b>`;
}


// Modify the existing greeting logic to a separate function
function getGreetingTime() {
    const currentHours = new Date().getHours();

    if (currentHours < 4) {
        return 'Night';
    } else if (currentHours < 12) {
        return 'Morning';
    } else if (currentHours < 17) {
        return 'Afternoon';
    } else {
        return 'Evening';
    }
}

// Check if the username is already saved in local storage
const savedUsername = localStorage.getItem('username');

if (savedUsername) {
    // If the username is already saved, update the greeting
    updateGreeting(savedUsername);
} else {
    // If the username is not saved, open the modal to enter the username
    openModal();
}
