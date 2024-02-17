var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// vite.config.mts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///G:/v3ts/node_modules/vite/dist/node/index.js";
import vue from "file:///G:/v3ts/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///G:/v3ts/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import AutoImport from "file:///G:/v3ts/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///G:/v3ts/node_modules/unplugin-vue-components/dist/vite.js";
import { NaiveUiResolver } from "file:///G:/v3ts/node_modules/unplugin-vue-components/dist/resolvers.js";

// src/plugins/vite-plugin-vitepress/parser.ts
import { relative, extname, basename } from "path";
import { normalizePath } from "file:///G:/v3ts/node_modules/vite/dist/node/index.js";
import { createMarkdownRenderer } from "file:///G:/v3ts/node_modules/vitepress/dist/node/index.js";
var Parser = class {
  constructor(config, options2) {
    this.config = config;
    this.options = options2;
  }
  md;
  async setupRenderer() {
    const srcDir = this.config.root;
    const base = this.config.base ?? "/";
    this.md = await createMarkdownRenderer(srcDir, this.options?.markdown, base);
  }
  async parseMarkdown(code, id) {
    const env = {
      path: id,
      relativePath: normalizePath(relative(this.config.root, id)),
      cleanUrls: true
    };
    const html = this.md?.render(code, env);
    const { sfcBlocks } = env;
    let mdName = "md-" + basename(id).replace(extname(id), "");
    if (html) {
      return [
        sfcBlocks?.scriptSetup ? sfcBlocks?.scriptSetup?.content : "",
        `<template><div class="vp-doc">${html}</div></template>`,
        ...sfcBlocks?.styles.map((item) => item.content) ?? [],
        ...sfcBlocks?.customBlocks?.map((item) => item.content) ?? [],
        mdName ? `<script>export default { name:'${mdName}'}</script>` : ""
      ].join("\n");
    }
    return `<template><div class="vp-doc">${html}</div></template>`;
  }
  async transform(code, id) {
    if (id.endsWith(".md"))
      return await this.parseMarkdown(code, id);
  }
};

// src/plugins/vite-plugin-vitepress/index.ts
var VitePluginVitepress = (_options) => {
  let parser;
  const options2 = _options || {};
  return {
    name: "vite-plugin-vitepress",
    async configResolved(_config) {
      parser = new Parser(_config, options2);
      await parser.setupRenderer();
    },
    transform(code, id) {
      return parser.transform(code, id);
    }
  };
};
var vite_plugin_vitepress_default = VitePluginVitepress;

// src/plugins/vite-plugin-clean/index.ts
import fs from "fs";
import path from "path";
var options = {};
var { resolve, join, extname: extname2 } = path;
var { existsSync, readdirSync, statSync, unlinkSync, rmdirSync } = fs;
function cleanFiles(dirPath) {
  if (existsSync(dirPath)) {
    let files = readdirSync(dirPath);
    files.forEach((file) => {
      let filePath = join(dirPath, file);
      if (statSync(filePath).isDirectory()) {
        cleanFiles(filePath);
        rmdirSync(filePath);
      } else {
        unlinkSync(filePath);
      }
    });
  }
}
var cleanPlugin = (_opt) => {
  options = Object.assign(
    {
      targetFiles: /dev-dist|dist/
    },
    _opt
  );
  return {
    name: "vite-plugin-clean",
    enforce: "pre",
    apply: "build",
    buildStart: (config) => {
      const { targetFiles } = options;
      const rootDirectory = process.cwd();
      const files = readdirSync(rootDirectory);
      files.forEach((file) => {
        if (targetFiles.test(file)) {
          const filePath = resolve(rootDirectory, file);
          if (statSync(filePath).isDirectory()) {
            cleanFiles(filePath);
            rmdirSync(filePath);
          } else {
            unlinkSync(filePath);
          }
        }
      });
    }
  };
};
var vite_plugin_clean_default = cleanPlugin;

// src/resolver/index.ts
import { join as join2 } from "path";
import { normalizePath as normalizePath2 } from "file:///G:/v3ts/node_modules/vite/dist/node/index.js";

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  copyToClipboard: () => copyToClipboard,
  getVer: () => getVer,
  sleep: () => sleep,
  useDialog: () => useDialog
});

// src/utils/fn.ts
async function sleep(time) {
  return new Promise((resolve2) => {
    setTimeout(() => {
      resolve2(true);
    }, time);
  });
}
async function useDialog(params) {
  console.log("\u4F7F\u7528\u5F39\u7A97useDialog=>", params);
  return;
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
async function getVer(params) {
  return "1.0.0";
}

// src/resolver/index.ts
var hooks = Object.keys(utils_exports);
function resolveHooks(name) {
  if (!hooks)
    return;
  if (!hooks.includes(name))
    return;
  return {
    name,
    // 拼接路径并序列化
    from: normalizePath2(join2(process.cwd(), "./src/utils/index.ts"))
  };
}
function LibResolver() {
  return (name) => {
    return resolveHooks(name);
  };
}
var resolver_default = LibResolver;

// vite.config.mts
var __vite_injected_original_import_meta_url = "file:///G:/v3ts/vite.config.mts";
var vite_config_default = defineConfig({
  plugins: [
    vite_plugin_vitepress_default({
      markdown: {
        lineNumbers: true
      }
    }),
    vue({
      include: [/\.[tj]sx$/, /\.vue$/, /\.md$/]
    }),
    vueJsx(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      // global imports to register
      imports: ["vue", "vue-router", {
        "naive-ui": [
          "useDialog",
          "useMessage",
          "useNotification",
          "useLoadingBar"
        ]
      }],
      resolvers: [resolver_default()]
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    vite_plugin_clean_default({
      targetFiles: /dev-dist|dist/
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIiwgInNyYy9wbHVnaW5zL3ZpdGUtcGx1Z2luLXZpdGVwcmVzcy9wYXJzZXIudHMiLCAic3JjL3BsdWdpbnMvdml0ZS1wbHVnaW4tdml0ZXByZXNzL2luZGV4LnRzIiwgInNyYy9wbHVnaW5zL3ZpdGUtcGx1Z2luLWNsZWFuL2luZGV4LnRzIiwgInNyYy9yZXNvbHZlci9pbmRleC50cyIsICJzcmMvdXRpbHMvaW5kZXgudHMiLCAic3JjL3V0aWxzL2ZuLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRzpcXFxcdjN0c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRzpcXFxcdjN0c1xcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0c6L3YzdHMvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5cclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuaW1wb3J0IHsgTmFpdmVVaVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG5cclxuaW1wb3J0IFZpdGVQbHVnaW5WaXRlcHJlc3MgZnJvbSAnLi9zcmMvcGx1Z2lucy92aXRlLXBsdWdpbi12aXRlcHJlc3MnXHJcbmltcG9ydCBWaXRlUGx1Z2luQ2xlYW4gZnJvbSAnLi9zcmMvcGx1Z2lucy92aXRlLXBsdWdpbi1jbGVhbidcclxuaW1wb3J0IG15TGliIGZyb20gJy4vc3JjL3Jlc29sdmVyJ1xyXG5cclxuXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIFZpdGVQbHVnaW5WaXRlcHJlc3Moe1xyXG4gICAgICBtYXJrZG93bjoge1xyXG4gICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgdnVlKHtcclxuICAgICAgaW5jbHVkZTogWy9cXC5bdGpdc3gkLywgL1xcLnZ1ZSQvLCAvXFwubWQkL11cclxuICAgIH0pLFxyXG4gICAgdnVlSnN4KCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgLy8gdGFyZ2V0cyB0byB0cmFuc2Zvcm1cclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XHJcbiAgICAgICAgL1xcLnZ1ZSQvLFxyXG4gICAgICAgIC9cXC52dWVcXD92dWUvLCAvLyAudnVlXHJcbiAgICAgICAgL1xcLm1kJC8gLy8gLm1kXHJcbiAgICAgIF0sXHJcbiAgICAgIC8vIGdsb2JhbCBpbXBvcnRzIHRvIHJlZ2lzdGVyXHJcbiAgICAgIGltcG9ydHM6IFsndnVlJywgJ3Z1ZS1yb3V0ZXInLCB7XHJcbiAgICAgICAgJ25haXZlLXVpJzogW1xyXG4gICAgICAgICAgJ3VzZURpYWxvZycsXHJcbiAgICAgICAgICAndXNlTWVzc2FnZScsXHJcbiAgICAgICAgICAndXNlTm90aWZpY2F0aW9uJyxcclxuICAgICAgICAgICd1c2VMb2FkaW5nQmFyJ1xyXG4gICAgICAgIF1cclxuICAgICAgfV0sXHJcbiAgICAgIHJlc29sdmVyczogW215TGliKCldXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtOYWl2ZVVpUmVzb2x2ZXIoKV1cclxuICAgIH0pLFxyXG4gICAgVml0ZVBsdWdpbkNsZWFuKHtcclxuICAgICAgdGFyZ2V0RmlsZXM6IC9kZXYtZGlzdHxkaXN0L1xyXG4gICAgfSlcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkc6XFxcXHYzdHNcXFxcc3JjXFxcXHBsdWdpbnNcXFxcdml0ZS1wbHVnaW4tdml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJHOlxcXFx2M3RzXFxcXHNyY1xcXFxwbHVnaW5zXFxcXHZpdGUtcGx1Z2luLXZpdGVwcmVzc1xcXFxwYXJzZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0c6L3YzdHMvc3JjL3BsdWdpbnMvdml0ZS1wbHVnaW4tdml0ZXByZXNzL3BhcnNlci50c1wiO2ltcG9ydCB7IHJlbGF0aXZlLCBleHRuYW1lLCBiYXNlbmFtZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB0eXBlIHsgUmVzb2x2ZWRDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBub3JtYWxpemVQYXRoIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHR5cGUgeyBNYXJrZG93bkVudiB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IHsgY3JlYXRlTWFya2Rvd25SZW5kZXJlciB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IHR5cGUgeyBVc2VyT3B0aW9ucyB9IGZyb20gJy4vdHlwaW5nJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcbiAgcHVibGljIG1kOiBBd2FpdGVkPFJldHVyblR5cGU8dHlwZW9mIGNyZWF0ZU1hcmtkb3duUmVuZGVyZXI+PiB8IHVuZGVmaW5lZFxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJlYWRvbmx5IGNvbmZpZzogUmVzb2x2ZWRDb25maWcsXHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogVXNlck9wdGlvbnNcclxuICApIHt9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBzZXR1cFJlbmRlcmVyKCkge1xyXG4gICAgY29uc3Qgc3JjRGlyID0gdGhpcy5jb25maWcucm9vdFxyXG4gICAgY29uc3QgYmFzZSA9IHRoaXMuY29uZmlnLmJhc2UgPz8gJy8nXHJcbiAgICB0aGlzLm1kID0gYXdhaXQgY3JlYXRlTWFya2Rvd25SZW5kZXJlcihzcmNEaXIsIHRoaXMub3B0aW9ucz8ubWFya2Rvd24sIGJhc2UpXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcGFyc2VNYXJrZG93bihjb2RlOiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGVudjogTWFya2Rvd25FbnYgPSB7XHJcbiAgICAgIHBhdGg6IGlkLFxyXG4gICAgICByZWxhdGl2ZVBhdGg6IG5vcm1hbGl6ZVBhdGgocmVsYXRpdmUodGhpcy5jb25maWcucm9vdCwgaWQpKSxcclxuICAgICAgY2xlYW5VcmxzOiB0cnVlXHJcbiAgICB9XHJcbiAgICBjb25zdCBodG1sID0gdGhpcy5tZD8ucmVuZGVyKGNvZGUsIGVudilcclxuICAgIGNvbnN0IHsgc2ZjQmxvY2tzIH0gPSBlbnZcclxuICAgIGxldCBtZE5hbWUgPSAnbWQtJyArIGJhc2VuYW1lKGlkKS5yZXBsYWNlKGV4dG5hbWUoaWQpLCAnJylcclxuICAgIGlmIChodG1sKSB7XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgc2ZjQmxvY2tzPy5zY3JpcHRTZXR1cCA/IHNmY0Jsb2Nrcz8uc2NyaXB0U2V0dXA/LmNvbnRlbnQgOiAnJyxcclxuICAgICAgICBgPHRlbXBsYXRlPjxkaXYgY2xhc3M9XCJ2cC1kb2NcIj4ke2h0bWx9PC9kaXY+PC90ZW1wbGF0ZT5gLFxyXG4gICAgICAgIC4uLihzZmNCbG9ja3M/LnN0eWxlcy5tYXAoKGl0ZW0pID0+IGl0ZW0uY29udGVudCkgPz8gW10pLFxyXG4gICAgICAgIC4uLihzZmNCbG9ja3M/LmN1c3RvbUJsb2Nrcz8ubWFwKChpdGVtKSA9PiBpdGVtLmNvbnRlbnQpID8/IFtdKSxcclxuICAgICAgICBtZE5hbWUgPyBgPHNjcmlwdD5leHBvcnQgZGVmYXVsdCB7IG5hbWU6JyR7bWROYW1lfSd9PC9zY3JpcHQ+YCA6ICcnXHJcbiAgICAgIF0uam9pbignXFxuJylcclxuICAgIH1cclxuICAgIHJldHVybiBgPHRlbXBsYXRlPjxkaXYgY2xhc3M9XCJ2cC1kb2NcIj4ke2h0bWx9PC9kaXY+PC90ZW1wbGF0ZT5gXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdHJhbnNmb3JtKGNvZGU6IHN0cmluZywgaWQ6IHN0cmluZykge1xyXG4gICAgaWYgKGlkLmVuZHNXaXRoKCcubWQnKSkgcmV0dXJuIGF3YWl0IHRoaXMucGFyc2VNYXJrZG93bihjb2RlLCBpZClcclxuICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFx2M3RzXFxcXHNyY1xcXFxwbHVnaW5zXFxcXHZpdGUtcGx1Z2luLXZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRzpcXFxcdjN0c1xcXFxzcmNcXFxccGx1Z2luc1xcXFx2aXRlLXBsdWdpbi12aXRlcHJlc3NcXFxcaW5kZXgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0c6L3YzdHMvc3JjL3BsdWdpbnMvdml0ZS1wbHVnaW4tdml0ZXByZXNzL2luZGV4LnRzXCI7aW1wb3J0IHR5cGUgeyBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL3BhcnNlcidcclxuaW1wb3J0IHR5cGUgeyBVc2VyT3B0aW9ucyB9IGZyb20gJy4vdHlwaW5nJ1xyXG5cclxuY29uc3QgVml0ZVBsdWdpblZpdGVwcmVzcyA9IChfb3B0aW9ucz86IFVzZXJPcHRpb25zKTogUGx1Z2luT3B0aW9uID0+IHtcclxuICBsZXQgcGFyc2VyOiBQYXJzZXJcclxuICBjb25zdCBvcHRpb25zID0gX29wdGlvbnMgfHwge31cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogJ3ZpdGUtcGx1Z2luLXZpdGVwcmVzcycsXHJcbiAgICBhc3luYyBjb25maWdSZXNvbHZlZChfY29uZmlnKSB7XHJcbiAgICAgIHBhcnNlciA9IG5ldyBQYXJzZXIoX2NvbmZpZywgb3B0aW9ucylcclxuICAgICAgYXdhaXQgcGFyc2VyLnNldHVwUmVuZGVyZXIoKVxyXG4gICAgfSxcclxuICAgIHRyYW5zZm9ybShjb2RlLCBpZCkge1xyXG4gICAgICByZXR1cm4gcGFyc2VyLnRyYW5zZm9ybShjb2RlLCBpZClcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFZpdGVQbHVnaW5WaXRlcHJlc3MsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpdGVQbHVnaW5WaXRlcHJlc3NcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFx2M3RzXFxcXHNyY1xcXFxwbHVnaW5zXFxcXHZpdGUtcGx1Z2luLWNsZWFuXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJHOlxcXFx2M3RzXFxcXHNyY1xcXFxwbHVnaW5zXFxcXHZpdGUtcGx1Z2luLWNsZWFuXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi92M3RzL3NyYy9wbHVnaW5zL3ZpdGUtcGx1Z2luLWNsZWFuL2luZGV4LnRzXCI7aW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxubGV0IG9wdGlvbnM6IGFueSA9IHt9XHJcbmNvbnN0IHsgcmVzb2x2ZSwgam9pbiwgZXh0bmFtZSB9ID0gcGF0aFxyXG5jb25zdCB7IGV4aXN0c1N5bmMsIHJlYWRkaXJTeW5jLCBzdGF0U3luYywgdW5saW5rU3luYywgcm1kaXJTeW5jIH0gPSBmc1xyXG5cclxuLyoqXHJcbiAqIFx1OTAxMlx1NUY1Mlx1NkUwNVx1NzQwNlx1NjU4N1x1NEVGNlx1NTkzOVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZGlyUGF0aCAtIFx1NjU4N1x1NEVGNlx1NTkzOVx1OERFRlx1NUY4NFxyXG4gKi9cclxuZnVuY3Rpb24gY2xlYW5GaWxlcyhkaXJQYXRoOiBhbnkpIHtcclxuICBpZiAoZXhpc3RzU3luYyhkaXJQYXRoKSkge1xyXG4gICAgbGV0IGZpbGVzID0gcmVhZGRpclN5bmMoZGlyUGF0aClcclxuICAgIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcclxuICAgICAgbGV0IGZpbGVQYXRoID0gam9pbihkaXJQYXRoLCBmaWxlKVxyXG4gICAgICBpZiAoc3RhdFN5bmMoZmlsZVBhdGgpLmlzRGlyZWN0b3J5KCkpIHtcclxuICAgICAgICBjbGVhbkZpbGVzKGZpbGVQYXRoKVxyXG4gICAgICAgIHJtZGlyU3luYyhmaWxlUGF0aClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1bmxpbmtTeW5jKGZpbGVQYXRoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFZpdGUgXHU2RTA1XHU3NDA2XHU2M0QyXHU0RUY2XHJcbiAqIEBwYXJhbSB7YW55fSBfb3B0IC0gXHU2M0QyXHU0RUY2XHU5MTREXHU3RjZFXHU5MDA5XHU5ODc5XHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBfb3B0LnRhcmdldEZpbGVzIC0gXHU3NkVFXHU2ODA3XHU2NTg3XHU0RUY2L1x1NjU4N1x1NEVGNlx1NTkzOVx1OERFRlx1NUY4NFx1RkYwQ1x1NjUyRlx1NjMwMVx1NTM1NVx1NEUyQVx1OERFRlx1NUY4NFx1NjIxNlx1OERFRlx1NUY4NFx1NjU3MFx1N0VDNFx1RkYwQ1x1OUVEOFx1OEJBNFx1NEUzQSBbJ2Rpc3QnLCdkaXN0LnppcF1cclxuICogQHJldHVybnMge29iamVjdH0gLSBWaXRlIFx1NjNEMlx1NEVGNlx1NUJGOVx1OEM2MVxyXG4gKi9cclxuY29uc3QgY2xlYW5QbHVnaW4gPSAoX29wdDogYW55KSA9PiB7XHJcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICB7XHJcbiAgICAgIHRhcmdldEZpbGVzOiAvZGV2LWRpc3R8ZGlzdC9cclxuICAgIH0sXHJcbiAgICBfb3B0XHJcbiAgKVxyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAndml0ZS1wbHVnaW4tY2xlYW4nLFxyXG4gICAgZW5mb3JjZTogJ3ByZScsXHJcbiAgICBhcHBseTogJ2J1aWxkJyxcclxuICAgIGJ1aWxkU3RhcnQ6IChjb25maWc6IGFueSkgPT4ge1xyXG4gICAgICBjb25zdCB7IHRhcmdldEZpbGVzIH0gPSBvcHRpb25zXHJcbiAgICAgIGNvbnN0IHJvb3REaXJlY3RvcnkgPSBwcm9jZXNzLmN3ZCgpXHJcbiAgICAgIGNvbnN0IGZpbGVzID0gcmVhZGRpclN5bmMocm9vdERpcmVjdG9yeSlcclxuICAgICAgZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xyXG4gICAgICAgIGlmICh0YXJnZXRGaWxlcy50ZXN0KGZpbGUpKSB7XHJcbiAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHJlc29sdmUocm9vdERpcmVjdG9yeSwgZmlsZSlcclxuICAgICAgICAgIGlmIChzdGF0U3luYyhmaWxlUGF0aCkuaXNEaXJlY3RvcnkoKSkge1xyXG4gICAgICAgICAgICBjbGVhbkZpbGVzKGZpbGVQYXRoKVxyXG4gICAgICAgICAgICBybWRpclN5bmMoZmlsZVBhdGgpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1bmxpbmtTeW5jKGZpbGVQYXRoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsZWFuUGx1Z2luXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRzpcXFxcdjN0c1xcXFxzcmNcXFxccmVzb2x2ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXHYzdHNcXFxcc3JjXFxcXHJlc29sdmVyXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi92M3RzL3NyYy9yZXNvbHZlci9pbmRleC50c1wiO2ltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBub3JtYWxpemVQYXRoIH0gZnJvbSAndml0ZSdcclxuLy8gXHU0RjdGXHU3NTI4XHU3QzdCXHU1NzhCXHJcbmltcG9ydCB0eXBlIHsgUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC90eXBlcydcclxuXHJcbmltcG9ydCAqIGFzIGxpYnMgZnJvbSAnLi4vdXRpbHMvaW5kZXgnXHJcbi8qKlxyXG4gKiBcdTY2QjRcdTk3MzJcdTU0RUFcdTRFOUJcdTUxRkRcdTY1NzBcdTUzRUZcdTRFRTVcdTc2RjRcdTYzQTVcdTRGN0ZcdTc1MjhcclxuICovXHJcbmxldCBob29rcyA9IE9iamVjdC5rZXlzKGxpYnMpXHJcblxyXG5mdW5jdGlvbiByZXNvbHZlSG9va3MobmFtZTogc3RyaW5nKSB7XHJcbiAgaWYgKCFob29rcykgcmV0dXJuXHJcbiAgaWYgKCFob29rcy5pbmNsdWRlcyhuYW1lKSkgcmV0dXJuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICAvLyBcdTYyRkNcdTYzQTVcdThERUZcdTVGODRcdTVFNzZcdTVFOEZcdTUyMTdcdTUzMTZcclxuICAgIGZyb206IG5vcm1hbGl6ZVBhdGgoam9pbihwcm9jZXNzLmN3ZCgpLCAnLi9zcmMvdXRpbHMvaW5kZXgudHMnKSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaWJSZXNvbHZlcigpOiBSZXNvbHZlciB7XHJcbiAgcmV0dXJuIChuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzb2x2ZUhvb2tzKG5hbWUpXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpYlJlc29sdmVyXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRzpcXFxcdjN0c1xcXFxzcmNcXFxcdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXHYzdHNcXFxcc3JjXFxcXHV0aWxzXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi92M3RzL3NyYy91dGlscy9pbmRleC50c1wiO2V4cG9ydCAqIGZyb20gJy4vZm4nXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRzpcXFxcdjN0c1xcXFxzcmNcXFxcdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXHYzdHNcXFxcc3JjXFxcXHV0aWxzXFxcXGZuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi92M3RzL3NyYy91dGlscy9mbi50c1wiOy8qKlxyXG4gKiBcdTc3NjFcdTc3MjBcdTUxRTBcdTc5RDJcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzbGVlcCh0aW1lOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICByZXNvbHZlKHRydWUpXHJcbiAgICB9LCB0aW1lKVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcdTRGN0ZcdTc1MjhcdTVGMzlcdTdBOTdcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VEaWFsb2cocGFyYW1zOiB7IG5hbWU6IHN0cmluZyB9KSB7XHJcbiAgY29uc29sZS5sb2coJ1x1NEY3Rlx1NzUyOFx1NUYzOVx1N0E5N3VzZURpYWxvZz0+JywgcGFyYW1zKVxyXG4gIHJldHVyblxyXG59XHJcbi8qKlxyXG4gKiBcdTU5MERcdTUyMzZcdTUyMzBcdTdDOThcdThEMzRcdTY3N0ZcdTRFMEFcclxuICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgIGNvbnN0IHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudDogYW55ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxyXG4gICAgZWxlbWVudC52YWx1ZSA9IHRleHRcclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKVxyXG4gICAgZWxlbWVudC5zdHlsZS5jb250YWluID0gJ3N0cmljdCdcclxuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnLTk5OTlweCdcclxuICAgIGVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAnMTJwdCdcclxuICAgIGNvbnN0IHNlbGVjdGlvbjogYW55ID0gZG9jdW1lbnQuZ2V0U2VsZWN0aW9uKClcclxuICAgIGNvbnN0IG9yaWdpbmFsUmFuZ2UgPSBzZWxlY3Rpb25cclxuICAgICAgPyBzZWxlY3Rpb24ucmFuZ2VDb3VudCA+IDAgJiYgc2VsZWN0aW9uLmdldFJhbmdlQXQoMClcclxuICAgICAgOiBudWxsXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcbiAgICBlbGVtZW50LnNlbGVjdCgpXHJcbiAgICBlbGVtZW50LnNlbGVjdGlvblN0YXJ0ID0gMFxyXG4gICAgZWxlbWVudC5zZWxlY3Rpb25FbmQgPSB0ZXh0Lmxlbmd0aFxyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKVxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KVxyXG4gICAgaWYgKG9yaWdpbmFsUmFuZ2UpIHtcclxuICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpXHJcbiAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShvcmlnaW5hbFJhbmdlKVxyXG4gICAgfVxyXG4gICAgaWYgKHByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCkge1xyXG4gICAgICBwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFx1ODNCN1x1NTNENlx1NzI0OFx1NjcyQ1xyXG4gKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFZlcihwYXJhbXM6IHN0cmluZykge1xyXG4gIHJldHVybiAnMS4wLjAnXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7OztBQUE2TSxTQUFTLGVBQWUsV0FBVztBQUVoUCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBRW5CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsdUJBQXVCOzs7QUNS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QSxJQUMxQyxDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUE7QUFBQSxNQUVULFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBO0FBQUEsTUFFQSxTQUFTLENBQUMsT0FBTyxjQUFjO0FBQUEsUUFDN0IsWUFBWTtBQUFBLFVBQ1Y7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRixDQUFDO0FBQUEsTUFDRCxXQUFXLENBQUMsaUJBQU0sQ0FBQztBQUFBLElBQ3JCLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFBLElBQy9CLENBQUM7QUFBQSxJQUNELDBCQUFnQjtBQUFBLE1BQ2QsYUFBYTtBQUFBLElBQ2YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsib3B0aW9ucyIsICJvcHRpb25zIiwgImV4dG5hbWUiLCAiam9pbiIsICJub3JtYWxpemVQYXRoIiwgInJlc29sdmUiLCAibm9ybWFsaXplUGF0aCIsICJqb2luIl0KfQo=
