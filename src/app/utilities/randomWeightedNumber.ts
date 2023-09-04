export class WeightedRandomPicker<T> {
    private items: T[];
    private cumulativeWeights: number[];

    constructor(items: T[], weights: number[]) {
        if (items.length !== weights.length) {
            throw new Error("Number of items and weights must be the same.");
        }

        this.items = items;
        this.cumulativeWeights = [];

        let cumulativeWeight = 0;
        for (const weight of weights) {
            cumulativeWeight += weight;
            this.cumulativeWeights.push(cumulativeWeight);
        }
    }

    pickRandom(): T {
        const randomValue = Math.random() * this.cumulativeWeights[this.cumulativeWeights.length - 1];
        const index = this.binarySearch(this.cumulativeWeights, randomValue);
        return this.items[index];
    }

    private binarySearch(arr: number[], target: number): number {
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
}
