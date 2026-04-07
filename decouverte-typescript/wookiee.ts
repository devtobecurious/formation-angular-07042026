// class Wookiee {
//     constructor(public name: string, public age: number) {
//     }
// }

// class Wookiee {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

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

interface Wookiee {
    name: string;
    age: number;
}

const chewie: Wookiee = {
    name: 'Chewbacca',
    age: 200
}
