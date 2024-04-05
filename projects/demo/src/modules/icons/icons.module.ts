import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {IntersectionObserverModule} from '@ng-web-apis/intersection-observer';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiLinkDirective,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';

import {IconsComponent} from './icons.component';
import {IconsGroupModule} from './icons-group/icons-group.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiNotificationModule,
        TuiLinkDirective,
        TuiSvgModule,
        TuiButtonDirective,
        TuiAddonDocModule,
        IconsGroupModule,
        RouterModule.forChild(tuiGenerateRoutes(IconsComponent)),
        TuiActiveZoneDirective,
        IntersectionObserverModule,
    ],
    declarations: [IconsComponent],
    exports: [IconsComponent],
})
export class IconsModule {}
