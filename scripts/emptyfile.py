from glob import glob

files = glob("/home/nordstrom/git/userscript/scripts/*.**.user.js")

for in in files:
    with open(i) as u:
        if u.read() == "":
            print u
