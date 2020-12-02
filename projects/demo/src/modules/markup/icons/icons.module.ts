import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiLinkModule,
    TuiSvgModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputModule, TuiMarkerIconModule} from '@taiga-ui/kit';
import {IconsComponent} from './icons.component';

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
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(IconsComponent)),
    ],
    declarations: [IconsComponent],
    exports: [IconsComponent],
})
export class IconsModule {}
