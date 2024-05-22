import configSlice from "./configSlice";

import{ configureStore } from "@reduxjs/toolkit"
import inputSlice from "./inputSlice";

const store = configureStore({
    reducer:{
        config:configSlice,
        input:inputSlice,

    }
})

export default store;