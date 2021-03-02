import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';

export const tuiAssert = {
    enabled: false,
    get assert(): (assertion: boolean, ...args: any[]) => void {
        return this.enabled
            ? Function.prototype.bind.call(console.assert, console)
            : EMPTY_FUNCTION;
    },
};
