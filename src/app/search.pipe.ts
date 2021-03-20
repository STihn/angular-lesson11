import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false,
})
export class SearchPipe implements PipeTransform {

  transform(collection, value) {
    if(!collection) {
      return false;
    }
    return collection.filter(item => {
      return item.name.toLowerCase().includes(value.toLowerCase()) || item.username.toLowerCase().includes(value.toLowerCase());
    });
  }
}
