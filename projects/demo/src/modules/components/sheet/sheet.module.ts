import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiSheetModule} from '@taiga-ui/addon-mobile';
import {TuiButtonModule, TuiLabelModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiAvatarModule} from '@taiga-ui/kit';
import {TuiSheetExample1} from './examples/1';
import {TuiSheetExample2} from './examples/2';
import {TuiSheetExample3} from './examples/3';
import {ExampleTuiSheetComponent} from './sheet.component';

@NgModule({
    imports: [
        CommonModule,
        TuiButtonModule,
        TuiLabelModule,
        TuiMoneyModule,
        TuiAvatarModule,
        TuiNotificationModule,
        TuiSheetModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiSheetComponent)),
    ],
    declarations: [
        ExampleTuiSheetComponent,
        TuiSheetExample1,
        TuiSheetExample2,
        TuiSheetExample3,
    ],
    exports: [ExampleTuiSheetComponent],
})
export class ExampleTuiSheetModule {}
