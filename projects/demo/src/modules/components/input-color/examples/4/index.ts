import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TuiIcon} from '@taiga-ui/core';
import {
    TuiInputModule,
    TuiSvgComponent,
    TuiTextfieldControllerModule,
    TuiWrapperModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiInputModule,
        MaskitoDirective,
        TuiTextfieldControllerModule,
        FormsModule,
        TuiSvgComponent,
        TuiWrapperModule,
        TuiIcon,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly mask = {mask: ['#', ...new Array(6).fill(/[0-9a-f]/i)]};
    protected value = '#ffdd2d';
}
