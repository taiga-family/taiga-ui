import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    generateRoutes,
    TUI_DOC_PAGE_MODULES,
    TuiDocCopyModule,
} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiExpandModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputDateRangeModule} from '@taiga-ui/kit';
import {TuiIconSetExample1} from './examples/1';
import {IconSetComponent} from './icon-set.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
        TuiDocCopyModule,
        TuiLinkModule,
        TuiExpandModule,
        TuiButtonModule,
        TuiInputDateRangeModule,
        TuiNotificationModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(IconSetComponent)),
    ],
    declarations: [IconSetComponent, TuiIconSetExample1],
    exports: [IconSetComponent],
})
export class IconSetModule {}
