let input = document.getElementsByTagName('input')[0];
let addBtn = document.querySelector(".add");
let olEl = document.getElementsByTagName('ol')[0];
addBtn.addEventListener("click",()=>{
    if(input.value==""){
        alert("Cannot be empty!");
    }else{
        // create li -> greateElement
        let  liEl = document.createElement("li");
        //li dotor input utgiig oruulna
        liEl.innerText = input.value;
        //ol dotor li gargaj irne
        olEl.append(liEl);
        //clear
        input.value="";
        let delBtn = document.createElement('button');
        delBtn.innerHTML = "<i class='bi bi-trash'></i>";
        liEl.append(delBtn);
        let check = document.createElement('button');
        check.innerHTML = "<i class='bi bi-check-lg'></i>";
        liEl.append(check)
        delBtn.className = "del";
        saveData();
    }
})
olEl.addEventListener("click",(e)=>{
    console.log(e.target);
    let targetEl = e.target;
    let parentEl=(targetEl.parentElement).parentElement;
    
    if(targetEl.className=="bi bi-trash"){
        parentEl.remove();
    }else if(targetEl.className="bi bi-check-lg"){
        parentEl.classList.toggle("checked");
    }
    saveData();
});
function saveData(){
    localStorage.setItem('todo', olEl.innerHTML);
}
function getData(){
    olEl.innerHTML = localStrorage.getItem('todo');
}
getData()