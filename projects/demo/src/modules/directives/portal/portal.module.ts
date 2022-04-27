import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
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
        RouterModule.forChild(generateRoutes(ExampleTuiPortalComponent)),
    ],
    declarations: [ExampleTuiPortalComponent, TuiPortalExample1],
    exports: [ExampleTuiPortalComponent],
})
export class ExampleTuiPortalModule {}
