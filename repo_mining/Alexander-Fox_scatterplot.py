import numpy as np
import matplotlib.pyplot as plt
import csv
import os

colors = ["#000000", "#0000FF", "#808080", "#008000", "#800080", "#FF0000", "#F0F8FF", "#FF7F50", "#B22222", "#FF69B4", "#FFFACD", "#9B59B6", "#F0B27A", "#117A65", "#EB984E", "#F4D03F", "#F5B7B1", "#17202A", "#C39BD3", "#943126", "#AF601A", "#979A9A", "#138D75", "#82E0AA", "#2C3E50"]
filePath = "repo_mining\alex_data\authorData_rootbeer (1).csv"
repoData = []
repoFile = []
repoAuthor = []
repoDate = []

def csvToArray():
  with open(filePath) as csvfile: 
    reader = csv.reader(csvfile)
    for row in reader:
      repoData.append(row)

csvToArray()
repoData.pop(0)

count = 0

for date in repoData: 
  repoFile.append(repoData[count][0])
  repoAuthor.append(repoData[count][1])
  repoDate.append(int(repoData[count][2][5:7]) + 12*(int(repoData[count][2][2:4]) - 15) -6)
  count += 1

fileAssign = []

for file in repoFile:
  if file not in fileAssign:
    fileAssign.append(file)

fileIndex = []

for file in repoFile:
  fileIndex.append(fileAssign.index(file))

authorAssign = []

for author in repoAuthor:
  if author not in authorAssign:
    authorAssign.append(author)

authorIndex = []

for author in repoAuthor:
  authorIndex.append(authorAssign.index(author))

count = 0
for author in authorIndex:
  # Generate data...
  x = fileIndex[count]
  y = repoDate[count]
  plt.scatter(x, y, c=colors[author]) # s is a size of marker
  count += 1
  

# Plot... 
plt.xlabel("file")
plt.ylabel("months")

plt.show()