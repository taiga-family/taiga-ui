import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {type TuiLooseUnion} from '@taiga-ui/cdk';
import {
    type TuiAppearanceOptions,
    type TuiInteractiveState,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';

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

    @Input()
    public tuiDocAppearance: readonly string[] | '' = '';

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof TuiAppearanceOptions>> = [];

    public state: TuiInteractiveState | null = null;
    public focus: boolean | null = null;
    public mode: string | readonly string[] | null = null;

    public get appearance(): string {
        return this.selected || this.tuiDocAppearance[0] || this.appearances[0];
    }
}
