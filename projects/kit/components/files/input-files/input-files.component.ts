import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {
    PolymorpheusComponent,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import {TuiInputFilesContent} from './input-files.content';
import {TuiInputFilesDirective} from './input-files.directive';

@Component({
    standalone: true,
    selector: 'label[tuiInputFiles]',
    imports: [PolymorpheusOutlet, PolymorpheusTemplate],
    template: `
        <ng-content></ng-content>
        <span
            *polymorpheusOutlet="
                template || content as text;
                context: {$implicit: fileDragged}
            "
        >
            {{ text }}
        </span>
    `,
    styleUrls: ['./input-files.style.less'],
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
    @ContentChild(TemplateRef)
    protected readonly template?: TemplateRef<TuiContext<boolean>>;

    protected files?: FileList | null;
    protected readonly content = new PolymorpheusComponent(TuiInputFilesContent);

    @ContentChild(TuiInputFilesDirective)
    public readonly input?: TuiInputFilesDirective;

    protected get fileDragged(): boolean {
        return !!this.files && !this.input?.disabled();
    }

    protected onFilesSelected(input: HTMLInputElement): void {
        if (!input?.files) {
            return;
        }

        this.input?.process(input.files);
        input.value = '';
    }

    protected onDropped({dataTransfer}: DragEvent): void {
        this.files = null;

        if (dataTransfer?.files && !this.input?.disabled()) {
            this.input?.process(dataTransfer.files);
        }
    }

    protected onDrag(dataTransfer: DataTransfer | null): void {
        this.files = dataTransfer?.files;
    }
}
