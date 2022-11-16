###### Functional Requirement ######
Back officers 
- Be able to use an admin account to access the
software.
- Be able to manage and retrieve employee information
(resumes, number of days off, …).
- Be able to manage and edit the work schedule of
collectors and janitors.
  + Assign janitors to each area..
  + Create logical routes and notify collectors.
- Be able to manage the status of all vehicles (load,
registration time, fuel, ...)
  + Information about vehicles (fuel consumed and
distance traveled) must be updated every day.
- Be able to assign vehicles to collectors and janitors.
- AA tool to help calculate a reasonable route for
collectors based on fuel quantity and distance.
- Be able to manage the status of MCPs (updated every
15 minutes).
- A communication channel with collectors and janitors.

Collectors and Janitors 
- Be able to use an employee account to access the
software.
- Be able to manage and edit personal information on
the system.
- Be able to track work schedule, daily and weekly tasks
in detail on one page (no need to scroll down)
- A communication channel.
- A system for daily attendance checks and task reports.
- Be able to send feedback about the status of MCPs.

###### Non-functional Requirement ######
Performance 
- Website applications have a response speed of fewer
than 2 seconds.
- Information traffic, data latency less than 1 second
(Message system, MCPs’ status feedback system).
- System response time must be less than 1 second.
- Be able to handle feedback from 100 users
concurrently.

Ease of use 
- Be able to use all functions of the application
proficiently after 30 minutes of training.
- Language alteration (Vietnamese - English).
- User manual in every application.

Reliabilities 
- The average number of failable real-time access to the
system is 2 out of 1000 access times.
- The system must operate 24/7 and the inaccessible
time must not exceed 15 minutes during the operation
time (6:00 -> 21:00) and no more than 30 minutes
outside the operating time.

Security 
- System grants access and privileges to accounts based
on account types (Back officer and Employee)
- Warning for server intrusion.
- PreventingDDoS attacks.
