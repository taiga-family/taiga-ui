var path = require('./index');
const s = path.sep;

describe("canonical-path", function() {
  describe("normalize", function() {
    it("should return a normalized path only using forward slashes", function() {
      expect(path.normalize('a/c/../b')).toEqual('a/b');
      expect(path.normalize(`a${s}c${s}..${s}b`)).toEqual('a/b');
    });
  });

  describe("join", function() {
    it("should join paths only using forward slashes", function() {
      expect(path.join('a/b', 'c/d')).toEqual('a/b/c/d');
      expect(path.join(`a${s}b`, `c${s}d`)).toEqual('a/b/c/d');
    });
  });

  describe("resolve", function() {
    it("should return a resolved path only using forward slashes", function() {
      expect(path.resolve('/a/b', 'x/../c')).toEqual(path.resolve('/') + 'a/b/c');
      expect(path.resolve(`a${s}c${s}..${s}b`)).toEqual(path.resolve('') + '/a/b');
    });
  });

  describe("relative", function() {
    it("should return a relative path only using forward slashes", function() {
      expect(path.relative('a/b', 'a/d/e/f')).toEqual('../d/e/f');
      expect(path.relative(`a${s}b`, `a${s}d${s}e${s}f`)).toEqual('../d/e/f');
    });
  });

  describe("dirname", function() {
    it("should return the dirname of a path only using forward slashes", function() {
      expect(path.dirname('a/b/c')).toEqual('a/b');
      expect(path.dirname(`a${s}b${s}c`)).toEqual('a/b');
    });
  });

  describe("format", function() {
    it("should return a formatted path only using forward slashes", function() {
      expect(path.format({dir: 'a/b', base: 'c'})).toEqual('a/b/c');
      expect(path.format({dir: `a${s}b`, base: 'c'})).toEqual('a/b/c');
    });
  });

  describe("canonical", function() {
    it("should return a path with forward slashes", function() {
      expect(path.canonical('a'+path.sep+'b'+path.sep+'c')).toEqual('a/b/c');
    });
  });
});