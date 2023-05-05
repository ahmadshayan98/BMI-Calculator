function bmi() {
    let height = +document.querySelector("#ht").value;

    let mass = +document.querySelector("#ms").value;

    let re = Math.pow(height * 0.3048, 2);

    let res = mass / re;

    document.querySelector("#res").innerHTML=("Your BMI is "+ res)
}