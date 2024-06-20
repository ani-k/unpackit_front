import {IUser} from "../core/models/models";
import {createFeature, createReducer, on} from "@ngrx/store";
import {UnpackitActions} from "./actions";

export interface UnpackitState {
  isLoading: boolean,
  user: IUser
}

export const initialState: UnpackitState = {
  isLoading: false,
  user: {
    id: '',
    wishlist: ['']
  }
}

export const UnpackitFeature = createFeature({
  name: "Unpackit",
  reducer: createReducer(
    initialState,
    on(UnpackitActions.getUserDataFromServer, (state: UnpackitState, {user}) => ({
      ...state, isLoading: false, user
    }))
  )
})
