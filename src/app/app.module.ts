import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {IntroPage} from "../pages/intro/intro";
import {ChecklistPage} from "../pages/checklist/checklist";
import {Data} from "../providers/data";
import {AngularFireModule} from 'angularfire2';

export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
};

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        IntroPage,
        ChecklistPage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        IntroPage,
        ChecklistPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {
}
