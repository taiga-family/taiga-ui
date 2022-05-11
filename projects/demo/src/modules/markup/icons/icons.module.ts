import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiHintControllerModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputModule, TuiMarkerIconModule} from '@taiga-ui/kit';

import {IconsCustomizationComponent} from './customization/customization-icons.component';
import {IconsComponent} from './icons.component';
import {IconsGroupComponent} from './icons-group/icons-group.component';
import {IconHighlightPipe} from './pipes/icon-highlight.pipe';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        TuiLinkModule,
        TuiSvgModule,
        TuiMarkerIconModule,
        TuiInputModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        TuiHintControllerModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(IconsComponent)),
    ],
    declarations: [
        IconsComponent,
        IconsGroupComponent,
        IconHighlightPipe,
        IconsCustomizationComponent,
    ],
    exports: [IconsComponent, IconsGroupComponent],
})
export class IconsModule {}
