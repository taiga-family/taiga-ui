import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiMapperPipeModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiCheckboxLabeledModule, TuiTreeModule} from '@taiga-ui/kit';
import {TuiTreeExample1} from './examples/1';
import {TuiTreeExample2} from './examples/2';
import {TuiTreeExample3} from './examples/3';
import {TuiTreeExample4} from './examples/4';
import {TuiTreeExample5} from './examples/5';
import {FoldersComponent} from './examples/5/content';
import {TuiTreeExample6} from './examples/6';
import {ExampleTuiTreeComponent} from './tree.component';

@NgModule({
    imports: [
        TuiTreeModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiCheckboxLabeledModule,
        TuiMapperPipeModule,
        FormsModule,
        CommonModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiTreeComponent)),
    ],
    entryComponents: [FoldersComponent],
    declarations: [
        ExampleTuiTreeComponent,
        FoldersComponent,
        TuiTreeExample1,
        TuiTreeExample2,
        TuiTreeExample3,
        TuiTreeExample4,
        TuiTreeExample5,
        TuiTreeExample6,
    ],
    exports: [ExampleTuiTreeComponent],
})
export class ExampleTuiTreeModule {}
