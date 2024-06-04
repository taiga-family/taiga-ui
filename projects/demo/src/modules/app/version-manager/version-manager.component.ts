import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {LOCATION} from '@ng-web-apis/common';
import {tuiPure} from '@taiga-ui/cdk';
import {
    TuiDataListComponent,
    TuiDataListDirective,
    TuiOptionComponent,
} from '@taiga-ui/core';
import {TuiStringifyContentPipe, TuiStringifyPipe} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

import {TUI_SELECTED_VERSION_META} from './version-manager.providers';
import type {TuiVersionMeta} from './versions.constants';
import {TUI_VERSIONS_META_OPTIONS} from './versions.constants';

@Component({
    standalone: true,
    selector: 'version-manager',
    imports: [
        TuiSelectModule,
        NgIf,
        FormsModule,
        TuiStringifyPipe,
        TuiStringifyContentPipe,
        TuiDataListComponent,
        TuiDataListDirective,
        NgForOf,
        TuiOptionComponent,
    ],
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
