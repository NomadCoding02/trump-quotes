import './styles.css';
import createComponent from './populate.js';
import filterQuotes from './filter.js';
import { switchToNightMode, switchToDayMode } from './modes.js';

// Fetch Quotes
createComponent();

// Filter
let filterInput = document.getElementById('search');
filterInput.addEventListener('keyup', filterQuotes);

// Modes
let dayModeBtn = document.getElementById('day-mode');
dayModeBtn.addEventListener('click', switchToDayMode);

let nightModeBtn = document.getElementById('night-mode');
nightModeBtn.addEventListener('click', switchToNightMode);