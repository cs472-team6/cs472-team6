import { v4 as uuidv4 } from 'uuid';

export default class PageComponent {
    id;
    name;
    options;

    constructor(name, options){
        this.id = uuidv4();
        this.name = name;
        this.options = options;
    }
}