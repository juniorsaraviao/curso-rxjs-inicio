import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completed')
}

const interval$ = new Observable( subs => {

    const intervalId = setInterval( 
        () => subs.next( Math.random() ), 1000 );

    return () => { 
        clearInterval( intervalId );
        console.log('Destroy interval'); 
    };

} ); 

// 1- Casteo múltiple
// 2- Tambien es observer
// 3- Next, error and complete

// Subject is an observable but also an observer
const subject$ = new Subject();

const subscription = interval$.subscribe( subject$ );

// const subs1 = interval$.subscribe( num => console.log('subs1', num) );
// const subs2 = interval$.subscribe( num => console.log('subs2', num) );

const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

setTimeout( () => {

    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();

}, 3500 )