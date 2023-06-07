"use strict";
{
    let pawel = {
        name: "Pawel",
        age: 32,
        email: "pawel@kurstypescripta.pl"
    };
    let neko = {
        name: "Neko",
        age: 5,
        breed: "cat"
    };
    pawel = neko;
    // jest mozliwe do momentu kiedy email i breed byly opcjonalne,  poniewaz mimo roznych nazw interfaceow to wartosci zmiennych byly takie same 
}
