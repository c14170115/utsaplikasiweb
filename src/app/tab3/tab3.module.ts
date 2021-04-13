import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    BrowserModule,
    MbscModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
    AngularFireModule, initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireStorageModule
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [
    Tab3Page,
    AppComponent
  ]
  bootstrap: [AppComponent]
})
export class Tab3PageModule {}
