import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {JestComponent} from './jest.component';

@NgModule({
    declarations: [JestComponent],
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(JestComponent)),
    ],
})
export class JestModule {}
