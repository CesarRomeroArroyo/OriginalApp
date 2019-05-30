import { Caracteristicas } from './productoCaracteristicasModelo';
import { Ingredientes } from './productoIngredientesModelo';
import { InformacionNutricional } from './productoInfoNutricionalModelo';
export class Producto {
    id: string;
    nombre: string;
    marca: string;
    registro: string;
    lote: string;
    fechaProduccion: string;
    fechaAdtaConsumo: string;
    fechaVencimiento: string;
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
        this.fechaProduccion= '';
        this.fechaAdtaConsumo= '';
        this.fechaVencimiento= '';
        this.contenidoNeto= '';
        this.volumen= '';
        this.unidadMedida= '';
        this.caracteristicas= new Caracteristicas();
        this.ingredientes= [];
        this.infoNutricional= new InformacionNutricional();
    }
}