import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiIconComponent, TuiLinkModule, TuiLoaderModule} from '@taiga-ui/core';

import {StackblitzEditButtonComponent} from './stackblitz-edit-button.component';
import {StackblitzStarterComponent} from './stackblitz-starter.component';

@NgModule({
    imports: [
        TuiIconComponent,
        TuiLinkModule,
        TuiLoaderModule,
        RouterModule.forChild([{path: '', component: StackblitzStarterComponent}]),
    ],
    declarations: [StackblitzStarterComponent, StackblitzEditButtonComponent],
    exports: [StackblitzStarterComponent],
})
export class StackblitzStarterModule {}
