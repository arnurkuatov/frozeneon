import { fetchDelivrPackages } from "../../../api/delivrPackagesApi";
import { withAsync } from "../../../api/helpers/withAsync";
import {
  apiPendingFactory,
  apiSuccessFactory,
  apiErrorFactory,
} from "../../../api/helpers/apiStateFactory";

export default {
  async fetchDelivrPackagesActions(context, payload) {
    context.commit("SET_DELIVR_PACKAGES_STATE", apiPendingFactory());
    const { response, error } = await withAsync(fetchDelivrPackages, payload);
    console.log("response", response);

    if (error) {
      context.commit(
        "SET_DELIVR_PACKAGES_STATE",
        apiErrorFactory(error, error.message)
      );
    }

    context.commit(
      "SET_DELIVR_PACKAGES_STATE",
      apiSuccessFactory(response.data)
    );
  },
};
