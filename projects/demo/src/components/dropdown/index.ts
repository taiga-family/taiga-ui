import {ChangeDetectionStrategy, Component, inject, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {
    TUI_DROPDOWN_OPTIONS,
    TuiDropdown,
    type TuiDropdownAlign,
    type TuiDropdownOptions,
    type TuiDropdownWidth,
    TuiLink,
    TuiTitle,
    type TuiVerticalDirection,
} from '@taiga-ui/core';

@Component({
    selector: 'tbody[tuiDocDropdown]',
    imports: [RouterLink, TuiDocAPIItem, TuiDropdown, TuiLink, TuiTitle],
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

    public readonly hiddenOptions = input<Array<string | keyof TuiDropdownOptions>>([]);

    public align: TuiDropdownAlign = this.options.align;
    public direction: TuiVerticalDirection | null = this.options.direction;
    public minHeight = this.options.minHeight;
    public maxHeight = this.options.maxHeight;
    public offset = this.options.offset;
    public appearance = this.options.appearance;
    public limitWidth: TuiDropdownWidth = 'fixed';
    public tuiDropdownEnabled = false;
    public dropdownSided = false;
    public dropdownSidedOffset = 4;
    public open = false;
}
