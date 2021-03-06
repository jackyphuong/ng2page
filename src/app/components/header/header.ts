import { Route, RouterLink, RouterOutlet } from 'angular2/router';
import { Component, AfterViewInit, OnInit, OnDestroy, OnChanges } from 'angular2/core';

import {Utility} from "../../common/utility";
import {LoginService} from "../../pages/login/services/login-service";
import {Logo} from "../elements/organic/logo/logo";

@Component({
    selector: 'main-header',
    directives: [RouterLink, RouterOutlet, Logo],
    templateUrl:   './dist/app/components/header/header.html',
    providers: [LoginService]
})


export class Header implements AfterViewInit, OnInit, OnDestroy, OnChanges {

    constructor(public utility:Utility, private _loginService: LoginService){

    }

    ngAfterViewInit() {
        console.log('Header AfterViewInit');
    }

    ngOnInit(){
        console.log('Header OnInit');
    }

    ngOnChanges() {

    }

    ngOnDestroy(){
    }

    logout(){
        console.log('log out');
        this._loginService.logout();

    }
}