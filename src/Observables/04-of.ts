import { of } from 'rxjs';

// const of$ = of(1,2,3,4,5,6);
// const of$ = of(...[1,2,3,4,5,6],10,7,8,9);
const of$ = of([1,2], {a:1, b:2}, function(){}, Promise.resolve(true))

console.log('Inicio del Obs$')
of$.subscribe({
    next: next => console.log('next', next),
    error: null,
    complete: () => console.log('completed')
});
console.log('Fin del Obs$')
