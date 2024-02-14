import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostListener,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {TuiContext} from '@taiga-ui/cdk';
import {PolymorpheusComponent, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiInputFilesContent} from './input-files.content';
import {TuiInputFilesDirective} from './input-files.directive';

@Component({
    standalone: true,
    selector: 'label[tuiInputFiles]',
    imports: [PolymorpheusModule],
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
        '(dragover.prevent.silent)': '0',
        '(drop.prevent)': 'onDropped($event)',
        '(dragenter)': 'onDrag($event.dataTransfer)',
        '(dragleave.self)': 'onDrag(null)',
        '[class._dragged]': 'fileDragged',
    },
})
export class TuiInputFilesComponent {
    @ContentChild(TuiInputFilesDirective)
    readonly input?: TuiInputFilesDirective;

    @ContentChild(TemplateRef)
    readonly template?: TemplateRef<TuiContext<boolean>>;

    files?: FileList | null;

    readonly content = new PolymorpheusComponent(TuiInputFilesContent);

    get fileDragged(): boolean {
        return !!this.files && !this.input?.computedDisabled;
    }

    @HostListener('change', ['$event.target'])
    onFilesSelected(input: HTMLInputElement): void {
        if (!input?.files) {
            return;
        }

        this.input?.process(input.files);
        input.value = '';
    }

    onDropped({dataTransfer}: DragEvent): void {
        this.files = null;

        if (dataTransfer?.files && !this.input?.computedDisabled) {
            this.input?.process(dataTransfer.files);
        }
    }

    onDrag(dataTransfer: DataTransfer | null): void {
        this.files = dataTransfer?.files;
    }
}
