import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiPortalModule} from '@taiga-ui/cdk';
import {TuiToggleModule} from '@taiga-ui/kit';

import {TuiPortalExample1} from './examples/1';
import {ExampleTuiPortalComponent} from './portal.component';

@NgModule({
    imports: [
        FormsModule,
        TuiToggleModule,
        TuiPortalModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiPortalComponent)),
    ],
    declarations: [ExampleTuiPortalComponent, TuiPortalExample1],
    exports: [ExampleTuiPortalComponent],
})
export class ExampleTuiPortalModule {}
