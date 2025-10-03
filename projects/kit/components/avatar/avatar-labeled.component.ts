import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiFade} from '@taiga-ui/kit/directives/fade';

@Component({
    selector: 'tui-avatar-labeled',
    imports: [TuiFade],
    template: `
        <ng-content />
        @if (label.length) {
            @for (item of split(label); track item) {
                <span tuiFade>
                    {{ item }}
                </span>
            }
        }
    `,
    styleUrls: ['./avatar-labeled.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiAvatarLabeled {
    @Input()
    public label = '';

    @tuiPure
    protected split(label: string): readonly string[] {
        return label.split(' ');
    }
}
