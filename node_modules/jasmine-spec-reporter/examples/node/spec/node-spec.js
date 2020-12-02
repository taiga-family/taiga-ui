describe('first suite', () => {
  it('should be ok', () => {
    expect(true).toBe(true);
  });

  it('should be pending', () => {
    pending('will work soon');
    expect(true).toBe(true);
  });

  it('should failed', () => {
    expect(true).toBe(false);
  });

  it('should be ok', () => {
    expect(true).toBe(true);
  });
});

describe('second suite', () => {
  xit('should be pending', () => {
    expect(true).toBe(false);
  });

  it('should be ok', () => {
    expect(true).toBe(true);
  });

  describe('first child suite', () => {
    describe('first grandchild suite', () => {
      it('should failed', () => {
        expect(true).toBe(false);
        expect(true).toBe(false);
        expect(true).toBe(true);
      });

      it('should failed', () => {
        expect(true).toBe(false);
      });

      it('should be ok', () => {
        expect(true).toBe(true);
      });
    });

    describe('second grandchild suite', () => {
      it('should failed', () => {
        expect(true).toBe(false);
      });

      it('should be ok', () => {
        expect(true).toBe(true);
      });
    });
  });
});
