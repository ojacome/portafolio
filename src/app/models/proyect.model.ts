export interface Proyect {
    id:                 number;
    title:              string;
    description:        string;
    technologies:       Array<string>;
    type:               string;
    images:             Array<Image>;
    github?:            string;    
    web_site?:          string;
}

export interface Image {
    id:                 number;
    name:               string;
    url:                string; 
    important:          boolean;
}