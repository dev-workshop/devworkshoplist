import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Injectable()
export class Data {

    checklists: FirebaseListObservable<any>;

    constructor(public angFire: AngularFire) {
        this.checklists = angFire.database.list('/Checklists');
    }

    getData():FirebaseListObservable<any> {
        return this.checklists;
    }

    addChecklist(checklistName:String):void {
        this.checklists.push({"title": checklistName});
    }

    removeChecklist(checklistID):void {
        this.checklists.remove(checklistID);
    }

}
