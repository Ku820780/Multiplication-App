const num1 =Math.ceil(Math.random()*10)
const num2 =Math.ceil(Math.random()*10)

const qustionEl = document.getElementById("question")
const formEl = document.getElementById("form")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")


let score =JSON.parse (localStorage.getItem("score"));
         if(!score){
            score=0;
         }
scoreEl.innerText = `score ${score}`

qustionEl.innerText = `What is ${num1} multiply by ${num2}?`

const corectAns = num1 * num2;


formEl.addEventListener("submit" ,()=>{
       const userAns = +inputEl.value  
       if(userAns === corectAns){
        score++;
       UpdateLocalStorege()
       }
       else{
        score--;
       UpdateLocalStorege()
       }
});

function UpdateLocalStorege(){
    localStorage.setItem("score",JSON.stringify(score))
}


