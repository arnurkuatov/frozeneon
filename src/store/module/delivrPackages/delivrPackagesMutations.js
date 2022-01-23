import { apiStatus } from "../../../api/constants/apiStatus";
const { PENDING, SUCCESS, ERROR } = apiStatus;

export default {
  SET_DELIVR_PACKAGES_STATE(state, payload) {
    switch (payload.status) {
      case PENDING:
        state.packagesFetchingError && (state.packagesFetchingError = null);
        state.packagesFetchingErrorMessage &&
          (state.packagesFetchingErrorMessage = null);
        break;
      case SUCCESS:
        state.packages = payload.data;
        break;
      case ERROR:
        state.packagesFetchingError = payload.error;
        state.packagesFetchingErrorMessage = payload.errorMessage || "";
        break;
    }
    state.packagesFetchingStatus = payload.status;
  },
};
