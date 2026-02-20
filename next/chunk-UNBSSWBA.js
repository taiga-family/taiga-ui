import"./chunk-HU6DUUP4.js";var i=`\`\`\`ts
import {Component} from '@angular/core';
import {TUI_VIEWPORT} from '@taiga-ui/core';

@Component({
  // ...
  providers: [
    {
      provide: TUI_VIEWPORT,
      useFactory: () => {
        const win = inject(WA_WINDOW);

        return {
          type: \`viewport\`,
          getClientRect() {
            return {
              top: 0,
              left: 0,
              right: win.innerWidth,
              bottom: win.innerHeight,
              width: win.innerWidth,
              height: win.innerHeight,
            };
          },
        };
      },
    },
  ],
})
export class Example {}
\`\`\`
`;export{i as default};
