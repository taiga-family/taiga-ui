import {Directive, Input, OnDestroy} from '@angular/core';
import {TuiDocumentationProperty} from '@taiga-ui/addon-doc/interfaces';
import {TuiApiHostService} from '@taiga-ui/addon-doc/services';
import {NEVER} from 'rxjs';

import {TuiDocumentationApiHostDirective} from './documentation-api-host.directive';

type Interface<T> = Pick<T, keyof T>;

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
    implements Interface<TuiApiHostService>, OnDestroy
{
    @Input()
    bindDocumentationTemplates: readonly TuiDocumentationApiHostDirective[] = [];

    readonly code$ = NEVER;

    deleteContent(): void {
        throw new Error('Not implemented');
    }

    deleteProperty(name: string): void {
        this.bindDocumentationTemplates.forEach(template =>
            template.apiHostService.deleteProperty(name),
        );
    }

    ngOnDestroy(): void {
        this.bindDocumentationTemplates.forEach(template => template.apiHostService);
    }

    setContent(): number {
        throw new Error('Not implemented');
    }

    setProperty(name: string, property: TuiDocumentationProperty): void {
        this.bindDocumentationTemplates.forEach(template =>
            template.apiHostService.setProperty(name, property),
        );
    }

    setTemplate(): void {
        throw new Error('Not implemented');
    }
}
