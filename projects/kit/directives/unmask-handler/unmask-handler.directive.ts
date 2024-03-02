import {Directive, Input} from '@angular/core';
import {
    MASKITO_DEFAULT_OPTIONS,
    type MaskitoOptions,
    maskitoTransform,
} from '@maskito/core';
import {AbstractTuiValueTransformer, type TuiMapper} from '@taiga-ui/cdk';
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
