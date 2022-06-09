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

  // a github repository secret for NPM_TOKEN exists
  releaseToNpm: true,

  // github repository secrets for TWINE_USERNAME and TWINE_PASSWORD exists
  publishToPypi: {
    distName: 'projen-types',
    module: 'projen-types',
  },
});
project.synth();