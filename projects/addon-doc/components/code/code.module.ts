import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';

import {TuiDocCopyModule} from '../copy/copy.module';
import {TuiDocCodeComponent} from './code.component';

@NgModule({
    imports: [CommonModule, HighlightModule, TuiDocCopyModule, ClipboardModule],
    declarations: [TuiDocCodeComponent],
    exports: [TuiDocCodeComponent],
})
export class TuiDocCodeModule {}
