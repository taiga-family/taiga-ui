import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiResizableColumnModule} from '@taiga-ui/addon-table';
import {TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiResizableColumnExample1} from './examples/1';
import {ExampleTuiResizableColumnComponent} from './resizable-column.component';

@NgModule({
    imports: [
        CommonModule,
        TuiNotificationModule,
        TuiLinkModule,
        TuiResizableColumnModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiResizableColumnComponent)),
    ],
    declarations: [ExampleTuiResizableColumnComponent, TuiResizableColumnExample1],
    exports: [ExampleTuiResizableColumnComponent],
})
export class ExampleTuiResizableColumnModule {}
