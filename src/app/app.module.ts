import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDirective } from './directives/component-show.directive';
import { ComponentsModule } from "./components/components.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowDirective,
    ComponentsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
