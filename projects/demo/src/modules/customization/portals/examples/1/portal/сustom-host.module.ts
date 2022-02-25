import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {CustomHostComponent} from './custom-host.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CustomHostComponent],
    exports: [CustomHostComponent],
})
export class CustomHostModule {}
