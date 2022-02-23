function createConversionEvents() {

  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getRange(3, 2, 50, 1).getValues();
  var properties = sheet.getRange(3, 4, 50, 1).getDisplayValues();

  for (let i = 0; i < properties.length; i++) {
    if (properties[i][0]) {
      for (let j = 0; j < rows.length; j++) {
        if (rows[j][0]) {
          var parent = "properties/" + properties[i][0];
          AnalyticsAdmin.Properties.ConversionEvents.create(
            resource = {
              event_name: rows[j][0]
            },
            parent = parent;
          )
        }
      }
    }
  }
}
