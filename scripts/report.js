// =====================================
// ANIMAL ABUSE REPORT JAVASCRIPT
// =====================================


document.addEventListener("DOMContentLoaded", function () {



    // =====================================
    // OTHER ANIMAL FIELD
    // =====================================


    const otherAnimalCheck = document.getElementById(
        "other-animal-check"
    );


    const otherAnimalInput = document.getElementById(
        "other-animal"
    );



    if(otherAnimalCheck){


        otherAnimalInput.style.display = "none";



        otherAnimalCheck.addEventListener(
            "change",
            function(){



            if(this.checked){


                otherAnimalInput.style.display = "block";

                otherAnimalInput.required = true;


            }

            else{


                otherAnimalInput.style.display = "none";

                otherAnimalInput.required = false;

                otherAnimalInput.value = "";


            }



        });


    }









    // =====================================
    // WITNESS INFORMATION
    // =====================================


    const witnessSelect = document.getElementById(
        "witness-select"
    );


    const witnessDetails = document.getElementById(
        "witness-details"
    );



    if(witnessSelect){



        witnessSelect.addEventListener(
            "change",
            function(){



            if(this.value === "Yes"){


                witnessDetails.classList.remove(
                    "hidden"
                );


                witnessDetails.classList.add(
                    "show"
                );


            }


            else{


                witnessDetails.classList.remove(
                    "show"
                );


                witnessDetails.classList.add(
                    "hidden"
                );


            }



        });



    }









    // =====================================
    // FORM VALIDATION
    // =====================================


    const abuseForm = document.getElementById(
        "abuse-form"
    );

// =====================================
// EVIDENCE FILE DISPLAY
// =====================================


const evidenceUpload = document.getElementById(
    "evidence-upload"
);


const fileList = document.getElementById(
    "file-list"
);



// Stores every uploaded file
let uploadedEvidenceFiles = [];



if(evidenceUpload){


    evidenceUpload.addEventListener(
        "change",
        function(){


        const newFiles = Array.from(this.files);



        // Add newly selected files to existing files

        uploadedEvidenceFiles = uploadedEvidenceFiles.concat(newFiles);




        // Maximum file limit

        if(uploadedEvidenceFiles.length > 5){


            alert(
                "You may upload a maximum of 5 evidence files."
            );


            uploadedEvidenceFiles =
            uploadedEvidenceFiles.slice(0,5);


        }





        displayEvidenceFiles();



        // Reset input so user can select more files again

        this.value = "";



    });


}





function displayEvidenceFiles(){


    fileList.innerHTML = "";



    if(uploadedEvidenceFiles.length === 0){


        fileList.innerHTML =
        "<p>No files selected</p>";


        return;


    }




    let count = document.createElement("p");


    count.className = "file-count";


    count.textContent =
    uploadedEvidenceFiles.length +
    " / 5 files selected";



    fileList.appendChild(count);





    let list = document.createElement("ul");




    uploadedEvidenceFiles.forEach(function(file,index){



        let item = document.createElement("li");



        item.textContent =
        "✓ " + file.name;



        list.appendChild(item);



    });





    fileList.appendChild(list);



}

    if(abuseForm){



        abuseForm.addEventListener(
            "submit",
            function(event){



            event.preventDefault();





            // EMAIL VALIDATION

            const email = document.querySelector(
                'input[type="email"]'
            );



            const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



            if(
                email.value &&
                !emailPattern.test(email.value)
            ){


                alert(
                    "Please enter a valid email address."
                );


                return;


            }







            // PHONE VALIDATION


            const phone = document.querySelector(
                'input[type="tel"]'
            );



            const phonePattern =
            /^[0-9]{10,12}$/;



            if(
                phone.value &&
                !phonePattern.test(phone.value.replace(/\s/g,''))
            ){


                alert(
                    "Please enter a valid phone number."
                );


                return;


            }








            // ANIMAL SELECTION CHECK


            const animals =
            document.querySelectorAll(
            'input[type="checkbox"]'
            );



            let animalSelected = false;



            animals.forEach(function(animal){


                if(animal.checked){

                    animalSelected = true;

                }


            });





            if(!animalSelected){


                alert(
                    "Please select at least one animal involved."
                );


                return;


            }








// =====================================
// DESCRIPTION VALIDATION
// =====================================


const animalDescription = document.getElementById(
    "animal-description"
);


const incidentDescription = document.getElementById(
    "incident-description"
);




if(animalDescription.value.trim().length < 50){


    alert(
        "Please provide at least 50 characters describing the animal involved."
    );


    return;


}





if(incidentDescription.value.trim().length < 100){


    alert(
        "Please provide at least 100 characters explaining what happened."
    );


    return;


}






// =====================================
// EVIDENCE FILE VALIDATION
// =====================================


const evidenceInput = document.getElementById(
    "evidence-upload"
);


if(evidenceInput.files.length > 5){


    alert(
        "Please upload a maximum of 5 evidence files."
    );


    return;


}



const maxFileSize = 10 * 1024 * 1024; // 10MB


for(let file of evidenceInput.files){


    if(file.size > maxFileSize){


        alert(
            file.name + 
            " is too large. Each file must be under 10MB."
        );


        return;


    }


}

            // SUCCESS MESSAGE


            abuseForm.innerHTML = `

            <div class="success-message">

                <h2>
                Thank You For Your Report
                </h2>


                <p>
                Your information has been recorded.
                An SPCA representative will review the details provided.
                </p>


                <p>
                If the situation is life threatening,
                please contact emergency services immediately.
                </p>


            </div>

            `;



        });



    }




});

//SPCA LOCATION

const spcaLocations = [

    "Alberton SPCA",
"Benoni SPCA",
"Boksburg SPCA",
"Brakpan SPCA",
"Edenvale SPCA",
"Germanston SPCA",
"Heidelberg SPCA",
"Kempton Park SPCA",
"Nigel SPCA",
"Springs SPCA",
"Vereeniging SPCA",

"Bethal SPCA",
"Middelburg SPCA",
"Nelspruit SPCA",
"White River SPCA",
"Highveld Ridge SPCA",
"Witbank SPCA",

"Johannesburg SPCA",
"Midrand SPCA",
"Randburg SPCA",
"Roodepoort & Krugersdorp SPCA",
"Sandton SPCA",
"Tshwane Waltloo SPCA",
"Centurion SPCA",

"Carletonville SPCA",
"Mafikeng SPCA",
"Parys SPCA",
"Randwest Randfontein SPCA",
"Randwest Westonaria SPCA",
"Rustenburg SPCA",

"Dundee & District SPCA",
"Empangeni SPCA",
"Eshowe SPCA",
"Greytown SPCA",
"Newcastle SPCA",
"Richards Bay SPCA",
"Amanzimtoti SPCA",
"Durban & Coast SPCA",
"Kloof & Highway SPCA",
"Lower South Coast SPCA",
"Mooi River & District SPCA",
"Pietermaritzburg SPCA",
"Umngeni Howick SPCA",

"Lephalale SPCA",
"Letaba SPCA",
"Louis Trichardt SPCA",
"Mokopane SPCA",
"Polokwane SPCA",
"Phalaborwa SPCA",

"Amahlathi Stutterheim SPCA",
"Assisi Humansdorp SPCA",
"East London SPCA",
"Grahamstown SPCA",
"King William's Town SPCA",
"Mthatha SPCA",
"Port Alfred & Ndlambe SPCA",
"Queenstown SPCA",
"Uitenhage & District SPCA",

"Beaufort West SPCA",
"Cape of Good Hope SPCA",
"Franschhoek SPCA",
"Garden Route George SPCA",
"Garden Route Mossel Bay SPCA",
"Paarl SPCA",
"Swartland Darling SPCA",
"Swartland Vredenburg SPCA",
"Swellendam SPCA",
"Wellington SPCA",
"Winelands SPCA",

"Bethlehem SPCA",
"Bloemfontein SPCA",
"Kroonstad SPCA",
"Virginia SPCA",
"Kimberley SPCA",

"Other SPCA"
    ];

    const spcaList =
document.getElementById("spca-list");

spcaLocations.forEach(function(spca){

    const option =
    document.createElement("option");

    option.value = spca;

    spcaList.appendChild(option);

});

const spcaInput =
document.getElementById("spca-location");

const otherSpcaInput =
document.getElementById("other-spca");

otherSpcaInput.style.display = "none";

spcaInput.addEventListener("input", function(){

    if(this.value === "Other SPCA"){

        otherSpcaInput.style.display = "block";

    }

    else{

        otherSpcaInput.style.display = "none";

        otherSpcaInput.value = "";

    }

});