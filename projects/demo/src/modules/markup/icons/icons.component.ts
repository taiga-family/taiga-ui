import {Component, Inject, InjectionToken, Optional} from '@angular/core';
import {ClipboardCopyService} from '@taiga-ui/addon-doc';
import * as allWYSIWYGImports from '@taiga-ui/addon-editor';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
import * as allIcons from '@taiga-ui/icons';
import {changeDetection} from '../../../change-detection-strategy';

const DEPRECATED = [
    'tuiIconArchiveLarge',
    'tuiIconDropLarge',
    'tuiIconEditLarge',
    'tuiIconGeo2Large',
    'tuiIconPauseLarge',
    'tuiIconPhoneLarge',
    'tuiIconPlayLarge',
    'tuiIconSettingsLarge',
    'tuiIconToggleOffLarge',
    'tuiIconTargetCircleLarge',
    'tuiIconVideoLarge',
    'tuiIconToggleOff',
    'tuiIconStructura',
    'tuiIconSettings2',
    'tuiIconRight',
    'tuiIconKey',
    'tuiIconHome',
    'tuiIconHide',
    'tuiIconShow',
    'tuiIconFolderDelete',
    'tuiIconFolderAdd',
    'tuiIconCreate',
    'tuiIconChat',
    'tuiIconBookmarks',
    'tuiIconBookmarks',
    'tuiIconOff',
    'tuiIconPause',
    'tuiIconPlay',
    'tuiIconPlay',
    'tuiIconCalculator',
    'tuiIconDoc',
    'tuiIconUnlock',
    'tuiIconLeft',
    'tuiIconRight',
    'tuiIconNotification',
    'tuiIconEyeClosedLarge',
    'tuiIconEyeOpenLarge',
];

export const TUI_ADDITIONAL_ICONS = new InjectionToken<AdditionalIcons>(
    'Additional icons',
);

export interface AdditionalIcons {
    package: string;
    icons: ReadonlyArray<string>;
}

@Component({
    selector: 'icons',
    templateUrl: 'icons.template.html',
    styleUrls: ['icons.style.less'],
    changeDetection,
})
export class IconsComponent {
    icons: ReadonlyArray<string>;

    assets: ReadonlyArray<string> = [];

    iconsToolbar: ReadonlyArray<string> = [];

    iconsLarge: ReadonlyArray<string> = [];

    logos: ReadonlyArray<string> = [];

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
        const allWYSIWYG: Record<string, any> = allWYSIWYGImports;
        const icons = Object.keys(all).filter(
            item =>
                this.commerce.indexOf(item) === -1 &&
                DEPRECATED.indexOf(item) === -1 &&
                !item.startsWith('tuiIconLogo') &&
                !item.startsWith('tuiIconToolbar') &&
                item !== 'tuiCoreIcons' &&
                item !== 'tuiKitIcons',
        );

        this.iconsToolbar = Object.keys(allWYSIWYG).filter(
            item => item.slice(0, 7) === 'tuiIcon',
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
            .showNotification(`Имя ${name} скопировано`, {
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
