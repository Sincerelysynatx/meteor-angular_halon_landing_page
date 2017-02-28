import { CollectionObject } from './collection-object.model';
import { Link } from './link.model';

export interface Group extends CollectionObject {
    group_title: string;
    group_id: string;
    links: Array<Link>;
}