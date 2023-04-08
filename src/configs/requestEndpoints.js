export default {
  getCompaniesFromSuperAdminPageEndpoint: 'company/all/admin',
  singleCompany: (id) => `company/${id}`,
  registerEndpoint: 'auth/user/login',
  storageTokenKeyName: 'access_Token',
  registerCompany: 'company/register',
  getusers: 'user/admin/all?type=1',
  singleUser: (id) => `user/admin/${id}`,
  registerUser: "user/admin/register",
  getCustomers: 'customer/admin/3/all',
  singleCustomer: (id) => `customer/admin/${id}`,
  registerCustomer: 'customer/admin/3/register',
  getMarketers: 'customer/admin/2/all',
  singleMarketer: (id) => `customer/admin/${id}`,
  registerMarketer: 'customer/admin/2/register',
  getRepresentatives: 'customer/admin/1/all',
  singleRepresentatives: (id) => `customer/admin/${id}`,
  registerRepresentatives: 'customer/admin/1/register',
  createOrder: 'ordering/admin/register',
  getAdminOrders: "ordering/admin/all",
  singleHub: (id) => `hub/${id}`,
  registerHub: 'hub/register',
  getHubsFromAdmin: 'hub/company/all',
  myHub: 'hub/me',
  getDrivers: 'user/admin/all?type=2',
  registerDriver: 'user/admin/courier/register',
  pricingPerKilometer: "pricing/per_kilometer",
  pricinPerSizeOfCar: (size) => `pricing/size_of_car/${size}`,
  pricingOtherOptions: "pricing/other_options",
  getPricingSizeOfCar: "pricing/size_of_car",
  singleOrder: (id) => `ordering/admin/${id}`,
  getOrder: (id) => `ordering/${id}`,
  logout: "auth/user/logout",
  loginHistory: "trafficHistory/all",
  operationHistory: "actionHistory/all",
  validatePhoneByToken: 'auth/user/validate_phone_by_token',
  resetPassword: "auth/user/reset_password",
  getAllCompanies: "company/all",
  getAllHubs: "hub/all",
  forgotPassword: "auth/user/forget_password",
  calculatePrice:"ordering/pricing",



}
