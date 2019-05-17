public inherited sharing class ContactDA implements ContactDAI {

  public List<Contact> queryByAccount(Id accountId) {
    return [
      SELECT Id,
        BirthDate,
        Department,
        Email,
        MailingAddress,
        Name,
        Phone,
        PhotoUrl,
        Title
      FROM Contact
      WHERE AccountId = :accountId];
  }
}
