import { fromEvent } from 'rxjs';

// DOM events

const src1$ = fromEvent<PointerEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer = {
    next: value => console.log('next', value)    
};

src1$.subscribe(({x, y}) => console.log(`x: ${x}, y: ${y}`));
src2$.subscribe(event => console.log(event.key));