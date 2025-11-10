import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocCode, TuiDocPage} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiDocCode, TuiDocPage, TuiLink],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
