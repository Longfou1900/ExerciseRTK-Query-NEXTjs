import { configureStore } from "@reduxjs/toolkit";
import { ecommerceApi } from "./services/ecommerce";

export const makeStore = configureStore({
    reducer:{
        [ecommerceApi.reducerPath]: ecommerceApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(ecommerceApi.middleware)
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof makeStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof makeStore.dispatch