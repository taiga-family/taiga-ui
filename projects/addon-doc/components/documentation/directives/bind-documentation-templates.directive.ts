import {Directive, Input} from '@angular/core';
import {TuiDocumentationProperty} from '@taiga-ui/addon-doc/interfaces';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';
import {merge, NEVER, Observable} from 'rxjs';

import {TuiDocumentationApiHostDirective} from './documentation-api-host.directive';

@Directive({
    selector: '[bindDocumentationTemplates]',
    providers: [
        {
            provide: TuiApiHostService,
            useExisting: TuiBindDocumentationTemplatesDirective,
        },
    ],
})
export class TuiBindDocumentationTemplatesDirective
    implements Omit<TuiApiHostService, 'ngOnDestroy'>
{
    @Input()
    bindDocumentationTemplates: readonly TuiDocumentationApiHostDirective[] = [];

    readonly code$ = NEVER;

    setContent(): Observable<never> {
        throw new Error('Not implemented');
    }

    setProperty(name: string, property: TuiDocumentationProperty): Observable<never> {
        return merge(
            ...this.bindDocumentationTemplates.map(template =>
                template.apiHostService.setProperty(name, property),
            ),
        );
    }

    setTemplate(): Observable<never> {
        throw new Error('Not implemented');
    }
}
