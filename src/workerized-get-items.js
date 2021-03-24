import makeGetFilters from 'workerize!./get-items'

// This function is now async
const {getItems} = makeGetFilters()

export {getItems as getItemsAsync}

/*
eslint
  import/no-webpack-loader-syntax: 0,
*/
