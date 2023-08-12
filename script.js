
let answer = document.getElementById("answer");

const display = (number) => {
    answer.value += number; 
}

const calculate = () => {
    let final_num = answer.value;
    let final_answer = eval(final_num);
    answer.value = final_answer;
}

const cls = () => {
    answer.value = "";
}

const back = () => {
    answer.value = answer.value.slice(0, -1);
}

const percent = () => {
    let percent_value = answer.value;
    let check_percent = percent_value.includes("%");
    answer.value = check_percent;
}