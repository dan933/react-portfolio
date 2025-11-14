import { IProjectCard } from "../Models/project-card-model";

export const CardData: IProjectCard[] = [
  {
    title: "Easy Booking",
    subtitle:
      "Technology Stack: Angular, Vue 3, Firebase, Stripe, Sendgrid, google maps api",
    img: "easyBooking.gif",
    caption: `
    A booking schedule application, allowing customers to book a service and pay via stripe.
    This application has an admin panel allowing an admin user to cancel bookings, refund the customer.
    Set business hours and company settings, cancel/refund bookings and visulise revenue through the dashboard.
    Email 
    `,
    demoURL: "https://trades-booking-system.web.app/",
    gitHubLink:
      "https://github.com/dan933/trades-booking-system-vue-firebase-prototype",
    IsGitHubButton: true,
    IsDemoButton: true,
  },
  {
    title: "Invoice Pro",
    subtitle:
      "Technology Stack: Angular, Postgres Sql, Entity Framework core, Azure Cloud, Azure Bicep (Infrastructure as Code), Sendgrid",
    img: "invoicePro.gif",
    caption: `An Invoice application that allows the user to create customers and invoices. The invoices can be downloaded as a pdf and can be marked as paid.`,
    description:
      "A full stack invoicing application created with: Angular for the frontend, .NET for the API, and Postgres SQL for the database. The user can perform CRUD operations on the customers and invoices. The data tables are paginated, can be filtered, and sorted. The user can download invoices in pdf format from the client. GST can be added and removed from the invoices.",
    gitHubLink: "https://github.com/dan933/invoicing-application",
    demoURL: "https://invoicepro-app.azurewebsites.net/",
    IsGitHubButton: true,
    IsDemoButton: true,
  },
  {
    title: "NBA App",
    subtitle: "Technology Stack: React, Sql Server and Entity Framework",
    img: `nba.gif`,
    caption: `A full stack application users can login create and manage their NBA dream teams.
    Building this app gave me experience working with other developers on GitHub.`,
    gitHubLink: "https://github.com/dan933/2022-NBA-Prediction-Application",
    description:
      "A full stack application created with: React for the frontend, .NET for the API, Auth0 for authentication, SQL server for the database and azure piplines for CI/CD. This was a group project, collaboration was done through github. A user could login create an NBA dream team by adding or removing players from a team, a user was then able to compare two teams to see which team had a better win percentage.",
    youtubeLink: "https://www.youtube.com/embed/ltSpzfQ_b0k",
    IsGitHubButton: true,
  },
  {
    title: "Image App",
    subtitle: "Technology Stack: Angular and FireBase",
    img: `image.gif`,
    caption: `
      Allows users to create an account or login with google.
      A user can upload images and edit card captions the captions can then be listened to as audio.
      I built this app as a learning tool for a friend's child that is living with autism.
      `,
    gitHubLink: "https://github.com/dan933/image-accessibility-project",
    description: `An application created with Angular and Firebase. 
    Allows users to create an account or login with google.
    A user can upload images and edit card captions the captions can then be listened to as audio.`,
    IsGitHubButton: true,
    demoURL: "https://image-learn-app.web.app/",
    IsDemoButton: true,
  },
  {
    title: "RideShare App",
    subtitle: "Technology Stack: R, Shiny and Leaflet",
    img: "rideshare.gif",
    caption: `A shiny app used to identify profitable areas and times for rideshare drivers.
      The app was created with R programming language, leaflet and Shiny.
      I built this app to learn different technologies and how to create interactive maps.
      `,
    description:
      "This application is designed to find the most profitable location for rideshare driving. Based on a drivers previous rideshare history. It reads an excel file with trip details. The income from each trip is grouped by day, time and suburb using an aggregate function. The longatude and latitude of each suburb is found by searching a csv file for a suburb match, in order for leaflet to use for markers. The markers are coloured using a colour pallet the darker the colour the more profitable the location at that time and date.",
    demoURL:
      "https://daniel-albert.shinyapps.io/Rideshare-app/?_ga=2.69919888.120105246.1665634028-703680541.1665634028",
    gitHubLink: "https://github.com/dan933/Rideshare-project",
    IsGitHubButton: true,
    IsDemoButton: true,
  },
  // {
  //   title: 'Access Invoice relational database',
  //   subtitle: 'Stack: MS Access',
  //   img: 'Access_Example.jpg',
  //   caption: 'A Microsoft Access application to manage a company’s invoices.',
  //   IsGitHubButton: false,
  // },
  // {
  //   title: 'DNA Match',
  //   subtitle: 'Stack: Python',
  //   img: 'DNA_Example.png',
  //   caption:
  //     'A Python program that returns the name of a person when there is a DNA match.',
  //   IsGitHubButton: false,
  // },
];
