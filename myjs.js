
// animation slide
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            if (entry.target.classList[0] == "title-home" || entry.target.classList[0] == "home-text" || entry.target.classList[0] == "box-home-arrow") {
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






// Projet
// Slider défilement horizontale
const container = document.querySelector('.container-projet-mobile');
const indicators = document.querySelectorAll('.indicator');

// Fonction pour mettre à jour les indicateurs en fonction de la position de défilement
function updateIndicators() {
    const scrollLeft = container.scrollLeft;
    const sectionWidth = container.offsetWidth;
    const currentIndex = Math.round(scrollLeft / sectionWidth);

    // Met à jour chaque indicateur
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

// Écoute l'événement de défilement pour mettre à jour les indicateurs
container.addEventListener('scroll', updateIndicators);

// Initialiser les indicateurs au chargement de la page
updateIndicators();
// Projet






document.querySelectorAll('.profil-strong').forEach(element => {
    const randomDelay = Math.random() * 3; // Génère un délai aléatoire entre 0 et 3 secondes
    element.style.animationDelay = `${randomDelay}s`;
});





document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Ce mode est nécessaire pour envoyer des données à Google Forms
        });

        // Affiche un message de succès (Google Forms ne renverra pas de réponse avec no-cors)
        location.reload();
    } catch (error) {
        // Affiche un message d'erreur
        document.getElementById('status').innerHTML = 'Une erreur est survenue lors de l\'envoi du message.';
    }
});