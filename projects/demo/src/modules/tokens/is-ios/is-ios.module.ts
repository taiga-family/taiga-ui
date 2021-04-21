import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {ExampleTuiIsIOSComponent} from './is-ios.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(ExampleTuiIsIOSComponent)),
    ],
    declarations: [ExampleTuiIsIOSComponent],
    exports: [ExampleTuiIsIOSComponent],
})
export class ExampleTuiIsIOSModule {}
