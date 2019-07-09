import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { MoreInfoComponent } from './components/more-info/more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatButtonModule,
    HttpClientModule,
  ],
  entryComponents: [MoreInfoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
