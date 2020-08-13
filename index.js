
// 1.Anagrams of string（带有重复项）

// 使用递归。对于给定字符串中的每个字母，为字母创建字谜。使用map（）将字母与每部分字谜组合，然后使用reduce（）将所有字谜组合到一个数组中，最基本情况是字符串长度等于2或1。

const anagrams = str => {

  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];

  return str.split('').reduce((acc, letter, i) =>

    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []);

};

// anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']


// 2.数组平均数
// 使用reduce（）将每个值添加到累加器，初始值为0，总和除以数组长度。
const average = arr => arr.reduce((acc, val) => acc + val, 0) / arr.length;

// average([1,2,3]) -> 2

// 3.大写每个单词首字母
// 使用replace（）匹配每个单词的第一个字符，并使用toUpperCase（）来将其大写。
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

// capitalizeEveryWord('hello world!') -> 'Hello World!'

// 4.首字母大写
// 使用slice（0,1）和toUpperCase（）大写第一个字母，slice（1）获取字符串的其余部分。省略lowerRest参数以保持字符串的其余部分不变，或将其设置为true以转换为小写。（注意：这和上一个示例不是同一件事情）

const capitalize = (str, lowerRest = false) =>

  str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));

// capitalize('myName', true) -> 'Myname'

// 5.检查回文
// 将字符串转换为toLowerCase（），并使用replace（）从中删除非字母的字符。然后，将其转换为tolowerCase（），将（''）拆分为单独字符，reverse（），join（''），与原始的非反转字符串进行比较，然后将其转换为tolowerCase（）。

const palindrome = str => {

  const s = str.toLowerCase().replace(/[\W_]/g, '');

  return s === s.split('').reverse().join('');

}

// palindrome('taco cat') -> true

// 6.计算数组中值出现的次数
// 每次遇到数组中的特定值时，使用reduce（）来递增计数器。
const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);

// countOccurrences([1,1,2,1,2,3], 1) -> 3

// 7.当前Url
// 使用window.location.href来获取当前URL。
const currentUrl = () => window.location.href;

// currentUrl() -> 'https://google.com'

// 8.Curry
// 使用递归。如果提供的参数（args）数量足够，则调用传递函数f，否则返回一个curried函数f。
const curry = (fn, arity = fn.length, ...args) =>

  arity <= args.length

    ? fn(...args)

    : curry.bind(null, fn, arity, ...args);

// curry(Math.pow)(2)(10) -> 1024

// curry(Math.min, 3)(10)(50)(2) -> 2

// 9.数组扁平化
//使用递归，使用reduce（）来获取所有不是数组的元素，flatten每个元素都是数组。
const deepFlatten = arr =>

  arr.reduce((a, v) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);

// deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]

// 10.数组之间的区别
// 从b创建一个Set，然后在a上使用Array.filter（），只保留b中不包含的值。
const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); };

// difference([1,2,3], [1,2]) -> [3]

// 11.两点之间的距离
// 使用Math.hypot（）计算两点之间的欧几里德距离。
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

// distance(1,1, 2,3) -> 2.23606797749979

// 12.可以按数字整除
// 使用模运算符（％）来检查余数是否等于0。
const isDivisible = (dividend, divisor) => dividend % divisor === 0;

// isDivisible(6,3) -> true

// 13.转义正则表达式
// 使用replace（）来转义特殊字符。

const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// escapeRegExp('(test)') -> \\(test\\)

// 14.偶数或奇数
// 使用Math.abs（）将逻辑扩展为负数，使用模（％）运算符进行检查。如果数字是偶数，则返回true；如果数字是奇数，则返回false。
const isEven = num => num % 2 === 0;

// isEven(3) -> false

// 15.阶乘
// 使用递归。如果n小于或等于1，则返回1。否则返回n和n - 1的阶乘的乘积。
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

// factorial(6) -> 720

// 16.斐波那契数组生成器
// 创建一个特定长度的空数组，初始化前两个值（0和1）。使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
const fibonacci = n =>

  Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);

// fibonacci(5) -> [0,1,1,2,3]

// 17.过滤数组中的非唯一值
// 将Array.filter（）用于仅包含唯一值的数组
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

// filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]

// 18.Flatten数组
// 使用reduce（）来获取数组中的所有元素，并使用concat（）来使它们flatten。
const flatten = arr => arr.reduce((a, v) => a.concat(v), []);

// flatten([1,[2],3,4]) -> [1,2,3,4]

// 19.从数组中获取最大值
// 使用Math.max（）与spread运算符（...）结合得到数组中的最大值。
const arrayMax = arr => Math.max(...arr);

// arrayMax([10, 1, 5]) -> 10

// 20.从数组中获取最小值
// 使用Math.min（）与spread运算符（...）结合得到数组中的最小值。
const arrayMin = arr => Math.min(...arr);

// arrayMin([10, 1, 5]) -> 1

// 21.获取滚动位置
// 如果已定义，请使用pageXOffset和pageYOffset，否则使用scrollLeft和scrollTop，可以省略el来使用window的默认值。
const getScrollPos = (el = window) =>

  ({
    x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,

    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
  });

// getScrollPos() -> {x: 0, y: 200}

// 22.最大公约数
//使用递归。基本情况是当y等于0时。在这种情况下，返回x。否则，返回y的GCD和x / y的其余部分。

const gcd = (x, y) => !y ? x : gcd(y, x % y);

// gcd (8, 36) -> 4

// 23.用值初始化数组

//使用Array（n）创建所需长度的数组，fill(v)以填充所需的值，可以忽略value使用默认值0。

const initializeArray = (n, value = 0) => Array(n).fill(value);

// initializeArray(5, 2) -> [2,2,2,2,2]

// 23.范围内的随机整数
// 使用Math.random（）生成一个随机值，使用乘法将其映射到所需的范围。
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// randomIntegerInRange(0, 5) -> 2

// 24. 范围内的随机数

// 使用Math.random（）生成一个随机值，使用乘法将其映射到所需的范围。
const randomInRange = (min, max) => Math.random() * (max - min) + min;

// randomInRange(2,10) -> 6.0211363285087005

// 25.随机化数组的顺序
// 使用sort（）重新排序元素，利用Math.random（）来随机排序。
const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// shuffle([1,2,3]) -> [2,3,1]

// 25.反转一个字符串

// 使用数组解构和Array.reverse（）来颠倒字符串中的字符顺序。合并字符以使用join('')获取字符串。

const reverseString = str => [...str].reverse().join('');

// reverseString('foobar') -> 'raboof'

// 26.RGB到十六进制

// 使用按位左移运算符（<<）和toString（16），然后padStart（6，“0”）将给定的RGB参数转换为十六进制字符串以获得6位十六进制值。

const rgbToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

// rgbToHex(255, 165, 1) -> 'ffa501'

// 27.按字符串排序（按字母顺序排列）

// 使用split（''）分割字符串，sort（）使用localeCompare（），使用join（''）重新组合。

const sortCharactersInString = str =>

  str.split('').sort((a, b) => a.localeCompare(b)).join('');

// sortCharactersInString('cabbage') -> 'aabbceg'

// 28.获取URL参数

//使用match() 与适当的正则表达式来获得所有键值对，适当的map() 。使用Object.assign（）和spread运算符（...）将所有键值对组合到一个对象中，将location.search作为参数传递给当前url。
const getUrlParameters = url =>

  url.match(/([^?=&]+)(=([^&]*))/g).reduce(

    (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}

  );

// getUrlParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}


// 检测是否为正确的手机号码
window.isValidPhone = (phone) => {
  return /^[0-9]{11}$/.test(phone);
};

// 隐藏手机号中间四位
window.hidePhone = (tel) => {
  if (isValidPhone(tel)) {
    return tel.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
  }
};
//判断课时是否为整数
window.deleteZero = (classHour) => {
  return new Number(classHour).valueOf();
};
// 时间格式
window.formatDate = function (format, timestamp) {
  if (!timestamp || !(parseInt(timestamp) > 0)) return "";

  if (Number(timestamp) != undefined) {
    timestamp = Number(timestamp);
  }

  var date = new Date(timestamp);
  var y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate(),
    h = date.getHours(),
    i = date.getMinutes(),
    s = date.getSeconds();

  m = m < 10 ? "0" + m : m;
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  i = i < 10 ? "0" + i : i;
  s = s < 10 ? "0" + s : s;

  return format
    .replace("YYYY", y)
    .replace("MM", m)
    .replace("DD", d)
    .replace("H", h)
    .replace("i", i)
    .replace("s", s);
};
//设置cookie
window.setCookie = function (cname, cvalue, cday) {
  var d = new Date(),
    exdays = cday || 30;
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
};

//获取cookie
window.getCookie = function (cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1);
    if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
  }
  return "";
};
//清除cookie
window.clearCookie = function (name) {
  setCookie(name, "", -1);
};

window.deleteEmptyProperty = function (object) {
  // 去除JSON中的空属性
  for (var i in object) {
    var value = object[i];
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        if (value.length == 0) {
          delete object[i];
          continue;
        }
      }
      deleteEmptyProperty(value);
      if (isEmpty(value)) {
        delete object[i];
      }
    } else {
      if (value === "" || value === null || value === undefined) {
        delete object[i];
      }
    }
  }
};

function isEmpty(object) {
  for (var name in object) {
    return false;
  }
  return true;
}

window.checkCampusName = (text) => {
  // 判断是否含有特殊符号
  let iconRule1 = /[`~!@#$%^&*()_\+=<>?:"{}|,\/;'\\[\]·~！@#￥%……&*（）——\+={}|《》？：“”【】、；‘’，。、]/im;
  // 判断是否含有emoji表情
  let iconRule2 = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi;
  // 如果为true，字符串含有emoji表情 ，false不含
  let result = null;
  result = iconRule1.test(text)
    ? iconRule1.test(text)
    : iconRule2.test(text)
      ? iconRule2.test(text)
      : false;
  return result;
};


/**
 * 生成树
 * @param parentCode
 * @param datas
 * @param level
 * @returns {Array}
 */
window.createTree = (parentCode, datas, level = 0) => {
  const child = []
  const childCodes = []

  // 找子节点
  for (let i in datas) {
    const item = datas[i]
    if (item.parent == parentCode) {
      item.level = level
      child.push(item)
      childCodes.push(item.code)
    }
  }

  const len = child.length

  if (len > 0) {
    if (parentCode != 0) {
      datas[parentCode].child = child
      datas[parentCode].childCodes = childCodes
    }
    for (let i = 0; i < len; i++) {
      createTree(child[i].code, datas, level + 1)
    }
  }
  return child
}

/**
 * 生成指定长度的随机字符串
 * @param len
 * @returns {string}
 */
window.random_string = len => {
  len = len || 32
  const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  const maxPos = chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

/**
 * 金额转大写
 * @param num
 * @returns {string|*}
 */
window.numberToChines = num => {
  if (num != 0 && !num) return ''
  let strOutput = ''
  let strUnit = '仟佰拾亿仟佰拾万仟佰拾元角分'
  num += '00'
  const intPos = num.indexOf('.')
  if (intPos >= 0) num = num.substring(0, intPos) + num.substr(intPos + 1, 2)
  strUnit = strUnit.substr(strUnit.length - num.length)
  for (let i = 0; i < num.length; i++)
    strOutput +=
      '零壹贰叁肆伍陆柒捌玖'.substr(num.substr(i, 1), 1) + strUnit.substr(i, 1)
  return strOutput
    .replace(/零角零分$/, '整')
    .replace(/零[仟佰拾]/g, '零')
    .replace(/零{2,}/g, '零')
    .replace(/零([亿|万])/g, '$1')
    .replace(/零+元/, '元')
    .replace(/亿零{0,3}万/, '亿')
    .replace(/^元/, '零元')
}

/**
 * 时间格式
 * @param format 时间格式
 * @param timestamp  时间戳
 */

window.formatTime = (format, timestamp) => {
  if (!timestamp) {
    return
  }
  const date = new Date(parseInt(timestamp))
  let y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate(),
    h = date.getHours() - 8,
    i = date.getMinutes(),
    s = date.getSeconds(),
    w = date.getDay()
  return format
    .replace('YYYY', y)
    .replace('MM', m)
    .replace('DD', d)
    .replace('H', h)
    .replace('i', i)
    .replace('s', s)
}


/**
 * dataURL 转 Blob
 * @param dataurl
 * @returns {Blob}
 */
window.dataURLtoBlob = dataurl => {
  const arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    u8arr = new Uint8Array(n)
  let n = bstr.length
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], {
    type: mime
  })
}

window.type = obj => {
  var toString = Object.prototype.toString
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  return map[toString.call(obj)]
}

window.deepClone = data => {
  var self = this
  var t = type(data),
    o,
    i,
    ni

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (i = 0, ni = data.length; i < ni; i++) {
      o.push(deepClone(data[i]))
    }
    return o
  } else if (t === 'object') {
    for (i in data) {
      o[i] = deepClone(data[i])
    }
    return o
  }
}

/**
 * 分钟数转成小时表示
 * @param number
 * @returns {string}
 */
window.intToHours = number => {
  //如果的整数
  let hours
  let minutes
  if (number % 1 == 0) {
    hours = Math.floor(number / 60)
    minutes = number % 60
  }
  hours = hours < 10 ? '0'.concat(hours) : hours
  minutes = minutes < 10 ? '0'.concat(minutes) : minutes

  return hours + ':' + minutes
}

window.convertBase64ToBlob = function (base64) {
  var base64Arr = base64.split(',')
  var imgtype = ''
  var base64String = ''
  if (base64Arr.length > 1) {
    //如果是图片base64，去掉头信息
    base64String = base64Arr[1]
    imgtype = base64Arr[0].substring(
      base64Arr[0].indexOf(':') + 1,
      base64Arr[0].indexOf(';')
    )
  }
  // 将base64解码
  var bytes = atob(base64String)
  //var bytes = base64;
  var bytesCode = new ArrayBuffer(bytes.length)
  // 转换为类型化数组
  var byteArray = new Uint8Array(bytesCode)

  // 将base64转换为ascii码
  for (var i = 0; i < bytes.length; i++) {
    byteArray[i] = bytes.charCodeAt(i)
  }

  // 生成Blob对象（文件对象）
  return new Blob([bytesCode], { type: imgtype })
}

// 判断是否是腾讯视频
window.isTencentVideo = url => {
  const TENCENT_FLAG = 'v.qq.com'
  return url.indexOf(TENCENT_FLAG) >= 0
}

// 判断是否是优酷视频
window.isYoukuVideo = url => {
  const YOUKU_FLAG = 'v.youku.com'
  return url.indexOf(YOUKU_FLAG) >= 0
}

// 手机号中间4位星号处理
window.starPhone = (phone) => {
  let newPhone = ''
  if (phone) {
    newPhone = phone.substr(0, 3) + '****' + phone.substr(7)
  }
  return newPhone
}

window.disposeMoney = (str) => {  // 金额处理
  str = String(str / 100);
  var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  var val = str.replace(reg, "$1,");
  return val
}

//深拷贝
window.deepClone = (obj) => {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        //判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          //如果不是，简单复制
          if (typeof obj[key] === "string") {
            // console.log(obj[key])
            objClone[key] = obj[key] && obj[key].replace(/^\s+|\s+$/gm, '');
          } else {
            objClone[key] = obj[key];
          }

        }
      }
    }
  }
  return objClone;
}

window.getUrlParam = (query) => {
  const url = window.location.href;
  if (url.indexOf("?") !== -1) {
    const str = url.split("?");
    for (let i = 0; i < str.length; i++) {
      const strItem = str[i];
      const strArray = strItem.split("&");

      for (let i = 0, length = strArray.length; i < length; i++) {
        const itemArray = strArray[i].split("=");
        if (itemArray[0].toLocaleLowerCase() === query.toLocaleLowerCase()) {
          return itemArray[1];
        }
      }

    }
  }
  return undefined;
}