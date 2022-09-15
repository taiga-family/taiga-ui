import {Inject, Pipe, PipeTransform} from '@angular/core';
import {TuiInjectionTokenType} from '@taiga-ui/cdk';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_INPUT_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {tuiFormatSize} from '@taiga-ui/kit/utils';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Pipe({name: `tuiMaxSizeRejectionError`})
export class TuiMaxSizeRejectionErrorPipe implements PipeTransform {
    constructor(
        @Inject(TUI_INPUT_FILE_TEXTS)
        private readonly inputFileTexts$: TuiInjectionTokenType<
            typeof TUI_INPUT_FILE_TEXTS
        >,
        @Inject(TUI_DIGITAL_INFORMATION_UNITS)
        private readonly units$: TuiInjectionTokenType<
            typeof TUI_DIGITAL_INFORMATION_UNITS
        >,
    ) {}

    transform(maxFileSize: number): Observable<string> {
        return combineLatest([this.inputFileTexts$, this.units$]).pipe(
            map(
                ([{maxSizeRejectionReason}, units]) =>
                    maxSizeRejectionReason + tuiFormatSize(units, maxFileSize),
            ),
        );
    }
}
