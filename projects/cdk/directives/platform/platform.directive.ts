import {Directive, inject, Input} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';

@Directive({
    selector: '[tuiPlatform]',
    providers: [
        {
            provide: TUI_PLATFORM,
            useFactory: () => inject(TuiPlatform).tuiPlatform,
        },
    ],
    host: {
        '[attr.data-platform]': 'tuiPlatform',
    },
})
export class TuiPlatform {
    @Input()
    public tuiPlatform = inject(TUI_PLATFORM, {skipSelf: true});
}
