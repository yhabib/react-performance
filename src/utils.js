import React from "react";

export const logger = console.info;

export const useForceRerender = () => React.useReducer(state => state + 1, 1)[1]