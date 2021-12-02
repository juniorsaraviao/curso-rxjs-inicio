import { distinct, distinctUntilChanged, from, of } from "rxjs";

const number$ = of(1,1,2,3,3,4,2,5,1);

number$.pipe(
    distinctUntilChanged()
).subscribe( console.log );

interface Character {
    name: string;
}

const characters: Character[] = [
    {
        name: 'Megaman'
    },
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
    distinctUntilChanged( (x, y) => {
        console.log(`previous ${x.name} - current:, ${y.name}`)
        return x.name === y.name
    })
).subscribe( console.log ); 