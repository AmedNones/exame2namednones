import {Entity, model, property, hasMany} from '@loopback/repository';
import { DetalleFactura } from './detalle-factura.model';


@model({settings: {strict: false}})

export class Factura extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;


  @property({
    type: 'number',
    required: true,
  })
  rtn: number;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  cliente?: string;


  @hasMany(() => DetalleFactura)
  detalleFacturas: DetalleFactura[];


  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;

