import {Component} from '@angular/core';
import {TUI_ICONS_PATH} from '@taiga-ui/core';

const MAPPER: Record<string, string> = {
    tuiIconCalendarLarge: 'date_range-24px',
    tuiIconTooltipLarge: 'help-24px',
    tuiIconInfo: 'info-16px',
    tuiIconCloseLarge: 'clear-24px',
    tuiIconChevronLeftLarge: 'keyboard_arrow_left-24px',
    tuiIconChevronRightLarge: 'keyboard_arrow_right-24px',
    // and so on
};

// This assumes that icons were properly processed
export function iconsPath(name: string): string {
    return `assets/icons/${MAPPER[name]}.svg#${MAPPER[name]}`;
}

@Component({
    selector: 'tui-icon-set-example-1',
    templateUrl: './index.html',
    providers: [
        {
            provide: TUI_ICONS_PATH,
            useValue: iconsPath,
        },
    ],
})
export class TuiIconSetExample1 {
    date = null;
}
