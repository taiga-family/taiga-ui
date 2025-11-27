import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {WA_LOCATION} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

import {TUI_SELECTED_VERSION_META} from './version-manager.providers';
import {TUI_VERSIONS_META_OPTIONS, type TuiVersionMeta} from './versions.constants';

@Component({
    selector: 'version-manager',
    imports: [FormsModule, TuiButton, TuiChevron, TuiDataList, TuiDropdown],
    templateUrl: './version-manager.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionManager {
    readonly #locationRef = inject(WA_LOCATION);
    readonly #router = inject(Router);
    protected readonly initialVersion = inject(TUI_SELECTED_VERSION_META);
    protected readonly versions = inject(TUI_VERSIONS_META_OPTIONS);
    protected open = false;

    @tuiPure
    protected getVersionHref(version: TuiVersionMeta): string {
        return `${this.#locationRef.origin}/${version.baseHref}${this.#router.url}${this.#locationRef.search}`.replaceAll(
            /(https?:\/\/)|(\/)+/g,
            '$1$2',
        );
    }
}
