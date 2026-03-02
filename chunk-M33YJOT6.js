import"./chunk-HU6DUUP4.js";var i=`import {Component, ElementRef, inject, input, signal, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TUI_DEFAULT_MATCHER, TuiAutoFocus, TuiFilterPipe} from '@taiga-ui/cdk';
import {
    tuiAsOptionContent,
    TuiDataList,
    TuiInput,
    TuiInputDirective,
    tuiIsEditingKey,
    tuiItemsHandlersProvider,
    TuiTextfieldComponent,
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
        TuiInput,
        TuiMultiSelect,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
    providers: [
        tuiAsOptionContent(TuiSelectOption),
        tuiItemsHandlersProvider({
            identityMatcher: signal((a: string[], b: string[]) =>
                Array.isArray(a) && Array.isArray(b)
                    ? a.length === b.length && a.every((x) => b.includes(x))
                    : a === b,
            ),
        }),
    ],
})
export class CustomListComponent<T> {
    @ViewChild(TuiInputDirective, {read: ElementRef})
    private readonly input?: ElementRef<HTMLInputElement>;

    private readonly control = inject(TuiTextfieldComponent).control;

    public readonly items = input<ReadonlyArray<Items<T>>>([]);

    protected value = '';
    protected readonly all = [];
    protected readonly filter: (item: T, value: string) => boolean = TUI_DEFAULT_MATCHER;

    protected onKeyDown(key: string): void {
        if (tuiIsEditingKey(key)) {
            this.input?.nativeElement.focus({preventScroll: true});
        }
    }

    protected select(value: readonly T[]): void {
        this.control()?.control?.setValue(value);
    }
}
`;export{i as default};
