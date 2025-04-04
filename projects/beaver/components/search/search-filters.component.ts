import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import type {AfterContentInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChildren,
    ElementRef,
    inject,
    Input,
    signal,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {TuiItem} from '@taiga-ui/cdk/directives/item';
import {
    tuiControlValue,
    tuiQueryListChanges,
    tuiZonefull,
} from '@taiga-ui/cdk/observables';
import {tuiIsControlEmpty} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiTextfieldOptionsDirective} from '@taiga-ui/core/components/textfield';
import type {TuiSizeS} from '@taiga-ui/core/types';
import {distinctUntilChanged, map, merge, switchMap} from 'rxjs';

import {TuiSearchFilterComponent} from './search-filter.component';

const WIDTH = 12;

@Component({
    standalone: true,
    selector: 'tui-search-filters',
    imports: [NgForOf, NgIf, NgTemplateOutlet, TuiButton, TuiSearchFilterComponent],
    templateUrl: './search-filters.template.html',
    styleUrls: ['./search-filters.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ResizeObserverService,
        tuiButtonOptionsProvider({size: 'xs', appearance: 'flat'}),
    ],
    hostDirectives: [
        {
            directive: TuiTextfieldOptionsDirective,
            inputs: ['tuiTextfieldSize: size'],
        },
    ],
})
export class TuiSearchFiltersComponent implements AfterContentInit {
    @ViewChild('rem')
    private readonly rem?: ElementRef<HTMLDivElement>;

    @ViewChild(TuiButton, {read: ElementRef})
    private readonly button?: ElementRef<HTMLDivElement>;

    @ContentChildren(NgControl, {descendants: true})
    private readonly children: QueryList<NgControl> = EMPTY_QUERY;

    private readonly controls = signal<readonly NgControl[]>([]);

    @ContentChildren(TuiItem, {descendants: true, read: TemplateRef})
    protected readonly templates: QueryList<TemplateRef<any>> = EMPTY_QUERY;

    protected readonly overflown = toSignal(
        inject(ResizeObserverService, {self: true}).pipe(
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

    @Input()
    public size: TuiSizeS = 'm';

    // TODO: Refactor to signal queries when Angular is updated
    public ngAfterContentInit(): void {
        tuiQueryListChanges(this.children)
            .pipe(
                switchMap((all) => merge(...all.map((c) => tuiControlValue(c)))),
                map(() => this.children.toArray()),
            )
            .subscribe((controls) => this.controls.set(controls));
    }

    protected onReset(): void {
        this.children.forEach(({control}, index) => {
            if (control && index >= this.overflown()) {
                control.setValue(null);
            }
        });
    }

    private get unit(): number {
        return this.rem?.nativeElement.offsetWidth || 16;
    }

    private get more(): number {
        return this.button?.nativeElement.clientWidth || 0;
    }
}
