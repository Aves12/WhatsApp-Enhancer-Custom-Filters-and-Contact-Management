function applyFilter(filterType) {
  // interact with WhatsApp web interface to apply filter
  //...
}

function getContactDetails(contactId) {
  // interact with WhatsApp web interface to get contact details
  //...
  const contactDetails = {
    name: "",
    phone: "",
    notes: ""
  };
  // send contact details to popup
  chrome.runtime.sendMessage({ action: "contactDetails", contactDetails });
}

// listen for messages from popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "applyFilter") {
    applyFilter(request.filterType);
  } else if (request.action === "getContactDetails") {
    getContactDetails(request.contactId);
  }
});
