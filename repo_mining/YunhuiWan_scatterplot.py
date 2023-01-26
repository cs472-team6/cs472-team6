import csv
import datetime,re
import matplotlib.pyplot as plt
import distinctipy


with open('data/Yunhui_collectFilesrootbeer.csv', newline='') as f:
    reader = csv.reader(f)
    data = list(reader)

data=data[1:]
x,y,c = [],[],[]
format = '%Y-%m-%d'

authors_set= set()

for val in data:
    res = val[2].strip('][').replace('(','').replace(')','').replace("'",'').split(',')
    name = res[::2] 
    name = [x.strip(' ') for x in name]

    for n in name:
        authors_set.add(n)



colors = distinctipy.get_colors(len(authors_set))
author_to_color = dict()
authors_list = list(authors_set)

for i in range(len(authors_list)):
    author_to_color[authors_list[i]] = colors[i]

index = 0

for val in data:
    res = val[2].strip('][').replace('(','').replace(')','').replace("'",'').split(',')
    name = res[::2] 
    name = [x.strip(' ') for x in name]
    time = res[1::2]
    time =  [x.strip(' ') for x in time]

    l= [datetime.datetime.strptime(n, format) for n in time]
    l= sorted(l,reverse=False)

    first_day = l[0]

    for i in range(len(l)):
        match = re.search(r'\d*', str(l[i]- first_day))
        x.append(index)
        y.append(float(match[0])/7)
        c.append(author_to_color[name[i]])

    index+=1

print('start plot')
plt.scatter(x, y,c=c, s=10)
plt.ylabel("Weeks")
plt.xlabel("Files")



