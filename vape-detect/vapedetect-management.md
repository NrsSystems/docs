---
title: VapeDetect
abstract: The VapeDetect management page allows a user to add, adjust, edit, or delete a sensor device. Selecting the VapeDetect link in the navigation pane will take you to the VapeDetect management page. 
---
*Jump to how to [add](vapedetect-management.md#add-a-sensor), [adjust](vapedetect-management.md#change-a-sensors-settings), [edit](vapedetect-management.md#edit-a-sensors-information), or [delete](vapedetect-management.md#delete-a-sensor) a sensor device.*

The devices table shows the sensors by description (name), along with the version of code each device is running. 

When a sensor device starts, it checks the XSPONSE system to see whether it is associated with an account. If the sensor is not associated with an account, its LED indicator will be orange. Once the sensor is associated with your account, its LED indicator will turn white. See the [Device Installation Process section](installation-process.md) for more information. (Also see the [Sensor Device Communication section](sensor-device-communication.md) for full details on all the [LED color indicators](sensor-device-communication.md#led-color-indicators).)

## Add a sensor
To add a sensor and associate it with your account, select **Add Device** at the top right of the page. This will open a separate page asking you to enter the activation code for the device. Enter the code and select **Submit**. A new page will open asking you to give the device a description (name), and to set its attributes—by default at least one. 

_Device attributes_ are user-defined variables that allow action plans to provide relevant information about which device is sending an alert. For example, for a large high school with multiple floors and buildings, all sensors could have attributes named _room, floor,_ and _building,_ and unique values for each sensor that would indicate its specific location. An action plan to alert staff when vaping is detected would use those variable names as placeholders in the alert message; this way, many devices can be assigned to the same action plan. When a particular sensor detects vaping and triggers the action plan, its values for those attributes would fill those variables in the action plan’s message, so that the alert message would identify the specific room where the sensor was activated. See the [Action Plans section](../general-ops/action-plans.md) for more information on using device attributes in action plans. 

Select the **Add Row** link to add more attributes or select the red **X** button at the end of a row to remove it. 

Once you have set these options, select **Submit** to accept the settings. To go back to the VapeDetect management page without linking a device, select **Cancel**.
 
## Change a sensor’s settings
To change the settings for a sensor, select the **Adjust** icon in the devices table. This will open a separate page allowing you to set whether the device is active and what action plan to follow when its trigger activates. Select **Active** to toggle the device between active and inactive. Select the **Action Plan** menu to choose a plan from those available. (See the [Action Plans section](../general-ops/action-plans.md) for more information.) Once changes are made, select **Save** to accept the changes. Select **Cancel** to go back to the VapeDetect management page without saving any changes.

## Edit a sensor’s information
To edit the information for a sensor, select the **Edit** icon in the devices table. This will open a separate page allowing you to edit the device description and attributes. Once changes are made, select **Submit** to accept the changes. Select **Cancel** to go back to the VapeDetect management page without saving any changes.

## Delete a sensor
To remove a sensor, select the **Delete** icon in the devices table. This will open a separate page asking you to confirm sensor deletion. Select **Delete** to delete the sensor. Select **Cancel** to go back to the VapeDetect management page without deleting the sensor.

___
*Return to the [VapeDetect index](index.md)*
