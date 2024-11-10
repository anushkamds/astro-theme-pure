---
title: Mono repo using tsconfig
tags:
  - monorepo
  - typescript
  - mono
  - javascript
  - CICD
description: 'Start solving mono puzzles'
publishDate: 2023-02-23
coverImage: { src: './image/camera-pieces.webp', color: '#64981D' }
---

There are various methods to configure a mono repo for diverse purposes. It can be utilised to deploy multiple applications that use different components or micro frontends. Numerous frameworks and libraries are available to manage the complexity of configuring mono repos. Sometimes, all you need is a small configuration to handle these problems.

> This solution works exclusively with TypeScript due to its configurations. While I haven't tried it with JavaScript, it should certainly work with the proper configurations.

To set up your project with TypeScript, it is essential to configure it using a **`tsconfig.json`** file for proper configuration.

You can utilise the following configuration or any path configuration method within the scope of your project. You have the flexibility to define names using either `package` or simpler configuration.

```json
...
"paths": {
	"@/*": ["./packages/*"]
		// OR
	"@/user": ["./src/user"],
	"@/auth": ["./src/auth"],
	"@/table": ["./src/table"],
},
...
```

You have the flexibility to extend the `tsconfig` file, provided that it incorporates a path configuration. Similarly, your choice of building pipeline or process is unrestricted, as long as it remains compatible with TypeScript.

You can utilise the any element in any context by using it as demonstrated below.

```ts
import { MyUserComponent } from '@/user/components'
```

This is simple configuration will help to maintain your project easily,

> However, utilising it as a micro frontend or service won't be a good solution due to the fact that when you build that folder, it will compile all the necessary files for the build process rather than making links.

Until next time!
