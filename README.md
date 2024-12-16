# G00384389@atu.ie Emerging Technologies Repository

## Introduction
This notebook aims to demonstrate my ability in the following areas:<br>
- Detect new and emerging technologies in computing through reputable sources.<br>
- Contextualize an emerging technology by identifying its origins and proponents.<br>
- Research an emerging technology in order to use it.<br>
- Implement a solution to a computing problem using an emerging technology.<br>

In todays world the use of "Artificial Intelligence" is crucial to the everyday life and only getting more and more frequent. In this notebook we will be exploring some of the origins of todays "Artificial Intelligence" and how it got there.

# Trigrams
**What is a Trigram?**<br>
A trigram is a case of n-gram. Where the count (n) is 3,</sup><sup>[[1]](#reference-1)</sup> Hence Tri-Gram. Trigrams are usually used for statistical analysis of texts in language processing. Trigrams help capture patterns in language. Example,the sequence "THE" appears often, this indicates that these characters often appear together in English, which the model can use to predict or generate similar patterns. Breaking text into trigrams, language models achieve a good balance between predictive accuracy and computational efficiency. This approach makes trigrams valuable for applications like text generation, speech recognition, and basic language analysis<sup>[[2]](#reference-2)</sup><br><br>
Trigrams are a concept used in Natural Language Processing "NLP" rather than being a specific type of model like large language models "LLMs".


**Trigrams in Text Classification and Sentiment Analysis**<br>
In the likes of spam detection or sentiment analysis, trigrams serve as features that capture the context and relationships among words, leading to more accurate classifications.<sup>[[3]](#reference-3)</sup> For example, the presence of certain trigrams can indicate a positive or negative sentiment in a text. 

In a spam filtering application, a machine learning model might be trained on a dataset of emails, with trigrams used to represent three-word sequences within each message. The model would be trained to recognize patterns of language use that correspond to spam messages, such as frequent use of certain keywords or phrases. By using trigrams as the basis for feature extraction in such a model, it can be more effective at detecting patterns and making accurate predictions.

**NLP VS LLM**<br>
Trigrams are an NLP concept and tool used in simpler statistical models. They are not LLMs themselves but are foundational to the field of NLP, which includes LLMs as more advanced successors. NLPs paved the way for LLM's like we have today, the likes of "Trigrams 'n' Tags" <sup>[[4]](#reference-4)</sup> made it possible for the likes of GPT and Claude to exist.


# Tasks

(Tasks_Diagram.png)
## Task 1 - Third-order letter approximation model
**Task 1 Definition**<br>
>Select five free English works in Plain Text UTF8 format from Project Gutenberg. Use them to create a model of the English language as follows. Remove any preamble and postamble. Remove all characters except for (ASCII) letters (uppercase and lowercase), full stops, and spaces. Make all letters uppercase.
>Next create a trigram model by counting the number of times each sequence of three characters (that is, each trigram) appears. You can design your own data structure for storing the results but explain your design and its rationale in your answer.

### My Approach
| Step     | Description     |
|--------------|--------------|
| T1.0 | I chose five suitable texts from Project Gutenberg and saved them as text files |
| T1.1 | I then read the texts into file and stored them in list 'texts' |
| T1.2 | I then combined all the text to one file 'combined_text'  |
| T1.3 | I then cleaned the text the text       
| T1.4 | With the cleaned text I generated a Trigram Model of the English language  |
| T1.5 | Next I sorted the trigrams and stored them in descending order based on frequency.   |
| T1.6 | Finally I saved the trigram model to a text file.  |


## Task 2 - Third-order letter approximation generation
**Task 2 Definition**<br>
>Use your model from Task 1 to generate a string of 10,000 characters. Start with the string TH.
>Generate each next character by looking at the previous two characters.
>Find the trigrams in your model that start with those two characters.
>Randomly select one of the third letters of those trigrams, using the counts as weights.

### My Approach
| Step     | Description     |
|--------------|--------------|
| T2.1 | Generate the next character based on the previous. Use the counts as weights |
| T2.2 | Generate 10,000 characters |


## Task 3 - Analyze your model
**Task 3 Definition**<br>
>Copy the list of English words available in words.txt in this repository to your own repository. <br>
>Use it to determine the percentage of words in your 10,000 characters that are actual words in the English language.

### My Approach
| Step     | Description     |
|--------------|--------------|
| T3.1 | Firstly we'll load in the words file then store them   |
| T3.2 | We'll then split them up and ensure that is all lowercase for processing |
| T3.3 | Count and return the amount of valid words |
| T3.4 | Calculate Percentage |   



## Task 4 - Export your model as JSON
**Task 4 Definition**<br>
>Export your model as JavaScript Object Notation (JSON), saving it in your repository as trigrams.json.

### My Approach
| Step     | Description     |
|--------------|--------------|
| T4.1 | Save to  JavaScript Object Notation and save in repo as trigrams.json   |



# Eliza Chatbot
### Abstraction
Eliza was "the first AI". Eliza was developed to explore communication between humans and machines. The aim of Eliza was to simulate a conversation through use of pattern matching and substitution methodology, while this sometime produced conversations that seemed to display understanding from Eliza, there was in fact no actual intelligent understanding behind the replies from the Eliza.<sup>[[5]](#reference-5)</sup> Developed from 1964-1967 at MIT by Joseph Weizenbaum.

This early natural language processing program was written in the 1960's. It was been created to emphasize how superficial computer to human communication was at that time. However when it was released and installed on personal computers, humans found it quite engaging.

**What does Eliza do?**<br>
As mentioned using "pattern matching" and substitution methodology, the program gives canned responses that made early users feel they were talking to someone who understood their input. The program was limited by the scripts that were in the program. Many variations on the original scripts were made as amateur coders played around with the fairly simple code.

Perhaps the most well known variation was called DOCTOR.<sup>[[6]](#reference-6)</sup> This was made to respond like a Rogerian psychotherapist. In this instance, the therapist "reflects" on questions by turning the questions back at the patient. DOCTOR was intended to help people dealing with mental health issues and depression.

ELIZA was one of the first "chatterbots", this was trimmed to "chatbot". It was also an early test case for the Turing Test, a test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human. By today's standards ELIZA fails very quickly if you ask it a few complex questions.

## Eliza User Flow
<p align="center">
  <img src="./Eliza/Eliza Chatbot User Flow.png" />
</p>

<hr><br><br>

# References
| Reference     | URL     | Usage | 
|--------------|-------|-------|
| Trigram Research | https://en.wikipedia.org/wiki/Trigram <br> https://web.stanford.edu/~jurafsky/slp3/3.pdf |[<a id="reference-1">1</a>]<br> [<a id="reference-2">2</a>]|
| Trigram Research |https://thinklike.ai/artificial-intelligence/what-is-trigram <br> https://www.geeksforgeeks.org/nlp-trigramsntags-tnt-tagging/ |[<a id="reference-3">3</a>]<br> [<a id="reference-4">4</a>]|
| Eliza | https://news.harvard.edu/gazette/story/2012/09/alan-turing-at-100/ <br> https://web.njit.edu/~ronkowit/eliza.html |[<a id="reference-5">5</a>]<br>[<a id="reference-6">6</a>] |
| GitHub | https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax |Formatting|
| GPT | https://chatgpt.com/  | Help with understading concepts |
|   |   |
|   |   |

