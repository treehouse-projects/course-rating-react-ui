import { breadCrumbActionTypes } from "../actionTypes";

export function updateTitle(title) {
  return {
    type: breadCrumbActionTypes.UPDATE_BREADCRUMB_TITLE,
    title
  };
}
