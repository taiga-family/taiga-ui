import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
} from '@angular/core';
import {TuiIdService, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {TUI_CLOSE_WORD, TUI_PRIMITIVE_TEXTFIELD_OPTIONS} from '@taiga-ui/core';
import {Observable} from 'rxjs';

export const TUI_SHEET_CLOSE = `tui-sheet-close`;
export const TUI_SHEET_ID = `tui-sheet-id`;

@Component({
    selector: `[tuiSheetHeading]`,
    templateUrl: `./sheet-heading.template.html`,
    styleUrls: [`./sheet-heading.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiSheetHeadingComponent implements AfterViewInit {
    readonly id = this.idService.generate();

    constructor(
        @Inject(TuiIdService) private readonly idService: TuiIdService,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_PRIMITIVE_TEXTFIELD_OPTIONS)
        readonly options: TuiInjectionTokenType<typeof TUI_PRIMITIVE_TEXTFIELD_OPTIONS>,
    ) {}

    ngAfterViewInit(): void {
        this.elementRef.nativeElement.dispatchEvent(
            new CustomEvent(TUI_SHEET_ID, {bubbles: true, detail: this.id}),
        );
    }

    onClick(): void {
        this.elementRef.nativeElement.dispatchEvent(
            new CustomEvent(TUI_SHEET_CLOSE, {bubbles: true}),
        );
    }
}
