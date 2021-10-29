module.exports = targets => {
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'MyGreetingRoute',
            pattern: '/greeting/:who?',
            path: require.resolve('../components/greet/GreetingPage.js')
        });
        routes.push({
            name: 'ContactRoute',
            pattern: '/contact',
            path: require.resolve('../components/contact/ContactInfo.js')
        });
        routes.push({
            name: 'SignInRoute',
            pattern: '/signin',
            path: require.resolve('../components/SignInPageCustom')
        });
        return routes;
    });
};
