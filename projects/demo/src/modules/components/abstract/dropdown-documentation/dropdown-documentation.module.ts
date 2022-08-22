import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiDocDocumentationModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';

import {DropdownDocumentationComponent} from './dropdown-documentation.component';

@NgModule({
    imports: [CommonModule, RouterModule, TuiDocDocumentationModule, TuiLinkModule],
    declarations: [DropdownDocumentationComponent],
    exports: [DropdownDocumentationComponent],
})
export class DropdownDocumentationModule {}
