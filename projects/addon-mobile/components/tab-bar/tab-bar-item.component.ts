import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {TuiIcon} from '@taiga-ui/core/components/icon';

@Component({
    selector: 'button[tuiTabBarItem], a[tuiTabBarItem]',
    imports: [TuiAnimated, TuiIcon],
    templateUrl: './tab-bar-item.template.html',
    styleUrl: './tab-bar-item.style.less',
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
