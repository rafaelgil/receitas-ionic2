import { ReceitasPage } from './../receitas/receitas';
import { ListaComprasPage } from './../lista-compras/lista-compras';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs-page.html'
})
export class TabsPage {

  listaComprasPage = ListaComprasPage;
  receitasPage = ReceitasPage;

}