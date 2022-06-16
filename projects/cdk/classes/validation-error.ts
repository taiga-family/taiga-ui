import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export class TuiValidationError<T extends object = Record<string, unknown>> {
    constructor(
        readonly message: PolymorpheusContent<T>,
        readonly context: T = {} as T,
    ) {}
}
