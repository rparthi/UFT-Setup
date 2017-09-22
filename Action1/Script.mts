'Accessing Datatable to get Row Count and Column Count
rowcount = DataTable.GetSheet("Global").GetRowCount
msgbox rowcount      ' Displays 4
  
colcount = DataTable.GetSheet("Global").GetParameterCount
msgbox colcount		 ' Displays 3
  DataTable.SetCurrentRow(2) 
val_rate = DataTable.Value("Rate","Global")
print val_rate   ' Displays 7%
  
val_ppl = DataTable.Value("Principal","Global")
print val_ppl	 ' Displays 2556
  
val_Time = DataTable.Value("Time","Global")	
print val_Time	 ' Displays 5
