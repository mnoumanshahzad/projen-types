import { AwsCdkPythonApp, AwsCdkPythonAppOptions } from 'projen/lib/awscdk';

/**
 * AWS CDK app in Python
 *
 * @pjid awscdk-app-py
 */

export class AwsCdkAppPy extends AwsCdkPythonApp {
  constructor(options: AwsCdkPythonAppOptions) {
    super({
      ...options,
    });
  }
}