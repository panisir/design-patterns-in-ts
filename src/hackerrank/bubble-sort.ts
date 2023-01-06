function countSwaps(a: number[]): void {
    let countSwaps = bubbleSort(a);
    console.log(`Array is sorted in ${countSwaps} swaps.`);
    console.log('First Element: ' + a[0]);
    console.log('Last Element: ' + a[a.length - 1]);
}

function bubbleSort(arr: number[]): number {
    let swapsCount: number = 0;
    const n: number = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr);
                swapsCount = swapsCount + 1;
            }
        }
    }
    return swapsCount;
}

function swap(n1: number, n2: number, arr: number[]): void {
    let temp: number;
    temp = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = temp;
}