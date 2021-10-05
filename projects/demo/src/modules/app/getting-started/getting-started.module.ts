import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {GettingStartedComponent} from './getting-started.component';

@NgModule({
    imports: [CommonModule, TuiDocPageModule],
    declarations: [GettingStartedComponent],
    exports: [GettingStartedComponent],
})
export class GettingStartedModule {}
