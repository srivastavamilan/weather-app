import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TemperatureWidgetsComponent } from './components/temperature-widgets.component';
import { TempPipe } from './temp.pipe';

@NgModule({
  declarations: [AppComponent, TemperatureWidgetsComponent, TempPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
