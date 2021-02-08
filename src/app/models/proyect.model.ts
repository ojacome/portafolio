import { NgxGalleryImage } from "@kolkov/ngx-gallery";

export interface Proyect {
    _id:                string;
    title:              string;
    description:        string;
    technologies:       Array<string>;
    type:               string;
    important:          number;
    github?:            string;    
    web_site?:          string;
    album?:             NgxGalleryImage[]
}

