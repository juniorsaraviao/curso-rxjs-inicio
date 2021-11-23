import { Observable, Observer } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('next [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Complete [obs]')
}


// const obs$ = Observable.create();

const obs$ = new Observable<string>( subs => {
    subs.next('Hola')
    subs.next('Mundo')

    subs.next('Hola')
    subs.next('Mundo')
    
    //subs.error('Something went wrong')
    
    subs.complete()

    subs.next('Hola')
    subs.next('Mundo')

});


// First way
// obs$.subscribe({
//     next: valor => console.log('next: ', valor),
//     error: error => console.warn('error: ', error),
//     complete: () => console.info('Completed')
// })

// Second way
obs$.subscribe(observer);