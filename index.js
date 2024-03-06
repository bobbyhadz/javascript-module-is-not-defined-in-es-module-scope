// Module is not defined in ES module scope in JavaScript
import {sum} from './another-file.js';
import _ from 'lodash';

console.log(sum(15, 13));

console.log(_.add(5, 15));
