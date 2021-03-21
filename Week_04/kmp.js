function kmp(source, pattern) {
    // 计算table
    let table = new Array(pattern.length).fill(0)

    {
        // abcdabce
        // i 为模式字符串的起始搜索下标，j为0到i-1位字符串中前缀字符串集和后缀字符串集的交集中最长字符串的长度
        let i = 1;
        let j = 0;
        while(i < pattern.length) {
            if(pattern[i] === pattern[j]) {
                ++i;
                ++j;
                table[i] = j;
            } else {
                if(j > 0) {
                    j = table[j];
                } else {
                    ++i;
                } 
            }
        }
    }
    console.log(table);
    {
        // i 源字符串的起始位置
        let i = 0;
        // j 模式字符串的起始位置
        let j = 0;
        while(i < source.length) {
            if(pattern[j] === source[i]) {
                ++i;
                ++j;
            } else {
                if(j > 0) {
                    j = table[j];
                } else {
                    ++i;
                }
            }
            // j++后得到模式字符串长度，说明模式字符串已经在原字符串中完整匹配依次，第一次匹配的原字符串起始下标为 i - pattern.length
            if(j === pattern.length)
                return true
        }
        return false
    }
}
console.log(kmp("abc", "abc"))