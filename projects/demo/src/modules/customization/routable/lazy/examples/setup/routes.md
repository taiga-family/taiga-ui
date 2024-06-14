```ts
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
```
