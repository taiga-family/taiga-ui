import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[tabIndex]': '0',
        '[attr.data-mode]': 'mode',
        '[attr.data-size]': 'size',
        '[attr.data-state]': 'state',
        '[class._longtapped]': 'longtapped()',
        '(longtap)': 'longtapped.set(true)',
        '(focusout)': 'longtapped.set(false)',
    },
})
export class TuiFile {
    protected longtapped = signal(false);

    @Input()
    public mode: 'card' | 'cell' = 'cell';

    @Input()
    public preview: PolymorpheusContent;

    @Input()
    public state: 'disabled' | 'error' | 'normal' = 'normal';

    @Input()
    public size?: 'm' | 's' = 'm';
}
