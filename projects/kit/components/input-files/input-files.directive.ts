import {Directive, ElementRef, HostBinding, Inject} from '@angular/core';
import {TuiIdService} from '@taiga-ui/cdk';

// eslint-disable-next-line import/no-cycle
import {TuiInputFilesComponent} from './input-files.component';
import {TUI_INPUT_FILES_OPTIONS, TuiInputFilesOptions} from './input-files.options';

@Directive({
    selector: 'input[tuiInputFiles]',
    host: {
        type: 'file',
        class: 't-native',
    },
})
export class TuiInputFilesDirective {
    constructor(
        @Inject(TuiInputFilesComponent) readonly host: TuiInputFilesComponent,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLInputElement>,
        @Inject(TuiIdService) private readonly idService: TuiIdService,
        @Inject(TUI_INPUT_FILES_OPTIONS) private readonly options: TuiInputFilesOptions,
    ) {}

    @HostBinding('tabIndex')
    get tabIndex(): number {
        return this.host.focusable ? 0 : -1;
    }

    @HostBinding('id')
    get id(): string {
        return this.input.id || this.idService.generate();
    }

    @HostBinding('accept')
    get accept(): string {
        return this.input.accept ?? this.options.accepts;
    }

    @HostBinding('multiple')
    get multiple(): boolean {
        return this.input.multiple ?? this.options.multiple;
    }

    @HostBinding('title')
    get title(): string {
        return this.input.getAttribute('title') ?? this.options.title;
    }

    @HostBinding('attr.capture')
    get capture(): string | null {
        return this.input.getAttribute('capture') ?? this.options.capture;
    }

    get input(): HTMLInputElement {
        return this.el.nativeElement;
    }
}
