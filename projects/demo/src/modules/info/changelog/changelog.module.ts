import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {MarkdownModule} from 'ngx-markdown';

import {ChangelogComponent} from './changelog.component';

@NgModule({
    imports: [
        CommonModule,
        MarkdownModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ChangelogComponent)),
    ],
    declarations: [ChangelogComponent],
    exports: [ChangelogComponent],
})
export class ChangelogModule {}
