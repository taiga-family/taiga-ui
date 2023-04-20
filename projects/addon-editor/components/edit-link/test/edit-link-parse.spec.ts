import {tuiEditLinkParseUrl} from '@taiga-ui/addon-editor';

describe(`tuiEditLinkParseUrl`, () => {
    it(`https or http protocol`, () => {
        expect(tuiEditLinkParseUrl(`http://hello.com`)).toEqual({
            prefix: `http://`,
            path: `hello.com`,
        });

        expect(tuiEditLinkParseUrl(`http://world.com/`)).toEqual({
            prefix: `http://`,
            path: `world.com/`,
        });

        expect(tuiEditLinkParseUrl(`https://taiga-ui.dev`)).toEqual({
            prefix: `https://`,
            path: `taiga-ui.dev`,
        });
    });

    it(`mailto`, () => {
        expect(tuiEditLinkParseUrl(`mailto:user1@example.com`)).toEqual({
            prefix: `mailto:`,
            path: `user1@example.com`,
        });

        expect(
            tuiEditLinkParseUrl(
                `mailto:user1@example.com%2C%20user2@example.com?to=user3@example.com%2C%20user4@example.com`,
            ),
        ).toEqual({
            prefix: `mailto:`,
            path: `user1@example.com%2C%20user2@example.com?to=user3@example.com%2C%20user4@example.com`,
        });
    });

    it(`custom protocol schema`, () => {
        expect(tuiEditLinkParseUrl(`web+burger:Burger handler`)).toEqual({
            prefix: `web+burger:`,
            path: `Burger handler`,
        });
    });

    it(`without protocol`, () => {
        expect(tuiEditLinkParseUrl(`hello.com`)).toEqual({
            prefix: ``,
            path: `hello.com`,
        });

        expect(tuiEditLinkParseUrl(``)).toEqual({prefix: ``, path: ``});
    });

    it(`anchor`, () => {
        expect(tuiEditLinkParseUrl(`#path-to-anchor`)).toEqual({
            prefix: `#`,
            path: `path-to-anchor`,
        });
    });

    it(`custom value`, () => {
        expect(tuiEditLinkParseUrl(`://hello.com`)).toEqual({
            prefix: `://`,
            path: `hello.com`,
        });

        expect(tuiEditLinkParseUrl(`//hello.com`)).toEqual({
            prefix: ``,
            path: `//hello.com`,
        });

        expect(tuiEditLinkParseUrl(`/hello.com/a/b/c`)).toEqual({
            prefix: ``,
            path: `/hello.com/a/b/c`,
        });
    });

    it(`duplicate protocols`, () => {
        expect(tuiEditLinkParseUrl(`http://tel:+79001111111`)).toEqual({
            prefix: `tel:`,
            path: `+79001111111`,
        });

        expect(tuiEditLinkParseUrl(`https://ssh`)).toEqual({
            prefix: `https://`,
            path: `ssh`,
        });

        expect(tuiEditLinkParseUrl(`https://ssh:`)).toEqual({
            prefix: `https://`,
            path: `ssh:`,
        });

        expect(tuiEditLinkParseUrl(`https://ssh:/`)).toEqual({
            prefix: `ssh:`,
            path: `/`,
        });

        expect(tuiEditLinkParseUrl(`https://ssh://`)).toEqual({
            prefix: `ssh://`,
            path: ``,
        });

        expect(tuiEditLinkParseUrl(`https://ssh://abc`)).toEqual({
            prefix: `ssh://`,
            path: `abc`,
        });

        expect(tuiEditLinkParseUrl(`https://a://b://c://d://e`)).toEqual({
            prefix: `d://`,
            path: `e`,
        });

        expect(tuiEditLinkParseUrl(`a:b:c:d:e`)).toEqual({
            prefix: `d:`,
            path: `e`,
        });
    });

    it(`URLs`, () => {
        expect(tuiEditLinkParseUrl(`https://taiga-ui.dev`)).toEqual({
            prefix: `https://`,
            path: `taiga-ui.dev`,
        });

        expect(tuiEditLinkParseUrl(`https://tinkoff-group.com/`)).toEqual({
            prefix: `https://`,
            path: `tinkoff-group.com/`,
        });

        expect(tuiEditLinkParseUrl(`www.jsowl.com`)).toEqual({
            prefix: ``,
            path: `www.jsowl.com`,
        });

        expect(tuiEditLinkParseUrl(`burgers.example.com/?burger=%s`)).toEqual({
            prefix: ``,
            path: `burgers.example.com/?burger=%s`,
        });

        expect(tuiEditLinkParseUrl(`http://localhost:3333/editor/API`)).toEqual({
            prefix: `http://`,
            path: `localhost:3333/editor/API`,
        });

        expect(tuiEditLinkParseUrl(`127.0.0.1:8080`)).toEqual({
            prefix: ``,
            path: `127.0.0.1:8080`,
        });

        expect(tuiEditLinkParseUrl(`localhost:3333`)).toEqual({
            prefix: ``,
            path: `localhost:3333`,
        });

        expect(tuiEditLinkParseUrl(`ftp://ftp.example:21`)).toEqual({
            prefix: `ftp://`,
            path: `ftp.example:21`,
        });
    });
});
