import getters from "./delivrPackagesGetters";
import mutations from "./delivrPackagesMutations";
import actions from "./delivrPackagesActions";

import { apiStatus } from "../../../api/constants/apiStatus";
const { IDLE } = apiStatus;

const state = {
  packages: [],
  packagesFetchingStatus: IDLE,
  packagesFetchingError: null,
  packagesFetchingErrorMessage: "",
};

export default {
  state,
  getters,
  mutations,
  actions,
};
