import type {OnChanges, OnInit} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {Validators} from '@angular/forms';
import {TuiValidator} from '@taiga-ui/cdk/directives/validator';

import {
    tuiCreateFileFormatValidator,
    tuiCreateFileSizeValidator,
} from '../files.validators';
import {TUI_INPUT_FILES_OPTIONS} from './input-files.options';

@Directive({
    standalone: true,
    exportAs: 'tuiInputFilesValidator',
    inputs: ['accept', 'maxFileSize'],
    host: {
        '[accept]': 'accept',
    },
})
export class TuiInputFilesValidator extends TuiValidator implements OnInit, OnChanges {
    private readonly options = inject(TUI_INPUT_FILES_OPTIONS);

    public accept = this.options.accept;
    public maxFileSize = this.options.maxFileSize;

    public override ngOnChanges(): void {
        this.update();
    }

    public ngOnInit(): void {
        this.update();
    }

    private update(): void {
        this.validate =
            Validators.compose([
                tuiCreateFileFormatValidator(this.accept),
                tuiCreateFileSizeValidator(this.maxFileSize),
            ]) || Validators.nullValidator;
        this.onChange();
    }
}
