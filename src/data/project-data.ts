import {IProjectCard } from "../Models/project-card-model";

export const CardData: IProjectCard[] = [
  {
    title: 'NBA App',
    subtitle: 'Stack: React, Sql Server and Entity Framework',
    img: `nba.gif`,
    caption:
    'A full stack application users can login create and manage their NBA dream teams.',
    gitHubLink: 'https://github.com/dan933/2022-NBA-Prediction-Application',
    description:'A full stack application created with: React for the frontend, .NET for the API, Auth0 for authentication, SQL server for the database and azure piplines for CI/CD. This was a group project, collaboration was done through github. A user could login create an NBA dream team by adding or removing players from a team, a user was then able to compare two teams to see which team had a better win percentage.',
    youtubeLink: 'https://www.youtube.com/embed/ltSpzfQ_b0k',
    IsGitHubButton: true,
  },
  {
    title: 'RideShare App',
    subtitle: 'Stack: R, Shiny and Leaflet',
    img: 'rideshare.gif',
    caption:
      'A shiny app used to identify profitable areas and times for rideshare drivers.  The app was created with R programming language, leaflet and Shiny.',
    description: 'This application is designed to find the most profitable location for rideshare driving. Based on a drivers previous rideshare history. It reads an excel file with trip details. The income from each trip is grouped by day, time and suburb using an aggregate function. The longatude and latitude of each suburb is found by searching a csv file for a suburb match, in order for leaflet to use for markers. The markers are coloured using a colour pallet the darker the colour the more profitable the location at that time and date.',
    demoURL:'https://daniel-albert.shinyapps.io/Rideshare-project',
    IsGitHubButton: false,
    IsDemoButton: true,
  },
  {
    title: 'Invoice App',
    subtitle: 'Stack: Angular, Sql Server and Entity Framework',
    img: 'invoice.gif',
    caption:
      'An Invoice application that allows the user to create customers and invoices. The invoices can be downloaded as a pdf and can be marked as paid.',
    description:'A full stack invoicing application created with: Angular for the frontend, .NET for the API, and SQL server for the database. The user can perform CRUD operations on the customers and invoices. The data tables are paginated, can be filtered, and sorted. The user can download invoices in pdf format from the client. GST can be added and removed from the invoices.',
    gitHubLink: 'https://github.com/dan933/dna-invoice-application-public',
    youtubeLink:"https://www.youtube.com/embed/KsfIQVZoSdU",
    IsGitHubButton: true,
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