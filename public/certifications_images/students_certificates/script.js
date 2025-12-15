// Get the certificate ID from URL
const urlParams = new URLSearchParams(window.location.search);
const certificateId = urlParams.get("certificate_id");

const verifyForm = document.getElementById("verify-form");
const certificateImage = document.getElementById("certificateImage");
const certificateBelowContent = document.getElementById("below-content");
const errorMessage = document.getElementById("errorMessage");

if (certificateId) {
  // Changed .png to .webp
  certificateImage.src = `${certificateId}.webp`;
  certificateImage.alt = `Certificate for ID: ${certificateId}`;

  certificateImage.onload = () => {
    certificateImage.style.display = "inline-block";
    certificateBelowContent.style.display = "block";
    errorMessage.style.display = "none";
  };

  certificateImage.onerror = () => {
    certificateImage.style.display = "none";
    errorMessage.style.display = "block";
  };
} else {
  // To display Missing message
  // errorMessage.style.display = 'block';
  // errorMessage.textContent = "Certificate ID is missing.";
  verifyForm.style.display = "block";
}

// Submission Handling
function handleFormSubmit(e) {
  e.preventDefault();
  const certificateInput = document.getElementById("certificateInput");
  let certificateInputId = certificateInput.value.trim();
  certificateInputId = certificateInputId
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
  if (certificateInputId) {
    window.location.href = `https://validate.cinutedigital.com/?certificate_id=${certificateInputId}`;
  }
}