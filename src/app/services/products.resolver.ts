import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot, Router } from "@angular/router";
import { ProductsService } from "./products.service";
import { inject } from "@angular/core";
import { IProducts } from "../models/products";
import { EMPTY, Observable, catchError} from "rxjs";


export const ProductsResolver: ResolveFn<IProducts> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProducts> => {
  const rout = new Router()
  return inject(ProductsService).getProduct(route.params?.['id']).pipe(
    catchError((err) => {
      rout.navigate(['products'])
      return EMPTY
    })
  )
}
