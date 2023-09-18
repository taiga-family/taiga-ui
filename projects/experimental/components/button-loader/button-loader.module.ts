import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoaderModule} from '@taiga-ui/core';

import {TuiButtonLoaderComponent} from './button-loader.component';

@NgModule({
    imports: [CommonModule, TuiLoaderModule],
    declarations: [TuiButtonLoaderComponent],
    exports: [TuiButtonLoaderComponent],
})
export class TuiButtonLoaderModule {}
