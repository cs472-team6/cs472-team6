import json
import requests
import csv
import os
import matplotlib.pyplot as plt


if not os.path.exists("data"):
    os.makedirs("data")

# GitHub Authentication function
def github_auth(url, lsttoken, ct):
    jsonData = None
    
    try:
        ct = ct % len(lstTokens)
        headers = {'Authorization': 'Bearer {}'.format(lsttoken[ct])}
        request = requests.get(url, headers=headers)
        jsonData = json.loads(request.content)
        ct += 1

    except Exception as e:
        pass

        print(e)

    return jsonData, ct

def countfiles(dictfiles, lsttokens, repo):
    ipage = 1  # url page counter
    ct = 0  # token counter

    while True:
        spage = str(ipage)
        commitsUrl = 'https://api.github.com/repos/' + repo + '/commits?page=' + spage + '&per_page=100'
        jsonCommits, ct = github_auth(commitsUrl, lsttokens, ct)

        # break out of the while loop if there are no more commits in the pages
        if len(jsonCommits) == 0:
            break

        # iterate through the list of commits in  spage
        for shaObject in jsonCommits:
            sha = shaObject['sha']

            # For each commit, use the GitHub commit API to extract the files touched by the commit
            shaUrl = 'https://api.github.com/repos/' + repo + '/commits/' + sha
            shaDetails, ct = github_auth(shaUrl, lsttokens, ct)
            commit  = shaDetails['commit']
            author  = commit['author']
            name = author['name']
            date  = author['date'][0:10]
            filesjson = shaDetails['files']

            for filenameObj in filesjson:
                filename = filenameObj['filename']
                matches = ['.kt','.java','.cpp']

                if  any(x in filename for x in matches):
                    if dictfiles.get(filename) is None:
                        l = [(name,date)]
                        dictfiles[filename] = (1,l)
                    else:
                        new_count = dictfiles[filename][0]+1
                        l=dictfiles[filename][1]
                        l.append((name,date))
                        dictfiles[filename] = (new_count,l)
        ipage += 1

repo = 'scottyab/rootbeer'
lstTokens = [""]

dictfiles = dict()
countfiles(dictfiles, lstTokens, repo)
print('Total number of files: ' + str(len(dictfiles)))

file = repo.split('/')[1]
# change this to the path of your file
fileOutput = 'data/Yunhui_authorFileTouches.csv'
rows = ["Filename", "Touches",'Name&date']
fileCSV = open(fileOutput, 'w')
writer = csv.writer(fileCSV)
writer.writerow(rows)

bigcount = None
bigfilename = None
for filename, values in dictfiles.items():
    count = values[0]
    rows = [filename, values[0],values[1]]
    writer.writerow(rows)

    if bigcount is None or count > bigcount:
        bigcount = count
        bigfilename = filename

fileCSV.close()
print('The file ' + bigfilename + ' has been touched ' + str(bigcount) + ' times.')

