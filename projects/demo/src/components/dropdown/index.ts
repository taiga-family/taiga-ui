import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {DemoRoute} from '@demo/routes';
import {TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {
    TuiDropdown,
    type TuiDropdownAlign,
    type TuiDropdownWidth,
    TuiLink,
    TuiTitle,
    type TuiVerticalDirection,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    selector: 'tbody[tuiDocDropdown]',
    imports: [RouterLink, TuiDocAPIItem, TuiDropdown, TuiLink, TuiTitle],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocDropdown {
    protected readonly routes = DemoRoute;

    protected readonly aligns: readonly TuiDropdownAlign[] = ['left', 'right', 'center'];
    protected readonly directions: TuiVerticalDirection[] = ['bottom', 'top'];
    protected readonly limitWidths: readonly TuiDropdownWidth[] = [
        'auto',
        'min',
        'fixed',
    ];

    @Input()
    public tuiDocDropdown: readonly string[] | '' = '';

    public open = false;

    public align: TuiDropdownAlign = 'left';
    public direction: TuiVerticalDirection | null = null;
    public limitWidth: TuiDropdownWidth = 'fixed';
    public minHeight = 80;
    public maxHeight = 400;
    public offset = 4;
    public appearance = '';
}
