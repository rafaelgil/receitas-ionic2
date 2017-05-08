import { ListaComprasService } from './../../services/lista-components';
import { Ingrediente } from './../../models/ingrediente';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-lista-compras',
  templateUrl: 'lista-compras-page.html'
})
export class ListaComprasPage {

  listaItens : Ingrediente[];

  constructor(private listaComprasService: ListaComprasService) {}

  incluiItem(form: NgForm) {
    this.listaComprasService.incluiItem(form.value.nomeIngrediente, form.value.qtdeIngrediente);
    this.carregaItens();
    form.reset();

  }
  
  ionViewWillEnter(){
    this.carregaItens();
  }

  carregaItens(){
    this.listaItens = this.listaComprasService.getItens();
  }

  verificaItem(index: number) {
    this.listaComprasService.removeItem(index);
    this.carregaItens();
  }

}