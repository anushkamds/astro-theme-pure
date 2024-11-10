---
title: Is Monorepo good for you and how it is going on?
tags:
  - web
  - javascript
  - frontend
  - microfrontend
publishDate: 2023-02-13
coverImage: { src: './image/divide-orange.webp', color: '#64974D' }
description: 'Sharing my experience of mono repo'
---

Microservices have been present in the industry for several years, helping many organizations manage their infrastructure. They allow for the definition of independent services running on different servers to handle various functionalities and distribute the load, rather than being handled in a single place. It was a significant invention for the software industry.

In 2016, the concept of [Micro Frontends](https://www.thoughtworks.com/radar/techniques/micro-frontends) emerged with the same principles applied to the frontend. Similar to backend services, frontends are defined based on functionality and divided into different environments to ensure smooth handling of the load. This was a positive development, offering several approaches to the development process. [Mono repositories](blog/micro-frontend-monorepo-a-prefect-couple/) are used to handle the development process, enabling developers to work in environments where they can make changes and deploy them.

## Building things easier and consistent

When building backend, it is not must to follow some design guidelines. But when come to front end where people see things. So it need to have a consistency in the design to make sure all elements in the pages are look exact same. It means design needs to be the same as user seen on the home page and other pages.

By defining package for UI component and reusing it from a single place, it allows to maintain same design principle all over the organization and developers don’t have worry about copy and paste stuff. All bases design will be define in package and it can be hosted as separate micro frontend/package all other app can refer that.

Starting to use the micro element in frontend is good experience with time but not when it is started because you have spent some time to divide and define stuff. There should be clear idea what to isolate and what needs to be connect with each other.

## Challenges in implementation

There are various ways to implement micro frontends, but the deployment process is not always clear-cut. In a mono repo setup, there isn't a definitive way to release each feature or micro part. The process, like PR (Pull Request) to code review to release path, is not clearly defined in the concept, leading to different techniques being used. Sometimes, developers may need to rely on others to release changes. It's essential to iron out these issues early on to prevent chaos in the project.

## Converting existing apps to micro frontends

The difficulty of converting existing apps to micro frontends depends on the level of coupling between modules. If there is significant coupling, there's a risk involved, as handling imports may become limiting. Careful consideration is necessary when dividing things into different applications.

If the coupling is not severe, building a more manageable cluster of applications is possible. This approach improves the development experience and allows developers to work smoothly through the delivery process, minimizing issues like code working fine but resulting in a white screen with minimal error descriptions.

## End Note

Developing micro frontends requires good coordination among team members and thorough documentation to avoid duplicated code and conflicts. Effective communication within the team is crucial.

If you have people who don’t go along with others, then you have to think about them, or they have to think about themselves. (Just kidding).

Until next time, cheers✌️!
