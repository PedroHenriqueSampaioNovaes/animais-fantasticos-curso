export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAtual = new Date();
  const diaSemana = dataAtual.getDay();
  const horarioAtual = dataAtual.getHours();

  const semanaAberto = diasSemana.indexOf(diaSemana) !== -1;

  const horarioAberto =
    horarioAtual >= horarioSemana[0] && horarioAtual < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}

// Maneira mais precisa utilizando minutos
// const funcionamento = document.querySelector('[data-semana]');
// const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
// const horarioSemana = funcionamento.dataset.horario.split(',').map((hora) => +hora * 60);
// const minutos = funcionamento.dataset.minutos.split(',').map(Number);

// const dataAtual = new Date();
// const diaSemana = dataAtual.getDay();
// const horarioAtual = dataAtual.getHours() * 60 + dataAtual.getMinutes();

// const semanaAberto = diasSemana.indexOf(diaSemana) !== -1;
// const horarioAberto = (horarioAtual >= (horarioSemana[0] + minutos[0]) && horarioAtual <= (horarioSemana[1] + minutos[1]));

// if(semanaAberto && horarioAberto) {
//   funcionamento.classList.add('aberto');
// }

// const agora = new Date();
// console.log(agora.getMonth());

// const futuro = new Date('Dec 24 2022 23:59 GMT');
// console.log(futuro);

// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());
// console.log(diasFuturo - diasAgora);
