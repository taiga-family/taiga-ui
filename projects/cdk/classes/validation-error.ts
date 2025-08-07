import {type PolymorpheusContent} from '@taiga-ui/polymorpheus';

export class TuiValidationError<T extends Record<string, any> = Record<string, unknown>> {
    constructor(
        public readonly message: PolymorpheusContent<T>,
        public readonly context: T = {} as T,
    ) {}
}
