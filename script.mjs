function tempcon(event){
    console.log("button click");
    event.preventDefault();
    let input = document.querySelector("#celsiusInput").value;
    let result = (input * 9/5) + 32
    let massage = ""+ result;
    document.querySelector("#fahrenheitResult").innerHTML= massage;
}
