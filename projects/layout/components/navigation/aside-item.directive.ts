import {Directive, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {RouterLinkActive} from '@angular/router';
import {TUI_COMMON_ICONS, TUI_ICON_END, TuiDataListComponent} from '@taiga-ui/core';
import {TuiButton} from '@taiga-ui/core/components/button';

import {TuiHintAside} from './hint-aside.directive';

@Directive({
    standalone: true,
    selector: '[tuiAsideItem]',
    host: {
        tuiButton: '',
        tuiOption: '',
        '[class._active]': 'active()',
    },
    hostDirectives: [TuiHintAside, TuiButton, RouterLinkActive],
    providers: [
        {
            provide: TUI_ICON_END,
            useFactory: () =>
                inject(TuiDataListComponent, {optional: true})
                    ? inject(TUI_COMMON_ICONS).check
                    : '',
        },
    ],
})
export class TuiAsideItemDirective {
    protected readonly active = toSignal(inject(RouterLinkActive).isActiveChange);
}
