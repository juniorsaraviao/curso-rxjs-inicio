import { debounceTime, distinct, distinctUntilChanged, fromEvent, pluck } from "rxjs";


const click$ = fromEvent<PointerEvent>( document, 'click' );

click$.pipe(
    debounceTime(1000)
); //.subscribe( console.log )

// Example 2

const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe( console.log );