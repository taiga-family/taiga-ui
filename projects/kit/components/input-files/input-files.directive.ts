import {Directive, ElementRef, HostBinding, Inject} from '@angular/core';
import {TuiIdService} from '@taiga-ui/cdk';

// eslint-disable-next-line import/no-cycle
import {TuiInputFilesComponent} from './input-files.component';
import {TUI_INPUT_FILES_OPTIONS, TuiInputFilesOptions} from './input-files.options';

@Directive({
    selector: `input[tuiInputFiles]`,
    host: {
        type: `file`,
        class: `t-native`,
    },
})
export class TuiInputFilesDirective {
    constructor(
        @Inject(TuiInputFilesComponent) readonly host: TuiInputFilesComponent,
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLInputElement>,
        @Inject(TuiIdService) private readonly idService: TuiIdService,
        @Inject(TUI_INPUT_FILES_OPTIONS) private readonly options: TuiInputFilesOptions,
    ) {}

    @HostBinding(`tabIndex`)
    get tabIndex(): number {
        return this.host.focusable ? 0 : -1;
    }

    @HostBinding(`id`)
    get id(): string {
        return this.elementRef.nativeElement.id || this.idService.generate();
    }

    @HostBinding(`accept`)
    get accept(): TuiInputFilesOptions['accepts'] {
        return this.elementRef.nativeElement.accept ?? this.options.accepts;
    }

    @HostBinding(`multiple`)
    get multiple(): TuiInputFilesOptions['multiple'] {
        return this.elementRef.nativeElement.multiple ?? this.options.multiple;
    }

    @HostBinding(`capture`)
    get capture(): TuiInputFilesOptions['capture'] {
        return (
            (
                this.elementRef.nativeElement as HTMLInputElement & {
                    capture: TuiInputFilesOptions['capture'];
                }
            ).capture ?? this.options.capture
        );
    }

    get input(): HTMLInputElement {
        return this.elementRef.nativeElement;
    }
}
