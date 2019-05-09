@isTest
private class HomeAccountAuraServiceTest {

  static TestMethod void getLimittedAccounts_givenLimitter_shouldGetAccounts() {
    AccountDAMock mock = new AccountDAMock();
    HomeAccountAuraService.AccountDI = mock;
    Integer limitter = 1;

    Test.startTest();

      List<Account> accounts = HomeAccountAuraService.getLimittedAccounts(limitter);

    Test.stopTest();

    System.assert(!accounts.isEmpty());
  }
}
