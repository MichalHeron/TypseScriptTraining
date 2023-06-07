{
    interface Person {
        age: number,
        name: string,
        email?: string
    }

    interface Pet {
        age: number,
        name: string,
        breed?: string
    }

    let pawel : Person = {
        name: "Pawel",
        age: 32,
        email: "pawel@kurstypescripta.pl"
    }

    let neko : {
        age: number,
        name: string,
        breed?: string
    } = {
        name: "Neko",
        age: 5,
        breed: "cat"
    }



pawel = neko 
// jest mozliwe do momentu kiedy email i breed byly opcjonalne,  poniewaz mimo roznych nazw interfaceow to wartosci zmiennych byly takie same 

}