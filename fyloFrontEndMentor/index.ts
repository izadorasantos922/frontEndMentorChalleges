const inputEmail: HTMLInputElement = document.querySelector<HTMLInputElement>(".input-email");
const form: HTMLFormElement = document.querySelector<HTMLFormElement>('form');
const messageError: HTMLDivElement = document.querySelector<HTMLDivElement>(".error");

function handleSubmit(e:Event): void{
    e.preventDefault();

    if(inputEmail.value.length === 0){
        messageError.style.display = "block"
    }else{
        messageError.style.display = "none"
        inputEmail.value = "";
    }
}

form.addEventListener('submit', handleSubmit as (e: Event) => void);