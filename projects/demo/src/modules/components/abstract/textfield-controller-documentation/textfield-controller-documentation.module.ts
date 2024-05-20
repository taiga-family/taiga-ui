import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

import {TextfieldControllerDocumentationComponent} from './textfield-controller-documentation.component';

@NgModule({
    imports: [CommonModule, RouterModule, TuiAddonDoc, TuiLinkDirective],
    declarations: [TextfieldControllerDocumentationComponent],
    exports: [TextfieldControllerDocumentationComponent],
})
export class TextfieldControllerDocumentationModule {}
