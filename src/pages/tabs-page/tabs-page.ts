import { ReceitasPage } from './../receitas-page/receitas-page';
import { ListaComprasPage } from './../lista-compras-page/lista-compras-page';
import { Component } from '@angular/core';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs-page.html'
})
export class TabsPage {

  listaComprasPage = ListaComprasPage;
  receitasPage = ReceitasPage;

}