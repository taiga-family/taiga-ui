import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {LOCATION} from '@ng-web-apis/common';

import {
    SELECTED_VERSION_META,
    VERSION_MANAGER_PROVIDERS,
} from './version-manager.providers';
import {TAIGA_VERSIONS_META, TuiVersionMeta} from './versions.constants';

@Component({
    selector: `version-manager`,
    templateUrl: `./version-manager.template.html`,
    styleUrls: [`./version-manager.style.less`],
    providers: VERSION_MANAGER_PROVIDERS,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionManagerComponent {
    readonly versions = TAIGA_VERSIONS_META;

    constructor(
        @Inject(SELECTED_VERSION_META) readonly initialVersion: TuiVersionMeta | null,
        @Inject(LOCATION) private readonly locationRef: Location,
        @Inject(Router) private readonly router: Router,
    ) {}

    getVersionHref(version: TuiVersionMeta): string {
        return `${this.locationRef.origin}/${version.baseHref}${this.router.url}${this.locationRef.search}`;
    }
}
