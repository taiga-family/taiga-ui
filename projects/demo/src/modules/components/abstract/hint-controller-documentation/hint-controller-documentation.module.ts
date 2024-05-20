import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLinkDirective} from '@taiga-ui/core';

import {HintControllerDocumentationComponent} from './hint-controller-documentation.component';

@NgModule({
    imports: [CommonModule, RouterModule, TuiAddonDoc, TuiLinkDirective],
    declarations: [HintControllerDocumentationComponent],
    exports: [HintControllerDocumentationComponent],
})
export class HintControllerDocumentationModule {}
