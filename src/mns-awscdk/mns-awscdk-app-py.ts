import { SampleFile } from 'projen';
import { AwsCdkPythonApp, AwsCdkPythonAppOptions } from 'projen/lib/awscdk';

/**
 * AWS CDK app in Python
 *
 * @pjid mns-awscdk-app-py
 */

export class MnsAwsCdkPythonApp extends AwsCdkPythonApp {
  constructor(options: AwsCdkPythonAppOptions) {
    super({
      ...options,
      readme: {
        contents: [
          '# Project Name',
          '',
          '## Overview',
          '',
          '## Getting Started',
          '',
          '## Contributing',
          '',
          '## Related Projects',
        ].join('\n'),
      },
    });

    this.generateSampleContributingFile();
    this.generateSampleJustFile();
  }

  private generateSampleContributingFile() {
    const contents = [
      '# Welcome to contributing guide',
      '',
      '## Getting Started',
      '',
      '## Pull Request Process',
      '',
      '## Code of Conduct',
      '',
      '## How to develop',
      '',
      '### Prerequisites',
      '',
      '### Main Concepts',
      '',
      '### Developing',
      '',
      '### Troubleshooting',
    ].join('\n');

    new SampleFile(this, 'CONTRIBUTING.md', {
      contents: contents,
    });
  }

  private generateSampleJustFile() {
    const contents = [
      'set export',
      'set dotenv-load',
      '',
      'alias info := default',
      'alias bt := bootstrap',
      '',
      '# shows some help',
      '@default:',
      '    echo',
      '    just --list',
      '    echo ""',
      '    just help',
      '    echo ',
      '    echo "[*] Let\'s check your current AWS account ..."',
      '    just login',
      '',
      'all: init bootstrap deploy ',
      '',
      '# setup the local dev environment',
      '@init: login',
      '    pipenv --rm || true',
      '    pipenv sync',
      '',
      '# bootstrap CDK in target AWS account',
      'bootstrap:',
      '    @cdk bootstrap',
      '',
      '# cleans up locally build stuff etc. ',
      '@clean:',
      '    find . -name \'cdk.context.json\' -delete ',
      '    rm -rf cdk.out',
      '    find . -type f -name \'*.py[co]\' -delete -o -type d -name __pycache__ -delete',
      '',
      '# clean up and more (npm, pip pkgs, .env)',
      '@clean-all: clean',
      '    rm -rf node_modules',
      '    pipenv --rm 2>/dev/null || true',
      '    mv -f .env .env.bak 2>/dev/null || true',
      '',
      'deploy: login',
      '    cdk deploy',
      '',
      'destroy: login',
      '    cdk destroy',
      '',
      'build:',
      '    cdk synth',
      '',
      'test: _not_implemented_yet',
      '',
      '@_not_implemented_yet:',
      '    echo "[!] This recipie is not fully implemented yet." ',
      '',
      '',
      '# You might want to set AWS_PROFILE',
      '# AWS login to fetch credentials if needed',
      'login:',
      '    #!/usr/bin/env bash',
      '    set -euo pipefail',
      '    aws sts get-caller-identity --no-cli-pager --output text --query Account &>/dev/null  || aws sso login',
      '    alias=`aws iam list-account-aliases --query "AccountAliases[0]" --output text 2>/dev/null`',
      '    echo "[>] AWS Account: ${alias}"',
      '',
      '# Hint: Let this recipe be the last one and ending with a \tEOF',
      '# shows some common tasks and how to do with just ',
      'help: ',
      '    #!/usr/bin/env bash',
      '    cat <<-EOF',
      '    ',
      '    Common usage:',
      '    ...::: TL;DR Just deploy something (for the impatient) :::...',
      '    $ just all',
      '',
      '    ...::: Validates that your local shell session is ready to deploy and develop and setup missing things :::...',
      '    $ just init',
      '    ',
      '        ...::: Setup missing things in the AWS account. Needed for CDK deployments in sandbox (once a day) :::...',
      '    $ just bootstrap',
      '    ',
      '    EOF',
    ].join('\n');

    new SampleFile(this, 'Justfile', {
      contents: contents,
    });
  }
}