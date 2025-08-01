import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
} from '@angular/core';
import {WaResizeObserver} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiBadgedContentDirective} from './badged-content.directive';

@Component({
    standalone: true,
    selector: 'tui-badged-content',
    imports: [TuiBadgedContentDirective, WaResizeObserver],
    templateUrl: './badged-content.template.html',
    styleUrls: ['./badged-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBadgedContentComponent {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly el = tuiInjectElement();

    public get imgTop(): string {
        return this.resolve('.t-badge_top img');
    }

    public get imgBottom(): string {
        return this.resolve('.t-badge_bottom img');
    }

    public onResize(): void {
        this.cdr.detectChanges();
    }

    private resolve(selector: string): string {
        return `url(${this.el.querySelector(selector)?.getAttribute('src') || ''})`;
    }
}
