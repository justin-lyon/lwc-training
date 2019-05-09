public inherited sharing class AccountDA implements AccountDAI {

  public List<Account> queryLimittedAccounts(Integer limitter) {

    return [
      SELECT Id,
        BillingAddress,
        Name,
        OwnerId,
        Owner.Name
      FROM Account
      LIMIT :limitter];
  }
}
