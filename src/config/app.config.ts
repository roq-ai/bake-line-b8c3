interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Admin', 'Customer'],
  tenantName: 'Bakery',
  applicationName: 'Bake Line',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage inventory',
    'Manage user data',
    'Manage bakery information',
    'Manage product details',
    'Manage cart and cart items',
    'Manage orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/cc834549-3696-48de-b59b-9856b44675c2',
};
