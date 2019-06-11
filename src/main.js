import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlight', {
  bind(el, binding, vnode) {
  /* Desta maniera estamos impondo qual será a cor
    el.style.backgroundColor = 'green'; */

  /* Desta maneira, fica a disposição do usuário dizer qual a cor que ele quer
    el.style.backgroundColor = binding.value; */

  /*  /*  Desta maneira fica a disposição do usuário dizer qual a cor e o que ele quer mudar a cor. 
    Ex: passar como background o argumento  
    if(binding.arg == 'background'){
      el.style.backgroundColor = binding.value;
    }else{
      el.style.color = binding.value;
    } */

    /* Desta maneira passamos permitidos que o usuário digite o argumento (Ex:"background"), porém adicionamos
    um modificador, que caso seja chamado, haverá um delay de 3 segundos para que ocorra a alteração esperada  */
    var delay = 0;
    if (binding.modifiers ['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background'){
      el.style.backgroundColor = binding.value;
    }else{
      el.style.color = binding.value;
    }
  }, delay);
}
});

new Vue({
  render: h => h(App),
}).$mount('#app');
