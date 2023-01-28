import numpy as np
import matplotlib.pyplot as plt
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
        ct = ct % len(lstTokens)
        headers = {'Authorization': 'Bearer {}'.format(lsttoken[ct])}
        request = requests.get(url, headers=headers)
        jsonData = json.loads(request.content)
        ct += 1
    except Exception as e:
        pass
        print(e)
    return jsonData, ct

# @dictFiles, empty dictionary of files
# @lstTokens, GitHub authentication tokens
# @repo, GitHub repo
def countfiles(authors, lsttokens, repo, comcnt):
    ipage = 1  # url page counter
    ct = 0  # token counter
    

    try:
        # loop though all the commit pages until the last returned empty page
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
                filesjson = shaDetails['files']
                comm = shaDetails['commit']
                commAuthor = comm['author']
                name = commAuthor['name']
                date = commAuthor['date'][0:10]
                namedate = [(name,date)]
                
                #print(comcnt)

                for filenameObj in filesjson:
                    filename = filenameObj['filename']
                    if filename.lower().endswith(('.kt', '.java', '.cpp')):
                        if authors.get(name) is None:
                            authors[name] = 1
                            comcnt += 1
                        else:
                            authors[name] += 1
                            comcnt += 1
                         
                        print(authors)
            ipage += 1

    except:
        print("Error receiving data")
        exit(0)
# GitHub repo
repo = 'scottyab/rootbeer'
# repo = 'Skyscanner/backpack' # This repo is commit heavy. It takes long to finish executing
# repo = 'k9mail/k-9' # This repo is commit heavy. It takes long to finish executing
# repo = 'mendhak/gpslogger'


# put your tokens here
# Remember to empty the list when going to commit to GitHub.
# Otherwise they will all be reverted and you will have to re-create them
# I would advise to create more than one token for repos with heavy commits
lstTokens = []

authors = dict()
comcnt = 0
countfiles(authors, lstTokens, repo, comcnt)
print('Total number of commits: ', comcnt)

#for x in fileArr:


#x = np.random.random(10)
#y = np.random.random(10)

#Create a dictionary of files and touches
#

#plt.scatter(x, y, c=y, s=500)
#plt.gray()

#plt.show()

