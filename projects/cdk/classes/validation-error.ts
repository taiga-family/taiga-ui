import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export class TuiValidationError<T extends Record<string, any> = Record<string, unknown>> {
    constructor(
        readonly message: PolymorpheusContent<T>,
        readonly context: T = {} as T,
    ) {}
}
