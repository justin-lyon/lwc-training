public with sharing class RelatedContactsAuraService {
  private static ContactDAI contactAccessor = new ContactDA();
  public static ContactDAI ContactDI {get; set {
    contactAccessor = value; }}

  @AuraEnabled(cacheable=true)
  public static List<Contact> getContactsByAccount(Id accountId) {
    List<Contact> found = new List<Contact>();
    try {
      found = contactAccessor.queryByAccount(accountId);
    } catch(Exception exc) {
      throw new AuraHandledException(exc.getMessage());
    }
    return found;
  }
}
