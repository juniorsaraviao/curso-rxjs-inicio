import { of, from } from "rxjs";

const observer = {
    next: value => console.log('next:', value),
    complete: () => console.log('completed')
}

const miGenerator = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerator();

// for(let id of miIterable){
//     console.log(id);
// }

from(miIterable).subscribe(observer);


// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);

// const source$ = from('rxjs');

//-----------------FETCH--------------------------------------------
// const source$ = from( fetch('https://api.github.com/users/klerith') );

// source$.subscribe( async(resp) => {
//     console.log(resp.ok);

//     const dataResp = await resp.json();
//     console.log(dataResp);

// } );

// source$.subscribe( observer );