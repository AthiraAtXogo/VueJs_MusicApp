/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  // plugins: [
  //   'html', // Add HTML plugin
  //   'vue'   // Ensure Vue plugin is listed
  // ],
  overrides: [
    {
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  env:{
    node:true,
  },
  rules:{
"vue/multi-word-component-names":"off"
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}

// /* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')

// module.exports = {
//   root: true,
//   extends: [
//     'plugin:vue/vue3-essential',
//     'eslint:recommended',
//     '@vue/eslint-config-prettier/skip-formatting',
//     'prettier' // Add this line to extend Prettier config
//   ],
//   plugins: [
//     'html', // Add HTML plugin
//     'vue' // Ensure Vue plugin is listed
//   ],
//   overrides: [
//     {
//       files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}', 'cypress/support/**/*.{js,ts,jsx,tsx}'],
//       extends: ['plugin:cypress/recommended']
//     }
//   ],
//   parserOptions: {
//     ecmaVersion: 'latest'
//   },
//   settings: {
//     'html/html-extensions': ['.html', '.vue'] // Ensure ESLint lints these files
//   },
//   rules: {
//     // Add your custom rules here
//     semi: ['error', 'always'],
//     quotes: ['error', 'double'],
//     'vue/html-indent': ['error', 2],
//     'vue/max-attributes-per-line': [
//       'error',
//       {
//         singleline: 1,
//         multiline: {
//           max: 1,
//           allowFirstLine: false
//         }
//       }
//     ]
//   }
// }
