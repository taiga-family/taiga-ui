import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {ExampleTuiIsMobileComponent} from './is-mobile.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(ExampleTuiIsMobileComponent)),
    ],
    declarations: [ExampleTuiIsMobileComponent],
    exports: [ExampleTuiIsMobileComponent],
})
export class ExampleTuiIsMobileModule {}
