import { of, range } from "rxjs";
import { filter, map } from "rxjs/operators";

range(1, 10).pipe(
    filter( (x, index) => {
        console.log('index', index);
        return x % 2 === 1;
    })
).subscribe(value => console.log('value', value));

interface Character {
    type: string,
    name: string
}

const characters: Character[] = [
    {
        type: 'heroe',
        name: 'Batman'
    },
    {
        type: 'heroe',
        name: 'Robin'
    },
    {
        type: 'villain',
        name: 'Batman'
    }
];

// Challenge
of(...characters).pipe(
    filter( val => val.type === 'heroe' ),
    map(val => val.name)
).subscribe(character => console.log('heroe', character));
