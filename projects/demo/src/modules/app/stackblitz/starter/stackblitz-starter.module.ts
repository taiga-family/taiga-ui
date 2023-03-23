import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiButtonModule, TuiLoaderModule} from '@taiga-ui/core';

import {StackblitzEditButtonComponent} from './stackblitz-edit-button.component';
import {StackblitzStarterComponent} from './stackblitz-starter.component';

@NgModule({
    imports: [
        TuiLoaderModule,
        TuiButtonModule,
        RouterModule.forChild([{path: ``, component: StackblitzStarterComponent}]),
    ],
    declarations: [StackblitzStarterComponent, StackblitzEditButtonComponent],
    exports: [StackblitzStarterComponent],
})
export class StackblitzStarterModule {}
