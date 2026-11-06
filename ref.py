import random

def chop_txt(text: str,phrase_size,phrase_count):
    gibberish = ""
    
        
    words = []
    
    for line in text.split("\n"):
        if line:
            words.extend(line.split(" "))

    for x in range(phrase_count):
        start = random.randint(0,len(words) - 1)
        end = min(len(words), start + phrase_size)

        gibberish += " ".join(words[start:end]) + " "
    
    return gibberish