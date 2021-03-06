import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
	{ path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
	{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
	{ path: '', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
