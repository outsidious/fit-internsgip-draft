import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentModule } from './modules/parent/parent.module';
import { ServiceService } from './services/service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ParentModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
