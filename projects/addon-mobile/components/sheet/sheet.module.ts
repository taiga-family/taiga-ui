import {CommonModule} from '@angular/common';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {TuiLetModule, TuiOverscrollModule} from '@taiga-ui/cdk';
import {TuiButtonModule} from '@taiga-ui/core';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';
import {TuiSheetDirective} from './sheet.directive';
import {TuiSheetBarComponent} from './sheet/sheet-bar/sheet-bar.component';
import {TuiSheetHeadingComponent} from './sheet/sheet-heading/sheet-heading.component';
import {TuiSheetTopDirective} from './sheet/sheet-top/sheet-top.directive';
import {TuiSheetWrapperDirective} from './sheet/sheet-wrapper/sheet-wrapper.directive';
import {TuiSheetComponent} from './sheet/sheet.component';
import {TuiSheetsHostComponent} from './sheets-host/sheets-host.component';

@NgModule({
    imports: [
        CommonModule,
        PolymorpheusModule,
        TuiLetModule,
        TuiButtonModule,
        TuiOverscrollModule,
    ],
    declarations: [
        TuiSheetsHostComponent,
        TuiSheetComponent,
        TuiSheetBarComponent,
        TuiSheetHeadingComponent,
        TuiSheetTopDirective,
        TuiSheetDirective,
        TuiSheetWrapperDirective,
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
