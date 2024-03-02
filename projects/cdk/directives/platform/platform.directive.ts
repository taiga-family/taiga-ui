import {Directive, HostBinding, inject, Input} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {type TuiPlatform} from '@taiga-ui/cdk/types';

@Directive({
    selector: '[tuiPlatform]',
    providers: [
        {
            provide: TUI_PLATFORM,
            deps: [TuiPlatformDirective],
            useFactory: ({tuiPlatform}: TuiPlatformDirective) =>
                tuiPlatform || inject(TUI_PLATFORM, {skipSelf: true}),
        },
    ],
})
export class TuiPlatformDirective {
    @Input()
    @HostBinding('attr.data-platform')
    public tuiPlatform: TuiPlatform | '' = '';
}
