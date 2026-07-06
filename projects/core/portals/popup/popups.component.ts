import {
    type AfterViewChecked,
    ChangeDetectionStrategy,
    Component,
    type EmbeddedViewRef,
    type ViewRef,
} from '@angular/core';
import {TuiVCR} from '@taiga-ui/cdk/directives/vcr';
import {TuiPortals, TuiPortalService} from '@taiga-ui/cdk/portals';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';

import {TuiPopupService} from './popup.service';

export const TUI_CDR = '_tuiCdr';

@Component({
    selector: 'tui-popups',
    imports: [TuiVCR],
    template: '<ng-content/><ng-container tuiVCR />',
    styleUrl: './popups.style.less',
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [tuiProvide(TuiPortalService, TuiPopupService)],
})
export class TuiPopups extends TuiPortals implements AfterViewChecked {
    public ngAfterViewChecked(): void {
        for (let i = 0; i < this.anchor().vcr.length; i++) {
            const ref = this.anchor().vcr.get(i);

            if (isEmbeddedViewRef<Record<string, any>>(ref)) {
                ref.context[TUI_CDR]?.markForCheck();
            }
        }
    }
}

function isEmbeddedViewRef<C>(ref?: ViewRef | null): ref is EmbeddedViewRef<C> {
    return !!ref && 'context' in ref;
}
