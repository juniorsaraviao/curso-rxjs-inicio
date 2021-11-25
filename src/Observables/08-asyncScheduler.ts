import { asyncScheduler } from "rxjs";

// setTimeout( () => {}, 3000 );
// setInterval( () => {}, 3000 );

const saludar  = () => console.log('Hello World');
const saludar2 = (name) => console.log(`Hello, ${name}`);

// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Rxjs' );


const subs = asyncScheduler.schedule( function(state) {

    console.log('state', state);
    this.schedule(++state, 2000);

}, 2000, 0 );

// setTimeout( () => {
//     subs.unsubscribe();
// }, 6000 );

asyncScheduler.schedule( () => subs.unsubscribe, 6000 );