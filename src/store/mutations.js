const mutations = {
    setFirstData(state, data) {
        switch (data.type) {
            default :
                state.firstData = data.data;
                break;
        }
        localStorage.setItem('firstData', JSON.stringify(state.firstData));
    },
    setCoalData(state, data) {
        switch (data.type) {
            default :
                state.coalData = data.data;
                break;
        }
        localStorage.setItem('coalData', JSON.stringify(state.coalData));
    },
    setChemicalData(state, data) {
        switch (data.type) {
            default :
                state.chemicalData = data.data;
                break;
        }
        localStorage.setItem('chemicalData', JSON.stringify(state.chemicalData));
    },
};
export default mutations;