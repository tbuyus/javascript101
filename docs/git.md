# Git
## What is Git?
>The purpose of Git is to manage a project, or a set of files, as they change over time.  It also coordinates work on those files among multiple people.

Git is similar to other version control systems (VCS) such as Subversion, and CVS.

A repository (repo for short) is where git stores this information.  You can think of it like a local server that stores your code.

Whereas the previously VCS's have a central repo, git is a [distributed system](http://stackoverflow.com/questions/7212740/why-git-is-called-a-distributed-source-control-system).  This means that you have repo on your local computer and can save to it regardless of internet connection.  Also if one copy of your repo is lost, as long as there is a copy of the repo else where you should be able to get back most of your work.

## What is Github?
>GitHub is a development platform inspired by the way you work. Host code, manage projects, and build software alongside millions of other developers.

Github can be thought of as a remote server to store your code.  It allows you to share code and work on projects with other developers.  

## Why should I use Git?
What would you do if you spent hours on a project and then your dog ate your code?  
How could you easily work on your awesome project with a friend?  

Git is the answer!

## History
It was created by Linus Torvalds the same person who created Linux.  Originally he was using Bitkeeper for source control, how ever decided to make his own VCS after free use was withdrawn after a dispute.

## How do I get started with Git?
First install git by entering the following command or follow these [instructions](https://www.atlassian.com/git/tutorials/install-git) if you're not using Linux.
```
sudo apt-get install git
```
Next register for a [github account](https://github.com/).
## How to save an existing project to Github
To save an existing project to git and to github follow these instructions:
```
cd [your project path]
git init
git add .
git commit -am 'Initial Commmit'
```
Then create a repo on your github account and follow the instructions to push your changes.

## How to download a project's code from Github
So you've seen a great project on github repository and you want to download a working copy and take a closer look. This is called 'cloning the repo'. Go to the repo github page click the 'clone or download' green button and copy the link. Then enter the following command:
```
git clone [repo link]
```
This will download the code to a new project directory, you can add a custom directory name as an additional parameter if you need to.

## How to contribute to another project on Github
[How to make a pull request](https://docs.google.com/presentation/d/12XPsgBkarJLA6I1UJd7HK1izUpQfX2Lt2gQq91z9XNQ/edit#slide=id.p)

## How to save code changes
Saving your code is known as 'commiting'.  To do so takes two steps:
1. Add to staging area
2. Commit changes with a message

Check to see which files have been changed:
```
git status -s
```

To add specific files to the staging area:
```
git add [files]
```
To add all files to the staging area:
```
git add .
```
Note make sure you add any new files this way otherwise changes will not be commited as the files will be untracked.

To add and commit all changed files with a message:
```
git commit [files] -am 'Add new awesome feature'
```
Note that the command above add and commits at the sametime using the '-am' parameters.


Check your commit by viewing the log
```
git log
```


## Branching
A branch is basically a fork of your own code.  It's useful for creating a new feature or doing a bug fix.  The main project branch is called main.
To list your branches:
```
git branch
```
To switch to a branch:
```
git checkout [branch-name]
```
To list your branches:
```
git branch
```
To list remote branches:
```
git branch -r
```
## How to update your project
To update your github project with the lastest commits made by you:
```
git push origin [branch name]
```
If you are contributing to another project you can update your local project with their latest changes by:
```
git pull upstream [branch name]
```
## Remotes
If you are contributing to a project you need to add it as a remote (eg upstream in previous example) so that you can pull changes.
```
git remote add [remote name eg upstream] [repo clone url]
```
## Config
The git config file is useful for checking your remotes
```
cat .git/config
```
## Pull Requests

[How to make pull requests](https://docs.google.com/presentation/d/12XPsgBkarJLA6I1UJd7HK1izUpQfX2Lt2gQq91z9XNQ/edit?usp=sharing)

## Conflicts
Sometimes you might get conflicts where you and another person has made changes to the same peice of code.  You can either manually resolve the conflict or use a merge tool.  @todo...

## How to Write a Git Commit Message

[How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)

## Can I use Git from my browser?
You can use github to edit files or use [glitch](https://glitch.com/) for pair programming.

## Read Git Book Pro

Read [Git Book Pro](https://git-scm.com/book/en/v2), it's free and awesome.

## Github Help
[Help on github](https://help.github.com/)

## Exercises
Now that you know the git basics, lets put them into practise with the following exercises:

### Managing Your code
1. Create a portfolio repo on your github account and push simple html home page to it.
2. Create a 'dev' branch, make some changes, merge into master and push to github.
3. (Optional) When ready publish your porfolio to the world on [github pages](https://pages.github.com/).

### Pull Requests
1. Fork our [git playground project](https://github.com/CodeHubOrg/git-playground).
2. Update the hall of fame with your name.
3. Create a pull request.
4. Update your github with the changes.

## Useful links
@todo Please add useful links here.

## Useful commands

```
git log - show log
git status -s - show working directory status
git checkout [branch] - check out a branch
git checkout -b [branch] - make a new branch based on current branch
git add . - add all files
git add -u - add deleted files
git commit -am "[commit message]" - add and commit with message
git push [remote] [branch] - push changes to remote (typicall called origin) and branch name (main branch is called master)
git merge branch - merge branch into current one
git diff [commit ref 1] [commit ref 2] - show difference between commits
git rebase - Rewrite time!  (becareful!)
```
