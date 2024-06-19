import {NgForOf, NgIf} from '@angular/common';
import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    EMPTY_ARRAY,
    TUI_DEFAULT_MATCHER,
    TuiAutoFocus,
    TuiFilterPipe,
    TuiLet,
} from '@taiga-ui/cdk';
import {
    TuiDataList,
    tuiIsEditingKey,
    TuiTextfield,
    TuiTextfieldDirective,
} from '@taiga-ui/core';
import {TuiMultiSelectModule} from '@taiga-ui/legacy';

interface Items<T> {
    readonly items: readonly T[];
    readonly name: string;
}

@Component({
    standalone: true,
    selector: 'custom-list',
    imports: [
        NgIf,
        NgForOf,
        FormsModule,
        TuiDataList,
        TuiLet,
        TuiFilterPipe,
        TuiMultiSelectModule,
        TuiTextfield,
        TuiAutoFocus,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export class CustomListComponent<T> {
    @ViewChild(TuiTextfieldDirective, {read: ElementRef})
    private readonly input?: ElementRef<HTMLInputElement>;

    protected value = '';
    protected readonly all = EMPTY_ARRAY;
    protected readonly filter: (item: T, value: string) => boolean = TUI_DEFAULT_MATCHER;

    @Input()
    public items: ReadonlyArray<Items<T>> = [];

    protected onKeyDown(key: string): void {
        if (tuiIsEditingKey(key)) {
            this.input?.nativeElement.focus({preventScroll: true});
        }
    }
}
