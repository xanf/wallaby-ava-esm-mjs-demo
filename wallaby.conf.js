module.exports = function(wallaby) {
  return {
    files: ["src/**/*.mjs"],
    tests: ["tests/**/*.mjs"],
    env: {
      type: "node",
      params: {
        runner: `-r ${require.resolve("esm")}`
      }
    },
    debug: true,
    testFramework: "ava"
  };
};
