const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const prenom = document.getElementById("prenom").value.trim();
  const evenement = document.getElementById("evenement");
  const nomEvenement =
    evenement.options[evenement.selectedIndex].text;

  message.textContent =
    `Merci ${prenom} ! Votre formulaire pour "${nomEvenement}" ` +
    `a été validé (démonstration, aucune donnée enregistrée).`;

  form.reset();
});
