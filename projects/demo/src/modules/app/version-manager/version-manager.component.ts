import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {LOCATION} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';

import {TUI_SELECTED_VERSION_META} from './version-manager.providers';
import type {TuiVersionMeta} from './versions.constants';
import {TUI_VERSIONS_META_OPTIONS} from './versions.constants';

@Component({
    selector: 'version-manager',
    templateUrl: './version-manager.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionManagerComponent {
    private readonly locationRef = inject(LOCATION);
    private readonly router = inject(Router);
    protected readonly initialVersion = inject(TUI_SELECTED_VERSION_META);
    protected readonly versions = inject(TUI_VERSIONS_META_OPTIONS);

    @tuiPure
    protected getVersionHref(version: TuiVersionMeta): string {
        return `${this.locationRef.origin}/${version.baseHref}${this.router.url}${this.locationRef.search}`.replaceAll(
            /(https?:\/\/)|(\/)+/g,
            '$1$2',
        );
    }
}
