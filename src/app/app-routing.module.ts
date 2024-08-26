import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in/sign-in.component';
import { SignUpStepOneComponent } from './sign-up-step-1/sign-up-step-one/sign-up-step-one.component';
import { AccountProfileComponent } from './Account-profile/account-profile/account-profile.component';
import { SignUpStepTwoComponent } from './sign-up-step-2/sign-up-step-two/sign-up-step-two.component';
import { SignUpStepThreeComponent } from './sign-up-step-3/sign-up-step-three/sign-up-step-three.component';
import { AuthGuard } from './authentguards/auth.guard';
import { OrdersComponent } from './orders/orders.component';
import { BasketComponent } from './basket/basket.component';
import { EventComponent } from './event/event.component';
import { AboutComponent} from './About/about.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { TicketingComponent } from './ticketing/ticketing.component';
import { PayComponent } from './pay/pay.component';
import { FilterComponent } from './filter/filter.component';
import { EditComponent } from './edit/edit.component';

//this module specifies routing paths used in the app.modules file 

/* canActivate property with the Authguard component 
used to prevent routing to the url if user is not logged in see authentguards */

/*Nested Routes (for orderscomponent and basketComponent): Defined under the "children property" in your route configuration.
 These routes will be rendered within the <router-outlet> of their parent component (profile). */

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up-step1', component: SignUpStepOneComponent },
  { path: 'sign-up-step2', component: SignUpStepTwoComponent },
  { path: 'sign-up-step3', component: SignUpStepThreeComponent },
  { path: 'profile', component: AccountProfileComponent,canActivate: [AuthGuard], children: [
    { path: 'orders', component: OrdersComponent,canActivate: [AuthGuard] }, { path: 'account-info', component: AccountInfoComponent,canActivate: [AuthGuard]},
    { path: 'basket', component: BasketComponent,canActivate: [AuthGuard]}, { path: 'pay', component: PayComponent,canActivate: [AuthGuard]}, { path: 'filter', component: FilterComponent,canActivate: [AuthGuard]},
     { path: 'edit', component: EditComponent,canActivate: [AuthGuard]},{ path: 'ticket', component: TicketingComponent,canActivate: [AuthGuard] },{ path: 'event', component: EventComponent,canActivate: [AuthGuard] }
  ]},
  {path:'about',component:AboutComponent},
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
