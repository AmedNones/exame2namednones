import {inject,Getter} from '@loopback/core';
import {DefaultCrudRepository,repository,BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Producto, ProductoRelations,DetalleFactura} from '../models';
import { DetalleFacturaRepository } from '.';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {

  public readonly detalleFactura: BelongsToAccessor<DetalleFactura, typeof Producto.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,@repository.getter('DetalleFacturaRepository') protected detalleFacturaRepositoryGetter: Getter<DetalleFacturaRepository>,
  ) {
    super(Producto, dataSource);
    this.detalleFactura = this.createBelongsToAccessorFor('detalleFactura', detalleFacturaRepositoryGetter,);
    this.registerInclusionResolver('detalleFactura', this.detalleFactura.inclusionResolver);
  }
}
