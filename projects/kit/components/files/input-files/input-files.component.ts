import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    inject,
    input,
    TemplateRef,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {type TuiSizeL} from '@taiga-ui/core/types';
import {PolymorpheusComponent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiInputFilesContent} from './input-files.content';
import {TuiInputFilesDirective} from './input-files.directive';
import {TUI_INPUT_FILES_OPTIONS} from './input-files.options';

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
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-files.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        'data-tui-version': TUI_VERSION,
        tuiInputFiles: '',
        '[attr.data-size]': 'size() || options.size',
        '[class._dragged]': 'fileDragged',
        '(change)': 'onFilesSelected($event.target)',
        '(dragenter)': 'onDrag($event.dataTransfer)',
        '(dragleave)': 'onDrag(null)',
        '(dragover.prevent.zoneless)': '0',
        '(drop.prevent)': 'onDropped($event)',
    },
})
export class TuiInputFiles {
    protected files?: FileList | null;
    protected readonly options = inject(TUI_INPUT_FILES_OPTIONS);
    protected readonly content = new PolymorpheusComponent(TuiInputFilesContent);

    protected readonly template =
        contentChild<TemplateRef<TuiContext<boolean>>>(TemplateRef);

    public readonly input = contentChild(TuiInputFilesDirective);

    public readonly size = input<TuiSizeL | ''>(this.options.size, {
        alias: 'tuiInputFiles',
    });

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

        const input = this.input();

        if (dataTransfer?.files && !input?.disabled()) {
            input?.process(dataTransfer.files);
        }
    }

    protected onDrag(dataTransfer: DataTransfer | null): void {
        this.files = dataTransfer?.files;
    }
}
