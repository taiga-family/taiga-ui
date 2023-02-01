import {TuiContextWithImplicit} from './context-with-implicit';

export class TuiForOfContextWithImplicit<T> implements TuiContextWithImplicit<T> {
    constructor(readonly $implicit: T, public index: number, public count: number) {}

    get first(): boolean {
        return this.index === 0;
    }

    get last(): boolean {
        return this.index === this.count - 1;
    }

    get even(): boolean {
        return this.index % 2 === 0;
    }

    get odd(): boolean {
        return !this.even;
    }
}
