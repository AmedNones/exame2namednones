import {inject,Getter} from '@loopback/core';
import {DefaultCrudRepository,BelongsToAccessor,repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {DetalleFactura, DetalleFacturaRelations,Factura} from '../models/';
import { FacturaRepository } from '.';

export class DetalleFacturaRepository extends DefaultCrudRepository<
  DetalleFactura,
  typeof DetalleFactura.prototype.id,
  DetalleFacturaRelations
> {

  public readonly factura: BelongsToAccessor<Factura, typeof DetalleFactura.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,@repository.getter('FacturaRepository') protected facturaRepositoryGetter: Getter<FacturaRepository>,
  ) {
    super(DetalleFactura, dataSource);
    this.factura = this.createBelongsToAccessorFor('factura', facturaRepositoryGetter,);
    this.registerInclusionResolver('factura', this.factura.inclusionResolver);
  }
}
