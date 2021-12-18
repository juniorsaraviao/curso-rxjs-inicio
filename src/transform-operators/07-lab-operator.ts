import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";

// Helper
const httpRequestLogin = ( userPass ) => 
ajax.post('https://reqres.in/api/login?delay=1', userPass)
.pipe(
    pluck('response', 'token'),
    catchError( err => of('xxx'))
)

// Create form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPw    = document.createElement('input');
const subtmitBtn = document.createElement('button');

// Config
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPw.type = 'password';
inputPw.placeholder = 'Password';
inputPw.value = 'cityslicka';

subtmitBtn.innerHTML = 'Submit';

form.append( inputEmail, inputPw, subtmitBtn);
document.querySelector('body').append(form);

// Streams
const submitForm$ = fromEvent<SubmitEvent>( form, 'submit' )
                    .pipe(
                        tap( ev => ev.preventDefault() ),
                        map( ev => ({
                            email: ev.target[0].value,
                            password: ev.target[1].value
                        })),
                        exhaustMap( httpRequestLogin )
                    );

submitForm$.subscribe( token => console.log(token) );