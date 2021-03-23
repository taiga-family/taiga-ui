import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';
import {ExampleDomComponent} from './dom.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkModule,
        TuiSvgModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleDomComponent)),
    ],
    declarations: [ExampleDomComponent],
    exports: [ExampleDomComponent],
})
export class ExampleDomModule {}
