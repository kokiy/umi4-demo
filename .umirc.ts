import { defineConfig } from "umi";

export default defineConfig({
  npmClient: "npm",
  moment2dayjs: {},
  locale: {},
  plugins: ["@umijs/plugins/dist/locale", "@umijs/plugins/dist/moment2dayjs"],
});
