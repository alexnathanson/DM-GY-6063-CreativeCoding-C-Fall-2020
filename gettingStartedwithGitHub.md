# Getting started with Git Hub via Terminal


You can use GitHub with either the command line or their desktop application.

In either case, you will need to make an account on www.github.com

## Desktop Application
https://desktop.github.com/

## Command Line/ Terminal
* Download git from www.git-scm.com
* To confirm the program downloaded properly, in terminal enter git --version
If the response is “git version” plus the version number then it worked.

In terminal enter:

git config --global user.name "YOUR_FULL_NAME"
git config --global user.email "YOUR_EMAIL_ADDRESS"

To start a new repository, create a new repository on the git hub website and clone it to your local computer.

### Clone a project
To collaborate on an existing project, you can just clone that existing repository to your machine. 

git clone https://github.com/alexnathanson/october16_creativecoding

### Push your changes to Git Hub
Once your changes have been made, push your code to git hub.

It's not always necessary, but considered good practice to pull from github first to ensure your branch is up to date. (This is particularly important for collaborating)
`git pull origin master`

this stages any changes you’ve made
`git add -A`

commit changes for upload with a comment
`git commit -m “YOUR COMMIT TEXT” `

pushes your work to Git Hub
`git push origin master`
