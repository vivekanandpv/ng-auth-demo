import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NewsComponent } from './news/news.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminGuard } from './_guards/admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    component: AdminComponent,
  },
  {
    path: 'news',
    canActivate: [AuthGuard],
    component: NewsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'unauthorized',
    canActivate: [AuthGuard],
    component: UnauthorizedComponent,
  },
  {
    path: '**',
    canActivate: [AuthGuard],
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
