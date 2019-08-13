import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//RUTAS
import { appRoutingModule } from './app-routing.module';

//COMPONENTES
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './pages/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule // PERMITE REALIZAR PETICIONES GET, PUT, DELETE, ETC A SERVICDORES REST POR EJEMPLO
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
