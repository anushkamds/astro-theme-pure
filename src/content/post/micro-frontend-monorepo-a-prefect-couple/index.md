---
title: Micro frontend + Monorepo, a prefect couple
tags:
  - frontend
  - techonologies
  - microfrontend
publishDate: 2024-01-09
description: 'Start learn something with prefix of micro'
coverImage: { src: './image/micro-frontends-architecture.webp', color: '#60974D' }
---

![micro frontends architecture](/images/micro-frontends-architecture.webp)

In the beginning, we had enjoyed the websites and their contents every day for several days but then the inevitable happens. Now it takes a lot of time load and you are looking for alternatives. You are lacking interest to that web site. Same story for the developers who are building the website. So many variables to consider, so many codes to check, ah development is unacceptable.

## Why is that, what's the matter man

You escaped from the [monolithic](https://microservices.io/patterns/monolithic.html) trap but now you are stuck with a different issue for maintaining the code. You have applied the best practice in the codebase such as tree shake, modularization, minification, blah, blah and blah.

## Behold the [Micro Frontends](https://micro-frontends.org/)

No, it is not a novel concept. It was there and people already used it with a different name based on the use case. Initial pops up on 2016 in [ThoughtWorks Technology Radar](https://www.thoughtworks.com/radar/techniques/micro-frontends) and got the boot with the complications developers face in the huge frontend codebase.
The micro frontend development is mostly driven by domain-based criteria. First, need to understand the domains inside your application and split them accordingly. Also, you need to identify the shareable components which will be used across the whole application. You need the sharable items to keep the consistency of the application to make sure the user doesn't feel like using multiple applications. A lot of people are using this concept to make their application micro.
Now you got the architecture resolved but you can't escape the code hazard. You need to maintain the code in the best way to make sure you leverage the developer resource to the max to gain the best result.

## What can we do

You have several alternatives to help you

- Multiple repositories
- [Monorepos](https://www.perforce.com/posts/vcs/what-monorepo)

If you go with multiple repo one you need to consider maintaining yours shareable. If you go with the mono option, everything in your hand is better.
In a mono repo, all the code in one repo for multiple projects. Plus point is your shareable also inside the whole project and others can refer to your code too.

- There are drawbacks too. When you are using mono repo.
- Unable to distinguish codebases for a particular team
- Shareable will be changed and it will affect others too
- Code conflict will inevitable

To resolve those issues you can leverage different approaches. It can be defined based on your experiences and for your convenience. In my opinion,

- [Trunk based development](https://trunkbaseddevelopment.com/)
- [open-closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle)

can be used to make sure codebase changes don't affect others when other teams are also working on the same thing.

## Wrapping Up

It is the early stages of the process but it keeps getting bigger and bigger with time. Already people are using the concept of micro frontend with mono repo and got succeed with better user experience. So many frameworks have been invented and it keeps coming.

### Cheers, then until next time.

## Resources:

- [Awesome micro frontend](https://github.com/rajasegar/awesome-micro-frontends)
- [Microfrontends Overview Concept](https://single-spa.js.org/docs/microfrontends-concept)
