import { createConnectedStore } from 'undux'

var store = createConnectedStore({
    comments: [],
    user: {
        name: null
    }
});

export default store;