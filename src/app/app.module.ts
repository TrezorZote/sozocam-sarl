import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; /* for animations*/
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { SignUpStepOneComponent } from './sign-up-step-1/sign-up-step-one/sign-up-step-one.component';
import { SignUpStepTwoComponent } from './sign-up-step-2/sign-up-step-two/sign-up-step-two.component';
import { SignUpStepThreeComponent } from './sign-up-step-3/sign-up-step-three/sign-up-step-three.component';
import { AccountProfileComponent } from './Account-profile/account-profile/account-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, NgModel } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { BasketComponent } from './basket/basket.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './About/about.component';
import { AccountInfoComponent } from './account-info/account-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpStepOneComponent,
    SignUpStepTwoComponent,
    SignUpStepThreeComponent,
    AccountProfileComponent,
    OrdersComponent,
    BasketComponent,
    EventComponent,
    AboutComponent,
    AccountInfoComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,BrowserAnimationsModule  //import appRoutingModules so this module could be used her
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
