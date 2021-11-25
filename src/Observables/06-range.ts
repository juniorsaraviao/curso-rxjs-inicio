import { SchedulerLike, observeOn, of, range, asyncScheduler } from 'rxjs';

// const src$ = of(1,2,3,4,5);
// const src$ = range(1, 5, asyncScheduler);
const src$ = range(1, 5).pipe(observeOn(asyncScheduler));

console.log('Inicio');
src$.subscribe(console.log);
console.log('Fin');