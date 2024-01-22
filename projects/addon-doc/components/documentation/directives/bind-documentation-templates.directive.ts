import {Directive, Input} from '@angular/core';
import {TuiDocumentationProperty} from '@taiga-ui/addon-doc/interfaces';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';
import {BehaviorSubject, Observable} from 'rxjs';

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

    readonly code$ = new BehaviorSubject('');

    setContent(): number {
        throw new Error('Not implemented');
    }

    deleteContent(): void {
        throw new Error('Not implemented');
    }

    setProperty(name: string, property: TuiDocumentationProperty): void {
        this.bindDocumentationTemplates.forEach(({apiHostService}) =>
            apiHostService.setProperty(name, property),
        );
    }

    deleteProperty(name: string): void {
        this.bindDocumentationTemplates.forEach(({apiHostService}) =>
            apiHostService.deleteProperty(name),
        );
    }

    setTemplate(): Observable<never> {
        throw new Error('Not implemented');
    }
}
