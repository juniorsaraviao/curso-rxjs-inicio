import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const number = [1,2,3,4,5];

const totalReducer = (accumulator: number, currentValue: number) => { 
    return accumulator + currentValue;
}

const total = number.reduce( totalReducer, 0 );
console.log(total);

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer, 0)
)
.subscribe({
    next: val => console.log('val', val),
    complete: () => console.log('complete')
});