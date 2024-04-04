import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiIconComponent, TuiLinkDirective, TuiLoaderModule} from '@taiga-ui/core';

import {StackblitzEditButtonComponent} from './stackblitz-edit-button.component';
import {StackblitzStarterComponent} from './stackblitz-starter.component';

@NgModule({
    imports: [
        TuiIconComponent,
        TuiLinkDirective,
        TuiLoaderModule,
        RouterModule.forChild([{path: '', component: StackblitzStarterComponent}]),
    ],
    declarations: [StackblitzStarterComponent, StackblitzEditButtonComponent],
    exports: [StackblitzStarterComponent],
})
export class StackblitzStarterModule {}
