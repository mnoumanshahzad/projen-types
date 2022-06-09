# API Reference <a name="API Reference" id="api-reference"></a>



## Classes <a name="Classes" id="Classes"></a>

### AwsCdkAppPy <a name="AwsCdkAppPy" id="@mnoumanshahzad/projen-types.AwsCdkAppPy"></a>

AWS CDK app in Python.

#### Initializers <a name="Initializers" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.Initializer"></a>

```typescript
import { AwsCdkAppPy } from '@mnoumanshahzad/projen-types'

new AwsCdkAppPy(options: AwsCdkPythonAppOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.Initializer.parameter.options">options</a></code> | <code>projen.awscdk.AwsCdkPythonAppOptions</code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.Initializer.parameter.options"></a>

- *Type:* projen.awscdk.AwsCdkPythonAppOptions

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.addPackageIgnore">addPackageIgnore</a></code> | Exclude these files from the bundled package. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.addDependency">addDependency</a></code> | Adds a runtime dependency. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.addDevDependency">addDevDependency</a></code> | Adds a dev dependency. |

---

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addPackageIgnore"></a>

```typescript
public addPackageIgnore(_pattern: string): void
```

Exclude these files from the bundled package.

Implemented by project types based on the
packaging mechanism. For example, `NodeProject` delegates this to `.npmignore`.

###### `_pattern`<sup>Required</sup> <a name="_pattern" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addPackageIgnore.parameter._pattern"></a>

- *Type:* string

The glob pattern to exclude.

---

##### `addTask` <a name="addTask" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

By default, this is `npx projen@<version> <task>`

###### `task`<sup>Required</sup> <a name="task" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all sub-projects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addDependency` <a name="addDependency" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addDependency"></a>

```typescript
public addDependency(spec: string): void
```

Adds a runtime dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---

##### `addDevDependency` <a name="addDevDependency" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addDevDependency"></a>

```typescript
public addDevDependency(spec: string): void
```

Adds a dev dependency.

###### `spec`<sup>Required</sup> <a name="spec" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.addDevDependency.parameter.spec"></a>

- *Type:* string

Format `<module>@<semver>`.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.depsManager">depsManager</a></code> | <code>projen.python.IPythonDeps</code> | API for managing dependencies. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.envManager">envManager</a></code> | <code>projen.python.IPythonEnv</code> | API for mangaging the Python runtime environment. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.moduleName">moduleName</a></code> | <code>string</code> | Python module name (the project name, with any hyphens or periods replaced with underscores). |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.version">version</a></code> | <code>string</code> | Version of the package for distribution (should follow semver). |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.packagingManager">packagingManager</a></code> | <code>projen.python.IPythonPackaging</code> | API for managing packaging the project as a library. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.pytest">pytest</a></code> | <code>projen.python.Pytest</code> | Pytest component. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.testdir">testdir</a></code> | <code>string</code> | The directory in which the python tests reside. |

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### `depsManager`<sup>Required</sup> <a name="depsManager" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.depsManager"></a>

```typescript
public readonly depsManager: IPythonDeps;
```

- *Type:* projen.python.IPythonDeps

API for managing dependencies.

---

##### `envManager`<sup>Required</sup> <a name="envManager" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.envManager"></a>

```typescript
public readonly envManager: IPythonEnv;
```

- *Type:* projen.python.IPythonEnv

API for mangaging the Python runtime environment.

---

##### `moduleName`<sup>Required</sup> <a name="moduleName" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.moduleName"></a>

```typescript
public readonly moduleName: string;
```

- *Type:* string

Python module name (the project name, with any hyphens or periods replaced with underscores).

---

##### `version`<sup>Required</sup> <a name="version" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the package for distribution (should follow semver).

---

##### `packagingManager`<sup>Optional</sup> <a name="packagingManager" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.packagingManager"></a>

```typescript
public readonly packagingManager: IPythonPackaging;
```

- *Type:* projen.python.IPythonPackaging

API for managing packaging the project as a library.

Only applies when the `projectType` is LIB.

---

##### `pytest`<sup>Optional</sup> <a name="pytest" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.pytest"></a>

```typescript
public readonly pytest: Pytest;
```

- *Type:* projen.python.Pytest

Pytest component.

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which the python tests reside.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mnoumanshahzad/projen-types.AwsCdkAppPy.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@mnoumanshahzad/projen-types.AwsCdkAppPy.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---


