---
title: 'TanStack Query aka React Query'
tags:
  - react
  - react-query
  - web
  - http
publishDate: 2024-06-17
coverImage: { src: './image/http-image.webp', color: '#64974D' }
description: 'React API calls in new way, the better way'
---

Most React developers struggle to manage the state of their applications. There are solutions such as Redux, Recoil, Zustand, and many more. However, in some cases, using these tools can be a bit overkill. You might just use the built-in state management in React, but will it work every time? You can use anything that comes out of the box, but in some cases, you might end up facing issues like [props drilling](https://react.dev/learn/passing-data-deeply-with-context).

This is where TanStack Query, also known as React Query, comes in. It allows you to manage API states as state for your React app. You might think this is similar to Axios, but it’s not. It’s more like a wrapper for Axios. Within React Query, you can use Axios as the handler for requests, or you can use any other library you prefer.

```tsx
const query = useQuery({
  queryKey: ['test'],
  queryFn: fetch('<https://api.example.com/data>'),
})
```

This is simple and gives you more control over your data. You don’t have to define any state for data handling.

## Get Requests and Caching

You can refer to the typical way shown in the example above to fetch data. It’s easy to get data through it. If you’re considering caching, it’s available out of the box. You can configure different caching options, such as keeping the cache forever or not caching at all—it’s up to you.

You can even define the caching time. It’s highly configurable, allowing developers to use various options to ensure reduced data loading times for users.

## Post/Put Operations

This is where things get a little crazier. We usually have POST and PUT requests to send the relevant data, but in React Query, it gets a bit tricky.

You have to use something called **Mutations**. It’s not straightforward to understand at first, but it’s a great concept to work with. It offers more capabilities than other approaches. First, let’s see how it can be implemented.

```tsx
const CreateTodo = () => {
  const mutation = useMutation({
    mutationFn: (formData) => {
      return fetch('/api', formData)
    },
  })
  const onSubmit = (event) => {
    event.preventDefault()
    mutation.mutate(new FormData(event.target))
  }

  return <form onSubmit={onSubmit}>...</form>
}
```

The code above simply demonstrates how to use a mutation. Initially, it requires a POST operation inside the mutation wrapper. You can use any [HTTP client](https://www.webdevstory.com/javascript-http-requests-libraries/) within it; in this case, it's `fetch`. Inside the `submit` function, you need to call the mutation as shown above. You can check example in [react query doc](https://tanstack.com/query/latest/docs/framework/react/guides/mutations).

The benefit of using packages like this is that they allow you to access the state of a request from anywhere in the app. With React Query wrapped around the main app, you can easily access the status of a request. You can use `useMutationState` to check the status without needing to pass props or use any state management tools to share the status.
