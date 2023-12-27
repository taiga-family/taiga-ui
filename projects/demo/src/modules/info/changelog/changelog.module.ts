import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes, TuiMarkdownPipe} from '@taiga-ui/addon-doc';

import {ChangelogComponent} from './changelog.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiMarkdownPipe,
        RouterModule.forChild(tuiGenerateRoutes(ChangelogComponent)),
    ],
    declarations: [ChangelogComponent],
    exports: [ChangelogComponent],
})
export class ChangelogModule {}
