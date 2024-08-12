import {NgForOf, NgIf, NgTemplateOutlet} from '@angular/common';
import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChildren,
    ElementRef,
    inject,
    Input,
    NgZone,
    type QueryList,
    signal,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {
    EMPTY_QUERY,
    tuiControlValue,
    tuiIsControlEmpty,
    TuiItem,
    tuiQueryListChanges,
    tuiZonefull,
} from '@taiga-ui/cdk';
import {
    TuiButton,
    tuiButtonOptionsProvider,
    type TuiSizeS,
    TuiTextfieldOptionsDirective,
} from '@taiga-ui/core';
import {TuiSearchFilterComponent} from '@taiga-ui/layout/components/search/search-filter.component';
import {distinctUntilChanged, map, merge, switchMap} from 'rxjs';

const WIDTH = 12;

@Component({
    standalone: true,
    selector: 'tui-search-filters',
    templateUrl: './search-filters.template.html',
    styleUrls: ['./search-filters.styles.less'],
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
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf, TuiButton, NgForOf, NgTemplateOutlet, TuiSearchFilterComponent],
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
            map(([{contentRect}]) =>
                Math.floor((contentRect.width - this.more) / WIDTH / this.unit),
            ),
            distinctUntilChanged(),
            tuiZonefull(inject(NgZone)),
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
