import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocControl]',
    imports: [NgIf, TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocControl {
    @Input()
    public hiddenOptions: ReadonlyArray<'disabled' | 'invalid' | 'readOnly'> = [];

    public readonly = false;
    public disabled = false;
    public invalid: boolean | null = null;
}
