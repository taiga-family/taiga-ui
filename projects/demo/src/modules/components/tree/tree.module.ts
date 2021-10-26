import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiButtonModule, TuiLinkModule, TuiSvgModule} from '@taiga-ui/core';
import {TuiTreeModule} from '@taiga-ui/kit';
import {TuiTreeExample1} from './examples/1';
import {TuiTreeExample2} from './examples/2';
import {TuiTreeExample3} from './examples/3';
import {TuiTreeExample4} from './examples/4';
import {TuiTreeExample5} from './examples/5';
import {FoldersComponent} from './examples/5/content';
import {ExampleTuiTreeComponent} from './tree.component';

@NgModule({
    imports: [
        TuiTreeModule,
        TuiSvgModule,
        TuiButtonModule,
        TuiLinkModule,
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
    ],
    exports: [ExampleTuiTreeComponent],
})
export class ExampleTuiTreeModule {}
