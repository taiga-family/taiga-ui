import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {WA_NAVIGATOR} from '@ng-web-apis/common';

type TuiCopyId = 'first' | 'second';

@Component({
    selector: 'tui-tooltip-copy',
    template: `
        <ng-content select="[tuiSlot='first']" />
        <div class="t-divider"></div>
        <ng-content select="[tuiSlot='second']" />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTooltipCopyComponent {
    private readonly navigator = inject(WA_NAVIGATOR);
    public copiedId = signal<TuiCopyId | null>(null);

    public copy(id: TuiCopyId, content?: number | string): void {
        this.copiedId.set(id);
        void this.navigator.clipboard.writeText(String(content));
    }
}
