import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiInputDateModule} from '@taiga-ui/kit';

import {CypressDocPageComponent} from './cypress.component';
import {TestDocExample1} from './examples/1-input-date-initialization';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAddonDocModule,
        TuiNotificationModule,
        TuiInputDateModule,
        RouterModule.forChild(tuiGenerateRoutes(CypressDocPageComponent)),
    ],
    declarations: [CypressDocPageComponent, TestDocExample1],
    exports: [CypressDocPageComponent],
})
export class CypressDocPageModule {}
