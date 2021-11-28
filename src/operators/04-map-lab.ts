import { fromEvent, map, tap } from "rxjs";

const text = document.createElement('div');
text.innerHTML =  `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta dignissim sem et eleifend. Curabitur nec rutrum nunc, sit amet volutpat tortor. Fusce posuere metus et metus sagittis, sed venenatis urna efficitur. Morbi orci magna, viverra in nibh non, semper convallis mauris. Aenean magna urna, interdum eget orci eget, consectetur porta augue. Mauris id lobortis augue. Vestibulum sed placerat urna. Quisque velit libero, dictum quis ante vel, tempor euismod est.
<br/><br/>
Sed elit purus, ultricies ut urna in, pellentesque blandit neque. Cras rutrum maximus elit, et pharetra lectus vestibulum ut. Mauris nec elit nibh. Ut at sapien et tortor imperdiet ultrices. Ut sapien libero, mattis et ultrices vitae, tristique a ligula. Maecenas aliquam est sed nibh ornare maximus. Suspendisse eros diam, pretium vel pretium a, posuere eu arcu. Suspendisse commodo mollis ante at vulputate.
<br/><br/>
Fusce vitae odio felis. Cras ac est lacinia, suscipit felis quis, rhoncus libero. Ut sollicitudin viverra augue, eu ultricies dolor interdum at. Curabitur lectus odio, mollis at arcu vitae, rutrum pulvinar libero. Praesent id varius lacus, in hendrerit tellus. Pellentesque vel dolor orci. Nullam pretium laoreet urna a euismod. Nunc et imperdiet enim. Etiam eget egestas diam. Sed laoreet sapien mollis lacus malesuada, vitae dapibus tellus elementum.
<br/><br/>
Pellentesque accumsan, purus rutrum ornare viverra, odio dui dignissim turpis, at posuere nisl odio at purus. Sed volutpat risus in neque cursus vulputate. Pellentesque varius elit consectetur, imperdiet nibh at, fringilla felis. Proin porttitor condimentum pulvinar. Morbi eu tellus tincidunt, fermentum ex id, auctor quam. Sed nec egestas dolor. Integer imperdiet diam et urna molestie imperdiet.
<br/><br/>
Donec et efficitur enim. Proin a fringilla arcu. Vivamus vel porttitor felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ut suscipit risus. Ut convallis sit amet urna nec pharetra. Maecenas sodales consequat mattis. Nulla facilisi. Mauris ac massa lacus. Donec condimentum dolor ut dolor porta vehicula. Duis eget tincidunt urna. Mauris sed egestas eros. Pellentesque laoreet tempus ornare. Phasellus facilisis commodo urna, quis facilisis est aliquet eget. Nunc iaculis, lacus non pharetra luctus, urna magna egestas tellus, vel rutrum arcu tellus a quam.`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );

// function
const calculateScrollPercentage = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
    map( calculateScrollPercentage ),
    tap( console.log )
);

progress$.subscribe( percentage => {
    progressBar.style.width = `${ percentage }%`;
} );