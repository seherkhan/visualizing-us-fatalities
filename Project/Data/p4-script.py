import pandas as pd   

"""df = pd.read_csv('p4-d2.csv')
df.dropna(axis=0, inplace=True)

years = ['1950', '1960', '1970', '1980', '1981', '1982', \
'1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', \
'1993', '1994', '1995', '1996', '1997', '1998', \
'1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', \
'2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', \
'2015', '2016']

arr = []

for i in range(len(df)):
	cause = df['Causes'][i].replace('.', '')
	categ = df['Category'][i]

	for each in years:
		temp = [cause, categ]

		if type(df[each][i]) != str:
			temp.append(int(each))
			temp.append(df[each][i])
		else:
			temp.append(int(each))
			temp.append(0)

		arr.append(temp)

print(arr[-100:])
pd.DataFrame(arr).to_csv('p4-final.csv', index=False)"""

df2 = pd.read_csv('p4-final.csv')

df2 = df2.sample(100)

arr2 = []

for i in range(len(df2)):
	arr2.append(list(df2.iloc[i, :]))

print(arr2)