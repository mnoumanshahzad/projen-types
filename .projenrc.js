const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  name: 'projen-types',
  description: 'My custom projen project types',
  keywords: ['projen', 'cdk', 'aws', 'codegen'],

  defaultReleaseBranch: 'main',
  repositoryUrl: 'https://github.com/mnoumanshahzad/projen-types.git',

  author: 'mnoumanshahzad',
  authorAddress: 'mnoumanshahzad@hotmail.com',

  deps: ['projen'],
  peerDeps: ['projen'],

  release: true,

  packageName: '@mnoumanshahzad/projen-types',
  releaseToNpm: true,
  npmTokenSecret: 'GITHUB_TOKEN',
  npmRegistryUrl: 'https://npm.pkg.github.com',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();