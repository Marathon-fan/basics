

# basics




A:What happens when there are incomplete issues at the end of the sprint?
Q:
Jira gives you the option to move it back into the backlog or another queued sprint

/////////////////////////////////////////////////////////
Top 34 JIRA Interview Questions & Answers	

 
1) Explain what is JIRA?

JIRA is an issue tracking product or a software tool developed by Atlassian, commonly used for bug tracking, project management and issue tracking; it is entirely based on this three aspects.

2) Explain what is a workflow?

Workflow is defined as a movement of the bug/issue through various stages during its life-cycle

Created/Open
WIP ( Work In Progress)
Completed/Closed
3) What can be referred as an issue in JIRA?

In JIRA, an issue can be anything like a

Software bug
The project task
A help-desk ticket
The leave request form
4) List out the source control programs with which it integrates?

It integrates with source control programs such as CVS, Git, Subversion, Clearcase, Visual SourceSafe, Mercurial, and Perforce.

5) Why use JIRA?

The reason behind using JIRA is

Upfront and fair licensing policy
Features that is not available elsewhere
Get latest update on the progress of projects
It run anywhere and recognized with many famous companies
Easily extensible and customizable
images (1)

6) Is it possible to access JIRA cloud site via a mobile device?

Yes, it is possible to access JIRA cloud site via a mobile device. You have to just use the URL of the JIRA cloud site in your mobile web browser.

7) Can you disable JIRA mobile for the site?

You can disable JIRA mobile for the site, so that users can be unable to operate the desktop view of JIRA on their mobile device.  JIRA mobile comes as a system add-on and can be disabled any time.


 
8) Explain labelling and linking issue in JIRA?

Labelling Issue: It enables you to categorize an issue in a more informal way than assigning it to a component or version. You can then search issues according to label.
Linking Issue: This feature enables you to link an association between two issues on either on the same or different JIRA servers.
9) Mention the types of reports generated in JIRA?

JIRA offer reports that show statistics for projects, versions, people or other fields within issues.  Various reports included with JIRA are

Average Age Report
Pie Chart Report
Resolution Time Report
Recently Created Issues Report
Resolved vs. Created Issues Report
Single Level Group by Report
Time Tracking Report
User Workload Report
Workload Pie Chart Report, etc.
10) Explain what is Cloning an Issue?

Cloning as issue allows you to create a duplicate of the original issue so that many employees can work on a single issue within a single project. The clone issue can be connected to the original issue.  A clone issue holds following the information

Summary
Description
Assignee
Environment
Priority
Issue Type
Security
Reporter
Components, etc.
11) Mention what things are not included in cloned issue in JIRA?


 
Time tracking
Issue history
Comments
12) Explain what is the use of “Move Issue” wizard in JIRA?

The move issue wizard enables you to specify another project in your JIRA instance. Move wizard permit you to change certain attributes of an issue like

Issue Type: If your issue is a custom issue type and does not occur in your target project, you must choose a new issue type for your issue
Issue Status: If you have assigned your issue as a custom issue status and it does not exist in your project, you must select a new issue status for your issue
Custom Fields: If you have determined required custom fields for your issue, which do not occur in the target project, you must set values for them.
13) How security setting is helpful in JIRA?

JIRA’S security setting restricts the access to the issue to only those person who is allowed to work on the issue or a member of the chosen security level. Security level of an issue can be set either when the issue is created or when the issue is being edited

14) Explain how you can share an issue with other users?
You can email an issue by using the share option in JIRA. You can also email other JIRA users a link to the issue by sharing the issue with them or by mentioning them in an issue’s Description or Comment field.

15) Explain how you can modify multiple bulk issues?

To modify multiple bulk issues, you can use Bulk Change option from the “Tools” menu of the navigator.  All the issues on the current page can be selected for the bulk operation.  The following list details the available bulk operations like

Workflow Transition
Delete
Move
Edit
16) Explain how you can disable mail notification for Bulk Operations?

To disable mail notification for a particular Bulk Operations, you have to de-select the “Send Notification” checkbox in the bulk operation wizard.

17) What does an issue change history include?

Issue change history includes

Deletion of a comment
Deletion of a worklog
Creation or deletion of an issue link
Attachment of a file
Changes to an issue field
18) Explain what does the three color indicates tracking times or duration for an issue?

Three color will be displayed representing the amount of time spent behind the issue

Original Estimate (Blue): The amount of time originally estimated to resolve the issue
Remaining Estimate(Orange): The remaining amount of time left to resolve the issue
Time Spen or Logged (Green): The amount of time spent so far while resolving the issue
19) Mention some of the popular add-ons for JIRA?

Some popular add-ons for JIRA include,

Suites utilities for JIRA
ScriptRunner for JIRA
Zephyr for JIRA – Test Management
JIRA Toolkit Plugin
Atlassian REST API Browser
Portfolio for JIRA
JIRA Misc Workflow Extensions
Tempo Timesheets for JIRA
JIRA Charting Plugin
20) Mention what is Schemes in JIRA?

Schemes are a major part of JIRA configuration. It is a collection of configured values that can be used by one or more JIRA project. For instance, Notification Schemes, Permission Scheme, Issue Type Scheme, and so on. There are total seven types of schemes.

21) Mention what can be configured for JIRA project and issue type?

You can configure following things for each pair of an issue type and JIRA project.

The order of custom fields appears on an issue screen
Workflow of an issue including the statuses
Which custom fields and system an issue can use
Project accessibility
Permissions for what a user can do with an issue
Versions and components available for an issue
22) Mention is it possible to get back up your JIRA cloud data?

In JIRA, you can take backup of your JIRA cloud data using Backup Manager.  But only one backup file is stored at a time. The existing backup is overwritten by new ones.

23) Mention what data can be backed up?

The backup data includes,

Attachments if selected
Users and their group settings
Avatars
Issues
24) Mention some useful tips on JIRA Workflow?

As such Statuses are global objects in JIRA. Changing the name of the status on one workflow will change the status on all workflows that use that status
Hover over a status or transition to see the relevant transition labels
One cannot clone transitions in the workflow designer
In the workflow designer, one cannot create annotations
Directly you cannot set the issue.editable property.
25) Mention what are the limitations when editing an active workflow?

If a workflow is active, you cannot edit the workflow name (only the description)
You cannot delete the workflow steps
A step associated status cannot be edited
You cannot add any new outgoing transition if a step has no outgoing transitions (Global transitions are not considered).
A step’s Step ID cannot be changed.
26) In JIRA workflow, is it possible to transition an issue back to its previous status?

Practically, it is not possible to transition an issue back to its previous status.  However, you can use “onhold” feature to transition an issue back to its previous status. Here are the steps,

In workflow, Create a global transition to the ‘On Hold’ status.
Now from ‘On Hold’ status create another transition to every other status you want to come back to
Since the transition names cannot be the same, just add a blank space at the end of it.
Now you don’t want the status transition from the ‘On Hold’ and ‘Done’ to ‘On Hold’ So you will hide the other status “On Hold” by adding the value field condition on the global transition.
27) Mention what is the role of Validators in JIRA?

The Validators in JIRA checks that any input made to the transition is valid before the transition is performed.  If a validator fails, the issue will not progress to the destination status of the transition.

28) Mention what types of Post functions are carried out after the transition is executed?

Types of Post functions carried out after transition is executed includes

Adding a comment to an issue
Generating change history for an issue
Updating an issue’s fields
Generating an event to trigger email notifications
29) What is an event in JIRA?

The events are classified in two a System event (JIRA defined events) and Custom event (User defined events). An event describes the status, the default template and the notification scheme and workflow transition post function associations for the event.

30) What is Audit Log?

Under Audit Log, you can see all the details about the issue created, and the changes made in the issues.

31) For a Agile project, how user stories in JIRA are created?

For Agile project to create user stories in JIRA, follow below steps.

Issue type -Epic and Issue type – Story linked to it. In order to do so, in the ‘Create Issue’ page, go to “Configure Fields” and select “Epic link” field to be included in the issue creation screen.
Or you can have a product backlog by creating a main User story and having various sub-tasks under it.
32) Mention what is an “issue collector”?

An “issue collector” enables you to easily embed a JIRA feedback form into your own web site. This helps website visitors to log issues into JIRA through our website.  To use JIRA feedback form, visitors to our website do not need a user account in JIRA.

33) Mention the difference between Bugzilla and JIRA?

Bugzilla	JIRA
It is an Open Source
It is a commercial tool
Using Bugzilla might be little complicated for few due to grouping users and granting permissions
For some using JIRA would be more convenient than Bugzilla
Bugzilla allows you to show/hide the whole custom field or specific values based on the value of some other field
JIRA enables conditional configuration based only on Type fields and Project.
Bugzilla’s has a powerful advanced search option
JIRA lacks advance-level search options. JIRA has flexible JQL language (JIRA Query Language). It enables you to build arbitrary boolean expressions.
Unlike JIRA, Bugzilla allows users select the initial status of a new issue.
Unlike Bugzilla, JIRA enables you to define multiple workflows which are applied based on the issue’s Project and Type.
Bugzilla has only one link type: Blocks/depends and a Bug ID custom field
JIRA has configurable link types with user-defined semantics. JIRA enables to link an issue to any other entity outside JIRA.
34) Explain how you can modify multiple bulk issues?

You can modify multiple bulk issues by using option “Bulk Change” option.

Refer our JIRA Tutorials for an extra edge in your interview.


/////////////////////////////////////////////////////////

This tutorial covers the most frequently asked Atlassian JIRA interview questions with detailed answers.

Defect management tools or say Bug tracking tools have been a part of software testing and development cycles for years. “JIRA” is an incident management tool, developed by Atlassian, which is commonly used for defect/issue tracking as well as project management.

This defect tracking tool is not only used for convenience-related features like recording, reporting but is also integrated directly with code development environment. JIRA is an efficient tool and has the capability to track any kind of defects/issues. Agile projects are also supported by JIRA.

jira interview


 
Now, above was the basic description of Atlassian JIRA, defect tracking tool. Through this article, we will discuss multiple interview question and answers which will help you understand this tool much better as well as on the other hand will help prepare for your interview.

JIRA Interview Questions and Answers:
Question 1) Why is JIRA used?

Answer: Atlassian JIRA is basically an issue and project tracking tool which allows us to track any project related work by following a proper workflow. Enlisted below are few reasons which determine the usage of JIRA:

Able to track project progress from time to time.
JIRA use-cases include project management, feature implementation, bug tracking, etc.
Work-flow can be easily customized as per our requirement.
Along with issue tracking, history of the work done on issues, when, what and by whom can also be tracked.
JIRA is platform independent and can run anywhere.
Questio 2) Explain JIRA workflow.

Answer: Workflow defines the series of steps or stages an issue/ bug goes through during its lifecycle from creation to the closing of the issue. The workflow here includes the creation of an issue, series of actions performed to fix the issue and the last step includes the closing or say completion of the issue after verification. This can also be understood by the below diagram:

jira-workflow

Question 3) Enlist report types generated by JIRA.

Answer: There are multiple reports available in JIRA which are used to show the project statistics throughout the project life cycle. There are general reports available for analyzing issues as well as different reports for Scrum projects and Kanban projects.

Following are the general reports generated as and when required for analyzing issues:

Average Age Report
Created vs Resolved issue Report
Pie Chart Report
Recently created Issue Report
Resolution Time Report
Time Tracking Report
User Work load Report
Version Work load Report
Workload Pie chart Report
Following are the examples of reports generated for Scrum projects:

Sprint Report
Control chart
Burndown chart
Cumulative Flow diagram
Epic Report
Release Burndown
Velocity chart
Version Report
Following are the examples of reports generated for Kanban projects:

Control chart
Cumulative Flow diagram.
For generating reports for your project, follow the below steps;

Navigated to desired project dashboard.
Click on Reports tab from left-hand side to view different reports.
Click on Switch report to view the different report.
(Note: Click on the image for enlarged view)

switch-report

Question 4) Explain step by step how an issue is created in JIRA.

Answer: Whenever an issue or defect is encountered while testing, it needs to be reported so that the developers can work on it and take the necessary action to fix it. We will see step by step how an issue is created in Atlassian JIRA.

1) Log in to your JIRA account by using valid credentials and get directed to the dashboard.
2) Click on ‘Create’ button displayed and you will be navigated to a window for creating an issue.
3) Enter all the necessary details as required to create an issue. As you can see in the below image:

In Project field, project for which we are creating an issue is selected. In this example: STH_Learning(STHL) is selected from the dropdown containing all the available projects.

In Issue type field, the nature of the issue is selected from the dropdown which contains option like Bug, Task, Improvement, Story, New Feature, etc. In this example, ‘Bug’ is the nature of the issue.

Summary field contains the one line title of the issue which imparts the critical information about the issue in a summarized way. The more effective the issue headline, the more you can show the criticality of the issue. Of course, the headline should be easily understood without any chances of misinterpretation. The example I have taken here, however is not much critical.

The Reporter is the one who reports the issue. In most of the cases, the name of the Project manager is selected in this field.

In Description field, the detailed description of the issue is written. As you can see in the below example screenshot, Steps to reproduce the issue, Actual result, Expected result are included in the description.

In Affect Version field, the current build version the project is selected in which the issue has been encountered.

Fix version field is basically selected by the concerned developer people, who choose the version as and when the work for the particular issue has been finished and the issue has been fixed.

Priority field defines which issue should be considered first to be fixed. Tester selects the priority of the issue from the dropdown based on its effect on the application. This example issue is basically of a Medium priority.

In Attachment field, any video or screenshot related to the issue is being uploaded.

In Environment field, operating system and browser details are mentioned on which issue has been encountered.

create-issue-1

create-issue-2

4) After all the details have been completed, Click on ‘Create’ button displayed on the window to create the new issue.

5) Issue id is generated which can be used in future reference for tracking the progress of the issue.

Question 5) Explain the three color indicators and their significance.

Answer: For any particular issue in JIRA, 3 colors like Blue, Green and Orange is used to denote the amount of time spent on any particular issue. This information is displayed under ‘Time Tracking’ section. Each colour has its own significance like;

Blue: This color is to denote the ‘Original Estimate’ i.e. the time estimate to be invested in resolving the issue. This field has been labeled as ‘Estimated’.
Orange: This color determines the time left for resolving the issue. This field has been labeled as ‘Remaining’.
Green: This color defines the actual time that has been used or say spent in resolving the issue so far. This field has been labeled as ‘logged’.
time-tracking

Question 6) For any particular issue, what all are included under change history?

Answer: Change history section displays the activities of changing any records with information regarding the person who has made the change as well as the time at which the changes have been made. The change history also displays the information about the old and new field values in the case of the change in any field. Basically,  change history includes the following records of the changes:

Creation and deletion of a comment.
Creation and deletion of an issue link.
Deletion of a worklog.
File attachment changes
Issue field changes
The change history for any issue can be viewed in JIRA by following steps:

Open any particular issue.
Click on ‘History’ tab present in the ‘Activity’ section.
history-tab

Question 7) Mention a way with which an issue can be shared with other users in JIRA.

Answer: An issue can be shared with other users in JIRA by using the share option available on the issue description page.

share-option

When share option for any particular issue is clicked, it contains the link to the issue to be shared along with ‘Username or Email’ and ‘Note’ field that has to be filled.

share-option-1

Question 8) What is the importance of labeling issue?

Answer: Labeling an issue is basically done to categorize an issue within a particular section which in turn can be easily searched with the help of labels. Label for a particular issue can be initially set at the time of creating the issue, while it can edit also within the issue. Label field is displayed under the ‘Details’ section as shown below in the figure:

labeling-issue

Question 9) How is an issue linked in JIRA?

Answer: As the name itself defines, Linking means the association between the two. In the same way, in JIRA issue is linked with any other issue in cases like:

Relate to another issue
Duplicate to another issue
Block another issue.
For displaying the details of the Linked issues, there are two fields available in JIRA: ‘Linked issues’ and ‘Issues’.

linked-issues

Linked issue section contains the dropdown for the options to be selected as the reason for linking the issue. As per the selected option, the suggestion of the issues to be linked in displayed in ‘Issue’ dropdown.

linked-issues-1

Linking of issues can be done either on the same or different JIRA servers.

Question 10) What is the purpose of JIRA dashboard?

Answer: The first page which is displayed whenever we get logged in to JIRA application is ‘Dashboard’ which is basically the default or system dashboard. A personal dashboard can also be created and designed by adding different gadgets and can be edited also as and when required. These gadgets are the means to display the project progress in terms of issues, etc. Let us understand in steps how a personal dashboard can be created:



 
1) Enter valid credentials and get navigated to JIRA dashboard.
2) Click on “…” displayed on the upper right hand side and choose option ‘Create dashboard’. You can also choose ‘Copy dashboard’ in the case of copying the currently viewed dashboard.

copy-dashboard

3) ‘Create Dashboard’ page is displayed.
4) Enter all mandatory information and click on ‘Create’ button.

create-dashboard

5) After creating a dashboard, you get navigated to a page where there are multiple options to select and add gadgets to your dashboard.

add-gadgets

6) There is also an option available to choose and edit the layout of your dashboard.

Any particular Dashboard can be edited, copied, shared, delete from the Manage dashboard section.

Question 11) What do you mean by Scheduling an issue?

Answer: Scheduling the issue means scheduling the work of issue for a particular ‘due date’. For this function to work, one must have ‘Schedule issue permission’ by JIRA Administrator. In this case, a field with ‘Due Date’ is being populated.

Question 12) Explain how particular project details are listed in JIRA.

Answer: Every project has some main attributes which have to be displayed in the project summary. This attributes include:

Name of the project
Key
Components
Versions (if present)
Please refer below screenshot of Project ‘STH_L’ summary page as your reference. Although not much activity has been done in this project but this image will give you a clear idea.

activity

As you can see from the image, the middle display area of the page shows the ‘Activity’ screen containing details on the activities done on issues or project.

The right hand side section displays the basic information about the Project like Project Lead, Key, Issue Status, etc.

The left hand side contains various options like Components, issues, Reports, Active Sprints, etc. The related information is displayed as per the selection from the option. For Example: If I select the ‘Issue’ option, the below displayed screen will appear.

issue-option

Question 13) What are issues types that are created and tracked via JIRA?

Answer: JIRA has some defined set of default issue types which are displayed under ‘Issue Type’ section. Other issue types can be added, edited and deleted as per requirement of the project. Some of the common issue types are Bug, Task, Sub-task, Epic, Story, etc. Their details can also be seen under Issue type section as shown below in the figure.

administration

As the definition of ‘Issue Type Schema’ mentioned in JIRA application,

An issue type scheme determines which issue types will be available to a set of projects. It also allows specifying the order in which the issue types are presented in the user interface. There are two types of issue type schema:

Default Issue type schema
Scrum Issue type schema
administration-1

Question 14) How is a sub-task created in JIRA?

Answer: Sub-task is the way of splitting up of parent issue into a number of small tasks which are tracked and worked on separately. The parent issue contains the information of all its sub-tasks which can be only of the same project. A parent issue cannot be closed unless and until all its sub-tasks are closed. A sub-task has the same fields as that of any standard issue but their issue types are different. Now, let us see step by step how a sub-task is created. I have created an issue in the below example for the understanding creation of sub-task.

1) Open a parent issue by searching with an issue id or create any new issue id.
2) On the right hand side of the issue description screen, you will see “…” . Click on it and options are displayed.
3) Click on Create Sub-task from the displayed dropdown option.

create-sub-task

4) Create sub-task window is displayed.
5) Enter all the mandatory details and click on ‘Create’ button.

create-button

6) Now the created sub task gets added to the parent issue under sub-task section as shown below in the figure:

sub-task-section

7) There are also options available to convert an issue into a sub task as well as sub task into an issue.

Question 15) Explain the term Cloning an issue.

Answer: Cloning an issue means copying an issue. In this condition, a clone of the original issue is created which consist of same information as is present for the original issue. Cloning of the issue is done so that multiple users can work on the same issue, however, the operation done either on the original issue or clone issue has no effect on each other. All the information of the original issue are cloned expect few as mentioned below:

Time tracking
Comments’
Issue history
Status and Resolution
Let us see how to create a clone of an issue:

1) Open any issue by searching with an issue id or create any new issue id.
2) On the right hand side of the issue description screen, you will see “…” . Click on it and options are displayed.
3) Click on Clone from the displayed dropdown option.

clone

4) Clone issue window is displayed.
5) If required, you can edit the summary of the issue and click on ‘Create’ button.

create-button

6) Another issue is created with ‘CLONE’ added in the summary.

Question 16) Explain Kanban board.

Answer: Kanban boards are created for the projects where the team has their prime focus on visualizing the workflow and managing the project’s work in progress. The most important feature of Kanban board is that it is found in work mode because the projects do not have their work as planned. Let us see how Kanban board is created in JIRA step by step.

1) Log In to the JIRA application using valid credentials and get navigated to the dashboard.
2) Click on Project dropdown and select option ‘Create Project’.
3) Select ‘Kanban Software development’ and click on Next button.

kanban-software-development

4) Enter all the necessary details and click on Create button.
5) Kanban board is created as shown in below example.

Note: I have just taken a basic example of creation

example-of-creation

In the case of Kanban, the incoming task is given more priority and hence it is considered as the best methodology for cases like bug fixing and maintenance release.

Question 17) Mention one similarity and one difference between JIRA Scrum and JIRA Kanban.

Answer:

Similarity: Both JIRA Scrum and Kanban is considered as the most powerful process tool for optimization of work and the processes as both processes focus is on continuous optimization and visualizing the workflow. In these cases, large and the complex tasks are broken down and each individual tasks are worked on and completed efficiently.

Difference: Scrum board is the work mode where progress of sprints and tracking of its work is done. Here the team determines the list of issues that has become backlog and then these issues are moved to sprints as per team plan.

In the case of Kanban board, the work in progress activities is being maintained and their process flow is tracked. Here the team decides the increase and decrease of the number of issues that is to be displayed in each status of the workflow.

Question 18) What are most useful JIRA add-ons.

Answer: Some of the most useful JIRA add-ons are listed below:

Jenkins-CI
Usersnap
Slack
HipChat
GitHub
PagerDuty
Tempo Timesheets
Question 19) What comes under JIRA Schema?

Answer: JIRA Schema consists of the following:

Workflows
Issue types
Custom fields
Screens
Field configurations
Notifications
Permissions
Question 20) How is security setting helpful in JIRA?

Answer: Security setting for any issue is defined or say set either at the time of creation of the issue or while editing the issue. The basic reason for security setting is to restrict the user access to the issue so that not all users are able to work on that issue. Security setting also allows the access of the issue to the member of chosen security level.

Conclusion:
Through this article, I have covered everything which is necessary to know as a part of understanding and learning this famous and most useful issue tracking tool i.e. JIRA. Although it was not possible to take any ongoing project as an example to make things clear, I have created a new id and new project in JIRA, so that I can provide my answers with screenshots for better understanding. Hope this article proves helpful for your preparation for interviews. All the best and keep learning.

