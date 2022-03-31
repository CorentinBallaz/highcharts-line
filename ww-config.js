export default {
    editor: {
        label: {
            fr: "Highchart Stock",
            en: "Highchart Stock",
        },
        icon: 'fontawesome/solid/chart-line',
    },
    properties: {
        title: {
            label: {
                fr: "Titre",
                en: "Title",
            },
            type: "Text",
            bindable: true,
            responsive: true,
            defaultValue: "Here is title",
        },
        subtitle: {
            label: {
                fr: "Sous-titre",
                en: "Subtitle",
            },
            type: "Text",
            bindable: true,
            responsive: true,
            defaultValue: "Here is subtitle",
        },
        fontFamily: {
            label: {
                en: 'Font family',
                fr: 'Font',
            },
            type: 'FontFamily',
            responsive: true,
            states: true,
        },
        backgroundColor: {
            label: {
                fr: "Couleur de fond",
                en: "Background Color",
            },
            type: "Color",
            responsive: true,
            defaultValue: "white",
        },
        yAxisTitle: {
            label: {
                fr: "légende de l'axe Y",
                en: "Y-axis legend",
            },
            type: "Text",
            bindable: true,
            responsive: true,
            defaultValue: "Y Axis",
        },
        buttonColor: {
            label: {
                fr: "Couleur des boutons temporels",
                en: "Color of the time buttons",
            },
            type: "Color",
            responsive: true,
            defaultValue: "#000000",
        },
        rangeSelectorColor: {
            label: {
                fr: "Couleur de la selection temporelle",
                en: "Color of the time selector",
            },
            type: "Color",
            responsive: true,
            defaultValue: "#000000",
        },
        suffixValue: {
            label: {
                fr: "Unité",
                en: "Unit",
            },
            type: 'Text',
            options: {
                placeholder: 'Unit of the serie',
            },
            bindable: true,
        },
        isFull: {
            label: {
                fr: "full",
                en: "full",
            },
            type: 'OnOff',
            bindable: true,
        },
        series: {
            label: {
                fr: "Séries de données",
                en: "Data series",
            },
            section: 'settings',
            type: 'Array',
            options: {
                item: {
                    type: 'Object',
                    options: {
                        item: {
                            name: {
                                label: {
                                    fr: "Nom",
                                    en: "Name",
                                },
                                type: 'Text',
                                options: {
                                    placeholder: 'Name of the serie',
                                },
                                bindable: true,
                            },
                            type: {
                                label: {
                                    fr: "Type",
                                    en: "Type",
                                },
                                type: 'TextSelect',
                                options: {
                                    options: [
                                        { value: 'spline', label: { en: 'Line', fr: 'Ligne' } },
                                        { value: 'area', label: { en: 'Area', fr: 'Aire' } },
                                        { value: 'column', label: { en: 'Bar', fr: 'Barre' } },
                                        { value: 'areasplinerange', label: { en: 'Range Area', fr: 'Aire remplie' } },
                                    ],
                                },
                                defaultValue: 'spline',
                                bindable: true,
                            },
                            color: {
                                label: {
                                    fr: "Couleur",
                                    en: "Color",
                                },
                                type: 'Color',
                                options: {
                                    placeholder: 'Color',
                                },
                                bindable: true,
                            },
                            negativeColor: {
                                label: {
                                    fr: "Couleur négative",
                                    en: "Negative Color",
                                },
                                type: 'Color',
                                options: {
                                    placeholder: 'Negative Color',
                                },
                                defaultValue: '',
                                bindable: true,
                            },
                            opacity: {
                                label: {
                                    fr: "Opacité",
                                    en: "Opacity",
                                },
                                type: 'Number',
                                defaultValue: 1,
                                bindable: true,
                            },
                            lineWidth: {
                                label: {
                                    fr: "Line Width",
                                    en: "Épaisseur de ligne",
                                },
                                options: {
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                },
                                type: 'Number',
                                defaultValue: 2,
                                bindable: true,
                            },
                            visible: {
                                label: {
                                    fr: "Visible",
                                    en: "Visible",
                                },
                                type: 'OnOff',
                                defaultValue: true,
                                bindable: true,
                            },
                            data: {
                                label: {
                                    fr: "Données",
                                    en: "Data",
                                },
                                type: 'Info',
                                bindable: true,
                            },
                        },
                    },
                },
            },
            // hidden: content => content.submitAction !== 'zapier-hook' && content.submitAction !== 'custom-request',
            defaultValue: [],
        },
    }
};