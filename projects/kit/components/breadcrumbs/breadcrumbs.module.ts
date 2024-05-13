import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiSvgComponent} from '@taiga-ui/core';

import {TuiBreadcrumbsComponent} from './breadcrumbs.component';

@NgModule({
    imports: [CommonModule, TuiSvgComponent, TuiItemDirective],
    declarations: [TuiBreadcrumbsComponent],
    exports: [TuiBreadcrumbsComponent, TuiItemDirective],
})
export class TuiBreadcrumbsModule {}
