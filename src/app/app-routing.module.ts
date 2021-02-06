import { MenuComponent } from './routes/menu/menu.component';
import { LegalComponent } from './routes/legal/legal.component';
import { HomeComponent } from './routes/home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'menu', component: MenuComponent },
  {
    path: 'bfs',
    loadChildren: () => import('./bfs/bfs.module').then((m) => m.BfsModule),
  },
  {
    path: 'bfs1',
    loadChildren: () => import('./bfs1/bfs1.module').then((m) => m.Bfs1Module),
  },
  { path: 'bfs2', loadChildren: () => import('./bfs2/bfs2.module').then(m => m.Bfs2Module) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
