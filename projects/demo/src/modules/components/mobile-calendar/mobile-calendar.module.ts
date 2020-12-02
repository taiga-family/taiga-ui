import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {
    TuiMobileCalendarDialogModule,
    TuiMobileCalendarModule,
} from '@taiga-ui/addon-mobile';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
import {TuiMobileCalendarExample1} from './examples/1';
import {ExampleTuiMobileCalendarComponent} from './mobile-calendar.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiMobileCalendarModule,
        TuiMobileCalendarDialogModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiMobileCalendarComponent)),
    ],
    declarations: [ExampleTuiMobileCalendarComponent, TuiMobileCalendarExample1],
    exports: [ExampleTuiMobileCalendarComponent],
})
export class ExampleTuiMobileCalendarModule {}
