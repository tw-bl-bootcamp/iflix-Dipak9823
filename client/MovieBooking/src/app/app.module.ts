import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule} from '@angular/forms'; 
import { MatButtonModule,MatInputModule,MatMenuModule,MatSidenavModule,MatCardModule,MatFormFieldModule,MatLabel} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
