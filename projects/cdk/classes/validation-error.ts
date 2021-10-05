import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

export class TuiValidationError<T extends object = {}> {
    constructor(
        readonly message: PolymorpheusContent<T>,
        readonly context: T = {} as T,
    ) {}
}
