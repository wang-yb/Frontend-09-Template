function wildcardMatch(source, pattern) {
    let starCount = 0;
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] === '*') {
        starCount ++;
      }   
    }
    if (starCount === 0) {
      for (let i = 0; i < pattern.length; i++) {
        if (source[i] !== pattern[i] && pattern[i] !== '?') {
          return false;
        }
      }
      return true;
    }

    // i 是 pattern 的起始搜索下标位置，lastIndex是原字符串的下标
    // 开始第一个星号之前的匹配
    let i = 0;
    let lastIndex = 0;
    for (i = 0; pattern[i] !== '*'; i++) {
      if(pattern[i] !== source[i] && pattern[i] !== '?') {
        return false;
      }
    }
    
    // 第一个星号的下标
    lastIndex = i;
    // 处理最后一个星号之前的字符串匹配
    for (let p = 0; p < starCount - 1; p++) {
      i++;
      let subPattern = "";
      // 按星号将模式字符串的中间部分分段
      while(pattern[i] !== '*') {
        subPattern += pattern[i];
        i++;
      }
      // 将对？的处理，转成正则表达式中对单个字符的匹配，第一次匹配后即把lastIndex移动到reg.lastIndex位置，模拟*号尽量少的匹配
      let reg = new RegExp(subPattern.replace(/\?/g, "[\\s\\S]"), "g");
      reg.lastIndex = lastIndex;
      reg.exec(source);
      lastIndex = reg.lastIndex;
    }
    // 从尾部开始匹配，最后一个星号不管它是匹配多少字符
    for (let j = 0; j <= source.length - lastIndex && pattern[pattern.length - j] !== '*'; j++) {
      if (pattern[pattern.length - j] !== source[source.length - j]
        && pattern[pattern.length - j] !== '?')
        return false;
    }
    return true;
  }
  console.log(wildcardMatch('abcabcabxaac', 'abc'));