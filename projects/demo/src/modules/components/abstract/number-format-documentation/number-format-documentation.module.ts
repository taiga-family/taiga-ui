import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

import {NumberFormatDocumentationComponent} from './number-format-documentation.component';

@NgModule({
    imports: [CommonModule, RouterModule, TuiAddonDoc, TuiLinkDirective],
    declarations: [NumberFormatDocumentationComponent],
    exports: [NumberFormatDocumentationComponent],
})
export class NumberFormatDocumentationModule {}
