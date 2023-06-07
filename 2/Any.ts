{
    let xx : any;
    xx = "Pawel";
    xx = 3;
    xx = {};
    xx = () => {};

    let xage : number = xx; //trzeba uważać ponieważ zmienną any mozemy potem przypisac do innej zmiennej ktora juz nie jest any, ale TS przyjmuje ze xx moze byc tyn numerem (mimo ze jest any)

    xx.age;  // mozna takze potraktowac go jako obiekt  (mimo to ze nim aktualnie nie jest ale moglby byc przez any)
    xx();
    //uzywajac zmiennej any to troche tak jakbysmy wylaczyli TS i uzywali czystego JS - a utworzono go po to zeby ulatwic migracje ze starego kodu JS na kod TS
}