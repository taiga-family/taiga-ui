import {CommonModule} from '@angular/common';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiScrollbar} from '@taiga-ui/core/components/scrollbar';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiSheetComponent} from './components/sheet/sheet.component';
import {TuiSheetBarComponent} from './components/sheet-bar/sheet-bar.component';
import {TuiSheetHeadingComponent} from './components/sheet-heading/sheet-heading.component';
import {TuiSheetsHostComponent} from './components/sheets-host/sheets-host.component';
import {TuiSheetCloseDirective} from './directives/sheet-close/sheet-close.directive';
import {TuiSheetStopDirective} from './directives/sheet-stop/sheet-stop.directive';
import {TuiSheetTopDirective} from './directives/sheet-top/sheet-top.directive';
import {TuiSheetWrapperDirective} from './directives/sheet-wrapper/sheet-wrapper.directive';
import {TuiSheetDirective} from './sheet.directive';

/**
 * @deprecated: use {@link TuiSheetDialogModule}
 */
@NgModule({
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiLet,
        TuiButton,
        TuiScrollbar,
    ],
    declarations: [
        TuiSheetsHostComponent,
        TuiSheetComponent,
        TuiSheetBarComponent,
        TuiSheetHeadingComponent,
        TuiSheetTopDirective,
        TuiSheetDirective,
        TuiSheetWrapperDirective,
        TuiSheetCloseDirective,
        TuiSheetStopDirective,
    ],
    exports: [
        TuiSheetsHostComponent,
        TuiSheetComponent,
        TuiSheetHeadingComponent,
        TuiSheetDirective,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class TuiSheetModule {}
