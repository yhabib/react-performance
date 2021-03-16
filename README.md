# React performance

Deep dive into how to optimize react applications.

- [ ] Code splitting with React.Lazy
- [ ] Data memoization with React.useMemo
- [ ] Component optimization with React.memo
- [ ] Reporting with web-vitals
- [ ] Context optimization
- [ ] Performance optimization with WebWorkers

**Notes**: This application has been created with create-react-app therefore we
have a super optimized webpack

## React.Lazy

- A component that we want to lazy load has to be exported as default module
- `<React.Suspense>` should be the closest to the component we want to lazy load
- Coverage view to show unused code

Deployed versions:
* [Without lazy loading](https://deploy-preview-1--adoring-gates-8a257a.netlify.app/)
* [With lazy loading](https://deploy-preview-2--adoring-gates-8a257a.netlify.app/)


## Data memoization



