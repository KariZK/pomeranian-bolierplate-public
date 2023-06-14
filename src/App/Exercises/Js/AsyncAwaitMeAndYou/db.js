import { createRandomCompany, createRandomUser } from './utils';

export const companies = Array(5)
  .fill()
  .map((el) => createRandomCompany());

export const employees = Array(25)
  .fill()
  .map((el) =>
    createRandomUser(
      companies.companyId[Match.floor(Match.random() * companies.length)]
    )
  );

  export const
