import {ClipboardModule} from '@angular/cdk/clipboard';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    TuiDocCopyModule,
    tuiGenerateRoutes,
} from '@taiga-ui/addon-doc';

import {TypographyComponent} from './typography.component';

@NgModule({
    imports: [
        ClipboardModule,
        TuiDocCopyModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(TypographyComponent)),
    ],
    declarations: [TypographyComponent],
    exports: [TypographyComponent],
})
export class TypographyModule {}
