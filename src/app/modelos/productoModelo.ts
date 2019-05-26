import { Caracteristicas } from './productoCaracteristicasModelo';
import { Ingredientes } from './productoIngredientesModelo';
import { InformacionNutricional } from './productoInfoNutricionalModelo';
export class Producto {
    id: string;
    nombre: string;
    marca: string;
    registro: string;
    lote: string;
    fechaProduccion: Date;
    fechaAdtaConsumo: Date;
    fechaVencimiento: Date;
    contenidoNeto: string;
    volumen: string;
    unidadMedida: string;
    caracteristicas: Caracteristicas;
    ingredientes: Ingredientes[];
    infoNutricional: InformacionNutricional;

    constructor() {
        this.id= '';
        this.nombre= '';
        this.marca= '';
        this.registro= '';
        this.lote= '';
        this.fechaProduccion= new Date();
        this.fechaAdtaConsumo= new Date();
        this.fechaVencimiento= new Date();
        this.contenidoNeto= '';
        this.volumen= '';
        this.unidadMedida= '';
        this.caracteristicas= new Caracteristicas();
        this.ingredientes= [];
        this.infoNutricional= new InformacionNutricional();
    }
}