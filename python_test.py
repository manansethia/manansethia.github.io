import json

with open("assets/js/apple-emoji.js", "r") as f:
    content = f.read()
    print("1F50D in apple-emoji:", "1F50D" in content)
    print("1F50E in apple-emoji:", "1F50E" in content)

