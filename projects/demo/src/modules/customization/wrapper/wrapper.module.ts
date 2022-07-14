import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    TuiDocCopyModule,
    tuiGenerateRoutes,
} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';
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
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(tuiGenerateRoutes(WrapperComponent)),
        FormsModule,
    ],
    declarations: [WrapperComponent, TuiWrapperExample1],
    exports: [WrapperComponent],
})
export class WrapperModule {}
