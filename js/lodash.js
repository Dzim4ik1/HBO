import { data  } from "./data.js";
import pkg from 'lodash';
const { orderBy } = pkg;

//lodash

const filmByYear = orderBy(data, ['year'],['asc'])
console.log(filmByYear);

// если проверять через  node ./js/lodash.js , то работает
