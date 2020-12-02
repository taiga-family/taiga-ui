import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiNotificationModule} from '@taiga-ui/core';
import {TuiNotificationExample1} from './examples/1';
import {ExampleTuiNotificationComponent} from './notification.component';

@NgModule({
    imports: [
        TuiNotificationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiNotificationComponent)),
    ],
    declarations: [ExampleTuiNotificationComponent, TuiNotificationExample1],
    exports: [ExampleTuiNotificationComponent],
})
export class ExampleTuiNotificationModule {}
