import {Component, Inject, InjectionToken, Optional} from '@angular/core';
import {ClipboardCopyService} from '@taiga-ui/addon-doc';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
import * as allIcons from '@taiga-ui/icons';
import {changeDetection} from '../../../change-detection-strategy';

export const TUI_ADDITIONAL_ICONS = new InjectionToken<AdditionalIcons>(
    'Additional icons',
);

export interface AdditionalIcons {
    package: string;
    icons: readonly string[];
}

@Component({
    selector: 'icons',
    templateUrl: 'icons.template.html',
    styleUrls: ['icons.style.less'],
    changeDetection,
})
export class IconsComponent {
    icons: readonly string[];

    assets: readonly string[] = [];

    iconsLarge: readonly string[] = [];

    logos: readonly string[] = [];

    search = '';

    readonly commerce = [
        'tuiIconElectron',
        'tuiIconMaestro',
        'tuiIconMastercard',
        'tuiIconMir',
        'tuiIconVisa',
    ];

    constructor(
        @Optional()
        @Inject(TUI_ADDITIONAL_ICONS)
        readonly iconsMarker: AdditionalIcons | null,
        @Inject(ClipboardCopyService)
        private readonly clipboardCopyService: ClipboardCopyService,
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {
        const all: Record<string, any> = allIcons;
        const icons = Object.keys(all).filter(
            item =>
                this.commerce.indexOf(item) === -1 &&
                item !== 'tuiCoreIcons' &&
                item !== 'tuiKitIcons',
        );

        this.icons = icons.filter(item => !item.includes('Large'));
        this.iconsLarge = icons.filter(item => item.includes('Large'));

        if (!this.iconsMarker) {
            return;
        }

        this.logos = this.iconsMarker.icons.filter(icon =>
            icon.startsWith('tuiIconLogo'),
        );
        this.iconsMarker.icons = this.iconsMarker.icons.filter(
            icon => !icon.startsWith('tuiIconLogo'),
        );
    }

    copyPath(name: string) {
        this.clipboardCopyService.copyToClipboard(name);

        this.notifications
            .show(`Имя ${name} скопировано`, {
                status: TuiNotification.Success,
            })
            .subscribe();
    }

    getFirstPosition(name: string): boolean {
        return !(allIcons as Record<string, any>)[name].includes('currentColor');
    }

    getHighlight(name: string): boolean {
        if (this.search.length < 2) {
            return false;
        }

        return name.toLowerCase().includes(this.search.toLowerCase());
    }
}
