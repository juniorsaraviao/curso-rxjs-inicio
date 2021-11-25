// interval and timer are async
import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    complete: () => console.log('completed')
}

const today = new Date();
today.setSeconds( today.getSeconds() + 5 );

const obs$ = interval(1000);
const tim$ = timer(today);
//const tim$ = timer(2000, 1000); // init after 2s and continue emiting values after 1s
console.log('Inicio')
// obs$.subscribe(observer);
tim$.subscribe(observer);
console.log('Fin')