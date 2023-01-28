import json
import requests
import csv
import numpy
import matplotlib.pyplot as pyplt

import os

if not os.path.exists("data"):
 os.makedirs("data")

def plot_days():
	x = []
	y = []
	row_count = -1
	with open("data/zach_authorFileTouches.csv", encoding="utf-8-sig") as touchfile:
		for row in csv.reader(touchfile):
			if row_count == -1:
				row_count = 1
				continue
			x.append(row_count)
			y.append(int(row[1]))
			row_count += 1
	pyplt.xlabel('Files')
	pyplt.ylabel('Weeks')
	pyplt.xlim(0, row_count)
	pyplt.scatter(x,y)
	pyplt.savefig('data/zach_scatterplot.png')

plot_days()
