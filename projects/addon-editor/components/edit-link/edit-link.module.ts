import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAutoFocusModule, TuiLetModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiInputInlineModule, TuiToggleModule} from '@taiga-ui/kit';

import {TuiEditLinkComponent} from './edit-link.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiAutoFocusModule,
        TuiButtonModule,
        TuiSvgModule,
        TuiLinkModule,
        TuiInputInlineModule,
        TuiToggleModule,
        TuiLetModule,
    ],
    declarations: [TuiEditLinkComponent],
    exports: [TuiEditLinkComponent],
})
export class TuiEditLinkModule {}
