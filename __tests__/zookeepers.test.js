const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");

jest.mock('fs');
test("creates an zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Bob", id: "jhgdja3ng2" },
        zookeepers
    );

    expect(zookeeper.name).toBe("Bob");
    expect(zookeeper.id).toBe("jhgdja3ng2");
});

test("filter by query", () => {
    const startingZookeepers = [
        {
            "id": "2",
            "name": "Isabella",
            "age": 67,
            "favoriteAnimal": "bear"
        },
        {
            "id": "3",
            "name": "Linda",
            "age": 48,
            "favoriteAnimal": "otter"
        },
    ];
    const updatezookeepers = filterByQuery({ age: "67" }, startingZookeepers)

    expect(updatezookeepers.length).toEqual(1);
});

test("finds by id", () => {
    const startingZookeepers = [
        {
            "id": "2",
            "name": "Isabella",
            "age": 67,
            "favoriteAnimal": "bear"
        },
        {
            "id": "3",
            "name": "Linda",
            "age": 48,
            "favoriteAnimal": "otter"
        },
    ];

    const result = findById("2", startingZookeepers);

    expect(result.name).toBe("Isabella");
});

test("validates age", () => {
    const zookeeper = {
        "id": "2",
        "name": "Isabella",
        "age": 67,
        "favoriteAnimal": "bear"
    };

    const invalidZookeeper = {
        "id": "3",
        "name": "Linda",
        "age": " ",
        "favoriteAnimal": "otter"
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});