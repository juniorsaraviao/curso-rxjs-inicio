import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

// not recommended way
// range(1, 5).subscribe(x => console.log(x*10));

// range(1, 5).pipe( 
//     map<number, number>(val => val *10)
// )
// .subscribe( console.log );

// ------------Map and Pluck------------------------------------------------------
// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
// .pipe(
//     //map<KeyboardEvent, string>( ({ code }) => code )
//     // pluck('code')
//     pluck('target', 'baseURI')
// );


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
.pipe(
    mapTo('tecla presionada')
);


keyup$.subscribe(val => console.log('mapTo', val));