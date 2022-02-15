import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } 
from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DoctorCardComponent } from './components/doctorCard/doctorCard.component';
import { ParentComponent } from './components/parent/parent.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    DoctorCardComponent,
    AppComponent,
    ParentComponent,
    SignInComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
