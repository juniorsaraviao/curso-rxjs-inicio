import { map, range, tap } from "rxjs";

const numbers$ = range(1, 5);

numbers$.pipe(
    tap( x => console.log('double', x*2) ),
    map( val => val * 10 ),
    tap( {
        next: value => console.log('after', value),
        complete: () => console.log('Completed')
    } )
)
.subscribe(val => console.log('val', val));