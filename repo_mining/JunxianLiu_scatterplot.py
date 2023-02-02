import csv
import matplotlib.pyplot as plt
import datetime as dt
from datetime import datetime


with open('data/JunxianLiu_author_file.csv') as file:
    reader = csv.reader(file)
    datalist = list(reader)

filename = dict()
authorname = dict()
date = dict()
count = len(datalist)
newdata = dict()
time = dict()
x,y,c = [],[],[]
newdata =dict()
num = 0
newcount = 0
for num in range(count):
    if (num%2) == 0 and num !=0:
        datatime_obj = datetime.strptime(datalist[num][3],"%Y-%m-%dT%H:%M:%SZ")
        newdata[newcount] = (datalist[num][1],datalist[num][2],datatime_obj.strftime("%Y-%m-%d"))
        authorname[newcount] = datalist[num][2]
        time[newcount] = datatime_obj.strftime("%Y-%m-%d")
        newcount +=1
    else:
        continue



    










            





