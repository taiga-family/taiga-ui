import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {LOCATION} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';

import {TUI_SELECTED_VERSION_META} from './version-manager.providers';
import {TAIGA_VERSIONS_META, TuiVersionMeta} from './versions.constants';

@Component({
    selector: `version-manager`,
    templateUrl: `./version-manager.template.html`,
    styleUrls: [`./version-manager.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionManagerComponent {
    readonly versions = TAIGA_VERSIONS_META;

    constructor(
        @Inject(TUI_SELECTED_VERSION_META) readonly initialVersion: TuiVersionMeta | null,
        @Inject(LOCATION) private readonly locationRef: Location,
        @Inject(Router) private readonly router: Router,
    ) {}

    @tuiPure
    getVersionHref(version: TuiVersionMeta): string {
        return `${this.locationRef.origin}/${version.baseHref}${this.router.url}${this.locationRef.search}`;
    }
}
