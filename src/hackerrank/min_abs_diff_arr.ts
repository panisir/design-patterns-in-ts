function minimumAbsoluteDifference(arr: number[]): number {
    // PrepareInterview Preparation KitGreedy AlgorithmsMinimum Absolute Difference in an Array
    
    // Write your code here
    // bubbleSort(arr);
    arr.sort(function (a, b) {
        return a - b;
    });
    const n: number = arr.length;
    const differences: number[] = [];
    for (let i = 0; i < n; i++) {
        let difference = Math.abs(arr[i] - arr[i + 1]);
        differences.push(difference);
    }

    let min: number = differences[0];
    for (let i = 0; i < differences.length; i++) {
        if (differences[i] < min) {
            min = differences[i];
        }
    }
    return min;

}

function bubbleSort(arr: number[]): void {
    const n: number = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr);
            }
        }
    }
}

function swap(n1: number, n2: number, arr: number[]): void {
    let temp: number;
    temp = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = temp;
}