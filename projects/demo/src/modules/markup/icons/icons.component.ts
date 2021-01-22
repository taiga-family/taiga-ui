import {Component, Inject, InjectionToken} from '@angular/core';
import {ClipboardCopyService} from '@taiga-ui/addon-doc';
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

export const TUI_ICONS = new InjectionToken<Record<string, readonly string[]>>('Icons', {
    factory: () => {
        const icons = Object.keys(allIcons).filter(
            item =>
                COMMERCE.indexOf(item) === -1 &&
                item !== 'tuiCoreIcons' &&
                item !== 'tuiKitIcons',
        );

        return {
            'Normal interface icons (16px)': icons.filter(
                name => !name.includes('Large'),
            ),
            'Large interface icons (24px)': icons.filter(name => name.includes('Large')),
            'Payment systems': COMMERCE,
        };
    },
});

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
        @Inject(TUI_ICONS) readonly icons: Record<string, readonly string[]>,
        @Inject(ClipboardCopyService)
        private readonly clipboardCopyService: ClipboardCopyService,
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    copyPath(name: string) {
        this.clipboardCopyService.copyToClipboard(name);
        this.notifications
            .show(`The name ${name} copied`, {
                status: TuiNotification.Success,
            })
            .subscribe();
    }

    getFirstPosition(name: string): boolean {
        return !(allIcons as Record<string, any>)[name].includes('currentColor');
    }

    getHighlight(name: string): boolean {
        return this.search.length > 1 && TUI_DEFAULT_MATCHER(name, this.search);
    }
}
