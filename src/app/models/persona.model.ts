export class Persona {
    public id: number;
    public nombre: string;
    public apellidoPaterno: string;
    public apellidoMaterno: string;
    public edad: number;

    constructor(id: number, nombre: string, apellidoPaterno: string, apellidoMaterno: string, edad: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
}
