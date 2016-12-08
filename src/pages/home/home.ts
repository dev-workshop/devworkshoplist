import {Component} from '@angular/core';

import {NavController, Platform, AlertController} from 'ionic-angular';
import {FirebaseListObservable} from "angularfire2";
import {Data} from "../../providers/data";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    dwchecklists: FirebaseListObservable<any>;

    constructor(public navCtrl: NavController, public alertCtrl:AlertController, public data:Data, public platform:Platform) {
    }

    ionViewDidLoad() {
        this.platform.ready().then(() =>{
            this.dwchecklists = this.data.getData();
        });
    }

    addChecklist():void {
        let prompt = this.alertCtrl.create({
            title: "Add New Checklist",
            message: "Enter the name of the new Checklist",
            inputs: [
                {
                    name: 'name'
                }
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        this.data.addChecklist(data.name)
                    }
                }
            ]
        });
        prompt.present();
    }

    removeChecklist(checklistID):void {
        this.data.removeChecklist(checklistID);
    }

}
