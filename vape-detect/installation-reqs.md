---
title: Device Installation and Setup Requirements
abstract: This page describes the requirements for physically installing your VapeDetect duct-mounted or standalone sensor, including the tools needed, ordering the sampling tubes, and choosing the location.
---
*Jump to [tools required](installation-reqs.md#tools-required), [ordering the sampling tubes](installation-reqs.md#ordering-the-sampling-tubes), or [choosing the location of your device](installation-reqs.md#location).*

*See the [Device Installation Process page](installation-process.md) for how to physically install the device.*

To set up your XSPONSE VapeDetect sensor, you will need to provide:
-	An Internet connection.
-	A Power-over-Ethernet (POE) network switch.
-	A Cat 5 (Ethernet) cable.

The sensor device requires access to a DHCP server (to get an IP address) and direct access to the Internet. The DHCP server can be configured to give the device any IP address or a static one. If a static IP is required, the sticker on the device has the device’s MAC address. The admin can create a DHCP static IP address reservation using the MAC address of the device.

Please make sure your firewall is configured to allow access to \*.xsponse.com and that it isn’t using any filters to block data to or from our device. Our service uses web APIs to communicate with the service so there is no need to open ports on your firewall.  

You will also need to order the correct-size sampling tube assembly from us, as described in the next section, [Ordering the sampling tubes](installation-reqs.md#ordering-the-sampling-tubes). 

## Tools required
-	Level
-	Pencil
-	Tape measure
-	Tape (preferably masking tape)
-	[Mounting template](sensor_mounting_template.pdf) for duct-mounted sensors (print out this PDF before starting)
-	Phillips screwdriver
-	Battery-powered impact driver
-	7/8” hole saw

## Ordering the sampling tubes
The duct-mounted sensor is a passive sensing device which uses a sampling tube to draw air into the detector to be sampled and then exhausted back into the air stream. The sampling tube works because of the Bernoulli principle: the air flowing across the end of the exhaust tube creates an area of low pressure which creates a small vacuum in the exhaust tube. Since the sensor is a closed system, the vacuum in the exhaust tube will cause air to be pulled in through the sampling tube.

Because of this process, the sampling tubes must be ordered to fit the ducting, as they need to reach a minimum 2/3 of the way across the duct to function. Our sampling tubes are designed to fit most of the way across the opening to maximize the usable area, while the exhaust tube is designed to be positioned in the middle of the duct to optimize the airflow across it. For example, for an exhaust vent box that is 12” wide, you would order our ST10 sampling tube assembly. In this case, the sampling tube will extend 10” across the duct to draw from the most flow, and the exhaust tube will be 6” long so its end will be in the middle of the duct to be most effective in pulling in air.

A longer sampling tube can also be cut to a shorter size and used. Please make sure to remove the end cap before cutting and then replace it on the end of the tube before installation. The end of the sampling tube must be sealed in order for the device to work properly.

See the next section, [Location](installation-reqs.md#location), for instructions to determine the placement of the device and sampling tubes, which will also determine which sampling tube assembly to order, as shown in the following chart:

| Outside Duct Width | Sampling Tube Assembly |
| :---: | :---: |
| 10” | ST8 |
| 12” | ST10 |
| 14” | ST12 |
| 16” | ST14 |
| 18” | ST16 |
| 20” | ST18 |
| 22” | ST20 |
| 24” | ST22 |

We also have mounting plates for round ducting. Please contact us directly if you need a sampling tube for round ducting.

## Location
### Duct-mounted sensor
To determine the sampling tube assembly you will need to order, first decide where and how the sensor will be installed inside the exhaust vent. The sensor should be installed in the exhaust vent as close to the area where students may be vaping. Most bathrooms have exhaust vents above the toilet stalls, which is where students typically go to vape. If you have more than one exhaust vent, multiple sensors can be installed in the ducts. 

Most exhaust vents have a square box above the ceiling tiles. Ducting is then installed to connect the exhaust vent to the main exhaust fan duct work. Typically, the exhaust vent box will be connected along one side to the main duct, and the other three sides will be available as potential locations. Often the location can be decided by how you will access the box through the ceiling—if there is only one way to get to the box, the sensor will be installed on that side. As the device needs to be connected to a Power-over-Ethernet switch to function, that may be a consideration as well. 

Measure the box across the axis where the sensor will be located and subtract 2 inches from that length. That is the size of sampling tube you will need to order. The exhaust tube will be centered in the duct to optimize the airflow across it.

The sensor can be mounted along the vertical axis so long as the air flows directly into the sampling tube holes.

The sensor should be installed on the metal box directly above the exhaust vent. The sampling tube should be centered about 2” to 4” above the vent. The mounting bracket is 8” tall so keep that in mind when determining the location. You must have enough room above and below the sampling tubes to allow for the sheet metal screws to attach the bracket to the sheet metal. See the template included at the end of this document for reference.

### Standalone sensor
Some bathrooms don’t have an exhaust vent in the right location or don’t have one that is easily accessible. If that is the case, our standalone unit can be used. The standalone unit has its own internal fan which can be connected to an exhaust vent or just left alone in which case the air will be exhausted into the plenum. This model can be installed anywhere a student may vape, including areas other than a bathroom such as a hallway, storage room, closet, office, conference room, or elsewhere.  

The standalone unit should not be installed anywhere near an exhaust vent, as each will be pulling in the surrounding air. If the pull on the air from the exhaust vent is stronger than from the standalone unit, the standalone unit will not be able to sample the air.

Note that the standalone sensor also requires a Power-over-Ethernet connection to the Internet to function, which may be a consideration for placement.
___
*Return to the [VapeDetect index](index.md)*
