import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    HostListener,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    EMPTY_ARRAY,
    TuiContext,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit/interfaces';
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
export class TuiInputFilesComponent extends AbstractTuiNullableControl<
    TuiFileLike | readonly TuiFileLike[]
> {
    @ContentChild(TuiInputFilesDirective, {read: ElementRef<HTMLInputElement>})
    readonly input?: ElementRef<HTMLInputElement>;

    @ContentChild(TemplateRef)
    readonly template?: TemplateRef<TuiContext<boolean>>;

    dataTransfer: DataTransfer | null = null;

    readonly content = new PolymorpheusComponent(TuiInputFilesContent);

    get focused(): boolean {
        return tuiIsNativeFocused(this.input?.nativeElement);
    }

    get fileDragged(): boolean {
        return !!this.dataTransfer?.types.includes('Files');
    }

    @HostListener('change')
    onFilesSelected(): void {
        const input = this.input?.nativeElement;

        if (!input?.files) {
            return;
        }

        this.process(input.files);

        input.value = '';
    }

    onDropped({dataTransfer}: DragEvent): void {
        this.dataTransfer = null;

        if (dataTransfer?.files) {
            this.process(dataTransfer.files);
        }
    }

    onDrag(dataTransfer: DataTransfer | null): void {
        this.dataTransfer = dataTransfer;
    }

    private toArray(
        value: TuiFileLike | readonly TuiFileLike[] | null,
    ): readonly TuiFileLike[] {
        if (!value) {
            return EMPTY_ARRAY;
        }

        return Array.isArray(value) ? value : [value];
    }

    private process(files: FileList): void {
        this.value = this.input?.nativeElement.multiple
            ? [...this.toArray(this.value), ...Array.from(files)]
            : files[0] || null;
    }
}
