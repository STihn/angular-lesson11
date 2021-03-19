import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(collection: any, value) {
    return collection.filter(item => {
      return item.name.toLowerCase().includes(value) || item.username.toLowerCase().includes(value);
    });
  }
}
