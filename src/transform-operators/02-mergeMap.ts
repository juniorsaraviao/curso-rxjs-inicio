import { map, take, takeUntil } from 'rxjs/operators';
import { fromEvent, interval } from "rxjs";
import { mergeMap, of } from "rxjs";

// const letter$ = of('a', 'b', 'c');

// letter$.pipe(
//     mergeMap( (letter) => interval(1000).pipe(
//         map( i =>  letter + i),
//         take(3)
//     ) )
// ).subscribe({
//     next: val => console.log('next', val),
//     complete: () => console.log('completed')
// });

const mouseDown$ = fromEvent( document, 'mousedown' );
const mouseUp$ = fromEvent( document, 'mouseup' );
const interval$ = interval();

mouseDown$.pipe(
    mergeMap( () => interval$.pipe( 
        takeUntil(mouseUp$)
     ) )
).subscribe( console.log )