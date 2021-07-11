// alert banner
const alertBanner = document.getElementById("alert");
alertBanner.innerHTML =
`<div class="alert-banner">
<p class="alert"><strong>Alert: </strong>&nbsp;You have unread messages</p>
<p class="alert-banner-close">X</p>
</div>`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
});

// messaging widget ensure user and message fields are filled out

const user = document.getElementById("search");
const message = document.getElementById("message");
const send = document.getElementById("send");

send.addEventListener('click', () => {
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