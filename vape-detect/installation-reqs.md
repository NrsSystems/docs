---
title: Device Installation and Setup Requirements
abstract: This page describes the requirements for physically installing your VapeDetect duct-mounted or standalone sensor, including the tools needed, choosing the location, and modifying the sampling tubes to fit.
---
*Jump to [tools required](installation-reqs.md#tools-required), [choosing the location of your device](installation-reqs.md#choosing-the-location), or [modifying the sampling tubes](installation-reqs.md#modifying-the-sampling-tubes).*

*See the [Device Installation Process page](installation-process.md) for how to physically install the device.*

To set up your XSPONSE VapeDetect sensor, you will need to provide:
-	An Internet connection.
-	A Power-over-Ethernet (POE) network switch—802.3af (15.4 watts) is required at minimum.
-	A Cat 5 Ethernet cable.

The sensor device requires access to a DHCP server (to get an IP address) and direct access to the Internet. The DHCP server can be configured to give the device any IP address or a static one. If a static IP is required, the sticker on the device has the device’s MAC address. The admin can create a DHCP static IP address reservation using the MAC address of the device.

Please make sure your firewall is configured to allow access to \*.xsponse.com and that it isn’t using any filters to block data to or from our device. Our service uses web APIs to communicate with the service so there is no need to open ports on your firewall.  

Each device comes in the box with a sticker showing the unit ID and MAC address, as well as a place for the installer to document the location of this sensor. This information is very important as the unit ID and location are required for registering the device with the XSPONSE online service. 

## Tools required
-	Level
-	Pencil
-	Tape measure
-	Tape (preferably masking tape)
-	Phillips screwdriver
-	Battery-powered impact driver
-	7/8” hole saw

## Choosing the location
Before starting, please check each of the rooms where you will be installing a sensor. Survey the rooms and decide on the best location for the sensor.

-	Men’s restrooms typically have an exhaust vent near the stalls, which is the best location for those rooms.
-	Women’s restrooms are usually more complicated as there are multiple stalls and multiple vents. The closer you can install the sensor to a vent opening, the better. In the women’s restroom either the handicap-accessible stall or the stall farthest away from the door is the best location.

Check the ceiling area to ensure you can get a cable to the location and that you have easy access to the vent ductwork. While drop ceilings are ideal, drywall is a little more difficult but not impossible. Most drywall ceilings have an access panel to allow access to the plenum area, and the location of the access panel should allow access to the exhaust vents in the ceiling. 

Most exhaust vents have a square box above the ceiling tiles. Ducting is then installed to connect the exhaust vent to the main exhaust fan duct work. Typically, the exhaust vent box will be connected along one side to the main duct, and the other three sides will be available as potential locations. Often the location can be decided by how you will access the box through the ceiling—if there is only one way to get to the box, the sensor will be installed on that side. As the device needs to be connected to a Power-over-Ethernet switch to function, that may be a consideration as well. 

## Modifying the sampling tubes
The duct-mounted sensor is a passive sensing device which uses a sampling tube to draw air into the detector to be sampled and then exhausted back into the air stream. The sampling tube works because of the Bernoulli principle: the air flowing across the end of the exhaust tube creates an area of low pressure which creates a small vacuum in the exhaust tube. Since the sensor is a closed system, the vacuum in the exhaust tube will cause air to be pulled in through the sampling tube.

Because of this process, the sampling tubes must fit the duct, as they need to reach a minimum 2/3 of the way across the duct to function optimally. Each sensor ships with an 18” sampling tube. Most bathrooms either have a box above the vent or an 8”-diameter tube. If the vent connector is a box, determine which side of the box the sensor will be installed on and measure the width across the vent from that side. The sampling tube should be cut to at least 2/3 of that measurement or no more than 1” less than the width. If the vent connector is an 8”-diameter tube, then the sampling tube would need to be cut between 6” and 7”.

***The sampling tube must be cut on the end with the cap.*** Remove the cap and cut the tube to the correct length. Place the cap back on the cut end (not on the end with the two small slots). The cap must be in place in order for the sensor to work properly.

Insert the sampling tube into the hole on the front side of the sensor (the curved end). Insert the sampling tube until the end of the tube hits the pins. ***Make sure the holes are facing towards the curved end of the sensor*** (into the air flow). Slowly rotate the tube back and forth to force the pins back a bit. Once the pins move back, the sampling tube can be inserted just a bit more (about 1/8”) until the slots are engaged. Please make sure the sampling tube is oriented correctly. Once the pins fall into the slots in the tube, the tube will be locked in place, and once the tube is locked in place, the only way to release the tube is to disassemble the case.

Insert the exhaust tube in the hole at the back end of the case (the square end where the connections are located). Orientation is not important for the exhaust tube, just insert the tube until it hits the pins. Rotate the tube slightly back and forth while putting a little pressure on it to push the pins back. Once the pins move back, the tube can be inserted a bit more (about 1/8”) until the pins engage the slots.

___
*Return to the [VapeDetect index](index.md)*
