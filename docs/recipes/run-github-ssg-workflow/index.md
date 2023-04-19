---
sidebar_position: 2
---

# Recipe: manually run a Paradicms GitHub Action static site generation workflow

### Navigate to the *Actions* tab on your GitHub repository

![Screenshot of GitHub Actions tab](github-actions-tab.png)

### Select the *Build and deploy* action in the left sidebar

![Screenshot of selected workflow](select-workflow.png)

### Run the workflow

Click the *Run workflow* button on the right. You don't need to change the *Use workflow from* branch. Simply click the *Run workflow* button.

![Screenshot of GitHub Actions run workflow dialog](run-workflow-dialog.png)

You will see a new workflow run like the following:

![Screenshot of GitHub Actions workflow status](run-workflow-status.png)

GitHub is using Paradicms to generate a website from your data. You will *Run workflow* to re-generate the site whenever you change your data.

Once the workflow has completed, the status icon beside it will turn into a green checkmark.

![Screenshot of successful GitHub Actions workflow](run-workflow-success.png)
