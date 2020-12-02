import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLetModule, TuiMapperPipeModule} from '@taiga-ui/cdk';
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
    ],
    declarations: [TuiBreadcrumbsComponent],
    exports: [TuiBreadcrumbsComponent],
})
export class TuiBreadcrumbsModule {}
