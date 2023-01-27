#Please run the ethanBacolod_authorsFileTouches.py script to generate the CSV file data

from datetime import date
import matplotlib.pyplot as plt
import csv
import random

x = [] #filenames
y = [] #dates
z = [] #authors

#Reads CSV file and adds data to arrays
with open('data/ethanBacolod_authors_rootbeer.csv','r') as csvfile:
    data = csv.reader(csvfile, delimiter = ',')
    for row in data:
        x.append(row[0])
        y.append(row[1])
        z.append(row[2])

unique_value = 0    #Holds next unique int value
index = 0           #Tracks current index in array x
fileList = dict()   #Maps filename to unique int value

#Replaces filename in array x with unique int value
for filename in x:
    if filename not in fileList:
        fileList[filename] = unique_value
        unique_value = unique_value + 1
    x[index] = fileList[filename]
    index = index + 1

today = date.today().strftime('%Y-%m-%d')   #Finds today's date in YYYY-mm-dd format
today_split = today.split('-')              #Splits date into array->[YYYY, mm, dd]
index = 0                                   #Tracks current index in array y

#Calculates number of months since when it was touched
#Replaces the date with the number of months
for old_date in y:
    #Reformats given date
    new_date = old_date.split('T', 1)[0]
    new_date_split = new_date.split('-')

    #Calulations
    months = int(today_split[1]) - int(new_date_split[1])
    if months < 0:
        months + 12
    years = int(today_split[0]) - int(new_date_split[0])
    months = months + (years * 12)

    #Replacement
    y[index] = months
    index = index + 1

index = 0           #Tracks current index in array z
authorList = dict() #Maps author to unique color in hex
random.seed(100)

#Replaces authors in array z with unique color in hex
for author in z:
    if author not in authorList:
        hex_string = str("%06x" % random.randint(0, 0xFFFFFF))
        authorList[author] = "#" + hex_string
    z[index] = authorList[author]
    index = index + 1


#Generates scatter plot
plt.scatter(x, y, c=z, s=30)
plt.ylabel('Months since file was last touched')
plt.xlabel('File')
plt.show()