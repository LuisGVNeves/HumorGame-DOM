// # Assim que a página carregar, inicia o código
window.addEventListener('load', () => {
  
  // # Gifs e Descrição do gif
  let gifUm = document.querySelector('#gif-Um');
  let descricaoUm = document.querySelector('#descricao-um');
  
  let gifDois = document.querySelector('#gif-Dois');
  let descricaoDois = document.querySelector('#descricao-dois');
  
  let gifTres = document.querySelector('#gif-Tres');
  let descricaoTres = document.querySelector('#descricao-tres');
  
  let gifQuatro = document.querySelector('#gif-Quatro');
  let descricaoQuatro = document.querySelector('#descricao-quatro');
  
  let gifCinco = document.querySelector('#gif-Cinco');
  let descricaoCinco = document.querySelector('#descricao-cinco');
  
  let gifSeis = document.querySelector('#gif-Seis');
  let descricaoSeis = document.querySelector('#descricao-seis');
  
  let gifSete = document.querySelector('#gif-Sete');
  let descricaoSete = document.querySelector('#descricao-sete');


  // # Contagem número de vezes que botão vai ser clicado
  let contador = 1;
  
  // # Botão
  const btnAlterarHumor = document.querySelector('#btnHumor');
  

  /*
    # Cada vez que o botão é clicado, contador incrementa, se contador for igual a x numero
    eu adiciono a classe .hidden no css, que faz sumir o gif com o display none.
    - Quando chegar ao limite de gifs, eu seto o contador pra 1 para que simule um "loop"
  */
  btnAlterarHumor.addEventListener('click', function(){

    contador++;

    if(contador == 1){
      gifUm.classList.remove('hidden');
      descricaoUm.classList.remove('hidden');
    }
    if(contador == 2){
      gifUm.classList.add('hidden');
      descricaoUm.classList.add('hidden');
      
      gifDois.classList.remove('hidden');
      descricaoDois.classList.remove('hidden');
    }
    if(contador == 3){
      gifDois.classList.add('hidden');
      descricaoDois.classList.add('hidden');

      gifTres.classList.remove('hidden');
      descricaoTres.classList.remove('hidden');
    }
    if(contador == 4){
      gifTres.classList.add('hidden');
      descricaoTres.classList.add('hidden');

      gifQuatro.classList.remove('hidden');
      descricaoQuatro.classList.remove('hidden');
    }
    if(contador == 5){
      gifQuatro.classList.add('hidden');
      descricaoQuatro.classList.add('hidden');

      gifCinco.classList.remove('hidden');
      descricaoCinco.classList.remove('hidden');
    }
    if(contador == 6){
      gifCinco.classList.add('hidden');
      descricaoCinco.classList.add('hidden');

      gifSeis.classList.remove('hidden');
      descricaoSeis.classList.remove('hidden');
    }
    if(contador == 7){
      gifSeis.classList.add('hidden');
      descricaoSeis.classList.add('hidden');

      gifSete.classList.remove('hidden');
      descricaoSete.classList.remove('hidden');
      
    }
    if(contador == 8){
      gifSete.classList.add('hidden');
      descricaoSete.classList.add('hidden');
      
      gifUm.classList.remove('hidden');
      descricaoUm.classList.remove('hidden');

      contador = 1;
    }
    
  })
});