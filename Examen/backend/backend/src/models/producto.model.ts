import {Entity, model, property, belongsTo} from '@loopback/repository';
import { DetalleFactura } from './detalle-factura.model';


@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  unidad: string;

  @property({
    type: 'string',
    required: true,
  })
  categoria: string;
  
  @belongsTo(() => DetalleFactura)
  detallefacturaId: string;


  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;

