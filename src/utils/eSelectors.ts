export const eLandingPageSelectors = {
    cookiesModalAgreeButton: {
        selector: {
            css: '.buttons-wrapper',
            testId: 'handle-accept-all-button'
        },
    },
    menuBar: {
        selector: {
            css: 'ul[label=Menubar]',
        },
        ourModels: {
            selector: {
                text: 'Our models'
            },
        }
    },
    firstLevelMenuBar: {
        selector: {
            css: '[slot=seamless-vmos-flyout]',
        },
        hatchbackItem: {
            selector: {
                text: 'Hatchbacks',
            },
        }
    },
    secondLevelMenuBar: {
        hatchback: {
            selector: {
                css: '[flyout-title=Hatchbacks][is-secondary-vmos-flyout=true]',
            },
            A_Class_HatchbackItem: {
                selector: {
                    text: ' A-Class Hatchback '
                },
            }
        }
    },

};
