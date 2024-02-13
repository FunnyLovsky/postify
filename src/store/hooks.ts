import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from ".";
import { bindActionCreators } from "@reduxjs/toolkit";
import { postsActionCreators } from "./reducers/posts/actionCreators";
import { detailPostActionCreators } from "./reducers/detailPost/actionCreators";


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const allActionCreators = {
    ...postsActionCreators,
    ...detailPostActionCreators
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActionCreators, dispatch)
}