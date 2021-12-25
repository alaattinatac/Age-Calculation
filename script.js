const age = prompt("How old are you?");
switch (parseInt(age)>=18) {
    case true:
        document.getElementById("result").innerHTML=(`You are ${age} years old. You can buy alcoholic beverages.`);
        break;
    default:
        document.getElementById("result").innerHTML=(`You are ${age} years old. It is forbidden to buy alcoholic beverages.`);
        break;
}