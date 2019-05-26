import { Distribuidor } from './distribuidorModelo';

export class Caracteristicas {
    presentacion: string;
    contenidoNeto: string;
    tipoTratamiento: string;
    fabricante: string;
    direccionFabricante: string;
    distribuidor: Distribuidor

    constructor() {
        this.presentacion = '';
        this.contenidoNeto = '';
        this.tipoTratamiento = '';
        this.fabricante = '';
        this.direccionFabricante = '';
        this.distribuidor = {id: '', nombre:'', codigo: '', direccion: '', telefono:''};
    }
}