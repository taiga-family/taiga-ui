import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {TuiCell} from '@taiga-ui/core/components/cell';

import {TUI_FILE_OPTIONS_OPTIONS} from './file.options';

@Component({
    standalone: true,
    selector: '[tuiFile]',
    template: '<ng-content />',
    styleUrl: './file.styles.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiCell],
    host: {
        tuiFile: '',
        '[attr.data-orientation]': 'orientation() || options.orientation',
        '[attr.data-size]': 'size() || options.size',
        '[class._longtapped]': 'longtapped()',
        '[tabIndex]': '0',
        '(focusout)': 'longtapped.set(false)',
        '(longtap)': 'longtapped.set(true)',
    },
})
export class TuiFile {
    protected readonly longtapped = signal(false);
    protected readonly options = inject(TUI_FILE_OPTIONS_OPTIONS);
    public readonly orientation = input(this.options.orientation);
    public readonly size = input(this.options.size, {alias: 'tuiFile'});
}
