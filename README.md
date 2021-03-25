---
title: '<span id="_c0di6zcs4s8x" class="anchor"></span>**SRS Speedy Wash**'
---

> **Group-13**

**Team Members:**

Aman Aggarwal, 2018327

Gavish Gupta, 2018390

Hardik Saini, 2018391

Prasham Narayan, 2018359

  **Term**   **Definition**
  ---------- -------------------------------------------------------------------------------------------------
  User       Someone who interacts with mobile phone application
  Admin      A system administrator who is given specific permission for managing and controlling the system
  DESC       Description
  RAT        Rational
  DEP        Dependency
  TAG        A unique, persistent identifier
  GIST       A short, simple Description of the concept
  METER      The scale of measure used by the requirement
  MUST       The minimum level required to avoid failure
  PLAN       The level at which success is claimed
  WISH       A desirable level of achievement that may not be attainable through available means
  TBD        To Be Decided

1.  Introduction
    ============

    a.  Purpose of this Document
        ------------------------

        i.  This document contains Software requirements for the project
            > named *Speedywash*.

        ii. The purpose is to have synchronized requirements between
            > users, clients & developers.

    b.  Scope of this document
        ----------------------

        i.  This document specifies the requirements for the application
            > SpeedyWash India.

        ii. The application will have a user/consumer interface and an
            > admin interface. The user interface/application will have
            > the following features:

            -   Android application

            -   Customer login

            -   Browsing Services (such as dry cleaning, washing)

            -   Placing an order

            -   Tracking Order

            -   Payment

            -   View/Change Profile

The admin interface/application will have the following features:-

-   Admin login

-   See all Orders summary.

-   Manage and change the status

-   Track delivery

-   Add riders (for pickup and delivery)

Since we have limited time on our hands, so we expect to deliver the
complete admin interface and the

> The following user application services as our **prime priority**:
> Browsing services, placing an order, and Tracking order.

Overall Description
===================

> This section will provide an overview of the whole system. The system
> is explained in the context of how it interacts with other
> dependencies.

a.  Product perspective - 
    ----------------------

    i.  The system will consist of two parts: one mobile application and
        > one admin interface.

    ii. The mobile application allows to

        1.  Place orders

        2.  Manage subscriptions

        3.  Maintain history or previous orders

        4.  Cancel orders

    iii. Since the application is user-centric, it will need somewhere
        > to store the data. A database will be hosting user and
        > services data; the application will fetch and write to the
        > database depending upon the interface requirement.

    iv. The Admin interface allows application admin to see a list of
        > all the orders placed, manage them, update their status,
        > assign orders to the nearest store.

b.  Product functions - 
    --------------------

> With the user application, the users will search for laundry-related
> services and select a specific service and schedule a pickup for the
> same. The user will also be able to add multiple services at a time to
> the cart. The users will have to pay through UPI; also, the users can
> track their orders.
>
> With the admin application, the admin will be able to see all orders
> summary. Manage and change the status of the orders. Track delivery
> and add riders for pickup and delivery.

a.  User characteristics - 
    -----------------------

    i.  Two types of users will use the application: users and
        > an administrator.

    ii. The administrator will have a different application than
        > the user. In this application, the administrator can see all
        > order’s summary, manage and change orders’ status, add riders,
        > and track orders’ delivery.

    iii. In the user application, a user will be able to place a pickup
        > order (including payment) after authentication and then track
        > his/her order.

b.  Assumptions and dependencies - 
    -------------------------------

    i.  All the dependencies are mentioned in the requirements section.

    ii. Assumptions -

        1.  The user has enough hardware and software requirements to
            > run the application.

        2.  The user has allowed the app to use its current location.

        3.  Active Internet connection.

c.  Apportioning of requirements -
    ------------------------------

    i.  In case of insufficient time, the first version will only
        > contain prime-priority.

d.  Technologies and Stack
    ----------------------

    i.  React-native and expo will be used to develop front-end and
        > application logic (Client)

    ii. Firebase will be used for storing data in backend

    iii. In case where server like behaviour is required firebase-cloud
        > functions can be used (TBD)

    iv. ReactJS will be used to develop web based admin interface (TBD)

    v.  Admin interface will also be connected to firebase

<!-- -->

1.  Functional Requirements(Users)
    ==============================

    a.  Authorization
        -------------

        i.  ID: FR1

        ii. DEP: [*EI1*](#authentication)

        iii. At any moment, the user can be either in an **authorized**
            > or **unauthorized** state.

            -   An authorized user will redirect to the
                > *Homepage* screen.

        iv. If the user is unauthorized, a textbox will appear in front
            > of the user, and he/she will need to enter their contact
            > number (this is the first screen).

            -   An unauthorized user is locked in the first screen and
                > cannot navigate to any other screen.

        v.  Once the user enters ten integer digits, a new button,
            > “**Get** **OTP,**” will be visible.

            -   Contact number length should be &gt;= 10.

        vi. Upon clicking “Get OTP,” the entered contact number is sent
            > to the server, the server will generate an OTP and send it
            > to the contact number.

            -   If the user enters the wrong contact number, he/she will
                > not receive OTP and won’t be able to complete
                > further steps.

        vii. Once the server has sent the OTP, a new text field will
            > appear in front of the user to enter the OTP, which he/she
            > receives on their contact number.

        viii. Once the user enters the correct OTP, he/she will navigate
            > to the ***Info screen*** if the account corresponding to
            > the number is not present in the database. Else he will be
            > redirected to the homepage.

            -   Correct OTP is the OTP generated by the server and sent
                > to the user on the contact number he/she entered.

            -   If the user enters the incorrect OTP, he/she will be
                > alerted to “**OTP mismatch**” and will be required to
                > re-enter OTP.

        ix. In the ***Info screen***, they MUST enter their name, email,
            > and address once entered. The user will now switch from
            > unauthorized to authorized state & will redirect to
            > the Homepage.

            -   If any of the above fields are empty, the user won’t be
                > allowed to navigate to any other screen.

            -   The moment the user is authorized, user details are
                > pushed onto the database, and a session is held in
                > local storage (AsyncStorage).

    b.  Generic Layout
        --------------

        i.  ID: FR2

        ii. All screens will follow this generic layout except the
            > authorization screen.

        iii. It will contain a horizontal header bar, which will hold
            > the following buttons:

            -   SpeedyWash Icon

            -   Cart - Users can see the services they have selected.

            -   Notification icon (Bell icon): Users can see the
                > announcements made by the admin.

        iv. It will also contain a horizontal navigation bar at the
            > bottom of the screen with the following buttons:

            -   Home - The user can click this button at any point in
                > time to go back to the *homepage*

            -   Orders - Users can see ongoing and past orders.

            -   Profile -

            -   Subscription -

    c.  Homepage
        --------

        i.  ID: FR3

        ii. DEP: [*FR1*](#authorization)

        iii. Only an authorized user can see this page.

        iv. The homepage contains a button for each of the following
            > service:

            -   Carpet cleaning

            -   Sofa dry cleaning

            -   Premium wash

            -   Shoe cleaning

            -   Dry cleaning

            -   Steam press

            -   Wash and fold

            -   Wash and iron

            -   Washing

        v.  Upon clicking any button above, the user will navigate to
            > the **service-specific page**.

        vi. One-third of vertical space will be allocated to marketing
            > specific needs.

    d.  Service-specific page
        ---------------------

        i.  ID: FR4

        ii. DEP: [*FR3*](#homepage)

        iii. It will contain the price of the service and an *add to
            > cart* option. Here users can select the quantity of the
            > service required and can add that to the cart.

        iv. After adding to the cart, the users can select more services
            > if they want.

        v.  Upon clicking *Go to cart*, the *Cart* page will
            > be displayed.

    e.  Cart 
        -----

        i.  ID: FR5

        ii. It will contain all the items selected with their respective
            > quantity and price. Here, users can add or delete the
            > item, and he/she can modify its quantity as well.

        iii. The total price payable by the user will be shown at
            > the bottom.

        iv. Also, there will be a button that will redirect the user to
            > the *checkout cart*.

    f.  Checkout Cart
        -------------

        i.  ID: FR6

        ii. DEP: [*FR5*](#cart)

        iii. Users **MUST** select the pickup address from the
            > saved addresses.

            -   If there are no saved addresses, the user will be shown
                > an interface to add a new address.

            -   If the user wants to add a new address, they can add one
                > by clicking the *Add address* button.

        iv. Users will then choose their pickup date and time.

        v.  Users MUST select the delivery address from the
            > saved addresses.

            -   If the user wants to add a new address, they can add one
                > by clicking the *Add address* button.

        vi. Users will then choose their delivery date and time.

        vii. Once pickup and delivery details are finalized, then the
            > user can proceed to the payment option by clicking on the
            > button *Proceed with payment.*

    g.  Proceed with payment
        --------------------

        i.  ID: FR7

        ii. DEP - [*EI3*](#payment)

        iii. There will be two payment options on this page - *Cash
            > & UPI.*

        iv. Once the payment details are finalized, the user can place
            > an order by clicking on the *Place order.*

            -   If the UPI option is selected, then the UPI interface
                > will open where the user will make the payment. As
                > soon as the payment is confirmed, orders will be
                > placed automatically.

            -   If the Cash mode is selected, then the order will be
                > placed instantly.

        v.  Once the order is placed, the admin will be notified with
            > the order details. The user will also receive an email
            > with a detailed DESC of the order.

    h.  Profile
        -------

        i.  ID: FR8

        ii. The profile page displays the profile of the user along with
            > options:

            -   Subscription: Displays list of subscribed PLANs

            -   My Orders: Displays history of orders placed

            -   My cards & Wallet: Attached cards and wallet details

            -   Pricelist: List of price of the services provided

            -   Manage Addresses: Update addresses

            -   Notifications: Switch on/off notifications

            -   Invite Friend: link to share Speedy Wash with friends.

            -   Log out: switch to the unauthorized state.

        iii. The user can edit his profile and update his name,
            > profile-picture, or email.

    i.  Orders
        ------

        i.  ID: FR9

        ii. There will be two options, Active orders and Past orders.

        iii. Active orders will show the details of all the
            > ongoing orders.

            -   The user will have an option to cancel an active order
                > only if the pickup has not been done. The admin will
                > also be notified of the canceled order. In this case,
                > if the user has made any payment beforehand, it will
                > be reimbursed by the admin.

        iv. One can also see the current status of ongoing orders
            > through active orders.

        v.  Past orders will show the details of all the completed and
            > canceled orders.

    j.  Subscription
        ------------

        i.  ID: FR10

        ii. This will display all the packages provided for
            > different services.

2.  Functional Requirements(Admin)
    ==============================

    a.  Admin Login
        -----------

        i.  ID: FR11

        ii. Admin must login through the given user id and password.

    b.  Homepage
        --------

        i.  ID: FR12

        ii. Shows the statistics of total orders, ongoing orders, etc.

        iii. Text box to push notification to the main application.

        iv. Option to upload offer related banners.

    c.  Order Specific Page
        -------------------

        i.  ID: FR13

        ii. It will show the following details of the specific order
            > chosen-

            -   Customer ID

            -   Order type

            -   Order quantity

            -   Total Price

            -   Customer Address

            -   Store Assigned

            -   Current Status

            -   Order Date and Time

            -   Payment Mode

        iii. An option to cancel the order.

3.  External Interfaces
    ===================

    a.  Authentication: 
        ----------------

        i.  ID: EI1

        ii. *firebase.auth()* is used to provide authentication using a
            > phone number.

        iii. The firebase servers generate an OTP and send it to the
            > number that is used in number verification.

    b.  Locate User
        -----------

        i.  ID: EI2

        ii. Google maps API will be used to locate the user.

    c.  Payment
        -------

        i.  ID: EI3

        ii. We will set up UPI for payments.

4.  Performance Requirements
    ========================

    a.  UI response Time
        ----------------

        i.  ID: PR1

        ii. TAG: UiResponseTime

        iii. METER: Measurements obtained from the 1000 searches
            > during testing.

        iv. MUST: No more than 2 seconds, 100% of the time.

        v.  WISH: No more than 1 second, 100% of the time.

    b.  Database response time
        ----------------------

        i.  ID: PR2

        ii. TAG: DatabaseResponseTime

        iii. METER: Measurements obtained from the 1000 requests
            > during testing.

        iv. MUST: No more than 4 seconds, 99% of the time.

        v.  PLAN: No more than 2 seconds, 99% of the time.

        vi. WISH: No more than 1 second, 100% of the time.

    c.  Location Fetch time
        -------------------

        i.  ID: PR3

        ii. TAG: LocationFetchTime

        iii. METER: Measurements obtained from 1000 location retrievals
            > during testing.

        iv. MUST: No more than 5 seconds, 98% of the time.

        v.  PLAN: No more than 3 seconds, 98% of the time.

        vi. WISH: No more than 2 seconds, 100% of the time.

5.  Design constraints
    ==================

    a.  Hard drive Space:
        -----------------

        i.  ID: DC1

        ii. TAG: HardDriveSpace

        iii. GIST: Application’s need for hard drive space.

        iv. METER: Megabytes

        v.  MUST: No more than 250 MB.

        vi. PLAN: No more than 200 MB.

        vii. WISH: No more than 150 MB.

    b.  Application memory usage
        ------------------------

        i.  ID: DC2

        ii. TAG: ApplicationMemoryUsage

        iii. GIST: The amount of operating system memory required by
            > the application.

        iv. METER: Megabytes.

        v.  MUST: No more than 300 MB.

        vi. PLAN: No more than 250 MB.

        vii. WISH: No more than 200 MB.

6.  Non-Functional Attributes
    =========================

    a.  Availability -
        --------------

        i.  ID: NF1

        ii. TAG: SystemAvailability

        iii. GIST: Availability of the system when it is used; the
            > application MUST be connected to the internet.

        iv. METER: Measurements obtained from 20 hours of usage
            > during testing.

        v.  MUST: More than 98% of the time.

        vi. PLAN: More than 99% of the time.

        vii. WISH: 100% of the time.

    b.  Maintainability - 
        ------------------

        i.  Title: SystemMaintainability

        ii. DESC: The application should be easy to extend and test. The
            > code should be easy to understand with
            > proper documentation. Moreover, some testing environments
            > should be set up to test different functions of
            > the application.

        iii. RAT: Implementations of future functions should be simple,
            > and a testing environment is necessary to test
            > the application.

    c.  Portability - 
        --------------

        i.  Title: SystemPortability

        ii. DESC: The application should be portable with Android.

        iii. RAT: Adaptable platform for the application to run on.

    d.  Security - 
        -----------

        i.  TAG: SystemSecurity

        ii. GIST: The security of the system while logging in and
            > making payments.

        iii. METER: Measurements obtained from 20 hours of usage
            > during testing.

        iv. MUST: More than 95% of the time.

        v.  PLAN: More than 98% of the time.

        vi. WISH: 100% of the time.

    e.  Reliability - 
        --------------

        i.  TAG: SystemReliability

        ii. GIST: The reliability of the system.

        iii. METER: Measurements obtained from 20 hours of usage
            > during testing.

        iv. MUST: More than 90% of the time.

        v.  PLAN: More than 94% of the time.

        vi. WISH: More than 97% of the time.

7.  Preliminary schedule & budget
    =============================

  **ID**   **Dependencies**   **Description**            **Release**   **Duration(Team hrs)**
  -------- ------------------ -------------------------- ------------- ------------------------
  FR1      EI1                Authorization              1             7
  FR2                         Generic Layout             1             3
  FR3      FR1                Home Page                  1             5
  FR4      FR3                Service-specific Page      1             5
  FR5                         Cart                       2             4
  FR6      FR5                Checkout Cart              2             6
  FR7      EI3                Proceed with payment       2             3
  FR8                         Profile                    2             4
  FR9                         Order                      3             3
  FR10                        Subscription               3             2
  FR11                        Admin Login                3             2
  FR12                        Admin HomePage             3             6
  FR13                        Orders Specific Page       3             8
  EI1                         Authentication             1             2
  EI2                         Locate user                2             7
  EI3                         Payment                    2             9
  PR1                         UI response time           4             \*
  PR2                         Database response time     4             \*
  PR3                         Location fetch time        4             \*
  DC1                         Hard drive space           4             \*
  DC2                         Application memory usage   4             \*
  NF1                         Availability               4             \*

> **Budget:** Since the initial user base is estimated around 1000
> users, no additional funds are required.

1.  Acceptance Criteria
    ===================

    a.  Authorization

    b.  Payment

    c.  Locate Users

    d.  Cart

    e.  Profile Page

    f.  Home Page

Summary of Meetings with Users/Sponsors

-   Meeting 1:

    -   6th February 2021, All team members and sponsors attend the
        > meeting

    -   Duration: 35-40 minutes

    -   Main points of discussion:

        -   Number of users

        -   Payment

        -   Login interface

        -   Location system

        -   Subscription system

        -   Express order system

        -   Email Billings

    -   Estimate of how much of the duration the sponsor/users spoke in
        > the meeting: 15-20 minutes

    -   Estimate of how much of the duration you/your team members spoke
        > in the meeting: 15-20 minutes

-   Meeting 2:

    -   10th February 2021, All team members and sponsors attend
        > the meeting.

    -   Duration: 25-30 minutes

    -   Main points of discussion:

        -   Sponsor gave feedback on the initial draft.

        -   Prioritization of the functionalities.

        -   Admin interface.

        -   Went through some examples of admin interfaces
            > available online.

    -   Estimate of how much of the duration the sponsor/users spoke in
        > the meeting: 15-20 minutes

    -   Estimate of how much of the duration you/your team members spoke
        > in the meeting: 10-15 minutes

-   Meeting 3: SRS Review Meeting

    -   13th February 2021, All team members and sponsors attended the
        > meeting

    -   Duration: 25-30 minutes

    -   Size of SRS being reviewed : 8

    -   Method of review used: Discussed on a test scenario

    -   List of key issues identified:

        -   Admin Interface scalability

        -   Advertisements

        -   Daily report

    -   Note: Since we already had a discussion on our initial draft,
        > most of the concerns were handled beforehand.
