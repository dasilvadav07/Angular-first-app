import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [{ path: '', component: UsersListComponent },
{ path: 'users/:userId', component: UsersDetailsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
