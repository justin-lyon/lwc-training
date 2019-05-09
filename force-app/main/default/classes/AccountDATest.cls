@isTest
private class AccountDATest {
  @TestSetup
  static void setupData() {
    Account acc = new Account(Name = 'Test Account');
    insert acc;
  }

  static TestMethod void queryLimittedAccounts_givenLimitter_shouldGetAccounts() {
    AccountDA accessor = new AccountDA();
    Integer limitter = 1;

    Test.startTest();

      List<Account> accounts = accessor.queryLimittedAccounts(limitter);

    Test.stopTest();

    System.assertNotEquals(null, accounts);
    System.assert(!accounts.isEmpty());
  }
}
