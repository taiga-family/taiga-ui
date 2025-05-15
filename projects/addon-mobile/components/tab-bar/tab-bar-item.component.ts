import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {TuiIcon} from '@taiga-ui/core/components/icon';

@Component({
    standalone: true,
    selector: 'button[tuiTabBarItem], a[tuiTabBarItem]',
    imports: [NgIf, TuiIcon, TuiAnimated],
    templateUrl: './tab-bar-item.template.html',
    styleUrls: ['./tab-bar-item.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTabBarItem {
    @Input()
    public icon = '';

    @Input()
    public badge?: number | null = null;

    protected format(value: number): string {
        return value > 999 ? '999+' : String(value);
    }
}
