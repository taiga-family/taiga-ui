import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiLoaderModule} from '@taiga-ui/core';

import {StackblitzStarterComponent} from './stackblitz-starter.component';

@NgModule({
    imports: [
        TuiLoaderModule,
        RouterModule.forChild([{path: ``, component: StackblitzStarterComponent}]),
    ],
    declarations: [StackblitzStarterComponent],
    exports: [StackblitzStarterComponent],
})
export class StackblitzStarterModule {}
