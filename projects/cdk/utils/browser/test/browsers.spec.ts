import {tuiIsEdge, tuiIsEdgeOlderThan, tuiIsFirefox, tuiIsSafari} from '@taiga-ui/cdk';

describe(`Browsers`, () => {
    it(`isEdge`, () => {
        expect(tuiIsEdge(`edge`)).toBe(true);
    });

    it(`isFirefox`, () => {
        expect(tuiIsFirefox(`firefox`)).toBe(true);
        expect(tuiIsFirefox(`Firefox`)).toBe(true);
    });

    it(`isEdgeOlderThan`, () => {
        expect(tuiIsEdgeOlderThan(17, `edge/16`)).toBe(true);
        expect(tuiIsEdgeOlderThan(17, `edge/18`)).toBe(false);
    });

    describe(`isSafari`, () => {
        it(`detect by SafariRemoteNotification`, () => {
            expect(
                tuiIsSafari({
                    ownerDocument: {
                        defaultView: {
                            safari: {
                                pushNotification: new (class {
                                    toString(): string {
                                        return `[object SafariRemoteNotification]`;
                                    }
                                })(),
                            },
                        },
                    },
                } as unknown as Element),
            ).toBe(true);

            expect(
                tuiIsSafari({
                    ownerDocument: {
                        defaultView: {navigator: {}},
                    },
                } as unknown as Element),
            ).toBe(false);
        });

        it(`detect by vendor`, () => {
            expect(
                tuiIsSafari({
                    ownerDocument: {
                        defaultView: {
                            navigator: {
                                vendor: `Apple Computer, Inc.`,
                                userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15`,
                            },
                        },
                    },
                } as unknown as Element),
            ).toBe(true);

            expect(
                tuiIsSafari({
                    ownerDocument: {
                        defaultView: {
                            navigator: {
                                vendor: `Google Inc.`,
                                userAgent: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36`,
                            },
                        },
                    },
                } as unknown as Element),
            ).toBe(false);
        });
    });
});
