
// animation slide
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            if (entry.target.classList[0] == "title-home" || entry.target.classList[0] == "home-text") {
                entry.target.classList.add("blur-base-show");
            }

            if (entry.target.classList[0] == "bloc-photo" || entry.target.classList[0] == "bloc-text") {
                entry.target.classList.add("scale-base-show");
            }

            if (entry.target.classList[1] == "ligne-top") {
                entry.target.classList.add("slide-up-top-show");
            }

            if (entry.target.classList[1] == "ligne-mid") {
                entry.target.classList.add("slide-up-mid-show");
            }

            if (entry.target.classList[1] == "ligne-bot") {
                entry.target.classList.add("slide-up-bot-show");
            }

            if (entry.target.classList[0] == "ligne-skill") {
                entry.target.classList.add("slide-up-skill-show");
            }
        }
        else {
            entry.target.classList.remove("blur-base-show");
            entry.target.classList.remove("scale-base-show");
            entry.target.classList.remove("slide-up-top-show");
            entry.target.classList.remove("slide-up-mid-show");
            entry.target.classList.remove("slide-up-bot-show");
            entry.target.classList.remove("slide-up-skill-show");
        }
    });
});

const hiddenElements = document.querySelectorAll('.animation');
hiddenElements.forEach((el) => observer.observe(el));
// animation slide




// Navbar
// Place une barre animé "nav-anime-active" sous le menu survolé
{
    var obs = new IntersectionObserver((entries) => {



        entries.forEach(element => {

            var navElement = document.querySelector('#nav-' + element.target.id)
            var mobileElement = document.querySelector('#mobile-' + element.target.id)
            var mobileDotElement = document.querySelector('#dot-' + element.target.id)

            if (element.isIntersecting === true) {

                navElement.classList.add("nav-anime-active")
                mobileElement.classList.add("mobile-link-active")
                mobileDotElement.classList.add("mobile-dot-active")

            }
            else {

                navElement.classList.remove("nav-anime-active")
                mobileElement.classList.remove("mobile-link-active")
                mobileDotElement.classList.remove("mobile-dot-active")

            }


        });



    }, { threshold: [1] });

    const take = document.querySelectorAll('section');

    take.forEach((el) => obs.observe(el));
}
// Navbar





// Formulaire
// Empeche l'envoi du formulaire
function envoieForm (event) {

    event.preventDefault();

    window.location.href = "https://tonyfalcondevweb.github.io/";

    var formulaire = document.getElementById("contact-form");

    formulaire.action = "https://docs.google.com/forms/d/e/1FAIpQLSexnoYaw9dDUIex-fKJozX_-sqIN50WmAWBKEDl8Ms2Usge7g/formResponse";
    var formData = new FormData(formulaire);



    fetch(formulaire.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Mode no-cors car Google Forms n'autorise pas les requêtes cross-origin
    }).then(response => {
        // Redirection apres submit
        window.location.href = "https://tonyfalcondevweb.github.io/";
    }).catch(error => {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
    });
}
// Formulaire