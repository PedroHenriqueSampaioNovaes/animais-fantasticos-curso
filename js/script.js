import ScrollSuave from './modules/scroll-suave.js'; // Pdser qualquer nome em 'initScrollSuave'
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
// import {teste1, teste2} from './modules/teste.js'; // Quando n tem valor default, o nome do import tem que ser exatamente igual ao da função dentro de teste.js
import * as teste from './modules/teste.js'; // Pegará todas as funções e são executadas através do alias (apelido)
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
