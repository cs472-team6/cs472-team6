import csv
import requests
import os
import json
import matplotlib.pyplot as plt
from dateutil import parser, rrule
from distinctipy import distinctipy

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


def get_repo_start_date(repo):
    ct = 0 # token counter
    
    try:
        repo_url = 'https://api.github.com/repos/' + repo
        repo_json, ct = github_auth(repo_url, lsttokens, ct)
        return repo_json["created_at"]
    except:
        print("Error receiving repo data")

# converts the csv data into an array and returns it
def get_touch_data():
    touch_data = []
    with open('./data/author_touches_rootbeer.csv') as rootbeer_touches_csv:
        reader = csv.reader(rootbeer_touches_csv)
        # skip header
        next(reader)
        for row in reader:
            touch_data.append(row)
    return touch_data

# returns a unique list of authors from the touch data
def get_authors(touch_data):
    authors = set()
    for touch in touch_data:
        # get the author from the file touch data
        authors.add(touch[1])
    return list(authors)

def weeks_between(start, end):
    weeks = rrule.rrule(rrule.WEEKLY, dtstart=start, until=end)
    return weeks.count()

def get_files(touch_data):
    files = set()
    for touch in touch_data:
        files.add(touch[0])
    return list(files)

def filter_by_author(author, data):
    result = filter(lambda x: x[1] == author, data)
    return list(result)

touch_data = get_touch_data()
repo_authors = get_authors(touch_data)
repo_files = get_files(touch_data)
repo_start_date = get_repo_start_date(repo)
# convert to datetime
repo_start_date = parser.parse(repo_start_date)

# convert touch dates into weeks
for touch in touch_data:
    touch_date = parser.parse(touch[2])
    touch_date = weeks_between(repo_start_date, touch_date)
    touch[2] = touch_date

# get a unique color for each author
unique_colors = distinctipy.get_colors(len(repo_authors))


for index, author in enumerate(repo_authors):
    author_touches = filter_by_author(author, touch_data)
    author_touch_x = []
    author_touch_y = []
    for touch in author_touches:
        author_touch_x.append(repo_files.index(touch[0]))
        author_touch_y.append(touch[2])
    plt.scatter(author_touch_x, author_touch_y, color=unique_colors[index])
plt.xlabel("file")
plt.ylabel("weeks")
plt.show()
