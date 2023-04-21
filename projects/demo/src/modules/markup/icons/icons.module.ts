import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiCheckboxLabeledModule} from '@taiga-ui/kit';

import {IconsCustomizationComponent} from './customization/customization-icons.component';
import {IconsComponent} from './icons.component';
import {IconsGroupModule} from './icons-group/icons-group.module';
import {InlineSvgExampleComponent} from './inline-svg/inline-svg.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiNotificationModule,
        TuiLinkModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiAddonDocModule,
        IconsGroupModule,
        RouterModule.forChild(tuiGenerateRoutes(IconsComponent)),
        TuiCheckboxLabeledModule,
    ],
    declarations: [
        IconsComponent,
        IconsCustomizationComponent,
        InlineSvgExampleComponent,
    ],
    exports: [IconsComponent],
})
export class IconsModule {}
