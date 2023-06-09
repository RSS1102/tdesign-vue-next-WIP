import { add, subtract, formatThousandths } from '../../../js/input-number/number';

describe('add', () => {
  it('0.1 + 0.2', () => {
    expect(add(0.1, 0.2)).toBe(0.3);
  });

  it('0.45 + 0.12', () => {
    expect(add(0.45, 0.12)).toBe(0.57);
  });

  it('0.141423 + 0.242134', () => {
    expect(add(0.141423, 0.242134)).toBe(0.383557);
  });

  it('999.999999 + 8888.8888888', () => {
    expect(add(999.999999, 8888.8888888)).toBe(9888.8888878);
  });

  it('3 + 0.1', () => {
    expect(add(3, 0.1)).toBe(3.1);
  });

  it('-1 + 0.766', () => {
    expect(add(-1, 0.766)).toBe(-0.234);
  });

  it('-0.766 + 1', () => {
    expect(add(-0.766, 1)).toBe(0.234);
  });

  it('-1 + (-0.766)', () => {
    expect(add(-1, -0.766)).toBe(-1.766);
  });

  it('1 + 0.766', () => {
    expect(add(1, 0.766)).toBe(1.766);
  });

  it('1 + (-0.766)', () => {
    expect(add(1, -0.766)).toBe(0.234);
  });

  it('0 + (-0.766)', () => {
    expect(add(0, -0.766)).toBe(-0.766);
  });
});

describe('subtract', () => {
  it('0.1 - 0.2', () => {
    expect(subtract(0.1, 0.2)).toBe(-0.1);
  });

  it('0.3 - 0.1', () => {
    expect(subtract(0.3, 0.1)).toBe(0.2);
  });

  it('0.141423 - 0.242134', () => {
    expect(subtract(0.141423, 0.242134)).toBe(-0.100711);
  });

  it('999.999999 - 8888.8888888', () => {
    expect(subtract(999.999999, 8888.8888888)).toBe(-7888.8888898);
  });

  it('3 - 0.1', () => {
    expect(subtract(3, 0.1)).toBe(2.9);
  });

  it('1 - 0.766', () => {
    expect(subtract(1, 0.766)).toBe(0.234);
  });

  it('-1 - 0.766', () => {
    expect(subtract(-1, 0.766)).toBe(-1.766);
  });

  it('1 - (-0.766)', () => {
    expect(subtract(1, -0.766)).toBe(1.766);
  });

  it('-1 - (-0.766)', () => {
    expect(subtract(-1, -0.766)).toBe(-0.234);
  });
});

describe('formatThousandths', () => {
  it('111,222,000', () => {
    expect(formatThousandths('111,222,000')).toBe('111222000');
  });

  it('111.,000.1', () => {
    expect(formatThousandths('111.,000.1')).toBe('111.,000.1');
  });
});
