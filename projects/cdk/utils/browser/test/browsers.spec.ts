import {isIE, isEdge, isEdgeOlderThan, isFirefox, tuiIsSafari} from '@taiga-ui/cdk';

describe(`Browsers`, () => {
    it(`isIE`, () => {
        expect(isIE(`trident`)).toBe(true);
    });

    it(`isEdge`, () => {
        expect(isEdge(`edge`)).toBe(true);
    });

    it(`isFirefox`, () => {
        expect(isFirefox(`firefox`)).toBe(true);
        expect(isFirefox(`Firefox`)).toBe(true);
    });

    it(`isEdgeOlderThan`, () => {
        expect(isEdgeOlderThan(17, `edge/16`)).toBe(true);
        expect(isEdgeOlderThan(17, `edge/18`)).toBe(false);
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
