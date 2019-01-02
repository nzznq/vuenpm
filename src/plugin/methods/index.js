/**
 * 判断是否为数组
 * @param obj 要判断的数据
 * @returns
 */
const _isArray = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
};

/**
 * 判断是否为空对象
 * @param obj 要判断的对象
 * @returns boolean
 */
const _isEmptyObject = function (obj) {
	if (obj instanceof Object) {
		for (var key in obj) {
			return false;
		}
		return true;
	}
};

/**
 * 判断是否为空
 * @param obj 要判断的数据
 * @returns boolean
 */
const isNull = function (obj) {
	if (obj === undefined || obj === "undefined" || obj === null || obj === "null" || obj === "" || obj === "{null}" || _isEmptyObject(obj)) {
		return true;
	}
	if (_isArray(obj)) {
		return obj.length == 0;
	}
	return false;
};

/**
 * 获取URL参数
 * @param url 地址; 参数为空时url默认为当前地址
 * @returns 参数JSON数据
 */
const getUrlParam = function (url) {
	url = url ? url : window.location.href;
	let _pa = url.substring(url.indexOf('?') + 1), _arrS = _pa.split('&'), _rs = {};
	for (var i = 0, _len = _arrS.length; i < _len; i++) {
		let pos = _arrS[i].indexOf('=');
		if (pos == -1) {
			continue;
		}
		let name = _arrS[i].substring(0, pos),
			value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
		_rs[name] = value;
	}
	return _rs;
};

/**
 * 判断是否为方法对象
 * @param obj 要判断的数据
 * @returns boolean
 */
const isFunction = function (obj) {
	try {
		if (typeof eval(obj) == "function")
			return true;
	} catch (e) {
	}
	return false;
};

/**
 * 判断是否为手机号
 * @param string or nunmber 要判断的字符串或数字
 * @returns boolean
 * @example isMibileNun(534308061)  //false
 */
const isMobileNum = function (num) {
	let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
	return reg.test(num);
};

/**
 * 获取当前时间
 * @param string 获取当前时间的格式 
 * @returns string 符合参数格式的当前时间
 * @example getCurrentTime('{Y}-{MM}-{DD} {hh}:{ii}:{ss}')  //2018-11-15 20:12:50
 */
const getCurrentTime = function (formatStr) {
	formatStr = formatStr ? formatStr : "{Y}-{MM}-{DD}"
	let parseNumber = function (num) {
		return num < 10 ? "0" + num : num;
	};
	let dateTime = new Date();
	let dateObj = {};
	let rStr = /\{([^}]+)\}/;
	let mons = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
	dateObj["Y"] = dateTime.getFullYear();
	dateObj["M"] = dateTime.getMonth() + 1;
	dateObj["MM"] = parseNumber(dateObj["M"]);
	dateObj["Mon"] = mons[dateObj['M'] - 1];
	dateObj["D"] = dateTime.getDate();
	dateObj["DD"] = parseNumber(dateObj["D"]);
	dateObj["h"] = dateTime.getHours();
	dateObj["hh"] = parseNumber(dateObj["h"]);
	dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
	dateObj["tt"] = parseNumber(dateObj["t"]);
	dateObj["A"] = dateObj["h"] > 12 ? '下午' : '上午';
	dateObj["i"] = dateTime.getMinutes();
	dateObj["ii"] = parseNumber(dateObj["i"]);
	dateObj["s"] = dateTime.getSeconds();
	dateObj["ss"] = parseNumber(dateObj["s"]);
	while (rStr.test(formatStr)) {
		formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
	}
	return formatStr;
}

/**
 * 获取倒计时
 * @param string 结束时间字符串
 * @returns string 符合参数格式的剩余时间 
 * @example  getCountdown('2019/01/01 10:00:00')    // ？ 天 ？ 时 ？ 分
 */
const getCountdown = function (endtime) {//time是结束时间
	let startDate = new Date(); //开始时间，当前时间
	let endDate = new Date(endtime); //结束时间，需传入时间参数
	let leftTime = endDate.getTime() - startDate.getTime();
	let leftsecond = parseInt(leftTime / 1000);//剩余秒数
	let day = Math.floor(leftsecond / (60 * 60 * 24));//剩余天数
	let hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);//剩余小时
	let minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 60 * 60) / 60);//剩余分钟
	let second = Math.floor(leftsecond - day * 24 * 3600 - hour * 3600 - minute * 60);//剩余秒数
	day = checkTime(day);
	hour = checkTime(hour);
	minute = checkTime(minute);
	second = checkTime(second);
	let str = '';
	if(isNaN(day)){
		str = "请传入正确的时间格式，例如 '2019/01/01 10:00:00' ";
	}else{
		str = day + "天" + hour + "时" + minute + "分" + second + "秒";
	}
	return str;
	function checkTime(i) { //将0-9的数字前面加上0，例1变为01
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
}

/**
 * 生成随机数
 * @param number 随机数范围/数量
 * @returns array
 * @example randomNum(10,20,5)     // 11151
 */
const randomNum = function (minNum,maxNum,count,repeat) {
	minNum = minNum ? minNum : 0;	//范围最小值
	maxNum = maxNum ? maxNum : 10;  //范围最大值
	count = count ? count : 1;   //获取随机数的位数
	repeat = repeat ? repeat : true;    //获取到的随机数是否可以重复   默认 可以重复
	let numArr = "";
	for(let i=0;numArr.length < count;i++){
		let num = Math.floor(Math.random()*(maxNum-minNum+1)+minNum);
		switch (repeat) {
			case true:
				numArr += num;
				break;
			case false:
				if(numArr.indexOf(num) == -1){
					numArr += num;
				}
				break
			default:
				break;
		}
	}
	return numArr;
}

/**
 * 深度合并对象
 * @param FirstOBJ 第一个对象
 * @param SecondOBJ 第二个对象
 * @returns object 后一个对象与前一个对象合并，值不一样的覆盖
 */
const deepObjectMerge = function (FirstOBJ, SecondOBJ) {
    for (var key in SecondOBJ) {
        FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === "[object Object]" ?
            deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key];
    }
    return FirstOBJ;
}


export {
	isFunction,
	getUrlParam,
	isNull,
	isMobileNum,
	getCurrentTime,
	getCountdown,
	randomNum,
	deepObjectMerge
}




