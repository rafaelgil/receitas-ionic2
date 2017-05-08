import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Receita } from "../../models/receita";
import { ListaComprasService } from "../../services/lista-components";
import { ReceitasService } from "../../services/receitas";
import { EditaReceitaPage } from "../edita-receita-page/edita-receita-page";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-receita',
  templateUrl: 'receita-page.html'
})
export class ReceitaPage implements OnInit {
    
  receita: Receita;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private listaComprasService: ListaComprasService,
              private receitasService: ReceitasService,
              public alertCtrl: AlertController) {}

  ngOnInit(): void {
      this.receita=this.navParams.get('receita');
      this.index=this.navParams.get('index');
  }

  alteraReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Altera', receita: this.receita, index: this.index})
  }

  removeReceita() {
    let confirm = this.alertCtrl.create({
      title: 'Deseja remover a receita?',
      message: 'Esta operação não pode ser desfeita!',
      buttons: [
        {
          text: 'Cancela',
          handler: () => {
            console.log('Cancelou');
          }
        },
        {
          text: 'Confirma',
          handler: () => {
            this.receitasService.removeReceita(this.index);
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    confirm.present();
  }

  adicionaIngredientes() {
    this.listaComprasService.incluiItens(this.receita.ingredientes);
    this.mensagemItensAdicionados();
  }

  mensagemItensAdicionados(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Ítens adicionados a lista de compras!',
      buttons: ['OK']
    });
    alert.present();
  }

}