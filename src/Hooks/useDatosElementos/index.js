function useDatosElementos(name, age, img){
    /* Declaracion de Programacion Orientada a Objetos */
    class Person {
        constructor(name, age, img) {
            this.name = name;
            this.age = age;
            this.avatar = img;
        }
    }
    let marco = new Person(name, age, img);
    return [marco];
}

export {useDatosElementos};