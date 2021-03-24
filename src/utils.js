import React from 'react'

export const logger = console.info

export const useForceRerender = () => React.useReducer(state => state + 1, 1)[1]

const useSafeDispatch = dispatch => {
  const mounted = React.useRef(false)
  React.useLayoutEffect(() => {
    mounted.current = true
    return () => (mounted.current = false)
  }, [])
  return React.useCallback(
    (...args) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}
// Example usage:
// const {data, error, status, run} = useAsync()

const DEFAULT_STATE = {status: 'idle', data: null, error: null}
export const useAsync = initialState => {
  const initialStateRef = React.useRef({
    ...DEFAULT_STATE,
    ...initialState,
  })
  const [{status, data, error}, setState] = React.useReducer(
    (s, a) => ({...s, ...a}),
    initialStateRef.current,
  )

  const safeSetState = useSafeDispatch(setState)

  const run = React.useCallback(
    promise => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`,
        )
      }
      safeSetState({status: 'pending'})
      return promise.then(
        data => {
          safeSetState({data, status: 'resolved'})
          return data
        },
        error => {
          safeSetState({status: 'rejected', error})
          return error
        },
      )
    },
    [safeSetState],
  )

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    error,
    status,
    data,
    run,
  }
}
