// class Wookiee {
//     constructor(public name: string, public age: number) {
//     }
// }

class Ship {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Wookiee {
    name: string;
    age: number;

    ship: Ship; // = new Ship('Millennium Falcon');

    constructor(name: string, age: number, ship: Ship) {
        this.name = name;
        this.age = age;
        this.ship = ship;
    }
}

const chewie = new Wookiee('Chewbacca', 200, new Ship('Millennium Falcon'));

// const chewie = new Wookiee('Chewbacca', 200);
// console.log(chewie.name);
// console.log(chewie.age);


// interface CanRoar {
//     roar(): void;
// }

// class Wookiee implements CanRoar {
//     constructor(public name: string, public age: number) {
//     }
//     roar(): void {
//         throw new Error("Method not implemented.");
//     }
// }

// interface Wookiee {
//     name: string;
//     age: number;
// }

// const chewie: Wookiee = {
//     name: 'Chewbacca',
//     age: 200
// }
