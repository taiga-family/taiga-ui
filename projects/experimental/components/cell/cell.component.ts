import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TUI_PLATFORM, TuiPlatform} from '@taiga-ui/cdk';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-cell',
    templateUrl: './cell.template.html',
    styleUrls: ['./cell.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[attr.data-size]': 'size',
        '[attr.data-platform]': 'platform',
    },
})
export class TuiCellComponent {
    @Input()
    title: PolymorpheusContent = '';

    @Input()
    description: PolymorpheusContent = '';

    @Input()
    secondaryTitle: PolymorpheusContent = '';

    @Input()
    secondaryDescription: PolymorpheusContent = '';

    @Input()
    size: TuiSizeL | TuiSizeS = 'l';

    constructor(@Inject(TUI_PLATFORM) readonly platform: TuiPlatform) {}
}
