```ts
import {tuiSvgOptionsProvider, tuiSvgSrcInterceptors} from '@taiga-ui/core';

@Component({
  standalone: true,
  // ..
  providers: [
    tuiSvgOptionsProvider({
      /**
       * @description:
       * Resolve path to your icon by factory
       * @name -> <tui-svg src="{name}" />
       * @baseHref(optional) -> <base href="{baseHref}" />
       */
      path: (name: string, baseHref: string) => `${baseHref}assets/icons/${MAPPER[name]}.svg#${MAPPER[name]}`,

      /**
       * The function that processes the source of the icon.
       */
      srcProcessor: (src: string) => (src.startsWith('https://') ? src : `assets/icons/${src}.svg#${src}`),

      /**
       * The function that processes the content of the icon.
       */
      contentProcessor: (content: string) => content.replace(/fill=".*?"/g, 'fill="currentColor"'),

      /**
       * The function that processes name to show deprecated icons in pack.
       */
      deprecated: (name: string) => {
        if (name === 'my-super-icon') {
          console.warn(`Icon "${name}" is deprecated`);
        }

        return name;
      },
    }),

    /**
     * @documentation:
     * tuiSvgSrcInterceptors is a multi-provider, so you can add your own interceptors,
     * if you don't want to use the global srcProcessor handler of tuiSvgOptionsProvider.
     */
    tuiSvgSrcInterceptors(src => src.replace(/#.*$/, '')),
    tuiSvgSrcInterceptors(src =>
      String(src).startsWith('icons8::') ? `assets/icons/${String(src).replace('icons8::', '')}.svg` : src,
    ),
  ],
})
export class MyComponent {}
```
