# React performance

Deep dive into how to optimize react applications.

- [x] Code splitting with React.Lazy
- [ ] Data memoization with React.useMemo
- [ ] Component optimization with React.memo
- [ ] Reporting with web-vitals
- [ ] Context optimization
- [ ] Performance optimization with WebWorkers

**Notes**: This application has been created with create-react-app therefore we
have a super optimized webpack

## React.Lazy

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

Deployed versions:

- [No lazy loading](https://deploy-preview-1--adoring-gates-8a257a.netlify.app/)
- [Lazy loading](https://deploy-preview-3--adoring-gates-8a257a.netlify.app/)
- [Eager lazy loading](https://deploy-preview-4--adoring-gates-8a257a.netlify.app/)
- [Magic comment](https://deploy-preview-5--adoring-gates-8a257a.netlify.app/)

## Data memoization
