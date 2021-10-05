import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiMarkerIconComponent} from './marker-icon.component';

@NgModule({
    imports: [CommonModule, TuiSvgModule],
    declarations: [TuiMarkerIconComponent],
    exports: [TuiMarkerIconComponent],
})
export class TuiMarkerIconModule {}
