import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {ExampleTuiIsAndroidComponent} from './is-android.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(ExampleTuiIsAndroidComponent)),
    ],
    declarations: [ExampleTuiIsAndroidComponent],
    exports: [ExampleTuiIsAndroidComponent],
})
export class ExampleTuiIsAndroidModule {}
