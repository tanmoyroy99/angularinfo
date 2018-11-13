import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { tokenKey } from '@angular/core/src/view';
import {MatSnackBar} from '@angular/material';
 
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(
        private router: Router,
        private http: Http,
        public snackBar: MatSnackBar,
    ) {}
    loginform: FormGroup;
    login_url= 'http://ec2-18-222-124-106.us-east-2.compute.amazonaws.com:8080/api/auth/';
    token_value: any;

    ngOnInit() { 

        this.loginform = new FormGroup ({
            user_name: new FormControl('',  [Validators.required,
                                        Validators.minLength(4),
                                      ]),
            password: new FormControl('', [Validators.required,
                                          Validators.minLength(4)]),                            
        });

    }

    onLogin(user_details) {
        console.log(user_details);
        let post_request = '{"emailId:"'+user_details.user_name+'","password":"'+user_details.password+'"}';
        
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        this.http.post(this.login_url,'{"emailId":"'+user_details.user_name+'","password":"'+user_details.password+'"}',{ headers: headers }).subscribe(
            res=>{
                //console.log(res);
                if(res.status == 200){
                    this.token_value= res.text;     
                    localStorage.setItem('authData', this.token_value ); 
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                    
                }else if(res.status == 400){
                    
                    console.log(res.text);
                }else{
                    
                    console.log(res.status, res.text);
                }
            },
            error=>{
                this.snackBar.open(error._body, 'OK', {
                    duration: 10000,
                  });
               console.log(error);
        });



    }


     



}
