import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiLabelModule,
    TuiLinkModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiInputModule, TuiTabsModule} from '@taiga-ui/kit';
import {ThemesModule} from '../../themes/themes.module';
import {ThemeComponent} from './theme.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ThemesModule,
        TuiLinkModule,
        TuiTabsModule,
        TuiLabelModule,
        TuiInputModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ThemeComponent)),
    ],
    declarations: [ThemeComponent],
    exports: [ThemeComponent],
})
export class ThemeModule {}
