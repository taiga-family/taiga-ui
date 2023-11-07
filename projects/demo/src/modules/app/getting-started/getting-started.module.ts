import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';

import {GettingStartedComponent} from './getting-started.component';

@NgModule({
    imports: [
        CommonModule,
        TuiDocPageModule,
        RouterModule.forChild([
            {
                path: ``,
                component: GettingStartedComponent,
            },
        ]),
    ],
    declarations: [GettingStartedComponent],
})
export class GettingStartedModule {}
