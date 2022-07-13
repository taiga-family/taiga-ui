import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiItemDirective,
    TuiItemModule,
    TuiLetModule,
    TuiMapperPipeModule,
} from '@taiga-ui/cdk';
import {TuiLinkModule, TuiModeModule, TuiSvgModule} from '@taiga-ui/core';

import {TuiBreadcrumbsComponent} from './breadcrumbs.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TuiMapperPipeModule,
        TuiLetModule,
        TuiLinkModule,
        TuiSvgModule,
        TuiModeModule,
        TuiItemModule,
    ],
    declarations: [TuiBreadcrumbsComponent],
    exports: [TuiBreadcrumbsComponent, TuiItemDirective],
})
export class TuiBreadcrumbsModule {}
