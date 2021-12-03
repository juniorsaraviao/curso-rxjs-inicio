import { throttleTime, fromEvent, pluck, distinctUntilChanged, asyncScheduler } from "rxjs";


const click$ = fromEvent<PointerEvent>( document, 'click' );

click$.pipe(
    throttleTime(1000)
); //.subscribe( console.log )

// Example 2

const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>( input, 'keyup' );

input$.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,  // first element
        trailing: true  // last element
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
).subscribe( console.log );