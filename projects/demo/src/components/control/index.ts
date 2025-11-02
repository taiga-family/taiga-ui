import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {TuiTitle} from '@taiga-ui/core';

@Component({
    selector: 'tbody[tuiDocControl]',
    imports: [TuiDocAPIItem, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocControl {
    public readonly hiddenOptions = input<
        ReadonlyArray<'disabled' | 'invalid' | 'readOnly'>
    >([]);

    public readonly = false;
    public disabled = false;
    public invalid: boolean | null = null;
}
