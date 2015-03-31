#imnotevensure
"""classes = []

string = "{\n"

for className in classes.keys():
	string += "\"" + className + "\":{\n"
	string += "},\n\n"

string += "}"""

#typeahead
"""string = "{\n"
f = open('classes.txt', 'r').read().splitlines()
for l in f:
	string += "{word: \"%s\" },\n"%l

string += "\n}"
print(string)"""

#final
classes = open('classes.txt', 'r').read().splitlines()
teachers = open('teachers.txt', 'r').read().splitlines()
output = open('data.json', 'w').read().splitlines()

for l in f:
    
    
    