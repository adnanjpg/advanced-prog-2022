// 3. Use the methods filter(), map(), forEach() on the JOURNAL array, to illustrate some queries on the data.

class Entry {
    constructor(evt, sq) {
        this.events = evt; this.squirrel = sq
    }
    valueOf() { return this.events.length }
    toString() {
        let s = this.valueOf() + " events"
        if (this.squirrel) s += " ✘";
        return "Entry: " + s
    }
}

const JOURNAL = [
    new Entry(["carrot", "exercise", "weekend"], false),
    new Entry(["bread", "pudding", "brushed teeth", "weekend", "touched tree"], false),
    new Entry(["carrot", "nachos", "brushed teeth", "cycling", "weekend"], false),
    new Entry(["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], false),
    new Entry(["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], false),
    new Entry(["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], false),
    new Entry(["pizza", "brushed teeth", "computer", "work", "touched tree"], false),
    new Entry(["bread", "beer", "brushed teeth", "cycling", "work"], false),
    new Entry(["cauliflower", "brushed teeth", "work"], false),
    new Entry(["pizza", "brushed teeth", "cycling", "work"], false),
    new Entry(["lasagna", "nachos", "brushed teeth", "work"], false),
    new Entry(["brushed teeth", "weekend", "touched tree"], false),
    new Entry(["lettuce", "brushed teeth", "television", "weekend"], false),
    new Entry(["spaghetti", "brushed teeth", "work"], false),
    new Entry(["brushed teeth", "computer", "work"], false),
    new Entry(["lettuce", "nachos", "brushed teeth", "work"], false),
    new Entry(["carrot", "brushed teeth", "running", "work"], false),
    new Entry(["brushed teeth", "work"], false),
    new Entry(["cauliflower", "reading", "weekend"], false),
    new Entry(["bread", "brushed teeth", "weekend"], false),
    new Entry(["lasagna", "brushed teeth", "exercise", "work"], false),
    new Entry(["spaghetti", "brushed teeth", "reading", "work"], false),
    new Entry(["carrot", "ice cream", "brushed teeth", "television", "work"], false),
    new Entry(["spaghetti", "nachos", "work"], false),
    new Entry(["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], false),
    new Entry(["spaghetti", "peanuts", "computer", "weekend"], true),
    new Entry(["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], false),
    new Entry(["potatoes", "ice cream", "brushed teeth", "work"], false),
    new Entry(["peanuts", "brushed teeth", "running", "work"], false),
    new Entry(["potatoes", "exercise", "work"], false),
    new Entry(["pizza", "ice cream", "computer", "work"], false),
    new Entry(["lasagna", "ice cream", "work"], false),
    new Entry(["cauliflower", "candy", "reading", "weekend"], false),
    new Entry(["lasagna", "nachos", "brushed teeth", "running", "weekend"], false),
    new Entry(["potatoes", "brushed teeth", "work"], false),
    new Entry(["carrot", "work"], false),
    new Entry(["pizza", "beer", "work", "dentist"], false),
    new Entry(["lasagna", "pudding", "cycling", "work"], false),
    new Entry(["spaghetti", "brushed teeth", "reading", "work"], false),
    new Entry(["spaghetti", "pudding", "television", "weekend"], false),
    new Entry(["bread", "brushed teeth", "exercise", "weekend"], false),
    new Entry(["lasagna", "peanuts", "work"], true),
    new Entry(["pizza", "work"], false),
    new Entry(["potatoes", "exercise", "work"], false),
    new Entry(["brushed teeth", "exercise", "work"], false),
    new Entry(["spaghetti", "brushed teeth", "television", "work"], false),
    new Entry(["pizza", "cycling", "weekend"], false),
    new Entry(["carrot", "brushed teeth", "weekend"], false),
    new Entry(["carrot", "beer", "brushed teeth", "work"], false),
    new Entry(["pizza", "peanuts", "candy", "work"], true),
    new Entry(["carrot", "peanuts", "brushed teeth", "reading", "work"], false),
    new Entry(["potatoes", "peanuts", "brushed teeth", "work"], false),
    new Entry(["carrot", "nachos", "brushed teeth", "exercise", "work"], false),
    new Entry(["pizza", "peanuts", "brushed teeth", "television", "weekend"], false),
    new Entry(["lasagna", "brushed teeth", "cycling", "weekend"], false),
    new Entry(["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], false),
    new Entry(["lettuce", "brushed teeth", "television", "work"], false),
    new Entry(["potatoes", "brushed teeth", "computer", "work"], false),
    new Entry(["bread", "candy", "work"], false),
    new Entry(["potatoes", "nachos", "work"], false),
    new Entry(["carrot", "pudding", "brushed teeth", "weekend"], false),
    new Entry(["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], false),
    new Entry(["brussel sprouts", "running", "work"], false),
    new Entry(["brushed teeth", "work"], false),
    new Entry(["lettuce", "brushed teeth", "running", "work"], false),
    new Entry(["candy", "brushed teeth", "work"], false),
    new Entry(["brussel sprouts", "brushed teeth", "computer", "work"], false),
    new Entry(["bread", "brushed teeth", "weekend"], false),
    new Entry(["cauliflower", "brushed teeth", "weekend"], false),
    new Entry(["spaghetti", "candy", "television", "work", "touched tree"], false),
    new Entry(["carrot", "pudding", "brushed teeth", "work"], false),
    new Entry(["lettuce", "brushed teeth", "work"], false),
    new Entry(["carrot", "ice cream", "brushed teeth", "cycling", "work"], false),
    new Entry(["pizza", "brushed teeth", "work"], false),
    new Entry(["spaghetti", "peanuts", "exercise", "weekend"], true),
    new Entry(["bread", "beer", "computer", "weekend", "touched tree"], false),
    new Entry(["brushed teeth", "running", "work"], false),
    new Entry(["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], false),
    new Entry(["lasagna", "brushed teeth", "television", "work"], false),
    new Entry(["cauliflower", "brushed teeth", "running", "work"], false),
    new Entry(["carrot", "brushed teeth", "running", "work"], false),
    new Entry(["carrot", "reading", "weekend"], false),
    new Entry(["carrot", "peanuts", "reading", "weekend"], true),
    new Entry(["potatoes", "brushed teeth", "running", "work"], false),
    new Entry(["lasagna", "ice cream", "work", "touched tree"], false),
    new Entry(["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], false),
    new Entry(["pizza", "brushed teeth", "running", "work"], false),
    new Entry(["lettuce", "brushed teeth", "work"], false),
    new Entry(["bread", "brushed teeth", "television", "weekend"], false),
    new Entry(["cauliflower", "peanuts", "brushed teeth", "weekend"], false)
]

let cnt = 0

// how many times did he become a squirrel in the days he ate bread in the weekend
cnt = JOURNAL.filter(e => e.squirrel && e.events.includes("bread") && e.events.includes("weekend")).length
console.log(`he became a squirrel when he ate bread in the weekend ${cnt} times`)
cnt = 0

// how many days did he brush his teeth
JOURNAL.map(e => e.events).forEach(e => e.includes("brushed teeth") ? cnt++ : null);
console.log(`he brushed his teeth ${cnt} times`)
cnt = 0