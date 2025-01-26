document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("qr-input");
    const button = document.getElementById("qr-button");
    const qr = document.getElementById("qr-image");
    const image_container = document.getElementsByClassName("image-container")[0];
    const generate_message = document.getElementsByClassName("generate-message")[0];
    const qr_text = document.getElementById("qr-text");
    
    function generateQRCode(){
        if(input.value !== ""){
            qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
            image_container.style.display = "block";

            setTimeout(() => {
                qr.style.opacity = 1;
            }, 20);

            generate_message.style.display = "block";
            qr_text.innerText = input.value;
            qr_text.style.display = "block";

            input.value = "";
        }else{
            input.classList.add("shake");
            setTimeout(() => {
                input.classList.remove("shake");
            }, 500);
        }
    }

    button.addEventListener("click", () => {
        generateQRCode();
    });

    input.addEventListener("keypress", (event) => {
        if(event.key === "Enter"){
            generateQRCode();
        }
    });

});