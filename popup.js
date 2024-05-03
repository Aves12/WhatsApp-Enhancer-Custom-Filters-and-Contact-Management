document.addEventListener("DOMContentLoaded", function () {
  const filterContainer = document.getElementById("filter-container");
  const contactDetailsContainer = document.getElementById("contact-details-container");

  // add event listeners to filter buttons
  filterContainer.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const filterType = event.target.id;
      // call content script to apply filter
      chrome.runtime.sendMessage({ action: "applyFilter", filterType });
    }
  });

  // add event listener to custom filters button
  document.getElementById("custom-filters-btn").addEventListener("click", function () {
    // display custom filters UI
  });

  // listen for messages from content script
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "contactDetails") {
      // display contact details in popup
      const contactDetails = request.contactDetails;
      contactDetailsContainer.innerHTML = `
        <h2>${contactDetails.name}</h2>
        <p>${contactDetails.phone}</p>
        <p>${contactDetails.notes}</p>
      `;
    }
  });
});
