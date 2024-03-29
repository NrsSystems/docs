---
title: Service Communication
abstract: This page explains how the VapeDetect sensor uses LED colors to indicate its status, and how to troubleshoot service communication issues.
---
*Jump to [LED color indicators](sensor-device-communication.md#led-color-indicators) or [troubleshooting communication](sensor-device-communication.md#troubleshooting-communication).*

The VapeDetect sensor device has nine sensors. Each sensor is checked one or more times every second. Every ten seconds, the device sends the rolling average to the service. If the device detects that one of the pre-configured threshold values has been exceeded, it sends a message to the service letting it know. The service will then take the appropriate action depending on how the end user has configured the service to react.

## LED color indicators 

| Color | Indication |
| --- | --- |
| Yellow | **Device startup.** The device is powered and is stabilizing the sensors. |
| White | **Service active.** The device has established communications with our service and is sending data successfully. |
| Blue | **Burst mode.** When one or more of the sensors change value rapidly in a short period of time, the device goes into burst mode. In burst mode, the device sends all of the data collected in the previous ten seconds and continues to send data every second until the sensors that triggered the burst mode go back to their original baseline values. |
| Green | **Alert acknowledged.** The device detected an event or one of the pre-configured thresholds was exceeded and sent an alert to the service. The green LED indicates that the service received the message and responded back with an acknowledgment. If the LED turns red, that indicates that the service did not respond with an acknowledgment. |
| Red | **Communication lost.** The device sends data to the service every 5 seconds if the device is in burst mode. If the service does not respond back with an acknowledgement, the LED will turn red to indicate that the device cannot communicate with the service. |


## Troubleshooting communication

If for any reason the device is unable to communicate with the service, the first step is to make sure the network is configured to allow the service access to the Internet. The device requires access to a DHCP server (to get an IP address) and direct access to the Internet. Please make sure your firewall is configured to allow access to \*.xsponse.com and that it isn’t using any filters to block data to or from our device. Our service uses web APIs to communicate with the service so there is no need to open ports on your firewall. 

If the LED is red, more than likely the firewall is blocking the communications. Please check with your IT department and confirm that the network is configured to allow access to our device.

An easy way to check the network is to plug the same network cable you are using for the device into a laptop. Make sure the laptop gets an IP address. If you are allowing the DHCP service to assign any IP address to the device, this will work. If you have configured your DHCP service to assign the sensor a specific IP address based on the MAC address of the device, this will not work. Once you have an IP address, open a browser and navigate to http://dev.xsponse.com. If you get any errors or notifications, something is blocking our device from communicating from the service. If it works, you will see our website.

___
*Return to the [VapeDetect index](index.md)*
