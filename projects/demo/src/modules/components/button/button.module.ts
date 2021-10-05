import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiCardModule} from '@taiga-ui/addon-commerce';
import {generateRoutes, TuiAddonDocModule} from '@taiga-ui/addon-doc';
import {TuiFocusableModule} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDropdownControllerModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
    TuiNotificationModule,
    TuiSvgModule,
} from '@taiga-ui/core';
import {TuiArrowModule, TuiAvatarModule, TuiToggleModule} from '@taiga-ui/kit';
import {ExampleTuiButtonComponent} from './button.component';
import {TuiButtonExample1} from './examples/1';
import {TuiButtonExample2} from './examples/2';
import {TuiButtonExample3} from './examples/3';
import {TuiButtonExample4} from './examples/4';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiCardModule,
        TuiAvatarModule,
        TuiSvgModule,
        TuiToggleModule,
        TuiFocusableModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiDropdownControllerModule,
        TuiArrowModule,
        TuiNotificationModule,
        TuiAddonDocModule,
        RouterModule.forChild(generateRoutes(ExampleTuiButtonComponent)),
        TuiLinkModule,
    ],
    declarations: [
        ExampleTuiButtonComponent,
        TuiButtonExample1,
        TuiButtonExample2,
        TuiButtonExample3,
        TuiButtonExample4,
    ],
    exports: [ExampleTuiButtonComponent],
})
export class ExampleTuiButtonModule {}
