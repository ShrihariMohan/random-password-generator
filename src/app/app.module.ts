import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordViewerComponent } from '../components/password-viewer/password-viewer.component';
import { ButtonComponent } from '../components/ui/button/button.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from '../components/form/text-input/text-input.component';
import { CheckboxInputComponent } from '../components/form/checkbox-input/checkbox-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from '../components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PasswordViewerComponent,
    ButtonComponent,
    TextInputComponent,
    CheckboxInputComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClipboardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
