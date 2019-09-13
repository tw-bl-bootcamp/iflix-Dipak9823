import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms'; 
import { MatButtonModule,MatInputModule,MatMenuModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatToolbarModule} from '@angular/material';
import { MatIconModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule} from '@angular/common/http';
import { RootServiceService } from './Service/root-service.service';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { MoviesComponent } from './Component/movies/movies.component';
import { TheaterComponent } from './Component/theater/theater.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    DashboardComponent,
    MoviesComponent,
    TheaterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    FlexLayoutModule,
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [RootServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
