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
  {
    path: 'bfs2',
    loadChildren: () => import('./bfs2/bfs2.module').then((m) => m.Bfs2Module),
  },
  {
    path: 'bfs3',
    loadChildren: () => import('./bfs3/bfs3.module').then((m) => m.Bfs3Module),
  },
  {
    path: 'bfs-perf-issue',
    loadChildren: () =>
      import('./bfs-perf-issue/bfs-perf-issue.module').then(
        (m) => m.BfsPerfIssueModule
      ),
  },
  {
    path: 'dfs1',
    loadChildren: () => import('./dfs1/dfs1.module').then((m) => m.Dfs1Module),
  },
  { path: 'dfs-better-than-bfs', loadChildren: () => import('./dfs-better-than-bfs/dfs-better-than-bfs.module').then(m => m.DfsBetterThanBfsModule) },
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
