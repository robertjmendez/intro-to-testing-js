// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when called with "Jane"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when called with "Alex"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when called with "Pat"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when called with no argument', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when called with true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when called with false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what the input', function() {
        expect(typeof isFive("hello")).toBe("boolean");
        expect(typeof isFive(10)).toBe("boolean");
        expect(typeof isFive(null)).toBe("boolean");
        expect(typeof isFive(undefined)).toBe("boolean");
    });
    it('should return true when passed 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function() {
        expect(isFive("5")).toBe(true);
    });
    it('should return false when passed any other value', function() {
        expect(isFive("hello")).toBe(false);
        expect(isFive(10)).toBe(false);
        expect(isFive(null)).toBe(false);
        expect(isFive(undefined)).toBe(false);
    });
});

