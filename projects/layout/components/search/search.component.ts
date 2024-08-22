import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {tuiBlockOptionsProvider} from '@taiga-ui/kit/components/block';
import {tuiSwitchOptionsProvider} from '@taiga-ui/kit/components/switch';

@Component({
    standalone: true,
    selector: 'search[tuiSearch]',
    template: '<ng-content/>',
    styleUrls: ['./search.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({size: 'm'}),
        tuiBlockOptionsProvider({size: 's'}),
        tuiSwitchOptionsProvider({size: 's'}),
        tuiTextfieldOptionsProvider({size: signal('m')}),
    ],
})
export class TuiSearchComponent {}
