import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiCheckboxLabeledModule} from '@taiga-ui/kit';
import {TuiColorSelectorModule} from '@tinkoff/tui-editor';

import {IconsComponent} from './icons.component';
import {IconsGroupModule} from './icons-group/icons-group.module';

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
        TuiHostedDropdownModule,
        TuiColorSelectorModule,
        TuiActiveZoneModule,
    ],
    declarations: [IconsComponent],
    exports: [IconsComponent],
})
export class IconsModule {}
