import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

import {TuiDocCodeComponent} from './code.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        HighlightModule,
        TuiButtonModule,
        ClipboardModule,
    ],
    declarations: [TuiDocCodeComponent],
    exports: [TuiDocCodeComponent],
})
export class TuiDocCodeModule {}
