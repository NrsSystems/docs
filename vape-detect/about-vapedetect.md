---
title: About the VapeDetect system
abstract: This page describes the basic information about the XSPONSE VapeDetect service and devices.
---
Before you get started, it is important to understand how the system is designed. We have three main components: VapeDetect, action plans, and contacts. 
- _VapeDetect_ is our automated system for monitoring locations for vaping activity, using duct-mounted sensor devices. You must associate each sensor with your XSPONSE account before you can use it. See the [VapeDetect Management section](vapedetect-management.md) for more information.
- An _action plan_ is a set of one or more actions that happen automatically in response to a trigger event, such as a VapeDetect sensor sending an alert about vaping activity. These actions can include sending email or SMS, activating a third-party API, or posting information on an associated XSPONSE Digital Display device. See the [Action Plans section](../general-ops/action-plans.md) for more information. 
- A _contact_ is a person listed in the service as a potential recipient of messages in response to an action plan being triggered. Contacts do not need to be users of the XSPONSE service. See the [Contacts section](../general-ops/contacts-management.md) for more information.

You manage your XSPONSE service through the XSPONSE website, which provides a dashboard through which you can access each of these components. The site features a consistent look and feel, with every page providing the same base functions, to make navigation easier. See the [XSPONSE Site Overview section](../general-ops/site-overview.md) and the [Dashboard section](../general-ops/dashboard.md) for more information.

The VapeDetect duct-mounted sensor is a passive sensing device which constantly monitors the airflow moving into the duct for traces of the chemicals caused by vaping. The device uses a sampling tube to draw air into the detector to be tested every second by nine sensors and then exhausted back into the air stream. Every ten seconds, the device sends the rolling average of test results to the service. When a sensor detects those chemicals in the air above a pre-configured threshold amount, the device sends an alert to the XSPONSE service, triggering an action plan. The service will then follow the action plan triggered by the alert, as configured in advance by you. Once the sensors no longer detect elevated levels of the chemicals, the device returns to its normal monitoring state.

___
*Return to the [VapeDetect index](index.md)*
