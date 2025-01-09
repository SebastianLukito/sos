document.getElementById("sos-button").addEventListener("click", async () => {
    const phoneNumber = "+6285714398775";
    const message = "Tolong";
    const repeatCount = 30;

    // Spam chat
    for (let i = 0; i < repeatCount; i++) {
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1 second delay
    }

    // Get location and send
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Lokasi terakhir: " + googleMapsLink)}`, "_blank");
        }, () => {
            alert("Tidak dapat mengakses lokasi. Pastikan izin lokasi diaktifkan.");
        });
    } else {
        alert("Geolocation tidak didukung oleh browser ini.");
    }
});
