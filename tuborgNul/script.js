window.addEventListener("load", showStart);


function showStart() {
    document.querySelector("#resultattekst").classList.add("hide");
    document.querySelector("#submitknap").addEventListener("click", removeHide);
    myFunction();
    tjekEfter();
}

function myFunction() {
    document.querySelector("#submitknap").addEventListener("click", removeHide);
}

function removeHide() {
    document.querySelector("#resultattekst").classList.remove("hide");

    document.querySelector("#submitknap").removeEventListener("click", removeHide);
}
