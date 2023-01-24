import csv
import requests
import os
import json

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

repo = 'scottyab/rootbeer'
lsttokens = []

def get_commits_for_file(filename, commits):
    ipage = 1 # url page counter
    ct = 0 # token counter
    while True:
        try:
            file_url = 'https://api.github.com/repos/' + repo + '/commits?path=' + filename + '&page=' + str(ipage) + '&per_page=100'
            file_commits_json, ct = github_auth(file_url, lsttokens, ct)
            if (len(file_commits_json) == 0):
                break
            for file_commit in file_commits_json:
                author = file_commit["commit"]["author"]["email"]
                date = file_commit["commit"]["author"]["date"]
                commits.append([filename, author, date])
            ipage += 1
        except Exception as e:
            print("Error receiving data")
            exit(0)

def authorFileTouches(author_touches_arr):
    with open('./data/file_rootbeer.csv') as rootbeer_csv:
        reader = csv.reader(rootbeer_csv)
        next(reader)
        for row in reader:
            get_commits_for_file(row[0], author_touches_arr)

author_touches = []

authorFileTouches(author_touches)

repo_name = repo.split('/')[1]
output_file = 'data/author_touches_' + repo_name + '.csv'
row_data = ["Filename", "Author", "Date"]
outputCSV = open(output_file, 'w')
writer = csv.writer(outputCSV)
writer.writerow(row_data)

for touch in author_touches:
    writer.writerow(touch)
outputCSV.close()


