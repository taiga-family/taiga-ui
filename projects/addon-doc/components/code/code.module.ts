import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiButtonDirective, TuiSvgModule} from '@taiga-ui/core';
import {HighlightModule} from 'ngx-highlightjs';

import {TuiDocCodeComponent} from './code.component';

@NgModule({
    imports: [
        CommonModule,
        TuiSvgModule,
        HighlightModule,
        TuiButtonDirective,
        ClipboardModule,
    ],
    declarations: [TuiDocCodeComponent],
    exports: [TuiDocCodeComponent],
})
export class TuiDocCodeModule {}
