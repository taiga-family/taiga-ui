import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import type {SafeStyle} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';
import {TuiColorSelectorModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [TuiDropdown, TuiButton, TuiColorSelectorModule],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    private readonly sanitizer = inject(DomSanitizer);

    protected color = '#ffdd2d';

    protected get background(): SafeStyle {
        return this.sanitizer.bypassSecurityTrustStyle(this.color);
    }
}
