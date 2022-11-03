import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAutoFocusModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiLinkModule,
    TuiScrollbarModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiInputInlineModule, TuiToggleModule} from '@taiga-ui/kit';

import {TuiEditLinkComponent} from './edit-link.component';
import {TuiFilterAnchorsPipe} from './pipes/filter-anchors.pipe';
import {TuiShortUrlPipe} from './pipes/short-url.pipe';

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
        TuiDataListModule,
        TuiScrollbarModule,
    ],
    declarations: [TuiEditLinkComponent, TuiShortUrlPipe, TuiFilterAnchorsPipe],
    exports: [TuiEditLinkComponent],
})
export class TuiEditLinkModule {}
