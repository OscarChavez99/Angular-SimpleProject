export class ResponseModel {
    public ok: boolean;
    public datos: any;
    public mensaje: string;

    constructor(){
        this.ok = true;
        this.datos = null;
        this.mensaje = "";
    }
}
