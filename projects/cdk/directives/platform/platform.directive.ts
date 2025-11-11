import {Directive, inject, input} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';

@Directive({
    selector: '[tuiPlatform]',
    providers: [
        {
            provide: TUI_PLATFORM,
            useFactory: () => inject(TuiPlatform).tuiPlatform(),
        },
    ],
    host: {
        '[attr.data-platform]': 'tuiPlatform()',
    },
})
export class TuiPlatform {
    public readonly tuiPlatform = input(inject(TUI_PLATFORM, {skipSelf: true}));
}
