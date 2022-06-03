import ScrollSuave from './modules/scroll-suave.js'; // Pdser qualquer nome em 'initScrollSuave'
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
// import {teste1, teste2} from './modules/teste.js'; // Quando n tem valor default, o nome do import tem que ser exatamente igual ao da função dentro de teste.js
import * as teste from './modules/teste.js'; // Pegará todas as funções e são executadas através do alias (apelido)
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initDropdownMenu();
initMenuMobile();
initFuncionamento();
initAnimacaoScroll();

fetchAnimais('../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
