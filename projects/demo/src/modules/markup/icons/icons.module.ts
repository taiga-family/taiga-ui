import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';

import {IconsCustomizationComponent} from './customization/customization-icons.component';
import {IconsComponent} from './icons.component';
import {IconsGroupModule} from './icons-group/icons-group.module';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiAddonDocModule,
        IconsGroupModule,
        RouterModule.forChild(tuiGenerateRoutes(IconsComponent)),
    ],
    declarations: [IconsComponent, IconsCustomizationComponent],
    exports: [IconsComponent],
})
export class IconsModule {}
