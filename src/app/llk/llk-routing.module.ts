import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LlkComponent } from './llk.component';

const routes: Routes = [{ path: '', component: LlkComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LlkRoutingModule { }
