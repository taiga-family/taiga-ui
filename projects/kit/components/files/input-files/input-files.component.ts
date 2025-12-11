import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiInputFilesContent} from './input-files.content';
import {TuiInputFilesDirective} from './input-files.directive';

@Component({
    selector: 'label[tuiInputFiles]',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-content />
        <span
            *polymorpheusOutlet="
                template() || content as text;
                context: {$implicit: fileDragged}
            "
        >
            {{ text }}
        </span>
    `,
    styleUrl: './input-files.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(dragover.prevent.zoneless)': '0',
        '(drop.prevent)': 'onDropped($event)',
        '(dragenter)': 'onDrag($event.dataTransfer)',
        '(dragleave)': 'onDrag(null)',
        '[class._dragged]': 'fileDragged',
        '(change)': 'onFilesSelected($event.target)',
    },
})
export class TuiInputFiles {
    protected files?: FileList | null;
    protected readonly content = new PolymorpheusComponent(TuiInputFilesContent);
    protected readonly template =
        contentChild<TemplateRef<TuiContext<boolean>>>(TemplateRef);

    public readonly input = contentChild(TuiInputFilesDirective);

    protected get fileDragged(): boolean {
        return !!this.files && !this.input()?.disabled();
    }

    protected onFilesSelected(input: HTMLInputElement): void {
        if (!input?.files) {
            return;
        }

        this.input()?.process(input.files);
        input.value = '';
    }

    protected onDropped({dataTransfer}: DragEvent): void {
        this.files = null;

        if (dataTransfer?.files && !this.input()?.disabled()) {
            this.input()?.process(dataTransfer.files);
        }
    }

    protected onDrag(dataTransfer: DataTransfer | null): void {
        this.files = dataTransfer?.files;
    }
}
