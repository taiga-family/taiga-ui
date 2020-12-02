# ng-bullet

**Bullet** is a library which enhances your unit testing experience with Angular `TestBed`, greatly increasing execution speed of your tests.

But how does it do that?

Most of the time our angular unit tests for components are configured in the following way:
``` typescript
  beforeEach(async(() => {
        // a really simplified example of TestBed configuration
        TestBed.configureTestingModule({
            declarations: [ /*list of components goes here*/ ],
            imports: [ /* list of providers goes here*/ ]
        })
        .compileComponents();
  }));
```
This is the common approach of doing that and you will see exactly the same approach while reading Angular documentation or watching Angular courses.

However what it also means is that Angular will re-compile everything we used to configure our `TestBed` for every test in a suite, thus increasing the overall test execution time.

With **ng-bullet** the previous code snippet will look like this:
``` typescript
    import { configureTestSuite } from 'ng-bullet';
    ...
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [ /*list of components goes here*/ ],
            imports: [ /* list of providers goes here*/ ]
        })
    });
```
We basically just replaced your code snippet with TestBed configuration on `configureTestSuite` fucntion call. No need to call `compileComponents` explicitly. After this
**ng-bullet** will ensure for you that components were compiled only once, still providing all the isolation for your tests and creating new instances of components / services / etc for every test.

**ng-bullet** also provides 2 handful functions to spin up your component's instances.
```typescript
createTestContext: <T>(component: Type<T>) => TestCtx<T>;
```
which creates TestCtx instance for the Angular Component which is not initialized yet (no ngOnInit called). Use case: you can override Component's providers before lifetime hooks were called.

And

```typescript
createStableTestContext: <T>(component: Type<T>) => Promise<TestCtx<T>>;
```

which is exactly the same as function above, but this one waits till fixture becomes stable.

Both of them return `TestCtx` instance which is a wrapper around `ComponentFixture`, which simplifies your access to some most commonly used features of `ComponentFixture`.

So don't hesitate and give a try ;)

## Performance benefits
The performance gain depends heavily on the number of tests in the suite and the number of components and modules you imported / declared. The more tests you have the bigger will be your benefit. With a really fat configurations it may come close to be N times faster, where N is the number of tests in the suite.


A small comparison from a real project.

This is what it takes to run ~1400 tests completely without using **ng-bullet**:

![test results before ng-bullet](https://github.com/topnotch48/ng-bullet-workspace/blob/master/projects/ng-bullet/before.png?raw=true)

And this is how it looks like after most of the suites were updated with **ng-bullet** usage (there are some suites which are still run on a raw `TestBed`):

![test results after ng-bullet](https://github.com/topnotch48/ng-bullet-workspace/blob/master/projects/ng-bullet/after.png?raw=true)

So in this case 300 % speed increase gained.

## Installation
`npm install ng-bullet` or `yarn add ng-bullet`
