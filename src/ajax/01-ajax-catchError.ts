import { catchError, map, of, pluck } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';

const url = 'https://api.github.com/userXXXXs?per_page=5';

const handleError  = ( response: Response ) => {
    if( !response.ok ){
        throw new Error( response.statusText );
    }

    return response;

} 

const catchErrors = (error: AjaxError) => {
    console.warn('error in:', error.message);
    return of([]);
}

const fetchPromise = fetch(url);

// Previous review
// fetchPromise
//     .then( handleError )
//     .then( resp => resp.json() )
//     .then( console.log )
//     .catch( err => console.warn( err ) );

ajax( url ).pipe(
    //map( res => res.response )
    pluck( 'response' ),
    catchError( catchErrors )
).subscribe( users => console.log('users', users) )