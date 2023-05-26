---
title: Service Communication
abstract: This page explains how the VapeDetect sensor uses LED colors to indicate its status, and how to troubleshoot service communication issues.
---
*Jump to [LED color indicators](sensor-device-communication.md#led-color-indicators) or [troubleshooting communication](sensor-device-communication.md#troubleshooting-communication).*

The VapeDetect sensor device has nine sensors. Each sensor is checked one or more times every second. Every ten seconds, the device sends the rolling average to the service. If the device detects that one of the pre-configured threshold values has been exceeded, it sends a message to the service letting it know. The service will then take the appropriate action depending on how the end user has configured the service to react.

## LED color indicators 

### During startup
During startup, the device's LED should go through this sequence:

1. *Powering on*. When first plugged in, the LED will turn **blue** and then off to indicate the device is powering on.
2. *Calibrating sensors.* The LED will flash **yellow** rapidly to indicate sensor calibration. The sensors need time to warm up, so if the device has not been powered recently, this could take a while.
3. *Connecting to the network.* The LED will flash **purple** to indicate the device is trying to connect to the local network.
4. *Connecting to the service.* The LED will flash **yellow** again, more slowly (once every half second), to indicate the device is establishing a connection to the service.
5. *Service active.* Finally the LED will turn solid **white** to indicate the device has begun normal operation.

### During operation
When the device fails to send a sample reading to the service:
- **Red**—*Call failure.* The LED will turn solid red for 2 seconds when a sample has failed to be sent to the service. Note: if a continuous number of samples cannot make it to the service, this will look like a solid red light while samples continue to fail.

When the normal environment readings change, indicating an event:
- **Blue**—*Burst mode.* When one or more of the sensors change value rapidly in a short period of time, the device goes into burst mode. In burst mode, the device sends all of the data collected in the previous ten seconds and continues to send data every second until the sensors that triggered the burst mode go back to their original baseline values. The LED will stay blue until out of burst mode unless a trigger is sent.

When the device is sending triggers out to the service in response to detecting an event, the LED will behave in one of two ways:
1. If the local API has been configured, the LED will flash rapidly for 2 seconds indicating the local API status call first. It will then turn off for a half-second, and then turn a solid color for 2 seconds indicating the call status on the service side.
2. If no local API is present, then the LED will go straight to turning a solid color for 2 seconds to indicate the call status on the service side. 

In either case, the following colors indicate the call status with the service:
- **Green**—*Alert acknowledged.* The service received the trigger and responded back with an acknowledgment.
- **Orange**—*No action plan.* The service received the trigger but no action plan has been set for that trigger.
- **Red**—*Communication lost.* The call failed and the device cannot communicate with the service.

## Troubleshooting communication

If for any reason the device is unable to communicate with the service, the first step is to make sure the network is configured to allow the service access to the Internet. The device requires access to a DHCP server (to get an IP address) and direct access to the Internet. Please make sure your firewall is configured to allow access to \*.xsponse.com and that it isn’t using any filters to block data to or from our device. Our service uses web APIs to communicate with the service so there is no need to open ports on your firewall. 

If the LED is red, more than likely the firewall is blocking the communications. Please check with your IT department and confirm that the network is configured to allow access to our device.

An easy way to check the network is to plug the same network cable you are using for the device into a laptop. Make sure the laptop gets an IP address. If you are allowing the DHCP service to assign any IP address to the device, this will work. If you have configured your DHCP service to assign the sensor a specific IP address based on the MAC address of the device, this will not work. Once you have an IP address, open a browser and navigate to http://dev.xsponse.com. If you get any errors or notifications, something is blocking our device from communicating from the service. If it works, you will see our website.

___
*Return to the [VapeDetect index](index.md)*
