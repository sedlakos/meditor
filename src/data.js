export default {
    items: [
        {
            id: 1,
            field: 'h1',
            html: 'This is my Awesome Editor',
        },
        {
            field: 'container',
            rows: [
                 {
                    class: 'col-6',
                    items: [{
                        field: 'p',
                        html: 'This is my Awesome Column',
                    },]
                },
                 {
                    class: 'col-6',
                    items: [
                        {
                            field: 'p',
                            html: 'This is my Awesome Column',
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            field: 'p',
            html: 'Start writing',
        },
        {
            id: 3,
            field: 'p',
            html: 'Start writing',
        },
    ]
}