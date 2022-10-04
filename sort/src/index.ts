import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';

const numberCollection = new NumberCollection([100000, 3, -5, 0]);
const numberSorter = new Sorter(numberCollection)
numberSorter.sort();
console.log(numberCollection.data)

const characterCollection = new CharacterCollection('weihosdvisefgib');
const characterSorter = new Sorter(characterCollection);
characterSorter.sort();
console.log(characterCollection.data)
