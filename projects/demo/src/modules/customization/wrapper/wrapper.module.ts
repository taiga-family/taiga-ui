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
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiCheckboxLabeledModule, TuiInputModule} from '@taiga-ui/kit';
import {TuiWrapperExample1} from './examples/1';
import {WrapperComponent} from './wrapper.component';

@NgModule({
    imports: [
        CommonModule,
        ClipboardModule,
        TuiButtonModule,
        TuiDocCopyModule,
        TuiInputModule,
        TuiCheckboxLabeledModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(WrapperComponent)),
        FormsModule,
    ],
    declarations: [WrapperComponent, TuiWrapperExample1],
    exports: [WrapperComponent],
})
export class WrapperModule {}
