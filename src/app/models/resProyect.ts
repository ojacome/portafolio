import { Proyect } from "./proyect.model";

export interface ResProyect {
    ok:       boolean;
    proyects: Proyects;
}

export interface Proyects {
    docs:          Proyect[];
    totalDocs:     number;
    limit:         number;
    totalPages:    number;
    page:          number;
    pagingCounter: number;
    hasPrevPage:   boolean;
    hasNextPage:   boolean;
    prevPage:      null;
    nextPage:      number;
}

