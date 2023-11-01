import {Directive, Inject} from '@angular/core';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';

@Directive({
    selector: '[documentationApiHost]',
    providers: [TuiApiHostService],
    exportAs: 'documentationApiHost',
})
export class TuiDocumentationApiHostDirective {
    constructor(@Inject(TuiApiHostService) readonly apiHostService: TuiApiHostService) {}
}
