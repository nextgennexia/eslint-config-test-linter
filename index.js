module.exports = {
  extends: 'airbnb',
  rules: {
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'max-len': ['error', 140],
    'jsx-a11y/no-static-element-interactions': 0,
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
    }],
    'import/prefer-default-export': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore'
    }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
      peerDependencies: true
    }],
    'jsx-a11y/label-has-for': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': ['error', {
      allow: ['warn', 'error']
    }],
    'no-constant-condition': ['error', { 'checkLoops': false }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js']
    }],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'always'
    }]
  }
};
