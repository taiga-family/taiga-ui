import {Injector} from '@angular/core';
import {TuiApiHostService, TuiDocumentationProperty} from '@taiga-ui/addon-doc';
import {BehaviorSubject, first, Observable} from 'rxjs';

async function firstValueFrom<T>(obs$: Observable<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        obs$.pipe(first()).subscribe({
            next: resolve,
            error: reject,
        });
    });
}

const htmlContent = `<div class="test">
    <p>Hello <b>World</b>!</p>
</div>`;

describe('TuiApiHostService', () => {
    let injector: Injector;
    let rootHost: TuiApiHostService;

    const tags = ['input', 'img', 'button', 'div'];

    interface PropertiesTestCase {
        name: string;
        properties: Record<string, TuiDocumentationProperty>;
    }

    interface ContentTestCase {
        name: string;
        content: string;
    }

    const basePropertiesTestCases: PropertiesTestCase[] = [
        {
            name: 'no baseProperties',
            properties: {},
        },
        {
            name: 'null base property without value',
            properties: {
                prop: {
                    type: null,
                },
            },
        },
        {
            name: 'null base property with value',
            properties: {
                prop: {
                    type: null,
                    value: "'123'",
                },
            },
        },
        {
            name: 'input base property',
            properties: {
                prop: {
                    type: 'input',
                    value: 'prop',
                },
            },
        },
        {
            name: 'string input base property',
            properties: {
                prop: {
                    type: 'input',
                    value: "'prop'",
                },
            },
        },
        {
            name: 'output base property',
            properties: {
                prop: {
                    type: 'output',
                    value: 'onProp()',
                },
            },
        },
        {
            name: 'two-way-binding base property',
            properties: {
                prop: {
                    type: 'input-output',
                    value: 'prop',
                },
            },
        },
        {
            name: 'multiple base property',
            properties: {
                propB: {
                    type: null,
                },
                propA: {
                    type: null,
                },
                propBV: {
                    type: null,
                    value: '321',
                },
                propAV: {
                    type: null,
                    value: '123',
                },
                propBI: {
                    type: 'input',
                    value: 'prop',
                },
                propAI: {
                    type: 'input',
                    value: 'prop',
                },
                propBIS: {
                    type: 'input',
                    value: "'prop'",
                },
                propAIS: {
                    type: 'input',
                    value: "'prop'",
                },
                propBO: {
                    type: 'output',
                    value: 'onProp()',
                },
                propAO: {
                    type: 'output',
                    value: 'onProp()',
                },
                propBT: {
                    type: 'input-output',
                    value: 'prop',
                },
                propAT: {
                    type: 'input-output',
                    value: 'prop',
                },
            },
        },
    ];

    const propertiesTestCases: PropertiesTestCase[] = [
        {
            name: 'no additional properties',
            properties: {},
        },
        {
            name: 'overridden base property',
            properties: {
                prop: {
                    type: null,
                },
            },
        },
        {
            name: 'additional input property',
            properties: {
                foo: {
                    type: 'input',
                    value: 'bar',
                },
            },
        },
    ];

    const contentTestCases: ContentTestCase[] = [
        {
            name: 'no content',
            content: '',
        },
        {
            name: 'text content',
            content: 'Hello world!',
        },
        {
            name: 'html content',
            content: htmlContent,
        },
    ];

    beforeEach(() => {
        injector = Injector.create({
            providers: [
                {
                    provide: TuiApiHostService,
                },
            ],
        });
        rootHost = injector.get(TuiApiHostService);
    });

    it('should create with default parameters', async () => {
        expect(rootHost).toBeTruthy();
        await expect(firstValueFrom(rootHost.code$)).resolves.toMatchSnapshot();
    });

    describe('code rendering', () => {
        describe.each(tags)('with tagName "%s";', tagName => {
            describe.each(basePropertiesTestCases)('with $name;', ({properties}) => {
                beforeEach(() => {
                    rootHost
                        .setTemplate(
                            new BehaviorSubject({
                                tagName,
                                baseProperties: properties,
                            }),
                        )
                        .subscribe();
                });

                describe.each(contentTestCases)('with $name;', ({content}) => {
                    beforeEach(() => {
                        rootHost.setContent(new BehaviorSubject(content)).subscribe();
                    });

                    describe.each(propertiesTestCases)('with $name;', ({properties}) => {
                        beforeEach(() => {
                            Object.entries(properties).forEach(([name, property]) => {
                                rootHost.setProperty(name, property).subscribe();
                            });
                        });

                        it('should render correct code', async () => {
                            await expect(
                                firstValueFrom(rootHost.code$),
                            ).resolves.toMatchSnapshot();
                        });
                    });
                });
            });
        });
    });

    describe('setTemplate', () => {
        let template1$: Observable<never>;
        let template2$: Observable<never>;

        beforeEach(() => {
            template1$ = rootHost.setTemplate(
                new BehaviorSubject({
                    tagName: 'div',
                    baseProperties: {
                        class: {
                            type: null,
                            value: 'test',
                        },
                    },
                }),
            );
            template2$ = rootHost.setTemplate(
                new BehaviorSubject({
                    tagName: 'button',
                    baseProperties: {
                        class: {
                            type: null,
                            value: 'test',
                        },
                    },
                }),
            );
        });

        it('should set template on subscription', async () => {
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe('');
            template1$.subscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
        });

        it('should reset template on unsubscribe', async () => {
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe('');
            const subscription = template1$.subscribe();

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
            subscription.unsubscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe('');
        });

        it('should reset template on subscribe to other template', async () => {
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe('');
            template1$.subscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
            template2$.subscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<button class="test"></button>',
            );
        });

        it('should emit new code on set template', () => {
            const codeCb = jest.fn();

            rootHost.code$.subscribe(codeCb);

            expect(codeCb).toHaveBeenCalledWith('');
            expect(codeCb).toHaveBeenCalledTimes(1);
            codeCb.mockClear();

            const subscription = template1$.subscribe();

            expect(codeCb).toHaveBeenCalledWith('<div class="test"></div>');
            expect(codeCb).toHaveBeenCalledTimes(1);
            codeCb.mockClear();

            subscription.unsubscribe();

            expect(codeCb).toHaveBeenCalledWith('');
            expect(codeCb).toHaveBeenCalledTimes(1);
        });
    });

    describe('setProperty', () => {
        beforeEach(() => {
            rootHost
                .setTemplate(
                    new BehaviorSubject({
                        tagName: 'div',
                        baseProperties: {
                            class: {
                                type: null,
                                value: 'test',
                            },
                        },
                    }),
                )
                .subscribe();
        });

        it('should set property on subscription', async () => {
            const property$ = rootHost.setProperty('prop', {
                type: 'input',
                value: 'val',
            });

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
            property$.subscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div [prop]="val" class="test"></div>',
            );
        });

        it('should reset property on unsubscribe', async () => {
            const property$ = rootHost.setProperty('prop', {
                type: 'input',
                value: 'val',
            });

            const subscription = property$.subscribe();

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div [prop]="val" class="test"></div>',
            );
            subscription.unsubscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
        });

        it('should reset property on subscribe to other property with the same name', async () => {
            rootHost
                .setProperty('prop', {
                    type: 'input',
                    value: 'foo',
                })
                .subscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div [prop]="foo" class="test"></div>',
            );
            rootHost
                .setProperty('prop', {
                    type: 'input',
                    value: 'bar',
                })
                .subscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div [prop]="bar" class="test"></div>',
            );
        });

        it('should emit new code on set property', () => {
            const codeCb = jest.fn();

            rootHost.code$.subscribe(codeCb);

            expect(codeCb).toHaveBeenCalledWith('<div class="test"></div>');
            expect(codeCb).toHaveBeenCalledTimes(1);
            codeCb.mockClear();

            const subscription = rootHost
                .setProperty('prop', {
                    type: 'input',
                    value: 'foo',
                })
                .subscribe();

            expect(codeCb).toHaveBeenCalledWith('<div [prop]="foo" class="test"></div>');
            expect(codeCb).toHaveBeenCalledTimes(1);
            codeCb.mockClear();

            subscription.unsubscribe();

            expect(codeCb).toHaveBeenCalledWith('<div class="test"></div>');
            expect(codeCb).toHaveBeenCalledTimes(1);
        });
    });

    describe('setContent', () => {
        beforeEach(() => {
            rootHost
                .setTemplate(
                    new BehaviorSubject({
                        tagName: 'div',
                        baseProperties: {
                            class: {
                                type: null,
                                value: 'test',
                            },
                        },
                    }),
                )
                .subscribe();
        });

        it('should set content on subscription', async () => {
            const content$ = rootHost.setContent(new BehaviorSubject('content'));

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
            content$.subscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test">\n    content\n</div>',
            );
        });

        it('should reset content on unsubscribe', async () => {
            const content$ = rootHost.setContent(new BehaviorSubject('content'));

            const subscription = content$.subscribe();

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test">\n    content\n</div>',
            );
            subscription.unsubscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
        });

        it('should add content on subscribe to other', async () => {
            const subscription = rootHost
                .setContent(new BehaviorSubject('content'))
                .subscribe();

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test">\n    content\n</div>',
            );
            rootHost.setContent(new BehaviorSubject('test')).subscribe();

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test">\n    content\n    test\n</div>',
            );

            subscription.unsubscribe();
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test">\n    test\n</div>',
            );
        });

        it('should emit new code on set content', () => {
            const codeCb = jest.fn();

            rootHost.code$.subscribe(codeCb);

            expect(codeCb).toHaveBeenCalledWith('<div class="test"></div>');
            expect(codeCb).toHaveBeenCalledTimes(1);
            codeCb.mockClear();

            const subscription = rootHost
                .setContent(new BehaviorSubject('content'))
                .subscribe();

            expect(codeCb).toHaveBeenCalledWith(
                '<div class="test">\n    content\n</div>',
            );
            expect(codeCb).toHaveBeenCalledTimes(1);
            codeCb.mockClear();

            subscription.unsubscribe();

            expect(codeCb).toHaveBeenCalledWith('<div class="test"></div>');
            expect(codeCb).toHaveBeenCalledTimes(1);
        });
    });

    describe('children hosts', () => {
        let childHosts: TuiApiHostService[];

        beforeEach(() => {
            childHosts = [
                Injector.create({
                    providers: [
                        {
                            provide: TuiApiHostService,
                        },
                    ],
                    parent: injector,
                }).get(TuiApiHostService),
                Injector.create({
                    providers: [
                        {
                            provide: TuiApiHostService,
                        },
                    ],
                    parent: injector,
                }).get(TuiApiHostService),
            ];
        });

        describe('with template in root host', () => {
            beforeEach(() => {
                rootHost
                    .setTemplate(
                        new BehaviorSubject({
                            tagName: 'div',
                            baseProperties: {},
                        }),
                    )
                    .subscribe();
            });

            it('should render correct initial code', async () => {
                await expect(firstValueFrom(rootHost.code$)).resolves.toBe('<div></div>');
            });

            it.each([1, 2])(
                'should render correct code on add template to childHost%p',
                async i => {
                    childHosts[i - 1]
                        .setTemplate(
                            new BehaviorSubject({
                                tagName: 'div',
                                baseProperties: {
                                    class: {
                                        type: null,
                                        value: 'test',
                                    },
                                },
                            }),
                        )
                        .subscribe();

                    await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                        '<div>\n    <div class="test"></div>\n</div>',
                    );
                },
            );

            it.each([
                [1, 2],
                [2, 1],
            ])(
                'should render correct code on add template to childHost%i and childHost%i',
                async (a, b) => {
                    childHosts[a - 1]
                        .setTemplate(
                            new BehaviorSubject({
                                tagName: 'div',
                                baseProperties: {
                                    id: {
                                        type: null,
                                        value: String(a),
                                    },
                                },
                            }),
                        )
                        .subscribe();
                    childHosts[b - 1]
                        .setTemplate(
                            new BehaviorSubject({
                                tagName: 'div',
                                baseProperties: {
                                    id: {
                                        type: null,
                                        value: String(b),
                                    },
                                },
                            }),
                        )
                        .subscribe();

                    await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                        '<div>\n    <div id="1"></div>\n    <div id="2"></div>\n</div>',
                    );
                },
            );

            it('should render correct code on dynamically change template', async () => {
                const [childHost1, childHost2] = childHosts;
                const template1 = new BehaviorSubject({
                    tagName: 'div',
                    baseProperties: {},
                });
                const template2 = new BehaviorSubject({
                    tagName: 'button',
                    baseProperties: {},
                });

                childHost1.setTemplate(template1).subscribe();
                childHost2.setTemplate(template2).subscribe();

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div>\n    <div></div>\n    <button></button>\n</div>',
                );

                template1.next({
                    tagName: 'div',
                    baseProperties: {
                        tuiDirective: {
                            type: null,
                        },
                    },
                });

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div>\n    <div tuiDirective></div>\n    <button></button>\n</div>',
                );

                template2.next({
                    tagName: 'button',
                    baseProperties: {
                        tuiDirective: {
                            type: null,
                        },
                    },
                });

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div>\n    <div tuiDirective></div>\n    <button tuiDirective></button>\n</div>',
                );
            });

            it('should render correct code on destroy children', async () => {
                const [childHost1, childHost2] = childHosts;

                childHost1
                    .setTemplate(
                        new BehaviorSubject({
                            tagName: 'div',
                            baseProperties: {},
                        }),
                    )
                    .subscribe();
                childHost2
                    .setTemplate(
                        new BehaviorSubject({
                            tagName: 'button',
                            baseProperties: {},
                        }),
                    )
                    .subscribe();

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div>\n    <div></div>\n    <button></button>\n</div>',
                );

                childHost1.ngOnDestroy();

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div>\n    <button></button>\n</div>',
                );

                childHost2.ngOnDestroy();

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe('<div></div>');
            });
        });

        describe('without template in root host', () => {
            it('should render correct initial code', async () => {
                await expect(firstValueFrom(rootHost.code$)).resolves.toBe('');
            });

            it.each([1, 2])(
                'should render correct code on add template to childHost%p',
                async i => {
                    childHosts[i - 1]
                        .setTemplate(
                            new BehaviorSubject({
                                tagName: 'div',
                                baseProperties: {
                                    class: {
                                        type: null,
                                        value: 'test',
                                    },
                                },
                            }),
                        )
                        .subscribe();

                    await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                        '<div class="test"></div>',
                    );
                },
            );

            it.each([
                [1, 2],
                [2, 1],
            ])(
                'should render correct code on add template to childHost%i and childHost%i',
                async (a, b) => {
                    childHosts[a - 1]
                        .setTemplate(
                            new BehaviorSubject({
                                tagName: 'div',
                                baseProperties: {
                                    id: {
                                        type: null,
                                        value: String(a),
                                    },
                                },
                            }),
                        )
                        .subscribe();
                    childHosts[b - 1]
                        .setTemplate(
                            new BehaviorSubject({
                                tagName: 'div',
                                baseProperties: {
                                    id: {
                                        type: null,
                                        value: String(b),
                                    },
                                },
                            }),
                        )
                        .subscribe();

                    await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                        '<div id="1"></div>\n<div id="2"></div>',
                    );
                },
            );

            it('should render correct code on dynamically change template', async () => {
                const [childHost1, childHost2] = childHosts;
                const template1 = new BehaviorSubject({
                    tagName: 'div',
                    baseProperties: {},
                });
                const template2 = new BehaviorSubject({
                    tagName: 'button',
                    baseProperties: {},
                });

                childHost1.setTemplate(template1).subscribe();
                childHost2.setTemplate(template2).subscribe();

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div></div>\n<button></button>',
                );

                template1.next({
                    tagName: 'div',
                    baseProperties: {
                        tuiDirective: {
                            type: null,
                        },
                    },
                });

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div tuiDirective></div>\n<button></button>',
                );

                template2.next({
                    tagName: 'button',
                    baseProperties: {
                        tuiDirective: {
                            type: null,
                        },
                    },
                });

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div tuiDirective></div>\n<button tuiDirective></button>',
                );
            });

            it('should render correct code on destroy children', async () => {
                const [childHost1, childHost2] = childHosts;

                childHost1
                    .setTemplate(
                        new BehaviorSubject({
                            tagName: 'div',
                            baseProperties: {},
                        }),
                    )
                    .subscribe();
                childHost2
                    .setTemplate(
                        new BehaviorSubject({
                            tagName: 'button',
                            baseProperties: {},
                        }),
                    )
                    .subscribe();

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div></div>\n<button></button>',
                );

                childHost1.ngOnDestroy();

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<button></button>',
                );

                childHost2.ngOnDestroy();

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe('');
            });
        });
    });

    it('should ignore invalid properties', async () => {
        rootHost
            .setTemplate(
                new BehaviorSubject({
                    tagName: 'div',
                    baseProperties: {
                        ngModel: {
                            type: 'input',
                            value: undefined as any,
                        } as const,
                    },
                }),
            )
            .subscribe();

        await expect(firstValueFrom(rootHost.code$)).resolves.toBe('<div></div>');
    });
});
