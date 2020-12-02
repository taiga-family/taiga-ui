import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLetModule} from '@taiga-ui/cdk';
import {TuiSvgComponent} from './svg.component';

@NgModule({
    imports: [CommonModule, TuiLetModule],
    declarations: [TuiSvgComponent],
    exports: [TuiSvgComponent],
})
export class TuiSvgModule {}
