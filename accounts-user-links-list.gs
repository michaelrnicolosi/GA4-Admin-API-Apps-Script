function listUserInformation() {
  var accounts = SpreadsheetApp.getActive().getSheetByName('accounts_users_list').getRange(3, 2, 100, 1).getDisplayValues()

  var accountIds = [];
  var userEmails = [];
  var userAccessLevel = [];

  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i][0]) {
      var accountInfo = AnalyticsAdmin.Accounts.UserLinks.list(parent = "accounts/" + accounts[i][0])
      var users = accountInfo.userLinks;
      for (let i = 0; i < users.length; i++) {
        accountIds.push([accountInfo.userLinks[0].name.split("accounts/")[1].split("/")[0]])
        userEmails.push([users[i].emailAddress]);
        userAccessLevel.push([users[i].directRoles])
      }
    }
  }

  var results = SpreadsheetApp.getActiveSpreadsheet();
  if (SpreadsheetApp.getActive().getSheetByName('results') != null) {
    results.deleteSheet(results.getSheetByName('results'))
  }
  results.insertSheet('results');

  var setResults = SpreadsheetApp.getActive().getSheetByName('results');
  setResults.getRange(1, 1, 1, 1).setValue("account_id")
  setResults.getRange(1, 2, 1, 1).setValue("user_email")
  setResults.getRange(1, 3, 1, 1).setValue("access_level")
  setResults.getRange(2, 1, accountIds.length, 1).setValues(accountIds)
  setResults.getRange(2, 2, userEmails.length, 1).setValues(userEmails)
  setResults.getRange(2, 3, userAccessLevel.length, 1).setValues(userAccessLevel)
}
