<img src="https://www.bybrand.io/blog/wp-content/uploads/2018/11/product-hunt-logo-vertical-orange-1.png" height="200px" align="center"/>

[![Netlify Status](https://api.netlify.com/api/v1/badges/cca3c45b-26c0-47e4-85ce-0fa7f91e3866/deploy-status)](https://app.netlify.com/sites/product-hunt-app/deploys)

https://product-hunt-app.netlify.app

The goal is to build a web app to display [Product Hunt](https://www.producthunt.com/) most popular and most recent posts.

To fetch the data, the following Product Hunt public graphql API was used: https://api.producthunt.com/v2/docs

To build the layout, the design below was used as inspiration (More details at: https://dribbble.com/shots/5650328/attachments/5650328-ProductHunt-Mobile-App-Redesign-Day-338-365-Project365?mode=media)

![image](https://user-images.githubusercontent.com/5726140/106479379-090bd680-6489-11eb-9df8-689a846a2643.png)

## setup

- clone this repo.
- install the dependencies by running `yarn install`
- Create a `.env` file at the root of the project with the `REACT_APP_ACCESS_TOKEN` env variable. Ex: `REACT_APP_ACCESS_TOKEN = YOUR_PRODUCT_HUNT_DEVELOPER_TOKEN` (if yout don't have a one, login to https://www.producthunt.com and then you can create the token at https://www.producthunt.com/v2/oauth/applications)
- run `yarn run start`.

To run the unit tests and check coverage:
- `yarn test:coverage`

## Next steps

- Add i18n
- Add Cypress E2E tests
- Add component documentation (like Docz, Storybook)
- Add Upvote feature
- Add Posts searching feature
- Add Codecov integration
- Add Sentry integration

