import json
import requests
import csv

import os

if not os.path.exists("data"):
    os.makedirs("data")

# GitHub Authentication function
def github_auth(url, lsttoken, ct):
    jsonData = None
    try:
        ct = ct % len(lsttokens)
        headers = {'Authorization': 'Bearer {}'.format(lsttoken[ct])}
        request = requests.get(url, headers=headers)
        jsonData = json.loads(request.content)
        ct += 1
    except Exception as e:
        pass
        print(e)
    return jsonData, ct

def getCommitData(filename, commits):
    ipage = 1  # url page counter
    ct = 0  # token counter

    try:
        # loop though all the commit pages until the last returned empty page
        while True:
            spage = str(ipage)
            commitsUrl = 'https://api.github.com/repos/' + repo + '/commits?path=' + filename + '&page=' + spage + '&per_page=100'
            jsonCommits, ct = github_auth(commitsUrl, lsttokens, ct)

            # break out of the while loop if there are no more commits in the pages
            if len(jsonCommits) == 0:
                break
            # iterate through the list of commits in  spage
            for shaObject in jsonCommits:
                author = shaObject["commit"]["author"]["email"]
                date = shaObject["commit"]["author"]["date"]
                commits.append([filename, author, date])
            ipage += 1
    except:
        print("Error receiving data")
        exit(0)
        
filePath = "/content/data/file_rootbeer.csv"
repo = 'scottyab/rootbeer'
lsttokens = [""]
authorData = []

with open(filePath) as csvfile: 
  reader = csv.reader(csvfile)
  next(reader)
  for row in reader:
    getCommitData(row[0], authorData)

file = repo.split('/')[1]
fileOutput = 'data/authorData_' + file + '.csv'
rows = ["Filename", "Author", "Date"]
fileCSV = open(fileOutput, 'w')
writer = csv.writer(fileCSV)
writer.writerow(rows)

for author in authorData:
    writer.writerow(author)

fileCSV.close()