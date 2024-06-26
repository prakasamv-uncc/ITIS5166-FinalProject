export class Constants{

  static readonly API_URL = 'http://147.182.136.140:3000/v1/';
  //'http:///* localhost:3000 *//v1/';
  static readonly AUTH_API = 'auth/';
  static readonly GET_INCOMPLETE_ONBOARDING_API = this.API_URL+'incomplete-onboarding/getIncompleteOnboarding';
  static readonly INCOME_API = this.API_URL+'incomes/create';
  static readonly GET_INCOME_API = this.API_URL+'incomes/getIncomes';
  static readonly GET_INCOME_TOTAL_BY_MONTH_API: string = this.API_URL+'incomes/getMonthTotalIncome/';
  static readonly CREATE_BUDGET_API = this.API_URL+'budgets/create';
  static readonly GET_BUDGET_API = this.API_URL+'budgets/getBudgets';
  static readonly GET_BUDGET_BY_MONTH_API = this.API_URL+'budgets/getBudgetsByUser';
  static readonly GET_BUDGET_BY_CATEGORY_API = this.API_URL+'budgets/category';
  static readonly GET_BUDGET_TOTAL_BY_MONTH_API = this.API_URL+'budgets/getMonthTotalBudget/';
  static readonly GET_EXPENSE_API = this.API_URL+'expenses/getExpenses';
  static readonly CREATE_EXPENSE_API = this.API_URL+'expenses/create';
  static readonly GET_EXPENSE_TOTAL_BY_MONTH_API = this.API_URL+'expenses/getMonthTotalExpense/';
  static readonly GET_EXPENSE_BY_USER_API = this.API_URL+'expenses/getExpensesByUser/';
  static readonly UPDATE_EXPENSE_API = this.API_URL+'expenses/update/';
  static readonly EXPENSE_API = this.API_URL+'/expenses/';
  static readonly USER_API = '/users/';

  static readonly USA_STATES: Array<{ id: number; name: string; abbreviation:string}> = [
    { "id": 0, "name": "Choose State", "abbreviation": "CC" },
    { "id": 1, "name": "Alabama", "abbreviation": "AL" },
    { "id": 2, "name": "Alaska", "abbreviation": "AK" },
    { "id": 3, "name": "Arizona", "abbreviation": "AZ" },
    { "id": 4, "name": "Arkansas", "abbreviation": "AR" },
    { "id": 5, "name": "California", "abbreviation": "CA" },
    { "id": 6, "name": "Colorado", "abbreviation": "CO" },
    { "id": 7, "name": "Connecticut", "abbreviation": "CT" },
    { "id": 8, "name": "Delaware", "abbreviation": "DE" },
    { "id": 9, "name": "Florida", "abbreviation": "FL" },
    { "id": 10, "name": "Georgia", "abbreviation": "GA" },
    { "id": 11, "name": "Hawaii", "abbreviation": "HI" },
    { "id": 12, "name": "Idaho", "abbreviation": "ID" },
    { "id": 13, "name": "Illinois", "abbreviation": "IL" },
    { "id": 14, "name": "Indiana", "abbreviation": "IN" },
    { "id": 15, "name": "Iowa", "abbreviation": "IA" },
    { "id": 16, "name": "Kansas", "abbreviation": "KS" },
    { "id": 17, "name": "Kentucky", "abbreviation": "KY" },
    { "id": 18, "name": "Louisiana", "abbreviation": "LA" },
    { "id": 19, "name": "Maine", "abbreviation": "ME" },
    { "id": 20, "name": "Maryland", "abbreviation": "MD" },
    { "id": 21, "name": "Massachusetts", "abbreviation": "MA" },
    { "id": 22, "name": "Michigan", "abbreviation": "MI" },
    { "id": 23, "name": "Minnesota", "abbreviation": "MN" },
    { "id": 24, "name": "Mississippi", "abbreviation": "MS" },
    { "id": 25, "name": "Missouri", "abbreviation": "MO" },
    { "id": 26, "name": "Montana", "abbreviation": "MT" },
    { "id": 27, "name": "Nebraska", "abbreviation": "NE" },
    { "id": 28, "name": "Nevada", "abbreviation": "NV" },
    { "id": 29, "name": "New Hampshire", "abbreviation": "NH" },
    { "id": 30, "name": "New Jersey", "abbreviation": "NJ" },
    { "id": 31, "name": "New Mexico", "abbreviation": "NM" },
    { "id": 32, "name": "New York", "abbreviation": "NY" },
    { "id": 33, "name": "North Carolina", "abbreviation": "NC" },
    { "id": 34, "name": "North Dakota", "abbreviation": "ND" },
    { "id": 35, "name": "Ohio", "abbreviation": "OH" },
    { "id": 36, "name": "Oklahoma", "abbreviation": "OK" },
    { "id": 37, "name": "Oregon", "abbreviation": "OR" },
    { "id": 38, "name": "Pennsylvania", "abbreviation": "PA" },
    { "id": 39, "name": "Rhode Island", "abbreviation": "RI" },
    { "id": 40, "name": "South Carolina", "abbreviation": "SC" },
    { "id": 41, "name": "South Dakota", "abbreviation": "SD" },
    { "id": 42, "name": "Tennessee", "abbreviation": "TN" },
    { "id": 43, "name": "Texas", "abbreviation": "TX" },
    { "id": 44, "name": "Utah", "abbreviation": "UT" },
    { "id": 45, "name": "Vermont", "abbreviation": "VT" },
    { "id": 46, "name": "Virginia", "abbreviation": "VA" },
    { "id": 47, "name": "Washington", "abbreviation": "WA" },
    { "id": 48, "name": "West Virginia", "abbreviation": "WV" },
    { "id": 49, "name": "Wisconsin", "abbreviation": "WI" },
    { "id": 50, "name": "Wyoming", "abbreviation": "WY" }
  ];

  static readonly INCOME_CATEGORIES: Array<{ id: number; cname: string; }> = [
    { id: 1, cname: 'Salary' },
    { id: 2, cname: 'Bonus' },
    { id: 3, cname: 'Investment' },
    { id: 4, cname: 'Other' }
  ];
  static readonly BUDGET_CATEGORIES: Array<{ id: number; bname: string; }> = [
    { id: 1, bname: 'Mortgage' },
    { id: 2, bname: 'Insurance' },
    { id: 3, bname: 'Repairs' },
    { id: 4, bname: 'Services' },
    { id: 5, bname: 'Utilities' },
    { id: 6, bname: 'Taxes' },
    { id: 7, bname: 'Groceries' },
    { id: 8, bname: 'Entertainment' },
    { id: 9, bname: 'Child Care' },
    { id: 10, bname: 'Transportation' },
    { id: 11, bname: 'Health Care' },
    { id: 12, bname: 'Personal Care' },
    { id: 13, bname: 'Clothing' },
    { id: 14, bname: 'Education' },
    { id: 15, bname: 'Donations' },
    { id: 16, bname: 'Savings' },
    { id: 17, bname: 'Investments' },
    { id: 18, bname: 'Retirement' },
    { id: 19, bname: 'Debt' },
    { id: 20, bname: 'Gifts' },
    { id: 21, bname: 'Travel' },
    { id: 22, bname: 'Pets' },
    { id: 23, bname: 'Other' }
  ];

}
