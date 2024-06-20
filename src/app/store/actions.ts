import {createActionGroup, props} from "@ngrx/store";
import {IUser} from "../core/models/models";

export const UnpackitActions = createActionGroup({
  source: 'Unpackit',
  events: {
    'Get user data from server': props<{ user: IUser }>(),
  }
})
