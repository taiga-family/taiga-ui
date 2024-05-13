import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS, tuiButtonOptionsProvider} from '@taiga-ui/core';

@Component({
    selector: 'tui-push',
    templateUrl: './push.template.html',
    styleUrls: ['./push.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiButtonOptionsProvider({size: 's', appearance: 'secondary'})],
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
}
