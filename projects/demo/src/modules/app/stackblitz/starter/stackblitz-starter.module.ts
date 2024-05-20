import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiIconComponent, TuiLinkDirective, TuiLoaderComponent} from '@taiga-ui/core';

import {StackblitzEditButtonComponent} from './stackblitz-edit-button.component';
import {StackblitzStarterComponent} from './stackblitz-starter.component';

@NgModule({
    imports: [
        TuiIconComponent,
        TuiLinkDirective,
        TuiLoaderComponent,
        RouterModule.forChild([{path: '', component: StackblitzStarterComponent}]),
    ],
    declarations: [StackblitzStarterComponent, StackblitzEditButtonComponent],
    exports: [StackblitzStarterComponent],
})
export class StackblitzStarterModule {}
