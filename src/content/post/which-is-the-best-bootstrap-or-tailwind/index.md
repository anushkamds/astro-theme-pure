---
title: Which is the best, Bootstrap or Tailwind
tags:
  - web
  - frontend
  - css
description: 'Something to think'
publishDate: 2023-11-19
---

All most all developers in this world know what the Bootstrap is. Even for me, every time I heard the word bootstrap in a movie or some other thing I was thinking,

> Do they talk about bootstrap CSS? or something else?

That kind of deep bind has been build in our mind with that CSS framework. Anyway, let's get started.

## History

[Bootstrap](https://getbootstrap.com/) was built in 2010 by Twitter. It was an exciting project to follow because it had simplified a lot of things for developers.
Stress-free CSS framework to align things in the web page with columns and row classes.

If we talk about [Tailwind](https://tailwindcss.com/) CSS, they had a different idea of building a CSS framework.
Initially released in 2017 and they focused on utility class and rapid building processes for developers.

## Motivation

People can select either of these frameworks based on their preferences. In today's world, there are several factors when considering the CSS framework for the frontend.

- Bundle size after development process completed
- Utility class for rapid development
- Purge capabilities
- What we need to add by ourselves

To make a small judgment, I did a small demo to check a bundle size with the purging option enabled for CSS.
I have used [Angular](https://angular.io/) latest version as my frontend framework with with the help of [Angular CLI](https://angular.io/cli). I have started with some trivial elements and CSS.

## Bootstrap and purging

![Bootstrap CSS logo](./image/bootstrap.webp)

Bootstrap doesn't have any in-build way to purging, so it is required to use [purgecss](https://www.npmjs.com/package/purgecss) or any other package for purging.

- Initial build

| Initial Chunk Files               | Names                  | Size               |
| --------------------------------- | ---------------------- | ------------------ |
| main.bfc49b6fd822eedc1663.js      | main                   | 216.61kB           |
| styles.dbeacab1dc8d41d4172f.css   | styles                 | 156.32kB           |
| polyfills.910a21b436690cc102b5.js | polyfills              | 36.22kB            |
| runtime.b5f57ed9725f41688380.js   | runtime                | 1.05 kB            |
|                                   | <em>Initial Total</em> | <em>408.19 kB</em> |

- After purging

| Initial Chunk Files               | Names                  | Size               |
| --------------------------------- | ---------------------- | ------------------ |
| main.bfc49b6fd822eedc1663.js      | main                   | 185.61kB           |
| polyfills.910a21b436690cc102b5.js | polyfills              | 36.22kB            |
| styles.dbeacab1dc8d41d4172f.css   | styles                 | 3.40kB             |
| runtime.b5f57ed9725f41688380.js   | runtime                | 1.05 kB            |
|                                   | <em>Initial Total</em> | <em>226.26 kB</em> |

It helped to reduce the size of the style sheet with a significant improvement for bundling size.

## Tailwind and optimization

![Tailwind CSS logo](./image/tailwindcss.webp)

Tailwind has an in-build mechanism to deal with the bundle size issue in production. For more information, refer to [their official guidelines](https://tailwindcss.com/docs/optimizing-for-production).

- Initial build

| Initial Chunk Files               | Names                  | Size               |
| --------------------------------- | ---------------------- | ------------------ |
| styles.b2535baa629b94d371b2.css   | styles                 | 2.76 MB            |
| main.418a89a383e7e30fe062.js      | main                   | 185.56 kB          |
| polyfills.910a21b436690cc102b5.js | polyfills              | 36.22kB            |
| runtime.b5f57ed9725f41688380.js   | runtime                | 1.05 kB            |
|                                   | <em>Initial Total</em> | <em>408.19 kB</em> |

- After optimization

| Initial Chunk Files               | Names                  | Size               |
| --------------------------------- | ---------------------- | ------------------ |
| main.bfc49b6fd822eedc1663.js      | main                   | 185.61kB           |
| polyfills.910a21b436690cc102b5.js | polyfills              | 36.23kB            |
| styles.dbeacab1dc8d41d4172f.css   | styles                 | 3.26kB             |
| runtime.b5f57ed9725f41688380.js   | runtime                | 1.05 kB            |
|                                   | <em>Initial Total</em> | <em>226.26 kB</em> |

Optimization has a massive impact on package size.

## Conclusion

Both of these gave better improvement for package sizes with similar sizes. Now we are stuck with selecting one. Considering these CSS packages, first, we need to consider the requirements. Tailwind is utility base CSS, and it has tons of classes to work with and less custom CSS required. Bootstrap has some of those features, but sometimes we need to use some custom styles. For theming, Tailwind contains in-build capabilities and can use them straightforwardly. Bootstrap has some, but it doesn't have that many configurations to be used.

It depends on your requirements. If you need a simple CSS framework, Bootstrap is the best. If you need more, you can use Tailwind.

## Refer More

- [Bulma: the modern CSS framework that just works. ](https://bulma.io/)
- [Carbon Design](https://www.carbondesignsystem.com/designing/get-started/)
- [Clarity: Enterprise-Ready Consumer-Simple](https://clarity.design/)

Until next time, see you, folks👏.
