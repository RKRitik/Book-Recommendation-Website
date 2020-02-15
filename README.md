# Book-Recommendation-Website

https://developers.google.com/books/docs/v1/using#PerformingSearch

Performing a search
You can perform a volumes search by sending an HTTP GET request to the following URI:

https://www.googleapis.com/books/v1/volumes?q=search+terms

This request has a single required parameter:

q - Search for volumes that contain this text string. There are special keywords you can specify in the search terms to search in particular fields, such as:
intitle: Returns results where the text following this keyword is found in the title.


inauthor: Returns results where the text following this keyword is found in the author.


inpublisher: Returns results where the text following this keyword is found in the publisher.


subject: Returns results where the text following this keyword is listed in the category list of the volume.


isbn: Returns results where the text following this keyword is the ISBN number.

