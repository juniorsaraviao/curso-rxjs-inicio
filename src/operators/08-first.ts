import { fromEvent } from 'rxjs';
import { first, take, tap } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent>( document, 'click' );


click$.pipe(
    tap(event => console.log(event.clientY)),
    first(event => event.clientY >= 150 )
)
.subscribe( {
    next: val => console.log('val', val),
    complete: () => console.log('completed')
} )