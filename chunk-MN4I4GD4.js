import"./chunk-42JZD6NG.js";var o=`\`\`\`ts
@Component({
  standalone: true,
  // ...
  providers: [
    {
      provide: TUI_DIALOGS_CLOSE,
      deps: [AuthService],
      useFactory: (authService) => authService.logout$,
    },
  ],
})
export class Example {}
\`\`\`
`;export{o as default};
