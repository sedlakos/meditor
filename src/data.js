import {CmdDefault} from "./model/toolbox/CmdDefault";
import {CmdDomExec} from "./model/toolbox/CmdDomExec";

export default {
    blocks: [
        {
            key: 'heading1',
            field: 'text',
            tag: 'h1',
            placeholder: 'This is my Awesome Editor',
            html: 'This is my Awesome Editor',
            actions: [
                {action: 'remove', class: 'fa fa-trash'},
                {action: 'remove', class: 'fa fa-trash'},
                {action: 'remove', class: 'fa fa-trash'},
            ],
        },
        {
            key: 'container',
            field: 'container',
            // TODO: how to draw container functions ?
            actions: [
                {action: 'remove', class: 'fa fa-trash'},
                {action: 'remove', class: 'fa fa-trash'},
                {action: 'remove', class: 'fa fa-trash'},
            ],
            rows: [
                {
                    items: [{
                        key: 'heading1',
                        field: 'text',
                        tag: 'p',
                        placeholder: 'This is my Awesome Column',
                        html: 'This is my Awesome Column',
                        actions: [
                            {action: 'remove', class: 'fa fa-trash'},
                            {action: 'remove', class: 'fa fa-trash'},
                        ],
                    },]
                },
                {
                    items: [
                        {
                            key: 'heading1',
                            field: 'text',
                            tag: 'p',
                            placeholder: 'This is my Awesome Column',
                            html: 'This is my Awesome Column',
                            actions: [
                                {action: 'remove', class: 'fa fa-trash'},
                                {action: 'remove', class: 'fa fa-trash'},
                            ],
                        },
                    ]
                },
            ]
        },
        {
            key: 'paragraph',
            field: 'text',
            tag: 'p',
            html: 'Start writing',
            actions: [
                {action: 'remove', class: 'fa fa-trash'},
                {action: 'remove', class: 'fa fa-trash'},
            ],
        },
        {
            key: 'paragraph',
            field: 'text',
            tag: 'p',
            html: 'Start writing',
            actions: [
                {action: 'remove', class: 'fa fa-trash'},
                {action: 'remove', class: 'fa fa-trash'},
            ],
        }
    ]
}