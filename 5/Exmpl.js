"use strict";
{
    //w <> oznaczamy typy generyczne. X jest parametrem ale nie dla funkcji a dla typu. w zaleznosci co podamy w wywolaniu. 
    //ten sam tak jakby typ WrapType o innym parametrze, czyli juz inny typ //??
    let age = { value: 5 };
    let pawel = { value: "pawel" };
    function wrap(x) {
        return {
            value: x
        };
    }
    const x = wrap(5);
    wrap("pawel");
    const p = wrap({ name: "pawel", age: 32 });
}
