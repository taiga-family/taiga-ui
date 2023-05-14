import {ClipboardModule} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {
    TuiAddonDocModule,
    TuiDocCopyModule,
    tuiGenerateRoutes,
    TuiTextCodeModule,
} from '@taiga-ui/addon-doc';

import {StylesInfoModule} from '../../app/styles-info/styles-info.module';
import {TuiSpacingExample1} from './examples/1';
import {TuiSpacingExample2} from './examples/2';
import {SpacesComponent} from './spaces.component';

@NgModule({
    imports: [
        CommonModule,
        ClipboardModule,
        StylesInfoModule,
        TuiDocCopyModule,
        TuiAddonDocModule,
        TuiTextCodeModule,
        RouterModule.forChild(tuiGenerateRoutes(SpacesComponent)),
    ],
    declarations: [SpacesComponent, TuiSpacingExample1, TuiSpacingExample2],
    exports: [SpacesComponent],
})
export class SpacesModule {}
