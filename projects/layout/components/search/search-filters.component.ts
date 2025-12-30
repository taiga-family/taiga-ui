import {NgTemplateOutlet} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    contentChildren,
    ElementRef,
    inject,
    input,
    TemplateRef,
    viewChild,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {tuiZonefull} from '@taiga-ui/cdk/observables';
import {tuiIsControlEmpty} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiTextfieldOptionsDirective} from '@taiga-ui/core/components/textfield';
import {type TuiSizeS} from '@taiga-ui/core/types';
import {distinctUntilChanged, map} from 'rxjs';

import {TuiSearchFilterComponent} from './search-filter.component';

const WIDTH = 12;

@Component({
    selector: 'tui-search-filters',
    imports: [NgTemplateOutlet, TuiButton, TuiSearchFilterComponent],
    templateUrl: './search-filters.template.html',
    styleUrl: './search-filters.styles.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        WaResizeObserverService,
        tuiButtonOptionsProvider({size: 'xs', appearance: 'flat'}),
    ],
    hostDirectives: [
        {
            directive: TuiTextfieldOptionsDirective,
            inputs: ['tuiTextfieldSize: size'],
        },
    ],
})
export class TuiSearchFiltersComponent {
    private readonly rem = viewChild<ElementRef<HTMLDivElement>>('rem');

    private readonly button = viewChild(TuiButton, {read: ElementRef});

    private readonly controls = contentChildren(NgControl, {descendants: true});

    protected readonly templates = contentChildren(TuiItem, {
        descendants: true,
        read: TemplateRef,
    });

    protected readonly overflown = toSignal(
        inject(WaResizeObserverService, {self: true}).pipe(
            map((entry) => {
                const width = entry[0]?.contentRect.width ?? 0;

                return Math.floor((width - this.more) / WIDTH / this.unit);
            }),
            distinctUntilChanged(),
            tuiZonefull(),
        ),
        {initialValue: 0},
    );

    protected readonly enabled = computed(() =>
        this.controls().some(
            ({control}, index) =>
                control && index >= this.overflown() && !tuiIsControlEmpty(control),
        ),
    );

    public readonly size = input<TuiSizeS>('m');

    protected onReset(): void {
        this.controls().forEach(({control}, index) => {
            if (control && index >= this.overflown()) {
                control.setValue(null);
            }
        });
    }

    private get unit(): number {
        return this.rem()?.nativeElement.offsetWidth || 16;
    }

    private get more(): number {
        return this.button()?.nativeElement.clientWidth || 0;
    }
}
