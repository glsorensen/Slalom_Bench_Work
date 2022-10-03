import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';

const numberCollection = new NumberCollection([100000, 3, -5, 0]);
const sorter = new Sorter(numberCollection)
sorter.sort();
console.log(numberCollection.data)