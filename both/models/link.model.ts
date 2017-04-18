import { CollectionObject } from './collection-object.model';

export interface Link extends CollectionObject {
    url: string;
    title: string;
    desc: string;
    order: number;
    owner?: string;
}