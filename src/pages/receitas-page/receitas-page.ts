import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Receita } from "../../models/receita";
import { ReceitasService } from "../../services/receitas";
import { EditaReceitaPage } from "../edita-receita-page/edita-receita-page";
import { ReceitaPage } from "../receita-page/receita-page";

@Component({
  selector: 'page-receitas',
  templateUrl: 'receitas-page.html'
})
export class ReceitasPage {

  receitas: Receita[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, private receitaService: ReceitasService) {
    
  }

  ionViewWillEnter() {
    this.receitas = this.receitaService.getReceitas();
  }

  novaReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Nova'});
  }

  carregaReceita(receita: Receita, index: number) {
    this.navCtrl.push(ReceitaPage, {receita: receita, index: index});
  }
}