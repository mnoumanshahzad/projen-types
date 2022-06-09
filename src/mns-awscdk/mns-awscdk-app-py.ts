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
      readme: {},
    });

    this.generateSampleReadmeFile();
    this.generateSampleContributingFile();
  }

  private generateSampleReadmeFile() {
    const contents = `
    # ${this.name}
    
    ## Overview
    
    ## Getting Started

    ## Contributing

    ## Related Projects
    `.trim();
    new SampleFile(this, 'README.md', {
      contents: contents,
    });
  }

  private generateSampleContributingFile() {
    const contents = `
    # Welcome to contributing guide

    ## Getting Started

    ## Pull Request Process

    ## Code of Conduct

    ## How to develop
    
    ### Prerequisites

    ### Main Concepts

    ### Developing

    ### Troubleshooting
    `.trim();
    new SampleFile(this, 'CONTRIBUTING.md', {
      contents: contents,
    });
  }
}