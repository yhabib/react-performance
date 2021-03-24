# React performance

Deep dive into how to optimize react applications.

- [x] Code splitting with React.Lazy
- [x] Data memoization with React.useMemo
- [x] Component optimization with React.memo
- [ ] Context optimization
- [ ] Production monitoring

**Notes**: This application has been created with create-react-app thus it uses
a super optimized webpack

## Lazy loading

Notes:

- A component that we want to lazy load has to be exported as default module
- `<React.Suspense>` should be the closest to the component we want to lazy load
- Throttle for the network to see it better
- Coverage view to show unused code
- [Webpack magic comments](https://webpack.js.org/api/module-methods/#magic-comments)

Steps:

1. Network and app with no lazy code.
2. Lazy code (lazy-sol-1)
3. Eager loading (lazy-sol-2)
4. Webpack magic comments (lazy-sol-3)
5. Move around Suspense

Versions:

- [Default](https://deploy-preview-1--adoring-gates-8a257a.netlify.app/)
- [Lazy loading](https://deploy-preview-3--adoring-gates-8a257a.netlify.app/)
- [Eager lazy loading](https://deploy-preview-4--adoring-gates-8a257a.netlify.app/)
- [Magic comment](https://deploy-preview-5--adoring-gates-8a257a.netlify.app/)

### Resources

- [Magic comments](https://webpack.js.org/api/module-methods/#magic-comments)
- [JS modules](https://v8.dev/features/modules)
- [ES modules](https://www.sitepoint.com/using-es-modules/)
- [Preload links](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)

## Data memoization

- `useMemo` reuse expensive calculations
- `useCallback` for functions
- When no filter, it takes for both the same time because we have the map inside
  the component, no possible optimization

Different problems:

- When re-rendering `getItems` is recalculated
- When typing we don't see the text -> Cumulative Layout Shift

Versions:

- [Default](https://deploy-preview-1--adoring-gates-8a257a.netlify.app/)
- [React.useMemo](https://deploy-preview-6--adoring-gates-8a257a.netlify.app/)
- [Web workers](https://deploy-preview-7--adoring-gates-8a257a.netlify.app/)

## Skip re-renders

- React lifecycle: render -> reconciliation -> commit
- React is very fast on the second one, so it is not such a big problem to have
  many renders.
- React exists because third one is super slow. So the second part helps to find
  out what needs to be changed so it can target it

Versions:

- [Default](https://adoring-gates-8a257a.netlify.app/)
- [React.memo](https://deploy-preview-8--adoring-gates-8a257a.netlify.app/)

## Resources

- [useMemo vs useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
