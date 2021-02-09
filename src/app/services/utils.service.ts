import { Injectable } from '@angular/core';
import { PartialParseTree } from '@jlguenego/syntax-analysis';
import { Tree } from '@jlguenego/tree';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  cs143s03 =
    'https://web.stanford.edu/class/archive/cs/cs143/cs143.1128/lectures/03/Slides03.pdf';
  constructor() {}

  itemToString(item: unknown | null): string {
    if (!item) {
      return '';
    }
    const it = item as Tree<PartialParseTree>;
    return it.node.sententialForm.toString();
  }
}
