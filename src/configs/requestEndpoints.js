export default {
  getCompaniesFromSuperAdminPageEndpoint: (page, sort) => `company/${page}/${sort}/`,
  singleCompany: id => `company/${id}/`,
  registerEndpoint: 'login',
  storageTokenKeyName: 'access_token',
  registerCompany: 'company',
  getusers: (page, sort) => `getadmins/${page}/${sort}/`,
  downloadUser: 'report/admin/',
  singleUser: id => `signup_admin/${id}/`,
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
  createOrder: 'create_order',
  getAdminOrders: (page, sort) => `sub_orders/${page}/${sort}/`,
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
  getOrder: id => `tracking/${id}`,
  logout: 'logout/',
  loginHistory: (page, sort) => `login_report/${page}/${sort}/`,
  operationHistory: (page, sort) => `user_log/${page}/${sort}/`,
  validatePhoneByToken: 'verify_phone/',
  resetPassword: 'change_password/',
  getAllCompanies: 'company/all',
  getAllHubs: 'hub/all',
  forgotPassword: 'auth/user/forget_password',
  calculatePrice: 'calculate_price_with_person/',
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
  orderNumber: 'orderNumber',
  tasvieEndpoin: 'tasvie_order',
  foreignBarname: 'barname/foreign/',
  addregional: 'regionalPrices',
  dashboard: 'dashboard/',
  assign_to_peyk: id => `sub_order/${id}/assign_to_peyk/`,
  deleteOrder: id => `sub_order/${id}/delete/`,
  collectOrder: id => `sub_order/${id}/collect/`,
  delivery_toLogistic: id => `sub_order/${id}/delivery_to_logistic/`,
  delivery_fromLogistic: id => `sub_order/${id}/delivery_from_logistic/`,
  distributeOrder: id => `sub_order/${id}/distribute/`,
  suborderReport: 'report/suborder/',
  editOrder: id => `sub_order/${id}/`,
  barnames: (page, sort) => `barnames/${page}/${sort}/`,
  groupedBarname: 'barname/groups/',
  barnameTags: 'barname/tags/',
  barnameReport: 'report/barname'
}
