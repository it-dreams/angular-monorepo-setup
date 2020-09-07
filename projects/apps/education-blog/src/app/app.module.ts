import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiKitModule } from 'projects/libs/ui-kit/src/lib/ui-kit.module';
import { UiTypesModule } from 'projects/libs/ui-types/src/lib/ui-types.module';
import { BackendModule } from 'projects/libs/backend/src/lib/backend.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiKitModule,
    UiTypesModule,
    BackendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
