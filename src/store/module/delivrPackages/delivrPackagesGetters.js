export default {
  getDelivrPackages: (state) => state.packages,
  getDelivrPackagesStatus: (state) => state.packagesFetchingStatus,
  getDelivrPackagesgError: (state) => state.packagesFetchingError,
  getDelivrPackagesErrorMessage: (state) => state.packagesFetchingErrorMessage,
};
