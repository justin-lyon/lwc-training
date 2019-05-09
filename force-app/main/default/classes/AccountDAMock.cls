@isTest
public inherited sharing class AccountDAMock implements AccountDAI {

  public Map<Id, Account> Accounts = new Map<Id, Account>();
  public Boolean IsSuccess = true;

  private final String ERR_MSG = 'Forced Exception from AccountDAMock.';

  public List<Account> queryLimittedAccounts(Integer limitter) {
    if(!IsSuccess) throw new QueryException(ERR_MSG);

    List<Account> found = new List<Account>();

    found.add(new Account(Name = 'Test Account'));

    return found;
  }
}
