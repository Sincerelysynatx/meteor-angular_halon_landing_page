import { Links } from '../../../both/collections/links.collection';
import { Link } from '../../../both/models/link.model';

export function loadLinks(){
    if (Links.find().cursor.count() === 0){
        const links = [{
            url: 'http://google.com',
            title: 'Google',
            desc: 'A place to google stuff'
        }, {
            url: 'http://yahoo.com',
            title: 'Yahoo',
            desc: 'A place to yahoo stuff'
        }, {
            url: 'http://purple.com',
            title: 'Purple',
            desc: 'A place to purple stuff'
        }];

        links.forEach((link: Link) => Links.insert(link));
    }
}