// =====================================
// ENQUIRY PAGE JAVASCRIPT
// =====================================


// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {



    // =====================================
    // SECTION BUTTONS
    // =====================================

    const adoptionButton = document.getElementById("adoption-choice");
    const volunteerButton = document.getElementById("volunteer-choice");
    const sponsorButton = document.getElementById("sponsor-choice");


    const personalSection = document.getElementById("personal-section");

    const adoptionSection = document.getElementById("adoption-section");

    const volunteerSection = document.getElementById("volunteer-section");

    const sponsorSection = document.getElementById("sponsor-section");



    function hideAllSections(){

        adoptionSection.classList.add("hidden");
        volunteerSection.classList.add("hidden");
        sponsorSection.classList.add("hidden");

    }



    function showSection(section){

        personalSection.classList.remove("hidden");

        section.classList.remove("hidden");

        section.classList.add("show");

    }





    adoptionButton.addEventListener("click", function(){

        hideAllSections();

        showSection(adoptionSection);

    });





    volunteerButton.addEventListener("click", function(){

        hideAllSections();

        showSection(volunteerSection);

    });





    sponsorButton.addEventListener("click", function(){

        hideAllSections();

        showSection(sponsorSection);

    });








    // =====================================
    // UNDER 18 GUARDIAN INFORMATION
    // =====================================


    const ageSelect = document.getElementById("age");

    const guardianSection = document.getElementById("guardian-section");



    ageSelect.addEventListener("change", function(){


        if(this.value === "Under 18"){


            guardianSection.classList.remove("hidden");

            guardianSection.classList.add("show");


        }

        else {


            guardianSection.classList.add("hidden");


        }


    });









    // =====================================
    // OTHER ANIMAL FIELD
    // =====================================


    const otherAnimalCheck = document.getElementById("other-animal-check");

    const otherAnimalInput = document.getElementById("other-animal");



    otherAnimalInput.style.display = "none";



    otherAnimalCheck.addEventListener("change", function(){


        if(this.checked){


            otherAnimalInput.style.display = "block";


        }

        else {


            otherAnimalInput.style.display = "none";

            otherAnimalInput.value = "";


        }


    });









    // =====================================
    // CURRENT PET DETAILS
    // =====================================


    const petOptions = document.querySelectorAll(
        'input[name="pets"]'
    );


    const petDetails = document.getElementById(
        "pet-details"
    );



    petDetails.style.display = "none";



    petOptions.forEach(function(option){


        option.addEventListener("change", function(){


            if(this.parentElement.textContent.includes("Yes")){


                petDetails.style.display = "block";


            }

            else {


                petDetails.style.display = "none";


            }


        });


    });









    // =====================================
    // HOME TYPE PET PERMISSION
    // =====================================


    const homeType = document.getElementById("home-type");

    const petPermission = document.getElementById(
        "pet-permission"
    );



    homeType.addEventListener("change", function(){



        if(this.value === "Plot/Farm"){


            petPermission.style.display = "none";


        }

        else {


            petPermission.style.display = "block";


        }



    });









    // =====================================
    // SPONSOR CARD SELECTION
    // =====================================


    const sponsorButtons = document.querySelectorAll(
        ".sponsor-card button"
    );


    sponsorButtons.forEach(function(button){


        button.addEventListener("click", function(){


            sponsorButtons.forEach(function(btn){

                btn.textContent = "Select";

            });


            this.textContent = "Selected ✓";


        });


    });



     // =====================================
    // FORM SUBMISSION
    // =====================================

    const form =
    document.getElementById("enquiry-form");

    const enquiryMessage =
    document.getElementById("enquiry-message");



    if(form){

        form.addEventListener("submit", function(event){

            event.preventDefault();



            const name =
            document.getElementById("name").value;

            const surname =
            document.getElementById("surname").value;

            const email =
            document.getElementById("email").value;



            if(
                name === "" ||
                surname === "" ||
                email === ""
            ){

                alert(
                    "Please complete all required fields."
                );

                return;

            }



            if(!email.includes("@")){

                alert(
                    "Please enter a valid email address."
                );

                return;

            }



            if(
                !adoptionSection.classList.contains("hidden")
            ){

                enquiryMessage.innerHTML = `

                <h3>
                Thank you for your adoption enquiry.
                </h3>

                <p>
                Our adoption team will review your application.
                </p>

                `;

            }

            else if(
                !volunteerSection.classList.contains("hidden")
            ){

                enquiryMessage.innerHTML = `

                <h3>
                Thank you for volunteering.
                </h3>

                <p>
                We will contact you soon.
                </p>

                `;

            }

            else if(
                !sponsorSection.classList.contains("hidden")
            ){

                enquiryMessage.innerHTML = `

                <h3>
                Thank you for supporting our animals.
                </h3>

                <p>
                We will contact you regarding your sponsorship.
                </p>

                `;

            }

            else{

                enquiryMessage.innerHTML = `

                <h3>
                Thank you for your enquiry.
                </h3>

                <p>
                A SPCA representative will contact you.
                </p>

                `;

            }

        });

    }

});