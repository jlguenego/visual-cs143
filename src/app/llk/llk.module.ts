import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LlkRoutingModule } from './llk-routing.module';
import { LlkComponent } from './llk.component';

@NgModule({
  declarations: [LlkComponent],
  imports: [CommonModule, LlkRoutingModule, WidgetModule],
})
export class LlkModule {}
