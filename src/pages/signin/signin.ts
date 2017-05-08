import { AutenticacaoService } from './../../services/autenticacao';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the Signin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public autenticacaoService:AutenticacaoService, public alertCtrl:AlertController,
      public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signin');
  }

   signin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Fazendo o login'
    });
    loading.present();
    this.autenticacaoService.signin(form.value.email, form.value.senha)
      .then(data => {
        loading.dismiss();
        })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Falha no login',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });
  }

}
