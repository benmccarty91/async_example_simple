# Working Async Lib Example

## Library
I created my own library to be imported.  It's a simple example which prints to the console and also displays an Alert to the user when the function `bentest()` is called.

In order to publish the library, I simply published it as a public package to `npm`.  Once it's in `npm` it can be imported via `npm install bentest_testben` or it can be added to the `<head>` element via unpkg.com.  The latter will load it asynchronously on app start.  The former method is not what we want to do because it will add it to the bundle at compile-time.

## Client
I created a simple Angular client that imports a lib asynchronously in the client's index.html.

Once it's loaded into the window object, the function `bentest()` can be accessed (see `home.component.ts` for usage).

There's probably a way to download types also, so we don't have to declare as `any`, but I'll look into that later.

