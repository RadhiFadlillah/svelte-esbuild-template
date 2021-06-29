# Svelte + esbuild

This is a project template for [Svelte][svelte] apps, using [esbuild][esbuild] as its compiler and
[Typescript][ts] as its main language.

I created this template because the official Svelte template uses Rollup as compiler, which unfortunately
too slow for my taste. For example, Rollup takes around 500ms to build Svelte's hello world app in dev
mode, and around 2s for production. In other hand, esbuild can compile it almost instantly.

However, since esbuild is still in alpha (it still not reach v1), there are still some features that not
available. For example, right now esbuild doesn't have official support for live reload. However it's not
really a dealbreaker for me (I mean I could reload the browser on my own), and it's still an acceptable
trade off considering how fast it compiles.

## Getting Started

To create a new project based on this template, you can use [degit]:

```
npx degit RadhiFadlillah/svelte-esbuild-template svelte-app
```

Once finished, install the dependencies:

```
cd svelte-app
npm install
```

Modify the application then run esbuild:

```
npm run dev
```

This will run esbuild in development mode. In this mode, everytime you modify the source code, esbuild
will recompile the application. Once finished and ready production, you can build your app by running:

```
npm run build
```

[svelte]: https://svelte.dev/
[esbuild]: https://esbuild.github.io/
[ts]: https://www.typescriptlang.org/
[degit]: https://github.com/Rich-Harris/degit