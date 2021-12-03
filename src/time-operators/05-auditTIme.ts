import { auditTime, fromEvent, map, tap } from "rxjs";


const click$ = fromEvent<PointerEvent>( document, 'click' );

click$.pipe(
    map( ({x, y}) => ({x, y}) ),
    tap( val => console.log('val', val) ),
    auditTime(2000)
).subscribe(console.log);