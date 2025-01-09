// Initialize EmailJS
emailjs.init("7toFjtifzeq3hAHjr"); // Public Key Anda

document.getElementById("sos-button").addEventListener("click", async () => {
    // Data default untuk email
    const emailTemplateParams = {
        subject: "HELP! I'm in Danger!!!!", // Subjek email
        message: "Tolong segera bantu! Lokasi tidak tersedia.", // Pesan default
    };

    // Geolocation untuk mendapatkan lokasi terkini
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const accuracy = position.coords.accuracy; // Akurasi lokasi (dalam meter)
                const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
                emailTemplateParams.message = `Tolong segera bantu! Lokasi terakhir: ${googleMapsLink}\nAkurasi: ${accuracy} meter.`; // Tambahkan lokasi ke pesan

                // Kirim email melalui EmailJS
                try {
                    const response = await emailjs.send(
                        "service_jphlpjw", // Ganti dengan Service ID Anda
                        "template_t916apk", // Ganti dengan Template ID Anda
                        emailTemplateParams
                    );
                    console.log("Email dikirim:", response);
                    alert("Email SOS berhasil dikirim dengan lokasi terkini!");
                } catch (error) {
                    console.error("Error mengirim email:", error);
                    alert("Gagal mengirim email SOS. Periksa konfigurasi EmailJS Anda.");
                }
            },
            (error) => {
                console.error("Geolocation error:", error.message);
                alert("Tidak dapat mengakses lokasi: " + error.message);
            },
            {
                enableHighAccuracy: true, // Minta akurasi tinggi
                timeout: 10000, // Maksimal waktu tunggu 10 detik
                maximumAge: 0, // Tidak gunakan cache
            }
        );
    } else {
        alert("Geolocation tidak didukung oleh browser ini.");
    }
});
