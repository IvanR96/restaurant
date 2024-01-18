import _ from 'lodash';
import './style.css';
import { createTabContent1 } from './homeMod.js';
import { createTabContent2 } from './tab2.js';

createTabContent1();
createTabContent2();

document.body.appendChild(createTabContent1());
document.body.appendChild(createTabContent2());

