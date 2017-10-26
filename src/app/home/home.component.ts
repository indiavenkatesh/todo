/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from "@angular/core";
import { RestService } from "services/rest.service";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
    users = [];
    
    constructor(
        private rest: RestService
    ) {
    }

    ngOnInit() {
        this.rest.getItems('users').subscribe((users) => {
            this.users = users;            
        });
    }
}
