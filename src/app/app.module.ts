import { SigninPage } from './../pages/signin/signin';
import { RegistroPage } from './../pages/registro/registro';
import { ReceitasService } from './../services/receitas';
import { ListaComprasService } from './../services/lista-components';
import { ListaComprasPage } from './../pages/lista-compras-page/lista-compras-page';
import { ReceitaPage } from './../pages/receita-page/receita-page';
import { ReceitasPage } from './../pages/receitas-page/receitas-page';
import { TabsPage } from './../pages/tabs-page/tabs-page';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AutenticacaoService } from './../services/autenticacao';

import { MyApp } from './app.component';
import { EditaReceitaPage } from "../pages/edita-receita-page/edita-receita-page";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ReceitasPage,
    ReceitaPage,
    ListaComprasPage,
    EditaReceitaPage,
    RegistroPage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ReceitasPage,
    ReceitaPage,
    ListaComprasPage,
    EditaReceitaPage,
    RegistroPage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaComprasService,
    ReceitasService,
    AutenticacaoService
  ]
})
export class AppModule {}
