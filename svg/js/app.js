// alert banner
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have unread messages</p>
<p class="alert-banner-close"><strong> x </strong></p>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
});

// messaging widget

const user = document.getElementById("search");
const message = document.getElementById("message");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });