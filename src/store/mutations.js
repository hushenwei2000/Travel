export default {
    cityChange(state, para){
        state.city = para
        try {
            localStorage.city = para
        } catch (error) {}
    }
}