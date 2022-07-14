import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiCalendarModule, TuiLinkModule} from '@taiga-ui/core';
import {MarkdownModule} from 'ngx-markdown';

import {I18nComponent} from './i18n.component';

@NgModule({
    imports: [
        CommonModule,
        TuiCalendarModule,
        MarkdownModule,
        TuiLinkModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(I18nComponent)),
    ],
    declarations: [I18nComponent],
    exports: [I18nComponent],
})
export class I18nModule {}
