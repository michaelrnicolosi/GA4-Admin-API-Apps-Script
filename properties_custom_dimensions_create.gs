function createCustomDimensions() {

  var rows = SpreadsheetApp.getActiveSheet().getRange(3, 2, 50, 4).getValues()
  var properties = SpreadsheetApp.getActiveSheet().getRange(3, 7, 50, 1).getDisplayValues()

  for (let i = 0; i < properties.length; i++) {
    if (properties[i][0]) {
      for (var j = 0; j < rows.length; j++) {
        if (rows[j][0]) {
          AnalyticsAdmin.Properties.CustomDimensions.create(resource = {
            display_name: rows[j][0],
            parameter_name: rows[j][1],
            description: rows[j][2],
            scope: rows[j][3]
          },
            parent = "properties/" + properties[i][0]
          )
        }
      }
    }
  }
