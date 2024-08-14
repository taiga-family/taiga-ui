export function makeIconName(name: string): string {
    return `@tui.${name}`;
}

export function makeIconIndexFile(icons: string[]): string {
    const names = icons.map((name) => `"${name}"`).join(' | ');

    return `
        import {Directive, Pipe} from '@angular/core';
        import {
            TUI_BUTTON_OPTIONS,
            TuiButton as TuiButtonCore,
        } from '@taiga-ui/core/components/button';
        import {
            TuiIcon as TuiIconCore,
            TuiIconPipe as TuiIconCorePipe,
        } from '@taiga-ui/core/components/icon';
        import {
            tuiAppearanceOptionsProvider,
            TuiWithAppearance,
        } from '@taiga-ui/core/directives/appearance';
        import {TuiIcons as TuiIconsCore} from '@taiga-ui/core/directives/icons';

        export type TuiIconName = ${names} | (string & Record<never, never>);

        @Directive({
            standalone: true,
            selector: 'tui-icon',
            hostDirectives: [TuiIconCore],
        })
        export class TuiIcon extends TuiIconCore<TuiIconName> {}

        @Pipe({
            standalone: true,
            name: 'tuiIcon',
        })
        export class TuiIconPipe extends TuiIconCorePipe<TuiIconName> {}

        @Directive({
            standalone: true,
            selector: 'tui-icon',
        })
        export class TuiIcons extends TuiIconsCore<TuiIconName> {}

        @Directive({
            standalone: true,
            selector: 'a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]',
            providers: [tuiAppearanceOptionsProvider(TUI_BUTTON_OPTIONS)],
            hostDirectives: [
                TuiWithAppearance,
                {
                    directive: TuiIcons,
                    inputs: ['iconStart', 'iconEnd'],
                },
            ],
            host: {
                '[attr.data-size]': 'size',
            },
        })
        export class TuiButton extends TuiButtonCore {}
    `;
}
