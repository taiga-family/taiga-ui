import {Directive, HostBinding, inject, Input} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';

@Directive({
    standalone: true,
    selector: '[tuiPlatform]',
    providers: [
        {
            provide: TUI_PLATFORM,
            deps: [TuiPlatform],
            useFactory: ({tuiPlatform}: TuiPlatform) =>
                tuiPlatform || inject(TUI_PLATFORM, {skipSelf: true}),
        },
    ],
})
export class TuiPlatform {
    @Input()
    @HostBinding('attr.data-platform')
    public tuiPlatform: '' | 'android' | 'ios' | 'web' = '';
}
