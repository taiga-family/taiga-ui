import {EMPTY_FUNCTION} from '@taiga-ui/cdk/constants';

export const tuiAssert = {
    enabled: false,
    get assert(): (assertion: boolean, ...args: unknown[]) => void {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
        return this.enabled
            ? Function.prototype.bind.call(console.assert, console)
            : EMPTY_FUNCTION;
    },
};
