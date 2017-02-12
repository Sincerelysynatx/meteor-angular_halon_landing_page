import { CollectionObject } from './collection-object.model';
import { Link } from './link.model';

export interface Group extends CollectionObject {
    links: Array<Link>;
}