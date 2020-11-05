# Device Setup

To set up your XSPONSE Duct Mounted Sensor, you will need to provide:
-	An Internet connection.
-	A Power-over-Ethernet (POE) network switch.
-	A Cat 5 (Ethernet) cable.

The sensor device requires access to a DHCP server (to get an IP address) and direct access to the Internet. The DHCP server can be configured to give the device any IP address or a static one.

Please make sure your firewall is configured to allow access to \*.xsponse.com and that it isn’t using any filters to block data to or from our device. Our service uses web APIs to communicate with the service so there is no need to open ports on your firewall. 

Once the sensor device has been installed (see the [Installation Requirements section](installation-reqs.md) and [Installation Processs section](installation-process.md) for details) and connected to a POE-enabled switch, it will take about a minute to boot and stabilize. During this time, the LED will be yellow. When the sensors have stabilized and the device is ready to connect to the service, the LED will turn orange or white. Orange indicates that the device has contacted our service, but it is not associated with an account. White indicates that the device has established communications with our service and is sending data successfully. See the [VapeDetect section](vapedetect-management.md) for more information on associating your sensor devices with your account and managing them. See the [Getting Started section](../general-ops/account-setup.md) for more information on setting up your XSPONSE account.
