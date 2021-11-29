import { from } from "rxjs";
import { map, scan } from "rxjs/operators";

const number = [1,2,3,4,5];

const totalReducer = (accumulator: number, currentValue: number) => { 
    return accumulator + currentValue;
}

const total = number.reduce( totalReducer, 0 );
console.log(total);

from(number).pipe(
    scan(totalReducer, 0)
)
.subscribe({
    next: val => console.log('scan', val),
    complete: () => console.log('complete')
});

// Redux
interface User {
    id?: string,
    authenticated?: boolean,
    toke?: string,
    age?: number
}

const user: User[] = [
    { id: 'asdx', authenticated: false, toke: null },
    { id: 'asdx', authenticated: true, toke: 'ABC' },
    { id: 'asdx', authenticated: true, toke: 'ABC123' }
]

const state$ = from( user ).pipe(
    scan<User, User>( (acc: any, cur: any) => {
        return { ...acc, ...cur }
    }, { age: 33 } )
);

const id$ = state$.pipe(
    map( state => state )
)

id$.subscribe( console.log );