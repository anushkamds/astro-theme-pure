---
title: Configuring Azure DevOps Pipelines for Monorepo Release
tags:
  - web
  - javascript
  - mono
  - repo
  - azure
  - devops
  - pipeline
  - swa
publishDate: 2023-07-03
coverImage: { src: './images/building-process.webp', color: '#54974D' }
description: 'Monorepos are trending and lot of people like it, but sometime it is challanging'
---

Releasing [monorepo](/posts/is-monorepo-good-for-you) applications can be done in different ways. The release process doesn’t depend on how the applications are connected with each other. When a `build` is executed, it needs to build the relevant application and release it without affecting any other applications.

When a [pull request (PR)](https://learn.microsoft.com/en-us/azure/devops/repos/git/pull-requests?view=azure-devops&tabs=browser) is built in a specific feature/package folder, only one build and deployment should be necessary. However, using git diff for this purpose is not recommended.

![Crashing two cars](./images/building-process.webp)

## Use of triggers

[Triggers](https://learn.microsoft.com/en-us/azure/devops/pipelines/build/triggers?view=azure-devops) are very helpful in this situation. They allow you to exclude and include different paths in the building process. Let’s assume your package structure is as follows, and you need to add pipeline `YAML` files for each folder.

```bash
├── packages/
│   ├── app1/
│   │   └── ....
│   │   └── azure-pipeline-app1.yml
│   ├── app2/
│   ├── app3/
│   │   └── ....
│   │   └── azure-pipeline-app3.yml
└── package.json
```

Then what you need to do is put a trigger in your subfolder pipeline configurations. This means it will only trigger that folder when there is any update based on your branch or PR requirements.

```yml
# azure-pipeline-app1.yml or any other feature folder YAML file
trigger:
  paths:
    include:
      - 'packages/app1/*' # or any feature folder
```

If you have a root folder pipeline and you don’t need to run the root one in case of changes to these feature folders, you need to exclude the feature folder in the root pipeline.

```yml
paths:
    exclude: # Exclude!
      - 'packages/app1/*'
      - 'packages/app3/*'
	    # or
	    - 'packages/*'

```

## Important notice

When building each folder, you need to define the working directory in the build process. This ensures that all commands run within the feature folder.

```yml
- script: # script path or inline
  workingDirectory: 'packages/app1/'
```

If you are using [SWA in Azure](https://learn.microsoft.com/en-us/azure/static-web-apps/overview), you need to define the folder for building and skip default configurations.

```yml
- task: AzureStaticWebApp@0
  displayName: 'Deploying SWA'
  inputs:
    azure_static_web_apps_api_token: 'TOKEN'
    app_location: 'packages/app1/dist'
    api_location: ''
    output_location: ''
    skip_app_build: true
    skip_api_build: true
```

## Final Step

After completing all these configurations, you need to add the `YAML` files as a new pipeline in the Pipeline section of Azure DevOps under `Existing Azure Pipelines YAML file` configuration.

## Conclusion

This process is easy to handle and allows deployment based on your features. However, it does not have the capability to handle processes based on toggling features; it requires portal interaction.

Until next time!
