import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HighlightModule} from 'ngx-highlightjs';

import {TuiDocCodeComponent} from './code.component';

@NgModule({
    imports: [CommonModule, HighlightModule],
    declarations: [TuiDocCodeComponent],
    exports: [TuiDocCodeComponent],
})
export class TuiDocCodeModule {}
