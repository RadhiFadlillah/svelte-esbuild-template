import { existsSync, mkdirSync, rmSync } from "fs";
import { build } from "esbuild";
import sveltePlugin from "esbuild-svelte";
import sveltePreprocess from "svelte-preprocess";

// Parse arguments
const args = process.argv.slice(2);
const devMode = args.length > 0 && args[0] === 'dev';

// Make sure target directory exists
const outDir = './public/dist';
if (!existsSync(outDir)) {
	mkdirSync(outDir);
}

// If in production, clean up target directory first
if (!devMode) {
	rmSync(outDir, { recursive: true });
}

// Prepare arguments
let watcher = !devMode ? false : {
	onRebuild(error, result) {
		if (error) console.error('watch build failed:', error);
		else console.log('watch build succeeded:', result);
	},
}

// Build the application
if (devMode) {
	console.log(`development mode started, watcher activated`);
}

build({
	entryPoints: ['./src/main.ts'],
	outdir: outDir,
	minify: !devMode,
	bundle: true,
	sourcemap: devMode,
	watch: watcher,
	treeShaking: true,
	plugins: [sveltePlugin({
		cache: true,
		preprocess: sveltePreprocess()
	})]
}).catch((err) => {
	console.error(err)
	process.exit(1)
});