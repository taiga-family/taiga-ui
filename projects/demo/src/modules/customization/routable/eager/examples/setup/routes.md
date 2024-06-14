```ts
export const routes = [
  {
    path: '',
    component: MyPage,
    children: [
      tuiGenerateDialogableRoute(MyDialogComponent, {
        path: 'path/to/dialog',
      }),
    ],
  },
];
```
