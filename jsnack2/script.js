//aggancio gli elementi
const accesso = document.getElementById('name')
const button = document.getElementById('button')
const result = document.getElementById('result')


//lista dei nomi autorizzati
const allowedNames = [
    'Gatsby',
    'Daisy',
    'Tom',
    'Nick',
    'Myrtle'
];

//verifico l'autorizzazione
button.addEventListener('click', function(){

    const userName = accesso.value.trim();

    if(!userName){
        result.innerText = "inserisci il nome";
        return;
    }

    let isAllowed = false;

    for (let i = 0; !isAllowed && i < allowedNames.length; i++){
        const currentNames = allowedNames[i];
        console.log(currentNames, userName);

        if ( currentNames === userName){
            isAllowed = true;
        }
    }
    result.innerText = isAllowed ? "Benvenuto alla festa!" : "Spiacente, non sei stato invitato."

})