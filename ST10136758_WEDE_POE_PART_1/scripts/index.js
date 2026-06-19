document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SPCA CONTACT DATA 
    // =========================
   const spcas = [
    // ================= GAUTENG / METRO =================
    { name: "Johannesburg SPCA", phone: "083 604 1172" },
    { name: "Benoni SPCA", phone: "073 511 2261" },
    { name: "Tshwane SPCA (Waltloo)", phone: "083 453 3863" },
    { name: "Tshwane SPCA (Centurion)", phone: "082 807 5671" },
    { name: "Midrand SPCA", phone: "083 441 1564" },
    { name: "Randburg SPCA", phone: "083 381 4732" },
    { name: "Roodepoort & Krugersdorp SPCA", phone: "076 070 1400" },
    { name: "Sandton SPCA", phone: "082 460 2765" },

    // ================= EKURHULENI =================
    { name: "Alberton SPCA", phone: "065 616 9004" },
    { name: "Boksburg SPCA", phone: "083 763 6311" },
    { name: "Brakpan SPCA", phone: "083 696 9052" },
    { name: "Edenvale SPCA", phone: "072 183 9794" },
    { name: "Germiston SPCA", phone: "081 399 1781" },
    { name: "Heidelberg SPCA", phone: "071 994 9960" },
    { name: "Kempton Park SPCA", phone: "079 509 7859" },
    { name: "Nigel SPCA", phone: "084 485 7020" },
    { name: "Springs SPCA", phone: "083 377 7029" },
    { name: "Vereeniging SPCA", phone: "083 292 5862" },

    // ================= MPUMALANGA =================
    { name: "Bethal SPCA", phone: "072 573 3122" },
    { name: "Middelburg SPCA", phone: "084 432 6278" },
    { name: "Nelspruit SPCA", phone: "082 755 8687" },
    { name: "White River SPCA", phone: "082 706 1240" },
    { name: "Highveld Ridge SPCA (Secunda)", phone: "082 222 1122" },
    { name: "Witbank SPCA", phone: "083 657 2421" },

    // ================= NORTH WEST =================
    { name: "Parys SPCA", phone: "072 894 4061" },
    { name: "Randwest SPCA (Randfontein)", phone: "078 911 0538" },
    { name: "Randwest SPCA (Westonaria)", phone: "073 214 7451" },
    { name: "Rustenburg SPCA", phone: "072 933 7723" },

    // ================= KWAZULU-NATAL =================
    { name: "Dundee SPCA", phone: "072 949 6235" },
    { name: "Empangeni SPCA", phone: "083 482 3866" },
    { name: "Eshowe SPCA", phone: "078 306 1439" },
    { name: "Greytown SPCA", phone: "072 096 9634" },
    { name: "Newcastle SPCA", phone: "072 337 0347" },
    { name: "Richards Bay SPCA", phone: "073 551 4564" },
    { name: "Amanzimtoti SPCA", phone: "072 122 7288" },
    { name: "Durban & Coast SPCA", phone: "083 212 6103" },
    { name: "Kloof & Highway SPCA", phone: "073 335 9322" },
    { name: "Lower South Coast SPCA", phone: "082 222 6355" },
    { name: "Mooi River SPCA", phone: "083 385 0807" },
    { name: "Pietermaritzburg SPCA", phone: "083 627 9736" },
    { name: "Umngeni (Howick) SPCA", phone: "082 567 8297" },

    // ================= LIMPOPO =================
    { name: "Lephalale SPCA", phone: "078 499 2645" },
    { name: "Letaba SPCA", phone: "083 628 9257" },
    { name: "Louis Trichardt SPCA", phone: "082 965 5151" },
    { name: "Mokopane SPCA", phone: "076 538 6291" },
    { name: "Polokwane SPCA", phone: "082 804 0065" },
    { name: "Phalaborwa SPCA", phone: "082 494 2147" },

    // ================= EASTERN CAPE =================
    { name: "Amahlathi SPCA (Stutterheim)", phone: "072 356 4565" },
    { name: "Assisi SPCA (Humansdorp)", phone: "073 121 8963" },
    { name: "East London SPCA", phone: "083 446 8682" },
    { name: "Grahamstown SPCA", phone: "064 820 8496" },
    { name: "King William's Town SPCA", phone: "082 255 4991" },
    { name: "Mthatha SPCA", phone: "083 759 0576" },
    { name: "Port Alfred SPCA", phone: "082 676 8605" },
    { name: "Queenstown SPCA", phone: "082 492 5588" },
    { name: "Uitenhage SPCA", phone: "082 905 4716" },

    // ================= WESTERN CAPE =================
    { name: "Beaufort West SPCA", phone: "072 847 7312" },
    { name: "Cape of Good Hope SPCA", phone: "083 326 1604" },
    { name: "Franschhoek SPCA", phone: "083 745 5344" },
    { name: "Garden Route SPCA (George)", phone: "082 378 7384" },
    { name: "Paarl SPCA", phone: "082 510 6387" },
    { name: "Swartland SPCA (Darling)", phone: "082 414 7153" },
    { name: "Swellendam SPCA", phone: "084 737 1948" },
    { name: "Wellington SPCA", phone: "082 905 9184" },
    { name: "Winelands SPCA", phone: "071 025 7805" },

    // ================= FREE STATE =================
    { name: "Bethlehem SPCA", phone: "083 629 6403" },
    { name: "Bloemfontein SPCA", phone: "078 322 8332" },
    { name: "Kroonstad SPCA", phone: "071 271 1731" },
    { name: "Virginia SPCA", phone: "076 144 4788" },
    { name: "Kimberley SPCA", phone: "082 376 7679" }
];

    // =========================
    // ELEMENTS
    // =========================
    const btn = document.getElementById("emergency-button");
    const modal = document.getElementById("emergency-modal");
    const closeBtn = document.getElementById("close-emergency");
    const input = document.getElementById("spca-search");
    const list = document.getElementById("spca-suggestions");
    const selected = document.getElementById("selected-spca");

    // =========================
    // OPEN / CLOSE POPUP
    // =========================
    btn.addEventListener("click", function () {
        modal.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", function () {
        modal.classList.add("hidden");
        input.value = "";
        list.innerHTML = "";
        selected.innerHTML = "";
    });

    // =========================
    // AUTOCOMPLETE SEARCH
    // =========================
    input.addEventListener("input", function () {

        const value = input.value.toLowerCase();
        list.innerHTML = "";

        if (value === "") return;

        const filtered = spcas.filter(spca =>
            spca.name.toLowerCase().includes(value)
        );

        filtered.forEach(spca => {

            const li = document.createElement("li");
            li.textContent = `${spca.name} — ${spca.phone}`;

            li.addEventListener("click", function () {
                input.value = spca.name;
                list.innerHTML = "";

                selected.innerHTML = `
                    <p><strong>${spca.name}</strong></p>
                    <p>📞 ${spca.phone}</p>
                    <a href="tel:${spca.phone}">Call Now</a>
                `;
            });

            list.appendChild(li);
        });
    });

});