const mutations = {
    setFirstData(state, data) {
        switch (data.type) {
            default :
                state.firstData = data.data;
                break;
        }
        localStorage.setItem('firstData', JSON.stringify(state.firstData));
    },
};
export default mutations;