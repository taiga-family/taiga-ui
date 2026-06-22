import {NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject, input} from '@angular/core';
import {TuiDataList} from '@taiga-ui/core/components/data-list';
import {TuiLoader} from '@taiga-ui/core/components/loader';
import {tuiAsAuxiliary} from '@taiga-ui/core/tokens';
import {
    TuiMultiSelect,
    TuiMultiSelectGroupDirective,
} from '@taiga-ui/kit/components/multi-select';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiDataListWrapperComponent} from './data-list-wrapper.component';

interface TuiDataListOptionGroup<T> {
    readonly items: readonly T[];
    readonly label: string;
    readonly hasGroupBoundary: boolean;
    readonly hasHiddenGroupLabel: boolean;
}

@Component({
    selector: 'tui-data-list-wrapper[labels]',
    imports: [
        NgTemplateOutlet,
        PolymorpheusOutlet,
        TuiDataList,
        TuiLoader,
        TuiMultiSelect,
    ],
    templateUrl: './data-list-group-wrapper.template.html',
    styleUrl: './data-list-wrapper.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsAuxiliary(TuiDataListGroupWrapperComponent)],
})
export class TuiDataListGroupWrapperComponent<T> extends TuiDataListWrapperComponent<
    T,
    readonly T[]
> {
    protected readonly multi = inject(TuiMultiSelectGroupDirective, {optional: true});

    protected readonly optionGroups = computed<ReadonlyArray<
        TuiDataListOptionGroup<T>
    > | null>(() => {
        const groups = this.items();

        if (!groups) {
            return null;
        }

        const labels = this.labels();
        const hasMultipleGroups = groups.length > 1;

        return groups.map((items, index) => {
            const label = labels[index] || '';
            const hasVisibleLabel = label.length > 0;
            const hasGroupBoundary = hasMultipleGroups || hasVisibleLabel;

            return {
                items,
                label,
                hasGroupBoundary,
                hasHiddenGroupLabel: hasMultipleGroups && !hasVisibleLabel,
            };
        });
    });

    public readonly labels = input<readonly string[]>([]);
}
