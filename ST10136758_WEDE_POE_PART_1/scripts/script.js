// =========================
// DARK MODE SYSTEM
// =========================


const themeButton = document.getElementById("theme-toggle");


// Check saved preference

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀️";

}


// Button click

themeButton.addEventListener("click", function(){


    document.body.classList.toggle("dark-mode");


    if(document.body.classList.contains("dark-mode")){


        localStorage.setItem("theme", "dark");

        themeButton.textContent = "☀️";


    }

    else {


        localStorage.setItem("theme", "light");

        themeButton.textContent = "🌙";


    }


});

// =========================
// ANIMAL IMPACT FACT GENERATOR
// =========================


const animalFacts = [

{
title: "🐾 Abandoned but Not Forgotten",
fact: "Thousands of dogs are abandoned every year and brought into shelters where they are given a second chance at life through rescue and care.",
image: "images/abandoned-shelter-dog-south-africa.jpg"
},

{
title: "🏡 Adoption Changes Two Lives",
fact: "When you adopt a shelter animal, you are not only saving that pet’s life but also freeing space for another animal in need.",
image: "images/dog-adoption-rescue-shelter.jpg"
},

{
title: "❤️ The Joy of a Forever Home",
fact: "Adopted animals often form deep bonds with their families and thrive in safe, loving home environments.",
image: "images/happy-family-with-dog-at-home.jpg"
},

{
title: "🤝 Volunteers Make It Possible",
fact: "Animal shelters rely heavily on volunteers who help feed, clean, comfort, and care for animals every single day.",
image: "images/animal-shelter-volunteer-care.jpg"
},

{
title: "🐶 Animals Feel Love Too",
fact: "Dogs show affection through trust, bonding, and companionship, proving that emotional connection goes both ways.",
image: "images/dog-showing-affection.jpg"
},

{
title: "🌍 Community Rescue Efforts Save Lives",
fact: "Animal rescue teams and communities working together help respond quickly to cases of neglect, injury, and abandonment.",
image: "images/animal-rescue-team-community-help.jpg"
},

{
title: "🩺 Veterinary Care Gives Second Chances",
fact: "Many rescued dogs arrive injured or sick, but with proper veterinary treatment they can fully recover and live healthy lives.",
image: "images/dog-veterinary-treatment-recovery.jpg"
},

{
title: "🐕 Shelter Overcrowding is a Real Challenge",
fact: "Overcrowded shelters highlight the importance of adoption, sterilisation, and responsible pet ownership.",
image: "images/overcrowded-dog-shelter-rescue.jpg"
},

{
title: "💉 Healing Through Medical Care",
fact: "Veterinary teams provide essential treatments such as vaccinations, wound care, and rehabilitation for rescued animals.",
image: "images/veterinary-care-dog-treatment.jpg"
},

{
title: "🏡 A New Beginning Through Adoption",
fact: "Every adopted dog represents a life rewritten — from abandonment to belonging in a forever home.",
image: "images/happy-adopted-dog-forever-home.jpg"
},

{
title: "🤝 The Power of Volunteers",
fact: "SPCA volunteers play a crucial role in improving animal wellbeing through daily hands-on care and emotional support.",
image: "images/volunteers-assisting-spca.jpg"
},

{
title: "🏥 SPCA Inspectorate in Action",
fact: "Inspectorate teams respond to cruelty cases and ensure animals are rescued from dangerous or neglectful situations.",
image: "images/SPCA-Kloof-Inspectorate-Team-1.jpg"
}

];

const galleryImages =
document.querySelectorAll(".gallery-image");

const factTitle =
document.getElementById("fact-title");

const animalFact =
document.getElementById("animal-fact");

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightbox-image");

const closeLightbox =
document.getElementById("close-lightbox");


galleryImages.forEach(image => {

image.addEventListener("click", () => {

galleryImages.forEach(img => {

img.classList.remove("selected");

});

image.classList.add("selected");


const factIndex =
image.dataset.fact;

const fact =
animalFacts[factIndex];


factTitle.textContent =
fact.title;

animalFact.textContent =
fact.fact;


lightboxImage.src =
fact.image;

lightbox.style.display =
"flex";

});

});


closeLightbox.addEventListener("click", () => {

lightbox.style.display =
"none";

});


lightbox.addEventListener("click", event => {

if(event.target === lightbox){

lightbox.style.display =
"none";

}

});



// ANIMATED STATISTICS



const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {


counter.innerText = "0";


const updateCounter = () => {


const target = +counter.getAttribute("data-target");


const current = +counter.innerText;


const increment = target / 150;



if(current < target){


counter.innerText = Math.ceil(current + increment);


setTimeout(updateCounter,20);


}

else{


counter.innerText = target.toLocaleString();


}


};


updateCounter();


});





// =========================
// RESCUE STORY CAROUSEL
// =========================


const stories = [


{

title:"🐾 Bella's Rescue Story",

image:"images/bella-rescue.jpg",

text:"Bella was rescued after suffering neglect. After medical care and rehabilitation, she found a loving home."

},


{

title:"🐾 Max's Journey To Recovery",

image:"images/max-rescue.jpg",

text:"Max survived severe neglect. SPCA intervention helped him recover and find a caring family."

},


{

title:"🐾 Hope's Second Chance",

image:"images/hero-dog.png",

text:"Hope arrived frightened and injured but slowly learned to trust again."

}


];


let currentStory = 0;



const storyImage=document.getElementById("story-image");

const storyTitle=document.getElementById("story-title");

const storyText=document.getElementById("story-text");



function showStory(index){


let story=stories[index];


storyImage.src=story.image;

storyTitle.innerHTML=story.title;

storyText.innerHTML=story.text;


}



const next=document.getElementById("next-story");

const previous=document.getElementById("previous-story");



if(next){


next.onclick=function(){


currentStory++;


if(currentStory >= stories.length){

currentStory=0;

}


showStory(currentStory);


}


}



if(previous){


previous.onclick=function(){


currentStory--;


if(currentStory < 0){

currentStory=stories.length-1;

}


showStory(currentStory);


}


}





// =========================
// RANDOM ANIMAL QUOTES
// =========================


const quotes=[


"Saving one animal will not change the world, but it will change that animal's world.",


"Animals cannot speak our language, but their hearts understand kindness.",


"The greatness of a nation can be judged by the way its animals are treated.",


"Every rescue story begins with someone choosing to care.",


"Compassion for animals creates a kinder world for everyone.",


"A small act of kindness can give an animal a second chance.",


"Love is a four-legged word.",


"Every animal deserves safety, love, and a place to call home.",


"Helping one animal may not change everything, but it changes everything for that animal.",


"Be the person your pet thinks you are.",


"Kindness towards animals is a reflection of kindness towards humanity."

];


const quote=document.getElementById("animal-quote");

const quoteButton=document.getElementById("new-quote");


if(quoteButton){


quoteButton.onclick=function(){


let random=Math.floor(Math.random()*quotes.length);


quote.innerHTML=quotes[random];


}


}






// =========================
// EMERGENCY POPUP
// =========================


const emergency = document.getElementById("emergency-button");
const popup = document.getElementById("emergency-modal");
const close = document.getElementById("close-popup");

// SAFETY CHECK
if (emergency && popup) {

    emergency.onclick = function () {
        popup.classList.add("show");
    };

}

if (close && popup) {

    close.onclick = function () {
        popup.classList.remove("show");
    };

}




// =====================================
// RESCUE STORY CAROUSEL
// =====================================


function setupRescueCarousel(){


    // Check if carousel exists on page

    const storyTitle = document.getElementById("story-title");

    if(!storyTitle){
        return;
    }



    const rescueStories = [


        {

            title:"🐾 Abused Alfie Enjoys New Farm Life",

            category:"Inspectorate Story: Alfie",

            before:
            "images/Abused-Alfie-Dog-Rescued-Kloof-and-Highway-SPCA-Inspectorate-injured.jpg",

            after:
            "images/Abused-Alfie-Dog-Rescued-Kloof-and-Highway-SPCA-Inspectorate.jpg",


            background:

            "From a sad and forlorn little puppy in our Kloof and Highway SPCA Clinic to a thriving, energetic, and incredible dog, this is the story of Alfie. Alfie was brought into our Kloof and Highway SPCA by an Inspector who was called to collect a stray in Pinetown.",



            condition:

            "Alfie was thin and dehydrated, but what was especially upsetting were his jagged cut ears that were still bleeding and infected. His tail had been broken, and instead of a happy wagging tail, it remained crooked and bent between his legs.",



            recovery:

            "With veterinary treatment, proper nutrition, and rehabilitation from the SPCA team, Alfie slowly regained his strength. Despite everything he had endured, he remained playful, energetic, and full of love. He showed that rescue animals can heal when given patience and care.",



            outcome:

            "Alfie was adopted by Arthur and Theresa, who immediately fell in love with his personality and spirit. Today he enjoys bedtime cuddles, walks through forests, and visits to a farm. Alfie was given the second chance he deserved."

        },





        {

            title:"🐾 Pip: A Diwali Rescue Story",

            category:"Inspectorate Story: Pip",


            before:
            "images/Pip-the-diwali-rescue-puppy-ganga-plumbing-inspectorate-story-Kloof-Highway-Spca-9.jpg",

            after:
            "images/Pip-the-diwali-rescue-puppy-ganga-plumbing-inspectorate-story-Kloof-Highway-Spca.jpg",



            background:

            "Amongst the loud bangs and chaos of Diwali came the story of a little puppy who was so frightened that she crawled into a 23 metre drain pipe to escape the terrifying noises. Unfortunately, the more scared she became, the further she travelled until she became trapped.",



            condition:

            "Pip was trapped deep inside the drain pipe and was unable to escape by herself. She was frightened, exhausted, and in urgent need of help.",



            recovery:

            "When Inspector Petros Simamane and Field Officer Philani Nzama arrived, they realised special equipment was needed to locate Pip. With the help of Ganga Plumbers and their camera equipment, the rescue team worked for more than four hours digging and carefully recovering her. Pip was finally brought to safety, given food, warmth, and a comfortable place to rest.",



            outcome:

            "Pip became one of the fortunate animals rescued that night. Her story reminds communities that animals affected by human actions need compassion, protection, and responsible care."

        },






        {

            title:"🐾 Thea's Second Chance",

            category:"Inspectorate Story: Thea",


            before:
            "images/Thea-Puppy-dog-rescue-Kloof-and-Highway-Inspectorate-Lee-Bryant-1.jpg",

            after:
            "images/Thea-Puppy-dog-rescue-Kloof-and-Highway-Inspectorate-Lee-Bryant.jpg",



            background:

            "Hero is the word that comes to mind when describing Warrant Officer Lee Bryant, who rescued a German Shepherd puppy that had been tied to a pole in the hot sun. The puppy had no food or water and was left in a dangerous situation.",



            condition:

            "Thea arrived at the Kloof and Highway SPCA needing care and rehabilitation. She was underweight and needed time, proper nutrition, and medical support before she could begin her journey towards a new home.",



            recovery:

            "After receiving Hill's Pet Nutrition, veterinary care, and lots of kindness from the SPCA team, Thea gained weight and regained her strength. Once she was sterilised and ready for adoption, she was given the opportunity to find her forever family.",



            outcome:

            "Thea was adopted into a loving home where she is now healthy, happy, and settled. Her story shows how one person choosing to act can completely change an animal's future."

        }


    ];





    let rescueStoryIndex = 0;

    let storyTimer;





    // Elements

    const beforeImage =
    document.getElementById("before-image");


    const afterImage =
    document.getElementById("after-image");


    const category =
    document.getElementById("story-category");


    const background =
    document.getElementById("story-background");


    const condition =
    document.getElementById("story-condition");


    const recovery =
    document.getElementById("story-recovery");


    const outcome =
    document.getElementById("story-outcome");


    const nextButton =
    document.getElementById("next-story");


    const previousButton =
    document.getElementById("previous-story");


    const dots =
    document.querySelectorAll(".dot");






    function displayStory(index){


        const story = rescueStories[index];


        storyTitle.innerHTML = story.title;


        category.innerHTML = story.category;


        beforeImage.src = story.before;


        afterImage.src = story.after;


        background.innerHTML = story.background;


        condition.innerHTML = story.condition;


        recovery.innerHTML = story.recovery;


        outcome.innerHTML = story.outcome;




        dots.forEach(dot => {

            dot.classList.remove("active");

        });



        if(dots[index]){

            dots[index].classList.add("active");

        }


    }








    function nextStory(){


        rescueStoryIndex++;


        if(rescueStoryIndex >= rescueStories.length){

            rescueStoryIndex = 0;

        }


        displayStory(rescueStoryIndex);


    }







    function previousStory(){


        rescueStoryIndex--;


        if(rescueStoryIndex < 0){

            rescueStoryIndex = rescueStories.length - 1;

        }


        displayStory(rescueStoryIndex);


    }






    function startTimer(){


        storyTimer = setInterval(()=>{


            nextStory();


        },30000);


    }






    function resetTimer(){


        clearInterval(storyTimer);


        startTimer();


    }







    // Button events


    if(nextButton){


        nextButton.addEventListener("click",()=>{


            nextStory();

            resetTimer();


        });


    }






    if(previousButton){


        previousButton.addEventListener("click",()=>{


            previousStory();

            resetTimer();


        });


    }






    // Dot events


    dots.forEach((dot,index)=>{


        dot.addEventListener("click",()=>{


            rescueStoryIndex = index;


            displayStory(index);


            resetTimer();


        });


    });







    // Load first story

    displayStory(0);



    // Start automatic slideshow

    startTimer();



}






// Start carousel

setupRescueCarousel();