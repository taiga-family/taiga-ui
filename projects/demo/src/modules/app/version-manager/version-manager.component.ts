import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {LOCATION} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';

import {
    SELECTED_VERSION_META,
    VERSION_MANAGER_PROVIDERS,
} from './version-manager.providers';
import {TAIGA_VERSIONS_META, TaigaVersionMeta} from './versions.constants';

@Component({
    selector: 'version-manager',
    templateUrl: './version-manager.template.html',
    styleUrls: ['./version-manager.style.less'],
    providers: VERSION_MANAGER_PROVIDERS,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionManagerComponent {
    readonly versions = TAIGA_VERSIONS_META;

    constructor(
        @Inject(SELECTED_VERSION_META) readonly initialVersion: TaigaVersionMeta | null,
        @Inject(LOCATION) private readonly location: Location,
        @Inject(Router) private readonly router: Router,
    ) {}

    @tuiPure
    getVersionHref(baseHref: string): string {
        return `${this.location.origin}/${baseHref}${this.router.url}${this.location.search}`;
    }
}
