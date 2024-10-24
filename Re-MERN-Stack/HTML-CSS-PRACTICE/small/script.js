
const converter =()=>{
    const firstValue = Number(document.getElementById("kmValue").value) ?? 0;
    const secondValue = Number(document.getElementById("mValue").value) ?? 0;


    const firstMeasurment = document.getElementById("firstDropdown").value;
    const secondMeasurment = document.getElementById("secondDropdown").value;
        let result="";
       
    if(firstMeasurment === secondMeasurment){
        result = firstValue;
     
    }
    if(firstMeasurment === "km" && secondMeasurment === 'm'){
        result = firstValue * 1000;
    }
    if(firstMeasurment === "m" && secondMeasurment ==="km"){
        result = firstValue /1000;
    }
    document.getElementById("mValue").value = result;

}