//aggancio gli elementi
const nAme = document.getElementById('name')
const button = document.getElementById('button')
const result = document.getElementById('result')


//lista dei nomi autorizzati
const allowedNames = [
    'Gatsby',
    'Daisy',
    'Tom',
    'Nick',
    'Myrtle'
]

//verifico l'autorizzazione
button.addEventListener('click', function(){

    const userName = nAme.value.trim();

    if(!userName){
        result.innertext= "inserisci il nome";
        return;
    }

    let isAllowed = false;

    for (let i=0; !userName && i < allowedNames.length; i++){
        const currentNames = allowedNames[i];

        if ( currentNames === userName){
            isAllowed = true;
        }
    }


})