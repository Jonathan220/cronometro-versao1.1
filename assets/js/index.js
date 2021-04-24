function acionarRelogio(){
    const relogioTexto = document.querySelector('.relogio-texto');
    let timer;
    let segundos = 0;

    document.addEventListener('click', (event)=>{
        const el = event.target;
        
        if(el.classList.contains('iniciar')){
            relogioTexto.classList.remove('pausado');
            iniciarRelogio();
        }

        if(el.classList.contains('pausar')){
            clearInterval(timer);
            relogioTexto.classList.add('pausado');
        }

        if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogioTexto.classList.remove('pausado');
            segundos = 0;
            relogioTexto.innerHTML = getSecondsFromHours(segundos);
        }
    })

    //converte segundos em milisegundos, que é o valor reconhecido pelo date
    function getSecondsFromHours(seconds){
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    function iniciarRelogio(){
        timer = setInterval(()=>{
            segundos++;
            relogioTexto.innerHTML = getSecondsFromHours(segundos);
        }, 1000);
    }
}

acionarRelogio();