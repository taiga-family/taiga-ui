import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {type TuiInteractiveState, TuiLink, TuiTitle} from '@taiga-ui/core';

@Component({
    selector: 'tbody[tuiDocAppearance]',
    imports: [RouterLink, TuiDocAPIItem, TuiLink, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocAppearance {
    protected readonly routes = DemoRoute;
    protected selected = '';
    protected readonly modes = ['invalid', 'checked', ['invalid', 'checked']];
    protected readonly appearances = [
        'primary',
        'primary-destructive',
        'primary-grayscale',
        'secondary',
        'secondary-destructive',
        'secondary-grayscale',
        'flat',
        'flat-destructive',
        'flat-grayscale',
        'outline',
        'outline-destructive',
        'outline-grayscale',
        'action',
        'action-destructive',
        'action-grayscale',
        'neutral',
        'negative',
        'positive',
        'warning',
        'info',
        'icon',
        'floating',
        'textfield',
        'glass',
        'accent',
    ] as const;

    protected readonly states: readonly TuiInteractiveState[] = [
        'active',
        'disabled',
        'hover',
    ];

    protected readonly focuses = [true, false];

    public readonly tuiDocAppearance = input<readonly string[] | ''>('');

    public readonly hiddenOptions = input<
        Array<'appearance' | 'focus' | 'mode' | 'state'>
    >([]);

    public state: TuiInteractiveState | null = null;
    public focus: boolean | null = null;
    public mode: string | readonly string[] | null = null;

    public get appearance(): string {
        return this.selected || this.tuiDocAppearance()[0] || this.appearances[0];
    }
}
