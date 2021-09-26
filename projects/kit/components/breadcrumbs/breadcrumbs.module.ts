import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLetModule, TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiLinkModule, TuiModeModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiBreadcrumbDirective} from './breadcrumb.directive';
import {TuiBreadcrumbsWrapperComponent} from './breadcrumbs-wrapper.component';
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
    declarations: [
        TuiBreadcrumbsComponent,
        TuiBreadcrumbsWrapperComponent,
        TuiBreadcrumbDirective,
    ],
    exports: [
        TuiBreadcrumbsComponent,
        TuiBreadcrumbsWrapperComponent,
        TuiBreadcrumbDirective,
    ],
})
export class TuiBreadcrumbsModule {}
