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
def countfiles(dictfiles, lsttokens, repo):
    ipage = 1  # url page counter
    ct = 0  # token counter

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

                commit  = shaDetails['commit']
                author  = commit['author']
                name = author['name']
                date  = author['date']
                
                for filenameObj in filesjson:
                    filename = filenameObj['filename']
                    keys = ['.kt','.java','.cpp']

                    if  any(x in filename for x in keys):
                        dictfiles[len(dictfiles)] = (filename, name, date)
            ipage += 1
# GitHub repo
repo = 'scottyab/rootbeer'
lstTokens = [""]

dictfiles = dict()
countfiles(dictfiles, lstTokens, repo)

# change this to the path of your file
fileOutput = 'data/JunxianLiu_author_file.csv'
rows = ["number", "Filename", "Author", "Data"]
fileCSV = open(fileOutput, 'w')
writer = csv.writer(fileCSV)
writer.writerow(rows)

bigcount = None
bigfilename = None
for filename, count in dictfiles.items():
    rows = [filename, count[0], count[1], count[2]]
    writer.writerow(rows)
fileCSV.close()

