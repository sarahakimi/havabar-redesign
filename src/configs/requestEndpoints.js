export default {
  getCompaniesFromSuperAdminPageEndpoint: (page, sort) => `company/${page}/${sort}/`,
  singleCompany: id => `company/${id}/`,
  registerEndpoint: 'login',
  storageTokenKeyName: 'access_token',
  registerCompany: 'company',
  getusers: (page, sort) => `getadmins/${page}/${sort}/`,
  downloadUser: 'report/admin/',
  singleUser: id => `user/admin/${id}`,
  singleUserDelete: id => `user/${id}/`,
  registerUser: 'signup_admin/',
  getCustomers: (page, sort) => `persons/${page}/${sort}/`,
  singleCustomer: id => `person/${id}/`,
  registerCustomer: 'person',
  getMarketers: (page, sort) => `marketers/${page}/${sort}/`,
  singleMarketer: id => `marketer/${id}/`,
  registerMarketer: 'marketer',
  getRepresentatives: 'customer/admin/1/all',
  registerRepresentatives: 'customer/admin/1/register',
  createOrder: 'ordering/admin/register',
  getAdminOrders: 'ordering/admin/all',
  singleHub: id => `hub/${id}/`,
  singleLogestic: id => `logistic/${id}/`,
  registerHub: 'hub',
  getHubsFromAdmin: (page, sort) => `hubs/${page}/${sort}/`,
  getLogestics: (page, sort) => `logistics/${page}/${sort}/`,
  myHub: 'hub/',
  getDrivers: (page, sort) => `getpeyks/${page}/${sort}/`,
  registerDriver: 'signup_peyk/',
  pricingPerKilometer: 'pricing/per_kilometer',
  pricinPerSizeOfCar: size => `pricing/size_of_car/${size}`,
  pricingOtherOptions: 'pricing/other_options',
  getPricingSizeOfCar: 'pricing/size_of_car',
  singleOrder: id => `ordering/admin/${id}`,
  getOrder: id => `ordering/${id}`,
  logout: 'logout/',
  loginHistory: (page, sort) => `login_report/${page}/${sort}/`,
  operationHistory: (page, sort) => `user_log/${page}/${sort}/`,
  validatePhoneByToken: 'verify_phone/',
  resetPassword: 'change_password/',
  getAllCompanies: 'company/all',
  getAllHubs: 'hub/all',
  forgotPassword: 'auth/user/forget_password',
  calculatePrice: 'ordering/pricing',
  getBackups: (page, sort) => `backup/${page}/${sort}/`,
  getBackupNow: 'backup/now',
  connection_to_finance: 'connect_to_finance/',
  customer_percent: 'pricing/customer_percent',
  singleFinancialOrder: id => `pricing/customer_percent/${id}`,
  createFinancialPrice: 'pricing/customer_percent',
  downloadBackupById: id => `backup/${id}`,
  uploadBackup: 'backup/apply',
  applyBackupById: id => `backup/apply/${id}`,
  roles: 'user/roles',
  downloadPdf: id => `ordering/pdf/${id}`,
  packaging: 'pricing/packaging',
  packagingById: id => `pricing/packaging/${id}`,
  hubReport: 'report/hub/',
  logReport: 'report/login_report/',
  operationReport: 'report/user_log/',
  expireChange: (id, type) => (type ? `company/expire/${id}/${type}/` : `company/expire/${id}/`),
  logisticReport: 'report/logistic/',
  registerLogistic: 'logistic',
  driverReport: 'report/peyk/',
  singleDriver: id => `signup_peyk/${id}/`,
  marketerReport: 'report/marketer/',
  customersReport: 'report/person/',
  getLogo: 'setting/',
  pricing: 'price',
  singleRegional: id => `regionalPrices/${id}`,
  deletesingleRegional: id => `regionalPrices/${id}/`,
  addCollect: 'collect_price/',
  singleCollectPrice: id => `collect_price/${id}/`,
  addDistribution: 'distribution_price/',
  singleDistributionPrice: id => `distribution_price/${id}/`,
  volumePrice: 'volumePrice',
  packagingPrice: 'packagingPrice',
  otherPrice: 'otherPrice',
  orderNumber: 'orderNumber'
}
