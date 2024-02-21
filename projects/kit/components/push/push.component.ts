import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {tuiIsObserved, tuiIsString} from '@taiga-ui/cdk';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core';

@Component({
    selector: 'tui-push',
    templateUrl: './push.template.html',
    styleUrls: ['./push.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPushComponent {
    @Input()
    heading = '';

    @Input()
    type = '';

    @Input()
    timestamp: number | string = '';

    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly close = new EventEmitter<void>();

    readonly isString = tuiIsString;

    readonly closeWord$ = inject(TUI_CLOSE_WORD);
    readonly icons = inject(TUI_COMMON_ICONS);

    get closeable(): boolean {
        return tuiIsObserved(this.close);
    }
}
