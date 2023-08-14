
let equalBtn = document.getElementById("equalBtn");
let answer = document.getElementById("answer");
let recentHistory = document.getElementById("recentHistory");

const display = (number) => {
    answer.value += number;

    //Here I'm storing the input numbers inside a temp variable.
    temp = answer.value;
    // console.log(temp);
}


const calculate = () => {
    let final_answer = eval(answer.value);
    answer.value = final_answer;
    // console.log(typeof(answer.value));
}

const cls = () => {
    // alert();
    answer.value = "";
}

const back = () => {
    answer.value = answer.value.slice(0, -1);
}

const historyFunc = () => {
    // document.cookie = "username=Prince; expires=Tue, 15 Aug 2023 12:00:00 UTC; path=/";
    // document.cookie = "email=Prince@gmail.com";
    // document.cookie = temp + "=" + answer.value + "<br>\n";
    // let cookie = document.cookie;
    // recentHistory.innerText = "cookie";

        var temp1 = recentHistory.innerHTML;
        var data = '<span onclick="aa(this)">' + temp + '</span> = ' + answer.value + "<br>";
        recentHistory.innerHTML = temp1 + data;

    // For displaying the result inside an input box. But not sure, how to make editable outputs, so putting it in To-Do. 

    // recentHistory.value = cookie;
    
}

function aa(obj)
{
    console.log(obj);
    document.getElementById("answer").value = obj.innerHTML;
}

equalBtn.addEventListener('click', historyFunc);
