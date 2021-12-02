import { distinct, from, of } from "rxjs";

const number$ = of(1,1,2,3,3,4,2,5,1);

number$.pipe(
    distinct()
).subscribe( console.log );

interface Character {
    name: string;
}

const characters: Character[] = [
    {
        name: 'Megaman'
    },
    {
        name: 'X'
    },
    {
        name: 'Zero'
    },
    {
        name: 'Dr. Willy'
    },
    {
        name: 'X'
    },
    {
        name: 'Megaman'
    },
    {
        name: 'Zero'
    }
]

from( characters ).pipe(
    distinct( p => p.name )
).subscribe( console.log ); 