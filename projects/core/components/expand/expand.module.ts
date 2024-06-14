import {NgIf, NgTemplateOutlet} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoader} from '@taiga-ui/core/components/loader';

import {TuiExpandComponent} from './expand.component';
import {TuiExpandContent} from './expand-content.directive';

@NgModule({
    imports: [NgTemplateOutlet, TuiLoader, NgIf],
    declarations: [TuiExpandComponent, TuiExpandContent],
    exports: [TuiExpandComponent, TuiExpandContent],
})
export class TuiExpand {}
