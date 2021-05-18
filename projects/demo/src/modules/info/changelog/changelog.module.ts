import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {MarkdownModule} from 'ngx-markdown';
import {ChangelogComponent} from './changelog.component';

@NgModule({
    imports: [
        MarkdownModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ChangelogComponent)),
    ],
    declarations: [ChangelogComponent],
    exports: [ChangelogComponent],
})
export class ChangelogModule {}
