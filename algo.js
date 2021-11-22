// solution

function solution(input) {
  const output = {
    ㄱ: 0,
    ㄴ: 0,
    ㄷ: 0,
    ㄹ: 0,
    ㅁ: 0,
    ㅂ: 0,
    ㅅ: 0,
    ㅇ: 0,
    ㅈ: 0,
    ㅊ: 0,
    ㅋ: 0,
    ㅌ: 0,
    ㅍ: 0,
    ㅎ: 0,
  };

  const getChoSung = char => {
    if (!/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(char)) {
      return 0;
    }

    const jaEum = [
      'ㄱ',
      'ㄲ',
      'ㄴ',
      'ㄷ',
      'ㄸ',
      'ㄹ',
      'ㅁ',
      'ㅂ',
      'ㅃ',
      'ㅅ',
      'ㅆ',
      'ㅇ',
      'ㅈ',
      'ㅉ',
      'ㅊ',
      'ㅋ',
      'ㅌ',
      'ㅍ',
      'ㅎ',
    ];
    const uniGa = 44032;
    const uniInput = char.charCodeAt();
    const idx = parseInt((uniInput - uniGa) / 588, 10);
    const choSung = jaEum[idx];

    return choSung;
  };

  for (let i = 0; i < input.length; i++) {
    const nthChoSung = getChoSung(input.charAt(i));
    if (!nthChoSung) {
      continue;
    }
    output[nthChoSung] += 1;
  }

  return output;
}

// test

const input = '사과1호랑이,고니 수박BT닭';

const expectedOutput = {
  ㄱ: 2,
  ㄴ: 1,
  ㄷ: 1,
  ㄹ: 1,
  ㅁ: 0,
  ㅂ: 1,
  ㅅ: 2,
  ㅇ: 1,
  ㅈ: 0,
  ㅊ: 0,
  ㅋ: 0,
  ㅌ: 0,
  ㅍ: 0,
  ㅎ: 1,
};

const output = solution(input);
const result = JSON.stringify(output) === JSON.stringify(expectedOutput);
console.log('resutl: ', result);
