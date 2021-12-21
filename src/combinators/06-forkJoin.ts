import { delay, forkJoin, interval, of, take } from "rxjs";

const number$   = of(1,2,3,4);
const interval$ = interval(1000).pipe( take(3) );
const letters$  = of('a','b','c').pipe( delay(3500) );

// forkJoin( [ number$, interval$, letters$ ] ).subscribe( console.log );

// forkJoin( [ number$, interval$, letters$ ] ).subscribe( resp => {
//     console.log('numbers: ', resp[0]),
//     console.log('interval: ', resp[1]),
//     console.log('letters: ', resp[2])
// } );

// forkJoin( {number$, interval$, letters$} ).subscribe( resp =>
//     console.log(resp.letters$)
// );

forkJoin( {num: number$, int: interval$, let: letters$} ).subscribe( resp =>
    console.log(resp.num)
);