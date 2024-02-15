import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {LOCATION} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';

import {TUI_SELECTED_VERSION_META} from './version-manager.providers';
import {TUI_VERSIONS_META_OPTIONS, TuiVersionMeta} from './versions.constants';

@Component({
    selector: 'version-manager',
    templateUrl: './version-manager.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionManagerComponent {
    private readonly locationRef = inject(LOCATION);
    private readonly router = inject(Router);
    readonly initialVersion = inject(TUI_SELECTED_VERSION_META);
    readonly versions = inject(TUI_VERSIONS_META_OPTIONS);

    @tuiPure
    getVersionHref(version: TuiVersionMeta): string {
        return `${this.locationRef.origin}/${version.baseHref}${this.router.url}${this.locationRef.search}`.replaceAll(
            /(https?:\/\/)|(\/)+/g,
            '$1$2',
        );
    }
}
