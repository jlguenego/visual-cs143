import { WidgetModule } from './../widget/widget.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ll1RoutingModule } from './ll1-routing.module';
import { Ll1Component } from './ll1.component';

@NgModule({
  declarations: [Ll1Component],
  imports: [CommonModule, Ll1RoutingModule, WidgetModule],
})
export class Ll1Module {}
