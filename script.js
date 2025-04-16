// Initialize the QR code generation library
const generateBtn = document.getElementById('generate-btn');
const saveBtn = document.getElementById('save-btn');
const qrResult = document.getElementById('qr-result');
const qrInput = document.getElementById('qr-input');

// Function to generate QR code
generateBtn.addEventListener('click', () => {
    const inputValue = qrInput.value;

    if (inputValue.trim() !== "") {
        // Clear previous QR code if any
        qrResult.innerHTML = '';

        // Generate QR Code and display it
        const qrCode = document.createElement('img');
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputValue)}&size=200x200`;
        qrResult.appendChild(qrCode);
    } else {
        alert("Please enter some text or a link.");
    }
});

// Function to save QR code as an image
saveBtn.addEventListener('click', () => {
    const qrCodeImage = qrResult.querySelector('img');

    if (qrCodeImage) {
        const link = document.createElement('a');
        link.href = qrCodeImage.src;
        link.download = 'qrcode.png'; // File name for download
        link.click();
    } else {
        alert("Generate a QR code first.");
    }
});
