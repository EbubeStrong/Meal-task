function openNav(){
    document.getElementById("sidebar").style.width = '100%'; 
}

function closeNav(){
    document.getElementById("sidebar").style.width = '0%';
}

const filterButton = document.querySelector(".filter_button button")
const filterButtons = document.querySelectorAll(".filter_buttons button")
const filterableCards = document.querySelectorAll(".filterable_cards .card")
const Active = document.querySelector(".active")

// console.log(filterButtons, filterableCards)

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")
    console.log(e.target)

    const filterButton = document.querySelector(".filter_button button")

    filterableCards.forEach(card => {
        card.classList.add("hide")

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide")
            card.style.maxWidth = "500px"
            card.style.margin = "auto"
        }
       
    })
}
filterButtons.forEach(button => {
    button.addEventListener("click", filterCards)
})

const filterCard = (e) => {
    Active.classList.remove("active")
    e.target.classList.add("active")
    // console.log(e.target)


    filterableCards.forEach(card => {
        card.classList.remove("hide")
        if(filterButton.selected){
            // dataset.name.all.add(Active)
            e.target.classList.add('active')

           if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all'){
            e.target.classList.remove('active')
           }
        }
    })
}

filterButton.addEventListener("click", filterCard);


const testSlide = document.querySelectorAll(".testItem");

const dots = document.querySelectorAll(".dot");

let counter = 0

function switchTest(currentText){
    currentText.classList.add("active")

    let testId = currentText.getAttribute("attr")

    if(testId > counter){
        
        testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';

        counter = testId

        testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    }else if(testId == counter){
        return
    }else{
        
        testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';

        counter = testId

        testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }

    indicators()
}

// Add and remove active class from the indicators
function indicators(){
    
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace('active', '')
    }
    // dots.style.maxWidth = "200px"

    dots[counter].className += ' active'
}

// Auto Sliding
function slideNext(){
    testSlide[counter].style.animation = ' next1 0.5s ease-in forwards'

    if(counter >= testSlide.length - 1){
        counter = 0;
    }
    else{
        counter++
    }
    testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators()
}

function autoSliding(){
    interval = setInterval(timer, 8000)
    function timer(){
        slideNext()
        indicators()
    }
}
autoSliding()

// Stop when mouse is over the indicator
const container = document.querySelector('.indicators')
container.addEventListener('mouseover', pause);
function pause(){
    clearInterval(interval)
}

// resume Sliding when mouse is out
container.addEventListener("mouseout", autoSliding);



// document.getElementById("search").addEventListener("click", () => {
//     //initializations
//     let searchInput = document.querySelector(".search-box").value;
//     let elements = document.querySelectorAll(".product-name");
//     let cards = document.querySelectorAll(".card");
  
//     // //loop through all elements
//     // elements.forEach((element, index) => {
//     //   //check if text includes the search value
//     //   if (element.innerText.includes(searchInput.toUpperCase())) {
//     //     //display matching card
//     //     cards[index].classList.remove("hide");
//     //   } else {
//     //     //hide others
//     //     cards[index].classList.add("hide");
//     //   }
//     // });

//     if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
//         card.classList.remove("hide")
//         card.style.maxWidth = "500px"
//         card.style.margin = "auto"
//     }
//   });


// document.getElementById("searching").addEventListener("click", () => {
//     // Initialization
//     let searchInput = document.querySelector("#search-input").value.toUpperCase();
//     let elements = document.querySelectorAll(".product-name");
//     let cards = document.querySelectorAll("filterable_cards .card");
  

    // Second Example

    // Loop through all elements
    // cards.forEach( card => {
    //     card.classList.add("hide")

    //     if(card.dataset.name === element.innerText.toUpperCase().includes(searchInput) || e.target.dataset.name === "all"){
    //         card.classList.remove("hide")
    //         card.style.maxWidth = "500px"
    //         card.style.margin = "auto"
    //     }
        

        // First Example

        // Check if text includes the search value
        // if (element.innerText.toUpperCase().includes(searchInput) || searchInput === "ALL" || searchInput === "all") {
        //     // Display matching card
        //     cards[index].classList.remove("hide");
        //     // cards[index].style.maxWidth = "500px";
        //     // cards[index].style.margin = "auto";
        // } else {
        //     // Hide others
        //     cards[index].classList.add("hide");
        // }
    // });
// });

document.getElementById("searching").addEventListener("click", function() {
    let searchInput = document.getElementById("search-input").value.toLowerCase();
    let cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
        if (card.dataset.name === searchInput) {
            // Scroll to the card
            card.scrollIntoView({ behavior: 'smooth' });
            // Optionally, you can add some visual feedback like highlighting the card
            card.style.backgroundColor = "red";
        }
    });
});
