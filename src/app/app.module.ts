import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisciplineComponent } from './discipline/discipline.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [AppComponent, DashboardComponent, DisciplineComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
