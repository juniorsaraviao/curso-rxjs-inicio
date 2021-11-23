import { Observable, Observer } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('completed')
}


const intervalo$ = new Observable<number>( subs => {
    let count = 0;
    const interval = setInterval( () =>  {
        subs.next(++count)
        console.log(count)
    }, 1000);

    setTimeout( () => {
        subs.complete();
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log('Destroy Interval');
    }
} );

const subscription1 = intervalo$.subscribe( observer );
const subscription2 = intervalo$.subscribe( observer );
const subscription3 = intervalo$.subscribe( observer );

// link child subscriptions
subscription1.add(subscription2);
subscription2.add(subscription3)

setTimeout( () => {

    // unsubscribe executes the code in return
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Complete timeout')
}, 6000);