const powerRating = document.querySelector(".power-rat"); 
const powerTime = document.querySelector(".power-gross");
const error = document.querySelector(".error");
const btn = document.querySelector("#btn-one");
const current = document.querySelector(".current-type");
const voltage = document.querySelector("#voltage-values");

let setTime = () => {
    setTimeout(() =>{
        error.style.display = "none";
    }, 5000)
}

function tipCalculate (e) {
    e.preventDefault();
   let tipOne = current.value;
   let tipTwo = voltage.value;
   if( tipOne === "" || tipTwo === ""){
    error.style.display = "block";
    setTime();
   }
   else if( isNaN(tipOne)){
     error.style.display = "block";
     error.innerHTML = "Please enter a number";
     setTime();
   }else {
       let show = tipOne * tipTwo;
       show = (tipOne * tipTwo).toFixed(2);
       powerRating.textContent = `power Rating: ${show}(W)`;
       console.log(show);

       let showGross = 1000 * show;
       powerTime.textContent = `Gross Rating: ${showGross}(W)`;
     
   }
}

btn.addEventListener("click", tipCalculate);
