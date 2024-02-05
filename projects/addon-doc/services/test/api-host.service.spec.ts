import {Injector} from '@angular/core';
import {TuiApiHostService, TuiDocumentationProperty} from '@taiga-ui/addon-doc';
import {first, Observable} from 'rxjs';

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

interface TuiApiHostTemplate {
    tagName: string;
    baseProperties: Record<string, TuiDocumentationProperty>;
}

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
                    rootHost.setTemplate(tagName, properties);
                });

                describe.each(contentTestCases)('with $name;', ({content}) => {
                    beforeEach(() => {
                        rootHost.setContent(content);
                    });

                    describe.each(propertiesTestCases)('with $name;', ({properties}) => {
                        beforeEach(() => {
                            Object.entries(properties).forEach(([name, property]) => {
                                rootHost.setProperty(name, property);
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
        let template1: TuiApiHostTemplate;
        let template2: TuiApiHostTemplate;

        beforeEach(() => {
            template1 = {
                tagName: 'div',
                baseProperties: {
                    class: {
                        type: null,
                        value: 'test',
                    },
                },
            };
            template2 = {
                tagName: 'button',
                baseProperties: {
                    class: {
                        type: null,
                        value: 'test',
                    },
                },
            };
        });

        it('should set template', async () => {
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe('');
            rootHost.setTemplate(template1.tagName, template1.baseProperties);
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
        });

        it('should set other template', async () => {
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe('');
            rootHost.setTemplate(template1.tagName, template1.baseProperties);
            rootHost.setTemplate(template2.tagName, template2.baseProperties);
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

            rootHost.setTemplate(template1.tagName, template1.baseProperties);

            expect(codeCb).toHaveBeenCalledWith('<div class="test"></div>');
            expect(codeCb).toHaveBeenCalledTimes(1);
            codeCb.mockClear();

            rootHost.setTemplate('', {});

            expect(codeCb).toHaveBeenCalledWith('');
            expect(codeCb).toHaveBeenCalledTimes(1);
        });
    });

    describe('setProperty', () => {
        beforeEach(() => {
            rootHost.setTemplate('div', {
                class: {
                    type: null,
                    value: 'test',
                },
            });
        });

        it('should set property', async () => {
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
            rootHost.setProperty('prop', {
                type: 'input',
                value: 'val',
            });
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div [prop]="val" class="test"></div>',
            );
        });

        it('should delete property', async () => {
            rootHost.setProperty('prop', {
                type: 'input',
                value: 'val',
            });

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div [prop]="val" class="test"></div>',
            );
            rootHost.deleteProperty('prop');
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
        });

        it('should set other property', async () => {
            rootHost.setProperty('prop', {
                type: 'input',
                value: 'foo',
            });
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div [prop]="foo" class="test"></div>',
            );
            rootHost.setProperty('prop', {
                type: 'input',
                value: 'bar',
            });
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

            rootHost.setProperty('prop', {
                type: 'input',
                value: 'foo',
            });

            expect(codeCb).toHaveBeenCalledWith('<div [prop]="foo" class="test"></div>');
            expect(codeCb).toHaveBeenCalledTimes(1);
            codeCb.mockClear();

            rootHost.deleteProperty('prop');

            expect(codeCb).toHaveBeenCalledWith('<div class="test"></div>');
            expect(codeCb).toHaveBeenCalledTimes(1);
        });
    });

    describe('setContent', () => {
        beforeEach(() => {
            rootHost.setTemplate('div', {
                class: {
                    type: null,
                    value: 'test',
                },
            });
        });

        it('should set content', async () => {
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
            rootHost.setContent('content');
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test">\n    content\n</div>',
            );
        });

        it('should delete content', async () => {
            const index = rootHost.setContent('content');

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test">\n    content\n</div>',
            );
            rootHost.deleteContent(index);
            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test"></div>',
            );
        });

        it('should add other content', async () => {
            const index1 = rootHost.setContent('content');

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test">\n    content\n</div>',
            );
            rootHost.setContent('test');

            await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                '<div class="test">\n    content\n    test\n</div>',
            );

            rootHost.deleteContent(index1);
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

            const index = rootHost.setContent('content');

            expect(codeCb).toHaveBeenCalledWith(
                '<div class="test">\n    content\n</div>',
            );
            expect(codeCb).toHaveBeenCalledTimes(1);
            codeCb.mockClear();

            rootHost.deleteContent(index);

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
                rootHost.setTemplate('div', {});
            });

            it('should render correct initial code', async () => {
                await expect(firstValueFrom(rootHost.code$)).resolves.toBe('<div></div>');
            });

            it.each([1, 2])(
                'should render correct code on add template to childHost%p',
                async i => {
                    childHosts[i - 1].setTemplate('div', {
                        class: {
                            type: null,
                            value: 'test',
                        },
                    });

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
                    childHosts[a - 1].setTemplate('div', {
                        id: {
                            type: null,
                            value: String(a),
                        },
                    });
                    childHosts[b - 1].setTemplate('div', {
                        id: {
                            type: null,
                            value: String(b),
                        },
                    });

                    await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                        '<div>\n    <div id="1"></div>\n    <div id="2"></div>\n</div>',
                    );
                },
            );

            it('should render correct code on dynamically change template', async () => {
                const [childHost1, childHost2] = childHosts;

                childHost1.setTemplate('div', {});
                childHost2.setTemplate('button', {});

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div>\n    <div></div>\n    <button></button>\n</div>',
                );

                childHost1.setTemplate('div', {
                    tuiDirective: {
                        type: null,
                    },
                });

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div>\n    <div tuiDirective></div>\n    <button></button>\n</div>',
                );

                childHost2.setTemplate('button', {
                    tuiDirective: {
                        type: null,
                    },
                });

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div>\n    <div tuiDirective></div>\n    <button tuiDirective></button>\n</div>',
                );
            });

            it('should render correct code on destroy children', async () => {
                const [childHost1, childHost2] = childHosts;

                childHost1.setTemplate('div', {});
                childHost2.setTemplate('button', {});

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
                    childHosts[i - 1].setTemplate('div', {
                        class: {
                            type: null,
                            value: 'test',
                        },
                    });

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
                    childHosts[a - 1].setTemplate('div', {
                        id: {
                            type: null,
                            value: String(a),
                        },
                    });
                    childHosts[b - 1].setTemplate('div', {
                        id: {
                            type: null,
                            value: String(b),
                        },
                    });

                    await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                        '<div id="1"></div>\n<div id="2"></div>',
                    );
                },
            );

            it('should render correct code on dynamically change template', async () => {
                const [childHost1, childHost2] = childHosts;

                childHost1.setTemplate('div', {});
                childHost2.setTemplate('button', {});

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div></div>\n<button></button>',
                );

                childHost1.setTemplate('div', {
                    tuiDirective: {
                        type: null,
                    },
                });

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div tuiDirective></div>\n<button></button>',
                );

                childHost2.setTemplate('button', {
                    tuiDirective: {
                        type: null,
                    },
                });

                await expect(firstValueFrom(rootHost.code$)).resolves.toBe(
                    '<div tuiDirective></div>\n<button tuiDirective></button>',
                );
            });

            it('should render correct code on destroy children', async () => {
                const [childHost1, childHost2] = childHosts;

                childHost1.setTemplate('div', {});
                childHost2.setTemplate('button', {});

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
        rootHost.setTemplate('div', {
            ngModel: {
                type: 'input',
                value: undefined as any,
            },
        });

        await expect(firstValueFrom(rootHost.code$)).resolves.toBe('<div></div>');
    });
});
