import { AutenticacaoService } from './../services/autenticacao';
import { RegistroPage } from './../pages/registro/registro';
import { SigninPage } from './../pages/signin/signin';
import { TabsPage } from './../pages/tabs-page/tabs-page';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  isAuthenticated: boolean;
  tabsPage = TabsPage;
  signinPage = SigninPage;
  registroPage = RegistroPage;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController, 
    statusBar: StatusBar, splashScreen: SplashScreen, private autenticacaoService: AutenticacaoService) {
    
    firebase.initializeApp({
      apiKey: "AIzaSyCUU7ohf3OTXtS3kyc4T0N6dwWSbM4gSwM",
      authDomain: "receitas-963bb.firebaseapp.com",
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated=true;
        this.rootPage = TabsPage;
      } else {
        this.isAuthenticated=false;
        this.rootPage = SigninPage;
      }
    });
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.isAuthenticated=false;

  }

  carrega(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  logout() {
    this.autenticacaoService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }


}

