# GitHub Quick Delete

Anyone that has ever had to delete their repositories will know the time consuming process of doing it through the GitHub UI.

This is a simple app that calls the GitHub API, displays your public repositories, and allows you to delete the unwanted ones quickly.

## Adding a Personal Token

If you do not already have a Personal Access Token, or would like to create a new one. [Add it here](#%20GitHub%20Quick%20Delete%20%20Anyone%20that%20has%20ever%20had%20to%20delete%20their%20repositories%20will%20know%20the%20time%20consuming%20process%20of%20doing%20it%20through%20the%20github%20UI.%20%20%20%20This%20is%20a%20simple%20app%20that%20calls%20the%20GitHub%20API,%20displays%20your%20public%20repositories,%20and%20allows%20you%20to%20delete%20the%20unwanted%20ones%20quickly.%20%20%20##%20Adding%20Personal%20Token)

Create a `.env` file in the root of the app and add the following code, replacing the *"your-access-token"*with your own.

    GITHUB_API_TOKEN="your-access-token"
