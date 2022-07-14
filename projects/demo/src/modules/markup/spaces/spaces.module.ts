import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    TuiDocCopyModule,
    tuiGenerateRoutes,
} from '@taiga-ui/addon-doc';

import {TuiSpacingExample1} from './examples/1';
import {TuiSpacingExample2} from './examples/2';
import {SpacesComponent} from './spaces.component';

@NgModule({
    imports: [
        CommonModule,
        ClipboardModule,
        TuiDocCopyModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(SpacesComponent)),
    ],
    declarations: [SpacesComponent, TuiSpacingExample1, TuiSpacingExample2],
    exports: [SpacesComponent],
})
export class SpacesModule {}
