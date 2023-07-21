export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  parent(idx: number) {
    const pIdx = Math.floor((idx - 1) / 2);
    return pIdx;
  }

  childL(idx: number) {
    const clIdx = idx * 2 + 1;
    return clIdx;
  }

  childR(idx: number) {
    const crIdx = idx * 2 + 2;
    return crIdx;
  }

  heapifyUp(idx: number): void {
    if (idx === 0) return;

    const p = this.parent(idx);
    const parentV = this.data[p];
    const v = this.data[idx];

    if (parentV > v) {
      this.data[idx] = parentV;
      this.data[p] = v;
      this.heapifyUp(p);
    };

  }

  heapifyDown(idx: number) {
    const lIdx = this.childL(idx);
    const rIdx = this.childR(idx);
    
    if (idx >= this.length || lIdx >= this.length) return;
    
    const v = this.data[idx];
    const lV = this.data[lIdx]
    const rV = this.data[rIdx];

    
    if (lV > rV && v > rV) {
      this.data[idx] = rV;
      this.data[rIdx] = v;
      this.heapifyDown(rIdx);
    } else if (rV > lV && v > lV) {
      this.data[idx] = lV;
      this.data[lIdx] = v;
      this.heapifyDown(lIdx);
    } 

  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    const root = this.data[0];
    if (this.length === 0) {
      return NaN;
    };

    this.length--;
    if (this.length === 0) {
      this.data = []
      return root;
    }
    const v = this.data[this.length];
    
    this.data[0] = v;
    
    this.heapifyDown(0);

    return root;
  }
}