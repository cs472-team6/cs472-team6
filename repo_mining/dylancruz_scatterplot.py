import json
import requests
import csv
import os
import matplotlib.pyplot as plt
from datetime import datetime

def valueSort(num):
    return num[1]

x=[]
y=[]
c=[]

with open('data/file_dylan.csv', 'r') as file:
        csvFile = csv.reader(file)
        headers = next(csvFile)
        #read csv file into list
        data = list(filter(None, csvFile))
        #sort by date
        data.sort(key = valueSort)

# calculate number of weeks
date1 = datetime.strptime(data[0][1],'%Y-%m-%d').date()
# date2 = datetime.strptime(data[-1][1],'%Y-%m-%d').date()
# days = abs(date1-date2).days
# weeks = days/7
# print(weeks)
# print(data[1][0])

files = list()
rows = len(data)
temp = "string"
# print(rows)
for i in range(rows):
    temp = data[i][0]
    # filename = temp.rfind('/', 1)
    # temp = temp[filename:]
    data[i][0] = temp
    if temp not in files:
        files.append(temp)
# for i in files:
#     print(i)
# print(len(files))
# colors = list("rgbcmyk")
# print(data[0][0])
for i in range(rows):
    x.append(files.index(data[i][0]))
    # x.append(i)
    date2 = datetime.strptime(data[i][1],'%Y-%m-%d').date()
    y.append((abs(date1-date2).days)/7)
    c.append(data[i][2])
    # print(x)
#     plt.scatter(x, y, color = colors.pop())
        # for lines in csvFile:
        #     print(lines)
# for row in csvFile:
#     rows.append(row)

plt.scatter(x, y, c = y, s=10)
plt.gray()
plt.xlabel("File")
plt.ylabel("Week")
plt.show()
