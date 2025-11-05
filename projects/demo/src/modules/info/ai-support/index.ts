import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLink} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiLink],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly installationCode = `{
  mcpServers: {
    'taiga-ui': {
      command: 'npx',
      args: [
        '@taiga-ui/mcp@latest',
        '--source-url=https://taiga-ui.dev/llms-full.txt', // or file from "/next" version, if you want
      ],
    },
  },
}`;
}
