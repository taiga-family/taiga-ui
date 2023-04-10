import {Injectable} from '@angular/core';
import {AbstractTuiValueTransformer} from '@taiga-ui/cdk';

@Injectable()
export class ExampleEditorCleanupHtmlTransformer extends AbstractTuiValueTransformer<string> {
    fromControlValue(controlValue: string): string {
        return controlValue;
    }

    toControlValue(componentValue: string): string {
        const tree = new DOMParser().parseFromString(componentValue, `text/html`);

        tree.body.querySelectorAll(`*`).forEach(element => {
            // now we can manipulate with any elements
            // and cleanup any attributes (class for example)
            element.removeAttribute(`class`);
            element.removeAttribute(`style`);
        });

        return tree.body.innerHTML;
    }
}
