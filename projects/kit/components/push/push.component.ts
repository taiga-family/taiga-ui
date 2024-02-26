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
    public heading = '';

    @Input()
    public type = '';

    @Input()
    public timestamp: number | string = '';

    @Output()
    public readonly close = new EventEmitter<void>();

    protected readonly isString = tuiIsString;

    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);

    protected get closeable(): boolean {
        return tuiIsObserved(this.close);
    }
}
