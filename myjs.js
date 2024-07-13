
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
        else{
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
var obs = new IntersectionObserver((entries) => {

    

    entries.forEach(element => {

        var navElement = document.querySelector('#nav-'+element.target.id)

	if(element.isIntersecting === true){
         
        navElement.classList.add("nav-anime-active")
    }
    else{

        navElement.classList.remove("nav-anime-active")
    }

        
    });



}, { threshold: [1] });

const take = document.querySelectorAll('section');

take.forEach((el) => obs.observe(el));
// Navbar























// const obs = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       const square = entry.target.querySelector('.square');
  
//       if (entry.isIntersecting) {
//         comp.classList.add('square-animation');
//         return; // if we added the class, exit the function
//       }
  
//       // We're not intersecting, so remove the class!
//       comp.classList.remove('square-animation');
//     });
//   });
//   const comp = document.querySelector('.competences')
//   obs.observe(comp);





