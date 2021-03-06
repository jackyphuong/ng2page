/**
 * Created by nguyenlet on 12/28/2015.
 * Harveynash
 */

import { Component, AfterViewInit, OnInit, OnDestroy  } from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';
import {Utility} from "../../common/utility";



@Component({
    selector: 'quickview',
    directives: [RouterLink, RouterOutlet],
    templateUrl: './dist/app/components/quickview/quickview.html'
})


@RouteConfig([
    /*{ path: '/',        redirectTo: '/' }
     { path: '/search',  as: 'search',  component: Search },
     { path: '/today',   as: 'today',   component: TrackToday },
     { path: '/history', as: 'history', component: TrackHistory }*/
])


export class QuickView implements AfterViewInit, OnInit, OnDestroy  {

    constructor(public utility:Utility) {

    }

    ngAfterViewInit() {
        console.log('QuickView AfterViewInit');
    }

    ngOnInit(){
        console.log('QuickView OnInit');
    }

    ngOnDestroy() {

    }

}

