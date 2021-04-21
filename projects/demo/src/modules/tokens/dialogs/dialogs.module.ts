import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiLinkModule} from '@taiga-ui/core';
import {ExampleTuiDialogsComponent} from './dialogs.component';

@NgModule({
    imports: [
        CommonModule,
        TuiAddonDocModule,
        TuiLinkModule,
        RouterModule.forChild(generateRoutes(ExampleTuiDialogsComponent)),
    ],
    declarations: [ExampleTuiDialogsComponent],
    exports: [ExampleTuiDialogsComponent],
})
export class ExampleTuiDialogsModule {}
