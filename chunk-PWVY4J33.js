import"./chunk-HU6DUUP4.js";var o=`import {Component, computed, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiActiveZone, TuiObscured} from '@taiga-ui/cdk';
import {TuiButton, TuiDataList, TuiDropdown, TuiTitle} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';

interface ExampleAction {
    readonly description: string;
    readonly title: string;
}

@Component({
    imports: [
        TuiActiveZone,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiObscured,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly actions: readonly ExampleAction[] = [
        {
            title: 'Create task',
            description: 'Draft a follow-up item for the team',
        },
        {
            title: 'Schedule sync',
            description: 'Find a 30-minute window for everyone',
        },
        {
            title: 'Share update',
            description: 'Post the latest progress to the channel',
        },
    ];

    protected readonly open = signal(false);
    protected readonly selected = signal<ExampleAction | null>(null);
    protected readonly buttonLabel = computed(() => this.selected()?.title ?? 'Choose');

    protected onClick(): void {
        this.open.update((open) => !open);
    }

    protected onObscured(obscured: boolean): void {
        if (obscured) {
            this.open.set(false);
        }
    }

    protected onActiveZone(active: boolean): void {
        if (!active) {
            this.open.set(false);
        }
    }

    protected onSelect(action: ExampleAction): void {
        this.selected.set(action);
        this.open.set(false);
    }
}
`;export{o as default};
