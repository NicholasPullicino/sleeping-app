import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}