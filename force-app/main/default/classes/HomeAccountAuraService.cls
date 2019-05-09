public with sharing class HomeAccountAuraService {
  private static AccountDAI accountAccessor = new AccountDA();
  public static AccountDAI AccountDI { get; set {
    accountAccessor = value; }}

  @AuraEnabled
  public static List<Account> getLimittedAccounts(Integer limitter) {
    limitter = Integer.valueOf(limitter);
    List<Account> accounts = new List<Account>();

    try {
      accounts = accountAccessor.queryLimittedAccounts(limitter);
    } catch(Exception exc) {
      throw new AuraHandledException(exc.getMessage());
    }

    return accounts;
  }
}
