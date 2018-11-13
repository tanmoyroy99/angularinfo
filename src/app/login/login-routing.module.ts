import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { LoginComponent } from './login.component';
import { HttpModule, Http } from '@angular/http';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        HttpModule
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
