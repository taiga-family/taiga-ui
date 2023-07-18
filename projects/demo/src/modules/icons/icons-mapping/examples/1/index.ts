import {Component} from '@angular/core';
import {tuiSvgOptionsProvider} from '@taiga-ui/core';
import {tuiKitIcons} from '@taiga-ui/icons';

const MAPPER: Record<string, string> = {
    ...tuiKitIcons,
    // override default key-value associations
    tuiIconCalendarLarge: 'date_range-24px',
    tuiIconHelpCircle: 'help-24px',
    tuiIconInfo: 'info-16px',
    tuiIconClose: 'clear-24px',
    tuiIconChevronLeftLarge: 'keyboard_arrow_left-24px',
    tuiIconChevronRightLarge: 'keyboard_arrow_right-24px',
};

@Component({
    selector: 'tui-icons-mapping-example-1',
    templateUrl: './index.html',
    providers: [
        /**
         * @note:
         * As usual with the DI this is hierarchical.
         * Meaning you can provide different TUI_SVG_OPTIONS
         * and use different icons across your app.
         *
         * The best way to keep all svg options at the top level of your app (e.g. AppModule).
         */
        tuiSvgOptionsProvider({
            /**
             * @note:
             * This assumes that icons were properly processed.
             * For example the `keyboard_arrow_left-24px.svg, ...` icons
             * already placed in ./assets/icons/ directory
             */
            path: name => `assets/icons/${MAPPER[name]}.svg#${MAPPER[name]}`,
        }),
    ],
})
export class TuiIconsMappingExample1 {
    date = null;
}
