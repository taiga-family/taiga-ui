import {Injectable} from '@angular/core';
import {tuiLegacyEditorConverter} from '@taiga-ui/addon-editor';
import {AbstractTuiValueTransformer} from '@taiga-ui/cdk';

@Injectable()
export class ExampleEditorConvertLegacyHtmlTransformer extends AbstractTuiValueTransformer<string> {
    fromControlValue(controlValue: string): string {
        return tuiLegacyEditorConverter(controlValue);
    }

    toControlValue(componentValue: string): string {
        return componentValue;
    }
}
