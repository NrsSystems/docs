---
title: Action Plans
abstract: The Action Plans management page allows a user to add, edit, or delete an action plan, and to view the incident logs. Selecting the **Action Plans** link in the navigation pane will take you to the Action Plans management page.
---
*Jump to how to [add](action-plans.md#create-an-action-plan), [edit](action-plans.md#edit-an-action-plan), or [delete](action-plans.md#delete-an-action-plan) action plans.*

> _screenshot of action plans page_

The table shows the action plans by description (name), along with whether the plan is an alert or an alarm, the number of actions set to happen when the action plan is triggered, and the number of actions set to happen when the action plan is cleared. There are two basic types of actions, those that happen automatically when an action plan is triggered (**On Activate**), and those that happen when a user acknowledges the activated action plan by marking it clear (**On Clear**). An action plan listed as "Alert" only has On Activate actions, while a plan listed as "Alarm" has both On Activate and On Clear actions. 

Each time an XSPONSE sensor detects an event and triggers an action plan, the information is recorded in the incident logs. The Incident Logs management page allows you to view all recorded incidents from all your devices. Select the **Incident Logs** button above the Action Plans table to go to the Incident Logs management page and view the incidents. See the [Incident Logs section](incident-logs.md) for more information about the incident logs and the Incident Logs management page.

## Create an action plan
To add an action plan, select **Create Action Plan** at the top right of the page. This will open a separate page allowing you to enter a description (name) for the plan and whether to keep the plan active until cleared. Select **Create** to create the new plan. Or to go back to the Action Plans management page without creating a new action plan, select the **Action Plans** link in the upper right of this page or in the navigation pane. 

Once you create an action plan, the page will reload and display the Actions pane, which allows you to set what actions should happen when a plan is triggered. Each plan can have multiple actions, and each action has its own settings that need to be defined. No actions are added by default, and if you are not ready to add any at this point, you again have the option to select the **Action Plans** link in the upper right (or in the navigation pane) to return to the Action Plans management page. Your new action plan will appear in the table, and you can add actions to the plan later by selecting the **Edit** icon for that plan in the table. 

If you are ready to begin setting up the action plan, select **Add Action** in the Actions pane. Creating an action happens automatically in steps. 

1. First, provide a name (description) of the action.
2. Next, select an action from the menu: **send email**, **send SMS**, **call third-party API**, **update Digital Display**, **clear active Digital Displays**, **control relay**, or **control Vape Detect relay**. Each action can be assigned to happen during a particular time period—an active window—or by default to no active window.
3. Each of these actions has its own settings to fill out in a third and possibly fourth step, as described further along in this section. Once the settings for that action have been added, select **Submit** to create the new action. Or to go back to the Update _\[action plan\]_ page without saving any changes, select the **Actions** link in the upper right.
4. Once you have added all the actions you want in the action plan for now, select the **Action Plans** link in the upper right (or in the navigation pane) to go back to the Action Plans management page.

The settings for the different actions are as follows:

### Send email
_Recipients:_ Select the box to choose a recipient from the menu. This menu will include everyone in your XSPONSE contacts list; see the [Contacts section](contacts-management.md) for more information. You can also select the box and start typing a name. As you type, the menu will update to show the best matches, or will display “No results found” if the characters typed don’t produce a match. To add multiple recipients, select the box again to choose another recipient (or to type). To remove a recipient, select the **X** next to their name in the box.

_Email Subject_ and _Email Body:_ Once you have chosen at least one recipient, you can fill in the subject and body of the email to be sent. You must provide some content in both fields to create this action. Device attribute names, as described in the VapeDetect section, can be used as placeholders in both the subject and body, allowing the email to be customized at the time the alert is triggered with the information specific to the device that was activated. For example, if the attributes are _room, floor,_ and _building,_ the email would specify the exact room, floor, and building where the sensor detected vaping. To include device attribute variables in the email, enclose the device attribute name in double braces, like this: {{room}}. 

### Send SMS
_Recipients:_ Select the box to choose a recipient from the menu. This menu will include everyone in your XSPONSE contacts list; see the [Contacts section](contacts-management.md) for more information. You can also select the box and start typing a name. As you type, the menu will update to show the best matches, or will display “No results found” if the characters typed don’t produce a match. To add multiple recipients, select the box again to choose another recipient (or to type). To remove a recipient, select the **X** next to their name in the box.

_Message Body:_ Once you have chosen at least one recipient, you can fill in the body of the message to be sent. You must provide some content in this field to create this action. Device attribute names, as described in the VapeDetect section, can be used as placeholders in the message body, allowing the message to be customized at the time the alert is triggered with the information specific to the device that was activated. For example, if the attributes are _room, floor,_ and _building,_ the message would specify the exact room, floor, and building where the sensor detected vaping. To include device attribute variables in the message, enclose the device attribute name in double braces, like this: {{room}}.

### Call third-party API
_Request URL:_ Add the URL for the API.

_Request Headers:_ Add the headers for the API.

_Request Body:_ Add the body for the API.

You must provide content in all three of these fields to create this action.

### Update Display
This action works in conjunction with the XSPONSE Digital Display device. If you have an XSPONSE Digital Display associated with your account, you can set it to show a view (content) and optionally play a sound for a length of time you choose. 

_Duration:_ Set the overall length of time for the view to be shown.

_Display:_ Select a display device from the menu to show the view. All active displays associated with your account will be available in the menu.

_Sound (Optional):_ Select a sound from the menu to play while the view is being shown. The base XSPONSE service includes several sounds which will always appear in this menu, and any sounds you have added will appear as well. For more information, see your Digital Display Quick Start Guide. 

_View Type:_ Select a view from the menu to be shown. Once you select a view type, additional fields will appear for you to choose the settings for that view type.
- **View:** This option allows you to choose a predefined view from those you have added to your service. Select a view from the menu.
- **URL:** This option allows you to display a webpage even if you have not predefined it as a view. Enter the URL for the webpage in the field.
- **Custom:** This option allows you to create a custom text message to show on the display. 

_Background Color_ and _Text Color:_ You may choose both the background color and the text color, but you must change at least one of the two colors from the default setting (black) so that the text will be visible. Select the color field to change the color settings. Select the hue, saturation, and lightness for the color you want, and select the **check mark** button on the left to confirm your settings. Note that if the saturation is set all the way to the left (minimum saturation), only shades of gray will be visible, regardless of the hue setting. Or, if the lightness is set all the way to the left (minimum lightness—black) or to the right (maximum lightness—white), only black or white will be visible, regardless of the hue or saturation settings.

_Header Text_ and _Body Text:_ You must provide some content in both the header text and body text fields to create this action.

### Clear active Displays
This action works in conjunction with the XSPONSE Digital Display device. If you have an XSPONSE Digital Display associated with your account, you can use this action to clear the views (content) being displayed on all Digital Displays active at the time the action is triggered. This action has no settings of its own.

### Control relay
_Device:_ Select a device from the list.

_Relay:_ Select which relay, from 1 to 4, to activate.

_State:_ Select whether the relay should turn on or off when the action happens.

_Delay State Change (ms):_ Select the number of milliseconds the state change should be delayed—by default no delay (0 milliseconds). Select the **Temporary State Change** check box to revert the relay to its original state after a set amount of time. Selecting this check box will cause the Hold State (ms) option list to appear.

_Hold State (ms):_ Select the number of milliseconds the state should remain in its new setting before reverting back to the previous state. This option only appears if the **Temporary State Change** check box is selected.

### Control VapeDetect Relay
_Device:_ Select a device from the list.

_State:_ Select whether the relay should turn on or off when the action happens.

_Delay State Change (ms):_ Select the number of milliseconds the state change should be delayed—by default no delay (0 milliseconds). Select the **Temporary State Change** check box to revert the relay to its original state after a set amount of time. Selecting this check box will cause the Hold State (ms) option list to appear.

_Hold State (ms):_ Select the number of milliseconds the state should remain in its new setting before reverting back to the previous state. This option only appears if the **Temporary State Change** check box is selected.

## Edit an action plan
To edit an action plan, select the **Edit** icon in the action plans table. This will open a separate page allowing you to update the action plan. 
-	Select **Add Action** in the Actions pane to add a new action, as described previously. 
-	Select an **Edit** icon in the actions table to change the settings for that action, as described previously. 
-	Select a **Delete** icon in the actions table to remove that action from the plan. This will open a separate page asking you to confirm the action deletion. Select **Delete** to delete the action or select **Cancel** to go back to the Update _\[action plan\]_ page without deleting the action.

If you change the description of the action plan or change the **Keep active until cleared** check box, you must select **Save** in the upper panel to confirm the changes. Changes in the Actions pane—adding, editing, or deleting actions for the plan—are saved as you complete them, and do not require you to click Save in the upper panel. Once all changes are made, select the **Action Plans** link in the upper right (or in the navigation pane) to go back to the Action Plans management page.

## Delete an action plan
To delete an action plan, select the **Delete** icon in the action plans table. This will open a separate page asking you to confirm the action plan deletion. Select **Delete** to delete the action plan. Select **Cancel** to go back to the Action Plans management page without deleting the action plan.
