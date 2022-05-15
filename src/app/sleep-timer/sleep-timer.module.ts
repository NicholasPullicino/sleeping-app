import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleepTimerPageRoutingModule } from './sleep-timer-routing.module';

import { SleepTimerPage } from './sleep-timer.page';
import { PipesModule } from '../pipes/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    SleepTimerPageRoutingModule
  ],
  declarations: [SleepTimerPage]
})
export class SleepTimerPageModule {}
