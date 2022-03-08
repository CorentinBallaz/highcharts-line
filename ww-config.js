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
                                type: 'Text',
                                options: {
                                    placeholder: 'Type',
                                },
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