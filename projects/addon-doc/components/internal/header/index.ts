import {ChangeDetectionStrategy, Component, effect, inject, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {Router} from '@angular/router';
import {TUI_DOC_ICONS, TUI_DOC_LOGO, TUI_DOC_MENU_TEXT} from '@taiga-ui/addon-doc/tokens';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiPopup} from '@taiga-ui/core/directives/popup';
import {TuiDrawer} from '@taiga-ui/kit/components/drawer';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDocNavigation} from '../../navigation/navigation.component';

@Component({
    selector: 'header[tuiDocHeader]',
    imports: [PolymorpheusOutlet, TuiButton, TuiDocNavigation, TuiDrawer, TuiPopup],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiDocHeader {
    private readonly router = inject(Router);
    private readonly routeEvents = toSignal(this.router.events, {initialValue: null});

    protected readonly icons = inject(TUI_DOC_ICONS);
    protected readonly logo = inject(TUI_DOC_LOGO);
    protected readonly menu = inject(TUI_DOC_MENU_TEXT);

    protected readonly open = signal(false);

    constructor() {
        effect(() => this.routeEvents() && this.open.set(false));
    }
}
