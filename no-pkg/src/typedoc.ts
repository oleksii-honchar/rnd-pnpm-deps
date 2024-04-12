const TypeDoc = require("typedoc");
const pkg1 = require("typedoc/package.json");
const plugin = require("typedoc-plugin-markdown");
const pkg2 = require("typedoc-plugin-markdown/package.json");
console.log(`typedoc version: ${pkg1.version}`)
console.log(`plugin version: ${pkg2.version}`)

async function main() {
    // Application.bootstrap also exists, which will not load plugins
    // Also accepts an array of option readers if you want to disable
    // TypeDoc's tsconfig.json/package.json/typedoc.json option readers
    const app = await TypeDoc.Application.bootstrapWithPlugins({
        entryPoints: ["src/index.ts"],
        plugin: ["typedoc-plugin-markdown"]
    });

    const project = await app.convert();

    if (project) {
        // Project may not have converted correctly
        const outputDir = "docs";

        // Rendered docs
        await app.generateDocs(project, outputDir);
        // Alternatively generate JSON output
        await app.generateJson(project, outputDir + "/documentation.json");
    }
}

main().catch(console.error);