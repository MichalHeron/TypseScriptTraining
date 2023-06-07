"use strict";
{
    // wszystkie dane ktore przychodza z zewnatrz powinno sie sprawdzic i do podstawowych typow uzywamy typeof
    let logical = true;
    let age = 3;
    let name = 'Pawel';
    if (typeof age === 'number') {
        console.log('Age jest liczba');
    }
    let something;
    if (typeof something === 'string') {
        something.length; //typescript mimo tego ze something jest any, to po sprawdzeniu przez typeof string, automatycznie podpowiadal po kropce something. na przyklad length traktujac to juz jak string (bo jezeli warunek zostanie spelniony to musi byc stringiem i TS to "widzi"). przyjmuje juz ze something musi byc stringiem
    }
    else if (typeof something === 'number') {
    }
    else if (typeof something === 'function') {
        something();
    }
}
