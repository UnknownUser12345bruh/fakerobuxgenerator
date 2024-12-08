let robux = 0;
let amountSpent = 0;

document.getElementById("generateButton").addEventListener("click", function() {
  // Generate 1000 Robux
  robux += 1000;

  // Update Robux count
  document.getElementById("robuxCount").textContent = `You have ${robux} Robux`;

  // Show message
  const message = document.getElementById("message");
  message.textContent = "You've Earned 1000 Robux!";
  message.style.color = "green";
});

// Handle store item purchase
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', function() {
    const itemName = this.getAttribute('data-item');
    const itemCost = parseInt(this.getAttribute('data-cost'));
    
    if (robux >= itemCost) {
      // Subtract Robux and show success message
      robux -= itemCost;
      amountSpent += itemCost;
      
      document.getElementById("robuxCount").textContent = `You have ${robux} Robux`;
      document.getElementById("amountSpent").textContent = amountSpent;
      document.getElementById("remainingRobux").textContent = robux;

      const purchaseMessage = document.getElementById("purchaseMessage");
      purchaseMessage.textContent = `You’ve successfully bought the ${itemName}!`;
      purchaseMessage.style.color = "green";
    } else {
      // Not enough Robux
      const purchaseMessage = document.getElementById("purchaseMessage");
      purchaseMessage.textContent = `Not enough Robux to buy ${itemName}.`;
      purchaseMessage.style.color = "red";
    }
  });
});

// Handle iPhone 16 Pro Purchase
document.getElementById("buyIphoneButton").addEventListener("click", function() {
  const iphoneColor = document.getElementById("iphoneColor").value;
  const iphoneStorage = document.getElementById("iphoneStorage").value;
  
  let iphoneCost = 0;

  // Set cost based on storage
  if (iphoneStorage === "128") {
    iphoneCost = 1629;
  } else if (iphoneStorage === "256") {
    iphoneCost = 1809;
  } else if (iphoneStorage === "512") {
    iphoneCost = 2189;
  } else if (iphoneStorage === "1TB") {
    iphoneCost = 2500;
  }

  if (robux >= iphoneCost) {
    // Subtract Robux and show success message
    robux -= iphoneCost;
    amountSpent += iphoneCost;

    document.getElementById("robuxCount").textContent = `You have ${robux} Robux`;
    document.getElementById("amountSpent").textContent = amountSpent;
    document.getElementById("remainingRobux").textContent = robux;

    const iphoneMessage = document.getElementById("iphoneMessage");
    iphoneMessage.textContent = `You’ve successfully bought the iPhone 16 Pro in ${iphoneColor} with ${iphoneStorage} storage!`;
    iphoneMessage.style.color = "green";
  } else {
    // Not enough Robux
    const iphoneMessage = document.getElementById("iphoneMessage");
    iphoneMessage.textContent = "Not enough Robux to buy the iPhone 16 Pro.";
    iphoneMessage.style.color = "red";
  }
});

// Handle donation
document.getElementById("donateButton").addEventListener("click", function() {
  const donationUsername = document.getElementById("donationUsername").value;
  const donationAmount = parseInt(document.getElementById("donationAmount").value);
  
  if (donationUsername && donationAmount > 0) {
    if (robux >= donationAmount) {
      robux -= donationAmount;
      document.getElementById("robuxCount").textContent = `You have ${robux} Robux`;

      const donationMessage = document.getElementById("donationMessage");
      donationMessage.textContent = `Successfully donated ${donationAmount} Robux to ${donationUsername}!`;
      donationMessage.style.color = "green";
    } else {
      const donationMessage = document.getElementById("donationMessage");
      donationMessage.textContent = "Not enough Robux to make the donation.";
      donationMessage.style.color = "red";
    }
  } else {
    const donationMessage = document.getElementById("donationMessage");
    donationMessage.textContent = "Please enter a valid username and donation amount.";
    donationMessage.style.color = "red";
  }
});

// Handle Win Robux
document.getElementById("winRobuxButton").addEventListener("click", function() {
  // Show the Win Robux options
  document.getElementById("winRobuxOptions").style.display = "block";
});

document.getElementById("claimRobux").addEventListener("click", function() {
  const winAmount = parseInt(document.getElementById("winAmount").value);

  // Add the claimed Robux to the balance
  robux += winAmount;

  // Update Robux count
  document.getElementById("robuxCount").textContent = `You have ${robux} Robux`;

  // Hide the Win Robux options
  document.getElementById("winRobuxOptions").style.display = "none";
});
