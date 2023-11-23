import {NgModule} from '@angular/core';
import {TuiAddonDocModule, tuiGetDocModules} from '@taiga-ui/addon-doc';
import {TuiDropdownModule} from '@taiga-ui/core';

import {TuiViewportExample1} from './examples/1';
import {TuiViewportExample2} from './examples/2';
import {PortalHost} from './examples/2/portal-host';
import {ExampleTuiViewportComponent} from './viewport.component';

@NgModule({
    imports: [
        TuiDropdownModule,
        TuiAddonDocModule,
        tuiGetDocModules(ExampleTuiViewportComponent),
    ],
    declarations: [
        ExampleTuiViewportComponent,
        TuiViewportExample1,
        TuiViewportExample2,
        PortalHost,
    ],
})
export class ExampleTuiViewportModule {}
