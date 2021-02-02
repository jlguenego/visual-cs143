import { MenuComponent } from './routes/menu/menu.component';
import { LegalComponent } from './routes/legal/legal.component';
import { HomeComponent } from './routes/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'bfs', loadChildren: () => import('./bfs/bfs.module').then(m => m.BfsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
