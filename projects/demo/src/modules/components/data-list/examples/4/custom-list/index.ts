import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_DEFAULT_MATCHER, TuiAutoFocus, TuiFilterPipe, TuiLet} from '@taiga-ui/cdk';
import {
    tuiAsOptionContent,
    TuiDataList,
    tuiIsEditingKey,
    TuiTextfield,
    TuiTextfieldDirective,
} from '@taiga-ui/core';
import {TuiMultiSelect, TuiSelectOption} from '@taiga-ui/kit';

interface Items<T> {
    readonly items: readonly T[];
    readonly name: string;
}

@Component({
    selector: 'custom-list',
    imports: [
        FormsModule,
        TuiAutoFocus,
        TuiDataList,
        TuiFilterPipe,
        TuiLet,
        TuiMultiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
    providers: [tuiAsOptionContent(TuiSelectOption)],
})
export class CustomListComponent<T> {
    @ViewChild(TuiTextfieldDirective, {read: ElementRef})
    private readonly input?: ElementRef<HTMLInputElement>;

    protected value = '';

    protected readonly filter: (item: T, value: string) => boolean = TUI_DEFAULT_MATCHER;

    @Input()
    public items: ReadonlyArray<Items<T>> = [];

    protected get all(): readonly T[] {
        return this.items.flatMap((el) => el.items);
    }

    protected onKeyDown(key: string): void {
        if (tuiIsEditingKey(key)) {
            this.input?.nativeElement.focus({preventScroll: true});
        }
    }
}
