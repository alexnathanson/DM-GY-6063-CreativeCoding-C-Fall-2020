# DM-GY-6063-CreativeCoding-C-Fall-2020-Nathanson

## Simple Local Project Setup

* After downloading p5.js complete, you will see an directory called empty-example
* Copy the contents (index.html and sketch.js) into your new directory. If you change the name of sketch.js, you must edit line 16 of index.html.
* If the directory structure has changed, update index.html accordingly.

## Code Editor

* Use a code editor like Sublime Text, Brackets, or Atom to write your code
* Some code editors will have features that allow you to preview or run your code.

## Running code locally without a server

* In some cases, you can run your code just by opening the html file in the browser. This will only work if you don't have any dependencies, like images. This may not work at all with some browsers or settings. (My setup is Windows 10 using Firefox.)

## Running a local server

One of the simplest ways to run a local server is with Python. Python is generally pre-installed on Macs and Windows users will need to download it. You will need to use command line/ terminal.
* To check if you already have Python installed and the version, open terminal and type `python`. If its not installed, install <a href="https://www.python.org/downloads/" target="_blank">python</a>.
* Navigate to the directory that contains your HTML file.
	* Different OS and command line interfaces use slightly different syntax. It is easy to find an introduction to command line for your specific OS by searching online. To run the serrver, all you need to know is how to move around the directory structure. The command to change directory used by most if not all systems is `cd` + the name of the directory or `..` to move up in the directory stucture. It may also be useful to list the contents of the directory. `dir` works in windows. `ls` will lists the contents for Mac.
* Run the below code based on which version of python you are using.
	* Python 3 `python -m http.server`
	* Python 2 `python -m SimpleHTTPServer`
* If the server is running properly you should see something like this in the terminal `Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...`
*  In a browser, go to `http://localhost:8000/`



