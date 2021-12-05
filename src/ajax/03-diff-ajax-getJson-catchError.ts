import { catchError, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://httpbinAXX.org/delay/1';
//const url = 'https://api.github.com/users?per_page=5';

const manageError = ( resp: AjaxError ) => {
    console.warn('error:', resp.message);
    return of({
        ok: false,
        users: []
    });
}

// const obs$  = ajax.getJSON( url ).pipe( catchError(manageError) );
// const obs2$ = ajax( url ).pipe( catchError(manageError) );

const obs$  = ajax.getJSON( url );
const obs2$ = ajax( url );

obs$.pipe(
    catchError( manageError )
).subscribe( {
    next: data => console.log('next', data),
    error: error => console.warn('error in subs', error ),
    complete: () => console.log('completed')
} );
// obs2$.subscribe( data => console.log('ajax', data) );