import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiButtonModule, TuiLoaderModule} from '@taiga-ui/core';

import {StackblitzEditButtonComponent} from './stackblitz-edit-button.component';
import {StackblitzStarterComponent} from './stackblitz-starter.component';

@NgModule({
    imports: [
        TuiLoaderModule,
        TuiButtonModule,
        RouterModule.forChild([{component: StackblitzStarterComponent, path: ``}]),
    ],
    declarations: [StackblitzStarterComponent, StackblitzEditButtonComponent],
    exports: [StackblitzStarterComponent],
})
export class StackblitzStarterModule {}
