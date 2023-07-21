function qs(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }
  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];

  let i = lo;
  let j = hi - 1;

  while(i <= j) {
    if(arr[i] > pivot && arr[j] < pivot) {
      const tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = tmp
    }
    if(arr[i] < pivot) {
      i++
    }
    if(arr[j] > pivot) {
      j--
    }
}

  arr[hi] = arr[i]
  arr[i] = pivot

  const idx = i;

  return idx;
}
export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1);
}
