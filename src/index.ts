import { distinct, distinctUntilChanged, from, of } from "rxjs";
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