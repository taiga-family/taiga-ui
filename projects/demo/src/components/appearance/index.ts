import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import type {TuiLooseUnion} from '@taiga-ui/cdk';
import type {TuiAppearanceOptions, TuiInteractiveState} from '@taiga-ui/core';
import {TuiLink, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocAppearance]',
    imports: [NgIf, RouterLink, TuiDocAPIItem, TuiLink, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocAppearance {
    protected readonly routes = DemoRoute;
    protected selected = '';
    protected readonly modes = ['invalid', 'checked', ['invalid', 'checked']];
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
        'icon',
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
