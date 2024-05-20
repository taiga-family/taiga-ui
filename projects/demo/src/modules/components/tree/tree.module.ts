import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiSetupComponent} from '@demo/utils';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiMapperPipe} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiLabelDirective,
    TuiLinkDirective,
    TuiLoaderComponent,
    TuiSvgComponent,
} from '@taiga-ui/core';
import {TuiCheckboxComponent, TuiTreeModule} from '@taiga-ui/kit';

import {TuiTreeExample1} from './examples/1';
import {TuiTreeExample2} from './examples/2';
import {TuiTreeExample3} from './examples/3';
import {TuiTreeExample4} from './examples/4';
import {TuiTreeExample5} from './examples/5';
import {FoldersComponent} from './examples/5/content';
import {TuiTreeExample6} from './examples/6';
import {TuiTreeExample7} from './examples/7';
import {ExampleTuiTreeComponent} from './tree.component';

@NgModule({
    imports: [
        TuiTreeModule,
        TuiSvgComponent,
        TuiButtonDirective,
        TuiLinkDirective,
        TuiMapperPipe,
        TuiLoaderComponent,
        FormsModule,
        CommonModule,
        TuiAddonDoc,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiTreeComponent)),
        TuiCheckboxComponent,
        TuiLabelDirective,
        TuiSetupComponent,
    ],
    declarations: [
        ExampleTuiTreeComponent,
        FoldersComponent,
        TuiTreeExample1,
        TuiTreeExample2,
        TuiTreeExample3,
        TuiTreeExample4,
        TuiTreeExample5,
        TuiTreeExample6,
        TuiTreeExample7,
    ],
    exports: [ExampleTuiTreeComponent],
})
export class ExampleTuiTreeModule {}
