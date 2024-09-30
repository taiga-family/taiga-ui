import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import type {TuiLooseUnion} from '@taiga-ui/cdk';
import type {
    TuiDropdownAlign,
    TuiDropdownOptions,
    TuiDropdownWidth,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {TUI_DROPDOWN_OPTIONS, TuiDropdown, TuiLink, TuiTitle} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocDropdown]',
    imports: [NgIf, RouterLink, TuiDocAPIItem, TuiDropdown, TuiLink, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocDropdown {
    private readonly options = inject(TUI_DROPDOWN_OPTIONS);

    protected readonly routes = DemoRoute;

    protected readonly aligns: readonly TuiDropdownAlign[] = ['left', 'right', 'center'];
    protected readonly directions: TuiVerticalDirection[] = ['bottom', 'top'];
    protected readonly limitWidths: readonly TuiDropdownWidth[] = [
        'auto',
        'min',
        'fixed',
    ];

    @Input()
    public hiddenOptions: Array<TuiLooseUnion<keyof TuiDropdownOptions>> = [];

    public align: TuiDropdownAlign = this.options.align;
    public direction: TuiVerticalDirection | null = this.options.direction;
    public minHeight = this.options.minHeight;
    public maxHeight = this.options.maxHeight;
    public offset = this.options.offset;
    public appearance = this.options.appearance;
    public limitWidth: TuiDropdownWidth = 'fixed';

    public open = false;
}
