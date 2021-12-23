import { catchError, forkJoin, of } from "rxjs";
import { ajax } from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHU_USER = 'juniorsaraviao';

forkJoin({
    usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHU_USER}`),
    repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHU_USER}/repos`),
    gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHU_USER}/gists`),
}).pipe(
    catchError( err => of(err.message) )
).subscribe( console.log )