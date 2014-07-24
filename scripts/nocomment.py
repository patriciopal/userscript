def nocomment(line):
    return not line.startswith("//")

def commentfinder(file):
    with open(file) as js:
        if len(filter(nocomment,js.readlines())) == 0:
            return True
