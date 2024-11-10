---
title: Did we forget design patterns?
tags:
  - development
  - design
  - pattern
  - engineering
publishDate: 2024-03-12
coverImage: { src: './image/patterns.webp', color: '#D5974D' }
description: 'You hvae learnt it, but confused where to use it.'
---

Back in the day, lectures were buzzing with discussions about design patterns, and we had to learn about them extensively. If we didn’t, passing exams would have been impossible. We studied design patterns because we needed to pass those exams at the time. Some fragments of that knowledge stayed in our minds, reminding us that such concepts existed in the world of software development.

Later, as I delved into coding, I found myself using those design patterns -sometimes unconsciously, other times intentionally. Yet, when I revisited the code I had written and examined it closely, it appeared to be quite robust and well-constructed.

## Types Patterns

All of these design patterns have been categorized into **three main categories**:

1. **Creational patterns**
2. **Structural patterns**
3. **Behavioral patterns**

Under each category, various patterns have been defined. These patterns are designed to solve **very specific problems** in software development.

## Is it good?

For example, if you use the **factory pattern**, it allows you to generate classes or objects based on specific requirements. Think of it as having a switch case with functional returns. These may seem like trivial details, but they significantly impact code quality and maintainability.

In some cases, employing design patterns simplifies the process of writing code. There are more complex patterns that can be applied to intricate problems. However, understanding these patterns thoroughly and becoming well-acquainted with them can be a bit challenging. Nevertheless, the effort is worthwhile.

## Why don’t we use it?

**Often**, developers either **forget** or **are unaware of** these design patterns. As time **progresses**, we might lose track of them, yet occasionally, we **unintentionally** employ them. Sometimes, the packages we use incorporate these patterns, and we **simply** utilize them without full awareness.

For instance:

- [**Redux**](https://redux.js.org/) employs the **observer pattern** to manage store changes.
- In older versions of [**AngularJS**](https://angularjs.org/), the **dependency injection** and **singleton patterns** are used for module imports.

Interestingly, there are instances where we apply these patterns **without recognizing** them as such. This is because many developers primarily learn to write code using [functional programming](https://en.wikipedia.org/wiki/Functional_programming) paradigms.

## Conclusion

**Design patterns** do not evolve like technologies; they are conceptualized through experience. However, they remain **critically important** for certain use cases. Familiarizing yourself with these patterns enhances your critical thinking and problem-solving skills. Moreover, their versatility allows you to apply them across different programming languages. Learning to solve problems in a stylish manner is a valuable endeavour.
