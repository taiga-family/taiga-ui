import {tuiToFlatMapPages} from '@taiga-ui/addon-doc';
import {tuiSwitchNgDevMode} from '@taiga-ui/testing';

describe(`tuiToFlatMapPages`, () => {
    const testPage1 = {
        title: `Test Page 1`,
        route: `test/page1`,
    };
    const testPage2 = {
        title: `Test Page 2`,
        route: `test/page2`,
    };
    const testSubPage1 = {
        title: `Test SubPage 1`,
        route: `test/page1/subpage1`,
    };
    const testSubPage2 = {
        title: `Test SubPage 2`,
        route: `test/page1/subpage2`,
    };
    const testPages = [
        {
            title: `Test Main Page 1`,
            route: `test/main1`,
            subPages: [testPage1, testPage2],
        },
        {
            title: `Test Main Page 2`,
            route: `test/main2`,
            subPages: [testSubPage1, testSubPage2],
        },
    ];

    let consoleErrorMock: jest.SpyInstance;

    beforeEach(() => {
        consoleErrorMock = jest.spyOn(global.console, `error`).mockImplementation();

        tuiSwitchNgDevMode(true);
    });

    it(`should map flat pages correctly`, () => {
        const mappedPages = tuiToFlatMapPages(testPages);

        expect(mappedPages.get(`Test Main Page 1`)).toBeUndefined();
        expect(mappedPages.get(`Test Main Page 2`)).toBeUndefined();
        expect(mappedPages.get(`Test Page 1`)).toEqual(testPage1);
        expect(mappedPages.get(`Test Page 2`)).toEqual(testPage2);
        expect(mappedPages.get(`Test SubPage 1`)).toEqual(testSubPage1);
        expect(mappedPages.get(`Test SubPage 2`)).toEqual(testSubPage2);
    });

    it(`should check for duplicate titles`, () => {
        const spy = jest.spyOn(global.console, `error`);
        const duplicatePage = {
            title: `Test Page 1`,
            route: `test/page3`,
        };
        const duplicatePages = [...testPages, {...duplicatePage}];

        tuiToFlatMapPages(duplicatePages);
        expect(spy).toHaveBeenCalledWith(
            `Title for page should be unique for prevent inconsistent page names`,
            duplicatePage,
            `<== Collisions between ==>`,
            testPage1,
        );
    });

    afterEach(() => {
        consoleErrorMock.mockRestore();
        tuiSwitchNgDevMode(false);
    });
});
