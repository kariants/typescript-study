import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';


const numbersCollection = new NumbersCollection([10, 3, -5, 0, 1])
numbersCollection.sort();
console.log(numbersCollection.data);


const charactersCollection = new CharactersCollection("Xaaybsjg");
charactersCollection.sort();
console.log(charactersCollection.data);


const linkedList = new LinkedList();
linkedList.add(55);
linkedList.add(-3);
linkedList.add(-10);
linkedList.add(5);
linkedList.add(33);
linkedList.add(100);

linkedList.sort();
linkedList.print();