{
    interface Person {
        name: string,
        age: number,
        email?: string
    }
//extends - interface Child posiada wszystkie propertisy z Person plus to co ma wpisane
    interface Child extends Person {
        favouriteColor: string;
    }

    interface Adult extends Person {
        favouriteBeverage: string;
    }

    let alicja : Child = {
        name: "Alicja",
        age: 5,
        favouriteColor: "Pink"
    }

    interface Driver {

    }

    interface CoffeeeDrinker extends Person, Adult, Driver { // lepiej podaac wszystkie wprost mimo ze adult ma wszystko z person - dla lepszej przejrzystosci

    }

}