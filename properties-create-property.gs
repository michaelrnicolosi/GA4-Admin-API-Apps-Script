function createProperties() {

  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getRange(3, 2, 100, 6).getValues();

  for (let i = 0; i < rows.length; i++){
    if (rows[i][0]) {
      Logger.log(rows[i])
      AnalyticsAdmin.Properties.create(resource = {
        display_name: rows[i][0],
        account: "accounts/" + rows[i][1],
        parent: "accounts/" + rows[i][1],
        time_zone: rows[i][2],
        currency_code: rows[i][3],
        industry_category: rows[i][4],
        service_level: rows[i][5]
      });
    }
  }
}
