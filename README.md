# Simple github browser

## Preface
As part of a job application, I was tasked with designing a web app with
the ability to view a restricted subset of a github user's repos.

Specs were as follows:

First Page must show:
- A list of all repos for a given user
- Each item shows repo title, number of stars, number of watchers, and number of forks
- Each item links to repo details page

Repo details page must show:
- All info on the list item for this repo
- description
- URL
- Any other details

A four hour time limit was also imposed.

---

## Project philosophy
- The best kind of code is code I don't have to write
- Minimal time will be spent on project

## Planning
Prior to development, some simple analysis was done on the requirements.
The following key points were identified:
- Github provides a simple REST API
- A router should be used to implement pages

It was established that the following tools would be used:
- Angular as I have been using this recently
- generator-gulp-angular for scaffolding and generating a build system
- ui-router for pages/routes
- Restangular was included for communicating with github's REST API
- octicons was included for github icons
- angular-material for any UI widgets

## Shortcomings
- No authentication with github api
- No pagination for users with lots of repos
- Always fetches all repos for the specified user immediately
- No error handling
- No tests
- Didn't get round to using icons
- Vastly inferior to githubs own website

## Running

```bash
cd dist && python -m SimpleHTTPServer 8080
```
