export class Page<T> {
    // capacity: number;
    // current: number;

    constructor(
        public contents: T[],
        public total: number,
        public offset: number,
        public limit: number
    ) {

    }

    get length() {
        return Math.ceil(this.total / this.limit);
    }
    get capacity() {
        return this.length * this.limit;
    }
    get current() {
        return 1 + this.offset / this.limit;
    }

    toJSON() {
        const obj = {
            total: this.total,
            offset: this.offset,
            limit: this.limit,
            length: this.length,
            capacity: this.capacity,
            current: this.current,
            contents: this.contents
        };

        return obj;
    }
}

// const p = new Page([1], 121, 20, 10);

// console.log({ p }, JSON.stringify(p));
