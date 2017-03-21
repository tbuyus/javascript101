# Git
## What is Git?
>The purpose of Git is to manage a project, or a set of files, as they change over time.  It also coordinates work on those files among multiple people.

Git is similar to other version control systems (VCS) such as Subversion, and CVS.

A repository (repo for short) is where git stores this information.  You could think of it like a local server that stores your code.

Whereas the previously VCS's have a central repo, git is a [distributed system](http://stackoverflow.com/questions/7212740/why-git-is-called-a-distributed-source-control-system).  This means that can have repo on your local computer and can save to it regardless of internet connection.  Also if one copy of your repo is lost, as long as there is another copy else where you should be able to get back most of your work.

## History
It was created by Linus Trovalds the same person who created Linux.  Originally he was using Bitkeeper for source control, how ever free use was withdrawn after a dispute. He quips that he named it after himself.
>"I'm an egotistical bastard, and I name all my projects after myself. First 'Linux', now 'git'."

## What is Github?
Github is a place to store repos in the cloud.  It allows you to share code and work on projects with other developers.  It's important to save or push your project changes to github just in case your dog eats your laptop and you loose your local repo.

## Why should I use Git?
What would you do if you spent hours on a project and then your dog ate your code?  I bet you wish you had a back up, well this is where git comes in useful.  Github also is the ideal way for to work on your awesome project with a friend.

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

To add specific files to the staging area:
```
git add [files]
```
To add all files to the staging area:
```
git add .
```
Note make sure you add any new files this way.
To commit files with a message:
```
git commit [files] -m 'Add new awesome feature'
```
## Branches are cheap!

Branches are cheap so use them!  For example if you want to play about with a new feature or do a bug fix.

## Config

The git config file is found in your project folder ./git/config

## Pull Requests

[How to make pull requests](https://docs.google.com/presentation/d/12XPsgBkarJLA6I1UJd7HK1izUpQfX2Lt2gQq91z9XNQ/edit?usp=sharing)

## How to Write a Git Commit Message

[How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)

## Read Git Book Pro

Read [Git Book Pro](https://git-scm.com/book/en/v2), it's free and awesome.

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
