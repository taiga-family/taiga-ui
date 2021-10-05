import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiToolbarModule} from '@taiga-ui/addon-editor';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiDropdownModule, TuiLinkModule} from '@taiga-ui/core';
import {ContenteditableValueAccessorModule} from '@tinkoff/angular-contenteditable-accessor';
import {TuiToolbarExample1} from './examples/1';
import {ExampleTuiToolbarComponent} from './toolbar.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ContenteditableValueAccessorModule,
        TuiToolbarModule,
        TuiButtonModule,
        TuiLinkModule,
        TuiDropdownModule,
        TuiActiveZoneModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiToolbarComponent)),
    ],
    declarations: [ExampleTuiToolbarComponent, TuiToolbarExample1],
    exports: [ExampleTuiToolbarComponent],
})
export class ExampleTuiToolbarModule {}
