import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFor'
})
export class FilterPipe implements PipeTransform {

  /**
   * Takes a list and a search string for which the list
   * would be filtered by. 
   * 
   * @returns a list that contains all items that includes
   * the search text
   */
  transform(items: any[], searchText: string): any[]  {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
