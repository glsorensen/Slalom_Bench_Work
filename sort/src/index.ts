import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([100000, 3, -5, 0]);
const numberSorter = new Sorter(numberCollection)
numberSorter.sort();
console.log(numberCollection.data)

const characterCollection = new CharacterCollection('weihosdvisefgib');
const characterSorter = new Sorter(characterCollection);
characterSorter.sort();
console.log(characterCollection.data)

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(5);
linkedList.add(89);
linkedList.add(-3);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();
