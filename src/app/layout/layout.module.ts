import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';

import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule, MatPaginatorModule, MatSortModule } from '@angular/material';


import { TranslateModule } from '@ngx-translate/core';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { Day2dayinfoComponent } from './day2dayinfo/day2dayinfo.component';
//import { Day2dayComponent } from './day2day/day2day.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule
    ],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent, Day2dayinfoComponent]
})
export class LayoutModule {}
