const questionAnswer = document.querySelectorAll(".questionAnswer");
const btnCloseQuestion = document.querySelectorAll(".btnCloseQuestion");


if (btnCloseQuestion) {
btnCloseQuestion.forEach((btnClose, index)=>{
       btnClose.addEventListener("click", () => {
            const qa = questionAnswer[index];
            const show = qa.classList.toggle('questionAnswer');
            btnClose.innerHTML = !show ? "close" : "keyboard_arrow_down";
            btnClose.style.color= !show?"white":"#111";
            btnClose.style.backgroundColor=!show ?"black":"#ddd";
    });
})

}
