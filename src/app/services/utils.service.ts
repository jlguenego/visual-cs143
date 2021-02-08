import { Injectable } from '@angular/core';
import { PartialParseTree } from '@jlguenego/syntax-analysis';
import { Tree } from '@jlguenego/tree';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  itemToString(item: unknown | null): string {
    if (!item) {
      return '';
    }
    const it = item as Tree<PartialParseTree>;
    return it.node.sententialForm.toString();
  }
}
