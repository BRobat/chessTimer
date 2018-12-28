import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'timer', pathMatch: 'full' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'timer', loadChildren: './timer/timer.module#TimerPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
