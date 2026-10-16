import {Directive, input} from '@angular/core';
import {type TuiHintOptions} from '@taiga-ui/core/portals/hint';
import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

@Directive({selector: '[tuiHintContent]'})
export class TuiChartHint {
    public readonly content = input<PolymorpheusContent>('', {alias: 'tuiHintContent'});
    public readonly appearance = input('', {alias: 'tuiHintAppearance'});
    public readonly direction = input<TuiHintOptions['direction']>(undefined, {
        alias: 'tuiHintDirection',
    });
}
