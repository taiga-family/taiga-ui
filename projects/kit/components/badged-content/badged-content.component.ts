import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
} from '@angular/core';

import {TuiBadgedContentDirective} from './badged-content.directive';

@Component({
    standalone: true,
    selector: 'tui-badged-content',
    imports: [TuiBadgedContentDirective],
    templateUrl: './badged-content.template.html',
    styleUrls: ['./badged-content.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBadgedContentComponent {
    private readonly cdr = inject(ChangeDetectorRef);

    public onResize(): void {
        this.cdr.detectChanges();
    }
}
