import { debounceTime, fromEvent, map, mergeAll, mergeMap, Observable, pluck, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";
// References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

//Helpers
const showUsers = ( users: GithubUser[] ) => {

    orderList.innerHTML = '';
    console.log(users);

    for( const user of users ){

        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src   = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'See page';
        anchor.target = '_blank';

        li.append(img, user.login + ' ', anchor);

        orderList.append(li);

    }


}


// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    //pluck<KeyboardEvent, string>('target', 'value'),
    map<KeyboardEvent, string>(evento => evento.target['value']),
    mergeMap<string, Observable<GithubUsersResp>>( val => ajax.getJSON(`https://api.github.com/search/users?q=${ val }`)),
    // pluck<any, GithubUser[]>('items')
    map<GithubUsersResp, GithubUser[]>(item => item.items)
)//.subscribe(showUsers);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target', 'value'),
    switchMap( text => ajax.getJSON( url + text ) )
).subscribe(console.log);