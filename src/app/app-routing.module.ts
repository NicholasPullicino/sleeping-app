import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'journal',
    loadChildren: () => import('./journal/journal.module').then( m => m.JournalPageModule)
  },
  {
    path: 'sleep-timer',
    loadChildren: () => import('./sleep-timer/sleep-timer.module').then( m => m.SleepTimerPageModule)
  },
  {
    path: 'themes',
    loadChildren: () => import('./themes/themes.module').then( m => m.ThemesPageModule)
  },
  {
    path: 'sleep-timer',
    loadChildren: () => import('./sleep-timer/sleep-timer.module').then( m => m.SleepTimerPageModule)
  },
  {
    path: 'journal-entry',
    loadChildren: () => import('./journal-entry/journal-entry.module').then( m => m.JournalEntryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
