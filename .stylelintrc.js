module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
  ],
  "ignoreFiles": ["dist/**/*"],
  "rules": {
    "at-rule-no-unknown": [ true, {
      ignoreAtRules: [
        "tailwind",
        "apply",
        "variants",
        "responsive",
        "screen",
      ],
    }],
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
};