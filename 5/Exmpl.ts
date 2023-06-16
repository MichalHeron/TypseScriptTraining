{
interface WrapType<X> {
    value: X
}
//w <> oznaczamy typy generyczne. X jest parametrem ale nie dla funkcji a dla typu. w zaleznosci co podamy w wywolaniu. 
//ten sam tak jakby typ WrapType o innym parametrze, czyli juz inny typ //??
let age : WrapType<number> = { value: 5 };
let pawel : WrapType<string> = { value: "pawel" }

function wrap<FooBar>(x : FooBar) : WrapType<FooBar> {
    return {
        value: x
    }
}

const x : WrapType<number> = wrap<number>(5);
wrap<string>("pawel");

interface Person {
    age: number,
    name: string,
    email?: string
}

const p : WrapType<Person> = wrap<Person>({name: "pawel", age: 32});

}