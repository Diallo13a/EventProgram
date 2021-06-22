import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ThematiqueComponent } from './thematique/thematique.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { NotificationComponent } from './notification/notification.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    ThematiqueComponent,
    QrcodeComponent,
    NotificationComponent,
    ConnexionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
