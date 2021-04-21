export class Trip2 {
    constructor(
        public camper_name: string,
        public camper_total: number,
    ) { }
}

export class Trip {
    constructor(
        public id: number,
        public camperOne_name: string,
        public camperOne_total: number,
        public camperTwo_name: string,
        public camperTwo_total: number,
        public camperThree_name: string,
        public camperThree_total: number,
    ) { }
}