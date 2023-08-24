import {Directive, Input} from '@angular/core';
import {TUI_PLATFORM, tuiPlatformFactory} from '@taiga-ui/cdk/tokens';
import {TuiPlatform} from '@taiga-ui/cdk/types';

@Directive({
    selector: '[tuiPlatform]',
    providers: [
        {
            provide: TUI_PLATFORM,
            deps: [TuiPlatformDirective],
            useFactory: ({tuiPlatform}: TuiPlatformDirective) =>
                tuiPlatform || tuiPlatformFactory(),
        },
    ],
})
export class TuiPlatformDirective {
    @Input()
    tuiPlatform: TuiPlatform | '' = '';
}
