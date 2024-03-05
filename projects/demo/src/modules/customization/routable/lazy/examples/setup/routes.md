```ts
export const routes = [
  {
    path: '',
    component: MyPageComponent,
    children: [
      tuiGenerateDialogableRoute(async () => import('./dialog.component'), {
        path: 'path/to/dialog',
      }),
    ],
  },
];
```
