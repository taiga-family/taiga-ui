import {Clipboard} from '@angular/cdk/clipboard';
import {Component, Inject, InjectionToken} from '@angular/core';
import {TUI_DEFAULT_MATCHER} from '@taiga-ui/cdk';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
import * as allIcons from '@taiga-ui/icons';
import {changeDetection} from '../../../change-detection-strategy';

export const COMMERCE = [
    'tuiIconElectron',
    'tuiIconMaestro',
    'tuiIconMastercard',
    'tuiIconMir',
    'tuiIconVisa',
];
const FILTERED = Object.keys(allIcons).filter(
    item =>
        COMMERCE.indexOf(item) === -1 &&
        item !== 'tuiCoreIcons' &&
        item !== 'tuiKitIcons',
);
export const ICONS = {
    'Normal interface icons (16px)': FILTERED.filter(name => !name.includes('Large')),
    'Large interface icons (24px)': FILTERED.filter(name => name.includes('Large')),
    'Payment systems': COMMERCE,
};

export const TUI_DEMO_ICONS = new InjectionToken<Record<string, readonly string[]>>(
    'Icons',
    {
        factory: () => ICONS,
    },
);

@Component({
    selector: 'icons',
    templateUrl: 'icons.template.html',
    styleUrls: ['icons.style.less'],
    changeDetection,
})
export class IconsComponent {
    search = '';

    readonly keys = Object.keys(this.icons);

    constructor(
        @Inject(TUI_DEMO_ICONS) readonly icons: Record<string, readonly string[]>,
        @Inject(Clipboard) private readonly clipboard: Clipboard,
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    copyPath(name: string) {
        this.clipboard.copy(name);
        this.notifications
            .show(`The name ${name} copied`, {
                status: TuiNotification.Success,
            })
            .subscribe();
    }

    getHighlight(name: string): boolean {
        return this.search.length > 1 && TUI_DEFAULT_MATCHER(name, this.search);
    }
}
