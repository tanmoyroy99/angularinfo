import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Day2dayComponent } from './day2day.component';
 
const routes: Routes = [
    {
        path: '',
        component: Day2dayComponent
    },
    {
        path: 'test',
        component: Day2dayComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Day2dayRoutingModule {}
