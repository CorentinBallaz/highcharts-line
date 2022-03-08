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
            type: "Info",
            options: {
                text: { fr: 'Séries de données', en: 'Data series'},
            },
            responsive: true,
            section: 'settings',
            bindable: true,
            defaultValue: [{
                type: "column",
                name: "p20",
                color: "#d87b04",
                lineWidth: 0,
                data: [],
        },]
    }
}
};