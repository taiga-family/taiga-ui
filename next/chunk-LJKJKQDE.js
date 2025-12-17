import"./chunk-B4AJQJMI.js";var e=`\`\`\`ts
export const routes = [
  {
    path: '',
    component: MyPage,
    children: [
      tuiGenerateDialogableRoute(async () => import('./dialog.component'), {
        path: 'path/to/dialog',
      }),
    ],
  },
];
\`\`\`
`;export{e as default};
