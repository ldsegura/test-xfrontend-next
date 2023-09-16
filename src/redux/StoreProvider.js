"use client";
import { Provider } from "react-redux"
import {store} from "./store";

export function StoreProvider(props) {
    return <Provider store={store}>
        {props.children}
    </Provider>
}