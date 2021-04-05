const localStorageWriter = store => next => action => {
    const result = next(action);
    const state = store.getState();
    localStorage.order = JSON.stringify(state);
    return result;
}

export default localStorageWriter;