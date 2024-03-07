
const { default: testFunc } = await import("../");

describe("check if things are strings or not", () => {
    test("nothing", async () => {
        expect(testFunc()).toEqual(false);
    });

    test("boolean", async () => {
        expect(testFunc(true)).toEqual(false);
    });

    test("a number", async () => {
        expect(testFunc(123)).toEqual(false);
    });

    test("a string", async () => {
        expect(testFunc("foo")).toEqual(true);
    });

    test("an empty string", async () => {
        expect(testFunc("")).toEqual(true);
    });

    test("a string object", async () => {
        expect(testFunc(new String("bar"))).toEqual(true);
    });
});
