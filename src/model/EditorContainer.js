import {Container} from 'unstated'
import {CmdDefault} from "./toolbox/CmdDefault";
import {CmdDomExec} from "./toolbox/CmdDomExec";

export class EditorContainer extends Container {
    state = {
        blocks: [
            {
                key: 'heading1',
                field: 'text',
                tag: 'h1',
                placeholder: 'This is my Awesome Editor',
                html: 'This is my Awesome Editor',
                actions: [
                    new CmdDefault('remove', 'fa fa-trash'),
                    new CmdDomExec('bold', 'fa fa-bold'),
                    new CmdDomExec('italic', 'fa fa-italic'),
                ],
            },
            {
                key: 'container',
                field: 'container',
                actions: [
                    new CmdDefault('remove', 'fa fa-trash'),
                    new CmdDomExec('bold', 'fa fa-bold'),
                    new CmdDomExec('italic', 'fa fa-italic'),
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
                                new CmdDefault('remove', 'fa fa-trash'),
                                new CmdDomExec('bold', 'fa fa-bold'),
                                new CmdDomExec('italic', 'fa fa-italic'),
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
                                    new CmdDefault('remove', 'fa fa-trash'),
                                    new CmdDomExec('bold', 'fa fa-bold'),
                                    new CmdDomExec('italic', 'fa fa-italic'),
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
                    new CmdDomExec('bold', 'fa fa-bold'),
                    new CmdDomExec('italic', 'fa fa-italic'),
                ],
            },
            {
                key: 'paragraph',
                field: 'text',
                tag: 'p',
                html: 'Start writing',
                actions: [
                    new CmdDomExec('bold', 'fa fa-bold'),
                    new CmdDomExec('italic', 'fa fa-italic'),
                ],
            }
        ]
    }

    remove = (idx) => {
        let blocks = this.state.blocks

    }
    swap = (idx1, idx2) => {
    }

}