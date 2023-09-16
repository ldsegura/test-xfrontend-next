import {getReducer, loadingReducer, errorReducer} from "@/redux/features/pageDataReducer";

const get = async (request, dispatch) => {
    dispatch(loadingReducer)
}


const pageDataAction = {
    get,
}

export default pageDataAction;