---
title: Views
abstract: The Views management page allows a user to add, edit, or delete a view—the content to be shown on a display. Selecting the Displays link and then the Views link in the navigation pane will take you to the Views management page. 
---
*Jump to how to [add](views-management.md#add-a-view), [edit](views-management.md#edit-a-view), or [delete](views-management.md#delete-a-view) a view.*
> _screenshot of views management page_
 
A view is the content to be shown on a display—such as a website, image, PDF file, video file, or YouTube video. We also have several built-in apps such as a countdown timer and days since last accident poster. A display can be set directly to show a specific view; see the [Displays section](displays-management.md#edit-a-display) for more information. Views can also be arranged in playlists to show multiple views in a particular order and duration; see the [Playlists section](playlists-management.md) for more information. 

Some view types, such as the countdown timer, allow you to play sounds in connection with the view. See the [Sounds section](sounds-management.md) for more information on adding, editing, and deleting sounds.

The table shows the views by description (name), and each view’s type (such as image or website). For content such as websites, images, and PDF files, selecting the link in the Description column of the views table will open a separate browser tab with the contents of the view. Some of the built-in app view types, such as the countdown timer, cannot be viewed in a browser, so the link will not work.

## Add a view
To add a view, select **Create View** at the top right of the page. This will open the View Library page showing all the available view types. Select the **Sort By** menu in the upper right of the pane to list the views alphabetically, by most recent, or by most popular.

Select the view you want to create to continue. Each view type has its own settings that need to be supplied to create the view, as detailed later in this section. Once the settings have been entered, select **Submit** to create the new view. Or to go back to the Views management page without creating a new view, click the **Views** link in the upper right of this page or in the navigation pane.

Some view types, such as image, PDF, and video, allow you to upload files to the XSPONSE server. The XSPONSE service supports all “image” MIME file types, PDF files (the “application/pdf” MIME type), and .mp4, .webm, and .ogg files for video. Files uploaded to the XSPONSE server are limited to 20 MB each for image or PDF files and 1 GB for video files, with a maximum of 10 GB data storage space for all file types per user account. 

The settings for the different view types are as follows: 

### Analog Clock
_Description:_ Add a simple text description of the analog clock, which is how it will be listed on the Views management page.

_Animation Speed:_ Select the speed for the animation of the seconds hand on the clock—the slow setting will make it tick forward each second, while the fast setting will make it move smoothly and continuously forward. 

### Art Gallery
The art gallery allows you to choose images from a preset collection of artworks to show on a display, automatically cycling through the chosen pieces.

_Description:_ Add a simple text description of the gallery, which is how it will be listed on the Views management page.

_Time that Each Image Will be Displayed:_ Select this box to set the duration in hours, minutes, and seconds.

_Number of Selected Images to Display:_ Enter the number of images to be shown.

_Display Artist Name and Art Title:_ By default, this option is set to **No**. Select this box and select **Yes** to activate this feature and reveal three additional options. _Seconds Before Fade_ determines how long the information text will stay onscreen before fading out of view. The other two options, _Display Right or Left_ and _Bottom or Top,_ together will position the text accordingly in one of the four corners of the screen.

The lower section of options allows you to search through the provided collection of artworks. To view the entire collection, select **Search** without filling in any options. To add an image to the gallery, select the image in the search results; thumbnails of these images will then appear within the options section. To remove an image from the gallery, select the image in the options section. 

### Countdown
The countdown timer allows you to play one or more sounds and messages as the timer reaches specific points in the countdown. This could be used for example to pace an hour-long test by playing one sound every 15 minutes, a second sound as a five-minute warning before the hour is up, and a third sound to mark the end of the hour (and countdown).

_Description:_ Add a simple text description of the timer, which is how it will be listed on the Views management page.

_Duration:_ Set the overall duration for the timer.

_Text to Speech:_ Add a simple text message that will be read aloud by the text-to-speech feature and a time point when that message should be heard. Select **+ row** to add the first message and select it again to add more messages to be read aloud at additional time points. Select the **Delete** icon at the end of the row or select **– Last row** to remove an entry.

_Message:_ Add a simple text message to show on the device and a time point when that message should appear. Select **+ row** to add the first message and select it again to add more messages to be shown at additional time points. Select the **Delete** icon at the end of the row or select **– Last row** to remove an entry.

_Sound:_ Select a sound from the list to play and a time point when that sound should play. Select **+ row** to add the first sound and select it again to add more sounds to be read aloud at additional time points. Select the **Delete** icon at the end of the row or select **– Last row** to remove an entry.

### “Days Since” Poster
_Description:_ Add a simple text description of the poster, which is how it will be listed on the Views management page.

_Last Accident:_ Select or type the date of the last incident.

_Record:_ Add the number of days for the longest period between accidents. If no entry is made in this field, the poster by default will show the number of days since the date in the Last Accident field.

### Digital Clock
_Description:_ Add a simple text description of the digital clock, which is how it will be listed on the Views management page.

_Background Color_ and _Text Color:_ Select each box to choose a color from the palette for the two elements of the clock. By default both colors are set to black; you will need to select and change at least one color so the time is visible.

_Google Font:_ Select this list to choose the font for the display. 

### Image 
_Description:_ Add a simple text description of the image, which is how it will be listed on the Views management page.

_Choose File:_ Select **Choose File** to browse for the file you want to display. The file will be uploaded to the XSPONSE server. The XSPONSE service supports all “image” MIME file types. Image files uploaded to the XSPONSE server are limited to 20 MB each. 

### List
_Description:_ Add a simple text description of the list, which is how it will be listed on the Views management page.

_Title:_ Add a simple text description of the list to be shown on the display. 

_Sort By:_ Select the sorting method for the list.

_Extra fields:_ Select this menu to choose additional information to be displayed in the list. Multiple fields may be selected. Select the **X** next to the field name to remove it from the set.

_Filters:_ Select **Expand** to show the filters you can use for choosing which items show in the list. Select a filter on the **Due Date** menu and select additional options from _Status, Priority,_ and _List;_ if the _Due Date_ option is either “In the next” or “In the last”, then the _Days_ option will appear as well. Select **Collapse** to hide the filters.

_Scroll Speed:_ If the list is long and doesn’t entirely fit on the screen at once, you can use this option to scroll through the list. Note: If you are using playlists (see the [Playlists section](playlists-management.md)) and want to ensure the list scrolls all the way to the end, do not enter a duration in the playlist view. If you do enter a duration in the playlist, the list will scroll but when the duration has expired, the playlist will immediately move to the next view regardless of whether or not the list has scrolled to the bottom.

_Scroll Start Delay:_ Set the number of seconds you want the view to pause before it starts scrolling down through the list.

_Wait At Bottom:_ Set the number of seconds you want the view to pause when the list has scrolled completely to the end.

### PDF 
_Description:_ Add a simple text description of the file, which is how it will be listed on the Views management page.

_Choose File:_ Select **Choose File** to browse for the file (“application/pdf” MIME type) you want to display. The file will be uploaded to the XSPONSE server. PDF files uploaded to the XSPONSE server are limited to 20 MB each. 

_Scroll Speed:_ If the PDF has multiple pages and doesn’t fit on the screen all at once, you can use this option to scroll through the PDF. Note: If you are using playlists (see the [Playlists section](playlists-management.md)) and want to ensure the PDF scrolls all the way to the end, do not enter a duration in the playlist view. If you do enter a duration in the playlist, the PDF will scroll but when the duration has expired, the playlist will immediately move to the next view regardless of whether or not the PDF has reached the end.

_Scroll Start Delay:_ Set the number of seconds you want the view to pause before it starts scrolling.

_Wait At Bottom:_ Set the number of seconds you want the view to pause when the PDF has scrolled completely to the end.

### Quotes
_Description:_ Add a simple text description of the file, which is how it will be listed on the Views management page.

_Number of quotes to display:_ Enter the number of quotes to be shown.

_Time to display each quote:_ Select this box to set the duration in hours, minutes, and seconds.

_Background Images:_ Select an image to use for the background.

_Quote Search:_ Use this section to find and select the quotes you want to include in this view.

### Safety Posters
The safety posters view allows you to choose posters from a preset collection to show on a display, automatically cycling through the chosen posters.

_Description:_ Add a simple text description of the poster gallery, which is how it will be listed on the Views management page.

_Time that Each Image Will be Displayed:_ Select this box to set the duration in hours, minutes, and seconds.

_Number of Selected Images to Display:_ Enter the number of images to be shown.

The lower section of options allows you to search through the provided collection of posters. To view the entire collection, select **Search** without filling in any options. You can add keywords to the _Image Search: Keywords_ box to filter search results, and also use the _Image Orientation_ option to filter results to either portrait or landscape. To add a poster to the set for the view, select the poster in the search results; thumbnails of these posters will then appear within the options section. To remove a poster from the set for the view, select the poster in the options section. 

### Tasks
_Description:_ Add a simple text description of the task, which is how it will be listed on the Views management page.

_Task:_ Select the arrow to expand the list of available tasks.

### VapeDetect Dashboard
_Description:_ Add a simple text description of the VapeDetect dashboard, which is how it will be listed on the Views management page. For example, this could indicate the location of the device, such as “second floor bathroom”.

_Left Text:_ Add text to be shown on the left side of the dashboard header, such as the location of the device.

_Center Text:_ Add text to be shown in the center of the dashboard header, such as the company name.

_Vape Detect Device:_ Select the device to be used as the source for the dashboard’s data.

### VapeDetect Graph

_Description:_ Add a simple text description of the file, which is how it will be listed on the Views management page.

_Subtext One:_ Add the subtext for the graph.

_Subtext Two:_ Add the subtext for the graph.

_Graph Options:_ Select this menu to choose the information to be shown in the graph. Multiple fields may be selected. Select the **X** next to the field name to remove it from the set.

_Vape Detect Device:_ Select the device to be used as the source for the graph data.

### Video 
_Description:_ Add a simple text description of the file, which is how it will be listed on the Views management page.

_Choose File:_ Select **Choose File** to browse for the file you want to display. The file will be uploaded to the XSPONSE server. The XSPONSE service supports .mp4, .webm, and .ogg file types. Video files uploaded to the XSPONSE server are limited to 1 GB each. 

### Website
> **Note on websites and pop-up windows:**
> Please try to avoid websites that initiate pop-up windows. We have no control over those and can’t dismiss the pop-up. If you add a website that has a pop-up, it will appear for the duration that the site is being shown.

_Description:_ Add a simple text description of the website, which is how it will be listed on the Views management page.

_URL:_ Add the URL for the website.

_Scroll Speed:_ If the webpage doesn’t fit on the screen all at once, you can use this option to scroll through the page. Note: If you are using playlists (see the [Playlists section](playlists-management.md)) and want to ensure the webpage scrolls all the way to the end, do not enter a duration in the playlist view. If you do enter a duration in the playlist, the webpage will scroll but when the duration has expired, the playlist will immediately move to the next view regardless of whether or not the webpage has reached the end. 

_Scroll Start Delay:_ Set the number of seconds you want the screen to show before it starts scrolling.

_Wait At Bottom:_ Set the number of seconds you want the screen to show when the page has scrolled completely to the bottom of the screen.

### YouTube
_Description:_ Add a simple text description of the YouTube video, which is how it will be listed on the Views management page.

_Video:_ Add the URL of the YouTube video.

_Start:_ Set the number of seconds into the video where you want it to start. By default, it will start at the beginning (0 seconds).

_End:_ Set the number of seconds into the video where you want it to end. Leave this setting blank to let the video play through to the end.

_Mute:_ Select this check box to mute the audio if desired.

## Edit a view
To edit a view, select the **Edit** icon in the views table. This will open a separate page allowing you to edit the attributes of the view. Once changes are made, select **Submit** to accept the changes. Select **Cancel** to go back to the Views management page without saving any changes.

## Delete a view
To delete a view, select the **Delete** icon in the views table. This will open a separate page asking you to confirm view deletion. Select **Delete** to delete the view. Select **Cancel** to go back to the Views management page without deleting the view.
