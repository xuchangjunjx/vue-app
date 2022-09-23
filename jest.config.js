module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.m?jsx?$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/utils/**/*.{js,vue}",
    "src/components/**/*.{js,vue}",
    "!**/node_modules/**",
  ],
  coverageReporters: ["html", "text-summary"],
  setupFiles: [],
};
