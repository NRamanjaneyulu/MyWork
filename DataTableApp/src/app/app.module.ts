import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from './material/material.module';
import { MatSelectModule } from '@angular/material/select';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {UserService} from './services/user.service';
import {ExportExcelService} from './services/export-excel.service';
import {ErrorDetailsService} from './services/error-details.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSelectModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService,ExportExcelService,ErrorDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
