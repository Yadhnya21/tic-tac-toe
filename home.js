document.getElementById('.username');

function greetUser(){
    const name = username.value;
    const greet = document.getElementById('greeting');
    if(name.trim() !== ""){
        greeting.textContent = `Welcome, ${name}... Lets's play TIC TAC TOE`;
        greeting.style.display = "inline-block";
    }else {
        greeting.style.display = 'none';
    }

}