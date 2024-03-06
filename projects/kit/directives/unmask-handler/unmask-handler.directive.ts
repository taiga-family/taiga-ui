import {Directive, Input} from '@angular/core';
import type {MaskitoOptions} from '@maskito/core';
import {MASKITO_DEFAULT_OPTIONS, maskitoTransform} from '@maskito/core';
import type {TuiMapper} from '@taiga-ui/cdk';
import {AbstractTuiValueTransformer} from '@taiga-ui/cdk';
import {identity} from 'rxjs';

@Directive({
    selector: '[maskito][tuiUnmaskHandler]',
    providers: [
        {
            provide: AbstractTuiValueTransformer,
            useExisting: TuiUnmaskHandlerDirective,
        },
    ],
})
export class TuiUnmaskHandlerDirective extends AbstractTuiValueTransformer<string> {
    @Input()
    public tuiUnmaskHandler: TuiMapper<string, string> = identity;

    @Input()
    public maskito: MaskitoOptions | null = null;

    public override fromControlValue(controlValue: unknown): string {
        return maskitoTransform(
            String(controlValue ?? ''),
            this.maskito || MASKITO_DEFAULT_OPTIONS,
        );
    }

    public override toControlValue(value: string): string {
        return this.tuiUnmaskHandler(value);
    }
}
