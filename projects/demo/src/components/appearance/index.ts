import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {type TuiInteractiveState, TuiLink, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocAppearance]',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TuiDocAPIItem, TuiTitle, TuiLink, RouterLink],
})
export class TuiDocAppearance {
    protected readonly routes = DemoRoute;
    protected selected = '';
    protected readonly modes = ['invalid', 'checked'];
    protected readonly appearances = [
        'primary',
        'secondary',
        'destructive',
        'neutral',
        'flat',
        'link',
        'accent',
        'opposite',
        'floating',
        'textfield',
        'whiteblock',
        'outline',
        'error',
        'success',
        'warning',
        'info',
        'glass',
    ] as const;

    protected readonly states: readonly TuiInteractiveState[] = [
        'active',
        'disabled',
        'hover',
    ];

    protected readonly focuses = [true, false];

    @Input()
    public tuiDocAppearance: readonly string[] | '' = '';

    public state: TuiInteractiveState | null = null;
    public focus: boolean | null = null;
    public mode: string | null = null;

    get appearance(): string {
        return this.selected || this.tuiDocAppearance[0] || this.appearances[0];
    }
}
