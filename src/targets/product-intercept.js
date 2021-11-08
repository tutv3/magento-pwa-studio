module.exports = targets => {
    // Wrap the useProductFullDetail talon with this extension
    const peregrineTargets = targets.of('@magento/peregrine');
    const talonsTarget = peregrineTargets.talons;

    talonsTarget.tap(talonWrapperConfig => {
        talonWrapperConfig.ProductFullDetail.useProductFullDetail.wrapWith(
            'my-extension'
        );
    });

    // Set the buildpack features required by this extension
    const builtins = targets.of('@magento/pwa-buildpack');
    builtins.specialFeatures.tap(featuresByModule => {
        featuresByModule['@my-extension/my-product-page'] = {
            // Wrapper modules must be ES Modules
            esModules: true
        };
    });
};
