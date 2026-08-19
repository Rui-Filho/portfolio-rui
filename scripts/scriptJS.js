/* Configuração Email-JS    */

/* CÓDIGO PARA ENVIAR O FORMULÁRIO DE MENSAGEM AO email*/

const PUBLIC_KEY = "IgLsAPLIkNqUNs2w1"
const SERVICE_ID = "service_zwkbrki"
const TEMPLATE_ID = "template_wmh5xqh"


const form = document.querySelector('#form-contato');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    

emailjs.init({
    publicKey: PUBLIC_KEY,
});

emailjs.sendForm(SERVICE_ID,TEMPLATE_ID, form)
.then((response) => alert("Mensagem enviada com sucesso!"))
.catch((error) => {
    console.log(error);
    alert("Ocorreu um erro com o envio de seu e-mail")
     });

});
