import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDocDocumentationModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {DropdownControllerDocumentationComponent} from './dropdown-controller-documentation.component';

@NgModule({
    imports: [CommonModule, RouterModule, TuiDocDocumentationModule, TuiLinkModule],
    declarations: [DropdownControllerDocumentationComponent],
    exports: [DropdownControllerDocumentationComponent],
})
export class DropdownControllerDocumentationModule {}
