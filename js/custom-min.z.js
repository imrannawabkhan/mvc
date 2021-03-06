
function isMouseEventSupported(eventName) {
    var el = document.createElement("div");
    eventName = "on" + eventName;
    var isSupported = eventName in el;
    return isSupported || (el.setAttribute(eventName, "return;"), isSupported = "function" == typeof el[eventName]), el = null, isSupported
}

function dateField(disableAutoSwitch) {
    function getLocaleDefaultDateString() {
        var locale = window.navigator.userLanguage || window.navigator.language;
        return locale = locale.toLowerCase(), {
            "af-za": "YYYY/MM/DD",
            "am-et": "D/M/YYYY",
            "ar-ae": "DD/MM/YYYY",
            ar: "DD/MM/YYYY",
            "ar-bh": "DD/MM/YYYY",
            "ar-dz": "DD-MM-YYYY",
            "ar-eg": "DD/MM/YYYY",
            "ar-iq": "DD/MM/YYYY",
            "ar-jo": "DD/MM/YYYY",
            "ar-kw": "DD/MM/YYYY",
            "ar-lb": "DD/MM/YYYY",
            "ar-ly": "DD/MM/YYYY",
            "ar-ma": "DD-MM-YYYY",
            "ar-om": "DD/MM/YYYY",
            "ar-qa": "DD/MM/YYYY",
            "ar-sa": "DD/MM/YY",
            "ar-sy": "DD/MM/YYYY",
            "ar-tn": "DD-MM-YYYY",
            "ar-ye": "DD/MM/YYYY",
            "arn-cl": "DD-MM-YYYY",
            "as-in": "DD-MM-YYYY",
            "az-cyrl-az": "DD.MM.YYYY",
            "az-latn-az": "DD.MM.YYYY",
            "ba-ru": "DD.MM.YY",
            "be-by": "DD.MM.YYYY",
            "bg-bg": "DD.M.YYYY",
            "bn-bd": "DD-MM-YY",
            "bn-in": "DD-MM-YY",
            "bo-cn": "YYYY/M/D",
            "br-fr": "DD/MM/YYYY",
            "bs-cyrl-ba": "D.M.YYYY",
            "bs-latn-ba": "D.M.YYYY",
            "ca-es": "DD/MM/YYYY",
            ca: "DD/MM/YYYY",
            "co-fr": "DD/MM/YYYY",
            "cs-cz": "D.M.YYYY",
            "cy-gb": "DD/MM/YYYY",
            "da-dk": "DD-MM-YYYY",
            de: "DD.MM.YYYY",
            "de-at": "DD.MM.YYYY",
            "de-ch": "DD.MM.YYYY",
            "de-de": "DD.MM.YYYY",
            "de-li": "DD.MM.YYYY",
            "de-lu": "DD.MM.YYYY",
            "dsb-de": "D. M. YYYY",
            "dv-mv": "DD/MM/YY",
            "el-gr": "D/M/YYYY",
            "en-029": "MM/DD/YYYY",
            "en-au": "DD/MM/YYYY",
            "en-bz": "DD/MM/YYYY",
            "en-ca": "DD/MM/YYYY",
            "en-gb": "DD/MM/YYYY",
            "en-ie": "DD/MM/YYYY",
            "en-in": "DD-MM-YYYY",
            "en-jm": "DD/MM/YYYY",
            "en-my": "DD/MM/YYYY",
            "en-nz": "DD/MM/YYYY",
            "en-ph": "M/D/YYYY",
            "en-sg": "D/M/YYYY",
            "en-tt": "DD/MM/YYYY",
            "en-us": "MM/DD/YYYY",
            en: "MM/DD/YYYY",
            "en-za": "YYYY/MM/DD",
            "en-zw": "M/D/YYYY",
            "es-ar": "DD/MM/YYYY",
            "es-bo": "DD/MM/YYYY",
            "es-cl": "DD-MM-YYYY",
            "es-co": "DD/MM/YYYY",
            "es-cr": "DD/MM/YYYY",
            "es-do": "DD/MM/YYYY",
            "es-ec": "DD/MM/YYYY",
            "es-es": "DD/MM/YYYY",
            es: "DD/MM/YYYY",
            "es-gt": "DD/MM/YYYY",
            "es-hn": "DD/MM/YYYY",
            "es-mx": "DD/MM/YYYY",
            "es-ni": "DD/MM/YYYY",
            "es-pa": "MM/DD/YYYY",
            "es-pe": "DD/MM/YYYY",
            "es-pr": "DD/MM/YYYY",
            "es-py": "DD/MM/YYYY",
            "es-sv": "DD/MM/YYYY",
            "es-us": "M/D/YYYY",
            "es-uy": "DD/MM/YYYY",
            "es-ve": "DD/MM/YYYY",
            "et-ee": "D.MM.YYYY",
            "eu-es": "YYYY/MM/DD",
            "fa-ir": "MM/DD/YYYY",
            "fi-fi": "D.M.YYYY",
            "fil-ph": "M/D/YYYY",
            "fo-fo": "DD-MM-YYYY",
            "fr-be": "DD/MM/YYYY",
            "fr-ca": "YYYY-MM-DD",
            "fr-ch": "DD.MM.YYYY",
            "fr-fr": "DD/MM/YYYY",
            fr: "DD/MM/YYYY",
            "fr-lu": "DD/MM/YYYY",
            "fr-mc": "DD/MM/YYYY",
            "fy-nl": "D-M-YYYY",
            "ga-ie": "DD/MM/YYYY",
            "gd-gb": "DD/MM/YYYY",
            "gl-es": "DD/MM/YY",
            "gsw-fr": "DD/MM/YYYY",
            "gu-in": "DD-MM-YY",
            "ha-latn-ng": "D/M/YYYY",
            "he-il": "DD/MM/YYYY",
            "hi-in": "DD-MM-YYYY",
            "hr-ba": "D.M.YYYY.",
            "hr-hr": "D.M.YYYY",
            "hsb-de": "D. M. YYYY",
            "hu-hu": "YYYY. MM. DD.",
            "hy-am": "DD.MM.YYYY",
            "id-id": "DD/MM/YYYY",
            "ig-ng": "D/M/YYYY",
            "ii-cn": "YYYY/M/D",
            "is-is": "D.M.YYYY",
            "it-ch": "DD.MM.YYYY",
            "it-it": "DD/MM/YYYY",
            it: "DD/MM/YYYY",
            "iu-cans-ca": "D/M/YYYY",
            "iu-latn-ca": "D/MM/YYYY",
            "ja-jp": "YYYY/MM/DD",
            "ka-ge": "DD.MM.YYYY",
            "kk-kz": "DD.MM.YYYY",
            "kl-gl": "DD-MM-YYYY",
            "km-kh": "YYYY-MM-DD",
            "kn-in": "DD-MM-YY",
            "ko-kr": "YYYY-MM-DD",
            "kok-in": "DD-MM-YYYY",
            "ky-kg": "DD.MM.YY",
            "lb-lu": "DD/MM/YYYY",
            "lo-la": "DD/MM/YYYY",
            "lt-lt": "YYYY.MM.DD",
            "lv-lv": "YYYY.MM.DD.",
            "mi-nz": "DD/MM/YYYY",
            "mk-mk": "DD.MM.YYYY",
            "ml-in": "DD-MM-YY",
            "mn-mn": "YY.MM.DD",
            "mn-mong-cn": "YYYY/M/D",
            "moh-ca": "M/D/YYYY",
            "mr-in": "DD-MM-YYYY",
            "ms-bn": "DD/MM/YYYY",
            "ms-my": "DD/MM/YYYY",
            "mt-mt": "DD/MM/YYYY",
            "nb-no": "DD.MM.YYYY",
            "ne-np": "M/D/YYYY",
            "nl-be": "D/MM/YYYY",
            "nl-nl": "D-M-YYYY",
            nl: "DD-MM-YYYY",
            "nn-no": "DD.MM.YYYY",
            "nso-za": "YYYY/MM/DD",
            "oc-fr": "DD/MM/YYYY",
            "or-in": "DD-MM-YY",
            "pa-in": "DD-MM-YY",
            "pl-pl": "YYYY-MM-DD",
            "prs-af": "DD/MM/YY",
            "ps-af": "DD/MM/YY",
            "pt-br": "D/M/YYYY",
            "pt-pt": "DD-MM-YYYY",
            pt: "DD-MM-YYYY",
            "qut-gt": "DD/MM/YYYY",
            "quz-bo": "DD/MM/YYYY",
            "quz-ec": "DD/MM/YYYY",
            "quz-pe": "DD/MM/YYYY",
            "rm-ch": "DD/MM/YYYY",
            "ro-ro": "DD.MM.YYYY",
            "ru-ru": "DD.MM.YYYY",
            "rw-rw": "M/D/YYYY",
            "sa-in": "DD-MM-YYYY",
            "sah-ru": "MM.DD.YYYY",
            "se-fi": "D.M.YYYY",
            "se-no": "DD.MM.YYYY",
            "se-se": "YYYY-MM-DD",
            "si-lk": "YYYY-MM-DD",
            "sk-sk": "D. M. YYYY",
            "sl-si": "D.M.YYYY",
            "sma-no": "DD.MM.YYYY",
            "sma-se": "YYYY-MM-DD",
            "smj-no": "DD.MM.YYYY",
            "smj-se": "YYYY-MM-DD",
            "smn-fi": "D.M.YYYY",
            "sms-fi": "D.M.YYYY",
            "sq-al": "YYYY-MM-DD",
            "sr-cyrl-ba": "D.M.YYYY",
            "sr-cyrl-cs": "D.M.YYYY",
            "sr-cyrl-me": "D.M.YYYY",
            "sr-cyrl-rs": "D.M.YYYY",
            "sr-latn-ba": "D.M.YYYY",
            "sr-latn-cs": "D.M.YYYY",
            "sr-latn-me": "D.M.YYYY",
            "sr-latn-rs": "D.M.YYYY",
            "sv-fi": "D.M.YYYY",
            "sv-se": "YYYY-MM-DD",
            "sw-ke": "M/D/YYYY",
            "syr-sy": "DD/MM/YYYY",
            "ta-in": "DD-MM-YYYY",
            "te-in": "DD-MM-YY",
            "tg-cyrl-tj": "DD.MM.YY",
            "th-th": "D/M/YYYY",
            "tk-tm": "DD.MM.YY",
            "tn-za": "YYYY/MM/DD",
            "tr-tr": "DD.MM.YYYY",
            "tt-ru": "DD.MM.YYYY",
            "tzm-latn-dz": "DD-MM-YYYY",
            "ug-cn": "YYYY-M-D",
            "uk-ua": "DD.MM.YYYY",
            "ur-pk": "DD/MM/YYYY",
            "uz-cyrl-uz": "DD.MM.YYYY",
            "uz-latn-uz": "DD/MM YYYY",
            "vi-vn": "DD/MM/YYYY",
            "wo-sn": "DD/MM/YYYY",
            "xh-za": "YYYY/MM/DD",
            "yo-ng": "D/M/YYYY",
            zh: "YYYY/M/D",
            "zh-cn": "YYYY/M/D",
            "zh-hk": "D/M/YYYY",
            "zh-mo": "D/M/YYYY",
            "zh-sg": "D/M/YYYY",
            "zh-tw": "YYYY/M/D",
            "zu-za": "YYYY/MM/DD"
        }[locale]
    }
    var controlKeys = [40, 37, 39, 38, 32, 8, 13, 46, 9],
        numberKeys = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
        numpadKeys = [96, 97, 98, 99, 100, 101, 102, 103, 104, 105],
        enableAutoSwitch = !disableAutoSwitch,
        _wrapSeparator = function(item) {
            return " " + item + " "
        };
    return function(item, structure, separator, mobile, onValueChange) {
        if (separator = _wrapSeparator(separator || "-"), structure = structure || "YYYYMMDD", mobile = mobile || !1, !item) return !1;
        var currentFocusedSubfield = "",
            currentSubfieldKeyPressCount = [0, 0, 0],
            field = item,
            currentValue = field.value,
            placeholder = "",
            subfieldPositions = {
                d: -1,
                m: -1,
                y: -1
            },
            subfieldOffset = separator.length,
            totalLengthWithSeparator = "DD".length + subfieldOffset + "MM".length + subfieldOffset + "YYYY".length,
            subfieldRanges = [],
            _addEventListener = function(element, event, callback, useCapture) {
                var attachEventFn = element.addEventListener ? "addEventListener" : "attachEvent";
                element[attachEventFn]("attachEvent" === attachEventFn ? "on" + event : event, callback, useCapture)
            },
            _getSelectionStartForOlderIE = function(input) {
                input.focus();
                var sel = document.selection.createRange(),
                    selLen = document.selection.createRange().text.length;
                return sel.moveStart("character", -input.value.length), sel.text.length - selLen
            },
            _selectSomeTextInsideInput = function(input, start, end) {
                var smartInputSelection = SmartInputSelection({
                    node: input
                });
                smartInputSelection.setSelection(0), smartInputSelection.setSelection(start, end), smartInputSelection.setSelection({
                    start: start,
                    end: end
                }), smartInputSelection.getSelection()
            },
            _autoSwitchToNextSubfield = function() {
                var valueAsInt = parseInt(_getSubfieldValue(), 10);
                ("d" === currentFocusedSubfield && valueAsInt > 3 || "m" === currentFocusedSubfield && valueAsInt > 1 || 2 === currentSubfieldKeyPressCount[subfieldPositions[currentFocusedSubfield]] && "y" !== currentFocusedSubfield || 4 === currentSubfieldKeyPressCount[subfieldPositions[currentFocusedSubfield]]) && _setFocusOnSubfield(1)
            },
            _changeValueOfSubfield = function(action, val, subfield) {
                subfield = subfield || currentFocusedSubfield;
                var splittedValue = currentValue.split(separator),
                    modifyValue = splittedValue[subfieldPositions[subfield]],
                    modifyValueAsInt = parseInt(modifyValue, 10),
                    todaysDate = (new Date).toISOString();
                if ("reset" === action) switch (subfield) {
                        case "d":
                            modifyValue = "DD";
                            break;
                        case "m":
                            modifyValue = "MM";
                            break;
                        case "y":
                            modifyValue = "YYYY"
                    } else if ("overwrite" === action && "number" == typeof val) "y" === subfield ? (modifyValue.indexOf("Y") > -1 && (modifyValue = modifyValue.replace(/Y/g, "0")), modifyValue = modifyValue.substr(1, 3) + val) : 0 === modifyValueAsInt && 0 === val ? modifyValue = "01" : 0 === currentSubfieldKeyPressCount[subfieldPositions[subfield]] && 0 <= val <= 3 ? modifyValue = val : "d" === subfield && modifyValueAsInt <= 3 || "m" === subfield && modifyValueAsInt <= 1 ? (modifyValue = modifyValue.charAt(1), ("d" === subfield && 3 === modifyValueAsInt && val > 1 || "m" === subfield && 1 === modifyValueAsInt && val > 2) && (val = "d" === subfield ? 1 : 2), modifyValue += val.toString()) : modifyValue = val, currentSubfieldKeyPressCount[subfieldPositions[subfield]]++;
                    else if ("number" == typeof val && isNaN(modifyValueAsInt)) switch (subfield) {
                    case "d":
                        modifyValue = parseInt(todaysDate.substring(8, 10), 10);
                        break;
                    case "m":
                        modifyValue = parseInt(todaysDate.substring(5, 7), 10);
                        break;
                    case "y":
                        modifyValue = parseInt(todaysDate.substring(0, 4), 10)
                } else {
                    if ("number" != typeof val) return;
                    modifyValue = modifyValueAsInt + val, ("d" === subfield && 32 === modifyValue || "m" === subfield && 13 === modifyValue) && (modifyValue = 1), "d" === subfield && 0 === modifyValue && (modifyValue = 31), "m" === subfield && 0 === modifyValue && (modifyValue = 12)
                }
                modifyValue = modifyValue.toString(), (modifyValue.length < 2 || "y" === subfield && modifyValue.length < 4) && (modifyValue = _prependZero(modifyValue) + modifyValue), splittedValue[subfieldPositions[subfield]] = modifyValue, _setValue(_joinWithSeparator(splittedValue[0], splittedValue[1], splittedValue[2])), _setFocusOnSubfield(0)
            },
            _checkOrderOfFields = function() {
                var subfieldOffset = separator.length,
                    endOfFirstItem = _getEndOfFirstItem(),
                    startOfSecondItem = endOfFirstItem + subfieldOffset,
                    endOfSecondItem = startOfSecondItem + "MM".length,
                    startOfLastItem = _getStartOfLastItem(endOfFirstItem);
                _isFormat8601() ? (subfieldPositions.y = 0, subfieldPositions.m = 1, subfieldPositions.d = 2) : ("M" === structure.charAt(0) ? (subfieldPositions.m = 0, subfieldPositions.d = 1) : (subfieldPositions.d = 0, subfieldPositions.m = 1), subfieldPositions.y = 2), subfieldRanges.push([0, endOfFirstItem]), subfieldRanges.push([startOfSecondItem, endOfSecondItem]), subfieldRanges.push([startOfLastItem, totalLengthWithSeparator])
            },
            _clearSubfieldValue = function() {
                _changeValueOfSubfield("reset", 0), _resetKeyPressCounter()
            },
            _clickAndFocus = function(e) {
                var clickPos = "undefined" != typeof field.selectionStart ? field.selectionStart : _getSelectionStartForOlderIE(field),
                    endOfFirstItem = _getEndOfFirstItem(),
                    startOfLastItem = _getStartOfLastItem(endOfFirstItem),
                    range = [];
                range = clickPos > endOfFirstItem && clickPos <= endOfFirstItem + "MM".length + subfieldOffset ? [endOfFirstItem + subfieldOffset, endOfFirstItem + "MM".length + subfieldOffset] : clickPos >= startOfLastItem && clickPos < totalLengthWithSeparator ? [startOfLastItem, totalLengthWithSeparator] : [0, endOfFirstItem], _setSelectionRange(range)
            },
            _formatPlaceholder = function() {
                var formatted = "";
                return formatted = _isFormat8601() ? _joinWithSeparator(structure.substr(0, 4), structure.substr(4, 2), structure.substr(6, 2)) : _joinWithSeparator(structure.substr(0, 2), structure.substr(2, 2), structure.substr(4, 4)), placeholder = formatted, formatted
            },
            _getStartOfLastItem = function(endOfFirstItem) {
                return totalLengthWithSeparator - (6 - endOfFirstItem)
            },
            _getSubfieldValue = function(compare, subfield) {
                compare = compare || !1, subfield = subfield || currentFocusedSubfield;
                var splittedValue = currentValue.split(separator),
                    valueToTest = splittedValue[subfieldPositions[subfield]];
                return "default" === compare ? "DD" === valueToTest || "MM" === valueToTest || "YYYY" === valueToTest : valueToTest
            },
            _getEndOfFirstItem = function() {
                return _isFormat8601() ? "YYYY".length : "DD".length
            },
            _getISOValue = function() {
                var isoValue;
                if (mobile) isoValue = currentValue;
                else {
                    var splittedValue = currentValue.split(separator);
                    isoValue = splittedValue[subfieldPositions.y] + "-" + splittedValue[subfieldPositions.m] + "-" + splittedValue[subfieldPositions.d]
                }
                return isoValue
            },
            _getValue = function(iso) {
                return iso ? _getISOValue() : _sanitizeSeparator(currentValue)
            },
            _isFormat8601 = function() {
                return "Y" === structure.charAt(0)
            },
            _isLeapYear = function(year) {
                return 1 === new Date(year, 1, 29).getMonth()
            },
            _joinWithSeparator = function(pos1, pos2, pos3) {
                return pos1 + separator + pos2 + separator + pos3
            },
            _keyBehaviour = function(e) {
                e.preventDefault();
                var key = e.keyCode,
                    keyValue = String.fromCharCode(key);
                if (controlKeys.indexOf(key) < 0 && numberKeys.indexOf(key) < 0 && numpadKeys.indexOf(key) < 0) return !1;
                switch (numpadKeys.indexOf(key) > -1 && (key -= 48, keyValue = String.fromCharCode(key)), e.preventDefault ? e.preventDefault() : 9 === key && (e.shiftKey && 0 === subfieldPositions[currentFocusedSubfield] || 2 === subfieldPositions[currentFocusedSubfield]) || (e.returnValue = !1), !0) {
                    case 38 === key:
                        _changeValueOfSubfield("inc", 1);
                        break;
                    case 40 === key:
                        _changeValueOfSubfield("inc", -1);
                        break;
                    case 37 === key:
                    case 9 === key && e.shiftKey:
                        _setFocusOnSubfield(-1, e);
                        break;
                    case 39 === key:
                    case 13 === key:
                    case 9 === key:
                    case 32 === key:
                        _setFocusOnSubfield(1, e);
                        break;
                    case 46 === key:
                    case 8 === key:
                        _getSubfieldValue("default") ? _setFocusOnSubfield(-1) : _clearSubfieldValue();
                        break;
                    default:
                        isNaN(parseInt(keyValue, 10)) || (_changeValueOfSubfield("overwrite", parseInt(keyValue, 10)), enableAutoSwitch && _autoSwitchToNextSubfield())
                }
                return !0
            },
            _mobileBehaviour = {
                ghostInput: null,
                sensors: [],
                blur: function(e) {
                    _mobileBehaviour.sensors.forEach(function(sensor) {
                        sensor.classList.remove("focused")
                    }), e.target.classList.remove("focused"), e.target.classList.add("blurred")
                },
                buildOutput: function() {
                    var contentOutput = document.createElement("input");
                    return contentOutput.setAttribute("type", "text"), contentOutput.setAttribute("onCut", "return false;"), contentOutput.setAttribute("onPaste", "return false;"), contentOutput.classList.add("datefield-output"), document.getElementsByClassName("datefield-container")[0].insertBefore(contentOutput, field), contentOutput
                },
                clickToFocus: function(e) {
                    var targetSubfield = e.target ? e.target.getAttribute("data-for") : e,
                        posSubfield = subfieldPositions[targetSubfield],
                        currentFocus = subfieldPositions[currentFocusedSubfield] || 0,
                        nextFieldToFocus = posSubfield - currentFocus;
                    _mobileBehaviour.focusSubfieldSensor(targetSubfield), _mobileBehaviour.ghostInput.focus(), e.preventDefault(), _setFocusOnSubfield(nextFieldToFocus)
                },
                createSensors: function() {
                    var parentContainer = document.getElementsByClassName("datefield-container")[0],
                        ghostInputComputedStyle = window.getComputedStyle(_mobileBehaviour.ghostInput, null),
                        sensorPaddingLeft = ghostInputComputedStyle.getPropertyValue("padding-left"),
                        sensorPaddingTop = ghostInputComputedStyle.getPropertyValue("padding-top"),
                        sensorPaddingBottom = ghostInputComputedStyle.getPropertyValue("padding-bottom"),
                        sensorHeight = _mobileBehaviour.ghostInput.offsetHeight,
                        sensorContainer = document.createElement("div"),
                        parentStyle = "";
                    parentStyle += "height:" + sensorHeight + "px;", parentStyle += "padding-left:" + sensorPaddingLeft + ";", parentStyle += "padding-top:" + sensorPaddingTop + ";", parentStyle += "padding-bottom:" + sensorPaddingBottom + ";", sensorContainer.classList.add("sensor-container"), sensorContainer.setAttribute("style", parentStyle), parentContainer.insertBefore(sensorContainer, field), ["y", "m", "d"].forEach(function(subfield) {
                        var sensor = document.createElement("div");
                        sensor.classList.add("sensor"), sensor.classList.add(subfield), sensor.setAttribute("data-for", subfield), _addEventListener(sensor, "touchstart", _mobileBehaviour.clickToFocus, !0), _mobileBehaviour.sensors.push(sensor)
                    }), _mobileBehaviour.sensors.sort(function(sensorA, sensorB) {
                        return subfieldPositions[sensorA.getAttribute("data-for")] - subfieldPositions[sensorB.getAttribute("data-for")]
                    }), _mobileBehaviour.sensors.forEach(function(sensor, i) {
                        var fillText = sensor.getAttribute("data-for").toUpperCase();
                        sensor.classList.add("pos" + i), sensorContainer.appendChild(sensor), fillText += fillText, "YY" === fillText && (fillText += fillText), _mobileBehaviour.setDynamicSizeOfSensor(fillText, sensor), fillText = ""
                    })
                },
                focus: function(e) {
                    e.target.classList.add("focused"), e.target.classList.remove("blurred")
                },
                focusSubfieldSensor: function(subfield) {
                    var posSubfield = subfieldPositions[subfield];
                    _mobileBehaviour.sensors.forEach(function(sensor) {
                        sensor.classList.remove("focused")
                    }), _mobileBehaviour.sensors[posSubfield].classList.add("focused")
                },
                formatPlaceholder: function() {
                    return getLocaleDefaultDateString() || _formatPlaceholder()
                },
                pipeKeyBehaviour: function(e) {
                    _keyBehaviour(e), _mobileBehaviour.setDynamicSizeOfSensor(_getSubfieldValue(), _mobileBehaviour.sensors[subfieldPositions[currentFocusedSubfield]])
                },
                setDynamicSizeOfSensor: function(content, sensor) {
                    var fontFamilyToCopy = window.getComputedStyle(_mobileBehaviour.ghostInput, null).getPropertyValue("font-family"),
                        fontSizeToCopy = window.getComputedStyle(_mobileBehaviour.ghostInput, null).getPropertyValue("font-size"),
                        widthToSet = 0;
                    sensor.textContent = content, sensor.setAttribute("style", "font-size:" + fontSizeToCopy + ";font-family" + fontFamilyToCopy), sensor.style.fontSize = fontSizeToCopy, sensor.style.fontFamily = fontFamilyToCopy, widthToSet = sensor.offsetWidth, sensor.setAttribute("style", "width:" + widthToSet + "px;"), sensor.style.width = widthToSet + "px", sensor.textContent = ""
                },
                testNativeAvailable: function() {
                    field.setAttribute("type", "date");
                    var dateSupported = "date" === field.type;
                    return dateSupported && (field.setAttribute("min", "0001-01-01"), field.setAttribute("max", "9999-12-31")), dateSupported
                },
                transformField: function() {
                    return field.setAttribute("type", "tel"), field.classList.add("ghost"), field.classList.add("blurred"), _addEventListener(field, "blur", _mobileBehaviour.blur, !0), _addEventListener(field, "focus", _mobileBehaviour.focus, !0), _addEventListener(field, "keydown", _mobileBehaviour.pipeKeyBehaviour, !0), field
                }
            },
            onChange = function(e) {
                onValueChange(e.target.value)
            },
            _prependZero = function(val) {
                var returnString = "y" === currentFocusedSubfield ? "0000" : "00";
                return returnString.substr(0, returnString.length - val.length)
            },
            _resetKeyPressCounter = function(subfield) {
                subfield = subfield || currentFocusedSubfield, currentSubfieldKeyPressCount[subfieldPositions[subfield]] = 0
            },
            _sanitizeDaySelection = function() {
                var shortMonths = ["02", "04", "06", "09", "11"],
                    selectedYear = parseInt(_getSubfieldValue(!1, "y"), 10),
                    selectedMonth = _getSubfieldValue(!1, "m"),
                    updateDayValue = parseInt(_getSubfieldValue(!1, "d"), 10),
                    leapYear = !isNaN(selectedYear) && _isLeapYear(selectedYear);
                isNaN(updateDayValue) || shortMonths.indexOf(selectedMonth) < 0 || updateDayValue < 29 || ("02" === selectedMonth ? updateDayValue = leapYear ? 29 : 28 : updateDayValue > 30 && (updateDayValue = 30), _changeValueOfSubfield("overwrite", updateDayValue, "d"), _resetKeyPressCounter("d"))
            },
            _sanitizeSeparator = function(value) {
                var replaceString = new RegExp(" ", "g");
                return value.replace(replaceString, "")
            },
            _setFocusOnSubfield = function(dir, e) {
                var nextFieldFocus = "" !== currentFocusedSubfield ? subfieldPositions[currentFocusedSubfield] + dir : 0 + dir;
                0 !== dir && ("0000" !== _getSubfieldValue() && "00" !== _getSubfieldValue() || (_changeValueOfSubfield("reset"), _changeValueOfSubfield("overwrite", 1)), _resetKeyPressCounter(), _sanitizeDaySelection()), enableAutoSwitch || 2 !== currentSubfieldKeyPressCount[subfieldPositions[currentFocusedSubfield]] || (currentSubfieldKeyPressCount[subfieldPositions[currentFocusedSubfield]] = 0), nextFieldFocus < 0 ? nextFieldFocus = 0 : nextFieldFocus > 2 ? nextFieldFocus = 2 : e && e.stopPropagation && e.stopPropagation(), _setSelectionRange(nextFieldFocus)
            },
            _setSelectionRange = function(set) {
                var focusRange = [];
                if (!Array.isArray(set) && "number" != typeof set) return console.error("invalid set to focus"), !1;
                focusRange = Array.isArray(set) ? set : subfieldRanges[set], currentFocusedSubfield = placeholder.substring(focusRange[0], focusRange[0] + 1).toLowerCase(), mobile && _mobileBehaviour.focusSubfieldSensor(currentFocusedSubfield), field.setSelectionRange ? field.setSelectionRange(focusRange[0], focusRange[1]) : _selectSomeTextInsideInput(field, focusRange[0], focusRange[1])
            },
            _getUnixTimestampValue = function(value) {
                return moment.utc(value, "YYYY-MM-DD", !0).valueOf()
            },
            _setValue = function(val) {
                val = val || _formatPlaceholder(), currentValue = field.value = val;
                var isoValue = _getISOValue();
                onValueChange(isoValue, _getUnixTimestampValue(isoValue))
            };
        return {
            focus: function() {
                mobile || (_.defer(function() {
                    item.focus()
                }), _setSelectionRange([0, _getEndOfFirstItem()]))
            },
            blur: function() {
                mobile || item.blur()
            },
            render: function() {
                return 8 === structure.length && (_checkOrderOfFields(), mobile ? _mobileBehaviour.testNativeAvailable() ? (field.setAttribute("data-placeholder", _mobileBehaviour.formatPlaceholder()), _addEventListener(field, "change", onChange, !0)) : (_mobileBehaviour.ghostInput = _mobileBehaviour.transformField(), field = _mobileBehaviour.buildOutput(), _mobileBehaviour.createSensors()) : (field.setAttribute("onCut", "return false;"), field.setAttribute("onPaste", "return false;"), _addEventListener(field, "click", _clickAndFocus, !0), _addEventListener(field, "keydown", _keyBehaviour, !0)), _setValue(), this)
            },
            setValueFromUnixTimestamp: function(unixTimestamp) {
                var getDateUserSpecificFormat = function(structure, separator) {
                    return structure.match(/(YYYY|MM|DD)/g).join(separator)
                };
                _setValue(function(timestamp, structure, separator) {
                    return timestamp = parseInt(timestamp, 10), _.isNaN(timestamp) ? null : moment.utc(timestamp).format(getDateUserSpecificFormat(structure, separator))
                }(unixTimestamp, structure, separator))
            },
            value: _getValue,
            setValue: _setValue,
            test: {
                _keyBehaviour: _keyBehaviour,
                _setFocusOnSubfield: _setFocusOnSubfield
            }
        }
    }
}
var __slice = [].slice;
window.namespace = function(target, name, block) {
    var item, top, _i, _len, _ref, _ref1;
    for (arguments.length < 3 && (_ref = [window].concat(__slice.call(arguments)), target = _ref[0], name = _ref[1], block = _ref[2]), top = target, _ref1 = name.split("."), _i = 0, _len = _ref1.length; _i < _len; _i++) item = _ref1[_i], target = target[item] || (target[item] = {});
    return block(target, top)
};
var console;
$.extend($.easing, {
        easeOutCubic: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b
        },
        easeInCubic: function(x, t, b, c, d) {
            return c * (t /= d) * t * t + b
        }
    }), window.console || (console = {}), console && !console.log && (console.log = function() {}),
    function() {
        var Typeform, getResizeEventName = function(browser) {
            var name = "resize";
            return "touch" === browser && (name = "orientationchange"), name
        };
        Typeform = function() {
            function Typeform(element, logicJumpsController, scoreCalculator, priceCalculator, submitButton, settings, currencyFormatter, numberFormatter, controlsFactory, observer, outrosCollection, hiddenFields, performanceLogger, submissionRepository, featureService) {
                var resizeEventName, self, timeout, self = this;
                this.logicJumpsController = logicJumpsController, this.scoreCalculator = scoreCalculator, this.priceCalculator = priceCalculator, this.submitButton = submitButton, this.currencyFormatter = currencyFormatter, this.numberFormatter = numberFormatter, this.controlsFactory = controlsFactory, this.observer = observer, this.outrosCollection = outrosCollection, this.hiddenFields = hiddenFields, this.performanceLogger = performanceLogger, this.submissionRepository = submissionRepository, this.featureService = featureService, this.settings = $.extend({}, defaults, settings), this.setIsMobile(), this.templates = {
                    stripeDescription: $("#stripe-field-description").html(),
                    stripeLogo: $("#stripe-logo").html()
                }, this.$typeform = $(element), $("body").addClass("resizing"), this.init(), _.defer(function() {
                    return self.start()
                }), resizeEventName = getResizeEventName(settings.browser), timeout = "touch" === this.settings.browser ? 1e3 : 200, $(window).on(resizeEventName, _.debounce(function() {
                    return "touch" === Globals.browser && $(":focus").blur(), $("body").addClass("resizing"), self.Loader.show()
                }, timeout, !0)), $(window).on(resizeEventName, _.debounce(function() {
                    return self.resize(), self.Loader.hide()
                }, timeout)), Globals.isEmbed && Globals.embedOptions.embedIsWidget && "default" === Globals.browser && $(window).on("message mouseup", function(e) {
                    ("mouseup" === e.type || "message" === e.type && "embed-focus" === e.originalEvent.data) && self.Form.scroll.focus(self.Form.scroll.getCurrent(), !0)
                })
            }
            var afterHideLoader, defaults, hideInitialLoad, initializeLogicJumps, initializePiping, setEmptyAlert, showCurrentPage;
            return defaults = {
                browser: "default",
                parent: !1,
                uid: 0
            }, Typeform.prototype.setIsMobile = function() {
                return Globals.isMobile = "touch" === this.settings.browser && $(window).width() < 600
            }, Typeform.prototype.init = function() {
                var $form, $intro, self = this;
                this.Loader = new App.Loader($("#loader"), this.settings.showLoadingBranding, App.IocContainer.performanceLogger), this.extend(), $intro = this.$typeform.find(".intro"), this.hasIntro = $intro.length, $form = this.$typeform.find(".form"), this.hasForm = $form.length, this.hasIntro && (this.Intro = new App.Screen($intro, this.observer, {
                    browser: Globals.browser,
                    onClose: function() {
                        return self.hasForm ? (self.Form.show(), self.Form.open()) : setEmptyAlert()
                    }
                })), this.hasForm && (this.Form = new App.Form($form, this.logicJumpsController, this.scoreCalculator, this.priceCalculator, this.submitButton, this.observer, this.templates, {
                    stripePublishableKey: this.settings.stripePublishableKey,
                    onClose: function() {
                        return self.settings.redirectAfterSubmitEnabled || self.outrosCollection.open(), Globals.showLogo && !self.outrosCollection.isBrandedOutroActive() && ("default" === Globals.browser ? _.delay(function() {
                            return App.Banner.render(App.Texts["banner-text"], App.Texts["banner-link"])
                        }, 800) : App.Banner.render(App.Texts["banner-text"], App.Texts["banner-link"], !0)), self
                    }
                }, this.currencyFormatter, this.numberFormatter, this.controlsFactory, this.submissionRepository, this.featureService)), $("#phishingLink").length && $("#phishingLink").attr("href", $("#phishingLink").attr("href").replace("{{UID}}", this.settings.uid))
            }, Typeform.prototype.start = function() {
                var self = this;
                return this.Loader.show(), this.resize(), _.defer(function() {
                    $("body").addClass("form-ready").trigger("form-ready"), hideInitialLoad.call(self), initializePiping.call(self), self.hasForm && initializeLogicJumps.call(self), showCurrentPage.call(self), afterHideLoader.call(self), Globals.isEmbed && Globals.embedOptions.embedIsWidget && parent.postMessage("form-ready", "*"), self.uiWebViewWorkaround(), App.Tracking.presentConversation()
                })
            }, Typeform.prototype.resize = function(callback) {
                return $("body").addClass("resizing"), this.setIsMobile(), this.hasIntro && this.Intro.resize(), this.hasForm && this.Form.resize($(window).height()), this.outrosCollection.resize(), $("body").removeClass("resizing")
            }, setEmptyAlert = function() {
                return $("<div class='empty-form primaryColor fontFamily'>" + App.Texts["form-empty"] + "</div>").fadeIn(200).appendTo($("#typeform"))
            }, Typeform.prototype.extend = function() {
                var $asterisk, self = this;
                if (this.updateFontClass(settings.font), $("body").removeClass("preload"), "preview" === this.settings.parent && (document.domain = "ma.com"), $("input,textarea,select").each(function() {
                        return $(this).attr("autocomplete", "off")
                    }), $asterisk = $("<span class='asterisk'>*</span>"), this.$typeform.find(".questions > .required").each(function() {
                        return $(this).find(".question").children("span").append($asterisk.clone())
                    }), App.Utils.setContainerColor(App.Utils.getCssValue("backgroundColor", "background-color"), App.Utils.getCssValue("secondaryColor", "color")), "default" === Globals.browser && ("field" === this.settings.parent ? $("#typeform").on("updateControl", this, _updateControl) : "design" !== this.settings.parent && "preview" !== this.settings.parent || (parent.previewReady(), $("#typeform").on("updateStyle", _updateStyle).on("loadingFont", function() {
                        return self.Loader.show()
                    }).on("appliedFont", function() {
                        return setTimeout(function() {
                            return self.resize(), self.Loader.hide()
                        }, 200)
                    }))), parent) return $(document).on("keydown", function(e) {
                    var key;
                    if (key = document.all ? e.keyCode : e.which, App.Keyboard.isEsc(key)) return parent.postMessage("ESC", "*")
                })
            }, Typeform.prototype.updateFontClass = function(font) {
                var fontName;
                if (fontName = this.getFont(font)) return $("body").alterClass("font-family-*", "font-family-" + fontName)
            }, Typeform.prototype.getFont = function(fontStr) {
                if (fontStr) return fontStr.split(":")[0].replace(/\+/g, "-").toLowerCase()
            }, Typeform.prototype.uiWebViewWorkaround = function() {
                var $introButton = $(".intro.screen .js-intro-button");
                if (Globals.isMobile && $introButton.length) {
                    var maxHeight = Math.max(document.documentElement.clientHeight, document.body.clientHeight, window.innerHeight, $introButton[0].getBoundingClientRect().bottom);
                    setTimeout(function() {
                        $("body").animate({
                            scrollTop: maxHeight
                        }, 500, "swing")
                    }, 800)
                }
            }, initializePiping = function() {
                return this.textConnector = new App.TextConnector({
                    appSettings: this.settings,
                    form: this.Form,
                    intro: this.Intro,
                    outros: this.outrosCollection.get(),
                    scoreCalculator: this.scoreCalculator,
                    priceCalculator: this.priceCalculator,
                    currencyFormatter: this.currencyFormatter,
                    numberFormatter: this.numberFormatter,
                    hiddenFields: this.hiddenFields
                }), $(document).data("hidden", this.textConnector.getHiddenFields())
            }, initializeLogicJumps = function() {
                return this.Form.check()
            }, hideInitialLoad = function() {
                return this.hasIntro ? this.Loader.hideInitialLoad(this.Intro) : this.Loader.hideInitialLoad()
            }, showCurrentPage = function() {
                return this.outrosCollection.hide(), this.hasIntro ? (this.hasForm && this.Form.hide(), this.Intro.show(), this.Intro.open()) : "field" === Globals.parent ? _.isEmpty(this.outrosCollection.get()) ? this.Form.open() : (this.hasForm && this.Form.hide(), Globals.showLogo && App.Banner.render(App.Texts["banner-text"], App.Texts["banner-link"]), this.outrosCollection.resetActive(), this.outrosCollection.open()) : this.hasForm ? this.Form.open(0, !1) : setEmptyAlert()
            }, afterHideLoader = function() {
                if (this.hasForm) return this.Form.afterHideLoader()
            }, Typeform
        }(), namespace("App", function(exports) {
            return exports.Typeform = Typeform
        })
    }.call(this);
var Loader;
Loader = function() {
        function Loader($loader, delay, performanceLogger) {
            this.$loader = $loader, this.delay = delay, this.performanceLogger = performanceLogger
        }
        return Loader.prototype.minimumDelay = 1500, Loader.prototype.showCalled = null, Loader.prototype.show = function() {
            return this.showCalled = new Date, this.$loader.show()
        }, Loader.prototype.hide = function(intro) {
            return intro && intro.attachment && intro.attachment.isAttachmentAGif() && intro.attachment.$img.hide(), intro && intro.attachment && intro.attachment.isAttachmentAGif() && (intro.attachment.$img.css({
                opacity: 0
            }), intro.attachment.$img.show(), intro.attachment.restartGif()), this.$loader.hide()
        }, Loader.prototype.hideInitialLoad = function(intro) {
            var timeElapsed, _this = this;
            return this.performanceLogger.typeformLoaded(), timeElapsed = new Date - this.showCalled, this.delay && timeElapsed < this.minimumDelay ? setTimeout(function() {
                return _this.hide(intro)
            }, this.minimumDelay - timeElapsed) : this.hide(intro)
        }, Loader
    }(), namespace("App", function(exports) {
        return exports.Loader = Loader
    }),
    function() {
        function UrlModelFactory(url) {
            var VARIABLE_REGEX = /[^[\{{][a-zA-Z0-9_]+(?=}})/g,
                TEMPLATE_SETTINGS = {
                    interpolate: /\{\{([a-zA-Z0-9_ ]+)\}\}/g
                };
            return new(Backbone.Model.extend({
                initialize: function() {
                    var _this = this,
                        usedVars = this.getUsedVars(url);
                    _.each(usedVars, function(varname) {
                        _this.set(varname, undefined)
                    })
                },
                toUrl: function() {
                    return _.unescape(_.template(url, this.toJSON(), TEMPLATE_SETTINGS))
                },
                getUsedVars: function() {
                    return url.match(VARIABLE_REGEX)
                }
            }))
        }
        namespace("App", function(exports) {
            exports.UrlModelFactory = UrlModelFactory
        })
    }();
var Screen, UrlModelFactory;
UrlModelFactory = App.UrlModelFactory, Screen = function() {
    function Screen($screen, observer, settings) {
        this.$screen = $screen, this.observer = observer, this.settings = $.extend({}, defaults, settings), this.id = this.$screen.attr("id"), this.hasButton = this.$screen.data("field"), this.isActive = this.settings.isActive, this.isDefaultBranded = this.$screen.hasClass("defaultOutroBranded"), this.init()
    }
    var defaults, getUrlIcon, loadShareIcon, onWindowLoad, shareIcons;
    return Screen.prototype.id = null, Screen.prototype.isActive = !0, Screen.prototype.hasButton = !0, Screen.prototype.isDefaultBranded = !1, Screen.prototype.timeoutAttachment = null, defaults = {
        onClose: function() {},
        persistentFooter: !0,
        templateSettings: {
            interpolate: /\{\{([a-zA-Z0-9_ ]+)\}\}/g
        }
    }, shareIcons = ["facebook", "twitter", "linkedin", "googleplus", "buffer"], getUrlIcon = function(iconName) {
        return window.settings.baseAssetPath + "quickyformapp/images/sharing-icons/share-" + iconName + ".png"
    }, Screen.prototype.init = function() {
        var $attachment;
        return this.$contentWrapper = this.$screen.find(".content-wrapper"), this.$media = this.$contentWrapper.find(".media"), this.$text = this.$contentWrapper.find(".text"), this.$description = this.$contentWrapper.find(".description"), this.$buttonWrapper = this.$contentWrapper.find(".button-wrapper"), this.$button = this.$screen.find(".button"), this.$footer = this.$screen.find(".footer"), this.connectRedirectUrl(), this.loadShareIcons(), $attachment = this.$screen.find(".attachment"), $attachment.length ? this.attachment = new App.Attachment($attachment, {
            useLazyLoad: !0,
            preventUpdate: !0,
            browser: this.settings.browser
        }) : this.attachment = !1
    }, Screen.prototype.loadShareIcons = function() {
        return this.$shareIconsWrapper = this.$contentWrapper.find(".social"), window.addEventListener ? window.addEventListener("load", _.bind(onWindowLoad, this)) : window.attachEvent("onload", _.bind(onWindowLoad, this))
    }, Screen.prototype.open = function() {
        var self;
        return self = this, "field" !== Globals.parent && this.bindEvents(), $(window).scrollTop(0), this.$screen.fadeIn(Globals.pageTransitionDelay, function() {
            var $iframe;
            return self.attachment && self.attachment.load(), $iframe = self.$screen.find("iframe"),
                $iframe.attr("src", $iframe.attr("src"))
        })
    }, Screen.prototype.close = function() {
        var self;
        if (self = this, this.$screen.fadeOut(Globals.pageTransitionDelay, function() {
                return self.settings.onClose(), self.$screen.remove()
            }), this.unbindEvents(), !App.Tracking.hasConversationStarted()) return App.Tracking.startConversation()
    }, Screen.prototype.show = function() {
        return this.$screen.show()
    }, Screen.prototype.hide = function() {
        return this.$screen.hide()
    }, Screen.prototype.bindEvents = function() {
        var redirectUrl, self;
        if (self = this, redirectUrl = _.template(this.getRedirectURL(), this.urlModel.toJSON(), this.settings.templateSettings), redirectUrl && "reload" !== redirectUrl && self.$button.attr("href", _.unescape(redirectUrl)), this.$screen.on("touchend.screen mouseup.screen", ".button", this, function(e) {
                return self = e.data, "reload" === redirectUrl ? (location.reload(!0), !1) : "" === redirectUrl ? (self.close(), !1) : void 0
            }), Globals.useKeyboardEvents) return $(document).on("keydown.screen", function(e) {
            var key;
            if (key = document.all ? e.keyCode : e.which, App.Keyboard.isEnter(key) || App.Keyboard.isTab(key)) return "reload" === redirectUrl || "" === redirectUrl ? self.hasButton && self.$button.mouseup() : window === top ? window.location.href = redirectUrl : parent.postMessage(redirectUrl, "*"), !1
        })
    }, Screen.prototype.unbindEvents = function() {
        return this.$screen.off(".screen"), $(document).off(".screen"), $("body").off(".touchScroll")
    }, Screen.prototype.getRedirectURL = function() {
        var $redirect, rUrl;
        return $redirect = this.$screen.find("#redirect-button-url"), rUrl = "", $redirect.length && (rUrl = _.unescape($redirect.val()), rUrl ? this.$screen.find(".button").attr("href", rUrl) : rUrl = "reload"), rUrl
    }, Screen.prototype.getUrlModel = function() {
        return this.urlModel
    }, Screen.prototype.connectRedirectUrl = function() {
        var url;
        return url = this.getRedirectURL(), this.urlModel = UrlModelFactory(url)
    }, Screen.prototype.update = function(obj) {
        var $attachment, $image, $media, $placeholder, attachment, attachmentObject, resizeScreen, self;
        return self = this, "undefined" != typeof obj.text && ("" === obj.text ? this.$text.hide() : this.$text.show().html(obj.text)), "undefined" != typeof obj.description && ("" === obj.description ? this.$description.hide() : this.$description.show().html(obj.description)), "undefined" != typeof obj.button && ("" === obj.button ? (this.persistentFooter = !1, this.$screen.find(".button-wrapper").hide(), this.$button = this.$screen.find(".button-wrapper").children(".button")) : (this.persistentFooter = !0, this.$screen.find(".button-wrapper").show().children(".button").html(obj.button), this.$button = this.$screen.find(".misco"))), "undefined" != typeof obj.social && (!0 === obj.social && this.$screen.find(".social").show(), !1 === obj.social && this.$screen.find(".social").hide()), $media = this.$screen.find(".media"), $placeholder = $media.children(".placeholder"), $image = $media.children(".attachment"), attachmentObject = obj.attachment, "string" == typeof attachmentObject ? "placeholder" === attachmentObject ? ($media.show(), $placeholder.show(), $image.remove()) : ($media.hide(), $image.remove()) : "object" == typeof attachmentObject && ($attachment = $media.children(".attachment"), $attachment.length && $attachment.remove(), $attachment = $("<div class='attachment'/>"), $media.prepend($attachment), "" !== attachmentObject.image && $attachment.html('<img src="" width="0" height="0"/>'), $media.show().css("height", ""), $attachment.data("attachment", attachmentObject), attachment = new App.Attachment($attachment, {
            useLazyLoad: !0,
            browser: this.settings.browser,
            useFreezeFrame: !1
        }), clearTimeout(this.timeoutAttachment), attachment.load(), $placeholder.hide()), resizeScreen = function() {
            var height;
            return height = $placeholder.width() / 3, $placeholder.css("height", Math.max(160, height))
        }, $(window).off("resize.intro-update").on("resize.intro-update", resizeScreen), resizeScreen(), self.$screen.find(".attachment").css("height", "").removeClass("layout-float"), self.$media.css("height", ""), _.defer(function() {
            return self.resize()
        })
    }, Screen.prototype.resize = function() {
        this.resizeComponents(), this.preCalculateContentHeight(), this.resizeLayout()
    }, Screen.prototype.resizeComponents = function() {
        var $button, $content, $img, $social, $video, ch, cw, h, imageHeight, imageWidth, margin, maxWidth, offset, padding, sep, w;
        if (imageHeight = imageWidth = 0, $content = this.$contentWrapper.children(".content"), this.$screen.removeClass("layout-float"), $content.removeClass("scrollable"), this.$text.css("padding-top", 0), $content.css("padding-top", ""), this.$text.css("margin-left", 0), $button = this.$buttonWrapper.children(".button"), $button.show(), maxWidth = window.innerWidth, $img = this.$media.children(".attachment").find("img"), $video = this.$media.children(".attachment").find(".video"), $social = $content.find(".social"), sep = 30, !0 === Globals.isTouch && maxWidth < Globals.responsiveThreshold && (sep = 18), padding = "" !== $.trim(this.$text.html()) && ($img.length || $video.length) ? sep : 0, this.$text.css("padding-top", padding), margin = $button.length && ($img.length || $video.length || "" !== $.trim(this.$text.html()) || "" !== $.trim(this.$description.html())) ? sep : 0, this.$buttonWrapper.css("margin-top", margin), $img.length && (imageHeight = $img.data("height"), imageWidth = $img.data("width"), imageHeight || (imageHeight = $img.parent().data().height, $img.data("height", imageHeight)), imageWidth || (imageWidth = $img.parent().data().width, $img.data("width", imageWidth)), cw = Math.min(this.$media.width(), imageWidth), ch = cw * imageHeight / imageWidth, $img.css({
                width: cw,
                height: ch
            }), $img.parent().css({
                width: cw,
                height: ch
            }), $button.length && $button[0].offsetTop + 100 > window.innerHeight && (cw < $content.width() - 400 ? (this.$screen.addClass("layout-float"), this.$text.css("margin-left", cw + 30), this.$text.height() < $img.height() && this.$text.css("padding-top", (this.$media.height() - this.$text.height()) / 2)) : this.$screen.removeClass("layout-float")), this.$text[0].offsetTop + 100 > window.innerHeight && (offset = 178, Globals.isMobile ? offset = 135 : "default" === Globals.browser && (offset = 198), h = Math.max(ch - (this.$text[0].offsetTop - window.innerHeight + offset), 100), w = h * cw / ch, $img.css({
                width: w,
                height: h
            }), $img.parent().css({
                width: w,
                height: h
            }), ch = h, cw = w), $social.length && $social.hasClass($social[0].offsetTop + 100 > window.innerHeight))) return h = Math.max(Math.min(h, ch - ($social[0].offsetTop - window.innerHeight + 138)), 100), w = h * cw / ch, $img.css({
            width: w,
            height: h
        }), $img.parent().css({
            width: w,
            height: h
        }), ch = h, cw = w
    }, Screen.prototype.preCalculateContentHeight = function() {
        var $content;
        $content = this.$contentWrapper.children(".content"), this.contentHeight = $content.height()
    }, Screen.prototype.resizeLayout = function() {
        var $button, $content, contentHeight, maxHeight, maxWidth, offsetTop, scrollOffset, showBranding;
        if ($button = this.$buttonWrapper.children(".button"), $content = this.$contentWrapper.children(".content"), contentHeight = this.contentHeight, maxHeight = window.innerHeight, maxWidth = window.innerWidth, $("body").hasClass("branding") && this.$contentWrapper.parent().hasClass("outro") && ("default" !== Globals.browser ? maxHeight -= 40 : maxHeight -= 60), !1, "touch" === Globals.browser && maxWidth < Globals.responsiveThreshold && !0, this.$footer) {
            if (Globals.isMobile) return $button.length ? ($button.parent().hide(), this.$footer.show(), scrollOffset = 80) : scrollOffset = 0, maxHeight - scrollOffset < contentHeight ? $content.addClass("scrollable") : $("body").hasClass("branding") && this.$contentWrapper.parent().hasClass("outro") ? $content.css("padding-top", (maxHeight - scrollOffset - $content.height()) / 2 + 40) : $content.css("padding-top", (maxHeight - scrollOffset - $content.height()) / 2);
            if ($("body").hasClass("branding") && this.$contentWrapper.parent().hasClass("outro") ? contentHeight < maxHeight - 100 ? ($content.css("padding-bottom", (maxHeight - contentHeight) / 2 + 20), $content.css("padding-top", (maxHeight - contentHeight) / 2 + 22), Globals.isTouch && $content.css("padding-top", (maxHeight - contentHeight) / 2 + 40)) : ($content.css({
                    "padding-top": 40,
                    "padding-bottom": 100
                }), Globals.isTouch && $content.css("padding-top", (maxHeight - contentHeight) / 2 + 60)) : contentHeight < maxHeight - 40 ? $content.css("padding-top", (maxHeight - contentHeight) / 2) : this.$contentWrapper.parent().hasClass("outro") ? $content.css({
                    "padding-top": 40,
                    "padding-bottom": 100
                }) : $content.css({
                    "padding-top": 40,
                    "margin-bottom": 40
                }), $button.length && (offsetTop = 25, this.$buttonWrapper.offset().top - window.pageYOffset - maxHeight > -79 ? (this.$footer.show(), $button.hide(), this.$buttonWrapper.css("margin-top", 0), $content.addClass("scrollable"), showBranding && $content.css("padding-top", parseInt($content.css("padding-top")) + offsetTop)) : (this.$footer.hide(), $button.show(), $content.removeClass("scrollable"), showBranding && $content.css("padding-top", parseInt($content.css("padding-top")) - offsetTop)), (showBranding = "default" === Globals.browser && this.$contentWrapper.parent().hasClass("outro") && $("body").hasClass("branding")) && this.$footer.is(":visible"))) return $("body").addClass("banner-top")
        }
    }, onWindowLoad = function() {
        return _.each(shareIcons, loadShareIcon, this)
    }, loadShareIcon = function(iconName) {
        return this.$shareIconsWrapper.find(".icon-" + iconName).attr("src", getUrlIcon(iconName))
    }, Screen
}(), namespace("App", function(exports) {
    return exports.Screen = Screen
});
var validation;
validation = {
    creditCardNumber: function(value) {
        return {
            isValid: Stripe.card.validateCardNumber(value),
            errorMessage: App.Texts.invalid_number
        }
    },
    creditCardCvc: function(value) {
        return {
            isValid: Stripe.card.validateCVC(value),
            errorMessage: App.Texts.invalid_cvc
        }
    }
}, namespace("App", function(exports) {
    return exports.validation = validation
});
var Utils;
Utils = {
        getWindowHeight: function() {
            var d, e, g, w;
            return w = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w.innerHeight || e.clientHeight || g.clientHeight
        },
        getCssValue: function(cls, attr) {
            var temp, value;
            return temp = $("<div class='" + cls + "'></div>"), $("body").append(temp), value = temp.css(attr), temp.remove(), value
        },
        getControlValue: function(control) {
            return control instanceof Control ? control.field.getValue().toString() : control.pipeValue
        },
        isControlRequired: function(control) {
            return control.model.attributes.required
        },
        isGroupControl: function(control) {
            return control instanceof Group
        },
        setStepClassByLightness: function($el) {
            var backgroundColor, hexBC, lightness, step;
            backgroundColor = App.Utils.getCssValue("backgroundColor", "background-color"), hexBC = App.Utils.rgb2hex(backgroundColor), lightness = $.husl.fromHex(hexBC)[2], step = App.Utils.getStepByLightness(lightness), $el.removeClass("step0 step1 step2 step3 step4 step5").addClass("step" + step)
        },
        getStepByLightness: function(lightness) {
            switch (!1) {
                case !(lightness > 80):
                    return 0;
                case !(lightness > 60):
                    return 1;
                case !(lightness > 40):
                    return 2;
                case !(lightness > 20):
                    return 3;
                case !(lightness > 9):
                    return 4;
                default:
                    return 5
            }
        },
        selectEffect: function($el) {
            return $el.selectEffect(2)
        },
        setContainerColor: function(backgroundColor, secondaryColor) {
            var hexBC, hexSC, lightness, step;
            if (void 0 !== backgroundColor && void 0 !== secondaryColor) return hexBC = App.Utils.rgb2hex(backgroundColor), hexSC = App.Utils.rgb2hex(secondaryColor), lightness = $.husl.fromHex(hexBC)[2], step = App.Utils.getStepByLightness(lightness), window.containerStep = step, $(".container, .style-transparent-choice").each(function() {
                return $(this).removeClass("step0 step1 step2 step3 step4 step5"), $(this).addClass("step" + step), $.husl.fromHex(hexSC)[2]
            }), $(".tooltip").each(function() {
                return $(this).removeClass("dark light"), lightness > 80 ? $(this).addClass("dark") : $(this).addClass("light"), $.husl.fromHex(hexSC)[2]
            }), lightness > 80 && $("body").addClass("dark"), $(".header,.footer, .lightness-step,.footer-confirm").removeClass("step0 step1 step2 step3 step4 step5").addClass("step" + step)
        },
        rgb2hex: function(color) {
            var rgb;
            return rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), _.isNull(rgb) ? color : "#" + App.Utils.hex(rgb[1]) + App.Utils.hex(rgb[2]) + App.Utils.hex(rgb[3])
        },
        hex: function(x) {
            var hexDigits;
            if (hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], void 0 !== x) return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16]
        },
        getCaret: function(el) {
            var r, rc, re;
            return el.selectionStart ? el.selectionStart : document.selection ? (el.focus(), null == (r = document.selection.createRange()) ? 0 : (re = el.createTextRange(), rc = re.duplicate(), re.moveToBookmark(r.getBookmark()), rc.setEndPoint("EndToStart", re), rc.text.length)) : 0
        },
        isCaretAtStart: function(el) {
            return 0 === App.Utils.getCaret(el[0])
        },
        isCaretAtEnd: function(el) {
            return App.Utils.getCaret(el[0]) === el.val().length
        },
        remoteLog: function(str) {
            return $.ajax({
                data: "file=test.txt&data=" + str,
                url: "/demo/log.php"
            })
        },
        letters: "abcdefghijklmnopqrstuvwxyz",
        getLetter: function(number) {
            var last, remaining;
            if (null == number && (number = null), _.isNumber(number)) return last = this.letters[number % this.letters.length], remaining = Math.floor(number / this.letters.length) - 1, (number < this.letters.length ? "" : this.getLetter(remaining)) + last
        }
    }, namespace("App", function(exports) {
        return exports.Utils = Utils
    }), $.fn.enable = function(op) {
        return $button = $(this), 1 == op ? ($button.addClass("enabled"), $button.removeClass("disabled")) : ($button.addClass("disabled"), $button.removeClass("enabled")), $button
    }, $.fn.replaceText = function(search, replace) {
        return this.each(function() {
            $(this).html($(this).html().replace(new RegExp(search, "g"), replace))
        })
    }, $.fn.shuffle = function() {
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max)
            },
            shuffled = $.map(allElems, function() {
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(!0)[0];
                return allElems.splice(random, 1), randEl
            });
        return this.each(function(i) {
            $(this).replaceWith($(shuffled[i]))
        }), $(shuffled)
    }, $.fn.translate3d = function(x, y, z) {
        return $(this).css(Globals.vendor + "transform", "translate3d(" + x + "px," + y + "px," + z + "px)")
    }, $.fn.alterClass = function(removals, additions) {
        var self = this;
        if (-1 === removals.indexOf("*")) return self.removeClass(removals), additions ? self.addClass(additions) : self;
        var patt = new RegExp("\\s" + removals.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");
        return self.each(function(i, it) {
            for (var cn = " " + it.className + " "; patt.test(cn);) cn = cn.replace(patt, " ");
            it.className = $.trim(cn)
        }), additions ? self.addClass(additions) : self
    }, $.fn.selectEffect = function(loop) {
        var elem = $(this);
        if ("default" == Globals.browser) {
            var loop = void 0 !== loop ? loop : 2,
                i = 2,
                $btn = elem.find(".button");
            $btn.removeClass("full");
            var doEffect = function() {
                elem.stop(!0, !0).animate({
                    opacity: 0
                }, 130, function() {
                    elem.animate({
                        opacity: 1
                    }, 130)
                })
            };
            doEffect();
            var it = setInterval(function() {
                doEffect(), ++i > loop && (clearInterval(it), $btn.addClass("full"))
            }, 261)
        }
        return elem
    },
    function(removeClass) {
        jQuery.fn.removeClass = function(value) {
            if (value && "function" == typeof value.test)
                for (var i = 0, l = this.length; i < l; i++) {
                    var elem = this[i];
                    if (1 === elem.nodeType && elem.className) {
                        for (var classNames = elem.className.split(/\s+/), n = classNames.length; n--;) value.test(classNames[n]) && classNames.splice(n, 1);
                        elem.className = jQuery.trim(classNames.join(" "))
                    }
                } else removeClass.call(this, value);
            return this
        }
    }(jQuery.fn.removeClass),
    function() {
        var conv, dotProduct, f, f_inv, fromLinear, lab_e, lab_k, m, m_inv, maxChroma, maxChromaD, refU, refV, refY, rgbPrepare, root, round, stylus, toLinear, _hradExtremum, _maxChroma;
        if (m = {
                R: [3.2406, -1.5372, -.4986],
                G: [-.9689, 1.8758, .0415],
                B: [.0557, -.204, 1.057]
            }, m_inv = {
                X: [.4124, .3576, .1805],
                Y: [.2126, .7152, .0722],
                Z: [.0193, .1192, .9505]
            }, .95047, refY = 1, 1.08883, refU = .19784, refV = .46834, lab_e = .008856, lab_k = 903.3, _maxChroma = function(L, H) {
                var cosH, hrad, sinH, sub1, sub2;
                return hrad = H / 360 * 2 * Math.PI, sinH = Math.sin(hrad), cosH = Math.cos(hrad), sub1 = Math.pow(L + 16, 3) / 1560896, sub2 = sub1 > .008856 ? sub1 : L / 903.3,
                    function(channel) {
                        var bottom, lbottom, m1, m2, m3, rbottom, top, _ref;
                        return _ref = m[channel], m1 = _ref[0], m2 = _ref[1], m3 = _ref[2], top = (.99915 * m1 + 1.05122 * m2 + 1.1446 * m3) * sub2, rbottom = .8633 * m3 - .17266 * m2, lbottom = .12949 * m3 - .38848 * m1, bottom = (rbottom * sinH + lbottom * cosH) * sub2,
                            function(limit) {
                                return L * (top - 1.05122 * limit) / (bottom + .17266 * sinH * limit)
                            }
                    }
            }, _hradExtremum = function(L) {
                var lhs, rhs, sub;
                return lhs = (Math.pow(L, 3) + 48 * Math.pow(L, 2) + 768 * L + 4096) / 1560896, rhs = .008856, sub = lhs > rhs ? lhs : 10 * L / 9033,
                    function(channel, limit) {
                        var bottom, hrad, m1, m2, m3, top, _ref;
                        return _ref = m[channel], m1 = _ref[0], m2 = _ref[1], m3 = _ref[2], top = -3015466475 * m3 * sub + 603093295 * m2 * sub - 603093295 * limit, bottom = 1356959916 * m1 * sub - 452319972 * m3 * sub, hrad = Math.atan2(top, bottom), 0 === limit && (hrad += Math.PI), hrad
                    }
            }, maxChroma = function(L, H) {
                var C, channel, limit, mc1, mc2, result, _i, _j, _len, _len1, _ref, _ref1;
                for (result = Infinity, mc1 = _maxChroma(L, H), _ref = ["R", "G", "B"], _i = 0, _len = _ref.length; _i < _len; _i++)
                    for (channel = _ref[_i], mc2 = mc1(channel), _ref1 = [0, 1], _j = 0, _len1 = _ref1.length; _j < _len1; _j++) limit = _ref1[_j], 0 < (C = mc2(limit)) && C < result && (result = C);
                return result
            }, maxChromaD = function(L) {
                var C, channel, he1, hrad, limit, minima_C, _i, _j, _len, _len1, _ref, _ref1;
                for (minima_C = [], he1 = _hradExtremum(L), _ref = ["R", "G", "B"], _i = 0, _len = _ref.length; _i < _len; _i++)
                    for (channel = _ref[_i], _ref1 = [0, 1], _j = 0, _len1 = _ref1.length; _j < _len1; _j++) limit = _ref1[_j], hrad = he1(channel, limit), C = maxChroma(L, 180 * hrad / Math.PI), minima_C.push(C);
                return Math.min.apply(Math, minima_C)
            }, dotProduct = function(a, b) {
                var i, ret, _i, _ref;
                for (ret = 0, i = _i = 0, _ref = a.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) ret += a[i] * b[i];
                return ret
            }, round = function(num, places) {
                var n;
                return n = Math.pow(10, places), Math.round(num * n) / n
            }, f = function(t) {
                return t > lab_e ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116
            }, f_inv = function(t) {
                return Math.pow(t, 3) > lab_e ? Math.pow(t, 3) : (116 * t - 16) / lab_k
            }, fromLinear = function(c) {
                return c <= .0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055
            }, toLinear = function(c) {
                var a;
                return a = .055, c > .04045 ? Math.pow((c + a) / (1 + a), 2.4) : c / 12.92
            }, rgbPrepare = function(tuple) {
                var ch, n, _i, _j, _len, _len1, _results;
                for (tuple = function() {
                        var _i, _len, _results;
                        for (_results = [], _i = 0, _len = tuple.length; _i < _len; _i++) n = tuple[_i], _results.push(round(n, 3));
                        return _results
                    }(), _i = 0, _len = tuple.length; _i < _len; _i++) {
                    if ((ch = tuple[_i]) < -1e-4 || ch > 1.0001) throw new Error("Illegal rgb value: " + ch);
                    ch < 0 && (ch = 0), ch > 1 && (ch = 1)
                }
                for (_results = [], _j = 0, _len1 = tuple.length; _j < _len1; _j++) ch = tuple[_j], _results.push(Math.round(255 * ch));
                return _results
            }, conv = {
                xyz: {},
                luv: {},
                lch: {},
                husl: {},
                huslp: {},
                rgb: {},
                hex: {}
            }, conv.xyz.rgb = function(tuple) {
                var B, G, R;
                return R = fromLinear(dotProduct(m.R, tuple)), G = fromLinear(dotProduct(m.G, tuple)), B = fromLinear(dotProduct(m.B, tuple)), [R, G, B]
            }, conv.rgb.xyz = function(tuple) {
                var B, G, R, X, Y, Z, rgbl;
                return R = tuple[0], G = tuple[1], B = tuple[2], rgbl = [toLinear(R), toLinear(G), toLinear(B)], X = dotProduct(m_inv.X, rgbl), Y = dotProduct(m_inv.Y, rgbl), Z = dotProduct(m_inv.Z, rgbl), [X, Y, Z]
            }, conv.xyz.luv = function(tuple) {
                var L, U, V, X, Y, Z, varU, varV;
                return X = tuple[0], Y = tuple[1], Z = tuple[2], varU = 4 * X / (X + 15 * Y + 3 * Z), varV = 9 * Y / (X + 15 * Y + 3 * Z), 0 === (L = 116 * f(Y / refY) - 16) ? [0, 0, 0] : (U = 13 * L * (varU - refU), V = 13 * L * (varV - refV), [L, U, V])
            }, conv.luv.xyz = function(tuple) {
                var L, U, V, X, Y, Z, varU, varV, varY;
                return L = tuple[0], U = tuple[1], V = tuple[2], 0 === L ? [0, 0, 0] : (varY = f_inv((L + 16) / 116), varU = U / (13 * L) + refU, varV = V / (13 * L) + refV, Y = varY * refY, X = 0 - 9 * Y * varU / ((varU - 4) * varV - varU * varV), Z = (9 * Y - 15 * varV * Y - varV * X) / (3 * varV), [X, Y, Z])
            }, conv.luv.lch = function(tuple) {
                var C, H, Hrad, L, U, V;
                return L = tuple[0], U = tuple[1], V = tuple[2], C = Math.pow(Math.pow(U, 2) + Math.pow(V, 2), .5), Hrad = Math.atan2(V, U), H = 360 * Hrad / 2 / Math.PI, H < 0 && (H = 360 + H), [L, C, H]
            }, conv.lch.luv = function(tuple) {
                var C, H, Hrad, L, U, V;
                return L = tuple[0], C = tuple[1], H = tuple[2], Hrad = H / 360 * 2 * Math.PI, U = Math.cos(Hrad) * C, V = Math.sin(Hrad) * C, [L, U, V]
            }, conv.husl.lch = function(tuple) {
                var C, H, L, S, max;
                return H = tuple[0], S = tuple[1], (L = tuple[2]) > 99.9999999 ? [100, 0, H] : L < 1e-8 ? [0, 0, H] : (max = maxChroma(L, H), C = max / 100 * S, [L, C, H])
            }, conv.lch.husl = function(tuple) {
                var C, H, L, S, max;
                return L = tuple[0], C = tuple[1], H = tuple[2], L > 99.9999999 ? [H, 0, 100] : L < 1e-8 ? [H, 0, 0] : (max = maxChroma(L, H), S = C / max * 100, [H, S, L])
            }, conv.huslp.lch = function(tuple) {
                var C, H, L, S, max;
                return H = tuple[0], S = tuple[1], (L = tuple[2]) > 99.9999999 ? [100, 0, H] : L < 1e-8 ? [0, 0, H] : (max = maxChromaD(L), C = max / 100 * S, [L, C, H])
            }, conv.lch.huslp = function(tuple) {
                var C, H, L, S, max;
                return L = tuple[0], C = tuple[1], H = tuple[2], L > 99.9999999 ? [H, 0, 100] : L < 1e-8 ? [H, 0, 0] : (max = maxChromaD(L), S = C / max * 100, [H, S, L])
            }, conv.rgb.hex = function(tuple) {
                var ch, hex, _i, _len;
                for (hex = "#", tuple = rgbPrepare(tuple), _i = 0, _len = tuple.length; _i < _len; _i++) ch = tuple[_i], ch = ch.toString(16), 1 === ch.length && (ch = "0" + ch), hex += ch;
                return hex
            }, conv.hex.rgb = function(hex) {
                var b, g, r;
                return "#" === hex.charAt(0) && (hex = hex.substring(1, 7)), r = hex.substring(0, 2), g = hex.substring(2, 4), b = hex.substring(4, 6), [parseInt(r, 16) / 255, parseInt(g, 16) / 255, parseInt(b, 16) / 255]
            }, conv.lch.rgb = function(tuple) {
                return conv.xyz.rgb(conv.luv.xyz(conv.lch.luv(tuple)))
            }, conv.rgb.lch = function(tuple) {
                return conv.luv.lch(conv.xyz.luv(conv.rgb.xyz(tuple)))
            }, conv.husl.rgb = function(tuple) {
                return conv.lch.rgb(conv.husl.lch(tuple))
            }, conv.rgb.husl = function(tuple) {
                return conv.lch.husl(conv.rgb.lch(tuple))
            }, conv.huslp.rgb = function(tuple) {
                return conv.lch.rgb(conv.huslp.lch(tuple))
            }, conv.rgb.huslp = function(tuple) {
                return conv.lch.huslp(conv.rgb.lch(tuple))
            }, root = {}, "undefined" != typeof require && null !== require) try {
            stylus = require("stylus"), root = function() {
                return function(style) {
                    return style.define("husl", function(H, S, L, A) {
                        var B, G, R, _ref;
                        return _ref = rgbPrepare(conv.husl.rgb([H.val, S.val, L.val])), R = _ref[0], G = _ref[1], B = _ref[2], new stylus.nodes.RGBA(R, G, B, null != A ? A.val : 1)
                    }), style.define("huslp", function(H, S, L, A) {
                        var B, G, R, _ref;
                        return _ref = rgbPrepare(conv.huslp.rgb([H.val, S.val, L.val])), R = _ref[0], G = _ref[1], B = _ref[2], new stylus.nodes.RGBA(R, G, B, null != A ? A.val : 1)
                    })
                }
            }
        } catch (_error) {}
        root.fromRGB = function(R, G, B) {
            return conv.rgb.husl([R, G, B])
        }, root.fromHex = function(hex) {
            return conv.rgb.husl(conv.hex.rgb(hex))
        }, root.toRGB = function(H, S, L) {
            return conv.husl.rgb([H, S, L])
        }, root.toHex = function(H, S, L) {
            return conv.rgb.hex(conv.husl.rgb([H, S, L]))
        }, root.p = {}, root.p.toRGB = function(H, S, L) {
            return conv.xyz.rgb(conv.luv.xyz(conv.lch.luv(conv.huslp.lch([H, S, L]))))
        }, root.p.toHex = function(H, S, L) {
            return conv.rgb.hex(conv.xyz.rgb(conv.luv.xyz(conv.lch.luv(conv.huslp.lch([H, S, L])))))
        }, root.p.fromRGB = function(R, G, B) {
            return conv.lch.huslp(conv.luv.lch(conv.xyz.luv(conv.rgb.xyz([R, G, B]))))
        }, root.p.fromHex = function(hex) {
            return conv.lch.huslp(conv.luv.lch(conv.xyz.luv(conv.rgb.xyz(conv.hex.rgb(hex)))))
        }, root._conv = conv, root._maxChroma = maxChroma, root._rgbPrepare = rgbPrepare, "undefined" != typeof module && null !== module && (module.exports = root), "undefined" != typeof jQuery && null !== jQuery && (jQuery.husl = root)
    }.call(this),
    function() {
        var root = this,
            previousUnderscore = root._,
            breaker = {},
            ArrayProto = Array.prototype,
            ObjProto = Object.prototype,
            FuncProto = Function.prototype,
            push = ArrayProto.push,
            slice = ArrayProto.slice,
            concat = ArrayProto.concat,
            toString = ObjProto.toString,
            hasOwnProperty = ObjProto.hasOwnProperty,
            nativeIsArray = Array.isArray,
            nativeKeys = Object.keys,
            nativeBind = FuncProto.bind,
            _ = function(obj) {
                return obj instanceof _ ? obj : this instanceof _ ? void(this._wrapped = obj) : new _(obj)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _), exports._ = _) : root._ = _, _.VERSION = "1.6.0", _.each = _.forEach = function(obj, iterator, context) {
            if (null == obj) return obj;
            if (obj.length === +obj.length) {
                for (var i = 0, length = obj.length; i < length; i++)
                    if (iterator.call(context, obj[i], i, obj) === breaker) return
            } else
                for (var keys = _.keys(obj), i = 0, length = keys.length; i < length; i++)
                    if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker) return;
            return obj
        }, _.map = _.collect = function(obj, iterator, context) {
            var results = [];
            return null == obj ? results : (_.each(obj, function(value, index, list) {
                results.push(iterator.call(context, value, index, list))
            }), results)
        };
        var reduceError = "Reduce of empty array with no initial value";
        _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
            var initial = arguments.length > 2;
            if (null == obj && (obj = []), _.each(obj, function(value, index, list) {
                    initial ? memo = iterator.call(context, memo, value, index, list) : (memo = value, initial = !0)
                }), !initial) throw new TypeError(reduceError);
            return memo
        }, _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
            var initial = arguments.length > 2;
            null == obj && (obj = []);
            var length = obj.length;
            if (length !== +length) {
                var keys = _.keys(obj);
                length = keys.length
            }
            if (_.each(obj, function(value, index, list) {
                    index = keys ? keys[--length] : --length, initial ? memo = iterator.call(context, memo, obj[index], index, list) : (memo = obj[index], initial = !0)
                }), !initial) throw new TypeError(reduceError);
            return memo
        }, _.find = _.detect = function(obj, predicate, context) {
            var result;
            return _.some(obj, function(value, index, list) {
                if (predicate.call(context, value, index, list)) return result = value, !0
            }), result
        }, _.filter = _.select = function(obj, predicate, context) {
            var results = [];
            return null == obj ? results : (_.each(obj, function(value, index, list) {
                predicate.call(context, value, index, list) && results.push(value)
            }), results)
        }, _.reject = function(obj, predicate, context) {
            return _.filter(obj, _.negate(predicate), context)
        }, _.every = _.all = function(obj, predicate, context) {
            predicate || (predicate = _.identity);
            var result = !0;
            return null == obj ? result : (_.each(obj, function(value, index, list) {
                if (!(result = result && predicate.call(context, value, index, list))) return breaker
            }), !!result)
        }, _.some = _.any = function(obj, predicate, context) {
            predicate || (predicate = _.identity);
            var result = !1;
            return null == obj ? result : (_.each(obj, function(value, index, list) {
                if (result || (result = predicate.call(context, value, index, list))) return breaker
            }), !!result)
        }, _.contains = _.include = function(obj, target) {
            return null != obj && _.some(obj, function(value) {
                return value === target
            })
        }, _.invoke = function(obj, method) {
            var args = slice.call(arguments, 2),
                isFunc = _.isFunction(method);
            return _.map(obj, function(value) {
                return (isFunc ? method : value[method]).apply(value, args)
            })
        }, _.pluck = function(obj, key) {
            return _.map(obj, _.property(key))
        }, _.where = function(obj, attrs) {
            return _.filter(obj, _.matches(attrs))
        }, _.findWhere = function(obj, attrs) {
            return _.find(obj, _.matches(attrs))
        }, _.max = function(obj, iterator, context) {
            var value, computed, result = -Infinity,
                lastComputed = -Infinity;
            if (!iterator && _.isArray(obj))
                for (var i = 0, length = obj.length; i < length; i++)(value = obj[i]) > result && (result = value);
            else _.each(obj, function(value, index, list) {
                (computed = iterator ? iterator.call(context, value, index, list) : value) > lastComputed && (result = value, lastComputed = computed)
            });
            return result
        }, _.min = function(obj, iterator, context) {
            var value, computed, result = Infinity,
                lastComputed = Infinity;
            if (!iterator && _.isArray(obj))
                for (var i = 0, length = obj.length; i < length; i++)(value = obj[i]) < result && (result = value);
            else _.each(obj, function(value, index, list) {
                (computed = iterator ? iterator.call(context, value, index, list) : value) < lastComputed && (result = value, lastComputed = computed)
            });
            return result
        }, _.shuffle = function(obj) {
            var rand, index = 0,
                shuffled = [];
            return _.each(obj, function(value) {
                rand = _.random(index++), shuffled[index - 1] = shuffled[rand], shuffled[rand] = value
            }), shuffled
        }, _.sample = function(obj, n, guard) {
            return null == n || guard ? (obj.length !== +obj.length && (obj = _.values(obj)), obj[_.random(obj.length - 1)]) : _.shuffle(obj).slice(0, Math.max(0, n))
        };
        var lookupIterator = function(value) {
            return null == value ? _.identity : _.isFunction(value) ? value : _.property(value)
        };
        _.sortBy = function(obj, iterator, context) {
            return iterator = lookupIterator(iterator), _.pluck(_.map(obj, function(value, index, list) {
                return {
                    value: value,
                    index: index,
                    criteria: iterator.call(context, value, index, list)
                }
            }).sort(function(left, right) {
                var a = left.criteria,
                    b = right.criteria;
                if (a !== b) {
                    if (a > b || void 0 === a) return 1;
                    if (a < b || void 0 === b) return -1
                }
                return left.index - right.index
            }), "value")
        };
        var group = function(behavior) {
            return function(obj, iterator, context) {
                var result = {};
                return iterator = lookupIterator(iterator), _.each(obj, function(value, index) {
                    var key = iterator.call(context, value, index, obj);
                    behavior(result, key, value)
                }), result
            }
        };
        _.groupBy = group(function(result, key, value) {
            _.has(result, key) ? result[key].push(value) : result[key] = [value]
        }), _.indexBy = group(function(result, key, value) {
            result[key] = value
        }), _.countBy = group(function(result, key) {
            _.has(result, key) ? result[key]++ : result[key] = 1
        }), _.sortedIndex = function(array, obj, iterator, context) {
            iterator = lookupIterator(iterator);
            for (var value = iterator.call(context, obj), low = 0, high = array.length; low < high;) {
                var mid = low + high >>> 1;
                iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid
            }
            return low
        }, _.toArray = function(obj) {
            return obj ? _.isArray(obj) ? slice.call(obj) : obj.length === +obj.length ? _.map(obj, _.identity) : _.values(obj) : []
        }, _.size = function(obj) {
            return null == obj ? 0 : obj.length === +obj.length ? obj.length : _.keys(obj).length
        }, _.first = _.head = _.take = function(array, n, guard) {
            if (null != array) return null == n || guard ? array[0] : n < 0 ? [] : slice.call(array, 0, n)
        }, _.initial = function(array, n, guard) {
            return slice.call(array, 0, array.length - (null == n || guard ? 1 : n))
        }, _.last = function(array, n, guard) {
            if (null != array) return null == n || guard ? array[array.length - 1] : slice.call(array, Math.max(array.length - n, 0))
        }, _.rest = _.tail = _.drop = function(array, n, guard) {
            return slice.call(array, null == n || guard ? 1 : n)
        }, _.compact = function(array) {
            return _.filter(array, _.identity)
        };
        var flatten = function(input, shallow, strict, output) {
            if (shallow && _.every(input, _.isArray)) return concat.apply(output, input);
            for (var i = 0, length = input.length; i < length; i++) {
                var value = input[i];
                _.isArray(value) || _.isArguments(value) ? shallow ? push.apply(output, value) : flatten(value, shallow, strict, output) : strict || output.push(value)
            }
            return output
        };
        _.flatten = function(array, shallow) {
            return flatten(array, shallow, !1, [])
        }, _.without = function(array) {
            return _.difference(array, slice.call(arguments, 1))
        }, _.partition = function(obj, predicate, context) {
            predicate = lookupIterator(predicate);
            var pass = [],
                fail = [];
            return _.each(obj, function(elem) {
                (predicate.call(context, elem) ? pass : fail).push(elem)
            }), [pass, fail]
        }, _.uniq = _.unique = function(array, isSorted, iterator, context) {
            if (null == array) return [];
            _.isFunction(isSorted) && (context = iterator, iterator = isSorted, isSorted = !1);
            for (var result = [], seen = [], i = 0, length = array.length; i < length; i++) {
                var value = array[i];
                iterator && (value = iterator.call(context, value, i, array)), (isSorted ? i && seen === value : _.contains(seen, value)) || (isSorted ? seen = value : seen.push(value), result.push(array[i]))
            }
            return result
        }, _.union = function() {
            return _.uniq(flatten(arguments, !0, !0, []))
        }, _.intersection = function(array) {
            if (null == array) return [];
            for (var result = [], argsLength = arguments.length, i = 0, length = array.length; i < length; i++) {
                var item = array[i];
                if (!_.contains(result, item)) {
                    for (var j = 1; j < argsLength && _.contains(arguments[j], item); j++);
                    j === argsLength && result.push(item)
                }
            }
            return result
        }, _.difference = function(array) {
            var rest = flatten(slice.call(arguments, 1), !0, !0, []);
            return _.filter(array, function(value) {
                return !_.contains(rest, value)
            })
        }, _.zip = function() {
            for (var length = _.max(_.pluck(arguments, "length").concat(0)), results = new Array(length), i = 0; i < length; i++) results[i] = _.pluck(arguments, "" + i);
            return results
        }, _.object = function(list, values) {
            if (null == list) return {};
            for (var result = {}, i = 0, length = list.length; i < length; i++) values ? result[list[i]] = values[i] : result[list[i][0]] = list[i][1];
            return result
        }, _.indexOf = function(array, item, isSorted) {
            if (null == array) return -1;
            var i = 0,
                length = array.length;
            if (isSorted) {
                if ("number" != typeof isSorted) return i = _.sortedIndex(array, item), array[i] === item ? i : -1;
                i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted
            }
            for (; i < length; i++)
                if (array[i] === item) return i;
            return -1
        }, _.lastIndexOf = function(array, item, from) {
            if (null == array) return -1;
            for (var i = null == from ? array.length : from; i--;)
                if (array[i] === item) return i;
            return -1
        }, _.range = function(start, stop, step) {
            arguments.length <= 1 && (stop = start || 0, start = 0), step = arguments[2] || 1;
            for (var length = Math.max(Math.ceil((stop - start) / step), 0), idx = 0, range = new Array(length); idx < length;) range[idx++] = start, start += step;
            return range
        };
        var ctor = function() {};
        _.bind = function(func, context) {
            var args, bound;
            if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
            if (!_.isFunction(func)) throw new TypeError;
            return args = slice.call(arguments, 2), bound = function() {
                if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
                ctor.prototype = func.prototype;
                var self = new ctor;
                ctor.prototype = null;
                var result = func.apply(self, args.concat(slice.call(arguments)));
                return Object(result) === result ? result : self
            }
        }, _.partial = function(func) {
            var boundArgs = slice.call(arguments, 1);
            return function() {
                for (var position = 0, args = boundArgs.slice(), i = 0, length = args.length; i < length; i++) args[i] === _ && (args[i] = arguments[position++]);
                for (; position < arguments.length;) args.push(arguments[position++]);
                return func.apply(this, args)
            }
        }, _.bindAll = function(obj) {
            var funcs = slice.call(arguments, 1);
            if (0 === funcs.length) throw new Error("bindAll must be passed function names");
            return _.each(funcs, function(f) {
                obj[f] = _.bind(obj[f], obj)
            }), obj
        }, _.memoize = function(func, hasher) {
            var memo = {};
            return hasher || (hasher = _.identity),
                function() {
                    var key = hasher.apply(this, arguments);
                    return _.has(memo, key) ? memo[key] : memo[key] = func.apply(this, arguments)
                }
        }, _.delay = function(func, wait) {
            var args = slice.call(arguments, 2);
            return setTimeout(function() {
                return func.apply(null, args)
            }, wait)
        }, _.defer = function(func) {
            return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)))
        }, _.throttle = function(func, wait, options) {
            var context, args, result, timeout = null,
                previous = 0;
            options || (options = {});
            var later = function() {
                previous = !1 === options.leading ? 0 : _.now(), timeout = null, result = func.apply(context, args), context = args = null
            };
            return function() {
                var now = _.now();
                previous || !1 !== options.leading || (previous = now);
                var remaining = wait - (now - previous);
                return context = this, args = arguments, remaining <= 0 || remaining > wait ? (clearTimeout(timeout), timeout = null, previous = now, result = func.apply(context, args), context = args = null) : timeout || !1 === options.trailing || (timeout = setTimeout(later, remaining)), result
            }
        }, _.debounce = function(func, wait, immediate) {
            var timeout, args, context, timestamp, result, later = function() {
                var last = _.now() - timestamp;
                last < wait && last > 0 ? timeout = setTimeout(later, wait - last) : (timeout = null, immediate || (result = func.apply(context, args), context = args = null))
            };
            return function() {
                context = this, args = arguments, timestamp = _.now();
                var callNow = immediate && !timeout;
                return timeout || (timeout = setTimeout(later, wait)), callNow && (result = func.apply(context, args), context = args = null), result
            }
        }, _.once = function(func) {
            var memo, ran = !1;
            return function() {
                return ran ? memo : (ran = !0, memo = func.apply(this, arguments), func = null, memo)
            }
        }, _.wrap = function(func, wrapper) {
            return _.partial(wrapper, func)
        }, _.negate = function(predicate) {
            return function() {
                return !predicate.apply(this, arguments)
            }
        }, _.compose = function() {
            var funcs = arguments;
            return function() {
                for (var args = arguments, i = funcs.length - 1; i >= 0; i--) args = [funcs[i].apply(this, args)];
                return args[0]
            }
        }, _.after = function(times, func) {
            return function() {
                if (--times < 1) return func.apply(this, arguments)
            }
        }, _.keys = function(obj) {
            if (!_.isObject(obj)) return [];
            if (nativeKeys) return nativeKeys(obj);
            var keys = [];
            for (var key in obj) _.has(obj, key) && keys.push(key);
            return keys
        }, _.values = function(obj) {
            for (var keys = _.keys(obj), length = keys.length, values = new Array(length), i = 0; i < length; i++) values[i] = obj[keys[i]];
            return values
        }, _.pairs = function(obj) {
            for (var keys = _.keys(obj), length = keys.length, pairs = new Array(length), i = 0; i < length; i++) pairs[i] = [keys[i], obj[keys[i]]];
            return pairs
        }, _.invert = function(obj) {
            for (var result = {}, keys = _.keys(obj), i = 0, length = keys.length; i < length; i++) result[obj[keys[i]]] = keys[i];
            return result
        }, _.functions = _.methods = function(obj) {
            var names = [];
            for (var key in obj) _.isFunction(obj[key]) && names.push(key);
            return names.sort()
        }, _.extend = function(obj) {
            return _.each(slice.call(arguments, 1), function(source) {
                if (source)
                    for (var prop in source) obj[prop] = source[prop]
            }), obj
        }, _.pick = function(obj, iterator, context) {
            var result = {};
            if (_.isFunction(iterator))
                for (var key in obj) {
                    var value = obj[key];
                    iterator.call(context, value, key, obj) && (result[key] = value)
                } else
                    for (var keys = concat.apply([], slice.call(arguments, 1)), i = 0, length = keys.length; i < length; i++) {
                        var key = keys[i];
                        key in obj && (result[key] = obj[key])
                    }
            return result
        }, _.omit = function(obj, iterator, context) {
            var keys;
            return _.isFunction(iterator) ? iterator = _.negate(iterator) : (keys = _.map(concat.apply([], slice.call(arguments, 1)), String), iterator = function(value, key) {
                return !_.contains(keys, key)
            }), _.pick(obj, iterator, context)
        }, _.defaults = function(obj) {
            return _.each(slice.call(arguments, 1), function(source) {
                if (source)
                    for (var prop in source) void 0 === obj[prop] && (obj[prop] = source[prop])
            }), obj
        }, _.clone = function(obj) {
            return _.isObject(obj) ? _.isArray(obj) ? obj.slice() : _.extend({}, obj) : obj
        }, _.tap = function(obj, interceptor) {
            return interceptor(obj), obj
        };
        var eq = function(a, b, aStack, bStack) {
            if (a === b) return 0 !== a || 1 / a == 1 / b;
            if (null == a || null == b) return a === b;
            a instanceof _ && (a = a._wrapped), b instanceof _ && (b = b._wrapped);
            var className = toString.call(a);
            if (className != toString.call(b)) return !1;
            switch (className) {
                case "[object String]":
                    return a == String(b);
                case "[object Number]":
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case "[object Date]":
                case "[object Boolean]":
                    return +a == +b;
                case "[object RegExp]":
                    return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
            }
            if ("object" != typeof a || "object" != typeof b) return !1;
            for (var length = aStack.length; length--;)
                if (aStack[length] == a) return bStack[length] == b;
            var aCtor = a.constructor,
                bCtor = b.constructor;
            if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && "constructor" in a && "constructor" in b) return !1;
            aStack.push(a), bStack.push(b);
            var size = 0,
                result = !0;
            if ("[object Array]" == className) {
                if (size = a.length, result = size == b.length)
                    for (; size-- && (result = eq(a[size], b[size], aStack, bStack)););
            } else {
                for (var key in a)
                    if (_.has(a, key) && (size++, !(result = _.has(b, key) && eq(a[key], b[key], aStack, bStack)))) break;
                if (result) {
                    for (key in b)
                        if (_.has(b, key) && !size--) break;
                    result = !size
                }
            }
            return aStack.pop(), bStack.pop(), result
        };
        _.isEqual = function(a, b) {
            return eq(a, b, [], [])
        }, _.isEmpty = function(obj) {
            if (null == obj) return !0;
            if (_.isArray(obj) || _.isString(obj)) return 0 === obj.length;
            for (var key in obj)
                if (_.has(obj, key)) return !1;
            return !0
        }, _.isElement = function(obj) {
            return !(!obj || 1 !== obj.nodeType)
        }, _.isArray = nativeIsArray || function(obj) {
            return "[object Array]" == toString.call(obj)
        }, _.isObject = function(obj) {
            return obj === Object(obj)
        }, _.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(name) {
            _["is" + name] = function(obj) {
                return toString.call(obj) == "[object " + name + "]"
            }
        }), _.isArguments(arguments) || (_.isArguments = function(obj) {
            return !(!obj || !_.has(obj, "callee"))
        }), "function" != typeof /./ && (_.isFunction = function(obj) {
            return "function" == typeof obj
        }), _.isFinite = function(obj) {
            return isFinite(obj) && !isNaN(parseFloat(obj))
        }, _.isNaN = function(obj) {
            return _.isNumber(obj) && obj != +obj
        }, _.isBoolean = function(obj) {
            return !0 === obj || !1 === obj || "[object Boolean]" == toString.call(obj)
        }, _.isNull = function(obj) {
            return null === obj
        }, _.isUndefined = function(obj) {
            return void 0 === obj
        }, _.has = function(obj, key) {
            return hasOwnProperty.call(obj, key)
        }, _.noConflict = function() {
            return root._ = previousUnderscore, this
        }, _.identity = function(value) {
            return value
        }, _.constant = function(value) {
            return function() {
                return value
            }
        }, _.noop = function() {}, _.property = function(key) {
            return function(obj) {
                return obj[key]
            }
        }, _.matches = function(attrs) {
            return function(obj) {
                if (obj === attrs) return !0;
                for (var key in attrs)
                    if (attrs[key] !== obj[key]) return !1;
                return !0
            }
        }, _.times = function(n, iterator, context) {
            for (var accum = Array(Math.max(0, n)), i = 0; i < n; i++) accum[i] = iterator.call(context, i);
            return accum
        }, _.random = function(min, max) {
            return null == max && (max = min, min = 0), min + Math.floor(Math.random() * (max - min + 1))
        }, _.now = Date.now || function() {
            return (new Date).getTime()
        };
        var entityMap = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;"
            }
        };
        entityMap.unescape = _.invert(entityMap.escape);
        var entityRegexes = {
            escape: new RegExp("[" + _.keys(entityMap.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + _.keys(entityMap.unescape).join("|") + ")", "g")
        };
        _.each(["escape", "unescape"], function(method) {
            _[method] = function(string) {
                return null == string ? "" : ("" + string).replace(entityRegexes[method], function(match) {
                    return entityMap[method][match]
                })
            }
        }), _.result = function(object, property) {
            if (null != object) {
                var value = object[property];
                return _.isFunction(value) ? value.call(object) : value
            }
        }, _.mixin = function(obj) {
            _.each(_.functions(obj), function(name) {
                var func = _[name] = obj[name];
                _.prototype[name] = function() {
                    var args = [this._wrapped];
                    return push.apply(args, arguments), result.call(this, func.apply(_, args))
                }
            })
        };
        var idCounter = 0;
        _.uniqueId = function(prefix) {
            var id = ++idCounter + "";
            return prefix ? prefix + id : id
        }, _.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var noMatch = /(.)^/,
            escapes = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            escaper = /\\|'|\r|\n|\u2028|\u2029/g,
            escapeChar = function(match) {
                return "\\" + escapes[match]
            };
        _.template = function(text, data, settings) {
            settings = _.defaults({}, settings, _.templateSettings);
            var matcher = new RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join("|") + "|$", "g"),
                index = 0,
                source = "__p+='";
            text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
                return source += text.slice(index, offset).replace(escaper, escapeChar), index = offset + match.length, escape ? source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'" : interpolate ? source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'" : evaluate && (source += "';\n" + evaluate + "\n__p+='"), match
            }), source += "';\n", settings.variable || (source = "with(obj||{}){\n" + source + "}\n"), source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
            try {
                var render = new Function(settings.variable || "obj", "_", source)
            } catch (e) {
                throw e.source = source, e
            }
            if (data) return render(data, _);
            var template = function(data) {
                return render.call(this, data, _)
            };
            return template.source = "function(" + (settings.variable || "obj") + "){\n" + source + "}", template
        }, _.chain = function(obj) {
            return _(obj).chain()
        };
        var result = function(obj) {
            return this._chain ? _(obj).chain() : obj
        };
        _.mixin(_), _.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(name) {
            var method = ArrayProto[name];
            _.prototype[name] = function() {
                var obj = this._wrapped;
                return method.apply(obj, arguments), "shift" != name && "splice" != name || 0 !== obj.length || delete obj[0], result.call(this, obj)
            }
        }), _.each(["concat", "join", "slice"], function(name) {
            var method = ArrayProto[name];
            _.prototype[name] = function() {
                return result.call(this, method.apply(this._wrapped, arguments))
            }
        }), _.extend(_.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function() {
            return _
        })
    }.call(this),
    function() {
        var Backbone, root = this,
            previousBackbone = root.Backbone,
            array = [],
            push = array.push,
            slice = array.slice,
            splice = array.splice;
        Backbone = "undefined" != typeof exports ? exports : root.Backbone = {}, Backbone.VERSION = "1.0.0";
        var _ = root._;
        _ || "undefined" == typeof require || (_ = require("underscore")), Backbone.$ = root.jQuery || root.Zepto || root.ender || root.$, Backbone.noConflict = function() {
            return root.Backbone = previousBackbone, this
        }, Backbone.emulateHTTP = !1, Backbone.emulateJSON = !1;
        var Events = Backbone.Events = {
                on: function(name, callback, context) {
                    return eventsApi(this, "on", name, [callback, context]) && callback ? (this._events || (this._events = {}), (this._events[name] || (this._events[name] = [])).push({
                        callback: callback,
                        context: context,
                        ctx: context || this
                    }), this) : this
                },
                once: function(name, callback, context) {
                    if (!eventsApi(this, "once", name, [callback, context]) || !callback) return this;
                    var self = this,
                        once = _.once(function() {
                            self.off(name, once), callback.apply(this, arguments)
                        });
                    return once._callback = callback, this.on(name, once, context)
                },
                off: function(name, callback, context) {
                    var retain, ev, events, names, i, l, j, k;
                    if (!this._events || !eventsApi(this, "off", name, [callback, context])) return this;
                    if (!name && !callback && !context) return this._events = {}, this;
                    for (names = name ? [name] : _.keys(this._events), i = 0, l = names.length; i < l; i++)
                        if (name = names[i], events = this._events[name]) {
                            if (this._events[name] = retain = [], callback || context)
                                for (j = 0, k = events.length; j < k; j++) ev = events[j], (callback && callback !== ev.callback && callback !== ev.callback._callback || context && context !== ev.context) && retain.push(ev);
                            retain.length || delete this._events[name]
                        }
                    return this
                },
                trigger: function(name) {
                    if (!this._events) return this;
                    var args = slice.call(arguments, 1);
                    if (!eventsApi(this, "trigger", name, args)) return this;
                    var events = this._events[name],
                        allEvents = this._events.all;
                    return events && triggerEvents(events, args), allEvents && triggerEvents(allEvents, arguments), this
                },
                stopListening: function(obj, name, callback) {
                    var listeners = this._listeners;
                    if (!listeners) return this;
                    var deleteListener = !name && !callback;
                    "object" == typeof name && (callback = this), obj && ((listeners = {})[obj._listenerId] = obj);
                    for (var id in listeners) listeners[id].off(name, callback, this), deleteListener && delete this._listeners[id];
                    return this
                }
            },
            eventSplitter = /\s+/,
            eventsApi = function(obj, action, name, rest) {
                if (!name) return !0;
                if ("object" == typeof name) {
                    for (var key in name) obj[action].apply(obj, [key, name[key]].concat(rest));
                    return !1
                }
                if (eventSplitter.test(name)) {
                    for (var names = name.split(eventSplitter), i = 0, l = names.length; i < l; i++) obj[action].apply(obj, [names[i]].concat(rest));
                    return !1
                }
                return !0
            },
            triggerEvents = function(events, args) {
                var ev, i = -1,
                    l = events.length,
                    a1 = args[0],
                    a2 = args[1],
                    a3 = args[2];
                switch (args.length) {
                    case 0:
                        for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx);
                        return;
                    case 1:
                        for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1);
                        return;
                    case 2:
                        for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1, a2);
                        return;
                    case 3:
                        for (; ++i < l;)(ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
                        return;
                    default:
                        for (; ++i < l;)(ev = events[i]).callback.apply(ev.ctx, args)
                }
            },
            listenMethods = {
                listenTo: "on",
                listenToOnce: "once"
            };
        _.each(listenMethods, function(implementation, method) {
            Events[method] = function(obj, name, callback) {
                return (this._listeners || (this._listeners = {}))[obj._listenerId || (obj._listenerId = _.uniqueId("l"))] = obj, "object" == typeof name && (callback = this), obj[implementation](name, callback, this), this
            }
        }), Events.bind = Events.on, Events.unbind = Events.off, _.extend(Backbone, Events);
        var Model = Backbone.Model = function(attributes, options) {
                var defaults, attrs = attributes || {};
                options || (options = {}), this.cid = _.uniqueId("c"), this.attributes = {}, _.extend(this, _.pick(options, modelOptions)), options.parse && (attrs = this.parse(attrs, options) || {}), (defaults = _.result(this, "defaults")) && (attrs = _.defaults({}, attrs, defaults)), this.set(attrs, options), this.changed = {}, this.initialize.apply(this, arguments)
            },
            modelOptions = ["url", "urlRoot", "collection"];
        _.extend(Model.prototype, Events, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(options) {
                return _.clone(this.attributes)
            },
            sync: function() {
                return Backbone.sync.apply(this, arguments)
            },
            get: function(attr) {
                return this.attributes[attr]
            },
            escape: function(attr) {
                return _.escape(this.get(attr))
            },
            has: function(attr) {
                return null != this.get(attr)
            },
            set: function(key, val, options) {
                var attr, attrs, unset, changes, silent, changing, prev, current;
                if (null == key) return this;
                if ("object" == typeof key ? (attrs = key, options = val) : (attrs = {})[key] = val, options || (options = {}), !this._validate(attrs, options)) return !1;
                unset = options.unset, silent = options.silent, changes = [], changing = this._changing, this._changing = !0, changing || (this._previousAttributes = _.clone(this.attributes), this.changed = {}), current = this.attributes, prev = this._previousAttributes, this.idAttribute in attrs && (this.id = attrs[this.idAttribute]);
                for (attr in attrs) val = attrs[attr], _.isEqual(current[attr], val) || changes.push(attr), _.isEqual(prev[attr], val) ? delete this.changed[attr] : this.changed[attr] = val, unset ? delete current[attr] : current[attr] = val;
                if (!silent) {
                    changes.length && (this._pending = !0);
                    for (var i = 0, l = changes.length; i < l; i++) this.trigger("change:" + changes[i], this, current[changes[i]], options)
                }
                if (changing) return this;
                if (!silent)
                    for (; this._pending;) this._pending = !1, this.trigger("change", this, options);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(attr, options) {
                return this.set(attr, void 0, _.extend({}, options, {
                    unset: !0
                }))
            },
            clear: function(options) {
                var attrs = {};
                for (var key in this.attributes) attrs[key] = void 0;
                return this.set(attrs, _.extend({}, options, {
                    unset: !0
                }))
            },
            hasChanged: function(attr) {
                return null == attr ? !_.isEmpty(this.changed) : _.has(this.changed, attr)
            },
            changedAttributes: function(diff) {
                if (!diff) return !!this.hasChanged() && _.clone(this.changed);
                var val, changed = !1,
                    old = this._changing ? this._previousAttributes : this.attributes;
                for (var attr in diff) _.isEqual(old[attr], val = diff[attr]) || ((changed || (changed = {}))[attr] = val);
                return changed
            },
            previous: function(attr) {
                return null != attr && this._previousAttributes ? this._previousAttributes[attr] : null
            },
            previousAttributes: function() {
                return _.clone(this._previousAttributes)
            },
            fetch: function(options) {
                options = options ? _.clone(options) : {}, void 0 === options.parse && (options.parse = !0);
                var model = this,
                    success = options.success;
                return options.success = function(resp) {
                    if (!model.set(model.parse(resp, options), options)) return !1;
                    success && success(model, resp, options), model.trigger("sync", model, resp, options)
                }, wrapError(this, options), this.sync("read", this, options)
            },
            save: function(key, val, options) {
                var attrs, method, xhr, attributes = this.attributes;
                if (null == key || "object" == typeof key ? (attrs = key, options = val) : (attrs = {})[key] = val, attrs && (!options || !options.wait) && !this.set(attrs, options)) return !1;
                if (options = _.extend({
                        validate: !0
                    }, options), !this._validate(attrs, options)) return !1;
                attrs && options.wait && (this.attributes = _.extend({}, attributes, attrs)), void 0 === options.parse && (options.parse = !0);
                var model = this,
                    success = options.success;
                return options.success = function(resp) {
                    model.attributes = attributes;
                    var serverAttrs = model.parse(resp, options);
                    if (options.wait && (serverAttrs = _.extend(attrs || {}, serverAttrs)), _.isObject(serverAttrs) && !model.set(serverAttrs, options)) return !1;
                    success && success(model, resp, options), model.trigger("sync", model, resp, options)
                }, wrapError(this, options), method = this.isNew() ? "create" : options.patch ? "patch" : "update", "patch" === method && (options.attrs = attrs), xhr = this.sync(method, this, options), attrs && options.wait && (this.attributes = attributes), xhr
            },
            destroy: function(options) {
                options = options ? _.clone(options) : {};
                var model = this,
                    success = options.success,
                    destroy = function() {
                        model.trigger("destroy", model, model.collection, options)
                    };
                if (options.success = function(resp) {
                        (options.wait || model.isNew()) && destroy(), success && success(model, resp, options), model.isNew() || model.trigger("sync", model, resp, options)
                    }, this.isNew()) return options.success(), !1;
                wrapError(this, options);
                var xhr = this.sync("delete", this, options);
                return options.wait || destroy(), xhr
            },
            url: function() {
                var base = _.result(this, "urlRoot") || _.result(this.collection, "url") || urlError();
                return this.isNew() ? base : base + ("/" === base.charAt(base.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(resp, options) {
                return resp
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return null == this.id
            },
            isValid: function(options) {
                return this._validate({}, _.extend(options || {}, {
                    validate: !0
                }))
            },
            _validate: function(attrs, options) {
                if (!options.validate || !this.validate) return !0;
                attrs = _.extend({}, this.attributes, attrs);
                var error = this.validationError = this.validate(attrs, options) || null;
                return !error || (this.trigger("invalid", this, error, _.extend(options || {}, {
                    validationError: error
                })), !1)
            }
        });
        var modelMethods = ["keys", "values", "pairs", "invert", "pick", "omit"];
        _.each(modelMethods, function(method) {
            Model.prototype[method] = function() {
                var args = slice.call(arguments);
                return args.unshift(this.attributes), _[method].apply(_, args)
            }
        });
        var Collection = Backbone.Collection = function(models, options) {
                options || (options = {}), options.url && (this.url = options.url), options.model && (this.model = options.model), void 0 !== options.comparator && (this.comparator = options.comparator), this._reset(), this.initialize.apply(this, arguments), models && this.reset(models, _.extend({
                    silent: !0
                }, options))
            },
            setOptions = {
                add: !0,
                remove: !0,
                merge: !0
            },
            addOptions = {
                add: !0,
                merge: !1,
                remove: !1
            };
        _.extend(Collection.prototype, Events, {
            model: Model,
            initialize: function() {},
            toJSON: function(options) {
                return this.map(function(model) {
                    return model.toJSON(options)
                })
            },
            sync: function() {
                return Backbone.sync.apply(this, arguments)
            },
            add: function(models, options) {
                return this.set(models, _.defaults(options || {}, addOptions))
            },
            remove: function(models, options) {
                models = _.isArray(models) ? models.slice() : [models], options || (options = {});
                var i, l, index, model;
                for (i = 0, l = models.length; i < l; i++)(model = this.get(models[i])) && (delete this._byId[model.id], delete this._byId[model.cid], index = this.indexOf(model), this.models.splice(index, 1), this.length--, options.silent || (options.index = index, model.trigger("remove", model, this, options)), this._removeReference(model));
                return this
            },
            set: function(models, options) {
                options = _.defaults(options || {}, setOptions), options.parse && (models = this.parse(models, options)), _.isArray(models) || (models = models ? [models] : []);
                var i, l, model, existing, sort, at = options.at,
                    sortable = this.comparator && null == at && !1 !== options.sort,
                    sortAttr = _.isString(this.comparator) ? this.comparator : null,
                    toAdd = [],
                    toRemove = [],
                    modelMap = {};
                for (i = 0, l = models.length; i < l; i++)(model = this._prepareModel(models[i], options)) && ((existing = this.get(model)) ? (options.remove && (modelMap[existing.cid] = !0), options.merge && (existing.set(model.attributes, options), sortable && !sort && existing.hasChanged(sortAttr) && (sort = !0))) : options.add && (toAdd.push(model), model.on("all", this._onModelEvent, this), this._byId[model.cid] = model, null != model.id && (this._byId[model.id] = model)));
                if (options.remove) {
                    for (i = 0, l = this.length; i < l; ++i) modelMap[(model = this.models[i]).cid] || toRemove.push(model);
                    toRemove.length && this.remove(toRemove, options)
                }
                if (toAdd.length && (sortable && (sort = !0), this.length += toAdd.length, null != at ? splice.apply(this.models, [at, 0].concat(toAdd)) : push.apply(this.models, toAdd)), sort && this.sort({
                        silent: !0
                    }), options.silent) return this;
                for (i = 0, l = toAdd.length; i < l; i++)(model = toAdd[i]).trigger("add", model, this, options);
                return sort && this.trigger("sort", this, options), this
            },
            reset: function(models, options) {
                options || (options = {});
                for (var i = 0, l = this.models.length; i < l; i++) this._removeReference(this.models[i]);
                return options.previousModels = this.models, this._reset(), this.add(models, _.extend({
                    silent: !0
                }, options)), options.silent || this.trigger("reset", this, options), this
            },
            push: function(model, options) {
                return model = this._prepareModel(model, options), this.add(model, _.extend({
                    at: this.length
                }, options)), model
            },
            pop: function(options) {
                var model = this.at(this.length - 1);
                return this.remove(model, options), model
            },
            unshift: function(model, options) {
                return model = this._prepareModel(model, options), this.add(model, _.extend({
                    at: 0
                }, options)), model
            },
            shift: function(options) {
                var model = this.at(0);
                return this.remove(model, options), model
            },
            slice: function(begin, end) {
                return this.models.slice(begin, end)
            },
            get: function(obj) {
                if (null != obj) return this._byId[null != obj.id ? obj.id : obj.cid || obj]
            },
            at: function(index) {
                return this.models[index]
            },
            where: function(attrs, first) {
                return _.isEmpty(attrs) ? first ? void 0 : [] : this[first ? "find" : "filter"](function(model) {
                    for (var key in attrs)
                        if (attrs[key] !== model.get(key)) return !1;
                    return !0
                })
            },
            findWhere: function(attrs) {
                return this.where(attrs, !0)
            },
            sort: function(options) {
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                return options || (options = {}), _.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(_.bind(this.comparator, this)), options.silent || this.trigger("sort", this, options), this
            },
            sortedIndex: function(model, value, context) {
                value || (value = this.comparator);
                var iterator = _.isFunction(value) ? value : function(model) {
                    return model.get(value)
                };
                return _.sortedIndex(this.models, model, iterator, context)
            },
            pluck: function(attr) {
                return _.invoke(this.models, "get", attr)
            },
            fetch: function(options) {
                options = options ? _.clone(options) : {}, void 0 === options.parse && (options.parse = !0);
                var success = options.success,
                    collection = this;
                return options.success = function(resp) {
                    var method = options.reset ? "reset" : "set";
                    collection[method](resp, options), success && success(collection, resp, options), collection.trigger("sync", collection, resp, options)
                }, wrapError(this, options), this.sync("read", this, options)
            },
            create: function(model, options) {
                if (options = options ? _.clone(options) : {}, !(model = this._prepareModel(model, options))) return !1;
                options.wait || this.add(model, options);
                var collection = this,
                    success = options.success;
                return options.success = function(resp) {
                    options.wait && collection.add(model, options), success && success(model, resp, options)
                }, model.save(null, options), model
            },
            parse: function(resp, options) {
                return resp
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(attrs, options) {
                if (attrs instanceof Model) return attrs.collection || (attrs.collection = this), attrs;
                options || (options = {}), options.collection = this;
                var model = new this.model(attrs, options);
                return model._validate(attrs, options) ? model : (this.trigger("invalid", this, attrs, options), !1)
            },
            _removeReference: function(model) {
                this === model.collection && delete model.collection, model.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(event, model, collection, options) {
                ("add" !== event && "remove" !== event || collection === this) && ("destroy" === event && this.remove(model, options), model && event === "change:" + model.idAttribute && (delete this._byId[model.previous(model.idAttribute)], null != model.id && (this._byId[model.id] = model)), this.trigger.apply(this, arguments))
            }
        });
        var methods = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
        _.each(methods, function(method) {
            Collection.prototype[method] = function() {
                var args = slice.call(arguments);
                return args.unshift(this.models), _[method].apply(_, args)
            }
        });
        var attributeMethods = ["groupBy", "countBy", "sortBy"];
        _.each(attributeMethods, function(method) {
            Collection.prototype[method] = function(value, context) {
                var iterator = _.isFunction(value) ? value : function(model) {
                    return model.get(value)
                };
                return _[method](this.models, iterator, context)
            }
        });
        var View = Backbone.View = function(options) {
                this.cid = _.uniqueId("view"), this._configure(options || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            delegateEventSplitter = /^(\S+)\s*(.*)$/,
            viewOptions = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        _.extend(View.prototype, Events, {
            tagName: "div",
            $: function(selector) {
                return this.$el.find(selector)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this.stopListening(), this
            },
            setElement: function(element, delegate) {
                return this.$el && this.undelegateEvents(), this.$el = element instanceof Backbone.$ ? element : Backbone.$(element), this.el = this.$el[0], !1 !== delegate && this.delegateEvents(), this
            },
            delegateEvents: function(events) {
                if (!events && !(events = _.result(this, "events"))) return this;
                this.undelegateEvents();
                for (var key in events) {
                    var method = events[key];
                    if (_.isFunction(method) || (method = this[events[key]]), method) {
                        var match = key.match(delegateEventSplitter),
                            eventName = match[1],
                            selector = match[2];
                        method = _.bind(method, this), eventName += ".delegateEvents" + this.cid, "" === selector ? this.$el.on(eventName, method) : this.$el.on(eventName, selector, method)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid), this
            },
            _configure: function(options) {
                this.options && (options = _.extend({}, _.result(this, "options"), options)), _.extend(this, _.pick(options, viewOptions)), this.options = options
            },
            _ensureElement: function() {
                if (this.el) this.setElement(_.result(this, "el"), !1);
                else {
                    var attrs = _.extend({}, _.result(this, "attributes"));
                    this.id && (attrs.id = _.result(this, "id")), this.className && (attrs["class"] = _.result(this, "className"));
                    var $el = Backbone.$("<" + _.result(this, "tagName") + ">").attr(attrs);
                    this.setElement($el, !1)
                }
            }
        }), Backbone.sync = function(method, model, options) {
            var type = methodMap[method];
            _.defaults(options || (options = {}), {
                emulateHTTP: Backbone.emulateHTTP,
                emulateJSON: Backbone.emulateJSON
            });
            var params = {
                type: type,
                dataType: "json"
            };
            if (options.url || (params.url = _.result(model, "url") || urlError()), null != options.data || !model || "create" !== method && "update" !== method && "patch" !== method || (params.contentType = "application/json", params.data = JSON.stringify(options.attrs || model.toJSON(options))), options.emulateJSON && (params.contentType = "application/x-www-form-urlencoded", params.data = params.data ? {
                    model: params.data
                } : {}), options.emulateHTTP && ("PUT" === type || "DELETE" === type || "PATCH" === type)) {
                params.type = "POST", options.emulateJSON && (params.data._method = type);
                var beforeSend = options.beforeSend;
                options.beforeSend = function(xhr) {
                    if (xhr.setRequestHeader("X-HTTP-Method-Override", type), beforeSend) return beforeSend.apply(this, arguments)
                }
            }
            "GET" === params.type || options.emulateJSON || (params.processData = !1), "PATCH" !== params.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (params.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            });
            var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
            return model.trigger("request", model, xhr, options), xhr
        };
        var methodMap = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            "delete": "DELETE",
            read: "GET"
        };
        Backbone.ajax = function() {
            return Backbone.$.ajax.apply(Backbone.$, arguments)
        };
        var Router = Backbone.Router = function(options) {
                options || (options = {}), options.routes && (this.routes = options.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            optionalParam = /\((.*?)\)/g,
            namedParam = /(\(\?)?:\w+/g,
            splatParam = /\*\w+/g,
            escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        _.extend(Router.prototype, Events, {
            initialize: function() {},
            route: function(route, name, callback) {
                _.isRegExp(route) || (route = this._routeToRegExp(route)), _.isFunction(name) && (callback = name, name = ""), callback || (callback = this[name]);
                var router = this;
                return Backbone.history.route(route, function(fragment) {
                    var args = router._extractParameters(route, fragment);
                    callback && callback.apply(router, args), router.trigger.apply(router, ["route:" + name].concat(args)), router.trigger("route", name, args), Backbone.history.trigger("route", router, name, args)
                }), this
            },
            navigate: function(fragment, options) {
                return Backbone.history.navigate(fragment, options), this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = _.result(this, "routes");
                    for (var route, routes = _.keys(this.routes); null != (route = routes.pop());) this.route(route, this.routes[route])
                }
            },
            _routeToRegExp: function(route) {
                return route = route.replace(escapeRegExp, "\\$&").replace(optionalParam, "(?:$1)?").replace(namedParam, function(match, optional) {
                    return optional ? match : "([^/]+)"
                }).replace(splatParam, "(.*?)"), new RegExp("^" + route + "$")
            },
            _extractParameters: function(route, fragment) {
                var params = route.exec(fragment).slice(1);
                return _.map(params, function(param) {
                    return param ? decodeURIComponent(param) : null
                })
            }
        });
        var History = Backbone.History = function() {
                this.handlers = [], _.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            },
            routeStripper = /^[#\/]|\s+$/g,
            rootStripper = /^\/+|\/+$/g,
            isExplorer = /msie [\w.]+/,
            trailingSlash = /\/$/;
        History.started = !1, _.extend(History.prototype, Events, {
            interval: 50,
            getHash: function(window) {
                var match = (window || this).location.href.match(/#(.*)$/);
                return match ? match[1] : ""
            },
            getFragment: function(fragment, forcePushState) {
                if (null == fragment)
                    if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                        fragment = this.location.pathname;
                        var root = this.root.replace(trailingSlash, "");
                        fragment.indexOf(root) || (fragment = fragment.substr(root.length))
                    } else fragment = this.getHash();
                return fragment.replace(routeStripper, "")
            },
            start: function(options) {
                if (History.started) throw new Error("Backbone.history has already been started");
                History.started = !0, this.options = _.extend({}, {
                    root: "/"
                }, this.options, options), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var fragment = this.getFragment(),
                    docMode = document.documentMode,
                    oldIE = isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7);
                this.root = ("/" + this.root + "/").replace(rootStripper, "/"), oldIE && this._wantsHashChange && (this.iframe = Backbone.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(fragment)),
                    this._hasPushState ? Backbone.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !oldIE ? Backbone.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = fragment;
                var loc = this.location,
                    atRoot = loc.pathname.replace(/[^\/]$/, "$&/") === this.root;
                return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !atRoot ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && atRoot && loc.hash && (this.fragment = this.getHash().replace(routeStripper, ""), this.history.replaceState({}, document.title, this.root + this.fragment + loc.search)), this.options.silent ? void 0 : this.loadUrl())
            },
            stop: function() {
                Backbone.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), History.started = !1
            },
            route: function(route, callback) {
                this.handlers.unshift({
                    route: route,
                    callback: callback
                })
            },
            checkUrl: function(e) {
                var current = this.getFragment();
                if (current === this.fragment && this.iframe && (current = this.getFragment(this.getHash(this.iframe))), current === this.fragment) return !1;
                this.iframe && this.navigate(current), this.loadUrl() || this.loadUrl(this.getHash())
            },
            loadUrl: function(fragmentOverride) {
                var fragment = this.fragment = this.getFragment(fragmentOverride);
                return _.any(this.handlers, function(handler) {
                    if (handler.route.test(fragment)) return handler.callback(fragment), !0
                })
            },
            navigate: function(fragment, options) {
                if (!History.started) return !1;
                if (options && !0 !== options || (options = {
                        trigger: options
                    }), fragment = this.getFragment(fragment || ""), this.fragment !== fragment) {
                    this.fragment = fragment;
                    var url = this.root + fragment;
                    if (this._hasPushState) this.history[options.replace ? "replaceState" : "pushState"]({}, document.title, url);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(url);
                        this._updateHash(this.location, fragment, options.replace), this.iframe && fragment !== this.getFragment(this.getHash(this.iframe)) && (options.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, fragment, options.replace))
                    }
                    options.trigger && this.loadUrl(fragment)
                }
            },
            _updateHash: function(location, fragment, replace) {
                if (replace) {
                    var href = location.href.replace(/(javascript:|#).*$/, "");
                    location.replace(href + "#" + fragment)
                } else location.hash = "#" + fragment
            }
        }), Backbone.history = new History;
        var extend = function(protoProps, staticProps) {
            var child, parent = this;
            child = protoProps && _.has(protoProps, "constructor") ? protoProps.constructor : function() {
                return parent.apply(this, arguments)
            }, _.extend(child, parent, staticProps);
            var Surrogate = function() {
                this.constructor = child
            };
            return Surrogate.prototype = parent.prototype, child.prototype = new Surrogate, protoProps && _.extend(child.prototype, protoProps), child.__super__ = parent.prototype, child
        };
        Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;
        var urlError = function() {
                throw new Error('A "url" property or function must be specified')
            },
            wrapError = function(model, options) {
                var error = options.error;
                options.error = function(resp) {
                    error && error(model, resp, options), model.trigger("error", model, resp, options)
                }
            }
    }.call(this),
    function($, window) {
        $window = $(window), $.fn.lazyload = function(options) {
            function update() {
                var counter = 0;
                !0 !== settings.preventUpdate && elements.each(function() {
                    var $this = $(this);
                    if (!settings.skip_invisible || $this.is(":visible"))
                        if ($.abovethetop(this, settings) || $.leftofbegin(this, settings));
                        else if ($.belowthefold(this, settings) || $.rightoffold(this, settings)) {
                        if (++counter > settings.failure_limit) return !1
                    } else $this.trigger("appear")
                })
            }
            var elements = this,
                settings = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: window,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null,
                    preventUpdate: !1
                };
            return options && (undefined !== options.failurelimit && (options.failure_limit = options.failurelimit, delete options.failurelimit), undefined !== options.effectspeed && (options.effect_speed = options.effectspeed, delete options.effectspeed), $.extend(settings, options)), $container = settings.container === undefined || settings.container === window ? $window : $(settings.container), 0 === settings.event.indexOf("scroll") && $container.bind(settings.event, function(event) {
                return update()
            }), this.each(function() {
                var self = this,
                    $self = $(self);
                self.loaded = !1, $self.one("appear", function() {
                    if (!this.loaded) {
                        if (settings.appear) {
                            var elements_left = elements.length;
                            settings.appear.call(self, elements_left, settings)
                        }
                        $("<img />").bind("load", function() {
                            $self.hide().attr("src", $self.data(settings.data_attribute))[settings.effect](settings.effect_speed), self.loaded = !0;
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded
                            });
                            if (elements = $(temp), settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings)
                            }
                        }).attr("src", $self.data(settings.data_attribute))
                    }
                }), 0 !== settings.event.indexOf("scroll") && $self.bind(settings.event, function(event) {
                    self.loaded || $self.trigger("appear")
                })
            }), $window.bind("resize", function(event) {
                update()
            }), update(), this
        }, $.belowthefold = function(element, settings) {
            return (settings.container === undefined || settings.container === window ? $window.height() + $window.scrollTop() : $container.offset().top + $container.height()) <= $(element).offset().top - settings.threshold
        }, $.rightoffold = function(element, settings) {
            return (settings.container === undefined || settings.container === window ? $window.width() + $window.scrollLeft() : $container.offset().left + $container.width()) <= $(element).offset().left - settings.threshold
        }, $.abovethetop = function(element, settings) {
            return (settings.container === undefined || settings.container === window ? $window.scrollTop() : $container.offset().top) >= $(element).offset().top + settings.threshold + $(element).height()
        }, $.leftofbegin = function(element, settings) {
            return (settings.container === undefined || settings.container === window ? $window.scrollLeft() : $container.offset().left) >= $(element).offset().left + settings.threshold + $(element).width()
        }, $.inviewport = function(element, settings) {
            return !($.rightofscreen(element, settings) || $.leftofscreen(element, settings) || $.belowthefold(element, settings) || $.abovethetop(element, settings))
        }, $.extend($.expr[":"], {
            "below-the-fold": function(a) {
                return $.belowthefold(a, {
                    threshold: 0,
                    container: window
                })
            },
            "above-the-top": function(a) {
                return !$.belowthefold(a, {
                    threshold: 0,
                    container: window
                })
            },
            "right-of-screen": function(a) {
                return $.rightoffold(a, {
                    threshold: 0,
                    container: window
                })
            },
            "left-of-screen": function(a) {
                return !$.rightoffold(a, {
                    threshold: 0,
                    container: window
                })
            },

            "in-viewport": function(a) {
                return !$.inviewport(a, {
                    threshold: 0,
                    container: window
                })
            },
            "above-the-fold": function(a) {
                return !$.belowthefold(a, {
                    threshold: 0,
                    container: window
                })
            },
            "right-of-fold": function(a) {
                return $.rightoffold(a, {
                    threshold: 0,
                    container: window
                })
            },
            "left-of-fold": function(a) {
                return !$.rightoffold(a, {
                    threshold: 0,
                    container: window
                })
            }
        })
    }(jQuery, window), FreezeFrame = function($) {
        function FreezeFrame(_options) {
            _ff = this, null == _options.auto_run ? this.auto_run = !0 : this.auto_run = _options.auto_run, null == _options.class_name ? this.class_name = "freezeframe" : this.class_name = _options.class_name, null == _options.trigger_event ? this.trigger_event = "hover" : this.trigger_event = _options.trigger_event.toLowerCase(), null == _options.support_touch_devices ? this.support_touch_devices = !0 : this.support_touch_devuces = _options.support_touch_devices.toLowerCase(), null == _options.animation_play_duration ? this.animation_play_duration = 1e4 : this.animation_play_duration = parseInt(_options.animation_play_duration), null == _options.loading_background_color ? this.loading_background_color = "#666" : this.loading_background_color = _options.loading_background_color.toLowerCase(), null == _options.loading_background_image ? this.loading_background_image = "data:image/gif;base64,R0lGODlhEAAQAPIAAGZmZv///4mJidbW1v///8PDw7CwsKampiH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQACgABACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkEAAoAAgAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkEAAoAAwAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkEAAoABAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQACgAFACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQACgAGACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAAKAAcALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" : this.loading_background_image = _options.loading_background_image, null == _options.loading_background_position ? this.loading_background_position = "center center" : this.loading_background_position = _options.loading_background_position.toLowerCase(), null == _options.animation_icon_image ? this.animation_icon_image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAl9JREFUeNrs2s2K2lAUAGATb3TE2Cr+oaJQNFOh1MVsxK0OuJbSdX2V9gG67GqW3RbaB7B9gy7qgKJF8G/EarHVWGMyJj230EXLLITm6q05F44/IVw5X3JPjiGCZVkuJw/R5fCBAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAiAAAjwjyMej79MpVKP/hcAwe6boul0+p3P5/vmdruv4evbVqvVdRRALpd7HQqFpn6/XxUEwdI07UZV1ffNZvMzjwDE7gk9Hs8mGAwuYCl8hTNB32630nw+f1IqlRY8QtgOQAjRZVleJxKJ77AcVLptOBwup9PpPR4hbAcQRdGUJOk2HA5riqKokUjEgKK4GY/HKo8QhMGcv4oKIJg0+Xw+r8H7bSaT0XiEICwnhyLoCgQCptfrNSgCjxDkED8ChdGiwSMEOaQ2jxDkGOtuH4jJZHJ/Nps9LRaLi+Vy2WDVUB0FYB+IXq+36ff7P0ajURj2eQbF9EO73W6cFMBdENA8mXQbNFDier0mhULhQaVSeZzNZj+d3Bnwe+i6LkDCAqx9QmMwGJwlk8nzarV6Cf3EDHZ5DvHx5ADuSjwWiz0sl8uX8H9izjLxowLskfgL1okfBYCnxA8KwGPiBwGg9xpWq5XIY+IsAQT6stvt6BGX4Nrt4jFxZgCmaYqGYRDo4nzdbncny3KGx8SZAcCRl6CH9yuKcl6r1S6i0egXHhP/Y53aGfV6/U2n02nA5yuIC7vntzsEBo/KXkG84vaI/12w8Flhhw8EQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEcNr4KcAABsB8S2vxAV8AAAAASUVORK5CYII=" : this.animation_icon_image = _options.animation_icon_image, null == _options.animation_icon_position ? this.animation_icon_position = "top left" : this.animation_icon_position = _options.animation_icon_position.toLowerCase(), null == _options.loading_fade_in_speed ? this.loading_fade_in_speed = 500 : this.loading_fade_in_speed = parseInt(_options.loading_fade_in_speed), null == _options.animation_fade_out_speed ? this.animation_fade_out_speed = 250 : this.animation_fade_out_speed = parseInt(_options.animation_fade_out_speed), this.is_touch_device = isMouseEventSupported("ontouchstart"), this.freezeframe_count = 0
        }
        var _ff;
        return FreezeFrame.prototype.setup = function() {
            $("<canvas>", {
                id: "freezeframe-canvas"
            }).css("display", "none").prependTo($("body")), this.canvas = $("canvas#freezeframe-canvas"), this.context = this.canvas[0].getContext("2d")
        }, FreezeFrame.prototype.run = function(images, shouldAnimate) {
            var ext, images = images || [],
                figure_background = _ff.loading_background_color;
            !1 !== _ff.loading_background_image && (figure_background += " url('" + _ff.loading_background_image + "') " + _ff.loading_background_position + " no-repeat"), 0 === images.length && (images = $('img[class*="' + _ff.class_name + '"]').not('[class*="' + _ff.class_name + '_done"]')), $(images).each(function(index) {
                if ($(this).removeClass(_ff.class_name).addClass(_ff.class_name + "_done"), $(this).crossOrigin = "anonymous", ext = $(this)[0].src.split("."), "gif" !== (ext = ext[ext.length - 1].toLowerCase())) images.splice(index, 1);
                else {
                    var freezeframe_figure = $("<figure />").attr("class", "freezeframe-container " + _ff.freezeframe_count).css({
                        display: "inline-block",
                        overflow: "hidden",
                        background: figure_background
                    });
                    if ($(this).css({
                            opacity: 0,
                            display: "block"
                        }).wrap(freezeframe_figure), freezeframe_figure = $(this).parent(), !1 !== _ff.animation_icon_image) {
                        var animation_icon = $("<div />").attr("class", "freezeframe-animation-icon").css({
                            display: "block",
                            position: "absolute",
                            background: "transparent url('" + _ff.animation_icon_image + "') " + _ff.animation_icon_position + " no-repeat",
                            "pointer-events": "none",
                            "z-index": 100,
                            opacity: 0
                        });
                        $(freezeframe_figure).prepend(animation_icon), animation_icon = $(this).siblings($(".freezeframe-animation-icon"))
                    }
                    _ff.freezeframe_count++;
                    var _self = this;
                    $(this).imagesLoaded(function() {
                        $(this).off("imagesLoaded"), _ff.canvas[0].width = $(this).width(), _ff.canvas[0].height = $(this).height(), $(this).attr("animated", $(this).attr("src"));
                        var originalUrl = $(this).data("first-frame"),
                            first_frame = originalUrl.substring(0, originalUrl.length - 4) + "-firstframe.png";
                        first_frame === undefined && (_ff.context.drawImage(_self, 0, 0, $(this).width(), $(this).height()), first_frame = _ff.canvas[0].toDataURL()), $(this).attr("src", first_frame), !1 !== _ff.animation_icon_image && $(animation_icon).css({
                            width: parseInt($(this)[0].width),
                            height: parseInt($(this)[0].height)
                        }).animate({
                            opacity: 1
                        }, _ff.loading_fade_in_speed), $(this).animate({
                            opacity: 1
                        }, _ff.loading_fade_in_speed, function() {
                            function animate() {
                                $(freezeframe_figure).css("background", "transparent"), $(this).attr("src", $(this).attr("src")).css("opacity", 1), !1 !== _ff.animation_icon_image && $(animation_icon).css("opacity", 0)
                            }

                            function stopAnimation() {
                                var originalUrl = $(this).data("first-frame"),
                                    first_frame = originalUrl.substring(0, originalUrl.length - 4) + "-lastframe.png";
                                $(freezeframe_figure).css("background", "url('" + first_frame + "')"), $(freezeframe_figure).css("background-size", "contain"), $(this).css("opacity", 0), !1 !== _ff.animation_icon_image && $(animation_icon).animate({
                                    opacity: 1
                                }, _ff.animation_fade_out_speed)
                            }

                            function stopAnimationAndClearInterval(interval) {
                                clearInterval(interval), stopAnimation.call(this), animating = !1
                            }
                            if ($(freezeframe_figure).css("background", "url('" + first_frame + "')"), $(freezeframe_figure).css("background-size", "contain"), $(this).css("opacity", 0).attr("src", $(this).attr("animated")), !0 === shouldAnimate && animate.call(this), _ff.support_touch_devices && _ff.is_touch_device || "click" == _ff.trigger_event.toLowerCase()) {
                                var animating = !1;
                                $(this).click(function() {
                                    animating ? stopAnimationAndClearInterval.call(this, stopAnimationInterval) : (animate.call(this), stopAnimationInterval = setInterval(function() {
                                        stopAnimationAndClearInterval.call(this, stopAnimationInterval)
                                    }, _ff.animation_play_duration), animating = !0)
                                })
                            } else if ("hover" === _ff.trigger_event) $(this).mouseenter(function() {
                                animate.call(this)
                            }), $(this).mouseleave(function() {
                                stopAnimation.call(this)
                            });
                            else {
                                var customEvent = _ff.trigger_event.toLowerCase(),
                                    customEventEnter = customEvent + "enter",
                                    customEventLeave = customEvent + "leave";
                                $(this).on(customEventEnter, function() {
                                    animate.call(this)
                                }), $(this).on(customEventLeave, function() {
                                    stopAnimation.call(this)
                                })
                            }
                        })
                    })
                }
            })
        }, FreezeFrame
    }(jQuery), jQuery(document).ready(function($) {
        "undefined" == typeof freezeframe_options && (freezeframe_options = {}), freezeframe = new FreezeFrame(freezeframe_options), freezeframe.setup(), !0 === freezeframe.auto_run && freezeframe.run()
    }),
    function($, undefined) {
        "use strict";
        var BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        $.fn.imagesLoaded = function(callback) {
            function doneLoading() {
                var $proper = $(proper),
                    $broken = $(broken);
                deferred && (broken.length ? deferred.reject($images, $proper, $broken) : deferred.resolve($images)), $.isFunction(callback) && callback.call($this, $images, $proper, $broken)
            }

            function imgLoadedHandler(event) {
                imgLoaded(event.target, "error" === event.type)
            }

            function imgLoaded(img, isBroken) {
                img.src !== BLANK && -1 === $.inArray(img, loaded) && (loaded.push(img), isBroken ? broken.push(img) : proper.push(img), $.data(img, "imagesLoaded", {
                    isBroken: isBroken,
                    src: img.src
                }), hasNotify && deferred.notifyWith($(img), [isBroken, $images, $(proper), $(broken)]), $images.length === loaded.length && (setTimeout(doneLoading), $images.unbind(".imagesLoaded", imgLoadedHandler)))
            }
            var $this = this,
                deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
                hasNotify = $.isFunction(deferred.notify),
                $images = $this.find("img").add($this.filter("img")),
                loaded = [],
                proper = [],
                broken = [];
            return $.isPlainObject(callback) && $.each(callback, function(key, value) {
                "callback" === key ? callback = value : deferred && deferred[key](value)
            }), $images.length ? $images.bind("load.imagesLoaded error.imagesLoaded", imgLoadedHandler).each(function(i, el) {
                var src = el.src,
                    cached = $.data(el, "imagesLoaded");
                return cached && cached.src === src ? void imgLoaded(el, cached.isBroken) : el.complete && void 0 !== el.naturalWidth ? void imgLoaded(el, 0 === el.naturalWidth || 0 === el.naturalHeight) : void((el.readyState || el.complete) && (el.src = BLANK, el.src = src))
            }) : doneLoading(), deferred ? deferred.promise($this) : $this
        }
    }(jQuery), window.Modernizr = function(window, document, undefined) {
        function setCss(str) {
            mStyle.cssText = str
        }

        function is(obj, type) {
            return typeof obj === type
        }

        function contains(str, substr) {
            return !!~("" + str).indexOf(substr)
        }

        function testProps(props, prefixed) {
            for (var i in props) {
                var prop = props[i];
                if (!contains(prop, "-") && mStyle[prop] !== undefined) return "pfx" != prefixed || prop
            }
            return !1
        }

        function testDOMProps(props, obj, elem) {
            for (var i in props) {
                var item = obj[props[i]];
                if (item !== undefined) return !1 === elem ? props[i] : is(item, "function") ? item.bind(elem || obj) : item
            }
            return !1
        }

        function testPropsAll(prop, prefixed, elem) {
            var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
                props = (prop + " " + cssomPrefixes.join(ucProp + " ") + ucProp).split(" ");
            return is(prefixed, "string") || is(prefixed, "undefined") ? testProps(props, prefixed) : (props = (prop + " " + domPrefixes.join(ucProp + " ") + ucProp).split(" "), testDOMProps(props, prefixed, elem))
        }
        var featureName, hasOwnProp, Modernizr = {},
            docElement = document.documentElement,
            mod = "modernizr",
            modElem = document.createElement(mod),
            mStyle = modElem.style,
            prefixes = " -webkit- -moz- -o- -ms- ".split(" "),
            omPrefixes = "Webkit Moz O ms",
            cssomPrefixes = omPrefixes.split(" "),
            domPrefixes = omPrefixes.toLowerCase().split(" "),
            tests = {},
            classes = [],
            slice = classes.slice,
            injectElementWithStyles = function(rule, callback, nodes, testnames) {
                var style, ret, node, docOverflow, div = document.createElement("div"),
                    body = document.body,
                    fakeBody = body || document.createElement("body");
                if (parseInt(nodes, 10))
                    for (; nodes--;) node = document.createElement("div"), node.id = testnames ? testnames[nodes] : mod + (nodes + 1), div.appendChild(node);
                return style = ["&#173;", '<style id="s', mod, '">', rule, "</style>"].join(""), div.id = mod, (body ? div : fakeBody).innerHTML += style, fakeBody.appendChild(div), body || (fakeBody.style.background = "", fakeBody.style.overflow = "hidden", docOverflow = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(fakeBody)), ret = callback(div, rule), body ? div.parentNode.removeChild(div) : (fakeBody.parentNode.removeChild(fakeBody), docElement.style.overflow = docOverflow), !!ret
            },
            isEventSupported = function() {
                function isEventSupported(eventName, element) {
                    element = element || document.createElement(TAGNAMES[eventName] || "div"), eventName = "on" + eventName;
                    var isSupported = eventName in element;
                    return isSupported || (element.setAttribute || (element = document.createElement("div")), element.setAttribute && element.removeAttribute && (element.setAttribute(eventName, ""), isSupported = is(element[eventName], "function"), is(element[eventName], "undefined") || (element[eventName] = undefined), element.removeAttribute(eventName))), element = null, isSupported
                }
                var TAGNAMES = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return isEventSupported
            }(),
            _hasOwnProperty = {}.hasOwnProperty;
        hasOwnProp = is(_hasOwnProperty, "undefined") || is(_hasOwnProperty.call, "undefined") ? function(object, property) {
            return property in object && is(object.constructor.prototype[property], "undefined")
        } : function(object, property) {
            return _hasOwnProperty.call(object, property)
        }, Function.prototype.bind || (Function.prototype.bind = function(that) {
            var target = this;
            if ("function" != typeof target) throw new TypeError;
            var args = slice.call(arguments, 1),
                bound = function() {
                    if (this instanceof bound) {
                        var F = function() {};
                        F.prototype = target.prototype;
                        var self = new F,
                            result = target.apply(self, args.concat(slice.call(arguments)));
                        return Object(result) === result ? result : self
                    }
                    return target.apply(that, args.concat(slice.call(arguments)))
                };
            return bound
        }), tests.draganddrop = function() {
            var div = document.createElement("div");
            return "draggable" in div || "ondragstart" in div && "ondrop" in div
        };
        for (var feature in tests) hasOwnProp(tests, feature) && (featureName = feature.toLowerCase(), Modernizr[featureName] = tests[feature](), classes.push((Modernizr[featureName] ? "" : "no-") + featureName));
        return Modernizr.addTest = function(feature, test) {
            if ("object" == typeof feature)
                for (var key in feature) hasOwnProp(feature, key) && Modernizr.addTest(key, feature[key]);
            else {
                if (feature = feature.toLowerCase(), Modernizr[feature] !== undefined) return Modernizr;
                test = "function" == typeof test ? test() : test, "undefined" != typeof enableClasses && enableClasses && (docElement.className += " " + (test ? "" : "no-") + feature), Modernizr[feature] = test
            }
            return Modernizr
        }, setCss(""), modElem = null, Modernizr._version = "2.8.3", Modernizr._prefixes = prefixes, Modernizr._domPrefixes = domPrefixes, Modernizr._cssomPrefixes = cssomPrefixes, Modernizr.hasEvent = isEventSupported, Modernizr.testProp = function(prop) {
            return testProps([prop])
        }, Modernizr.testAllProps = testPropsAll, Modernizr.testStyles = injectElementWithStyles, Modernizr
    }(0, this.document),
    function($, undefined) {
        "use strict";
        $.ajaxPrefilter(function(options, origOptions, jqXHR) {
            if (options.iframe) return options.originalURL = options.url, "iframe"
        }), $.ajaxTransport("iframe", function(options, origOptions, jqXHR) {
            function cleanUp() {
                files.each(function(i, file) {
                    var $file = $(file);
                    $file.data("clone").replaceWith($file)
                }), form.remove(), iframe.one("load", function() {
                    iframe.remove()
                }), iframe.attr("src", "javascript:false;")
            }
            var form = null,
                iframe = null,
                name = "iframe-" + $.now(),
                files = $(options.files).filter(":file:enabled"),
                accepts = null;
            if (options.dataTypes.shift(), options.data = origOptions.data, files.length) return form = $("<form enctype='multipart/form-data' method='post'></form>").hide().attr({
                action: options.originalURL,
                target: name
            }), "string" == typeof options.data && options.data.length > 0 && $.error("data must not be serialized"), $.each(options.data || {}, function(name, value) {
                $.isPlainObject(value) && (name = value.name, value = value.value), $("<input type='hidden' />").attr({
                    name: name,
                    value: value
                }).appendTo(form)
            }), $("<input type='hidden' value='IFrame' name='X-Requested-With' />").appendTo(form), accepts = options.dataTypes[0] && options.accepts[options.dataTypes[0]] ? options.accepts[options.dataTypes[0]] + ("*" !== options.dataTypes[0] ? ", */*; q=0.01" : "") : options.accepts["*"], $("<input type='hidden' name='X-HTTP-Accept'>").attr("value", accepts).appendTo(form), files.after(function(idx) {
                var $this = $(this),
                    $clone = $this.clone().prop("disabled", !0);
                return $this.data("clone", $clone), $clone
            }).next(), files.appendTo(form), {
                send: function(headers, completeCallback) {
                    iframe = $("<iframe src='javascript:false;' name='" + name + "' id='" + name + "' style='display:block'></iframe>"), iframe.one("load", function() {
                        iframe.one("load", function() {
                            var doc = this.contentWindow ? this.contentWindow.document : this.contentDocument ? this.contentDocument : this.document,
                                root = doc.documentElement ? doc.documentElement : doc.body,
                                textarea = root.getElementsByTagName("textarea")[0],
                                type = textarea && textarea.getAttribute("data-type") || null,
                                status = textarea && textarea.getAttribute("data-status") || 200,
                                statusText = textarea && textarea.getAttribute("data-statusText") || "OK",
                                content = {
                                    html: root.innerHTML,
                                    text: type ? textarea.value : root ? root.textContent || root.innerText : null
                                };
                            cleanUp(), completeCallback(status, statusText, content, type ? "Content-Type: " + type : null)
                        }), form[0].submit()
                    }), $("body").append(form, iframe)
                },
                abort: function() {
                    null !== iframe && (iframe.unbind("load").attr("src", "javascript:false;"), cleanUp())
                }
            }
        })
    }(jQuery),
    function(factory) {
        if ("function" == typeof define && define.amd) define(factory);
        else if ("object" == typeof exports) module.exports = factory();
        else {
            var _OldCookies = window.Cookies,
                api = window.Cookies = factory(window.jQuery);
            api.noConflict = function() {
                return window.Cookies = _OldCookies, api
            }
        }
    }(function() {
        function extend() {
            for (var i = 0, result = {}; i < arguments.length; i++) {
                var attributes = arguments[i];
                for (var key in attributes) result[key] = attributes[key]
            }
            return result
        }

        function init(converter) {
            function api(key, value, attributes) {
                var result;
                if (arguments.length > 1) {
                    if (attributes = extend({
                            path: "/"
                        }, api.defaults, attributes), "number" == typeof attributes.expires) {
                        var expires = new Date;
                        expires.setMilliseconds(expires.getMilliseconds() + 864e5 * attributes.expires), attributes.expires = expires
                    }
                    try {
                        result = JSON.stringify(value), /^[\{\[]/.test(result) && (value = result)
                    } catch (e) {}
                    return value = encodeURIComponent(String(value)), value = value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), key = encodeURIComponent(String(key)), key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), key = key.replace(/[\(\)]/g, escape), document.cookie = [key, "=", value, attributes.expires && "; expires=" + attributes.expires.toUTCString(), attributes.path && "; path=" + attributes.path, attributes.domain && "; domain=" + attributes.domain, attributes.secure && "; secure"].join("")
                }
                key || (result = {});
                for (var cookies = document.cookie ? document.cookie.split("; ") : [], rdecode = /(%[0-9A-Z]{2})+/g, i = 0; i < cookies.length; i++) {
                    var parts = cookies[i].split("="),
                        name = parts[0].replace(rdecode, decodeURIComponent),
                        cookie = parts.slice(1).join("=");
                    if ('"' === cookie.charAt(0) && (cookie = cookie.slice(1, -1)), cookie = converter && converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent), this.json) try {
                        cookie = JSON.parse(cookie)
                    } catch (e) {}
                    if (key === name) {
                        result = cookie;
                        break
                    }
                    key || (result[name] = cookie)
                }
                return result
            }
            return api.get = api.set = api, api.getJSON = function() {
                return api.apply({
                    json: !0
                }, [].slice.call(arguments))
            }, api.defaults = {}, api.remove = function(key, attributes) {
                api(key, "", extend(attributes, {
                    expires: -1
                }))
            }, api.withConverter = init, api
        }
        return init()
    }),
    function(global, factory) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : global.moment = factory()
    }(this, function() {
        "use strict";

        function utils_hooks__hooks() {
            return hookCallback.apply(null, arguments)
        }

        function isArray(input) {
            return "[object Array]" === Object.prototype.toString.call(input)
        }

        function isDate(input) {
            return input instanceof Date || "[object Date]" === Object.prototype.toString.call(input)
        }

        function map(arr, fn) {
            var i, res = [];
            for (i = 0; i < arr.length; ++i) res.push(fn(arr[i], i));
            return res
        }

        function hasOwnProp(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        }

        function extend(a, b) {
            for (var i in b) hasOwnProp(b, i) && (a[i] = b[i]);
            return hasOwnProp(b, "toString") && (a.toString = b.toString), hasOwnProp(b, "valueOf") && (a.valueOf = b.valueOf), a
        }

        function create_utc__createUTC(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, !0).utc()
        }

        function defaultParsingFlags() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }

        function getParsingFlags(m) {
            return null == m._pf && (m._pf = defaultParsingFlags()), m._pf
        }

        function valid__isValid(m) {
            if (null == m._isValid) {
                var flags = getParsingFlags(m);
                m._isValid = !(isNaN(m._d.getTime()) || !(flags.overflow < 0) || flags.empty || flags.invalidMonth || flags.invalidWeekday || flags.nullInput || flags.invalidFormat || flags.userInvalidated), m._strict && (m._isValid = m._isValid && 0 === flags.charsLeftOver && 0 === flags.unusedTokens.length && flags.bigHour === undefined)
            }
            return m._isValid
        }

        function valid__createInvalid(flags) {
            var m = create_utc__createUTC(NaN);
            return null != flags ? extend(getParsingFlags(m), flags) : getParsingFlags(m).userInvalidated = !0, m
        }

        function copyConfig(to, from) {
            var i, prop, val;
            if ("undefined" != typeof from._isAMomentObject && (to._isAMomentObject = from._isAMomentObject), "undefined" != typeof from._i && (to._i = from._i), "undefined" != typeof from._f && (to._f = from._f), "undefined" != typeof from._l && (to._l = from._l), "undefined" != typeof from._strict && (to._strict = from._strict), "undefined" != typeof from._tzm && (to._tzm = from._tzm), "undefined" != typeof from._isUTC && (to._isUTC = from._isUTC), "undefined" != typeof from._offset && (to._offset = from._offset), "undefined" != typeof from._pf && (to._pf = getParsingFlags(from)), "undefined" != typeof from._locale && (to._locale = from._locale), momentProperties.length > 0)
                for (i in momentProperties) prop = momentProperties[i], void 0 !== (val = from[prop]) && (to[prop] = val);
            return to
        }

        function Moment(config) {
            copyConfig(this, config), this._d = new Date(null != config._d ? config._d.getTime() : NaN), !1 === updateInProgress && (updateInProgress = !0, utils_hooks__hooks.updateOffset(this), updateInProgress = !1)
        }

        function isMoment(obj) {
            return obj instanceof Moment || null != obj && null != obj._isAMomentObject
        }

        function absFloor(number) {
            return number < 0 ? Math.ceil(number) : Math.floor(number)
        }

        function toInt(argumentForCoercion) {
            var coercedNumber = +argumentForCoercion,
                value = 0;
            return 0 !== coercedNumber && isFinite(coercedNumber) && (value = absFloor(coercedNumber)), value
        }

        function compareArrays(array1, array2, dontConvert) {
            var i, len = Math.min(array1.length, array2.length),
                lengthDiff = Math.abs(array1.length - array2.length),
                diffs = 0;
            for (i = 0; i < len; i++)(dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) && diffs++;
            return diffs + lengthDiff
        }

        function Locale() {}

        function normalizeLocale(key) {
            return key ? key.toLowerCase().replace("_", "-") : key
        }

        function chooseLocale(names) {
            for (var j, next, locale, split, i = 0; i < names.length;) {
                for (split = normalizeLocale(names[i]).split("-"), j = split.length, next = normalizeLocale(names[i + 1]), next = next ? next.split("-") : null; j > 0;) {
                    if (locale = loadLocale(split.slice(0, j).join("-"))) return locale;
                    if (next && next.length >= j && compareArrays(split, next, !0) >= j - 1) break;
                    j--
                }
                i++
            }
            return null
        }

        function loadLocale(name) {
            var oldLocale = null;
            if (!locales[name] && "undefined" != typeof module && module && module.exports) try {
                oldLocale = globalLocale._abbr, require("./locale/" + name), locale_locales__getSetGlobalLocale(oldLocale)
            } catch (e) {}
            return locales[name]
        }

        function locale_locales__getSetGlobalLocale(key, values) {
            var data;
            return key && (data = void 0 === values ? locale_locales__getLocale(key) : defineLocale(key, values)) && (globalLocale = data), globalLocale._abbr
        }

        function defineLocale(name, values) {
            return null !== values ? (values.abbr = name, locales[name] = locales[name] || new Locale, locales[name].set(values), locale_locales__getSetGlobalLocale(name), locales[name]) : (delete locales[name], null)
        }

        function locale_locales__getLocale(key) {
            var locale;
            if (key && key._locale && key._locale._abbr && (key = key._locale._abbr), !key) return globalLocale;
            if (!isArray(key)) {
                if (locale = loadLocale(key)) return locale;
                key = [key]
            }
            return chooseLocale(key)
        }

        function addUnitAlias(unit, shorthand) {
            var lowerCase = unit.toLowerCase();
            aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit
        }

        function normalizeUnits(units) {
            return "string" == typeof units ? aliases[units] || aliases[units.toLowerCase()] : undefined
        }

        function normalizeObjectUnits(inputObject) {
            var normalizedProp, prop, normalizedInput = {};
            for (prop in inputObject) hasOwnProp(inputObject, prop) && (normalizedProp = normalizeUnits(prop)) && (normalizedInput[normalizedProp] = inputObject[prop]);
            return normalizedInput
        }

        function makeGetSet(unit, keepTime) {
            return function(value) {
                return null != value ? (get_set__set(this, unit, value), utils_hooks__hooks.updateOffset(this, keepTime), this) : get_set__get(this, unit)
            }
        }

        function get_set__get(mom, unit) {
            return mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]()
        }

        function get_set__set(mom, unit, value) {
            return mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value)
        }

        function getSet(units, value) {
            var unit;
            if ("object" == typeof units)
                for (unit in units) this.set(unit, units[unit]);
            else if (units = normalizeUnits(units), "function" == typeof this[units]) return this[units](value);
            return this
        }

        function zeroFill(number, targetLength, forceSign) {
            var absNumber = "" + Math.abs(number),
                zerosToFill = targetLength - absNumber.length;
            return (number >= 0 ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber
        }

        function addFormatToken(token, padded, ordinal, callback) {
            var func = callback;
            "string" == typeof callback && (func = function() {
                return this[callback]()
            }), token && (formatTokenFunctions[token] = func), padded && (formatTokenFunctions[padded[0]] = function() {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2])
            }), ordinal && (formatTokenFunctions[ordinal] = function() {
                return this.localeData().ordinal(func.apply(this, arguments), token)
            })
        }

        function removeFormattingTokens(input) {
            return input.match(/\[[\s\S]/) ? input.replace(/^\[|\]$/g, "") : input.replace(/\\/g, "")
        }

        function makeFormatFunction(format) {
            var i, length, array = format.match(formattingTokens);
            for (i = 0, length = array.length; i < length; i++) formatTokenFunctions[array[i]] ? array[i] = formatTokenFunctions[array[i]] : array[i] = removeFormattingTokens(array[i]);
            return function(mom) {
                var output = "";
                for (i = 0; i < length; i++) output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
                return output
            }
        }

        function formatMoment(m, format) {
            return m.isValid() ? (format = expandFormat(format, m.localeData()), formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format), formatFunctions[format](m)) : m.localeData().invalidDate()
        }

        function expandFormat(format, locale) {
            function replaceLongDateFormatTokens(input) {
                return locale.longDateFormat(input) || input
            }
            var i = 5;
            for (localFormattingTokens.lastIndex = 0; i >= 0 && localFormattingTokens.test(format);) format = format.replace(localFormattingTokens, replaceLongDateFormatTokens), localFormattingTokens.lastIndex = 0, i -= 1;
            return format
        }

        function isFunction(sth) {
            return "function" == typeof sth && "[object Function]" === Object.prototype.toString.call(sth)
        }

        function addRegexToken(token, regex, strictRegex) {
            regexes[token] = isFunction(regex) ? regex : function(isStrict) {
                return isStrict && strictRegex ? strictRegex : regex
            }
        }

        function getParseRegexForToken(token, config) {
            return hasOwnProp(regexes, token) ? regexes[token](config._strict, config._locale) : new RegExp(unescapeFormat(token))
        }

        function unescapeFormat(s) {
            return s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
                return p1 || p2 || p3 || p4
            }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function addParseToken(token, callback) {
            var i, func = callback;
            for ("string" == typeof token && (token = [token]), "number" == typeof callback && (func = function(input, array) {
                    array[callback] = toInt(input)
                }), i = 0; i < token.length; i++) tokens[token[i]] = func
        }

        function addWeekParseToken(token, callback) {
            addParseToken(token, function(input, array, config, token) {
                config._w = config._w || {}, callback(input, config._w, config, token)
            })
        }

        function addTimeToArrayFromToken(token, input, config) {
            null != input && hasOwnProp(tokens, token) && tokens[token](input, config._a, config, token)
        }

        function daysInMonth(year, month) {
            return new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
        }

        function localeMonths(m) {
            return this._months[m.month()]
        }

        function localeMonthsShort(m) {
            return this._monthsShort[m.month()]
        }

        function localeMonthsParse(monthName, format, strict) {
            var i, mom, regex;
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                if (mom = create_utc__createUTC([2e3, i]), strict && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i")), strict || this._monthsParse[i] || (regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, ""), this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i")), strict && "MMMM" === format && this._longMonthsParse[i].test(monthName)) return i;
                if (strict && "MMM" === format && this._shortMonthsParse[i].test(monthName)) return i;
                if (!strict && this._monthsParse[i].test(monthName)) return i
            }
        }

        function setMonth(mom, value) {
            var dayOfMonth;
            return "string" == typeof value && "number" != typeof(value = mom.localeData().monthsParse(value)) ? mom : (dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value)), mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth), mom)
        }

        function getSetMonth(value) {
            return null != value ? (setMonth(this, value), utils_hooks__hooks.updateOffset(this, !0), this) : get_set__get(this, "Month")
        }

        function getDaysInMonth() {
            return daysInMonth(this.year(), this.month())
        }

        function checkOverflow(m) {
            var overflow, a = m._a;
            return a && -2 === getParsingFlags(m).overflow && (overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || 24 === a[HOUR] && (0 !== a[MINUTE] || 0 !== a[SECOND] || 0 !== a[MILLISECOND]) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1, getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE) && (overflow = DATE), getParsingFlags(m).overflow = overflow), m
        }

        function warn(msg) {
            !1 === utils_hooks__hooks.suppressDeprecationWarnings && void 0 !== console && console.warn && console.warn("Deprecation warning: " + msg)
        }

        function deprecate(msg, fn) {
            var firstTime = !0;
            return extend(function() {
                return firstTime && (warn(msg + "\n" + (new Error).stack), firstTime = !1), fn.apply(this, arguments)
            }, fn)
        }

        function deprecateSimple(name, msg) {
            deprecations[name] || (warn(msg), deprecations[name] = !0)
        }

        function configFromISO(config) {
            var i, l, string = config._i,
                match = from_string__isoRegex.exec(string);
            if (match) {
                for (getParsingFlags(config).iso = !0, i = 0, l = isoDates.length; i < l; i++)
                    if (isoDates[i][1].exec(string)) {
                        config._f = isoDates[i][0];
                        break
                    }
                for (i = 0, l = isoTimes.length; i < l; i++)
                    if (isoTimes[i][1].exec(string)) {
                        config._f += (match[6] || " ") + isoTimes[i][0];
                        break
                    }
                string.match(matchOffset) && (config._f += "Z"), configFromStringAndFormat(config)
            } else config._isValid = !1
        }

        function configFromString(config) {
            var matched = aspNetJsonRegex.exec(config._i);
            if (null !== matched) return void(config._d = new Date(+matched[1]));
            configFromISO(config), !1 === config._isValid && (delete config._isValid, utils_hooks__hooks.createFromInputFallback(config))
        }

        function createDate(y, m, d, h, M, s, ms) {
            var date = new Date(y, m, d, h, M, s, ms);
            return y < 1970 && date.setFullYear(y), date
        }

        function createUTCDate(y) {
            var date = new Date(Date.UTC.apply(null, arguments));
            return y < 1970 && date.setUTCFullYear(y), date
        }

        function daysInYear(year) {
            return isLeapYear(year) ? 366 : 365
        }

        function isLeapYear(year) {
            return year % 4 == 0 && year % 100 != 0 || year % 400 == 0
        }

        function getIsLeapYear() {
            return isLeapYear(this.year())
        }

        function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
            var adjustedMoment, end = firstDayOfWeekOfYear - firstDayOfWeek,
                daysToDayOfWeek = firstDayOfWeekOfYear - mom.day();
            return daysToDayOfWeek > end && (daysToDayOfWeek -= 7), daysToDayOfWeek < end - 7 && (daysToDayOfWeek += 7), adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, "d"), {
                week: Math.ceil(adjustedMoment.dayOfYear() / 7),
                year: adjustedMoment.year()
            }
        }

        function localeWeek(mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week
        }

        function localeFirstDayOfWeek() {
            return this._week.dow
        }

        function localeFirstDayOfYear() {
            return this._week.doy
        }

        function getSetWeek(input) {
            var week = this.localeData().week(this);
            return null == input ? week : this.add(7 * (input - week), "d")
        }

        function getSetISOWeek(input) {
            var week = weekOfYear(this, 1, 4).week;
            return null == input ? week : this.add(7 * (input - week), "d")
        }

        function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
            var dayOfYear, week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear,
                janX = createUTCDate(year, 0, 1 + week1Jan),
                d = janX.getUTCDay();
            return d < firstDayOfWeek && (d += 7), weekday = null != weekday ? 1 * weekday : firstDayOfWeek, dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday, {
                year: dayOfYear > 0 ? year : year - 1,
                dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
            }
        }

        function getSetDayOfYear(input) {
            var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == input ? dayOfYear : this.add(input - dayOfYear, "d")
        }

        function defaults(a, b, c) {
            return null != a ? a : null != b ? b : c
        }

        function currentDateArray(config) {
            var now = new Date;
            return config._useUTC ? [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()] : [now.getFullYear(), now.getMonth(), now.getDate()]
        }

        function configFromArray(config) {
            var i, date, currentDate, yearToUse, input = [];
            if (!config._d) {
                for (currentDate = currentDateArray(config), config._w && null == config._a[DATE] && null == config._a[MONTH] && dayOfYearFromWeekInfo(config), config._dayOfYear && (yearToUse = defaults(config._a[YEAR], currentDate[YEAR]), config._dayOfYear > daysInYear(yearToUse) && (getParsingFlags(config)._overflowDayOfYear = !0), date = createUTCDate(yearToUse, 0, config._dayOfYear), config._a[MONTH] = date.getUTCMonth(), config._a[DATE] = date.getUTCDate()), i = 0; i < 3 && null == config._a[i]; ++i) config._a[i] = input[i] = currentDate[i];
                for (; i < 7; i++) config._a[i] = input[i] = null == config._a[i] ? 2 === i ? 1 : 0 : config._a[i];
                24 === config._a[HOUR] && 0 === config._a[MINUTE] && 0 === config._a[SECOND] && 0 === config._a[MILLISECOND] && (config._nextDay = !0, config._a[HOUR] = 0), config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input), null != config._tzm && config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm), config._nextDay && (config._a[HOUR] = 24)
            }
        }

        function dayOfYearFromWeekInfo(config) {
            var w, weekYear, week, weekday, dow, doy, temp;
            w = config._w, null != w.GG || null != w.W || null != w.E ? (dow = 1, doy = 4, weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year), week = defaults(w.W, 1), weekday = defaults(w.E, 1)) : (dow = config._locale._week.dow, doy = config._locale._week.doy, weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year), week = defaults(w.w, 1), null != w.d ? (weekday = w.d) < dow && ++week : weekday = null != w.e ? w.e + dow : dow), temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow), config._a[YEAR] = temp.year, config._dayOfYear = temp.dayOfYear
        }

        function configFromStringAndFormat(config) {
            if (config._f === utils_hooks__hooks.ISO_8601) return void configFromISO(config);
            config._a = [], getParsingFlags(config).empty = !0;
            var i, parsedInput, tokens, token, skipped, string = "" + config._i,
                stringLength = string.length,
                totalParsedInputLength = 0;
            for (tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [], i = 0; i < tokens.length; i++) token = tokens[i], parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0], parsedInput && (skipped = string.substr(0, string.indexOf(parsedInput)), skipped.length > 0 && getParsingFlags(config).unusedInput.push(skipped), string = string.slice(string.indexOf(parsedInput) + parsedInput.length), totalParsedInputLength += parsedInput.length), formatTokenFunctions[token] ? (parsedInput ? getParsingFlags(config).empty = !1 : getParsingFlags(config).unusedTokens.push(token), addTimeToArrayFromToken(token, parsedInput, config)) : config._strict && !parsedInput && getParsingFlags(config).unusedTokens.push(token);
            getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength, string.length > 0 && getParsingFlags(config).unusedInput.push(string), !0 === getParsingFlags(config).bigHour && config._a[HOUR] <= 12 && config._a[HOUR] > 0 && (getParsingFlags(config).bigHour = undefined), config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem), configFromArray(config), checkOverflow(config)
        }

        function meridiemFixWrap(locale, hour, meridiem) {
            var isPm;
            return null == meridiem ? hour : null != locale.meridiemHour ? locale.meridiemHour(hour, meridiem) : null != locale.isPM ? (isPm = locale.isPM(meridiem), isPm && hour < 12 && (hour += 12), isPm || 12 !== hour || (hour = 0), hour) : hour
        }

        function configFromStringAndArray(config) {
            var tempConfig, bestMoment, scoreToBeat, i, currentScore;
            if (0 === config._f.length) return getParsingFlags(config).invalidFormat = !0, void(config._d = new Date(NaN));
            for (i = 0; i < config._f.length; i++) currentScore = 0, tempConfig = copyConfig({}, config), null != config._useUTC && (tempConfig._useUTC = config._useUTC), tempConfig._f = config._f[i], configFromStringAndFormat(tempConfig), valid__isValid(tempConfig) && (currentScore += getParsingFlags(tempConfig).charsLeftOver, currentScore += 10 * getParsingFlags(tempConfig).unusedTokens.length, getParsingFlags(tempConfig).score = currentScore, (null == scoreToBeat || currentScore < scoreToBeat) && (scoreToBeat = currentScore, bestMoment = tempConfig));
            extend(config, bestMoment || tempConfig)
        }

        function configFromObject(config) {
            if (!config._d) {
                var i = normalizeObjectUnits(config._i);
                config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], configFromArray(config)
            }
        }

        function createFromConfig(config) {
            var res = new Moment(checkOverflow(prepareConfig(config)));
            return res._nextDay && (res.add(1, "d"), res._nextDay = undefined), res
        }

        function prepareConfig(config) {
            var input = config._i,
                format = config._f;
            return config._locale = config._locale || locale_locales__getLocale(config._l), null === input || format === undefined && "" === input ? valid__createInvalid({
                nullInput: !0
            }) : ("string" == typeof input && (config._i = input = config._locale.preparse(input)), isMoment(input) ? new Moment(checkOverflow(input)) : (isArray(format) ? configFromStringAndArray(config) : format ? configFromStringAndFormat(config) : isDate(input) ? config._d = input : configFromInput(config), config))
        }

        function configFromInput(config) {
            var input = config._i;
            input === undefined ? config._d = new Date : isDate(input) ? config._d = new Date(+input) : "string" == typeof input ? configFromString(config) : isArray(input) ? (config._a = map(input.slice(0), function(obj) {
                return parseInt(obj, 10)
            }), configFromArray(config)) : "object" == typeof input ? configFromObject(config) : "number" == typeof input ? config._d = new Date(input) : utils_hooks__hooks.createFromInputFallback(config)
        }

        function createLocalOrUTC(input, format, locale, strict, isUTC) {
            var c = {};
            return "boolean" == typeof locale && (strict = locale, locale = undefined), c._isAMomentObject = !0, c._useUTC = c._isUTC = isUTC, c._l = locale, c._i = input, c._f = format, c._strict = strict, createFromConfig(c)
        }

        function local__createLocal(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, !1)
        }

        function pickBy(fn, moments) {
            var res, i;
            if (1 === moments.length && isArray(moments[0]) && (moments = moments[0]), !moments.length) return local__createLocal();
            for (res = moments[0], i = 1; i < moments.length; ++i) moments[i].isValid() && !moments[i][fn](res) || (res = moments[i]);
            return res
        }

        function min() {
            return pickBy("isBefore", [].slice.call(arguments, 0))
        }

        function max() {
            return pickBy("isAfter", [].slice.call(arguments, 0))
        }

        function Duration(duration) {
            var normalizedInput = normalizeObjectUnits(duration),
                years = normalizedInput.year || 0,
                quarters = normalizedInput.quarter || 0,
                months = normalizedInput.month || 0,
                weeks = normalizedInput.week || 0,
                days = normalizedInput.day || 0,
                hours = normalizedInput.hour || 0,
                minutes = normalizedInput.minute || 0,
                seconds = normalizedInput.second || 0,
                milliseconds = normalizedInput.millisecond || 0;
            this._milliseconds = +milliseconds + 1e3 * seconds + 6e4 * minutes + 36e5 * hours, this._days = +days + 7 * weeks, this._months = +months + 3 * quarters + 12 * years, this._data = {}, this._locale = locale_locales__getLocale(), this._bubble()
        }

        function isDuration(obj) {
            return obj instanceof Duration
        }

        function offset(token, separator) {
            addFormatToken(token, 0, 0, function() {
                var offset = this.utcOffset(),
                    sign = "+";
                return offset < 0 && (offset = -offset, sign = "-"), sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2)
            })
        }

        function offsetFromString(string) {
            var matches = (string || "").match(matchOffset) || [],
                chunk = matches[matches.length - 1] || [],
                parts = (chunk + "").match(chunkOffset) || ["-", 0, 0],
                minutes = 60 * parts[1] + toInt(parts[2]);
            return "+" === parts[0] ? minutes : -minutes
        }

        function cloneWithOffset(input, model) {
            var res, diff;
            return model._isUTC ? (res = model.clone(), diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - +res, res._d.setTime(+res._d + diff), utils_hooks__hooks.updateOffset(res, !1), res) : local__createLocal(input).local()
        }

        function getDateOffset(m) {
            return 15 * -Math.round(m._d.getTimezoneOffset() / 15)
        }

        function getSetOffset(input, keepLocalTime) {
            var localAdjust, offset = this._offset || 0;
            return null != input ? ("string" == typeof input && (input = offsetFromString(input)), Math.abs(input) < 16 && (input *= 60), !this._isUTC && keepLocalTime && (localAdjust = getDateOffset(this)), this._offset = input, this._isUTC = !0, null != localAdjust && this.add(localAdjust, "m"), offset !== input && (!keepLocalTime || this._changeInProgress ? add_subtract__addSubtract(this, create__createDuration(input - offset, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, utils_hooks__hooks.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? offset : getDateOffset(this)
        }

        function getSetZone(input, keepLocalTime) {
            return null != input ? ("string" != typeof input && (input = -input), this.utcOffset(input, keepLocalTime), this) : -this.utcOffset()
        }

        function setOffsetToUTC(keepLocalTime) {
            return this.utcOffset(0, keepLocalTime)
        }

        function setOffsetToLocal(keepLocalTime) {
            return this._isUTC && (this.utcOffset(0, keepLocalTime), this._isUTC = !1, keepLocalTime && this.subtract(getDateOffset(this), "m")), this
        }

        function setOffsetToParsedOffset() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(offsetFromString(this._i)), this
        }

        function hasAlignedHourOffset(input) {
            return input = input ? local__createLocal(input).utcOffset() : 0, (this.utcOffset() - input) % 60 == 0
        }

        function isDaylightSavingTime() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function isDaylightSavingTimeShifted() {
            if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
            var c = {};
            if (copyConfig(c, this), c = prepareConfig(c), c._a) {
                var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
                this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function isLocal() {
            return !this._isUTC
        }

        function isUtcOffset() {
            return this._isUTC
        }

        function isUtc() {
            return this._isUTC && 0 === this._offset
        }

        function create__createDuration(input, key) {
            var sign, ret, diffRes, duration = input,
                match = null;
            return isDuration(input) ? duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            } : "number" == typeof input ? (duration = {}, key ? duration[key] = input : duration.milliseconds = input) : (match = aspNetRegex.exec(input)) ? (sign = "-" === match[1] ? -1 : 1, duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            }) : (match = create__isoRegex.exec(input)) ? (sign = "-" === match[1] ? -1 : 1, duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                d: parseIso(match[4], sign),
                h: parseIso(match[5], sign),
                m: parseIso(match[6], sign),
                s: parseIso(match[7], sign),
                w: parseIso(match[8], sign)
            }) : null == duration ? duration = {} : "object" == typeof duration && ("from" in duration || "to" in duration) && (diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to)), duration = {}, duration.ms = diffRes.milliseconds, duration.M = diffRes.months), ret = new Duration(duration), isDuration(input) && hasOwnProp(input, "_locale") && (ret._locale = input._locale), ret
        }

        function parseIso(inp, sign) {
            var res = inp && parseFloat(inp.replace(",", "."));
            return (isNaN(res) ? 0 : res) * sign
        }

        function positiveMomentsDifference(base, other) {
            var res = {
                milliseconds: 0,
                months: 0
            };
            return res.months = other.month() - base.month() + 12 * (other.year() - base.year()), base.clone().add(res.months, "M").isAfter(other) && --res.months, res.milliseconds = +other - +base.clone().add(res.months, "M"), res
        }

        function momentsDifference(base, other) {
            var res;
            return other = cloneWithOffset(other, base), base.isBefore(other) ? res = positiveMomentsDifference(base, other) : (res = positiveMomentsDifference(other, base), res.milliseconds = -res.milliseconds, res.months = -res.months), res
        }

        function createAdder(direction, name) {
            return function(val, period) {
                var dur, tmp;
                return null === period || isNaN(+period) || (deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period)."), tmp = val, val = period, period = tmp), val = "string" == typeof val ? +val : val, dur = create__createDuration(val, period), add_subtract__addSubtract(this, dur, direction), this
            }
        }

        function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
            var milliseconds = duration._milliseconds,
                days = duration._days,
                months = duration._months;
            updateOffset = null == updateOffset || updateOffset, milliseconds && mom._d.setTime(+mom._d + milliseconds * isAdding), days && get_set__set(mom, "Date", get_set__get(mom, "Date") + days * isAdding), months && setMonth(mom, get_set__get(mom, "Month") + months * isAdding), updateOffset && utils_hooks__hooks.updateOffset(mom, days || months)
        }

        function moment_calendar__calendar(time, formats) {
            var now = time || local__createLocal(),
                sod = cloneWithOffset(now, this).startOf("day"),
                diff = this.diff(sod, "days", !0),
                format = diff < -6 ? "sameElse" : diff < -1 ? "lastWeek" : diff < 0 ? "lastDay" : diff < 1 ? "sameDay" : diff < 2 ? "nextDay" : diff < 7 ? "nextWeek" : "sameElse";
            return this.format(formats && formats[format] || this.localeData().calendar(format, this, local__createLocal(now)))
        }

        function clone() {
            return new Moment(this)
        }

        function isAfter(input, units) {
            return units = normalizeUnits(void 0 !== units ? units : "millisecond"), "millisecond" === units ? (input = isMoment(input) ? input : local__createLocal(input), +this > +input) : (isMoment(input) ? +input : +local__createLocal(input)) < +this.clone().startOf(units)
        }

        function isBefore(input, units) {
            var inputMs;
            return units = normalizeUnits(void 0 !== units ? units : "millisecond"), "millisecond" === units ? (input = isMoment(input) ? input : local__createLocal(input), +this < +input) : (inputMs = isMoment(input) ? +input : +local__createLocal(input), +this.clone().endOf(units) < inputMs)
        }

        function isBetween(from, to, units) {
            return this.isAfter(from, units) && this.isBefore(to, units)
        }

        function isSame(input, units) {
            var inputMs;
            return units = normalizeUnits(units || "millisecond"), "millisecond" === units ? (input = isMoment(input) ? input : local__createLocal(input), +this == +input) : (inputMs = +local__createLocal(input), +this.clone().startOf(units) <= inputMs && inputMs <= +this.clone().endOf(units))
        }

        function diff(input, units, asFloat) {
            var delta, output, that = cloneWithOffset(input, this),
                zoneDelta = 6e4 * (that.utcOffset() - this.utcOffset());
            return units = normalizeUnits(units), "year" === units || "month" === units || "quarter" === units ? (output = monthDiff(this, that), "quarter" === units ? output /= 3 : "year" === units && (output /= 12)) : (delta = this - that, output = "second" === units ? delta / 1e3 : "minute" === units ? delta / 6e4 : "hour" === units ? delta / 36e5 : "day" === units ? (delta - zoneDelta) / 864e5 : "week" === units ? (delta - zoneDelta) / 6048e5 : delta), asFloat ? output : absFloor(output)
        }

        function monthDiff(a, b) {
            var anchor2, adjust, wholeMonthDiff = 12 * (b.year() - a.year()) + (b.month() - a.month()),
                anchor = a.clone().add(wholeMonthDiff, "months");
            return b - anchor < 0 ? (anchor2 = a.clone().add(wholeMonthDiff - 1, "months"), adjust = (b - anchor) / (anchor - anchor2)) : (anchor2 = a.clone().add(wholeMonthDiff + 1, "months"), adjust = (b - anchor) / (anchor2 - anchor)), -(wholeMonthDiff + adjust)
        }

        function toString() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function moment_format__toISOString() {
            var m = this.clone().utc();
            return 0 < m.year() && m.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function format(inputString) {
            var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
            return this.localeData().postformat(output)
        }

        function from(time, withoutSuffix) {
            return this.isValid() ? create__createDuration({
                to: this,
                from: time
            }).locale(this.locale()).humanize(!withoutSuffix) : this.localeData().invalidDate()
        }

        function fromNow(withoutSuffix) {
            return this.from(local__createLocal(), withoutSuffix)
        }

        function to(time, withoutSuffix) {
            return this.isValid() ? create__createDuration({
                from: this,
                to: time
            }).locale(this.locale()).humanize(!withoutSuffix) : this.localeData().invalidDate()
        }

        function toNow(withoutSuffix) {
            return this.to(local__createLocal(), withoutSuffix)
        }

        function locale(key) {
            var newLocaleData;
            return key === undefined ? this._locale._abbr : (newLocaleData = locale_locales__getLocale(key), null != newLocaleData && (this._locale = newLocaleData), this)
        }

        function localeData() {
            return this._locale
        }

        function startOf(units) {
            switch (units = normalizeUnits(units)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === units && this.weekday(0), "isoWeek" === units && this.isoWeekday(1), "quarter" === units && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function endOf(units) {
            return units = normalizeUnits(units), units === undefined || "millisecond" === units ? this : this.startOf(units).add(1, "isoWeek" === units ? "week" : units).subtract(1, "ms")
        }

        function to_type__valueOf() {
            return +this._d - 6e4 * (this._offset || 0)
        }

        function unix() {
            return Math.floor(+this / 1e3)

        }

        function toDate() {
            return this._offset ? new Date(+this) : this._d
        }

        function toArray() {
            var m = this;
            return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()]
        }

        function toObject() {
            var m = this;
            return {
                years: m.year(),
                months: m.month(),
                date: m.date(),
                hours: m.hours(),
                minutes: m.minutes(),
                seconds: m.seconds(),
                milliseconds: m.milliseconds()
            }
        }

        function moment_valid__isValid() {
            return valid__isValid(this)
        }

        function parsingFlags() {
            return extend({}, getParsingFlags(this))
        }

        function invalidAt() {
            return getParsingFlags(this).overflow
        }

        function addWeekYearFormatToken(token, getter) {
            addFormatToken(0, [token, token.length], 0, getter)
        }

        function weeksInYear(year, dow, doy) {
            return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week
        }

        function getSetWeekYear(input) {
            var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == input ? year : this.add(input - year, "y")
        }

        function getSetISOWeekYear(input) {
            var year = weekOfYear(this, 1, 4).year;
            return null == input ? year : this.add(input - year, "y")
        }

        function getISOWeeksInYear() {
            return weeksInYear(this.year(), 1, 4)
        }

        function getWeeksInYear() {
            var weekInfo = this.localeData()._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy)
        }

        function getSetQuarter(input) {
            return null == input ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (input - 1) + this.month() % 3)
        }

        function parseWeekday(input, locale) {
            return "string" != typeof input ? input : isNaN(input) ? (input = locale.weekdaysParse(input), "number" == typeof input ? input : null) : parseInt(input, 10)
        }

        function localeWeekdays(m) {
            return this._weekdays[m.day()]
        }

        function localeWeekdaysShort(m) {
            return this._weekdaysShort[m.day()]
        }

        function localeWeekdaysMin(m) {
            return this._weekdaysMin[m.day()]
        }

        function localeWeekdaysParse(weekdayName) {
            var i, mom, regex;
            for (this._weekdaysParse = this._weekdaysParse || [], i = 0; i < 7; i++)
                if (this._weekdaysParse[i] || (mom = local__createLocal([2e3, 1]).day(i), regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, ""), this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i")), this._weekdaysParse[i].test(weekdayName)) return i
        }

        function getSetDayOfWeek(input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != input ? (input = parseWeekday(input, this.localeData()), this.add(input - day, "d")) : day
        }

        function getSetLocaleDayOfWeek(input) {
            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == input ? weekday : this.add(input - weekday, "d")
        }

        function getSetISODayOfWeek(input) {
            return null == input ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7)
        }

        function meridiem(token, lowercase) {
            addFormatToken(token, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), lowercase)
            })
        }

        function matchMeridiem(isStrict, locale) {
            return locale._meridiemParse
        }

        function localeIsPM(input) {
            return "p" === (input + "").toLowerCase().charAt(0)
        }

        function localeMeridiem(hours, minutes, isLower) {
            return hours > 11 ? isLower ? "pm" : "PM" : isLower ? "am" : "AM"
        }

        function parseMs(input, array) {
            array[MILLISECOND] = toInt(1e3 * ("0." + input))
        }

        function getZoneAbbr() {
            return this._isUTC ? "UTC" : ""
        }

        function getZoneName() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function moment__createUnix(input) {
            return local__createLocal(1e3 * input)
        }

        function moment__createInZone() {
            return local__createLocal.apply(null, arguments).parseZone()
        }

        function locale_calendar__calendar(key, mom, now) {
            var output = this._calendar[key];
            return "function" == typeof output ? output.call(mom, now) : output
        }

        function longDateFormat(key) {
            var format = this._longDateFormat[key],
                formatUpper = this._longDateFormat[key.toUpperCase()];
            return format || !formatUpper ? format : (this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
                return val.slice(1)
            }), this._longDateFormat[key])
        }

        function invalidDate() {
            return this._invalidDate
        }

        function ordinal(number) {
            return this._ordinal.replace("%d", number)
        }

        function preParsePostFormat(string) {
            return string
        }

        function relative__relativeTime(number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return "function" == typeof output ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number)
        }

        function pastFuture(diff, output) {
            var format = this._relativeTime[diff > 0 ? "future" : "past"];
            return "function" == typeof format ? format(output) : format.replace(/%s/i, output)
        }

        function locale_set__set(config) {
            var prop, i;
            for (i in config) prop = config[i], "function" == typeof prop ? this[i] = prop : this["_" + i] = prop;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function lists__get(format, index, field, setter) {
            var locale = locale_locales__getLocale(),
                utc = create_utc__createUTC().set(setter, index);
            return locale[field](utc, format)
        }

        function list(format, index, field, count, setter) {
            if ("number" == typeof format && (index = format, format = undefined), format = format || "", null != index) return lists__get(format, index, field, setter);
            var i, out = [];
            for (i = 0; i < count; i++) out[i] = lists__get(format, i, field, setter);
            return out
        }

        function lists__listMonths(format, index) {
            return list(format, index, "months", 12, "month")
        }

        function lists__listMonthsShort(format, index) {
            return list(format, index, "monthsShort", 12, "month")
        }

        function lists__listWeekdays(format, index) {
            return list(format, index, "weekdays", 7, "day")
        }

        function lists__listWeekdaysShort(format, index) {
            return list(format, index, "weekdaysShort", 7, "day")
        }

        function lists__listWeekdaysMin(format, index) {
            return list(format, index, "weekdaysMin", 7, "day")
        }

        function duration_abs__abs() {
            var data = this._data;
            return this._milliseconds = mathAbs(this._milliseconds), this._days = mathAbs(this._days), this._months = mathAbs(this._months), data.milliseconds = mathAbs(data.milliseconds), data.seconds = mathAbs(data.seconds), data.minutes = mathAbs(data.minutes), data.hours = mathAbs(data.hours), data.months = mathAbs(data.months), data.years = mathAbs(data.years), this
        }

        function duration_add_subtract__addSubtract(duration, input, value, direction) {
            var other = create__createDuration(input, value);
            return duration._milliseconds += direction * other._milliseconds, duration._days += direction * other._days, duration._months += direction * other._months, duration._bubble()
        }

        function duration_add_subtract__add(input, value) {
            return duration_add_subtract__addSubtract(this, input, value, 1)
        }

        function duration_add_subtract__subtract(input, value) {
            return duration_add_subtract__addSubtract(this, input, value, -1)
        }

        function absCeil(number) {
            return number < 0 ? Math.floor(number) : Math.ceil(number)
        }

        function bubble() {
            var seconds, minutes, hours, years, monthsFromDays, milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data;
            return milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0 || (milliseconds += 864e5 * absCeil(monthsToDays(months) + days), days = 0, months = 0), data.milliseconds = milliseconds % 1e3, seconds = absFloor(milliseconds / 1e3), data.seconds = seconds % 60, minutes = absFloor(seconds / 60), data.minutes = minutes % 60, hours = absFloor(minutes / 60), data.hours = hours % 24, days += absFloor(hours / 24), monthsFromDays = absFloor(daysToMonths(days)), months += monthsFromDays, days -= absCeil(monthsToDays(monthsFromDays)), years = absFloor(months / 12), months %= 12, data.days = days, data.months = months, data.years = years, this
        }

        function daysToMonths(days) {
            return 4800 * days / 146097
        }

        function monthsToDays(months) {
            return 146097 * months / 4800
        }

        function as(units) {
            var days, months, milliseconds = this._milliseconds;
            if ("month" === (units = normalizeUnits(units)) || "year" === units) return days = this._days + milliseconds / 864e5, months = this._months + daysToMonths(days), "month" === units ? months : months / 12;
            switch (days = this._days + Math.round(monthsToDays(this._months)), units) {
                case "week":
                    return days / 7 + milliseconds / 6048e5;
                case "day":
                    return days + milliseconds / 864e5;
                case "hour":
                    return 24 * days + milliseconds / 36e5;
                case "minute":
                    return 1440 * days + milliseconds / 6e4;
                case "second":
                    return 86400 * days + milliseconds / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * days) + milliseconds;
                default:
                    throw new Error("Unknown unit " + units)
            }
        }

        function duration_as__valueOf() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * toInt(this._months / 12)
        }

        function makeAs(alias) {
            return function() {
                return this.as(alias)
            }
        }

        function duration_get__get(units) {
            return units = normalizeUnits(units), this[units + "s"]()
        }

        function makeGetter(name) {
            return function() {
                return this._data[name]
            }
        }

        function weeks() {
            return absFloor(this.days() / 7)
        }

        function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
            return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture)
        }

        function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
            var duration = create__createDuration(posNegDuration).abs(),
                seconds = round(duration.as("s")),
                minutes = round(duration.as("m")),
                hours = round(duration.as("h")),
                days = round(duration.as("d")),
                months = round(duration.as("M")),
                years = round(duration.as("y")),
                a = seconds < thresholds.s && ["s", seconds] || 1 === minutes && ["m"] || minutes < thresholds.m && ["mm", minutes] || 1 === hours && ["h"] || hours < thresholds.h && ["hh", hours] || 1 === days && ["d"] || days < thresholds.d && ["dd", days] || 1 === months && ["M"] || months < thresholds.M && ["MM", months] || 1 === years && ["y"] || ["yy", years];
            return a[2] = withoutSuffix, a[3] = +posNegDuration > 0, a[4] = locale, substituteTimeAgo.apply(null, a)
        }

        function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
            return thresholds[threshold] !== undefined && (limit === undefined ? thresholds[threshold] : (thresholds[threshold] = limit, !0))
        }

        function humanize(withSuffix) {
            var locale = this.localeData(),
                output = duration_humanize__relativeTime(this, !withSuffix, locale);
            return withSuffix && (output = locale.pastFuture(+this, output)), locale.postformat(output)
        }

        function iso_string__toISOString() {
            var minutes, hours, years, seconds = iso_string__abs(this._milliseconds) / 1e3,
                days = iso_string__abs(this._days),
                months = iso_string__abs(this._months);
            minutes = absFloor(seconds / 60), hours = absFloor(minutes / 60), seconds %= 60, minutes %= 60, years = absFloor(months / 12), months %= 12;
            var Y = years,
                M = months,
                D = days,
                h = hours,
                m = minutes,
                s = seconds,
                total = this.asSeconds();
            return total ? (total < 0 ? "-" : "") + "P" + (Y ? Y + "Y" : "") + (M ? M + "M" : "") + (D ? D + "D" : "") + (h || m || s ? "T" : "") + (h ? h + "H" : "") + (m ? m + "M" : "") + (s ? s + "S" : "") : "P0D"
        }
        var hookCallback, globalLocale, momentProperties = utils_hooks__hooks.momentProperties = [],
            updateInProgress = !1,
            locales = {},
            aliases = {},
            formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            formatFunctions = {},
            formatTokenFunctions = {},
            match1 = /\d/,
            match2 = /\d\d/,
            match3 = /\d{3}/,
            match4 = /\d{4}/,
            match6 = /[+-]?\d{6}/,
            match1to2 = /\d\d?/,
            match1to3 = /\d{1,3}/,
            match1to4 = /\d{1,4}/,
            match1to6 = /[+-]?\d{1,6}/,
            matchUnsigned = /\d+/,
            matchSigned = /[+-]?\d+/,
            matchOffset = /Z|[+-]\d\d:?\d\d/gi,
            matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
            matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            regexes = {},
            tokens = {},
            YEAR = 0,
            MONTH = 1,
            DATE = 2,
            HOUR = 3,
            MINUTE = 4,
            SECOND = 5,
            MILLISECOND = 6;
        addFormatToken("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), addFormatToken("MMM", 0, 0, function(format) {
            return this.localeData().monthsShort(this, format)
        }), addFormatToken("MMMM", 0, 0, function(format) {
            return this.localeData().months(this, format)
        }), addUnitAlias("month", "M"), addRegexToken("M", match1to2), addRegexToken("MM", match1to2, match2), addRegexToken("MMM", matchWord), addRegexToken("MMMM", matchWord), addParseToken(["M", "MM"], function(input, array) {
            array[MONTH] = toInt(input) - 1
        }), addParseToken(["MMM", "MMMM"], function(input, array, config, token) {
            var month = config._locale.monthsParse(input, token, config._strict);
            null != month ? array[MONTH] = month : getParsingFlags(config).invalidMonth = input
        });
        var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            deprecations = {};
        utils_hooks__hooks.suppressDeprecationWarnings = !0;
        var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            isoDates = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
                ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
                ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d{2}/],
                ["YYYY-DDD", /\d{4}-\d{3}/]
            ],
            isoTimes = [
                ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
                ["HH:mm", /(T| )\d\d:\d\d/],
                ["HH", /(T| )\d\d/]
            ],
            aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
        utils_hooks__hooks.createFromInputFallback = deprecate("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(config) {
            config._d = new Date(config._i + (config._useUTC ? " UTC" : ""))
        }), addFormatToken(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), addFormatToken(0, ["YYYY", 4], 0, "year"), addFormatToken(0, ["YYYYY", 5], 0, "year"), addFormatToken(0, ["YYYYYY", 6, !0], 0, "year"), addUnitAlias("year", "y"), addRegexToken("Y", matchSigned), addRegexToken("YY", match1to2, match2), addRegexToken("YYYY", match1to4, match4), addRegexToken("YYYYY", match1to6, match6), addRegexToken("YYYYYY", match1to6, match6), addParseToken(["YYYYY", "YYYYYY"], YEAR), addParseToken("YYYY", function(input, array) {
            array[YEAR] = 2 === input.length ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input)
        }), addParseToken("YY", function(input, array) {
            array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input)
        }), utils_hooks__hooks.parseTwoDigitYear = function(input) {
            return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3)
        };
        var getSetYear = makeGetSet("FullYear", !1);
        addFormatToken("w", ["ww", 2], "wo", "week"), addFormatToken("W", ["WW", 2], "Wo", "isoWeek"), addUnitAlias("week", "w"), addUnitAlias("isoWeek", "W"), addRegexToken("w", match1to2), addRegexToken("ww", match1to2, match2), addRegexToken("W", match1to2), addRegexToken("WW", match1to2, match2), addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input)
        });
        var defaultLocaleWeek = {
            dow: 0,
            doy: 6
        };
        addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), addUnitAlias("dayOfYear", "DDD"), addRegexToken("DDD", match1to3), addRegexToken("DDDD", match3), addParseToken(["DDD", "DDDD"], function(input, array, config) {
            config._dayOfYear = toInt(input)
        }), utils_hooks__hooks.ISO_8601 = function() {};
        var prototypeMin = deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
                var other = local__createLocal.apply(null, arguments);
                return other < this ? this : other
            }),
            prototypeMax = deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
                var other = local__createLocal.apply(null, arguments);
                return other > this ? this : other
            });
        offset("Z", ":"), offset("ZZ", ""), addRegexToken("Z", matchOffset), addRegexToken("ZZ", matchOffset), addParseToken(["Z", "ZZ"], function(input, array, config) {
            config._useUTC = !0, config._tzm = offsetFromString(input)
        });
        var chunkOffset = /([\+\-]|\d\d)/gi;
        utils_hooks__hooks.updateOffset = function() {};
        var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
            create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        create__createDuration.fn = Duration.prototype;
        var add_subtract__add = createAdder(1, "add"),
            add_subtract__subtract = createAdder(-1, "subtract");
        utils_hooks__hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
            return key === undefined ? this.localeData() : this.locale(key)
        });
        addFormatToken(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), addFormatToken(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), addWeekYearFormatToken("gggg", "weekYear"), addWeekYearFormatToken("ggggg", "weekYear"), addWeekYearFormatToken("GGGG", "isoWeekYear"), addWeekYearFormatToken("GGGGG", "isoWeekYear"), addUnitAlias("weekYear", "gg"), addUnitAlias("isoWeekYear", "GG"), addRegexToken("G", matchSigned), addRegexToken("g", matchSigned), addRegexToken("GG", match1to2, match2), addRegexToken("gg", match1to2, match2), addRegexToken("GGGG", match1to4, match4), addRegexToken("gggg", match1to4, match4), addRegexToken("GGGGG", match1to6, match6), addRegexToken("ggggg", match1to6, match6), addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input)
        }), addWeekParseToken(["gg", "GG"], function(input, week, config, token) {
            week[token] = utils_hooks__hooks.parseTwoDigitYear(input)
        }), addFormatToken("Q", 0, 0, "quarter"), addUnitAlias("quarter", "Q"), addRegexToken("Q", match1), addParseToken("Q", function(input, array) {
            array[MONTH] = 3 * (toInt(input) - 1)
        }), addFormatToken("D", ["DD", 2], "Do", "date"), addUnitAlias("date", "D"), addRegexToken("D", match1to2), addRegexToken("DD", match1to2, match2), addRegexToken("Do", function(isStrict, locale) {
            return isStrict ? locale._ordinalParse : locale._ordinalParseLenient
        }), addParseToken(["D", "DD"], DATE), addParseToken("Do", function(input, array) {
            array[DATE] = toInt(input.match(match1to2)[0], 10)
        });
        var getSetDayOfMonth = makeGetSet("Date", !0);
        addFormatToken("d", 0, "do", "day"), addFormatToken("dd", 0, 0, function(format) {
            return this.localeData().weekdaysMin(this, format)
        }), addFormatToken("ddd", 0, 0, function(format) {
            return this.localeData().weekdaysShort(this, format)
        }), addFormatToken("dddd", 0, 0, function(format) {
            return this.localeData().weekdays(this, format)
        }), addFormatToken("e", 0, 0, "weekday"), addFormatToken("E", 0, 0, "isoWeekday"), addUnitAlias("day", "d"), addUnitAlias("weekday", "e"), addUnitAlias("isoWeekday", "E"), addRegexToken("d", match1to2), addRegexToken("e", match1to2), addRegexToken("E", match1to2), addRegexToken("dd", matchWord), addRegexToken("ddd", matchWord), addRegexToken("dddd", matchWord), addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config) {
            var weekday = config._locale.weekdaysParse(input);
            null != weekday ? week.d = weekday : getParsingFlags(config).invalidWeekday = input
        }), addWeekParseToken(["d", "e", "E"], function(input, week, config, token) {
            week[token] = toInt(input)
        });
        var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        addFormatToken("H", ["HH", 2], 0, "hour"), addFormatToken("h", ["hh", 2], 0, function() {
            return this.hours() % 12 || 12
        }), meridiem("a", !0), meridiem("A", !1), addUnitAlias("hour", "h"), addRegexToken("a", matchMeridiem), addRegexToken("A", matchMeridiem), addRegexToken("H", match1to2), addRegexToken("h", match1to2), addRegexToken("HH", match1to2, match2), addRegexToken("hh", match1to2, match2), addParseToken(["H", "HH"], HOUR), addParseToken(["a", "A"], function(input, array, config) {
            config._isPm = config._locale.isPM(input), config._meridiem = input
        }), addParseToken(["h", "hh"], function(input, array, config) {
            array[HOUR] = toInt(input), getParsingFlags(config).bigHour = !0
        });
        var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
            getSetHour = makeGetSet("Hours", !0);
        addFormatToken("m", ["mm", 2], 0, "minute"), addUnitAlias("minute", "m"), addRegexToken("m", match1to2), addRegexToken("mm", match1to2, match2), addParseToken(["m", "mm"], MINUTE);
        var getSetMinute = makeGetSet("Minutes", !1);
        addFormatToken("s", ["ss", 2], 0, "second"), addUnitAlias("second", "s"), addRegexToken("s", match1to2), addRegexToken("ss", match1to2, match2), addParseToken(["s", "ss"], SECOND);
        var getSetSecond = makeGetSet("Seconds", !1);
        addFormatToken("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), addFormatToken(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), addFormatToken(0, ["SSS", 3], 0, "millisecond"), addFormatToken(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), addFormatToken(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), addFormatToken(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), addFormatToken(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), addUnitAlias("millisecond", "ms"), addRegexToken("S", match1to3, match1), addRegexToken("SS", match1to3, match2), addRegexToken("SSS", match1to3, match3);
        var token;
        for (token = "SSSS"; token.length <= 9; token += "S") addRegexToken(token, matchUnsigned);
        for (token = "S"; token.length <= 9; token += "S") addParseToken(token, parseMs);
        var getSetMillisecond = makeGetSet("Milliseconds", !1);
        addFormatToken("z", 0, 0, "zoneAbbr"), addFormatToken("zz", 0, 0, "zoneName");
        var momentPrototype__proto = Moment.prototype;
        momentPrototype__proto.add = add_subtract__add, momentPrototype__proto.calendar = moment_calendar__calendar, momentPrototype__proto.clone = clone, momentPrototype__proto.diff = diff, momentPrototype__proto.endOf = endOf, momentPrototype__proto.format = format, momentPrototype__proto.from = from, momentPrototype__proto.fromNow = fromNow, momentPrototype__proto.to = to, momentPrototype__proto.toNow = toNow, momentPrototype__proto.get = getSet, momentPrototype__proto.invalidAt = invalidAt, momentPrototype__proto.isAfter = isAfter, momentPrototype__proto.isBefore = isBefore, momentPrototype__proto.isBetween = isBetween, momentPrototype__proto.isSame = isSame, momentPrototype__proto.isValid = moment_valid__isValid, momentPrototype__proto.lang = lang, momentPrototype__proto.locale = locale, momentPrototype__proto.localeData = localeData, momentPrototype__proto.max = prototypeMax, momentPrototype__proto.min = prototypeMin, momentPrototype__proto.parsingFlags = parsingFlags, momentPrototype__proto.set = getSet, momentPrototype__proto.startOf = startOf, momentPrototype__proto.subtract = add_subtract__subtract, momentPrototype__proto.toArray = toArray, momentPrototype__proto.toObject = toObject, momentPrototype__proto.toDate = toDate, momentPrototype__proto.toISOString = moment_format__toISOString, momentPrototype__proto.toJSON = moment_format__toISOString, momentPrototype__proto.toString = toString, momentPrototype__proto.unix = unix, momentPrototype__proto.valueOf = to_type__valueOf, momentPrototype__proto.year = getSetYear, momentPrototype__proto.isLeapYear = getIsLeapYear, momentPrototype__proto.weekYear = getSetWeekYear, momentPrototype__proto.isoWeekYear = getSetISOWeekYear, momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter, momentPrototype__proto.month = getSetMonth, momentPrototype__proto.daysInMonth = getDaysInMonth, momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek, momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek, momentPrototype__proto.weeksInYear = getWeeksInYear, momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear, momentPrototype__proto.date = getSetDayOfMonth, momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek, momentPrototype__proto.weekday = getSetLocaleDayOfWeek, momentPrototype__proto.isoWeekday = getSetISODayOfWeek, momentPrototype__proto.dayOfYear = getSetDayOfYear, momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour, momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute, momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond, momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond, momentPrototype__proto.utcOffset = getSetOffset, momentPrototype__proto.utc = setOffsetToUTC, momentPrototype__proto.local = setOffsetToLocal, momentPrototype__proto.parseZone = setOffsetToParsedOffset, momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset, momentPrototype__proto.isDST = isDaylightSavingTime, momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted, momentPrototype__proto.isLocal = isLocal, momentPrototype__proto.isUtcOffset = isUtcOffset, momentPrototype__proto.isUtc = isUtc, momentPrototype__proto.isUTC = isUtc, momentPrototype__proto.zoneAbbr = getZoneAbbr, momentPrototype__proto.zoneName = getZoneName, momentPrototype__proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth), momentPrototype__proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth), momentPrototype__proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear), momentPrototype__proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", getSetZone);
        var momentPrototype = momentPrototype__proto,
            defaultCalendar = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            defaultLongDateFormat = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            defaultOrdinalParse = /\d{1,2}/,
            defaultRelativeTime = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            prototype__proto = Locale.prototype;
        prototype__proto._calendar = defaultCalendar, prototype__proto.calendar = locale_calendar__calendar, prototype__proto._longDateFormat = defaultLongDateFormat, prototype__proto.longDateFormat = longDateFormat, prototype__proto._invalidDate = "Invalid date", prototype__proto.invalidDate = invalidDate, prototype__proto._ordinal = "%d", prototype__proto.ordinal = ordinal, prototype__proto._ordinalParse = defaultOrdinalParse, prototype__proto.preparse = preParsePostFormat, prototype__proto.postformat = preParsePostFormat, prototype__proto._relativeTime = defaultRelativeTime, prototype__proto.relativeTime = relative__relativeTime, prototype__proto.pastFuture = pastFuture, prototype__proto.set = locale_set__set, prototype__proto.months = localeMonths, prototype__proto._months = defaultLocaleMonths, prototype__proto.monthsShort = localeMonthsShort, prototype__proto._monthsShort = defaultLocaleMonthsShort, prototype__proto.monthsParse = localeMonthsParse, prototype__proto.week = localeWeek, prototype__proto._week = defaultLocaleWeek, prototype__proto.firstDayOfYear = localeFirstDayOfYear, prototype__proto.firstDayOfWeek = localeFirstDayOfWeek, prototype__proto.weekdays = localeWeekdays, prototype__proto._weekdays = defaultLocaleWeekdays, prototype__proto.weekdaysMin = localeWeekdaysMin, prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin, prototype__proto.weekdaysShort = localeWeekdaysShort, prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort, prototype__proto.weekdaysParse = localeWeekdaysParse, prototype__proto.isPM = localeIsPM, prototype__proto._meridiemParse = defaultLocaleMeridiemParse, prototype__proto.meridiem = localeMeridiem, locale_locales__getSetGlobalLocale("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(number) {
                var b = number % 10;
                return number + (1 === toInt(number % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th")
            }
        }), utils_hooks__hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", locale_locales__getSetGlobalLocale), utils_hooks__hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", locale_locales__getLocale);
        var mathAbs = Math.abs,
            asMilliseconds = makeAs("ms"),
            asSeconds = makeAs("s"),
            asMinutes = makeAs("m"),
            asHours = makeAs("h"),
            asDays = makeAs("d"),
            asWeeks = makeAs("w"),
            asMonths = makeAs("M"),
            asYears = makeAs("y"),
            milliseconds = makeGetter("milliseconds"),
            seconds = makeGetter("seconds"),
            minutes = makeGetter("minutes"),
            hours = makeGetter("hours"),
            days = makeGetter("days"),
            months = makeGetter("months"),
            years = makeGetter("years"),
            round = Math.round,
            thresholds = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            iso_string__abs = Math.abs,
            duration_prototype__proto = Duration.prototype;
        return duration_prototype__proto.abs = duration_abs__abs, duration_prototype__proto.add = duration_add_subtract__add, duration_prototype__proto.subtract = duration_add_subtract__subtract, duration_prototype__proto.as = as, duration_prototype__proto.asMilliseconds = asMilliseconds, duration_prototype__proto.asSeconds = asSeconds, duration_prototype__proto.asMinutes = asMinutes, duration_prototype__proto.asHours = asHours, duration_prototype__proto.asDays = asDays, duration_prototype__proto.asWeeks = asWeeks, duration_prototype__proto.asMonths = asMonths, duration_prototype__proto.asYears = asYears, duration_prototype__proto.valueOf = duration_as__valueOf, duration_prototype__proto._bubble = bubble, duration_prototype__proto.get = duration_get__get, duration_prototype__proto.milliseconds = milliseconds, duration_prototype__proto.seconds = seconds, duration_prototype__proto.minutes = minutes, duration_prototype__proto.hours = hours, duration_prototype__proto.days = days, duration_prototype__proto.weeks = weeks, duration_prototype__proto.months = months, duration_prototype__proto.years = years, duration_prototype__proto.humanize = humanize, duration_prototype__proto.toISOString = iso_string__toISOString, duration_prototype__proto.toString = iso_string__toISOString, duration_prototype__proto.toJSON = iso_string__toISOString, duration_prototype__proto.locale = locale, duration_prototype__proto.localeData = localeData, duration_prototype__proto.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", iso_string__toISOString), duration_prototype__proto.lang = lang, addFormatToken("X", 0, 0, "unix"), addFormatToken("x", 0, 0, "valueOf"), addRegexToken("x", matchSigned), addRegexToken("X", matchTimestamp), addParseToken("X", function(input, array, config) {
                config._d = new Date(1e3 * parseFloat(input, 10))
            }), addParseToken("x", function(input, array, config) {
                config._d = new Date(toInt(input))
            }), utils_hooks__hooks.version = "2.10.6",
            function(callback) {
                hookCallback = callback
            }(local__createLocal), utils_hooks__hooks.fn = momentPrototype, utils_hooks__hooks.min = min, utils_hooks__hooks.max = max, utils_hooks__hooks.utc = create_utc__createUTC, utils_hooks__hooks.unix = moment__createUnix, utils_hooks__hooks.months = lists__listMonths, utils_hooks__hooks.isDate = isDate, utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale, utils_hooks__hooks.invalid = valid__createInvalid, utils_hooks__hooks.duration = create__createDuration, utils_hooks__hooks.isMoment = isMoment, utils_hooks__hooks.weekdays = lists__listWeekdays, utils_hooks__hooks.parseZone = moment__createInZone, utils_hooks__hooks.localeData = locale_locales__getLocale, utils_hooks__hooks.isDuration = isDuration, utils_hooks__hooks.monthsShort = lists__listMonthsShort, utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin, utils_hooks__hooks.defineLocale = defineLocale, utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort, utils_hooks__hooks.normalizeUnits = normalizeUnits, utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold, utils_hooks__hooks
    }),
    function(t) {
        "use strict";

        function e() {}

        function i(t) {
            if (!t || "object" != typeof t) return !1;
            var e = b(t) || ue;
            return /object|function/.test(typeof e.Element) ? t instanceof e.Element : 1 === t.nodeType && "string" == typeof t.nodeName
        }

        function r(t) {
            return !(!t || !t.Window) && t instanceof t.Window
        }

        function s(t) {
            return !!t && t instanceof ve
        }

        function n(t) {
            return o(t) && void 0 !== typeof t.length && a(t.splice)
        }

        function o(t) {
            return !!t && "object" == typeof t
        }

        function a(t) {
            return "function" == typeof t
        }

        function h(t) {
            return "number" == typeof t
        }

        function p(t) {
            return "boolean" == typeof t
        }

        function l(t) {
            return "string" == typeof t
        }

        function c(t) {
            return !!l(t) && (ge.querySelector(t), !0)
        }

        function d(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function u(t, e) {
            t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp
        }

        function g(t, e, i) {
            e || (e = i.pointerIds.length > 1 ? z(i.pointers) : i.pointers[0]), f(e, be, i), t.page.x = be.x, t.page.y = be.y, y(e, be, i), t.client.x = be.x, t.client.y = be.y, t.timeStamp = (new Date).getTime()
        }

        function v(t, e, i) {
            t.page.x = i.page.x - e.page.x, t.page.y = i.page.y - e.page.y, t.client.x = i.client.x - e.client.x, t.client.y = i.client.y - e.client.y, t.timeStamp = (new Date).getTime() - e.timeStamp;
            var r = Math.max(t.timeStamp / 1e3, .001);
            t.page.speed = Se(t.page.x, t.page.y) / r, t.page.vx = t.page.x / r, t.page.vy = t.page.y / r, t.client.speed = Se(t.client.x, t.page.y) / r, t.client.vx = t.client.x / r, t.client.vy = t.client.y / r
        }

        function m(t, e, i) {
            return i = i || {}, t = t || "page", i.x = e[t + "X"], i.y = e[t + "Y"], i
        }

        function f(t, e, i) {
            return e = e || {}, t instanceof B ? /inertiastart/.test(t.type) ? (i = i || t.interaction, d(e, i.inertiaStatus.upCoords.page), e.x += i.inertiaStatus.sx, e.y += i.inertiaStatus.sy) : (e.x = t.pageX, e.y = t.pageY) : He ? (m("screen", t, e), e.x += ue.scrollX, e.y += ue.scrollY) : m("page", t, e), e
        }

        function y(t, e, i) {
            return e = e || {}, t instanceof B ? /inertiastart/.test(t.type) ? (d(e, i.inertiaStatus.upCoords.client), e.x += i.inertiaStatus.sx, e.y += i.inertiaStatus.sy) : (e.x = t.clientX, e.y = t.clientY) : m(He ? "screen" : "client", t, e), e
        }

        function x(t) {
            return t = t || ue, {
                x: t.scrollX || t.document.documentElement.scrollLeft,
                y: t.scrollY || t.document.documentElement.scrollTop
            }
        }

        function E(t) {
            return h(t.pointerId) ? t.pointerId : t.identifier
        }

        function S(t) {
            return t instanceof ye ? t.correspondingUseElement : t
        }

        function b(t) {
            if (r(t)) return t;
            var e = t.ownerDocument || t;
            return e.defaultView || e.parentWindow || ue
        }

        function w(t) {
            var e = We ? {
                    x: 0,
                    y: 0
                } : x(b(t)),
                i = t instanceof me ? t.getBoundingClientRect() : t.getClientRects()[0];
            return i && {
                left: i.left + e.x,
                right: i.right + e.x,
                top: i.top + e.y,
                bottom: i.bottom + e.y,
                width: i.width || i.right - i.left,
                height: i.heigh || i.bottom - i.top
            }
        }

        function D(t) {
            var e = [];
            return n(t) ? (e[0] = t[0], e[1] = t[1]) : "touchend" === t.type ? 1 === t.touches.length ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : 0 === t.touches.length && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e
        }

        function z(t) {
            var e = D(t);
            return {
                pageX: (e[0].pageX + e[1].pageX) / 2,
                pageY: (e[0].pageY + e[1].pageY) / 2,
                clientX: (e[0].clientX + e[1].clientX) / 2,
                clientY: (e[0].clientY + e[1].clientY) / 2
            }
        }

        function T(t) {
            if (t.length || t.touches && t.touches.length > 1) {
                var e = D(t),
                    i = Math.min(e[0].pageX, e[1].pageX),
                    r = Math.min(e[0].pageY, e[1].pageY);
                return {
                    x: i,
                    y: r,
                    left: i,
                    top: r,
                    width: Math.max(e[0].pageX, e[1].pageX) - i,
                    height: Math.max(e[0].pageY, e[1].pageY) - r
                }
            }
        }

        function C(t, e) {
            e = e || Me.deltaSource;
            var i = e + "X",
                r = e + "Y",
                s = D(t),
                n = s[0][i] - s[1][i],
                o = s[0][r] - s[1][r];
            return Se(n, o)
        }

        function M(t, e, i) {
            i = i || Me.deltaSource;
            var r = i + "X",
                s = i + "Y",
                n = D(t),
                o = n[0][r] - n[1][r],
                a = n[0][s] - n[1][s],
                p = 180 * Math.atan(a / o) / Math.PI;
            if (h(e)) {
                var l = p - e,
                    c = l % 360;
                c > 315 ? p -= 360 + p / 360 | 0 : c > 135 ? p -= 180 + p / 360 | 0 : -315 > c ? p += 360 + p / 360 | 0 : -135 > c && (p += 180 + p / 360 | 0)
            }
            return p
        }

        function P(t, e) {
            var r = t ? t.options.origin : Me.origin;
            return "parent" === r ? r = k(e) : "self" === r ? r = t.getRect(e) : c(r) && (r = Y(e, r) || {
                x: 0,
                y: 0
            }), a(r) && (r = r(t && e)), i(r) && (r = w(r)), r.x = "x" in r ? r.x : r.left, r.y = "y" in r ? r.y : r.top, r
        }

        function O(t, e, i, r) {
            var s = 1 - t;
            return s * s * e + 2 * s * t * i + t * t * r
        }

        function _(t, e, i, r, s, n, o) {
            return {
                x: O(o, t, i, s),
                y: O(o, e, r, n)
            }
        }

        function A(t, e, i, r) {
            return t /= r, -i * t * (t - 2) + e
        }

        function X(t, e) {
            for (; e;) {
                if (e === t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function Y(t, e) {
            for (var r = k(t); i(r);) {
                if (pe(r, e)) return r;
                r = k(r)
            }
            return null
        }

        function k(t) {
            var e = t.parentNode;
            if (s(e)) {
                for (;
                    (e = e.host) && s(e););
                return e
            }
            return e
        }

        function I(t, e) {
            return t._context === e.ownerDocument || X(t._context, e)
        }

        function R(t, e, r) {
            var s = t.options.ignoreFrom;
            return !(!s || !i(r)) && (l(s) ? le(r, s, e) : !!i(s) && X(s, r))
        }

        function F(t, e, r) {
            var s = t.options.allowFrom;
            return !s || !!i(r) && (l(s) ? le(r, s, e) : !!i(s) && X(s, r))
        }

        function q(t, e) {
            if (!e) return !1;
            var i = e.options.drag.axis;
            return "xy" === t || "xy" === i || i === t
        }

        function N(t, e) {
            var i = t.options;
            return /^resize/.test(e) && (e = "resize"), i[e].snap && i[e].snap.enabled
        }

        function H(t, e) {
            var i = t.options;
            return /^resize/.test(e) && (e = "resize"), i[e].restrict && i[e].restrict.enabled
        }

        function W(t, e) {
            var i = t.options;
            return /^resize/.test(e) && (e = "resize"), i[e].autoScroll && i[e].autoScroll.enabled
        }

        function U(t, e, i) {
            for (var r = t.options, s = r[i.name].max, n = r[i.name].maxPerElement, o = 0, a = 0, h = 0, p = 0, l = ze.length; l > p; p++) {
                var c = ze[p],
                    d = c.prepared.name;
                if (c.interacting()) {
                    if (++o >= ke) return !1;
                    if (c.target === t) {
                        if ((a += d === i.name | 0) >= s) return !1;
                        if (c.element === e && (h++, d !== i.name || h >= n)) return !1
                    }
                }
            }
            return ke > 0
        }

        function V(t) {
            var e, i, r, s, n, o = t[0],
                a = o ? 0 : -1,
                h = [],
                p = [];
            for (s = 1; s < t.length; s++)
                if ((e = t[s]) && e !== o)
                    if (o) {
                        if (e.parentNode !== e.ownerDocument)
                            if (o.parentNode !== e.ownerDocument) {
                                if (!h.length)
                                    for (i = o; i.parentNode && i.parentNode !== i.ownerDocument;) h.unshift(i), i = i.parentNode;
                                if (o instanceof xe && e instanceof me && !(e instanceof fe)) {
                                    if (e === o.parentNode) continue;
                                    i = e.ownerSVGElement
                                } else i = e;
                                for (p = []; i.parentNode !== i.ownerDocument;) p.unshift(i), i = i.parentNode;
                                for (n = 0; p[n] && p[n] === h[n];) n++;
                                var l = [p[n - 1], p[n], h[n]];
                                for (r = l[0].lastChild; r;) {
                                    if (r === l[1]) {
                                        o = e, a = s, h = [];
                                        break
                                    }
                                    if (r === l[2]) break;
                                    r = r.previousSibling
                                }
                            } else o = e, a = s
                    } else o = e, a = s;
            return a
        }

        function $() {
            if (this.target = null, this.element = null, this.dropTarget = null, this.dropElement = null, this.prevDropTarget = null, this.prevDropElement = null, this.prepared = {
                    name: null,
                    axis: null,
                    edges: null
                }, this.matches = [], this.matchElements = [], this.inertiaStatus = {
                    active: !1,
                    smoothEnd: !1,
                    startEvent: null,
                    upCoords: {},
                    xe: 0,
                    ye: 0,
                    sx: 0,
                    sy: 0,
                    t0: 0,
                    vx0: 0,
                    vys: 0,
                    duration: 0,
                    resumeDx: 0,
                    resumeDy: 0,
                    lambda_v0: 0,
                    one_ve_v0: 0,
                    i: null
                }, a(Function.prototype.bind)) this.boundInertiaFrame = this.inertiaFrame.bind(this), this.boundSmoothEndFrame = this.smoothEndFrame.bind(this);
            else {
                var t = this;
                this.boundInertiaFrame = function() {
                    return t.inertiaFrame()
                }, this.boundSmoothEndFrame = function() {
                    return t.smoothEndFrame()
                }
            }
            this.activeDrops = {
                dropzones: [],
                elements: [],
                rects: []
            }, this.pointers = [], this.pointerIds = [], this.downTargets = [], this.downTimes = [], this.holdTimers = [], this.prevCoords = {
                page: {
                    x: 0,
                    y: 0
                },
                client: {
                    x: 0,
                    y: 0
                },
                timeStamp: 0
            }, this.curCoords = {
                page: {
                    x: 0,
                    y: 0
                },
                client: {
                    x: 0,
                    y: 0
                },
                timeStamp: 0
            }, this.startCoords = {
                page: {
                    x: 0,
                    y: 0
                },
                client: {
                    x: 0,
                    y: 0
                },
                timeStamp: 0
            }, this.pointerDelta = {
                page: {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    speed: 0
                },
                client: {
                    x: 0,
                    y: 0,
                    vx: 0,
                    vy: 0,
                    speed: 0
                },
                timeStamp: 0
            }, this.downEvent = null, this.downPointer = {}, this._eventTarget = null, this._curEventTarget = null, this.prevEvent = null, this.tapTime = 0, this.prevTap = null, this.startOffset = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.restrictOffset = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, this.snapOffsets = [], this.gesture = {
                start: {
                    x: 0,
                    y: 0
                },
                startDistance: 0,
                prevDistance: 0,
                distance: 0,
                scale: 1,
                startAngle: 0,
                prevAngle: 0
            }, this.snapStatus = {
                x: 0,
                y: 0,
                dx: 0,
                dy: 0,
                realX: 0,
                realY: 0,
                snappedX: 0,
                snappedY: 0,
                targets: [],
                locked: !1,
                changed: !1
            }, this.restrictStatus = {
                dx: 0,
                dy: 0,
                restrictedX: 0,
                restrictedY: 0,
                snap: null,
                restricted: !1,
                changed: !1
            }, this.restrictStatus.snap = this.snapStatus, this.pointerIsDown = !1, this.pointerWasMoved = !1, this.gesturing = !1, this.dragging = !1, this.resizing = !1, this.resizeAxes = "xy", this.mouse = !1, ze.push(this)
        }

        function G(t, e, i) {
            var r, s = 0,
                n = ze.length,
                o = /mouse/i.test(t.pointerType || e) || 4 === t.pointerType,
                a = E(t);
            if (/down|start/i.test(e))
                for (s = 0; n > s; s++) {
                    r = ze[s];
                    var h = i;
                    if (r.inertiaStatus.active && r.target.options[r.prepared.name].inertia.allowResume && r.mouse === o)
                        for (; h;) {
                            if (h === r.element) return r.pointers[0] && r.removePointer(r.pointers[0]), r.addPointer(t), r;
                            h = k(h)
                        }
                }
            if (o || !Oe && !_e) {
                for (s = 0; n > s; s++)
                    if (ze[s].mouse && !ze[s].inertiaStatus.active) return ze[s];
                for (s = 0; n > s; s++)
                    if (ze[s].mouse && (!/down/.test(e) || !ze[s].inertiaStatus.active)) return r;
                return r = new $, r.mouse = !0, r
            }
            for (s = 0; n > s; s++)
                if (he(ze[s].pointerIds, a)) return ze[s];
            if (/up|end|out/i.test(e)) return null;
            for (s = 0; n > s; s++)
                if (r = ze[s], !(r.prepared.name && !r.target.options.gesture.enabled || r.interacting() || !o && r.mouse)) return r.addPointer(t), r;
            return new $
        }

        function L(t) {
            return function(e) {
                var i, r, s = S(e.path ? e.path[0] : e.target),
                    n = S(e.currentTarget);
                if (Oe && /touch/.test(e.type))
                    for (Ye = (new Date).getTime(), r = 0; r < e.changedTouches.length; r++) {
                        var o = e.changedTouches[r];
                        (i = G(o, e.type, s)) && (i._updateEventTargets(s, n), i[t](o, e, s, n))
                    } else {
                        if (!_e && /mouse/.test(e.type)) {
                            for (r = 0; r < ze.length; r++)
                                if (!ze[r].mouse && ze[r].pointerIsDown) return;
                            if ((new Date).getTime() - Ye < 500) return
                        }
                        if (!(i = G(e, e.type, s))) return;
                        i._updateEventTargets(s, n), i[t](e, e, s, n)
                    }
            }
        }

        function B(t, e, i, r, s, n) {
            var o, a, h = t.target,
                p = t.snapStatus,
                l = t.restrictStatus,
                c = t.pointers,
                u = (h && h.options || Me).deltaSource,
                g = u + "X",
                v = u + "Y",
                m = h ? h.options : Me,
                f = P(h, s),
                y = "start" === r,
                x = "end" === r,
                E = y ? t.startCoords : t.curCoords;
            s = s || t.element, a = d({}, E.page), o = d({}, E.client), a.x -= f.x, a.y -= f.y, o.x -= f.x, o.y -= f.y;
            var S = m[i].snap && m[i].snap.relativePoints;
            !N(h, i) || y && S && S.length || (this.snap = {
                range: p.range,
                locked: p.locked,
                x: p.snappedX,
                y: p.snappedY,
                realX: p.realX,
                realY: p.realY,
                dx: p.dx,
                dy: p.dy
            }, p.locked && (a.x += p.dx, a.y += p.dy, o.x += p.dx, o.y += p.dy)), !H(h, i) || y && m[i].restrict.elementRect || !l.restricted || (a.x += l.dx, a.y += l.dy, o.x += l.dx, o.y += l.dy, this.restrict = {
                dx: l.dx,
                dy: l.dy
            }), this.pageX = a.x, this.pageY = a.y, this.clientX = o.x, this.clientY = o.y, this.x0 = t.startCoords.page.x, this.y0 = t.startCoords.page.y, this.clientX0 = t.startCoords.client.x, this.clientY0 = t.startCoords.client.y, this.ctrlKey = e.ctrlKey, this.altKey = e.altKey, this.shiftKey = e.shiftKey, this.metaKey = e.metaKey, this.button = e.button, this.target = s, this.t0 = t.downTimes[0], this.type = i + (r || ""), this.interaction = t, this.interactable = h;
            var b = t.inertiaStatus;
            if (b.active && (this.detail = "inertia"), n && (this.relatedTarget = n), x ? "client" === u ? (this.dx = o.x - t.startCoords.client.x,
                    this.dy = o.y - t.startCoords.client.y) : (this.dx = a.x - t.startCoords.page.x, this.dy = a.y - t.startCoords.page.y) : y ? (this.dx = 0, this.dy = 0) : "inertiastart" === r ? (this.dx = t.prevEvent.dx, this.dy = t.prevEvent.dy) : "client" === u ? (this.dx = o.x - t.prevEvent.clientX, this.dy = o.y - t.prevEvent.clientY) : (this.dx = a.x - t.prevEvent.pageX, this.dy = a.y - t.prevEvent.pageY), t.prevEvent && "inertia" === t.prevEvent.detail && !b.active && m[i].inertia && m[i].inertia.zeroResumeDelta && (b.resumeDx += this.dx, b.resumeDy += this.dy, this.dx = this.dy = 0), "resize" === i && t.resizeAxes ? m.resize.square ? ("y" === t.resizeAxes ? this.dx = this.dy : this.dy = this.dx, this.axes = "xy") : (this.axes = t.resizeAxes, "x" === t.resizeAxes ? this.dy = 0 : "y" === t.resizeAxes && (this.dx = 0)) : "gesture" === i && (this.touches = [c[0], c[1]], y ? (this.distance = C(c, u), this.box = T(c), this.scale = 1, this.ds = 0, this.angle = M(c, void 0, u), this.da = 0) : x || e instanceof B ? (this.distance = t.prevEvent.distance, this.box = t.prevEvent.box, this.scale = t.prevEvent.scale, this.ds = this.scale - 1, this.angle = t.prevEvent.angle, this.da = this.angle - t.gesture.startAngle) : (this.distance = C(c, u), this.box = T(c), this.scale = this.distance / t.gesture.startDistance, this.angle = M(c, t.gesture.prevAngle, u), this.ds = this.scale - t.gesture.prevScale, this.da = this.angle - t.gesture.prevAngle)), y) this.timeStamp = t.downTimes[0], this.dt = 0, this.duration = 0, this.speed = 0, this.velocityX = 0, this.velocityY = 0;
            else if ("inertiastart" === r) this.timeStamp = t.prevEvent.timeStamp, this.dt = t.prevEvent.dt, this.duration = t.prevEvent.duration, this.speed = t.prevEvent.speed, this.velocityX = t.prevEvent.velocityX, this.velocityY = t.prevEvent.velocityY;
            else if (this.timeStamp = (new Date).getTime(), this.dt = this.timeStamp - t.prevEvent.timeStamp, this.duration = this.timeStamp - t.downTimes[0], e instanceof B) {
                var w = this[g] - t.prevEvent[g],
                    D = this[v] - t.prevEvent[v],
                    z = this.dt / 1e3;
                this.speed = Se(w, D) / z, this.velocityX = w / z, this.velocityY = D / z
            } else this.speed = t.pointerDelta[u].speed, this.velocityX = t.pointerDelta[u].vx, this.velocityY = t.pointerDelta[u].vy;
            if ((x || "inertiastart" === r) && t.prevEvent.speed > 600 && this.timeStamp - t.prevEvent.timeStamp < 150) {
                var O = 180 * Math.atan2(t.prevEvent.velocityY, t.prevEvent.velocityX) / Math.PI;
                0 > O && (O += 360);
                var A = O >= 112.5 && 247.5 > O,
                    X = O >= 202.5 && 337.5 > O,
                    Y = !A && (O >= 292.5 || 67.5 > O),
                    k = !X && O >= 22.5 && 157.5 > O;
                this.swipe = {
                    up: X,
                    down: k,
                    left: A,
                    right: Y,
                    angle: O,
                    speed: t.prevEvent.speed,
                    velocity: {
                        x: t.prevEvent.velocityX,
                        y: t.prevEvent.velocityY
                    }
                }
            }
        }

        function K() {
            this.originalEvent.preventDefault()
        }

        function j(t) {
            var e = "";
            if ("drag" === t.name && (e = Ie.drag), "resize" === t.name)
                if (t.axis) e = Ie[t.name + t.axis];
                else if (t.edges) {
                for (var i = "resize", r = ["top", "bottom", "left", "right"], s = 0; 4 > s; s++) t.edges[r[s]] && (i += r[s]);
                e = Ie[i]
            }
            return e
        }

        function J(t, e, r, s, n, o) {
            if (!e) return !1;
            if (!0 === e) {
                var a = h(o.width) ? o.width : o.right - o.left,
                    p = h(o.height) ? o.height : o.bottom - o.top;
                if (0 > a && ("left" === t ? t = "right" : "right" === t && (t = "left")), 0 > p && ("top" === t ? t = "bottom" : "bottom" === t && (t = "top")), "left" === t) return r.x < (a >= 0 ? o.left : o.right) + Ae;
                if ("top" === t) return r.y < (p >= 0 ? o.top : o.bottom) + Ae;
                if ("right" === t) return r.x > (a >= 0 ? o.right : o.left) - Ae;
                if ("bottom" === t) return r.y > (p >= 0 ? o.bottom : o.top) - Ae
            }
            return !!i(s) && (i(e) ? e === s : le(s, e, n))
        }

        function Q(t, e, i) {
            var r, s = this.getRect(i),
                n = !1,
                a = null,
                h = null,
                p = d({}, e.curCoords.page),
                l = this.options;
            if (!s) return null;
            if (Re.resize && l.resize.enabled) {
                var c = l.resize;
                if (r = {
                        left: !1,
                        right: !1,
                        top: !1,
                        bottom: !1
                    }, o(c.edges)) {
                    for (var u in r) r[u] = J(u, c.edges[u], p, e._eventTarget, i, s);
                    r.left = r.left && !r.right, r.top = r.top && !r.bottom, n = r.left || r.right || r.top || r.bottom
                } else {
                    var g = "y" !== l.resize.axis && p.x > s.right - Ae,
                        v = "x" !== l.resize.axis && p.y > s.bottom - Ae;
                    n = g || v, h = (g ? "x" : "") + (v ? "y" : "")
                }
            }
            return a = n ? "resize" : Re.drag && l.drag.enabled ? "drag" : null, Re.gesture && e.pointerIds.length >= 2 && !e.dragging && !e.resizing && (a = "gesture"), a ? {
                name: a,
                axis: h,
                edges: r
            } : null
        }

        function Z(t, e) {
            if (!o(t)) return null;
            var i = t.name,
                r = e.options;
            return ("resize" === i && r.resize.enabled || "drag" === i && r.drag.enabled || "gesture" === i && r.gesture.enabled) && Re[i] ? (("resize" === i || "resizeyx" === i) && (i = "resizexy"), t) : null
        }

        function te(t, e) {
            var r = {},
                s = Ce[t.type],
                n = S(t.path ? t.path[0] : t.target),
                o = n;
            e = !!e;
            for (var a in t) r[a] = t[a];
            for (r.originalEvent = t, r.preventDefault = K; i(o);) {
                for (var h = 0; h < s.selectors.length; h++) {
                    var p = s.selectors[h],
                        l = s.contexts[h];
                    if (pe(o, p) && X(l, n) && X(l, o)) {
                        var c = s.listeners[h];
                        r.currentTarget = o;
                        for (var d = 0; d < c.length; d++) c[d][1] === e && c[d][0](r)
                    }
                }
                o = k(o)
            }
        }

        function ee(t) {
            return te.call(this, t, !0)
        }

        function ie(t, e) {
            return De.get(t, e) || new re(t, e)
        }

        function re(t, e) {
            this._element = t, this._iEvents = this._iEvents || {};
            var r;
            if (c(t)) {
                this.selector = t;
                var s = e && e.context;
                r = s ? b(s) : ue, s && (r.Node ? s instanceof r.Node : i(s) || s === r.document) && (this._context = s)
            } else r = b(t), i(t, r) && (Ee ? (Ge.add(this._element, ce.down, Le.pointerDown), Ge.add(this._element, ce.move, Le.pointerHover)) : (Ge.add(this._element, "mousedown", Le.pointerDown), Ge.add(this._element, "mousemove", Le.pointerHover), Ge.add(this._element, "touchstart", Le.pointerDown), Ge.add(this._element, "touchmove", Le.pointerHover)));
            this._doc = r.document, he(we, this._doc) || oe(this._doc), De.push(this), this.set(e)
        }

        function se(t, e) {
            var i = !1;
            return function() {
                return i || (ue.console.warn(e), i = !0), t.apply(this, arguments)
            }
        }

        function ne(t) {
            for (var e = 0; e < ze.length; e++) ze[e].pointerEnd(t, t)
        }

        function oe(t) {
            if (!he(we, t)) {
                var e = t.defaultView || t.parentWindow;
                for (var i in Ce) Ge.add(t, i, te), Ge.add(t, i, ee, !0);
                Ee ? (ce = Ee === e.MSPointerEvent ? {
                    up: "MSPointerUp",
                    down: "MSPointerDown",
                    over: "mouseover",
                    out: "mouseout",
                    move: "MSPointerMove",
                    cancel: "MSPointerCancel"
                } : {
                    up: "pointerup",
                    down: "pointerdown",
                    over: "pointerover",
                    out: "pointerout",
                    move: "pointermove",
                    cancel: "pointercancel"
                }, Ge.add(t, ce.down, Le.selectorDown), Ge.add(t, ce.move, Le.pointerMove), Ge.add(t, ce.over, Le.pointerOver), Ge.add(t, ce.out, Le.pointerOut), Ge.add(t, ce.up, Le.pointerUp), Ge.add(t, ce.cancel, Le.pointerCancel), Ge.add(t, ce.move, Pe.edgeMove)) : (Ge.add(t, "mousedown", Le.selectorDown), Ge.add(t, "mousemove", Le.pointerMove), Ge.add(t, "mouseup", Le.pointerUp), Ge.add(t, "mouseover", Le.pointerOver), Ge.add(t, "mouseout", Le.pointerOut), Ge.add(t, "touchstart", Le.selectorDown), Ge.add(t, "touchmove", Le.pointerMove), Ge.add(t, "touchend", Le.pointerUp), Ge.add(t, "touchcancel", Le.pointerCancel), Ge.add(t, "mousemove", Pe.edgeMove), Ge.add(t, "touchmove", Pe.edgeMove)), Ge.add(e, "blur", ne);
                try {
                    if (e.frameElement) {
                        var r = e.frameElement.ownerDocument,
                            s = r.defaultView;
                        Ge.add(r, "mouseup", Le.pointerEnd), Ge.add(r, "touchend", Le.pointerEnd), Ge.add(r, "touchcancel", Le.pointerEnd), Ge.add(r, "pointerup", Le.pointerEnd), Ge.add(r, "MSPointerUp", Le.pointerEnd), Ge.add(s, "blur", ne)
                    }
                } catch (n) {
                    ie.windowParentError = n
                }
                Ge.useAttachEvent && (Ge.add(t, "selectstart", function(t) {
                    var e = ze[0];
                    e.currentAction() && e.checkAndPreventDefault(t)
                }), Ge.add(t, "dblclick", L("ie8Dblclick"))), we.push(t)
            }
        }

        function ae(t, e) {
            for (var i = 0, r = t.length; r > i; i++)
                if (t[i] === e) return i;
            return -1
        }

        function he(t, e) {
            return -1 !== ae(t, e)
        }

        function pe(e, i, r) {
            return de ? de(e, i, r) : (ue !== t && (i = i.replace(/\/deep\//g, " ")), e[Ue](i))
        }

        function le(t, e, r) {
            for (; i(t);) {
                if (pe(t, e)) return !0;
                if ((t = k(t)) === r) return pe(t, e)
            }
            return !1
        }
        var ce, de, ue = function() {
                var e = t.document.createTextNode("");
                return e.ownerDocument !== t.document && "function" == typeof t.wrap && t.wrap(e) === e ? t.wrap(t) : t
            }(),
            ge = ue.document,
            ve = ue.DocumentFragment || e,
            me = ue.SVGElement || e,
            fe = ue.SVGSVGElement || e,
            ye = ue.SVGElementInstance || e,
            xe = ue.HTMLElement || ue.Element,
            Ee = ue.PointerEvent || ue.MSPointerEvent,
            Se = Math.hypot || function(t, e) {
                return Math.sqrt(t * t + e * e)
            },
            be = {},
            we = [],
            De = [],
            ze = [],
            Te = !1,
            Ce = {},
            Me = {
                base: {
                    accept: null,
                    actionChecker: null,
                    styleCursor: !0,
                    preventDefault: "auto",
                    origin: {
                        x: 0,
                        y: 0
                    },
                    deltaSource: "page",
                    allowFrom: null,
                    ignoreFrom: null,
                    _context: ge,
                    dropChecker: null
                },
                drag: {
                    enabled: !1,
                    manualStart: !0,
                    max: 1 / 0,
                    maxPerElement: 1,
                    snap: null,
                    restrict: null,
                    inertia: null,
                    autoScroll: null,
                    axis: "xy"
                },
                drop: {
                    enabled: !1,
                    accept: null,
                    overlap: "pointer"
                },
                resize: {
                    enabled: !1,
                    manualStart: !1,
                    max: 1 / 0,
                    maxPerElement: 1,
                    snap: null,
                    restrict: null,
                    inertia: null,
                    autoScroll: null,
                    square: !1,
                    axis: "xy",
                    edges: null,
                    invert: "none"
                },
                gesture: {
                    manualStart: !1,
                    enabled: !1,
                    max: 1 / 0,
                    maxPerElement: 1,
                    restrict: null
                },
                perAction: {
                    manualStart: !1,
                    max: 1 / 0,
                    maxPerElement: 1,
                    snap: {
                        enabled: !1,
                        endOnly: !1,
                        range: 1 / 0,
                        targets: null,
                        offsets: null,
                        relativePoints: null
                    },
                    restrict: {
                        enabled: !1,
                        endOnly: !1
                    },
                    autoScroll: {
                        enabled: !1,
                        container: null,
                        margin: 60,
                        speed: 300
                    },
                    inertia: {
                        enabled: !1,
                        resistance: 10,
                        minSpeed: 100,
                        endSpeed: 10,
                        allowResume: !0,
                        zeroResumeDelta: !0,
                        smoothEndDuration: 300
                    }
                },
                _holdDuration: 600
            },
            Pe = {
                interaction: null,
                i: null,
                x: 0,
                y: 0,
                scroll: function() {
                    var t = Pe.interaction.target.options[Pe.interaction.prepared.name].autoScroll,
                        e = t.container || b(Pe.interaction.element),
                        i = (new Date).getTime(),
                        s = (i - Pe.prevTime) / 1e3,
                        n = t.speed * s;
                    n >= 1 && (r(e) ? e.scrollBy(Pe.x * n, Pe.y * n) : e && (e.scrollLeft += Pe.x * n, e.scrollTop += Pe.y * n), Pe.prevTime = i), Pe.isScrolling && ($e(Pe.i), Pe.i = Ve(Pe.scroll))
                },
                edgeMove: function(t) {
                    for (var e, i, s = !1, n = 0; n < ze.length; n++)
                        if (e = ze[n], e.interacting() && W(e.target, e.prepared.name)) {
                            i = e.target, s = !0;
                            break
                        }
                    if (s) {
                        var o, a, h, p, l = i.options[e.prepared.name].autoScroll,
                            c = l.container || b(e.element);
                        if (r(c)) p = t.clientX < Pe.margin, o = t.clientY < Pe.margin, a = t.clientX > c.innerWidth - Pe.margin, h = t.clientY > c.innerHeight - Pe.margin;
                        else {
                            var d = w(c);
                            p = t.clientX < d.left + Pe.margin, o = t.clientY < d.top + Pe.margin, a = t.clientX > d.right - Pe.margin, h = t.clientY > d.bottom - Pe.margin
                        }
                        Pe.x = a ? 1 : p ? -1 : 0, Pe.y = h ? 1 : o ? -1 : 0, Pe.isScrolling || (Pe.margin = l.margin, Pe.speed = l.speed, Pe.start(e))
                    }
                },
                isScrolling: !1,
                prevTime: 0,
                start: function(t) {
                    Pe.isScrolling = !0, $e(Pe.i), Pe.interaction = t, Pe.prevTime = (new Date).getTime(), Pe.i = Ve(Pe.scroll)
                },
                stop: function() {
                    Pe.isScrolling = !1, $e(Pe.i)
                }
            },
            Oe = "ontouchstart" in ue || ue.DocumentTouch && ge instanceof ue.DocumentTouch,
            _e = !!Ee,
            Ae = Oe || _e ? 20 : 10,
            Xe = 1,
            Ye = 0,
            ke = 1 / 0,
            Ie = ge.all && !ue.atob ? {
                drag: "move",
                resizex: "e-resize",
                resizey: "s-resize",
                resizexy: "se-resize",
                resizetop: "n-resize",
                resizeleft: "w-resize",
                resizebottom: "s-resize",
                resizeright: "e-resize",
                resizetopleft: "se-resize",
                resizebottomright: "se-resize",
                resizetopright: "ne-resize",
                resizebottomleft: "ne-resize",
                gesture: ""
            } : {
                drag: "move",
                resizex: "ew-resize",
                resizey: "ns-resize",
                resizexy: "nwse-resize",
                resizetop: "ns-resize",
                resizeleft: "ew-resize",
                resizebottom: "ns-resize",
                resizeright: "ew-resize",
                resizetopleft: "nwse-resize",
                resizebottomright: "nwse-resize",
                resizetopright: "nesw-resize",
                resizebottomleft: "nesw-resize",
                gesture: ""
            },
            Re = {
                drag: !0,
                resize: !0,
                gesture: !0
            },
            Fe = "onmousewheel" in ge ? "mousewheel" : "wheel",
            qe = ["dragstart", "dragmove", "draginertiastart", "dragend", "dragenter", "dragleave", "dropactivate", "dropdeactivate", "dropmove", "drop", "resizestart", "resizemove", "resizeinertiastart", "resizeend", "gesturestart", "gesturemove", "gestureinertiastart", "gestureend", "down", "move", "up", "cancel", "tap", "doubletap", "hold"],
            Ne = {},
            He = "Opera" == navigator.appName && Oe && navigator.userAgent.match("Presto"),
            We = /iP(hone|od|ad)/.test(navigator.platform) && /OS [1-7][^\d]/.test(navigator.appVersion),
            Ue = "matches" in Element.prototype ? "matches" : "webkitMatchesSelector" in Element.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in Element.prototype ? "mozMatchesSelector" : "oMatchesSelector" in Element.prototype ? "oMatchesSelector" : "msMatchesSelector",
            Ve = t.requestAnimationFrame,
            $e = t.cancelAnimationFrame,
            Ge = function() {
                function t(t, e, a, d) {
                    var u = ae(p, t),
                        g = l[u];
                    if (g || (g = {
                            events: {},
                            typeCount: 0
                        }, u = p.push(t) - 1, l.push(g), c.push(n ? {
                            supplied: [],
                            wrapped: [],
                            useCount: []
                        } : null)), g.events[e] || (g.events[e] = [], g.typeCount++), !he(g.events[e], a)) {
                        var v;
                        if (n) {
                            var m = c[u],
                                f = ae(m.supplied, a),
                                y = m.wrapped[f] || function(e) {
                                    e.immediatePropagationStopped || (e.target = e.srcElement, e.currentTarget = t, e.preventDefault = e.preventDefault || i, e.stopPropagation = e.stopPropagation || r, e.stopImmediatePropagation = e.stopImmediatePropagation || s, /mouse|click/.test(e.type) && (e.pageX = e.clientX + b(t).document.documentElement.scrollLeft, e.pageY = e.clientY + b(t).document.documentElement.scrollTop), a(e))
                                };
                            v = t[o](h + e, y, Boolean(d)), -1 === f ? (m.supplied.push(a), m.wrapped.push(y), m.useCount.push(1)) : m.useCount[f]++
                        } else v = t[o](e, a, d || !1);
                        return g.events[e].push(a), v
                    }
                }

                function e(t, i, r, s) {
                    var o, d, u, g = ae(p, t),
                        v = l[g],
                        m = r;
                    if (v && v.events)
                        if (n && (d = c[g], u = ae(d.supplied, r), m = d.wrapped[u]), "all" !== i) {
                            if (v.events[i]) {
                                var f = v.events[i].length;
                                if ("all" === r)
                                    for (o = 0; f > o; o++) e(t, i, v.events[i][o], Boolean(s));
                                else
                                    for (o = 0; f > o; o++)
                                        if (v.events[i][o] === r) {
                                            t[a](h + i, m, s || !1), v.events[i].splice(o, 1), n && d && 0 === --d.useCount[u] && (d.supplied.splice(u, 1), d.wrapped.splice(u, 1), d.useCount.splice(u, 1));
                                            break
                                        }
                                v.events[i] && 0 === v.events[i].length && (v.events[i] = null, v.typeCount--)
                            }
                            v.typeCount || (l.splice(g), p.splice(g), c.splice(g))
                        } else
                            for (i in v.events) v.events.hasOwnProperty(i) && e(t, i, "all")
                }

                function i() {
                    this.returnValue = !1
                }

                function r() {
                    this.cancelBubble = !0
                }

                function s() {
                    this.cancelBubble = !0, this.immediatePropagationStopped = !0
                }
                var n = "attachEvent" in ue && !("addEventListener" in ue),
                    o = n ? "attachEvent" : "addEventListener",
                    a = n ? "detachEvent" : "removeEventListener",
                    h = n ? "on" : "",
                    p = [],
                    l = [],
                    c = [];
                return {
                    add: t,
                    remove: e,
                    useAttachEvent: n,
                    _elements: p,
                    _targets: l,
                    _attachedListeners: c
                }
            }();
        $.prototype = {
            getPageXY: function(t, e) {
                return f(t, e, this)
            },
            getClientXY: function(t, e) {
                return y(t, e, this)
            },
            setEventXY: function(t, e) {
                return g(t, e, this)
            },
            pointerOver: function(t, e, i) {
                function r(t, e) {
                    t && I(t, i) && !R(t, i, i) && F(t, i, i) && pe(i, e) && (s.push(t), n.push(i))
                }
                if (!this.prepared.name && this.mouse) {
                    var s = [],
                        n = [],
                        o = this.element;
                    this.addPointer(t), !this.target || !R(this.target, this.element, i) && F(this.target, this.element, i) || (this.target = null, this.element = null, this.matches = [], this.matchElements = []);
                    var a = De.get(i),
                        h = a && !R(a, i, i) && F(a, i, i) && Z(a.getAction(t, this, i), a);
                    h && !U(a, i, h) && (h = null), h ? (this.target = a, this.element = i, this.matches = [], this.matchElements = []) : (De.forEachSelector(r), this.validateSelector(t, s, n) ? (this.matches = s, this.matchElements = n, this.pointerHover(t, e, this.matches, this.matchElements), Ge.add(i, Ee ? ce.move : "mousemove", Le.pointerHover)) : this.target && (X(o, i) ? (this.pointerHover(t, e, this.matches, this.matchElements), Ge.add(this.element, Ee ? ce.move : "mousemove", Le.pointerHover)) : (this.target = null, this.element = null, this.matches = [], this.matchElements = [])))
                }
            },
            pointerHover: function(t, e, i, r, s, n) {
                var o = this.target;
                if (!this.prepared.name && this.mouse) {
                    var a;
                    this.setEventXY(this.curCoords, t), s ? a = this.validateSelector(t, s, n) : o && (a = Z(o.getAction(this.pointers[0], this, this.element), this.target)), o && o.options.styleCursor && (o._doc.documentElement.style.cursor = a ? j(a) : "")
                } else this.prepared.name && this.checkAndPreventDefault(e, o, this.element)
            },
            pointerOut: function(t, e, i) {
                this.prepared.name || (De.get(i) || Ge.remove(i, Ee ? ce.move : "mousemove", Le.pointerHover), this.target && this.target.options.styleCursor && !this.interacting() && (this.target._doc.documentElement.style.cursor = ""))
            },
            selectorDown: function(t, e, r, s) {
                function n(t, e, i) {
                    var s = de ? i.querySelectorAll(e) : void 0;
                    I(t, p) && !R(t, p, r) && F(t, p, r) && pe(p, e, s) && (a.matches.push(t), a.matchElements.push(p))
                }
                var o, a = this,
                    h = Ge.useAttachEvent ? d({}, e) : e,
                    p = r,
                    l = this.addPointer(t);
                if (this.holdTimers[l] = setTimeout(function() {
                        a.pointerHold(Ge.useAttachEvent ? h : t, h, r, s)
                    }, Me._holdDuration), this.pointerIsDown = !0, this.inertiaStatus.active && this.target.selector)
                    for (; i(p);) {
                        if (p === this.element && Z(this.target.getAction(t, this, this.element), this.target).name === this.prepared.name) return $e(this.inertiaStatus.i), this.inertiaStatus.active = !1, void this.collectEventTargets(t, e, r, "down");
                        p = k(p)
                    }
                if (this.interacting()) return void this.collectEventTargets(t, e, r, "down");
                for (this.setEventXY(this.curCoords, t); i(p) && !o;) this.matches = [], this.matchElements = [], De.forEachSelector(n), o = this.validateSelector(t, this.matches, this.matchElements), p = k(p);
                return o ? (this.prepared.name = o.name, this.prepared.axis = o.axis, this.prepared.edges = o.edges, this.collectEventTargets(t, e, r, "down"), this.pointerDown(t, e, r, s, o)) : (this.downTimes[l] = (new Date).getTime(), this.downTargets[l] = r, this.downEvent = e, d(this.downPointer, t), u(this.prevCoords, this.curCoords), this.pointerWasMoved = !1, void this.collectEventTargets(t, e, r, "down"))
            },
            pointerDown: function(t, e, i, r, s) {
                if (!s && !this.inertiaStatus.active && this.pointerWasMoved && this.prepared.name) return void this.checkAndPreventDefault(e, this.target, this.element);
                this.pointerIsDown = !0;
                var n, o = this.addPointer(t);
                if (this.pointerIds.length < 2 && !this.target || !this.prepared.name) {
                    var a = De.get(r);
                    a && !R(a, r, i) && F(a, r, i) && (n = Z(s || a.getAction(t, this, r), a)) && U(a, r, n) && (this.target = a, this.element = r)
                }
                var h = this.target,
                    p = h && h.options;
                if (h && !this.interacting()) {
                    if (n = n || Z(s || h.getAction(t, this, r), h, this.element), this.setEventXY(this.startCoords), !n) return;
                    p.styleCursor && (h._doc.documentElement.style.cursor = j(n)), this.resizeAxes = "resize" === n.name ? n.axis : null, "gesture" === n && this.pointerIds.length < 2 && (n = null), this.prepared.name = n.name, this.prepared.axis = n.axis, this.prepared.edges = n.edges, this.snapStatus.snappedX = this.snapStatus.snappedY = this.restrictStatus.restrictedX = this.restrictStatus.restrictedY = NaN, this.downTimes[o] = (new Date).getTime(), this.downTargets[o] = i, this.downEvent = e, d(this.downPointer, t), this.setEventXY(this.prevCoords), this.pointerWasMoved = !1, this.checkAndPreventDefault(e, h, this.element)
                } else this.inertiaStatus.active && r === this.element && Z(h.getAction(t, this, this.element), h).name === this.prepared.name && ($e(this.inertiaStatus.i), this.inertiaStatus.active = !1, this.checkAndPreventDefault(e, h, this.element))
            },
            setModifications: function(t, e) {
                var i = this.target,
                    r = !0,
                    s = N(i, this.prepared.name) && (!i.options[this.prepared.name].snap.endOnly || e),
                    n = H(i, this.prepared.name) && (!i.options[this.prepared.name].restrict.endOnly || e);
                return s ? this.setSnapping(t) : this.snapStatus.locked = !1, n ? this.setRestriction(t) : this.restrictStatus.restricted = !1, s && this.snapStatus.locked && !this.snapStatus.changed ? r = n && this.restrictStatus.restricted && this.restrictStatus.changed : n && this.restrictStatus.restricted && !this.restrictStatus.changed && (r = !1), r
            },
            setStartOffsets: function(t, e, i) {
                var r, s, n = e.getRect(i),
                    o = P(e, i),
                    a = e.options[this.prepared.name].snap,
                    h = e.options[this.prepared.name].restrict;
                n ? (this.startOffset.left = this.startCoords.page.x - n.left, this.startOffset.top = this.startCoords.page.y - n.top, this.startOffset.right = n.right - this.startCoords.page.x, this.startOffset.bottom = n.bottom - this.startCoords.page.y, r = "width" in n ? n.width : n.right - n.left, s = "height" in n ? n.height : n.bottom - n.top) : this.startOffset.left = this.startOffset.top = this.startOffset.right = this.startOffset.bottom = 0, this.snapOffsets.splice(0);
                var p = a && "startCoords" === a.offset ? {
                    x: this.startCoords.page.x - o.x,
                    y: this.startCoords.page.y - o.y
                } : a && a.offset || {
                    x: 0,
                    y: 0
                };
                if (n && a && a.relativePoints && a.relativePoints.length)
                    for (var l = 0; l < a.relativePoints.length; l++) this.snapOffsets.push({
                        x: this.startOffset.left - r * a.relativePoints[l].x + p.x,
                        y: this.startOffset.top - s * a.relativePoints[l].y + p.y
                    });
                else this.snapOffsets.push(p);
                n && h.elementRect ? (this.restrictOffset.left = this.startOffset.left - r * h.elementRect.left, this.restrictOffset.top = this.startOffset.top - s * h.elementRect.top, this.restrictOffset.right = this.startOffset.right - r * (1 - h.elementRect.right), this.restrictOffset.bottom = this.startOffset.bottom - s * (1 - h.elementRect.bottom)) : this.restrictOffset.left = this.restrictOffset.top = this.restrictOffset.right = this.restrictOffset.bottom = 0
            },
            start: function(t, e, i) {
                this.interacting() || !this.pointerIsDown || this.pointerIds.length < ("gesture" === t.name ? 2 : 1) || (-1 === ae(ze, this) && ze.push(this), this.prepared.name = t.name, this.prepared.axis = t.axis, this.prepared.edges = t.edges, this.target = e, this.element = i, this.setStartOffsets(t.name, e, i), this.setModifications(this.startCoords.page), this.prevEvent = this[this.prepared.name + "Start"](this.downEvent))
            },
            pointerMove: function(t, e, r, s, n) {
                this.recordPointer(t), this.setEventXY(this.curCoords, t instanceof B ? this.inertiaStatus.startEvent : void 0);
                var o, a, h = this.curCoords.page.x === this.prevCoords.page.x && this.curCoords.page.y === this.prevCoords.page.y && this.curCoords.client.x === this.prevCoords.client.x && this.curCoords.client.y === this.prevCoords.client.y,
                    p = this.mouse ? 0 : ae(this.pointerIds, E(t));
                if (this.pointerIsDown && !this.pointerWasMoved && (o = this.curCoords.client.x - this.startCoords.client.x, a = this.curCoords.client.y - this.startCoords.client.y, this.pointerWasMoved = Se(o, a) > Xe), h || this.pointerIsDown && !this.pointerWasMoved || (this.pointerIsDown && clearTimeout(this.holdTimers[p]), this.collectEventTargets(t, e, r, "move")), this.pointerIsDown) {
                    if (h && this.pointerWasMoved && !n) return void this.checkAndPreventDefault(e, this.target, this.element);
                    if (v(this.pointerDelta, this.prevCoords, this.curCoords), this.prepared.name) {
                        if (this.pointerWasMoved && (!this.inertiaStatus.active || t instanceof B && /inertiastart/.test(t.type))) {
                            if (!this.interacting() && (v(this.pointerDelta, this.prevCoords, this.curCoords), "drag" === this.prepared.name)) {
                                var l = Math.abs(o),
                                    c = Math.abs(a),
                                    d = this.target.options.drag.axis,
                                    g = l > c ? "x" : c > l ? "y" : "xy";
                                if ("xy" !== g && "xy" !== d && d !== g) {
                                    this.prepared.name = null;
                                    for (var m = r; i(m);) {
                                        var f = De.get(m);
                                        if (f && f !== this.target && !f.options.drag.manualStart && "drag" === f.getAction(this.downPointer, this, m).name && q(g, f)) {
                                            this.prepared.name = "drag", this.target = f, this.element = m;
                                            break
                                        }
                                        m = k(m)
                                    }
                                    if (!this.prepared.name) {
                                        var y = function(t, e, i) {
                                            var s = de ? i.querySelectorAll(e) : void 0;
                                            if (t !== this.target) return I(t, r) && !t.options.drag.manualStart && !R(t, m, r) && F(t, m, r) && pe(m, e, s) && "drag" === t.getAction(this.downPointer, this, m).name && q(g, t) && U(t, m, "drag") ? t : void 0
                                        };
                                        for (m = r; i(m);) {
                                            var x = De.forEachSelector(y);
                                            if (x) {
                                                this.prepared.name = "drag", this.target = x, this.element = m;
                                                break
                                            }
                                            m = k(m)
                                        }
                                    }
                                }
                            }
                            var S = !!this.prepared.name && !this.interacting();
                            if (S && (this.target.options[this.prepared.name].manualStart || !U(this.target, this.element, this.prepared))) return void this.stop();
                            if (this.prepared.name && this.target) {
                                S && this.start(this.prepared, this.target, this.element);
                                (this.setModifications(this.curCoords.page, n) || S) && (this.prevEvent = this[this.prepared.name + "Move"](e)), this.checkAndPreventDefault(e, this.target, this.element)
                            }
                        }
                        u(this.prevCoords, this.curCoords), (this.dragging || this.resizing) && Pe.edgeMove(e)
                    }
                }
            },
            dragStart: function(t) {
                var e = new B(this, t, "drag", "start", this.element);
                this.dragging = !0, this.target.fire(e), this.activeDrops.dropzones = [], this.activeDrops.elements = [], this.activeDrops.rects = [], this.dynamicDrop || this.setActiveDrops(this.element);
                var i = this.getDropEvents(t, e);
                return i.activate && this.fireActiveDrops(i.activate), e
            },
            dragMove: function(t) {
                var e = this.target,
                    i = new B(this, t, "drag", "move", this.element),
                    r = this.element,
                    s = this.getDrop(i, r);
                this.dropTarget = s.dropzone, this.dropElement = s.element;
                var n = this.getDropEvents(t, i);
                return e.fire(i), n.leave && this.prevDropTarget.fire(n.leave), n.enter && this.dropTarget.fire(n.enter), n.move && this.dropTarget.fire(n.move), this.prevDropTarget = this.dropTarget, this.prevDropElement = this.dropElement, i
            },
            resizeStart: function(t) {
                var e = new B(this, t, "resize", "start", this.element);
                if (this.prepared.edges) {
                    var i = this.target.getRect(this.element);
                    if (this.target.options.resize.square) {
                        var r = d({}, this.prepared.edges);
                        r.top = r.top || r.left && !r.bottom, r.left = r.left || r.top && !r.right, r.bottom = r.bottom || r.right && !r.top, r.right = r.right || r.bottom && !r.left, this.prepared._squareEdges = r
                    } else this.prepared._squareEdges = null;
                    this.resizeRects = {
                        start: i,
                        current: d({}, i),
                        restricted: d({}, i),
                        previous: d({}, i),
                        delta: {
                            left: 0,
                            right: 0,
                            width: 0,
                            top: 0,
                            bottom: 0,
                            height: 0
                        }
                    }, e.rect = this.resizeRects.restricted, e.deltaRect = this.resizeRects.delta
                }
                return this.target.fire(e), this.resizing = !0, e
            },
            resizeMove: function(t) {
                var e = new B(this, t, "resize", "move", this.element),
                    i = this.prepared.edges,
                    r = this.target.options.resize.invert,
                    s = "reposition" === r || "negate" === r;
                if (i) {
                    var n = e.dx,
                        o = e.dy,
                        a = this.resizeRects.start,
                        h = this.resizeRects.current,
                        p = this.resizeRects.restricted,
                        l = this.resizeRects.delta,
                        c = d(this.resizeRects.previous, p);
                    if (this.target.options.resize.square) {
                        var u = i;
                        i = this.prepared._squareEdges, u.left && u.bottom || u.right && u.top ? o = -n : u.left || u.right ? o = n : (u.top || u.bottom) && (n = o)
                    }
                    if (i.top && (h.top += o), i.bottom && (h.bottom += o), i.left && (h.left += n), i.right && (h.right += n), s) {
                        if (d(p, h), "reposition" === r) {
                            var g;
                            p.top > p.bottom && (g = p.top, p.top = p.bottom, p.bottom = g), p.left > p.right && (g = p.left, p.left = p.right, p.right = g)
                        }
                    } else p.top = Math.min(h.top, a.bottom), p.bottom = Math.max(h.bottom, a.top), p.left = Math.min(h.left, a.right), p.right = Math.max(h.right, a.left);
                    p.width = p.right - p.left, p.height = p.bottom - p.top;
                    for (var v in p) l[v] = p[v] - c[v];
                    e.edges = this.prepared.edges, e.rect = p, e.deltaRect = l
                }
                return this.target.fire(e), e
            },
            gestureStart: function(t) {
                var e = new B(this, t, "gesture", "start", this.element);
                return e.ds = 0, this.gesture.startDistance = this.gesture.prevDistance = e.distance, this.gesture.startAngle = this.gesture.prevAngle = e.angle, this.gesture.scale = 1, this.gesturing = !0, this.target.fire(e), e
            },
            gestureMove: function(t) {
                if (!this.pointerIds.length) return this.prevEvent;
                var e;
                return e = new B(this, t, "gesture", "move", this.element), e.ds = e.scale - this.gesture.scale, this.target.fire(e), this.gesture.prevAngle = e.angle, this.gesture.prevDistance = e.distance, 1 / 0 === e.scale || null === e.scale || void 0 === e.scale || isNaN(e.scale) || (this.gesture.scale = e.scale), e
            },
            pointerHold: function(t, e, i) {
                this.collectEventTargets(t, e, i, "hold")
            },
            pointerUp: function(t, e, i, r) {
                var s = this.mouse ? 0 : ae(this.pointerIds, E(t));
                clearTimeout(this.holdTimers[s]), this.collectEventTargets(t, e, i, "up"), this.collectEventTargets(t, e, i, "tap"), this.pointerEnd(t, e, i, r), this.removePointer(t)
            },
            pointerCancel: function(t, e, i, r) {
                var s = this.mouse ? 0 : ae(this.pointerIds, E(t));
                clearTimeout(this.holdTimers[s]), this.collectEventTargets(t, e, i, "cancel"), this.pointerEnd(t, e, i, r), this.removePointer(t)
            },
            ie8Dblclick: function(t, e, i) {
                this.prevTap && e.clientX === this.prevTap.clientX && e.clientY === this.prevTap.clientY && i === this.prevTap.target && (this.downTargets[0] = i, this.downTimes[0] = (new Date).getTime(), this.collectEventTargets(t, e, i, "tap"))
            },
            pointerEnd: function(t, e, i, r) {
                var s, n = this.target,
                    o = n && n.options,
                    a = o && this.prepared.name && o[this.prepared.name].inertia,
                    h = this.inertiaStatus;
                if (this.interacting()) {
                    if (h.active) return;
                    var p, c = (new Date).getTime(),
                        g = !1,
                        v = !1,
                        m = !1,
                        f = N(n, this.prepared.name) && o[this.prepared.name].snap.endOnly,
                        y = H(n, this.prepared.name) && o[this.prepared.name].restrict.endOnly,
                        x = 0,
                        E = 0;
                    if (p = this.dragging ? "x" === o.drag.axis ? Math.abs(this.pointerDelta.client.vx) : "y" === o.drag.axis ? Math.abs(this.pointerDelta.client.vy) : this.pointerDelta.client.speed : this.pointerDelta.client.speed, g = a && a.enabled && "gesture" !== this.prepared.name && e !== h.startEvent, v = g && c - this.curCoords.timeStamp < 50 && p > a.minSpeed && p > a.endSpeed, g && !v && (f || y)) {
                        var S = {};
                        S.snap = S.restrict = S, f && (this.setSnapping(this.curCoords.page, S), S.locked && (x += S.dx, E += S.dy)), y && (this.setRestriction(this.curCoords.page, S), S.restricted && (x += S.dx, E += S.dy)), (x || E) && (m = !0)
                    }
                    if (v || m) {
                        if (u(h.upCoords, this.curCoords), this.pointers[0] = h.startEvent = new B(this, e, this.prepared.name, "inertiastart", this.element), h.t0 = c, n.fire(h.startEvent), v) {
                            h.vx0 = this.pointerDelta.client.vx, h.vy0 = this.pointerDelta.client.vy, h.v0 = p, this.calcInertia(h);
                            var b, w = d({}, this.curCoords.page),
                                D = P(n, this.element);
                            if (w.x = w.x + h.xe - D.x, w.y = w.y + h.ye - D.y, b = {
                                    useStatusXY: !0,
                                    x: w.x,
                                    y: w.y,
                                    dx: 0,
                                    dy: 0,
                                    snap: null
                                }, b.snap = b, x = E = 0, f) {
                                var z = this.setSnapping(this.curCoords.page, b);
                                z.locked && (x += z.dx, E += z.dy)
                            }
                            if (y) {
                                var T = this.setRestriction(this.curCoords.page, b);
                                T.restricted && (x += T.dx, E += T.dy)
                            }
                            h.modifiedXe += x, h.modifiedYe += E, h.i = Ve(this.boundInertiaFrame)
                        } else h.smoothEnd = !0, h.xe = x, h.ye = E, h.sx = h.sy = 0, h.i = Ve(this.boundSmoothEndFrame);
                        return void(h.active = !0)
                    }(f || y) && this.pointerMove(t, e, i, r, !0)
                }
                if (this.dragging) {
                    s = new B(this, e, "drag", "end", this.element);
                    var C = this.element,
                        M = this.getDrop(s, C);
                    this.dropTarget = M.dropzone, this.dropElement = M.element;
                    var O = this.getDropEvents(e, s);
                    O.leave && this.prevDropTarget.fire(O.leave), O.enter && this.dropTarget.fire(O.enter), O.drop && this.dropTarget.fire(O.drop), O.deactivate && this.fireActiveDrops(O.deactivate), n.fire(s)
                } else this.resizing ? (s = new B(this, e, "resize", "end", this.element), n.fire(s)) : this.gesturing && (s = new B(this, e, "gesture", "end", this.element), n.fire(s));
                this.stop(e)
            },
            collectDrops: function(t) {
                var e, r = [],
                    s = [];
                for (t = t || this.element, e = 0; e < De.length; e++)
                    if (De[e].options.drop.enabled) {
                        var n = De[e],
                            o = n.options.drop.accept;
                        if (!(i(o) && o !== t || l(o) && !pe(t, o)))
                            for (var a = n.selector ? n._context.querySelectorAll(n.selector) : [n._element], h = 0, p = a.length; p > h; h++) {
                                var c = a[h];
                                c !== t && (r.push(n), s.push(c))
                            }
                    }
                return {
                    dropzones: r,
                    elements: s
                }
            },
            fireActiveDrops: function(t) {
                var e, i, r, s;
                for (e = 0; e < this.activeDrops.dropzones.length; e++) i = this.activeDrops.dropzones[e], r = this.activeDrops.elements[e], r !== s && (t.target = r, i.fire(t)), s = r
            },
            setActiveDrops: function(t) {
                var e = this.collectDrops(t, !0);
                this.activeDrops.dropzones = e.dropzones, this.activeDrops.elements = e.elements, this.activeDrops.rects = [];
                for (var i = 0; i < this.activeDrops.dropzones.length; i++) this.activeDrops.rects[i] = this.activeDrops.dropzones[i].getRect(this.activeDrops.elements[i])
            },
            getDrop: function(t, e) {
                var i = [];
                Te && this.setActiveDrops(e);
                for (var r = 0; r < this.activeDrops.dropzones.length; r++) {
                    var s = this.activeDrops.dropzones[r],
                        n = this.activeDrops.elements[r],
                        o = this.activeDrops.rects[r];
                    i.push(s.dropCheck(this.pointers[0], this.target, e, n, o) ? n : null)
                }
                var a = V(i);
                return {
                    dropzone: this.activeDrops.dropzones[a] || null,
                    element: this.activeDrops.elements[a] || null
                }
            },
            getDropEvents: function(t, e) {
                var i = {
                    enter: null,
                    leave: null,
                    activate: null,
                    deactivate: null,
                    move: null,
                    drop: null
                };
                return this.dropElement !== this.prevDropElement && (this.prevDropTarget && (i.leave = {
                    target: this.prevDropElement,
                    dropzone: this.prevDropTarget,
                    relatedTarget: e.target,
                    draggable: e.interactable,
                    dragEvent: e,
                    interaction: this,
                    timeStamp: e.timeStamp,
                    type: "dragleave"
                }, e.dragLeave = this.prevDropElement, e.prevDropzone = this.prevDropTarget), this.dropTarget && (i.enter = {
                    target: this.dropElement,
                    dropzone: this.dropTarget,
                    relatedTarget: e.target,
                    draggable: e.interactable,
                    dragEvent: e,
                    interaction: this,
                    timeStamp: e.timeStamp,
                    type: "dragenter"
                }, e.dragEnter = this.dropElement, e.dropzone = this.dropTarget)), "dragend" === e.type && this.dropTarget && (i.drop = {
                    target: this.dropElement,
                    dropzone: this.dropTarget,
                    relatedTarget: e.target,
                    draggable: e.interactable,
                    dragEvent: e,
                    interaction: this,
                    timeStamp: e.timeStamp,
                    type: "drop"
                }), "dragstart" === e.type && (i.activate = {
                    target: null,
                    dropzone: null,
                    relatedTarget: e.target,
                    draggable: e.interactable,
                    dragEvent: e,
                    interaction: this,
                    timeStamp: e.timeStamp,
                    type: "dropactivate"
                }), "dragend" === e.type && (i.deactivate = {
                    target: null,
                    dropzone: null,
                    relatedTarget: e.target,
                    draggable: e.interactable,
                    dragEvent: e,
                    interaction: this,
                    timeStamp: e.timeStamp,
                    type: "dropdeactivate"
                }), "dragmove" === e.type && this.dropTarget && (i.move = {
                    target: this.dropElement,
                    dropzone: this.dropTarget,
                    relatedTarget: e.target,
                    draggable: e.interactable,
                    dragEvent: e,
                    interaction: this,
                    dragmove: e,
                    timeStamp: e.timeStamp,
                    type: "dropmove"
                }, e.dropzone = this.dropTarget), i
            },
            currentAction: function() {
                return this.dragging && "drag" || this.resizing && "resize" || this.gesturing && "gesture" || null
            },
            interacting: function() {
                return this.dragging || this.resizing || this.gesturing
            },
            clearTargets: function() {
                this.target && !this.target.selector && (this.target = this.element = null), this.dropTarget = this.dropElement = this.prevDropTarget = this.prevDropElement = null
            },
            stop: function(t) {
                if (this.interacting()) {
                    Pe.stop(), this.matches = [], this.matchElements = [];
                    var e = this.target;
                    e.options.styleCursor && (e._doc.documentElement.style.cursor = ""), t && a(t.preventDefault) && this.checkAndPreventDefault(t, e, this.element), this.dragging && (this.activeDrops.dropzones = this.activeDrops.elements = this.activeDrops.rects = null), this.clearTargets()
                }
                this.pointerIsDown = this.snapStatus.locked = this.dragging = this.resizing = this.gesturing = !1, this.prepared.name = this.prevEvent = null, this.inertiaStatus.resumeDx = this.inertiaStatus.resumeDy = 0;
                for (var i = 0; i < this.pointers.length; i++) - 1 === ae(this.pointerIds, E(this.pointers[i])) && this.pointers.splice(i, 1);
                ze.length > 1 && ze.splice(ae(ze, this), 1)
            },
            inertiaFrame: function() {
                var t = this.inertiaStatus,
                    e = this.target.options[this.prepared.name].inertia,
                    i = e.resistance,
                    r = (new Date).getTime() / 1e3 - t.t0;
                if (r < t.te) {
                    var s = 1 - (Math.exp(-i * r) - t.lambda_v0) / t.one_ve_v0;
                    if (t.modifiedXe === t.xe && t.modifiedYe === t.ye) t.sx = t.xe * s, t.sy = t.ye * s;
                    else {
                        var n = _(0, 0, t.xe, t.ye, t.modifiedXe, t.modifiedYe, s);
                        t.sx = n.x, t.sy = n.y
                    }
                    this.pointerMove(t.startEvent, t.startEvent), t.i = Ve(this.boundInertiaFrame)
                } else t.sx = t.modifiedXe, t.sy = t.modifiedYe, this.pointerMove(t.startEvent, t.startEvent), t.active = !1,
                    this.pointerEnd(t.startEvent, t.startEvent)
            },
            smoothEndFrame: function() {
                var t = this.inertiaStatus,
                    e = (new Date).getTime() - t.t0,
                    i = this.target.options[this.prepared.name].inertia.smoothEndDuration;
                i > e ? (t.sx = A(e, 0, t.xe, i), t.sy = A(e, 0, t.ye, i), this.pointerMove(t.startEvent, t.startEvent), t.i = Ve(this.boundSmoothEndFrame)) : (t.sx = t.xe, t.sy = t.ye, this.pointerMove(t.startEvent, t.startEvent), t.active = !1, t.smoothEnd = !1, this.pointerEnd(t.startEvent, t.startEvent))
            },
            addPointer: function(t) {
                var e = E(t),
                    i = this.mouse ? 0 : ae(this.pointerIds, e);
                return -1 === i && (i = this.pointerIds.length), this.pointerIds[i] = e, this.pointers[i] = t, i
            },
            removePointer: function(t) {
                var e = E(t),
                    i = this.mouse ? 0 : ae(this.pointerIds, e); - 1 !== i && (this.interacting() || this.pointers.splice(i, 1), this.pointerIds.splice(i, 1), this.downTargets.splice(i, 1), this.downTimes.splice(i, 1), this.holdTimers.splice(i, 1))
            },
            recordPointer: function(t) {
                if (!this.inertiaStatus.active) {
                    var e = this.mouse ? 0 : ae(this.pointerIds, E(t)); - 1 !== e && (this.pointers[e] = t)
                }
            },
            collectEventTargets: function(t, e, r, s) {
                function n(t, e, n) {
                    var o = de ? n.querySelectorAll(e) : void 0;
                    t._iEvents[s] && i(p) && I(t, p) && !R(t, p, r) && F(t, p, r) && pe(p, e, o) && (a.push(t), h.push(p))
                }
                var o = this.mouse ? 0 : ae(this.pointerIds, E(t));
                if ("tap" !== s || !this.pointerWasMoved && this.downTargets[o] && this.downTargets[o] === r) {
                    for (var a = [], h = [], p = r; p;) ie.isSet(p) && ie(p)._iEvents[s] && (a.push(ie(p)), h.push(p)), De.forEachSelector(n), p = k(p);
                    (a.length || "tap" === s) && this.firePointers(t, e, r, a, h, s)
                }
            },
            firePointers: function(t, e, i, r, s, n) {
                var o, a, h, p = this.mouse ? 0 : ae(E(t)),
                    c = {};
                for ("doubletap" === n ? c = t : (d(c, e), e !== t && d(c, t), c.preventDefault = K, c.stopPropagation = B.prototype.stopPropagation, c.stopImmediatePropagation = B.prototype.stopImmediatePropagation, c.interaction = this, c.timeStamp = (new Date).getTime(), c.originalEvent = e, c.type = n, c.pointerId = E(t), c.pointerType = this.mouse ? "mouse" : _e ? l(t.pointerType) ? t.pointerType : [, , "touch", "pen", "mouse"][t.pointerType] : "touch"), "tap" === n && (c.dt = c.timeStamp - this.downTimes[p], a = c.timeStamp - this.tapTime, h = !!(this.prevTap && "doubletap" !== this.prevTap.type && this.prevTap.target === c.target && 500 > a), c["double"] = h, this.tapTime = c.timeStamp), o = 0; o < r.length && (c.currentTarget = s[o], c.interactable = r[o], r[o].fire(c), !(c.immediatePropagationStopped || c.propagationStopped && s[o + 1] !== c.currentTarget)); o++);
                if (h) {
                    var u = {};
                    d(u, c), u.dt = a, u.type = "doubletap", this.collectEventTargets(u, e, i, "doubletap"), this.prevTap = u
                } else "tap" === n && (this.prevTap = c)
            },
            validateSelector: function(t, e, i) {
                for (var r = 0, s = e.length; s > r; r++) {
                    var n = e[r],
                        o = i[r],
                        a = Z(n.getAction(t, this, o), n);
                    if (a && U(n, o, a)) return this.target = n, this.element = o, a
                }
            },
            setSnapping: function(t, e) {
                var i, r, s, n = this.target.options[this.prepared.name].snap,
                    o = [];
                if (e = e || this.snapStatus, e.useStatusXY) r = {
                    x: e.x,
                    y: e.y
                };
                else {
                    var p = P(this.target, this.element);
                    r = d({}, t), r.x -= p.x, r.y -= p.y
                }
                e.realX = r.x, e.realY = r.y, r.x = r.x - this.inertiaStatus.resumeDx, r.y = r.y - this.inertiaStatus.resumeDy;
                for (var l = n.targets ? n.targets.length : 0, c = 0; c < this.snapOffsets.length; c++) {
                    var u = {
                        x: r.x - this.snapOffsets[c].x,
                        y: r.y - this.snapOffsets[c].y
                    };
                    for (s = 0; l > s; s++)(i = a(n.targets[s]) ? n.targets[s](u.x, u.y, this) : n.targets[s]) && o.push({
                        x: h(i.x) ? i.x + this.snapOffsets[c].x : u.x,
                        y: h(i.y) ? i.y + this.snapOffsets[c].y : u.y,
                        range: h(i.range) ? i.range : n.range
                    })
                }
                var g = {
                    target: null,
                    inRange: !1,
                    distance: 0,
                    range: 0,
                    dx: 0,
                    dy: 0
                };
                for (s = 0, l = o.length; l > s; s++) {
                    i = o[s];
                    var v = i.range,
                        m = i.x - r.x,
                        f = i.y - r.y,
                        y = Se(m, f),
                        x = v >= y;
                    1 / 0 === v && g.inRange && 1 / 0 !== g.range && (x = !1), (!g.target || (x ? g.inRange && 1 / 0 !== v ? y / v < g.distance / g.range : 1 / 0 === v && 1 / 0 !== g.range || y < g.distance : !g.inRange && y < g.distance)) && (1 / 0 === v && (x = !0), g.target = i, g.distance = y, g.range = v, g.inRange = x, g.dx = m, g.dy = f, e.range = v)
                }
                var E;
                return g.target ? (E = e.snappedX !== g.target.x || e.snappedY !== g.target.y, e.snappedX = g.target.x, e.snappedY = g.target.y) : (E = !0, e.snappedX = NaN, e.snappedY = NaN), e.dx = g.dx, e.dy = g.dy, e.changed = E || g.inRange && !e.locked, e.locked = g.inRange, e
            },
            setRestriction: function(t, e) {
                var r, s = this.target,
                    n = s && s.options[this.prepared.name].restrict,
                    o = n && n.restriction;
                if (!o) return e;
                e = e || this.restrictStatus, r = r = e.useStatusXY ? {
                    x: e.x,
                    y: e.y
                } : d({}, t), e.snap && e.snap.locked && (r.x += e.snap.dx || 0, r.y += e.snap.dy || 0), r.x -= this.inertiaStatus.resumeDx, r.y -= this.inertiaStatus.resumeDy, e.dx = 0, e.dy = 0, e.restricted = !1;
                var h, p, c;
                return l(o) && !(o = "parent" === o ? k(this.element) : "self" === o ? s.getRect(this.element) : Y(this.element, o)) ? e : (a(o) && (o = o(r.x, r.y, this.element)), i(o) && (o = w(o)), h = o, o ? "x" in o && "y" in o ? (p = Math.max(Math.min(h.x + h.width - this.restrictOffset.right, r.x), h.x + this.restrictOffset.left), c = Math.max(Math.min(h.y + h.height - this.restrictOffset.bottom, r.y), h.y + this.restrictOffset.top)) : (p = Math.max(Math.min(h.right - this.restrictOffset.right, r.x), h.left + this.restrictOffset.left), c = Math.max(Math.min(h.bottom - this.restrictOffset.bottom, r.y), h.top + this.restrictOffset.top)) : (p = r.x, c = r.y), e.dx = p - r.x, e.dy = c - r.y, e.changed = e.restrictedX !== p || e.restrictedY !== c, e.restricted = !(!e.dx && !e.dy), e.restrictedX = p, e.restrictedY = c, e)
            },
            checkAndPreventDefault: function(t, e, i) {
                if (e = e || this.target) {
                    var r = e.options,
                        s = r.preventDefault;
                    if ("auto" === s && i && !/^input$|^textarea$/i.test(i.nodeName)) {
                        if (/down|start/i.test(t.type) && "drag" === this.prepared.name && "xy" !== r.drag.axis) return;
                        if (r[this.prepared.name] && r[this.prepared.name].manualStart && !this.interacting()) return;
                        return void t.preventDefault()
                    }
                    return "always" === s ? void t.preventDefault() : void 0
                }
            },
            calcInertia: function(t) {
                var e = this.target.options[this.prepared.name].inertia,
                    i = e.resistance,
                    r = -Math.log(e.endSpeed / t.v0) / i;
                t.x0 = this.prevEvent.pageX, t.y0 = this.prevEvent.pageY, t.t0 = t.startEvent.timeStamp / 1e3, t.sx = t.sy = 0, t.modifiedXe = t.xe = (t.vx0 - r) / i, t.modifiedYe = t.ye = (t.vy0 - r) / i, t.te = r, t.lambda_v0 = i / t.v0, t.one_ve_v0 = 1 - e.endSpeed / t.v0
            },
            _updateEventTargets: function(t, e) {
                this._eventTarget = t, this._curEventTarget = e
            }
        }, B.prototype = {
            preventDefault: e,
            stopImmediatePropagation: function() {
                this.immediatePropagationStopped = this.propagationStopped = !0
            },
            stopPropagation: function() {
                this.propagationStopped = !0
            }
        };
        for (var Le = {}, Be = ["dragStart", "dragMove", "resizeStart", "resizeMove", "gestureStart", "gestureMove", "pointerOver", "pointerOut", "pointerHover", "selectorDown", "pointerDown", "pointerMove", "pointerUp", "pointerCancel", "pointerEnd", "addPointer", "removePointer", "recordPointer"], Ke = 0, je = Be.length; je > Ke; Ke++) {
            var Je = Be[Ke];
            Le[Je] = L(Je)
        }
        De.indexOfElement = function(t, e) {
                e = e || ge;
                for (var i = 0; i < this.length; i++) {
                    var r = this[i];
                    if (r.selector === t && r._context === e || !r.selector && r._element === t) return i
                }
                return -1
            }, De.get = function(t, e) {
                return this[this.indexOfElement(t, e && e.context)]
            }, De.forEachSelector = function(t) {
                for (var e = 0; e < this.length; e++) {
                    var i = this[e];
                    if (i.selector) {
                        var r = t(i, i.selector, i._context, e, this);
                        if (void 0 !== r) return r
                    }
                }
            }, re.prototype = {
                setOnEvents: function(t, e) {
                    return "drop" === t ? (a(e.ondrop) && (this.ondrop = e.ondrop), a(e.ondropactivate) && (this.ondropactivate = e.ondropactivate), a(e.ondropdeactivate) && (this.ondropdeactivate = e.ondropdeactivate), a(e.ondragenter) && (this.ondragenter = e.ondragenter), a(e.ondragleave) && (this.ondragleave = e.ondragleave), a(e.ondropmove) && (this.ondropmove = e.ondropmove)) : (t = "on" + t, a(e.onstart) && (this[t + "start"] = e.onstart), a(e.onmove) && (this[t + "move"] = e.onmove), a(e.onend) && (this[t + "end"] = e.onend), a(e.oninertiastart) && (this[t + "inertiastart"] = e.oninertiastart)), this
                },
                draggable: function(t) {
                    return o(t) ? (this.options.drag.enabled = !1 !== t.enabled, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^x$|^y$|^xy$/.test(t.axis) ? this.options.drag.axis = t.axis : null === t.axis && delete this.options.drag.axis, this) : p(t) ? (this.options.drag.enabled = t, this) : this.options.drag
                },
                setPerAction: function(t, e) {
                    for (var i in e) i in Me[t] && (o(e[i]) ? (this.options[t][i] = d(this.options[t][i] || {}, e[i]), o(Me.perAction[i]) && "enabled" in Me.perAction[i] && (this.options[t][i].enabled = !1 !== e[i].enabled)) : p(e[i]) && o(Me.perAction[i]) ? this.options[t][i].enabled = e[i] : void 0 !== e[i] && (this.options[t][i] = e[i]))
                },
                dropzone: function(t) {
                    return o(t) ? (this.options.drop.enabled = !1 !== t.enabled, this.setOnEvents("drop", t), this.accept(t.accept), /^(pointer|center)$/.test(t.overlap) ? this.options.drop.overlap = t.overlap : h(t.overlap) && (this.options.drop.overlap = Math.max(Math.min(1, t.overlap), 0)), this) : p(t) ? (this.options.drop.enabled = t, this) : this.options.drop
                },
                dropCheck: function(t, e, i, r, s) {
                    var n = !1;
                    if (!(s = s || this.getRect(r))) return !!this.options.dropChecker && this.options.dropChecker(t, n, this, r, e, i);
                    var o = this.options.drop.overlap;
                    if ("pointer" === o) {
                        var a, p, l = f(t),
                            c = P(e, i);
                        l.x += c.x, l.y += c.y, a = l.x > s.left && l.x < s.right, p = l.y > s.top && l.y < s.bottom, n = a && p
                    }
                    var d = e.getRect(i);
                    if ("center" === o) {
                        var u = d.left + d.width / 2,
                            g = d.top + d.height / 2;
                        n = u >= s.left && u <= s.right && g >= s.top && g <= s.bottom
                    }
                    if (h(o)) {
                        n = Math.max(0, Math.min(s.right, d.right) - Math.max(s.left, d.left)) * Math.max(0, Math.min(s.bottom, d.bottom) - Math.max(s.top, d.top)) / (d.width * d.height) >= o
                    }
                    return this.options.dropChecker && (n = this.options.dropChecker(t, n, this, r, e, i)), n
                },
                dropChecker: function(t) {
                    return a(t) ? (this.options.dropChecker = t, this) : null === t ? (delete this.options.getRect, this) : this.options.dropChecker
                },
                accept: function(t) {
                    return i(t) ? (this.options.drop.accept = t, this) : c(t) ? (this.options.drop.accept = t, this) : null === t ? (delete this.options.drop.accept, this) : this.options.drop.accept
                },
                resizable: function(t) {
                    return o(t) ? (this.options.resize.enabled = !1 !== t.enabled, this.setPerAction("resize", t), this.setOnEvents("resize", t), /^x$|^y$|^xy$/.test(t.axis) ? this.options.resize.axis = t.axis : null === t.axis && (this.options.resize.axis = Me.resize.axis), p(t.square) && (this.options.resize.square = t.square), this) : p(t) ? (this.options.resize.enabled = t, this) : this.options.resize
                },
                squareResize: function(t) {
                    return p(t) ? (this.options.resize.square = t, this) : null === t ? (delete this.options.resize.square, this) : this.options.resize.square
                },
                gesturable: function(t) {
                    return o(t) ? (this.options.gesture.enabled = !1 !== t.enabled, this.setPerAction("gesture", t), this.setOnEvents("gesture", t), this) : p(t) ? (this.options.gesture.enabled = t, this) : this.options.gesture
                },
                autoScroll: function(t) {
                    return o(t) ? t = d({
                        actions: ["drag", "resize"]
                    }, t) : p(t) && (t = {
                        actions: ["drag", "resize"],
                        enabled: t
                    }), this.setOptions("autoScroll", t)
                },
                snap: function(t) {
                    var e = this.setOptions("snap", t);
                    return e === this ? this : e.drag
                },
                setOptions: function(t, e) {
                    var i, r = e && n(e.actions) ? e.actions : ["drag"];
                    if (o(e) || p(e)) {
                        for (i = 0; i < r.length; i++) {
                            var s = /resize/.test(r[i]) ? "resize" : r[i];
                            if (o(this.options[s])) {
                                var a = this.options[s][t];
                                o(e) ? (d(a, e), a.enabled = !1 !== e.enabled, "snap" === t && ("grid" === a.mode ? a.targets = [ie.createSnapGrid(d({
                                    offset: a.gridOffset || {
                                        x: 0,
                                        y: 0
                                    }
                                }, a.grid || {}))] : "anchor" === a.mode ? a.targets = a.anchors : "path" === a.mode && (a.targets = a.paths), "elementOrigin" in e && (a.relativePoints = [e.elementOrigin]))) : p(e) && (a.enabled = e)
                            }
                        }
                        return this
                    }
                    var h = {},
                        l = ["drag", "resize", "gesture"];
                    for (i = 0; i < l.length; i++) t in Me[l[i]] && (h[l[i]] = this.options[l[i]][t]);
                    return h
                },
                inertia: function(t) {
                    var e = this.setOptions("inertia", t);
                    return e === this ? this : e.drag
                },
                getAction: function(t, e, i) {
                    var r = this.defaultActionChecker(t, e, i);
                    return this.options.actionChecker ? this.options.actionChecker(t, r, this, i, e) : r
                },
                defaultActionChecker: Q,
                actionChecker: function(t) {
                    return a(t) ? (this.options.actionChecker = t, this) : null === t ? (delete this.options.actionChecker, this) : this.options.actionChecker
                },
                getRect: function(t) {
                    return t = t || this._element, this.selector && !i(t) && (t = this._context.querySelector(this.selector)), w(t)
                },
                rectChecker: function(t) {
                    return a(t) ? (this.getRect = t, this) : null === t ? (delete this.options.getRect, this) : this.getRect
                },
                styleCursor: function(t) {
                    return p(t) ? (this.options.styleCursor = t, this) : null === t ? (delete this.options.styleCursor, this) : this.options.styleCursor
                },
                preventDefault: function(t) {
                    return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : p(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault
                },
                origin: function(t) {
                    return c(t) ? (this.options.origin = t, this) : o(t) ? (this.options.origin = t, this) : this.options.origin
                },
                deltaSource: function(t) {
                    return "page" === t || "client" === t ? (this.options.deltaSource = t, this) : this.options.deltaSource
                },
                restrict: function(t) {
                    if (!o(t)) return this.setOptions("restrict", t);
                    for (var e, i = ["drag", "resize", "gesture"], r = 0; r < i.length; r++) {
                        var s = i[r];
                        if (s in t) {
                            var n = d({
                                actions: [s],
                                restriction: t[s]
                            }, t);
                            e = this.setOptions("restrict", n)
                        }
                    }
                    return e
                },
                context: function() {
                    return this._context
                },
                _context: ge,
                ignoreFrom: function(t) {
                    return c(t) ? (this.options.ignoreFrom = t, this) : i(t) ? (this.options.ignoreFrom = t, this) : this.options.ignoreFrom
                },
                allowFrom: function(t) {
                    return c(t) ? (this.options.allowFrom = t, this) : i(t) ? (this.options.allowFrom = t, this) : this.options.allowFrom
                },
                element: function() {
                    return this._element
                },
                fire: function(t) {
                    if (!t || !t.type || !he(qe, t.type)) return this;
                    var e, i, r, s = "on" + t.type;
                    if (t.type in this._iEvents)
                        for (e = this._iEvents[t.type], i = 0, r = e.length; r > i && !t.immediatePropagationStopped; i++) e[i].name, e[i](t);
                    if (a(this[s]) && (this[s].name, this[s](t)), t.type in Ne && (e = Ne[t.type]))
                        for (i = 0, r = e.length; r > i && !t.immediatePropagationStopped; i++) e[i].name, e[i](t);
                    return this
                },
                on: function(t, e, i) {
                    var r;
                    if (l(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), n(t)) {
                        for (r = 0; r < t.length; r++) this.on(t[r], e, i);
                        return this
                    }
                    if (o(t)) {
                        for (var s in t) this.on(s, t[s], e);
                        return this
                    }
                    if ("wheel" === t && (t = Fe), i = !!i, he(qe, t)) t in this._iEvents ? this._iEvents[t].push(e) : this._iEvents[t] = [e];
                    else if (this.selector) {
                        if (!Ce[t])
                            for (Ce[t] = {
                                    selectors: [],
                                    contexts: [],
                                    listeners: []
                                }, r = 0; r < we.length; r++) Ge.add(we[r], t, te), Ge.add(we[r], t, ee, !0);
                        var a, h = Ce[t];
                        for (a = h.selectors.length - 1; a >= 0 && (h.selectors[a] !== this.selector || h.contexts[a] !== this._context); a--); - 1 === a && (a = h.selectors.length, h.selectors.push(this.selector), h.contexts.push(this._context), h.listeners.push([])), h.listeners[a].push([e, i])
                    } else Ge.add(this._element, t, e, i);
                    return this
                },
                off: function(t, e, i) {
                    var r;
                    if (l(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), n(t)) {
                        for (r = 0; r < t.length; r++) this.off(t[r], e, i);
                        return this
                    }
                    if (o(t)) {
                        for (var s in t) this.off(s, t[s], e);
                        return this
                    }
                    var a, h = -1;
                    if (i = !!i, "wheel" === t && (t = Fe), he(qe, t))(a = this._iEvents[t]) && -1 !== (h = ae(a, e)) && this._iEvents[t].splice(h, 1);
                    else if (this.selector) {
                        var p = Ce[t],
                            c = !1;
                        if (!p) return this;
                        for (h = p.selectors.length - 1; h >= 0; h--)
                            if (p.selectors[h] === this.selector && p.contexts[h] === this._context) {
                                var d = p.listeners[h];
                                for (r = d.length - 1; r >= 0; r--) {
                                    var u = d[r][0],
                                        g = d[r][1];
                                    if (u === e && g === i) {
                                        d.splice(r, 1), d.length || (p.selectors.splice(h, 1), p.contexts.splice(h, 1), p.listeners.splice(h, 1), Ge.remove(this._context, t, te), Ge.remove(this._context, t, ee, !0), p.selectors.length || (Ce[t] = null)), c = !0;
                                        break
                                    }
                                }
                                if (c) break
                            }
                    } else Ge.remove(this._element, t, e, i);
                    return this
                },
                set: function(t) {
                    o(t) || (t = {}), this.options = d({}, Me.base);
                    var e, i = ["drag", "drop", "resize", "gesture"],
                        r = ["draggable", "dropzone", "resizable", "gesturable"],
                        s = d(d({}, Me.perAction), t[n] || {});
                    for (e = 0; e < i.length; e++) {
                        var n = i[e];
                        this.options[n] = d({}, Me[n]), this.setPerAction(n, s), this[r[e]](t[n])
                    }
                    var a = ["accept", "actionChecker", "allowFrom", "deltaSource", "dropChecker", "ignoreFrom", "origin", "preventDefault", "rectChecker"];
                    for (e = 0, je = a.length; je > e; e++) {
                        var h = a[e];
                        this.options[h] = Me.base[h], h in t && this[h](t[h])
                    }
                    return this
                },
                unset: function() {
                    if (Ge.remove(this, "all"), l(this.selector))
                        for (var t in Ce)
                            for (var e = Ce[t], i = 0; i < e.selectors.length; i++) {
                                e.selectors[i] === this.selector && e.contexts[i] === this._context && (e.selectors.splice(i, 1), e.contexts.splice(i, 1), e.listeners.splice(i, 1), e.selectors.length || (Ce[t] = null)), Ge.remove(this._context, t, te), Ge.remove(this._context, t, ee, !0);
                                break
                            } else Ge.remove(this, "all"), this.options.styleCursor && (this._element.style.cursor = "");
                    return this.dropzone(!1), De.splice(ae(De, this), 1), ie
                }
            }, re.prototype.snap = se(re.prototype.snap, "Interactable#snap is deprecated. See the new documentation for snapping at http://interactjs.io/docs/snapping"), re.prototype.restrict = se(re.prototype.restrict, "Interactable#restrict is deprecated. See the new documentation for resticting at http://interactjs.io/docs/restriction"), re.prototype.inertia = se(re.prototype.inertia, "Interactable#inertia is deprecated. See the new documentation for inertia at http://interactjs.io/docs/inertia"), re.prototype.autoScroll = se(re.prototype.autoScroll, "Interactable#autoScroll is deprecated. See the new documentation for autoScroll at http://interactjs.io/docs/#autoscroll"), ie.isSet = function(t, e) {
                return -1 !== De.indexOfElement(t, e && e.context)
            }, ie.on = function(t, e, i) {
                if (l(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), n(t)) {
                    for (var r = 0; r < t.length; r++) ie.on(t[r], e, i);
                    return ie
                }
                if (o(t)) {
                    for (var s in t) ie.on(s, t[s], e);
                    return ie
                }
                return he(qe, t) ? Ne[t] ? Ne[t].push(e) : Ne[t] = [e] : Ge.add(ge, t, e, i), ie
            }, ie.off = function(t, e, i) {
                if (l(t) && -1 !== t.search(" ") && (t = t.trim().split(/ +/)), n(t)) {
                    for (var r = 0; r < t.length; r++) ie.off(t[r], e, i);
                    return ie
                }
                if (o(t)) {
                    for (var s in t) ie.off(s, t[s], e);
                    return ie
                }
                if (he(qe, t)) {
                    var a;
                    t in Ne && -1 !== (a = ae(Ne[t], e)) && Ne[t].splice(a, 1)
                } else Ge.remove(ge, t, e, i);
                return ie
            }, ie.enableDragging = se(function(t) {
                return null !== t && void 0 !== t ? (Re.drag = t, ie) : Re.drag
            }, "interact.enableDragging is deprecated and will soon be removed."), ie.enableResizing = se(function(t) {
                return null !== t && void 0 !== t ? (Re.resize = t, ie) : Re.resize
            }, "interact.enableResizing is deprecated and will soon be removed."), ie.enableGesturing = se(function(t) {
                return null !== t && void 0 !== t ? (Re.gesture = t, ie) : Re.gesture
            }, "interact.enableGesturing is deprecated and will soon be removed."), ie.eventTypes = qe, ie.debug = function() {
                var t = ze[0] || new $;
                return {
                    interactions: ze,
                    target: t.target,
                    dragging: t.dragging,
                    resizing: t.resizing,
                    gesturing: t.gesturing,
                    prepared: t.prepared,
                    matches: t.matches,
                    matchElements: t.matchElements,
                    prevCoords: t.prevCoords,
                    startCoords: t.startCoords,
                    pointerIds: t.pointerIds,
                    pointers: t.pointers,
                    addPointer: Le.addPointer,
                    removePointer: Le.removePointer,
                    recordPointer: Le.recordPointer,
                    snap: t.snapStatus,
                    restrict: t.restrictStatus,
                    inertia: t.inertiaStatus,
                    downTime: t.downTimes[0],
                    downEvent: t.downEvent,
                    downPointer: t.downPointer,
                    prevEvent: t.prevEvent,
                    Interactable: re,
                    interactables: De,
                    pointerIsDown: t.pointerIsDown,
                    defaultOptions: Me,
                    defaultActionChecker: Q,
                    actionCursors: Ie,
                    dragMove: Le.dragMove,
                    resizeMove: Le.resizeMove,
                    gestureMove: Le.gestureMove,
                    pointerUp: Le.pointerUp,
                    pointerDown: Le.pointerDown,
                    pointerMove: Le.pointerMove,
                    pointerHover: Le.pointerHover,
                    events: Ge,
                    globalEvents: Ne,
                    delegatedEvents: Ce
                }
            }, ie.getTouchAverage = z, ie.getTouchBBox = T, ie.getTouchDistance = C, ie.getTouchAngle = M, ie.getElementRect = w, ie.matchesSelector = pe, ie.closest = Y, ie.margin = function(t) {
                return h(t) ? (Ae = t, ie) : Ae
            }, ie.supportsTouch = function() {
                return Oe
            }, ie.supportsPointerEvent = function() {
                return _e
            }, ie.stop = function(t) {
                for (var e = ze.length - 1; e > 0; e--) ze[e].stop(t);
                return ie
            }, ie.dynamicDrop = function(t) {
                return p(t) ? (Te = t, ie) : Te
            }, ie.pointerMoveTolerance = function(t) {
                return h(t) ? (Xe = t, this) : Xe
            }, ie.maxInteractions = function(t) {
                return h(t) ? (ke = t, this) : ke
            }, ie.createSnapGrid = function(t) {
                return function(e, i) {
                    var r = 0,
                        s = 0;
                    o(t.offset) && (r = t.offset.x, s = t.offset.y);
                    var n = Math.round((e - r) / t.x),
                        a = Math.round((i - s) / t.y);
                    return {
                        x: n * t.x + r,
                        y: a * t.y + s,
                        range: t.range
                    }
                }
            }, oe(ge), Ue in Element.prototype && a(Element.prototype[Ue]) || (de = function(t, e, i) {
                i = i || t.parentNode.querySelectorAll(e);
                for (var r = 0, s = i.length; s > r; r++)
                    if (i[r] === t) return !0;
                return !1
            }),
            function() {
                for (var e = 0, i = ["ms", "moz", "webkit", "o"], r = 0; r < i.length && !t.requestAnimationFrame; ++r) Ve = t[i[r] + "RequestAnimationFrame"], $e = t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
                Ve || (Ve = function(t) {
                    var i = (new Date).getTime(),
                        r = Math.max(0, 16 - (i - e)),
                        s = setTimeout(function() {
                            t(i + r)
                        }, r);
                    return e = i + r, s
                }), $e || ($e = function(t) {
                    clearTimeout(t)
                })
            }(), "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = ie), exports.interact = ie) : "function" == typeof define && define.amd ? define("interact", function() {
                return ie
            }) : t.interact = ie
    }(window);
var Froogaloop = function() {
        function Froogaloop(iframe) {
            return new Froogaloop.fn.init(iframe)
        }

        function postMessage(method, params, target) {
            if (!target.contentWindow.postMessage) return !1;
            var data = JSON.stringify({
                method: method,
                value: params
            });
            target.contentWindow.postMessage(data, playerOrigin)
        }

        function onMessageReceived(event) {
            var data, method;
            try {
                data = JSON.parse(event.data), method = data.event || data.method
            } catch (e) {}
            if ("ready" != method || isReady || (isReady = !0), !/^https?:\/\/player.vimeo.com/.test(event.origin)) return !1;
            "*" === playerOrigin && (playerOrigin = event.origin);
            var value = data.value,
                eventData = data.data,
                target_id = "" === target_id ? null : data.player_id,
                callback = getCallback(method, target_id),
                params = [];
            return !!callback && (value !== undefined && params.push(value), eventData && params.push(eventData), target_id && params.push(target_id), params.length > 0 ? callback.apply(null, params) : callback.call())
        }

        function storeCallback(eventName, callback, target_id) {
            target_id ? (eventCallbacks[target_id] || (eventCallbacks[target_id] = {}), eventCallbacks[target_id][eventName] = callback) : eventCallbacks[eventName] = callback
        }

        function getCallback(eventName, target_id) {
            return target_id ? eventCallbacks[target_id][eventName] : eventCallbacks[eventName]
        }

        function removeCallback(eventName, target_id) {
            if (target_id && eventCallbacks[target_id]) {
                if (!eventCallbacks[target_id][eventName]) return !1;
                eventCallbacks[target_id][eventName] = null
            } else {
                if (!eventCallbacks[eventName]) return !1;
                eventCallbacks[eventName] = null
            }
            return !0
        }

        function isFunction(obj) {
            return !!(obj && obj.constructor && obj.call && obj.apply)
        }
        var eventCallbacks = {},
            isReady = !1,
            playerOrigin = (Array.prototype.slice, "*");
        return Froogaloop.fn = Froogaloop.prototype = {
            element: null,
            init: function(iframe) {
                return "string" == typeof iframe && (iframe = document.getElementById(iframe)), this.element = iframe, this
            },
            api: function(method, valueOrCallback) {
                if (!this.element || !method) return !1;
                var self = this,
                    element = self.element,
                    target_id = "" !== element.id ? element.id : null,
                    params = isFunction(valueOrCallback) ? null : valueOrCallback,
                    callback = isFunction(valueOrCallback) ? valueOrCallback : null;
                return callback && storeCallback(method, callback, target_id), postMessage(method, params, element), self
            },
            addEvent: function(eventName, callback) {
                if (!this.element) return !1;
                var self = this,
                    element = self.element,
                    target_id = "" !== element.id ? element.id : null;
                return storeCallback(eventName, callback, target_id), "ready" != eventName ? postMessage("addEventListener", eventName, element) : "ready" == eventName && isReady && callback.call(null, target_id), self
            },
            removeEvent: function(eventName) {
                if (!this.element) return !1;
                var self = this,
                    element = self.element,
                    target_id = "" !== element.id ? element.id : null,
                    removed = removeCallback(eventName, target_id);
                "ready" != eventName && removed && postMessage("removeEventListener", eventName, element)
            }
        }, Froogaloop.fn.init.prototype = Froogaloop.fn, window.addEventListener ? window.addEventListener("message", onMessageReceived, !1) : window.attachEvent("onmessage", onMessageReceived), window.Froogaloop = window.$f = Froogaloop
    }(),
    FeatureDetector;
FeatureDetector = function() {
    function FeatureDetector(modernizr, window, browser, browserDetector) {
        this.modernizr = modernizr, this.window = window, this.browser = browser, this.browserDetector = browserDetector
    }
    return FeatureDetector.prototype.fileDragAndDrop = function() {
        return this.modernizr.draganddrop && "touch" !== this.browser && !this.browserDetector.isIE(this.window.navigator.userAgent)
    }, FeatureDetector.prototype.xhrLevel2 = function() {
        return null != window.XMLHttpRequest && null != window.ProgressEvent && null != window.FormData
    }, FeatureDetector.prototype.uploadUsingMultiple = function() {
        return this.browserDetector.isIOsUIWebView(this.window.navigator.userAgent)
    }, FeatureDetector.prototype.isNativeInputDateAvailable = function() {
        var field;
        return "default" !== this.browser && (field = document.createElement("input"), field.setAttribute("type", "date"), "date" === field.type)
    }, FeatureDetector.prototype.isAndroid = function() {
        return this.browserDetector.isAndroid(this.window.navigator.userAgent)
    }, FeatureDetector
}(), namespace("App.Utils", function(exports) {
    return exports.FeatureDetector = FeatureDetector
});
var BrowserDetector;
BrowserDetector = function() {
        function BrowserDetector() {}
        var getIOSversion;
        return getIOSversion = function(ua) {
            return parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(ua) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1
        }, BrowserDetector.isAndroid = function(ua) {
            return /(android)/.test(ua.toLowerCase())
        }, BrowserDetector.isIE = function(ua) {
            var msie, rv, trident;
            return msie = ua.indexOf("MSIE "), trident = ua.indexOf("Trident/"), msie > 0 ? null != parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10) : trident > 0 && (rv = ua.indexOf("rv:"), null != parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10))
        }, BrowserDetector.isIphone = function(ua) {
            return /(iPhone)/.test(ua)
        }, BrowserDetector.isIpad = function(ua) {
            return /(iPad)/.test(ua)
        }, BrowserDetector.isIOs = function(ua) {
            return /(iPad|iPhone|iPod)/.test(ua)
        }, BrowserDetector.isIpadAndIOsEqualOrHigherThan9 = function(ua) {
            return BrowserDetector.isIpad(ua) && getIOSversion(ua) >= 9
        }, BrowserDetector.isIOsUIWebView = function(ua) {
            return BrowserDetector.isIOs(ua) && !/Safari/.test(ua)
        }, BrowserDetector
    }(), namespace("App.Utils", function(exports) {
        return exports.BrowserDetector = BrowserDetector
    }),
    function() {
        var CookiesAdapter = function(cookies) {
            this.cookies = cookies
        };
        CookiesAdapter.prototype.getCacheType = function() {
            return this.cookies.get("varnish_cache")
        }, namespace("App.Utils", function(exports) {
            exports.CookiesAdapter = CookiesAdapter
        })
    }(),
    function() {
        var getTemplate = function(templateName, data) {
            var template = App.templates[templateName];
            if (!template) return !1;
            var tpl = _.template(template);
            return data ? tpl(data) : tpl
        };
        namespace("App.Utils", function(exports) {
            exports.getTemplate = getTemplate
        })
    }();
var ProgressBar = function(elem, totalSteps, opts) {
    var defaults = {
            mode: 0,
            text: "{{step}} of {{total}} questions answered",
            hidden: !1
        },
        options = $.extend({}, defaults, opts);
    $label = $("<div class='label'/>"), $bar = $("<div class='bar'/>"), $wrapper = $("<div class='wrapper'/>"), $progress = $("<div class='progress'/>"), $a = $("<span/>"), $b = $("<span/>"), $span = $("<span/>"), elem.append($label, $bar.append($wrapper, $progress));
    var $text = $span.clone();
    $label.append($text), this.updateTotal = function(total) {
        totalSteps = total
    }, this.updateStep = function(step) {
        var percent = parseInt(100 * step / totalSteps, 0);
        0 === options.mode ? $text.html(options.text.replace("{{step}}", step).replace("{{total}}", totalSteps)) : $text.html(options.text.replace("{{percent}}", percent)), $progress.css("width", 0 === percent ? 0 : percent + "%"), 100 == percent ? $progress.addClass("rounded") : $progress.removeClass("rounded")
    }, this.updateStep(0), this.show = function() {
        options.hidden && elem.addClass("show")
    }, this.hide = function() {
        options.hidden && elem.removeClass("show")
    }
};
$.fn.progressBar = function(totalSteps, opts) {
    return this.each(function() {
        var elem = $(this);
        if (!elem.data("progress")) {
            var progressBar = new ProgressBar(elem, totalSteps, opts);
            elem.data("progress", progressBar)
        }
    })
};
var Sanitize, sanitize, template;
sanitize = function(value) {
    var quotedString;
    return _.isString(value) ? (quotedString = JSON.stringify(value), quotedString.substring(1, quotedString.length - 1)) : value
}, template = function(template, value) {
    return template.replace("<%=a%>", sanitize(value))
}, Sanitize = {
    sanitize: sanitize,
    template: template
}, namespace("App", function(exports) {
    return exports.Sanitize = Sanitize
});
var RETRY_BUTTON_CLASS, Submit, _createRetryButton, _enableRetryButton, _updateRetryMessage;
RETRY_BUTTON_CLASS = "retry-now", _createRetryButton = function() {
        var $retryNowButton, _this = this;
        return $retryNowButton = $('<a class="' + RETRY_BUTTON_CLASS + '">'), $retryNowButton.text(App.Texts["retry-now"] || "Retry now"), $retryNowButton.on("click", function(e) {
            var button;
            button = $(e.target), button.hasClass("disabled") || (button.prop("disabled", !0).addClass("disabled"), _this.sendForm.call(_this, "retry"))
        }), $retryNowButton
    }, _enableRetryButton = function() {
        return this.$footerMessage.find("." + RETRY_BUTTON_CLASS).prop("disabled", !1).removeClass("disabled")
    }, _updateRetryMessage = function(next) {
        var message;
        return next < 1 ? message = App.Texts["retrying-submission"] || "" : (message = App.Texts["retrying-in-time-submission"] || "", message = message ? message.replace("{{NEXT_TRY}}", next) : void 0), message
    }, Submit = function() {
        function Submit($elem, stripeService, scoreCalculator, priceCalculator, numberFormatter, submitButton, submissionRepository, settings, featureService) {
            this.$elem = $elem, this.stripeService = stripeService, this.scoreCalculator = scoreCalculator, this.priceCalculator = priceCalculator, this.numberFormatter = numberFormatter, this.submitButton = submitButton, this.submissionRepository = submissionRepository, this.featureService = featureService, this.settings = $.extend({}, this.defaults, settings), this.renderButton(), this.initialize()
        }
        var _getErrorMessage, _getWarningMessage;
        return Submit.prototype.inReview = !1, Submit.prototype.lockedFailedSubmitStatus = !0, Submit.prototype.defaults = {
            blurHeight: 0,
            maxHeight: 0,
            onSuccess: function() {},
            scrollSpeed: 250,
            clickEventName: "click",
            useKeyboard: !1
        }, _getErrorMessage = function(response) {
            var candidateKey, translationKey;
            return translationKey = "generic-error", response.responseJSON && (candidateKey = response.responseJSON.error_code, App.Texts[candidateKey] && (translationKey = candidateKey)), App.Texts[translationKey]
        }, _getWarningMessage = function() {
            return App.Texts["slow-submission-on-submit"] || App.Texts["generic-error"]
        }, Submit.prototype.initialize = function() {
            return this
        }, Submit.prototype.getBrowser = function() {
            return Globals.browser
        }, Submit.prototype.getToken = function() {
            return Globals.token
        }, Submit.prototype.getLanguage = function() {
            return Globals.language
        }, Submit.prototype.getHiddenFields = function() {
            return $(document).data("hidden")
        }, Submit.prototype.disableUseFocus = function() {
            if (window.Globals) return this.cachedUseFocus = Globals.useFocus, Globals.useFocus = !1
        }, Submit.prototype.resetUseFocus = function() {
            if (window.Globals) return Globals.useFocus = this.cachedUseFocus
        }, Submit.prototype.areHiddenFieldsEnabled = function() {
            return Globals.hiddenFieldsEnabled
        }, Submit.prototype.isPro = function() {
            return Globals.accountPlan.indexOf("Pro") > -1
        }, Submit.prototype.setControls = function(controls) {
            this.controls = controls, this.numQuestions = this.controls.length, this.$footerMessage = $(".footer-message")
        }, Submit.prototype.renderButton = function() {
            this.$elem.find(".button-wrapper.submit").prepend(this.submitButton.render().$el)
        }, Submit.prototype.bindEvents = function() {
            var _this = this;
            this.settings.useKeyboard && $(document).on("keydown.footer", function(e) {
                var key;
                if (key = document.all ? e.keyCode : e.which, App.Keyboard.isEnter(key)) return _this.$elem.hasClass("review") ? _this.review() : _this.submit()
            }), this.submitButton.on(this.settings.clickEventName, this.submit), this.$reviewButton.on(this.settings.clickEventName, this.review)
        }, Submit.prototype.unbindEvents = function() {
            $(document).off(".footer"), this.$elem.off(".footer"), this.submitButton.off(this.settings.clickEventName), this.$reviewButton.off(this.settings.clickEventName)
        }, Submit.prototype.submit = function() {
            var list;
            return list = this.generateList(), this.inReview = !1, list.length ? (this.showMessage(App.Texts.review.replace(/{{NUM}}/g, list.length)), this.$footer.addClass("review"), this.$footerMessage.addClass("review")) : (!1 !== this.canSubmitForm && this.sendForm(), this.canSubmitForm = !1)
        }, Submit.prototype.sendSubmitEventToParentIfExists = function(results) {
            if (window.self !== window.parent) return window.parent.postMessage("form-submit", "*"), this.featureService.isSignupQuestionsFormEnabled() && window.parent.postMessage({
                eventName: "form-submit",
                content: results
            }, window.location.origin), window.settings && window.settings.embedCloseAfterSubmitEnabled ? window.parent.postMessage("embed-auto-close-popup", "*") : void 0
        }, Submit.prototype.review = function() {
            var id, list, self, _this = this;
            if (self = this, list = this.generateList(this.controls, this.numQuestions), id = list[0], "default" === this.getBrowser() ? $("body").removeClass("footer-error footer-submit") : $("body").removeClass("full-footer"), this.$footer.removeClass("review"), this.$footerMessage.removeClass("review"), void 0 !== id) return this.inReview = !0, this.disableUseFocus(), $(list).each(function(index, val) {
                return self.controls[val].markValidationError ? self.controls[val].markValidationError() : self.controls[val].$elem.find(".confirm > .button").addClass("red")
            }), this.resetUseFocus(), setTimeout(function() {
                if (form.scrollTo(id), "default" !== _this.getBrowser()) return setTimeout(function() {
                    return self.controls[id].validate(!1, !0, !0)
                }, 300)
            }, 100)
        }, Submit.prototype.getReview = function() {
            return this.inReview
        }, Submit.prototype.setReview = function(r) {
            return this.inReview = r
        }, Submit.prototype.generateList = function() {
            var displayedControls, i, list, self;
            for (self = this, i = 0, list = [], this.disableUseFocus(), displayedControls = _.filter(self.controls, function(control) {
                    return control.isActive && control.isVisible
                }); i < _.size(displayedControls);) displayedControls[i].validate(!1, !0, !0) || list.push(i), i++;
            return this.resetUseFocus(), list
        }, Submit.prototype.getNext = function(current) {
            var found, index, list, next, nextError;
            if (this.inReview) {
                if (list = this.generateList(), index = 0, nextError = list[index], found = !1, void 0 !== nextError)
                    for (; !found;) void 0 === nextError ? (next = list[0], found = !0) : (found = nextError > current, next = nextError), nextError = list[index++];
                else next = this.numQuestions;
                return next
            }
            return !1
        }, Submit.prototype.getFormValues = function() {
            var displayedControls, values, _this = this;
            return values = {}, displayedControls = _.filter(this.controls, function(control) {
                return control.isActive && control.isVisible
            }), _.each(displayedControls, function(control) {
                var type;
                if (!_this.isPaymentFieldChildren(control)) return type = control.type, "statement" !== type ? values[type + ":" + control.id] = control.value : void 0
            }), values
        }, Submit.prototype.isPaymentFieldChildren = function(control) {
            var parent;
            return null != (parent = control.parent) && ("function" == typeof parent.isPaymentField ? parent.isPaymentField() : void 0)
        }, Submit.prototype.onBeforeSubmit = function() {
            if (this.showSpinner(), !App.Tracking.hasConversationStarted()) return App.Tracking.startConversation()
        }, Submit.prototype.onSubmit = function() {
            return this.hideSpinner()
        }, Submit.prototype.getPriceObject = function() {
            if (null != this.getPaymentField()) return {
                stripePrice: this.numberFormatter.formatTo2Decimals(this.priceCalculator.get("total"))
            }
        }, Submit.prototype.sendForm = function(retry) {
            var completedPaymentField, data, details, self, setTokenAndSubmit, stripeErrback, submitResults, _this = this;
            null == retry && (retry = !1), self = this, data = {
                language: this.getLanguage()
            }, this.scoreCalculator.hasCalculations() && (data.score = this.numberFormatter.formatTo2Decimals(this.scoreCalculator.get("total"))), data = _.extend(data, this.getFormValues(), this.getPriceObject()), this.areHiddenFieldsEnabled() && (data.extra = this.getHiddenFields()), this.onBeforeSubmit(), submitResults = function(data) {
                var onError, onSubmissionRetry, onSubmissionTakesTooLong, onSuccess;
                return onSuccess = _.bind(function() {
                    return _this.success(App.Texts.success), _this.unlockFailedSubmit(), _this.removeWarningWhenLeavePage(), _this.sendSubmitEventToParentIfExists(data), _this.redirect()
                }, _this), onError = _.bind(function(response) {
                    return this.hideSpinner(), this.canSubmitForm = !0, this.unlockFailedSubmit(), this.removeWarningWhenLeavePage(), this.error(_getErrorMessage(response))
                }, _this), onSubmissionTakesTooLong = _.bind(function() {
                    return this.showMessageWarning(_getWarningMessage()), this.showWarningWhenLeavePage()
                }, _this), onSubmissionRetry = _.bind(function(next, enableButton) {
                    return this.showRetryMessage(next, enableButton)
                }, _this), retry ? (_this.clearRetryMessage(), _this.submissionRepository.retrySubmit(data, onSuccess, onError, onSubmissionTakesTooLong, onSubmissionRetry)) : _this.submissionRepository.submit(data, onSuccess, onError, onSubmissionTakesTooLong, onSubmissionRetry)
            }, stripeErrback = function(error) {
                return self.error(App.Texts[error.code || "processing_error"]), self.canSubmitForm = !0, self.onSubmit()
            }, setTokenAndSubmit = function(token) {
                return data.stripeToken = token, submitResults.call(_this, data)
            }, completedPaymentField = this.getCompletedPaymentField(), null != completedPaymentField ? (details = completedPaymentField.getValues(), this.stripeService.submit(details, setTokenAndSubmit, stripeErrback)) : submitResults.call(this, data)
        }, Submit.prototype.showWarningWhenLeavePage = function() {
            var message;
            if (this.canWindowBeLocked()) return message = App.Texts["warning-close-when-submitting"], window.onbeforeunload = function(e) {
                return e = e || window.event, e && (e.returnValue = message), message
            }
        }, Submit.prototype.clearRetryMessage = function() {
            return clearInterval(this.updateMessageTimeInterval), this.updateRetryMessage(0)
        }, Submit.prototype.updateRetryMessage = function(next) {
            var _this = this;
            return 0 === next ? this.$retryButton.text(_updateRetryMessage(next)) : this.updateMessageTimeInterval = setInterval(function() {
                if (next--, _this.$retryButton.text(_updateRetryMessage(next)), !next) return clearInterval(_this.updateMessageTimeInterval)
            }, 1e3)
        }, Submit.prototype.showRetryMessage = function(next, enableButton) {
            var hasButton;
            return clearInterval(this.updateMessageTimeInterval), next = Math.round(next / 1e3) - 1, this.$retryButton = this.$footerMessage.find("." + RETRY_BUTTON_CLASS), hasButton = !!this.$retryButton.length, this.$retryButton = hasButton ? this.$retryButton : _createRetryButton.call(this), hasButton || this.$footerMessage.find(".content").append(this.$retryButton), enableButton && _enableRetryButton.call(this), this.updateRetryMessage(next)
        }, Submit.prototype.removeWarningWhenLeavePage = function() {
            return window.onbeforeunload = null
        }, Submit.prototype.unlockFailedSubmit = function() {
            return this.lockedFailedSubmitStatus = !1
        }, Submit.prototype.canWindowBeLocked = function() {
            return !0 === this.lockedFailedSubmitStatus
        }, Submit.prototype.showSpinner = function() {
			checksubmit();//check and calcuate
            var $submitButton, opts;
            return $submitButton = this.$footer.find(".button-wrapper.submit"), this.$submitButtonChildren = $submitButton.children(".button"), this.buttonHtml = this.$submitButtonChildren.html(), opts = {
                lines: 12,
                length: 2.3,
                width: 2.5,
                radius: 8,
                color: this.$submitButtonChildren.css("color"),
                speed: 2.1,
                trail: 60,
                shadow: !1,
                hwaccel: !1
            }, $submitButton.find("#spin").remove(), this.$spin = $("<div id='spin'></div>"), new Spinner(opts).spin(this.$spin[0]), $submitButton.addClass("loading").append(this.$spin), this.$submitButtonChildren.css("width", this.$submitButtonChildren.width()).html("")
        }, Submit.prototype.hideSpinner = function() {
            return this.$submitButtonChildren.html(this.buttonHtml), this.$spin.remove()
        }, Submit.prototype.getPaymentField = function() {
            return _.find(this.controls, function(control) {
                return control.isPaymentField && control.isPaymentField()
            })
        }, Submit.prototype.getCompletedPaymentField = function() {
            var paymentField;
            if (null != (paymentField = this.getPaymentField()) && paymentField.isActive && paymentField.isVisible && paymentField.isFilled()) return paymentField
        }, Submit.prototype.redirect = function() {
            if (window.settings && window.settings.redirectAfterSubmitEnabled) return window.top.location.href = window.settings.redirectUrlModel.toUrl()
        }, Submit.prototype.success = function(str) {
            return $(".outro.default").find(".content .text").html(str), App.Utils.UserAnalytics.sendSubmitEvent(), this.settings.onSuccess()
        }, Submit.prototype.error = function(str) {
            this.showMessage(str)
        }, Submit
    }(), namespace("App", function(exports) {
        return exports.Submit = Submit
    }),
    function() {
        var Attachment;
        Attachment = function() {
            function buildIframeForVideoContent(src, width, height, id) {
                id = id || "";
                var $tpl = $("<iframe>");
                return $tpl.attr("width", width).attr("height", height).attr("src", src).attr("frameborder", 0).attr("webkitallowfullscreen", !0).attr("mozallowfullscreen", !0).attr("allowfullscreen", !0), id && $tpl.attr("id", id), $tpl
            }

            function loadVideoInIframe(keepIframeAlive) {
                keepIframeAlive = keepIframeAlive || !1;
                var touch = "touch" === this.settings.browser,
                    h = touch ? "100%" : this.$video.height(),
                    w = touch ? "100%" : this.$video.width(),
                    playerProvider = supportedPlayers[this.$video.data("videoSource")],
                    sourcePlayer = playerProvider.playerSrc,
                    playerId = "",
                    videoId = this.$video.data("videoId"),
                    videoURL = sourcePlayer + videoId,
                    $iframe = null;
                return playerProvider.setPlayerId && (playerId = playerProvider.name + "-player" + Math.floor(1e6 * Math.random()), videoURL += playerProvider.urlParameters + playerId), $iframe = buildIframeForVideoContent(videoURL, w, h, playerId), touch && !keepIframeAlive && this.$video.data("iframe", $iframe), this.$video.html($iframe), $iframe
            }

            function loadVimeoAsset() {
                var playerProvider = supportedPlayers.vimeo,
                    $iframe = loadVideoInIframe.call(this, !0);
                this.$video.videoController = playerProvider.apiController($iframe.get(0)), this.$video.videoController.addEvent && this.$video.videoController.addEvent("ready", function() {})
            }

            function loadYoutubeAsset() {
                var videoId = this.$video.data("videoId"),
                    h = this.$video.height(),
                    w = this.$video.width();
                "touch" === this.settings.browser ? loadVideoInIframe.call(this) : this.$video.tubeplayer({
                    width: w + "px",
                    height: h + "px",
                    wmode: "opaque",
                    iframed: !0,
                    initialVideo: videoId,
                    preferredQuality: "hd720",
                    protocol: "https",
                    onPlayerPlaying: _.bind(function() {
                        return this.$video.trigger("play")
                    }, this)
                })
            }

            function pauseVideo() {
                switch (this.$video.data("videoSource")) {
                    case "youtube":
                        "touch" === this.settings.browser ? this.$video.html("") : this.$video.tubeplayer("pause");
                        break;
                    case "vimeo":
                        this.$video.videoController && this.$video.videoController.api("pause")
                }
            }

            function Attachment($attachment, settings) {
                var obj, responsiveThreshold;
                if (this.$attachment = $attachment, this.settings = $.extend({}, defaults, settings), responsiveThreshold = "default" === this.settings.browser ? 0 : 600, this.settings.minAttachmentHeight = 200, "touch" === this.settings.browser && (this.settings.minAttachmentHeight = $(window).width() >= responsiveThreshold ? 260 : 150), obj = this.$attachment.data("attachment"), obj.image) this.attach = this.attachImage, this.type = IMAGE, this.imgLoaded = !1, this.IOSGifLayer = void 0;
                else {
                    if (!obj.video_id) return void this.$attachment.html("");
                    this.attach = this.attachVideo, this.type = VIDEO
                }
                this.attach(obj)
            }

            function resizeVideo(width, height) {
                "undefined" != typeof tubeplayer ? this.$attachment.tubeplayer("size", {
                    width: width,
                    height: height
                }) : this.$video.find("iframe").attr("width", width).attr("height", height)
            }
            var IMAGE = 0,
                VIDEO = 1,
                defaults = {
                    browser: "default",
                    useLazyLoad: !0,
                    embedVideo: !1,
                    lazyLoadImage: window.settings.baseAssetPath + "quickyformapp/images/lazy.png",
                    $question: [],
                    $description: [],
                    attachLimit: 0,
                    footerHeight: 0,
                    minAttachmentHeight: 0,
                    questionType: "",
                    preventUpdate: !1,
                    useFreezeFrame: !0
                },
                supportedPlayers = {
                    youtube: {
                        playerSrc: "//www.youtube.com/embed/",
                        loadFunction: loadYoutubeAsset
                    },
                    vimeo: {
                        playerSrc: "https://player.vimeo.com/video/",
                        loadFunction: loadVimeoAsset,
                        name: "vimeo",
                        setPlayerId: !0,
                        urlParameters: "?api=1&player_id=",
                        apiController: Froogaloop
                    }
                };
            return Attachment.prototype.attachImage = function(obj) {
                var imageHeight, imageWidth, original, _this = this;
                return this.settings.useLazyLoad ? (this.settings.lazyLoadImage, original = obj.image) : (obj.image, original = ""), imageWidth = obj.width, imageHeight = obj.height, this.$img = this.$attachment.find("img"), this.$img.attr("data-original", original), this.settings.useLazyLoad && this.$img.lazyload({
                    effect: "show",
                    event: "lazyload",
                    preventUpdate: this.settings.preventUpdate,
                    load: function() {
                        if (_this.imgLoaded = !0, _this.isAttachmentAGif() && (_this.settings.useFreezeFrame && "default" === Globals.browser && _this.applyFrezzeGif(), !0 === Globals.isIOs)) return _this.addGifToLayer()
                    }
                }), !0 === Globals.isIOs && this.isAttachmentAGif() && (this.IOSGifLayer = this.createAttachmentGifLayer()), this.$attachment.data({
                    width: imageWidth,
                    height: imageHeight
                }), this.$attachment
            }, Attachment.prototype.restartGif = function() {
                var _this = this;
                return "touch" === Globals.browser ? setTimeout(function() {
                    var src;
                    return src = _this.$img.attr("src"), _this.$img.removeAttr("src").attr("src", src), _this.$img.css({
                        opacity: 1
                    })
                }, 10) : this.$img.trigger("focusenter")
            }, Attachment.prototype.getOriginalSrc = function() {
                return this.$attachment.data().attachment.image
            }, Attachment.prototype.isAttachmentAVideo = function() {
                return this.type === VIDEO
            }, Attachment.prototype.isAttachmentAGif = function() {
                return this.type === IMAGE && "gif" === this.$img.data("original").slice(-3)
            }, Attachment.prototype.applyFrezzeGif = function() {
                return this.frezzeGif(), freezeframe.run(this.$img, this.$img.data("focus"))
            }, Attachment.prototype.frezzeGif = function() {
                return this.$img.addClass("freezeframe")
            }, Attachment.prototype.createAttachmentGifLayer = function() {
                var gifLayer;
                return gifLayer = $(".controls-gif-layer"), 0 === gifLayer.length && (gifLayer = $("<div />").addClass("controls-gif-layer")), $("body").append(gifLayer), gifLayer
            }, Attachment.prototype.addGifToLayer = function() {
                var gif;
                return gif = $("<img />"), gif.attr("src", this.$img.attr("src")), gif.css({
                    "margin-left": -(this.$img.width() - 1),
                    "margin-top": -(this.$img.height() - 1),
                    height: this.$img.height(),
                    width: this.$img.width()
                }), this.IOSGifLayer.append(gif)
            }, Attachment.prototype.attachVideo = function(obj) {
                var h, scale, w;
                this.$video = $('<div class="video">'), this.$attachment.html(this.$video), scale = "touch" === this.settings.browser ? 1 : obj.scale, obj.ratio && "undefined" != typeof obj.ratio || (obj.ratio = 1.777), w = this.$attachment.width() * scale, h = w / obj.ratio, this.$video.data({
                    width: w,
                    height: h,
                    videoId: obj.video_id,
                    videoSource: obj.video_source
                }), this.$video.css({
                    width: w,
                    height: h
                })
            }, Attachment.prototype.load = function() {
                switch (this.type) {
                    case IMAGE:
                        if (this.$img.trigger("lazyload"), this.isAttachmentAGif()) return this.isImageLoaded() ? this.restartGif() : this.$img.data("focus", !0);
                        break;
                    case VIDEO:
                        this.loadVideo();
                        break;
                    default:
                        return
                }
            }, Attachment.prototype.loadVideo = function() {
                var source = this.$video.data("videoSource"),
                    iframe = this.$video.data("iframe");
                this.$video.data("loaded") ? "touch" === this.settings.browser && iframe && this.$video.html(iframe) : (supportedPlayers[source].loadFunction.call(this), this.$video.data("loaded", !0))
            }, Attachment.prototype.triggerLazyload = function() {
                if (this.type === IMAGE && !this.isImageLoaded()) return this.$img.trigger("lazyload")
            }, Attachment.prototype.pause = function() {
                if (this.type === VIDEO) pauseVideo.call(this);
                else if (this.type === IMAGE && this.isAttachmentAGif()) return this.$img.trigger("focusleave")
            }, Attachment.prototype.precalculate = function() {
                this.questionHeight = this.settings.$question.outerHeight(!0), this.descriptionHeight = 0, this.settings.$description.length && (this.descriptionHeight = this.settings.$description.outerHeight(!0))
            }, Attachment.prototype.resize = function(windowHeight, wWidth) {
                var aHeight, aWidth, h, limit, w;
                if (aWidth = this.$attachment.data("width"), aHeight = this.$attachment.data("height"), w = aWidth, h = aHeight, w > wWidth && (w = wWidth, h = aHeight * wWidth / aWidth), limit = windowHeight - this.settings.attachLimit - this.settings.footerHeight - this.questionHeight - this.descriptionHeight, limit = Math.max(limit, this.settings.minAttachmentHeight), h > limit && (w = w * limit / h, h = limit), this.$attachment.css({
                        width: w,
                        height: h
                    }), this.type === IMAGE ? this.$img.css({
                        width: w,
                        height: h
                    }) : this.type === VIDEO && resizeVideo.call(this, w, h), "touch" === this.settings.browser) return this.$attachment.trigger("updateAuxAttachment", [w, h])
            }, Attachment.prototype.getTypeAsString = function() {
                switch (this.type) {
                    case IMAGE:
                        return "image";
                    case VIDEO:
                        return "video"
                }
            }, Attachment.prototype.isImageLoaded = function() {
                return this.imgLoaded
            }, Attachment
        }(), namespace("App", function(exports) {
            return exports.Attachment = Attachment
        })
    }.call(this);
var Keyboard;
Keyboard = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,
    isNumber: function(key) {
        return key >= 48 && key <= 57 || key >= 96 && key <= 105
    },
    isDash: function(key) {
        return 189 === key
    },
    isTab: function(key) {
        return 9 === key
    },
    isEnter: function(key) {
        return 13 === key
    },
    isSpace: function(key) {
        return 32 === key
    },
    isArrowLeft: function(key) {
        return 37 === key
    },
    isArrowUp: function(key) {
        return 38 === key
    },
    isArrowRight: function(key) {
        return 39 === key
    },
    isArrowDown: function(key) {
        return 40 === key
    },
    isShiftOnly: function(key) {
        return 16 === key
    },
    isEsc: function(key) {
        return 27 === key
    },
    isDelete: function(key) {
        return 8 === key
    },
    isSupr: function(key) {
        return 46 === key
    },
    isAlt: function(key) {
        return 18 === key
    },
    isUppercase: function(key) {
        return 20 === key
    },
    isPageUp: function(key) {
        return 33 === key
    },
    isPageDown: function(key) {
        return 34 === key
    }
}, namespace("App", function(exports) {
    return exports.Keyboard = Keyboard
});
var Banner;
Banner = function() {
        function Banner() {}
        return Banner.$el = "", Banner.template = '<div id="banner" class="step<%=containerStep%> <%=className%>">\t\t<div class="overlay"></div>\t\t<div class="persistent background"></div>\t\t<div class="persistent"></div>\t\t<div class="content">\t\t\t<div class="button-wrapper by">\t\t\t\t<span><%=text%></span>\t\t\t\t<a href="<%=url%>" target="_blank" class="button general enabled">\t\t\t\t\t<%=buttonText%>\t\t\t\t</a>\t\t\t</div>\t\t</div>', Banner.params = {
            utm_campaign: "",
            utm_source: "",
            utm_medium: "typeform",
            utm_content: "typeform-thankyou",
            utm_term: ""
        }, Banner.buildQueryParams = function(obj) {
            var k, v;
            return function() {
                var _results;
                _results = [];
                for (k in obj) v = obj[k], _results.push(k + "=" + encodeURIComponent(v));
                return _results
            }().join("&")
        }, Banner.render = function(text, buttonText, hasFooterButtonOnMobile) {
            var className, params, url;
            return /-ES|es|es-/.test(navigator.language) ? "es" : "en", params = {
                utm_campaign: Globals.uid,
                utm_source: "-" + Globals.accountId + "-" + Globals.accountPlan,
                utm_term: Globals.language.toUpperCase()
            }, url = Globals.signupPath + "?" + Banner.buildQueryParams($.extend({}, Banner.params, params)), hasFooterButtonOnMobile && (className = "banner-top"), Banner.$el = $(_.template(Banner.template, {
                containerStep: window.containerStep,
                className: className,
                text: text,
                url: url,
                buttonText: buttonText
            })), $("body").append(Banner.$el), "default" === Globals.browser && _.defer(Banner.raise), this
        }, Banner.raise = function() {
            return Banner.$el.addClass("risen")
        }, Banner
    }(), namespace("App", function(exports) {
        return exports.Banner = Banner
    }),
    function() {
        var Logic;
        Logic = function() {
            function Logic() {
                var _this = this;
                this.setPaymentField(), this.logicJumpsController.onBackwardJump = function(control) {
                    if (_this.nextCandidate = control, _this.nextCandidate.setFocus) return _this.nextCandidate.setFocus(!0, !0)
                }, this.trackedQuestions = {}
            }
            var PRELOAD_IMAGES_MAX_DEEP;
            return PRELOAD_IMAGES_MAX_DEEP = 3, Logic.prototype.controls = [], Logic.prototype.logicJumpsController = [], Logic.prototype.setPaymentField = function() {
                return this.paymentField = _.find(this.controls, function(control) {
                    return control.isPaymentField && control.isPaymentField()
                })
            }, Logic.prototype.check = function() {
                var currentControl, _this = this;
                return ("undefined" == typeof Globals || null === Globals || "field" !== Globals.parent) && (this.nextCandidate = !1, this.counter = 1, this.sub_counter = 0, null != this.scroll && (currentControl = this.scroll.getCurrentControl()) && currentControl.setValue(function() {
                    return currentControl.$elem.trigger("change-value", currentControl)
                }), this.logicJumpsController.check(0), this.setVisibilityByPipeValue(), this.scoreCalculator.evaluate(), this.priceCalculator.evaluate(), this.refreshGroups(), this.refreshPositions(), this.refresh(), _.defer(function() {
                    if (currentControl && _this.trackQuestionPassed(currentControl), _this.apiProgress) return _this.updateProgress()
                }))
            }, Logic.prototype.refresh = function() {}, Logic.prototype.setFocus = function() {}, Logic.prototype.unsetFocus = function() {}, Logic.prototype.refreshGroups = function() {
                var groups, _this = this;
                groups = _.filter(this.controls, function(control) {
                    return "group" === control.type
                }), _.each(groups, function(group) {
                    var childs, is_active, is_visible;
                    if (childs = _.filter(_this.controls, function(control) {
                            return null != control.parent && control.parent.id === group.id
                        }), is_active = _.any(childs, function(child) {
                            return child.isActive
                        }), is_visible = _.any(childs, function(child) {
                            return child.isVisible
                        }), is_active && group.set("isActive", !0), is_visible && group.set("isVisible", !0), group.connect && is_active && is_visible && !group.has_button) return group.connect.$elem.removeClass("first"), group.connect = _.find(childs, function(child) {
                        return child.isActive && child.isVisible
                    }), group.connect.$elem.addClass("first")
                })
            }, Logic.prototype.refreshPositions = function() {
                var _this = this;
                _.each(this.controls, function(control) {
                    return !(!control.isActive || !control.isVisible) && ("statement" !== control.type && (null != control.parent ? control.set("index", App.Utils.getLetter(_this.sub_counter++) + ".") : control.set("index", _this.counter++)), "group" === control.type ? _this.sub_counter = 0 : void 0)
                })
            }, Logic.prototype.setVisibilityByPipeValue = function() {
                var show;
                return show = !0, _.chain(this.controls).filter(function(control) {
                    return control.isActive
                }).each(function(control) {
                    return show = show && control.question.isReadyForRender() && control.description.isReadyForRender(), control.set("isVisible", show), show
                })
            }, Logic.prototype.next = function(delay, check) {
                var current, displayedControls, nextCandidateIndex, _this = this;
                null == delay && (delay = !1), null == check && (check = !0), delay && (delay = this.scroll.settings["fast" === delay ? "delayAutoScrollFast" : "delayAutoScroll"]), current = this.scroll.getCurrent(), this.scroll.getCurrentControl().setValue(), displayedControls = _.filter(this.controls, function(control) {
                    return control.isActive && control.isVisible
                }), check && this.check(), nextCandidateIndex = current + 1, this.nextCandidate && (nextCandidateIndex = _.indexOf(displayedControls, this.nextCandidate)), this.scroll.getCurrentControl().validate(function() {
                    var afterControls;
                    return typeform.Form.footer.inReview ? (afterControls = _.rest(displayedControls, current), _.every(afterControls, function(control, index) {
                        var valid = control.validate(!1, !0);
                        return valid || _.delay(function() {
                            return _this.scroll.scrollTo(current + index, null, null, !0)
                        }, delay), valid
                    }) ? _this.scroll.scrollToFooter(!0) : void 0) : _.delay(function() {
                        return _this.scroll.scrollTo(nextCandidateIndex)
                    }, delay)
                })
            }, Logic.prototype.isControlInvolved = function(control) {
                return control.isActive && "statement" !== control.type && "group" !== control.type
            }, Logic.prototype.updateProgress = function() {
                var i, involved_controls, num_involved_controls, total;
                for (total = 0, i = 0, involved_controls = _.filter(this.controls, this.isControlInvolved), num_involved_controls = _.size(involved_controls), this.apiProgress.updateTotal(num_involved_controls); i < num_involved_controls;) involved_controls[i].done && involved_controls[i].isCompleted && total++, i++;
                this.apiProgress.updateStep(total)
            }, Logic.prototype.trackQuestionPassed = function(control) {
                var isPassed = this.isControlInvolved(control) && control.done && control.isCompleted,
                    isAlreadyTracked = !!this.trackedQuestions[control.id];
                if (isPassed && !isAlreadyTracked) {
                    var formField = _.find(window.serializedForm.fields, function(field) {
                        return field.id === control.id
                    });
                    this.trackedQuestions[control.id] = !0, formField || (formField = control.model.attributes), App.Utils.UserAnalytics.sendQuestionPassedEvent(formField.label)
                }
            }, Logic.prototype.getPaymentField = function() {
                return this.paymentField
            }, Logic.prototype.getControlById = function(controlId) {
                return _.findWhere(this.controls, {
                    id: controlId
                })
            }, Logic.prototype.getControlIndex = function(controlId) {
                return _.indexOf(this.controls, _.findWhere(this.controls, {
                    id: controlId
                }))
            }, Logic.prototype.getNextControl = function(controlId) {
                return this.controls[this.getControlIndex(controlId) + 1]
            }, Logic.prototype.preloadNextVisibleImages = function(control, deep) {
                var possibleDestinations, _this = this;
                if (null == deep && (deep = 0), !(deep > PRELOAD_IMAGES_MAX_DEEP || void 0 === control)) return possibleDestinations = this.getDestinations(control.id), _.each(possibleDestinations, function(control) {
                    return _this.preloadNextVisibleImages(control, deep + 1)
                }), this.preloadControlImages(control)
            }, Logic.prototype.getDestinations = function(controlId) {
                var destinations;
                return destinations = [], this.addDestinationsByNextBehaviour(destinations, controlId), this.addDestinationsByJumps(destinations, controlId), destinations
            }, Logic.prototype.addDestinationsByNextBehaviour = function(possibleDestinations, controlId) {
                var next;
                if (null != (next = this.getNextControl(controlId))) return possibleDestinations.push(next)
            }, Logic.prototype.addDestinationsByJumps = function(possibleDestinations, controlId) {
                var jumps, _this = this;
                return jumps = this.logicJumpsController.getOutgoing(controlId), _.each(jumps, function(jump) {
                    var destinationControl, destinationId;
                    if (destinationId = jump.get("destination").id, !_this.isBackwardJump(controlId, destinationId)) return destinationControl = _this.getControlById(destinationId), possibleDestinations.push(destinationControl)
                })
            }, Logic.prototype.isBackwardJump = function(originId, destinationId) {
                return this.getControlIndex(destinationId) < this.getControlIndex(originId)
            }, Logic.prototype.preloadControlImages = function(control) {
                if (null != control) return "list-image" === control.type ? control.triggerLazyload() : control.attachment && control.attachment.triggerLazyload(), control
            }, Logic
        }(), namespace("App", function(exports) {
            return exports.Logic = Logic
        })
    }.call(this);
var Header, HeaderModel, SubHeader, _ref, _ref1, _ref2, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
HeaderModel = function(_super) {
    function HeaderModel() {
        return _ref = HeaderModel.__super__.constructor.apply(this, arguments)
    }
    return __extends(HeaderModel, _super), HeaderModel.prototype.defaults = {
        type: "default",
        item: "",
        question: "",
        attachment: null,
        state: "default",
        showStripeBanner: !1
    }, HeaderModel
}(Backbone.Model), Header = function(_super) {
    function Header() {
        return _ref1 = Header.__super__.constructor.apply(this, arguments)
    }
    return __extends(Header, _super), Header.prototype.tagName = "div", Header.prototype.className = "header", Header.prototype.template = '<div class="content"><div class="close">×</div><div class="content-wrapper"><div class="question-wrap"><div class="item"><span></span></div> <div class="question"><a class="stripe-logo" href="http://www.stripe.com" target="_blank"></a><div class="attachment"></div><span></span></div><div class="clear"></div></div> <div class="full-content"><div class="description"></div><div class="attachment"></div></div></div></div> <div class="overlay"></div> <div class="persistent background"></div> <div class="persistent"></div><div class="smooth-break"></div>', Header.prototype.height = 55, Header.prototype.is_open = !1, Header.prototype.properties = {
        heights: {
            "default": 55,
            group: 100
        },
        one_line_threshold: 35,
        two_lines_threshold: 60,
        more_than_three_lines_threshold: 80,
        min_attachment_height: 120,
        inner_padding: 15,
        padding_bottom: 40
    }, Header.prototype.initialize = function(params) {
        return this.observer = params.observer, this.$el.html(this.template), this.$el.addClass("step" + window.containerStep), this.hide(), this.setEvents(), this
    }, Header.prototype.setEvents = function() {
        var click_event, _this = this;
        click_event = "touch" === Globals.browser ? "touchend" : "click", this.listenTo(this.model, "change:item", this.renderItem), this.listenTo(this.model, "change:question", this.renderQuestion), this.listenTo(this.model, "change:attachment", this.renderAttachment), this.listenTo(this.model, "change:description", this.renderDescription), this.listenTo(this.model, "change:showStripeBanner", this.renderStripeBanner), this.listenTo(this.model, "change:type", this.setType), this.listenTo(this.model, "change:state", this.setState), $(window).on("resize", function() {
            return _this.model.set("state", "default")
        }), this.$el.on(click_event, ".close", function(e) {
            return _this.reset(), !1
        }), this.$el.on("thumbnail-hide", function() {
            _this.$el.removeClass("thumbnail-show"), _this.resize()
        }), this.$el.on("thumbnail-show", function() {
            "group" === _this.model.attributes.type && (_this.$el.addClass("thumbnail-show"), _this.resize())
        })
    }, Header.prototype.render = function() {
        return this.setType(), this.renderItem(), this.renderQuestion(), this.renderAttachment(), this.renderStripeBanner(), this.$el
    }, Header.prototype.setType = function() {
        this.$el.alterClass("type-*", "type-" + this.model.attributes.type), this.height = "group" === this.model.attributes.type ? this.getProperty("heights", "group") : this.getProperty("heights", "default")
    }, Header.prototype.setState = function() {
        this.$el.alterClass("state-*", "state-" + this.model.attributes.state), this.resize(), "full" === this.model.attributes.state ? (this.$el.css({
            height: $(window).height() + 40
        }), $("body").addClass("scroll-disable")) : (this.$el.css({
            height: this.height
        }), $("body").removeClass("scroll-disable"))
    }, Header.prototype.isOpenable = function() {
        return "group" === this.model.attributes.type && !this.model.get("showStripeBanner") && ("n" === this.lines || null != this.model.attributes.description || this.model.attributes.attachment)
    }, Header.prototype.reset = function() {
        this.height = this.getProperty("heights", this.model.attributes.type), this.$el.css({
            height: this.height
        }), this.model.set({
            state: "default"
        })
    }, Header.prototype.renderItem = function() {
        this.$item || (this.$item = this.$el.find(".item > span")), this.$item.html(this.model.attributes.item)
    }, Header.prototype.renderQuestion = function() {
        this.$question || (this.$question = this.$el.find(".question")), this.$question.children("span").html(this.model.attributes.question)
    }, Header.prototype.renderStripeBanner = function() {
        this.$stripeBanner || (this.$stripeBanner = this.$el.find(".stripe-logo")), this.$stripeBanner.html(_.template(_.unescape(App.Texts.payment_description_stripe), {
            logo: $("#stripe-logo").html()
        })), this.model.get("showStripeBanner") ? this.$stripeBanner.show() : this.$stripeBanner.hide()
    }, Header.prototype.renderDescription = function() {
        var description;
        this.$description || (this.$description = this.$el.find(".description")), description = this.model.attributes.description, this.$description.html(description || ""), "group" !== this.model.get("type") || null == description || this.model.get("showStripeBanner") ? this.$description.hide() : this.$description.show()
    }, Header.prototype.renderAttachment = function() {
        var $img, attachment;
        attachment = this.model.attributes.attachment, this.$attachment || (this.$attachment = this.$el.find(".attachment")), this.$attachment.empty(), !attachment || "group" !== this.model.get("type") || attachment.isAttachmentAGif() || attachment.isAttachmentAVideo() || ($img = $("<img/>"), $img.attr("src", attachment.getOriginalSrc()), $img.css("height", this.height - 20), this.$attachment.html($img))
    }, Header.prototype.show = function() {
        return this.is_open = !0, this.resize(), this.isOpenable() ? this.$el.addClass("openable") : this.$el.removeClass("openable"), this.$el.css({
            height: this.height,
            top: -1
        }), this
    }, Header.prototype.hide = function() {
        return this.is_open = !1, this.$el.css({
            height: this.height
        }), this.$el.css({
            top: -this.height - 60
        }), this
    }, Header.prototype.getProperty = function(a, b) {
        return _.isUndefined(b) ? this.properties[a] : this.properties[a][b]
    }, Header.prototype.resize = function() {
        var attachment, attachment_height, attachment_width, container_width, description_height, h, paddings, question_height, w, window_height;
        this.$el.addClass("resizing"), question_height = this.$question.children("span").height(), null == this.$questionWrap && (this.$questionWrap = this.$el.find(".question-wrap")), "default" === this.model.attributes.state ? (question_height = this.$question.children("span").height(), this.$questionWrap.css({
            marginTop: 0
        }), this.lines = "one", question_height > this.getProperty("one_line_threshold") && (this.lines = "two", question_height > this.getProperty("two_lines_threshold") && (this.lines = "three", question_height > this.getProperty("more_than_three_lines_threshold") && (this.lines = "n"))), this.$el.alterClass("*-lines", this.lines + "-lines")) : "full" === this.model.attributes.state && (question_height = this.$question.height(), window_height = $(window).height(), container_width = this.$el.find(".full-content").width(), description_height = null != this.$description ? this.$description.outerHeight(!0) : 0, attachment = this.model.attributes.attachment, attachment_width = null !== attachment && attachment.$img ? attachment.$img[0].width : 0, attachment_height = null !== attachment && attachment.$img ? attachment.$img[0].height : 0, w = Math.min(attachment_width, container_width), h = attachment_height * w / attachment_width, _.isNaN(h) && (h = 0), question_height + description_height + h > window_height ? (h = Math.max(this.getProperty("min_attachment_height"), window_height - question_height - description_height - this.getProperty("padding_bottom")), this.$el.css({
            paddingTop: 0
        })) : (paddings = this.getProperty("inner_padding"), this.$attachment && (paddings += this.getProperty("inner_padding")), description_height > 0 && (paddings += this.getProperty("inner_padding")), this.$questionWrap.css({
            marginTop: Math.max(0, (window_height - question_height - description_height - h - paddings - this.getProperty("padding_bottom")) / 2)
        })), this.$attachment && this.$el.find(".full-content").find("img").css({
            height: h,
            width: h / attachment_height * attachment_width
        })), this.$el.removeClass("resizing")
    }, Header
}(Backbone.View), SubHeader = function(_super) {
    function SubHeader() {
        return _ref2 = SubHeader.__super__.constructor.apply(this, arguments)
    }
    return __extends(SubHeader, _super), SubHeader.prototype.tagName = "div", SubHeader.prototype.className = "header sub",
        SubHeader.prototype.template = '<div class="content"> <div class="content-wrapper"><div class="item"><span></span></div> <div class="question"><span></span></div> </div></div> <div class="overlay"></div> <div class="persistent background"></div> <div class="persistent"></div>', SubHeader.prototype.height = 70, SubHeader.prototype.initialize = function() {
            return this.hide(), SubHeader.__super__.initialize.apply(this, arguments), this
        }, SubHeader.prototype.show = function() {
            return this.$el.addClass("show"), this
        }, SubHeader.prototype.hide = function() {
            return this.$el.removeClass("show"), this
        }, SubHeader
}(Header), namespace("App", function(exports) {
    return exports.HeaderModel = HeaderModel, exports.Header = Header, exports.SubHeader = SubHeader
});
var TextView, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
TextView = function(_super) {
    function TextView() {
        return _ref = TextView.__super__.constructor.apply(this, arguments)
    }
    var UNAVAILABLE_VALUE, fillUnavailableVariables, getControlById, getVarsWhereEmitterIsNotAvailable, isEmitterAvailable, isEmitterBeforeConsumer, isFilled;
    return __extends(TextView, _super), TextView.prototype.template = "", TextView.prototype.controls = [], TextView.prototype.templateSettings = {
        interpolate: /\{\{([a-zA-Z0-9_ ]+)\}\}/g
    }, UNAVAILABLE_VALUE = "_____", TextView.prototype.initialize = function(options) {
        return this.template = options.template || "", this.controls = options.controls, this.textModel = this.createModel(this.getUsedVars(this.template)), this.listenTo(this.textModel, "change", this.render), this
    }, TextView.prototype.setTemplate = function(template) {
        return this.template = template, this.updateModel(this.textModel, this.getUsedVars(this.template)), this.render()
    }, TextView.prototype.createModel = function(array) {
        var vars;
        return vars = _.object(array, []), new Backbone.Model(vars)
    }, TextView.prototype.updateModel = function(model, array) {
        return _.each(array, function(varname) {
            if (null == model.attributes[varname]) return model.set(varname, void 0)
        }), model
    }, TextView.prototype.isReadyForRender = function() {
        return fillUnavailableVariables.call(this), _.every(this.textModel.attributes, isFilled)
    }, TextView.prototype.getUsedVars = function(sentence) {
        return sentence.match(/[^[\{{][a-zA-Z0-9_]+(?=}})/g)
    }, TextView.prototype.getText = function() {
        return _.template(this.template, this.textModel.toJSON(), this.templateSettings)
    }, TextView.prototype.render = function() {
        return this.$el.html(this.getText()), this.$el
    }, isFilled = function(value) {
        return !("" === value || _.isNull(value) || _.isUndefined(value))
    }, fillUnavailableVariables = function() {
        var unavailableVars, _this = this;
        return unavailableVars = getVarsWhereEmitterIsNotAvailable.call(this), _.each(unavailableVars, function(value, key) {
            return _this.textModel.set(key, UNAVAILABLE_VALUE)
        })
    }, getVarsWhereEmitterIsNotAvailable = function() {
        var _this = this;
        return _.pick(this.textModel.attributes, function(value, key) {
            var controlId, emitter, varType;
            return varType = key.split("_")[0], controlId = key.split("_")[1], emitter = getControlById.call(_this, controlId), "answer" === varType && !isEmitterAvailable.call(_this, emitter)
        })
    }, getControlById = function(controlId) {
        return _.find(this.controls, function(control) {
            return control.id == controlId
        })
    }, isEmitterAvailable = function(emitter) {
        return emitter && isEmitterBeforeConsumer.call(this, emitter)
    }, isEmitterBeforeConsumer = function(emitter) {
        return _.indexOf(this.controls, this.options.consumerControl) > _.indexOf(this.controls, emitter)
    }, TextView
}(Backbone.View), namespace("App", function(exports) {
    return exports.TextView = TextView
});
var TextConnector, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments)
    }
};
TextConnector = function() {
    function TextConnector(options) {
        this.setupScreenView = __bind(this.setupScreenView, this), this.setupFieldView = __bind(this.setupFieldView, this), this.options = $.extend({}, this.defaults, options), this.hiddenFields = this.options.hiddenFields, this.connect()
    }
    return TextConnector.prototype.hiddenFields = {}, TextConnector.prototype.defaults = {
        scoreCalculator: null,
        priceCalculator: null,
        currencyFormatter: null,
        appSettings: [],
        form: [],
        intro: null,
        outros: null,
        selectors: {
            terms: "scroll-area"
        }
    }, TextConnector.prototype.getHiddenFields = function() {
        return this.hiddenFields.getAll()
    }, TextConnector.prototype.connect = function() {
        this.connectFields(), this.connectIntro(), this.connectOutros(), this.connectRedirectAfterSubmitUrl()
    }, TextConnector.prototype.connectFields = function() {
        var _this = this;
        _.each(this.options.form.controls, function(control) {
            if (control.isEmitter = !1, _this.setupFieldView({
                    control: control,
                    view: "question"
                }), _this.setupModel(control.question.textModel), _this.setupFieldView({
                    control: control,
                    view: "description"
                }), _this.setupModel(control.description.textModel), "terms" === control.type) return _this.setupFieldView({
                control: control,
                view: _this.options.selectors.terms
            }), _this.setupModel(control[_this.options.selectors.terms].textModel)
        })
    }, TextConnector.prototype.connectIntro = function() {
        null != this.options.intro && (this.setupScreenView({
            control: this.options.intro,
            view: "text",
            type: "intro"
        }), this.setupModel(this.options.intro.text.textModel), this.setupScreenView({
            control: this.options.intro,
            view: "description",
            type: "intro"
        }), this.setupModel(this.options.intro.description.textModel))
    }, TextConnector.prototype.connectOutros = function() {
        var _this = this;
        null != this.options.outros && _.each(this.options.outros, function(outro, index) {
            return _this.setupScreenView({
                control: outro,
                view: "text",
                type: "outro"
            }), _this.setupModel(outro.text.textModel), _this.setupModel(outro.getUrlModel())
        })
    }, TextConnector.prototype.connectRedirectAfterSubmitUrl = function() {
        if (window.settings && window.settings.redirectAfterSubmitEnabled) return this.setupModel(window.settings.redirectUrlModel)
    }, TextConnector.prototype.setupModel = function(model) {
        var vars, _this = this;
        vars = _.keys(model.attributes), _.each(vars, function(varname) {
            var variable;
            variable = new App.Utils.Variable(varname), variable.setup(model, _this.options.form, _this.hiddenFields.getAll(), _this.options.scoreCalculator, _this.options.priceCalculator, _this.options.currencyFormatter, _this.options.numberFormatter)
        })
    }, TextConnector.prototype.setupView = function(options) {
        var control;
        control = options.control, control[options.view] = new App.TextView({
            el: options.selector,
            template: options.template,
            controls: this.options.form.controls,
            consumerControl: control
        }), control[options.view].render()
    }, TextConnector.prototype.setupFieldView = function(options) {
        this.setupView(_.extend(options, {
            selector: "#" + options.control.id + "." + options.control.type + " ." + options.view,
            template: options.control.$elem.find("." + options.view).html()
        }))
    }, TextConnector.prototype.setupScreenView = function(options) {
        var id, selector;
        id = options.control.$screen.attr("id"), selector = "", null != id && "" !== id && (selector = "#" + id), selector += "." + options.type + " ." + options.view, this.setupView(_.extend(options, {
            selector: selector,
            template: options.control.$screen.find("." + options.view).html()
        }))
    }, TextConnector
}(), namespace("App", function(exports) {
    return exports.TextConnector = TextConnector
});
var ControlsFactory, __slice = [].slice;
ControlsFactory = function() {
    function ControlsFactory(fieldsData, browser, currencyFormatter, priceCalculator, featureDetection, settings, numberFormatter, stripeService) {
        this.fieldsData = fieldsData, this.browser = browser, this.currencyFormatter = currencyFormatter, this.priceCalculator = priceCalculator, this.featureDetection = featureDetection, this.settings = settings, this.numberFormatter = numberFormatter, this.stripeService = stripeService
    }
    return ControlsFactory.prototype.build = function() {
        var args;
        return args = 1 <= arguments.length ? __slice.call(arguments, 0) : [],
            function() {
                switch (this.browser) {
                    case "default":
                        return this.buildDefault.apply(this, args);
                    case "touch":
                        return this.buildTouch.apply(this, args);
                    case "fallback":
                        return this.buildFallback.apply(this, args)
                }
            }.call(this)
    }, ControlsFactory.prototype.getFieldData = function(id) {
        return _.findWhere(this.fieldsData, {
            id: id
        })
    }, ControlsFactory.prototype.buildControl = function($el, fieldDataFromDom, templates, confirmButton) {
        var control, fieldData, fieldDataFromJSON, model, type;
        return fieldDataFromJSON = this.getFieldData(fieldDataFromDom.id), fieldData = fieldDataFromJSON || fieldDataFromDom, type = fieldDataFromDom.type, "opinion-scale" === type || "file-upload" === type || "date" === type || "ranking" === type ? (control = this.buildControlUsingFactory($el, type, fieldData, confirmButton), $el.data("control", control)) : (model = new Backbone.Model(fieldDataFromDom), "group" === type ? (control = this.buildControlUsingGroupClass($el, model, templates), $el.data("control", control)) : control = this.buildControlUsingJqueryPlugin($el), control.model = model, control.isActive = !1, control.id = fieldData.id, control.$elem = $el, control.type = type, control.parent = $el.siblings("#" + $el.data("parent")).data("control"), control.description = $el.find(".description").html()), control
    }, ControlsFactory.prototype.buildControlUsingFactory = function($el, type, fieldData, confirmButton) {
        return new App.Control($el, fieldData, this.featureDetection, this.settings, confirmButton)
    }, ControlsFactory.prototype.buildControlUsingJqueryPlugin = function($el) {
        return $el.data("control")
    }, ControlsFactory.prototype.buildControlUsingGroupClass = function($el, model, templates) {
        return new App.Control.Group($el, model, templates, this.currencyFormatter, this.priceCalculator, this.numberFormatter)
    }, ControlsFactory.prototype.buildDefault = function($controls, confirmButton, scroll, templates, footer) {
        var commonOptions;
        return commonOptions = {
            confirmButton: confirmButton
        }, $controls.filter(".statement").statement(commonOptions), $controls.filter(".textfield").textfield(commonOptions), $controls.filter(".textarea").textarea(commonOptions), $controls.filter(".number").textfield(commonOptions), $controls.filter(".list").list(commonOptions), $controls.filter(".list-image").list(commonOptions), $controls.filter(".yes-no").yesNo(commonOptions), $controls.filter(".terms").terms(commonOptions), $controls.filter(".email").textfield(commonOptions), $controls.filter(".website").textfield(commonOptions), $controls.filter(".card-number").stripeElement(_.extend({}, commonOptions, {
            stripeService: this.stripeService,
            type: "card-number"
        })), $controls.filter(".card-expiry").stripeElement(_.extend({}, commonOptions, {
            stripeService: this.stripeService,
            type: "card-expiry"
        })), $controls.filter(".card-cvc").stripeElement(_.extend({}, commonOptions, {
            stripeService: this.stripeService,
            type: "card-cvc"
        })), $controls.filter("li[id$='creditCardName']").textfield(commonOptions), $controls.filter(".rating").rating(commonOptions), $controls.filter(".dropdown").dropdown(_.extend({}, commonOptions, {
            awesomise: !0,
            Scroll: scroll
        })), this.buildControls($controls, templates, footer, confirmButton)
    }, ControlsFactory.prototype.buildTouch = function($controls, confirmButton, scroll, templates, footer) {
        return $controls.filter(".statement").statement(), $controls.filter(".textfield").textfield(), $controls.filter(".textarea").textarea(), $controls.filter(".number").textfield(), $controls.filter(".list").list({
            confirmButton: confirmButton
        }), $controls.filter(".list-image").list({
            confirmButton: confirmButton
        }), $controls.filter(".yes-no").yesNo(), $controls.filter(".terms").terms(), $controls.filter(".email").textfield(), $controls.filter(".website").textfield(), $controls.filter(".card-number").stripeElement({
            stripeService: this.stripeService,
            type: "card-number"
        }), $controls.filter(".card-expiry").stripeElement({
            stripeService: this.stripeService,
            type: "card-expiry"
        }), $controls.filter(".card-cvc").stripeElement({
            stripeService: this.stripeService,
            type: "card-cvc"
        }), $controls.filter("li[id$='creditCardName']").textfield(), $controls.filter(".rating").rating(), $controls.filter(".dropdown").dropdown({
            awesomise: !1
        }), this.buildControls($controls, templates, footer, confirmButton)
    }, ControlsFactory.prototype.buildControls = function($controls, templates, footer, confirmButton) {
        var controls, _this = this;
        return controls = [], $controls.each(function(i, el) {
            var $el, control;
            return $el = $(el), control = _this.buildControl($el, $el.data("model"), templates, confirmButton), _this.createParentConnections(control), _this.addAttachment(control, footer), control.init(), controls.push(control)
        }), controls
    }, ControlsFactory.prototype.createParentConnections = function(control) {
        null != control.parent && (control.$elem.addClass("sub-question"), "touch" === this.browser && control.parent.isPaymentField() && (control.parent.button = "", control.parent.has_button = !0)), null != control.parent && (control.parent.addSubquestion(control), control.parent.has_button || (control.connect = control.parent, control.$elem.addClass("connected"), control.parent.$elem.addClass("connected"), null == control.parent.connect && (control.parent.connect = control, control.$elem.addClass("first")))), "default" === this.browser && ("group" !== control.type || control.has_button || control.$elem.addClass("connected"))
    }, ControlsFactory.prototype.addAttachment = function(control, footer) {
        var $attachment, format;
        $attachment = control.$elem.find(".attachment"), $attachment.length ? (format = "touch" === this.browser ? Globals.isMobile ? "small" : "large" : "default", control.attachment = new App.Attachment($attachment, {
            $question: control.$elem.find(".question"),
            $description: control.$elem.find(".description"),
            attachLimit: control.attachLimit[format],
            footerHeight: footer.get("blurHeight"),
            questionType: control.type,
            browser: this.browser,
            preventUpdate: !0
        })) : control.attachment = !1
    }, ControlsFactory.prototype.buildFallback = function($fields) {
        var controls, fieldTypes, self, _this = this;
        return self = this, controls = [], fieldTypes = {
            textfield: App.Textfield,
            textarea: App.Textarea,
            number: App.Number,
            email: App.Email,
            website: App.Website,
            list: App.List,
            "list-image": App.ListImage,
            "yes-no": App.YesNo,
            rating: App.Rating,
            terms: App.Terms,
            dropdown: App.Dropdown,
            statement: App.Statement,
            group: App.Group
        }, $fields.each(function(i, el) {
            var $field, control, fieldData, fieldId, parentControl, parentID, _ref;
            if ($field = $(el), fieldId = $field.attr("id"), fieldData = _this.getFieldData(fieldId.split("_")[0]), null == fieldData || "opinion-scale" !== (_ref = fieldData.type) && "file-upload" !== _ref && "date" !== _ref || (control = _this.buildControlUsingFactory($field, fieldData.type, fieldData)), $.each(fieldTypes, function(fieldType, Class) {
                    if ($field.hasClass(fieldType)) return control = "group" === fieldType ? new Class($field, self.currencyFormatter, self.priceCalculator) : new Class($field)
                }), (null != fieldId ? fieldId.match("creditCardNumber") : void 0) && control.setCustomValidator(App.validation.creditCardNumber), (null != fieldId ? fieldId.match("creditCardCvc") : void 0) && control.setCustomValidator(App.validation.creditCardCvc), null != control) return parentID = control.parent, parentControl = _.find(controls, function(control) {
                return control.id === parentID && parentID
            }), null != parentControl && parentControl.addSubquestion(control), control.parent = parentControl, controls.push(control)
        }), controls
    }, ControlsFactory
}(), namespace("App", function(exports) {
    return exports.ControlsFactory = ControlsFactory
});
var Control, minFieldHeight, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments)
    }
};
minFieldHeight = {
    "opinion-scale": {
        "default": 180,
        large: 180,
        small: 140
    },
    "file-upload": {
        "default": 0,
        large: 0,
        small: 0
    },
    date: {
        "default": 180,
        large: 170,
        small: 155
    },
    ranking: {
        "default": 180,
        large: 170,
        small: 155
    }
}, Control = function() {
    function Control($el, fieldData, featureDetection, settings, confirmButton) {
        this.$el = $el, this.settings = settings, this.confirmButton = confirmButton, this.markValidationError = __bind(this.markValidationError, this), this.field = buildField.call(this, fieldData, this.settings, featureDetection), this.attachPropertiesForUseInLegacy(fieldData), this.$question = this.$el.find(".question > span"), this.$index = this.$el.find(".item > span"), this.error = form.error || App.Error, this.$confirmButton = this.$el.find(".confirm"), this.field.render(this.$el.find(".control")), this.field.onChangeValue(_.bind(this.onChange, this)), this.field.onChangeError(_.bind(this.onChangeError, this)), this.field.subscribeOnValueIsFilled(_.bind(checkConfirmButtonVisibility, this)), "field" === this.settings.parent && this.model.on("change:question", this.renderQuestion, this), this.$el.on("focus", "input", _.bind(onInputFocus, this)), this.$el.on("blur", "input", _.bind(onInputBlur, this)), this.$confirmButton.length && this.$confirmButton.on("click touchend", _.bind(onComplete, this))
    }
    var buildField, checkConfirmButtonVisibility, doAutoScroll, onComplete, onInputBlur, onInputFocus, triggerValueChange, updateValue;
    return Control.prototype.$index = null, Control.prototype.$question = null, Control.prototype.isActive = !1, Control.prototype.isVisible = null, Control.prototype.id = null, Control.prototype.type = null, Control.prototype.parent = null, Control.prototype.description = null, Control.prototype.$elem = null, Control.prototype.value = null, Control.prototype.pipeValue = "", Control.prototype.isCompleted = !1, Control.prototype.required = !1, Control.prototype.done = !1, Control.prototype.confirmText = "default", Control.prototype.attachLimit = null, checkConfirmButtonVisibility = function() {
        if (this.$confirmButton.length) return this.confirmButton.check(this.field.isFilled(), this.$confirmButton, this.$el)
    }, onComplete = function() {
        var _base;
        return ("function" == typeof(_base = this.field).onComplete ? _base.onComplete() : void 0) && "function" == typeof form.autoNext && form.autoNext(!0), updateValue.call(this), typeform.Form.check(), doAutoScroll.call(this)
    }, updateValue = function() {
        var valueObj;
        return valueObj = this.field.getValue(), this.value = valueObj.toResult(), this.pipeValue = valueObj.toString(), this.isCompleted = this.field.isFilled(), triggerValueChange.call(this)
    }, buildField = function(fieldData, settings, featureDetection) {
        var factory;
        switch (factory = null, fieldData.type) {
            case "opinion-scale":
                factory = App.factories.OpinionScaleFactory;
                break;
            case "file-upload":
                factory = App.factories.FileUploadFactory;
                break;
            case "date":
                factory = App.factories.DateFactory;
                break;
            case "ranking":
                factory = App.factories.RankingFactory
        }
        return App.fieldFactory(fieldData, settings, featureDetection, factory)
    }, Control.prototype.getFieldModel = function() {
        return this.model
    }, Control.prototype.attachPropertiesForUseInLegacy = function(fieldData) {
        this.$elem = this.$el, this.model = new Backbone.Model(fieldData), this.id = fieldData.id, this.type = fieldData.type, this.parent = this.$el.siblings("#" + this.$el.data("parent")).data("control"), this.description = this.$el.find(".description").html(), this.attachLimit = minFieldHeight[this.type]
    }, Control.prototype.onChange = function(valueObj) {
        this.error.hide(this.$el), onComplete.call(this), "fallback" === this.settings.browser && this.setFocus()
    }, Control.prototype.getValueForLogicJumps = function() {
        return this.field.getValueForLogicJumps()
    }, Control.prototype.getValueForCalculator = function() {
        return this.field.getValueForCalculator()
    }, Control.prototype.subscribeOnValueForCalculatorChange = function(callback) {
        return this.field.subscribeOnValueForCalculatorChange(callback)
    }, Control.prototype.subscribeOnValueForPipingChange = function(callback) {
        return this.field.subscribeOnValueForPipingChange(callback)
    }, Control.prototype.init = function() {}, Control.prototype.set = function(attr, value) {
        this[attr] = value, "isActive" === attr || "isVisible" === attr ? this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active") : "index" === attr && value && this.$index.html(value)
    }, Control.prototype.bindEvents = function() {
        this.field.focus()
    }, Control.prototype.unbindEvents = function() {
        this.field.blur()
    }, Control.prototype.open = function() {
        return checkConfirmButtonVisibility.call(this), this.done = !0
    }, Control.prototype.advanceArrow = function(direction) {
        return this.field.onArrowKeyPress(direction)
    }, Control.prototype.checkEnter = function() {
        return this.field.onEnterKeyPress()
    }, Control.prototype.preSelectFirst = function() {
        return !1
    }, Control.prototype.preSelectLast = function() {
        return !1
    }, Control.prototype.setValue = function(callback) {
        return callback && callback(), this
    }, Control.prototype.validate = function(onSuccess, showErrorMessage, globalFormSubmit) {
        var isValid;
        return null == showErrorMessage && (showErrorMessage = !0), updateValue.call(this), isValid = this.field.validate(showErrorMessage, globalFormSubmit), isValid && "function" == typeof onSuccess && onSuccess(), isValid
    }, Control.prototype.onChangeError = function(errorKey) {
        return this.error.hide(this.$el), _.isEmpty(errorKey) || this.error.show(this.$el, App.Texts[errorKey]), this
    }, Control.prototype.resize = function() {}, Control.prototype.update = function(obj) {
        this.model.set(obj), this.field.update(obj)
    }, Control.prototype.renderQuestion = function() {
        var question;
        question = this.model.get("question"), this.$question.html(question), _.isEmpty(question) ? this.$el.hide() : this.$el.show()
    }, onInputFocus = function() {
        return this.$el.addClass("input-focus")
    }, onInputBlur = function() {
        if (onComplete.call(this), this.$el.removeClass("input-focus"), "fallback" === settings.browser && !App.Tracking.hasConversationStarted()) return App.Tracking.startConversation()
    }, Control.prototype.setFocus = function(enable, animate) {
        if (null == enable && (enable = !0), null == animate && (animate = !1), enable) {
            if (this.$el.hasClass("focus")) return;
            typeform.Form.unsetFocus(), this.$el.addClass("focus"), animate && $("html, body").scrollTop(this.$el.offset().top)
        } else this.$el.removeClass("focus")
    }, Control.prototype.markValidationError = function() {
        return this.$elem.find(".confirm > .button").addClass("red")
    }, triggerValueChange = function() {
        if (null != this.value) return this.$el.trigger("change-value", this)
    }, doAutoScroll = function() {
        if (null != this.value && "opinion-scale" === this.type) return "function" == typeof form.autoNext ? form.autoNext(!0) : void 0
    }, Control
}(), namespace("App", function(exports) {
    return exports.Control = Control
});
var Sanitize, sanitize, template;
sanitize = function(value) {
        var quotedString;
        return _.isString(value) ? (quotedString = JSON.stringify(value), quotedString.substring(1, quotedString.length - 1)) : value
    }, template = function(template, value) {
        return template.replace("<%=a%>", sanitize(value))
    }, Sanitize = {
        sanitize: sanitize,
        template: template
    }, namespace("App", function(exports) {
        return exports.Sanitize = Sanitize
    }),
    function() {
        var fieldFactory = function(fieldData, settings, featureDetection, factory) {
            var fieldView, fieldModel, field, controlFactory;
            return "opinion-scale" === fieldData.type || "file-upload" === fieldData.type ? (controlFactory = new factory(settings.browser, featureDetection, settings.colors), fieldView = controlFactory.build(fieldData), fieldModel = fieldView.getFieldModel()) : (field = factory(fieldData, featureDetection, settings.colors), fieldView = field.view, fieldModel = field.model), {
                render: function($domEl) {
                    $domEl.html(fieldView.render().$el)
                },
                focus: function() {
                    fieldView.bindEvents()
                },
                blur: function() {
                    fieldView.unbindEvents()
                },
                onArrowKeyPress: function(direction) {
                    return fieldView.onArrowKeyPress(direction)
                },
                onEnterKeyPress: function() {
                    return fieldView.onEnterKeyPress()
                },
                update: function(obj) {
                    fieldModel.set(obj)
                },
                onChangeValue: function(cb) {
                    fieldModel.subscribeToValueChange(cb)
                },
                onChangeError: function(cb) {
                    fieldModel.subscribeToErrorChange(cb)
                },
                validate: function(showErrorMessage, globalFormSubmit) {
                    return fieldModel.validate(null, showErrorMessage, globalFormSubmit)
                },
                getValueForLogicJumps: function() {
                    return fieldModel.getValueForLogicJumps()
                },
                getValueForCalculator: function() {
                    return fieldModel.getValueForCalculator()
                },
                subscribeOnValueForCalculatorChange: function(callback) {
                    return fieldModel.subscribeOnValueForCalculatorChange(callback)
                },
                subscribeOnValueForPipingChange: function(callback) {
                    return fieldModel.subscribeOnValueForPipingChange(callback)
                },
                subscribeOnValueIsFilled: function(callback) {
                    return fieldModel.subscribeOnValueIsFilled(callback)
                },
                isFilled: function() {
                    return fieldModel.isFilled()
                },
                getValue: function() {
                    return fieldModel.getValue()
                }
            }
        };
        namespace("App", function(exports) {
            exports.fieldFactory = fieldFactory
        })
    }(),
    function() {
        var BaseFieldModel = Backbone.Model.extend({
            isFilled: function() {
                return this.get("isFilled") || this.get("value")
            },
            subscribeToValueChange: function(callback) {
                this.on("change:value", function(model, value) {
                    callback(value)
                })
            },
            subscribeToErrorChange: function(callback) {
                this.on("change:error", function(model, errorKey) {
                    callback(errorKey)
                })
            },
            subscribeOnValueIsFilled: function(callback) {
                this.on("change:isFilled", function(model, isFilled) {
                    callback(isFilled)
                })
            },
            getValueForLogicJumps: function() {
                return this.get("value")
            },
            getValue: function() {
                var value = this.get("value"),
                    pipeValue = this.get("pipeValue");
                return {
                    toResult: function() {
                        return value
                    },
                    toString: function() {
                        return pipeValue
                    }
                }
            }
        });
        namespace("App.models", function(exports) {
            exports.BaseFieldModel = BaseFieldModel
        })
    }();
var OpinionScaleModel, _ref, __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
OpinionScaleModel = function(_super) {
    function OpinionScaleModel() {
        return this.setValue = __bind(this.setValue, this), _ref = OpinionScaleModel.__super__.constructor.apply(this, arguments)
    }
    return __extends(OpinionScaleModel, _super), OpinionScaleModel.prototype.defaults = {
        error: "",
        isFilled: !1,
        maxValue: 0,
        negativeLabel: "",
        neutralLabel: "",
        pipeValue: "",
        positiveLabel: "",
        required: !1,
        startAtOne: !1,
        type: "opinion-scale",
        value: null
    }, OpinionScaleModel.prototype.choicesCollection = null, OpinionScaleModel.prototype.resetError = function() {
        this.set("error", "")
    }, OpinionScaleModel.prototype.initialize = function() {
        return OpinionScaleModel.__super__.initialize.call(this), this.choicesCollection = new App.components.ChoicesCollection(this.createChoicesFromSteps(), {
            startAtOne: this.attributes.startAtOne
        }), this.on("change:maxValue change:startAtOne", this.updateChoicesCollection), this.on("change:value", this.update), this.listenTo(this.choicesCollection, "change:checked", this.setValue, this), this
    }, OpinionScaleModel.prototype.update = function() {
        this.attributes.value >= 0 ? this.get("isFilled") || this.set("isFilled", !0) : this.set("isFilled", !1), this.setPipeValue()
    }, OpinionScaleModel.prototype.getValidationError = function() {
        return this.attributes.required && _.isNull(this.attributes.value) ? "must-select" : ""
    }, OpinionScaleModel.prototype.validate = function() {
        var error;
        return error = this.getValidationError(), this.set("error", error), _.isEmpty(error)
    }, OpinionScaleModel.prototype.updateChoicesCollection = function() {
        return this.choicesCollection.set(this.createChoicesFromSteps()), this.choicesCollection.setStartAtOne(this.attributes.startAtOne), this
    }, OpinionScaleModel.prototype.setValue = function(model) {
        return this.resetError(), model.get("checked") ? this.set("value", model.get("value")) : this.set("value", null), this
    }, OpinionScaleModel.prototype.hasLabels = function() {
        var labels;
        return labels = this.getLabelsToDisplay(), !(_.isEmpty(labels.negativeLabel) && _.isEmpty(labels.neutralLabel) && _.isEmpty(labels.positiveLabel))
    }, OpinionScaleModel.prototype.getLabelsToDisplay = function() {
        return {
            negativeLabel: this.attributes.negativeLabel,
            neutralLabel: this.isOdd(this.attributes.maxValue) ? this.attributes.neutralLabel : "",
            positiveLabel: this.attributes.positiveLabel
        }
    }, OpinionScaleModel.prototype.isOdd = function(num) {
        return num % 2 == 1
    }, OpinionScaleModel.prototype.getChoicesCollection = function() {
        return this.choicesCollection
    }, OpinionScaleModel.prototype.createChoicesFromSteps = function() {
        var i, num, stepsCollection;
        for (stepsCollection = [], i = 0; i < this.attributes.maxValue;) num = this.getNumberToDisplay(i), stepsCollection.push({
            label: num.toString(),
            value: num
        }), i++;
        return stepsCollection
    }, OpinionScaleModel.prototype.getNumberToDisplay = function(index) {
        return this.attributes.startAtOne ? index + 1 : index
    }, OpinionScaleModel.prototype.setResponses = function(levels) {
        return this.choicesCollection.setResponses(levels), this
    }, OpinionScaleModel.prototype.getAverageResponses = function() {
        return this.choicesCollection.getAverageResponses()
    }, OpinionScaleModel.prototype.setPipeValue = function() {
        var pipeValue, _ref1;
        return pipeValue = null != (_ref1 = this.attributes.value) ? _ref1.toString() : void 0, this.set("pipeValue", pipeValue), pipeValue
    }, OpinionScaleModel
}(App.models.BaseFieldModel), namespace("App.models", function(exports) {
    return exports.OpinionScaleModel = OpinionScaleModel
});
var OpinionScaleFactory, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments)
    }
};
OpinionScaleFactory = function() {
    function OpinionScaleFactory(browser) {
        this.browser = browser, this.createChoiceView = __bind(this.createChoiceView, this)
    }
    return OpinionScaleFactory.prototype.browser = null, OpinionScaleFactory.prototype.useKeyboard = function() {
        return "default" === this.browser
    }, OpinionScaleFactory.prototype.build = function(fieldData) {
        var choicesView, fieldModel, template, _base;
        return fieldModel = new App.models.OpinionScaleModel(fieldData), choicesView = new App.components.ChoicesView({
            className: "layout-columns",
            collection: fieldModel.getChoicesCollection(),
            createChoiceView: this.createChoiceView,
            keyboard: this.useKeyboard() ? "function" == typeof(_base = App.Service).Keyboard ? new _base.Keyboard : void 0 : null,
            browser: this.browser
        }), template = $.trim($("#component-opinion-scale").html()), new App.components.OpinionScaleView(choicesView, fieldModel, template)
    }, OpinionScaleFactory.prototype.createChoiceView = function(choiceModel, positionClass) {
        return null == positionClass && (positionClass = ""), new App.components.ChoiceView(_.extend({
            model: choiceModel
        }, this.getChoicePropertiesByBrowser(positionClass)))
    }, OpinionScaleFactory.prototype.getChoicePropertiesByBrowser = function(positionClass) {
        return "fallback" === this.browser ? {
            className: "choice color-secondary text-align-center text-size-s",
            template: $("#component-choice-simple").html(),
            onRender: function() {},
            onCheck: function() {}
        } : {
            className: "choice choice-square style-transparent-choice without-padding text-size-xl text-antialiased " + positionClass,
            template: $("#component-choice-square").html(),
            onRender: App.Utils.setStepClassByLightness,
            onCheck: App.Utils.selectEffect
        }
    }, OpinionScaleFactory
}(), namespace("App.factories", function(exports) {
    return exports.OpinionScaleFactory = OpinionScaleFactory
});
var OpinionScaleView, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
OpinionScaleView = function(_super) {
    function OpinionScaleView(choicesView, fieldModel, template) {
        this.choicesView = choicesView, this.fieldModel = fieldModel, this.template = template, this.listenTo(this.fieldModel, "change:positiveLabel change:neutralLabel change:negativeLabel change:maxValue", this.renderLabels, this), Backbone.View.apply(this, [])
    }
    return __extends(OpinionScaleView, _super), OpinionScaleView.prototype.choicesView = null, OpinionScaleView.prototype.fieldModel = null, OpinionScaleView.prototype.template = "", OpinionScaleView.prototype.$choices = null, OpinionScaleView.prototype.$labels = null, OpinionScaleView.prototype.getFieldModel = function() {
        return this.fieldModel
    }, OpinionScaleView.prototype.initialize = function() {
        return this.$el.html(this.template), null == this.$choices && (this.$choices = this.$el.find(".component-choices")), null == this.$labels && (this.$labels = this.$el.find(".labels")), this
    }, OpinionScaleView.prototype.bindEvents = function() {
        return this.choicesView.bindEvents(), this
    }, OpinionScaleView.prototype.unbindEvents = function() {
        return this.choicesView.unbindEvents(), this
    }, OpinionScaleView.prototype.onArrowKeyPress = function(direction) {
        return this.choicesView.onArrowKeyPress(direction)
    }, OpinionScaleView.prototype.onEnterKeyPress = function() {
        return this.choicesView.onEnterKeyPress()
    }, OpinionScaleView.prototype.render = function() {
        return this.renderChoices(), this.renderLabels(), this
    }, OpinionScaleView.prototype.renderChoices = function() {
        return this.$choices.html(this.choicesView.render().$el), this
    }, OpinionScaleView.prototype.renderLabels = function() {
        return this.showLabels(), this.renderLabelsToDisplay(), this
    }, OpinionScaleView.prototype.showLabels = function() {
        return this.fieldModel.hasLabels() ? this.$labels.show() : this.$labels.hide(), this
    }, OpinionScaleView.prototype.renderLabelsToDisplay = function() {
        var data, label, _i, _len, _ref;
        for (data = this.fieldModel.getLabelsToDisplay(), _ref = ["negativeLabel", "neutralLabel", "positiveLabel"], _i = 0, _len = _ref.length; _i < _len; _i++) label = _ref[_i], this.renderLabel(label, data);
        return this
    }, OpinionScaleView.prototype.renderLabel = function(label, data) {
        var _name;
        return null == this[_name = "$" + label] && (this[_name] = this.$el.find("." + label)), this["$" + label].html(data[label]), this
    }, OpinionScaleView
}(Backbone.View), namespace("App.components", function(exports) {
    return exports.OpinionScaleView = OpinionScaleView
});
var FileUploadModel, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
FileUploadModel = function(_super) {
    function FileUploadModel() {
        return _ref = FileUploadModel.__super__.constructor.apply(this, arguments)
    }
    var STATUS;
    return __extends(FileUploadModel, _super), STATUS = {
        DEFAULT: "default",
        UPLOADING: "uploading",
        SUCCESS: "success"
    }, FileUploadModel.prototype.defaults = {
        id: null,
        fileName: "",
        fileSize: null,
        fileType: null,
        progress: 0,
        maxSize: 10485760,
        status: STATUS.DEFAULT,
        value: null,
        pipeValue: "",
        calculatorValue: !1,
        logicValue: !1,
        required: !1,
        token: "",
        error: ""
    }, FileUploadModel.prototype.initialize = function() {
        return FileUploadModel.__super__.initialize.call(this), this.on("change:status", this.setValue), this.on("change:fileName", this.setLogicValue), this.on("change:fileName", this.setPipeValue), this.on("change:fileName", this.setCalculatorValue), this
    }, FileUploadModel.prototype.resetError = function() {
        this.set("error", "")
    }, FileUploadModel.prototype.setValue = function() {
        this.attributes.status === STATUS.SUCCESS ? this.set("value", this.generateUploadedFilename()) : this.set("value", null)
    }, FileUploadModel.prototype.generateUploadedFilename = function() {
        return this.attributes.token + "-" + this.attributes.fileName
    }, FileUploadModel.prototype.getValidationError = function(globalFormSubmit) {
        if (globalFormSubmit) {
            if (this.attributes.status === STATUS.UPLOADING) return "file-upload-processing";
            if (this.attributes.required && _.isNull(this.attributes.value)) return "file-upload-must-upload"
        }
        return this.attributes.required && _.isNull(this.attributes.value) && this.attributes.status === STATUS.DEFAULT ? "file-upload-must-upload" : ""
    }, FileUploadModel.prototype.validate = function(callback, showError, globalFormSubmit) {
        var error;
        return this.resetError(), error = this.getValidationError(globalFormSubmit), this.set("error", error), _.isEmpty(error)
    }, FileUploadModel.prototype.checkFileSize = function() {
        var error;
        return error = "", this.attributes.fileSize > this.attributes.maxSize && (error = "file-upload-sizeLimit"), this.set("error", error), "" === error
    }, FileUploadModel.prototype.setStatusDefault = function() {
        this.set({
            status: STATUS.DEFAULT,
            fileName: "",
            progress: 0,
            value: null
        })
    }, FileUploadModel.prototype.setStatusProgress = function() {
        this.set("status", STATUS.UPLOADING)
    }, FileUploadModel.prototype.setStatusSuccess = function(obj) {
        this.set({
            status: STATUS.SUCCESS,
            token: obj.token,
            error: ""
        })
    }, FileUploadModel.prototype.setStatusError = function() {
        this.set({
            status: STATUS.DEFAULT,
            fileName: "",
            progress: 0,
            error: "file-upload-upload-error"
        })
    }, FileUploadModel.prototype.getMaxSizeInMB = function() {
        return this.attributes.maxSize / 1048576
    }, FileUploadModel.prototype.isImage = function() {
        var validTypes;
        return validTypes = ["image/png", "image/gif", "image/jpeg", "image/svg+xml"], null != this.attributes.fileType && _.contains(validTypes, this.attributes.fileType)
    }, FileUploadModel.prototype.setPipeValue = function() {
        var pipeValue;
        return pipeValue = this.attributes.fileName || "", this.set("pipeValue", pipeValue), pipeValue
    }, FileUploadModel.prototype.setCalculatorValue = function() {
        var ready;
        return ready = !_.isEmpty(this.attributes.fileName), this.set("calculatorValue", ready), ready
    }, FileUploadModel.prototype.setLogicValue = function() {
        var ready;
        return ready = !_.isEmpty(this.attributes.fileName), this.set("logicValue", ready), ready
    }, FileUploadModel.prototype.getValueForLogicJumps = function() {
        return this.get("logicValue")
    }, FileUploadModel.prototype.getValueForCalculator = function() {
        return this.get("calculatorValue")
    }, FileUploadModel.prototype.subscribeOnValueForCalculatorChange = function(callback) {
        return this.on("change:calculatorValue", function(model, value) {
            return callback(value)
        })
    }, FileUploadModel.prototype.subscribeOnValueForPipingChange = function(callback) {
        return this.on("change:pipeValue", function(model, value) {
            return callback(value)
        })
    }, FileUploadModel
}(App.models.BaseFieldModel), namespace("App.models", function(exports) {
    return exports.FileUploadModel = FileUploadModel
});
var FileUploadView, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
FileUploadView = function(_super) {
    function FileUploadView() {
        return _ref = FileUploadView.__super__.constructor.apply(this, arguments)
    }
    var STATUS;
    return __extends(FileUploadView, _super), FileUploadView.prototype.model = null, FileUploadView.prototype.s3Uploader = null, FileUploadView.prototype.translations = {
        choose: "",
        uploading: "",
        sizeLimit: ""
    }, FileUploadView.prototype.isPreview = !1, FileUploadView.prototype.templates = {
        el: ""
    }, FileUploadView.prototype.$text = null, FileUploadView.prototype.$file = null, STATUS = {
        DEFAULT: "default",
        UPLOADING: "uploading",
        SUCCESS: "success"
    }, FileUploadView.prototype.events = {
        "change input": "onFileChange"
    }, FileUploadView.prototype.initialize = function(options) {
        return this.isPreview = options.isPreview, this.templates = _.extend({}, this.templates, options.templates), this.translations = _.extend({}, this.translations, options.translations), this.s3Uploader = options.s3Uploader, this.requestCredentials(), this.model.on("change:status", this.render, this), this.$el.html(this.templates.el()), this.$text = this.$el.find(".box-text"), this.customInitialize(options), this.$file = this.$el.find("input"), this.setMultiple(options.multiple), this
    }, FileUploadView.prototype.requestCredentials = function() {
        return this.isPreview || this.s3Uploader.requestCredentials(), this
    }, FileUploadView.prototype.customInitialize = function() {
        return this.colorSettings = this.options.colorSettings, this.model.on("change:progress", this.updateProgressBar, this), this.$progressBar = $(this.templates.progressBar()), this.$progressBarTarget = this.$el.find(".progress-bar-target")
    }, FileUploadView.prototype.updateProgressBar = function(model, progress) {
        null == this.$bar && (this.$bar = this.$progressBar.children(".bar")), this.$bar.css("width", progress + "%")
    }, FileUploadView.prototype.customInitializeElements = function() {}, FileUploadView.prototype.setMultiple = function(multiple) {
        return multiple && this.$file.attr("multiple", "multiple"), this
    }, FileUploadView.prototype.render = function() {
        var maxSize, sizeLimitText, status;
        return status = this.model.get("status"), status === STATUS.DEFAULT ? (sizeLimitText = this.translations.sizeLimit, maxSize = this.model.getMaxSizeInMB(), this.$text.html(sizeLimitText + ": " + maxSize + " MB"), this.hideProgress()) : status === STATUS.UPLOADING ? this.showProgress() : status === STATUS.SUCCESS && (this.hideProgress(), this.$text.empty()), this
    }, FileUploadView.prototype.getFieldModel = function() {
        return this.model
    }, FileUploadView.prototype.escapeFilename = function(filename) {
        return filename.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/\s]/g, "_")
    }, FileUploadView.prototype.getFileInfo = function(target) {
        var data, file, files, fullPath;
        return data = {}, files = target.files, files ? (file = files[0], data.fileName = this.escapeFilename(this.getFileName(file.name)), data.fileSize = file.size, data.fileType = file.type) : (fullPath = target.value, data.fileName = this.escapeFilename(this.getFileNameIE(fullPath))), data
    }, FileUploadView.prototype.getFileData = function(target) {
        var files;
        return files = target.files, files ? files[0] : void 0
    }, FileUploadView.prototype.getFileNameIE = function(fullPath) {
        return fullPath.replace(/^.*[\\\/]/, "")
    }, FileUploadView.prototype.getFileName = function(fullPath) {
        return fullPath.replace(/[\uD800-\uF8FF]/g, "x").replace(/[\\\/]/, "")
    }, FileUploadView.prototype.onFileChange = function(evt) {
        var fileData, fileInfo;
        return fileInfo = this.getFileInfo(evt.target), this.model.set(fileInfo), this.model.resetError(), this.model.checkFileSize() ? (fileData = this.getFileData(evt.target), this.upload(fileData, this.$file, fileInfo), this.generatePreview(fileData)) : this.model.setStatusDefault(), this
    }, FileUploadView.prototype.upload = function(fileData, $file, fileInfo) {
        this.isPreview ? this.model.setStatusSuccess(fileInfo.fileName) : (this.model.setStatusProgress(), this.s3Uploader.upload(fileData, $file, fileInfo))
    }, FileUploadView.prototype.generatePreview = function() {}, FileUploadView.prototype.showProgress = function() {
        return this.$progressBarTarget.empty(), this.s3Uploader.canContinuouslyUpdateProgress() ? this.$progressBarTarget.html(this.$progressBar) : new Spinner({
            color: this.colorSettings.primary,
            top: "30%"
        }).spin(this.$progressBarTarget[0])
    }, FileUploadView.prototype.hideProgress = function() {
        return this.$progressBarTarget.empty()
    }, FileUploadView
}(Backbone.View), namespace("App.components", function(exports) {
    return exports.FileUploadView = FileUploadView
});
var RichFileUploadView, _ref, __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
RichFileUploadView = function(_super) {
    function RichFileUploadView() {
        return this.onLoadFileImage = __bind(this.onLoadFileImage, this), _ref = RichFileUploadView.__super__.constructor.apply(this, arguments)
    }
    var STATUS;
    return __extends(RichFileUploadView, _super), RichFileUploadView.prototype.fileReader = null, RichFileUploadView.prototype.templates = {
        el: "",
        cloudIcon: "",
        fileIcon: "",
        textStart: "",
        textUploading: "",
        textPreview: ""
    }, RichFileUploadView.prototype.confirmButtonView = null, RichFileUploadView.prototype.$file = null, RichFileUploadView.prototype.$content = null, RichFileUploadView.prototype.$cancel = null, RichFileUploadView.prototype.$preview = null, RichFileUploadView.prototype.$cloudIcon = null, RichFileUploadView.prototype.$fileIcon = null, RichFileUploadView.prototype.$progressBar = null, RichFileUploadView.prototype.onRender = function() {}, RichFileUploadView.prototype.onError = function() {}, STATUS = {
        DEFAULT: "default",
        UPLOADING: "uploading",
        SUCCESS: "success"
    }, RichFileUploadView.prototype.events = {
        "change input": "onFileChange",
        "dragover input": "onDragover",
        "dragleave input": "onDragleave",
        "click .box-cancel": "onCancel"
    }, RichFileUploadView.prototype.customInitialize = function(options) {
        return RichFileUploadView.__super__.customInitialize.apply(this, arguments), this.fileReader = options.fileReader, this.onRender = options.onRender, this.confirmButtonView = options.confirmButtonView, this.fileReader && (this.fileReader.onload = this.onLoadFileImage), this.$cancel = this.$el.find(".box-cancel"), this.$image = this.$el.find(".box-image"), this.$progressBarTarget = this.$el.find(".box-image"), this.$preview = $("<img/>"), this.$cloudIcon = $(this.templates.cloudIcon()), this.$fileIcon = $(this.templates.fileIcon()), this.renderConfirmButton(), this
    }, RichFileUploadView.prototype.open = function() {
        return this.checkConfirmButtonVisibility(this.model.get("status")), this
    }, RichFileUploadView.prototype.render = function() {
        var status;
        return status = this.model.get("status"), this.resetFile(status), this.switchStatusClass(status), this.checkInputVisibility(status), this.checkCloseIconVisibility(status), this.checkConfirmButtonVisibility(status), this.renderText(status), this.renderContent(status), this.onRender(this.$el), this
    }, RichFileUploadView.prototype.resetFile = function(status) {
        var $clone;
        return status === STATUS.DEFAULT && ($clone = this.$file.clone(), this.$file.replaceWith($clone), this.$file = $clone), this
    }, RichFileUploadView.prototype.switchStatusClass = function(status) {
        return this.$el.alterClass("status-*", "status-" + this.model.attributes.status), this
    }, RichFileUploadView.prototype.getTextKey = function(status) {
        switch (status) {
            case STATUS.DEFAULT:
                return "textStart";
            case STATUS.UPLOADING:
                return "textUploading";
            case STATUS.SUCCESS:
                return "textPreview"
        }
    }, RichFileUploadView.prototype.renderText = function(status) {
        var text;
        return text = this.templates[this.getTextKey(status)]({
            fileName: this.model.get("fileName"),
            maxFileSize: this.model.getMaxSizeInMB(),
            textChoose: this.translations.choose,
            textUploading: this.translations.uploading,
            textSizeLimit: this.translations.sizeLimit
        }), this.$text.html(text), this
    }, RichFileUploadView.prototype.renderContent = function(status) {
        return status === STATUS.DEFAULT ? (this.hideProgress(), this.$image.html(this.$cloudIcon)) : status === STATUS.UPLOADING ? this.showProgress() : status === STATUS.SUCCESS && (this.hideProgress(), this.$image.html(this.getPreview())), this
    }, RichFileUploadView.prototype.renderConfirmButton = function() {
        return null != this.confirmButtonView && this.$el.append(this.confirmButtonView.render().$el), this
    }, RichFileUploadView.prototype.onCancel = function() {
        return this.model.resetError(), this.s3Uploader.abort(), this.model.setStatusDefault(), this
    }, RichFileUploadView.prototype.getPreview = function() {
        return this.model.isImage() ? this.$preview : this.$fileIcon
    }, RichFileUploadView.prototype.generatePreview = function(file) {
        return !!this.fileReader && (this.model.isImage() && this.fileReader.readAsDataURL(file), this)
    }, RichFileUploadView.prototype.onLoadFileImage = function(evt) {
        this.$preview.attr({
            src: _.clone(evt.target.result),
            title: this.model.get("fileName")
        })
    }, RichFileUploadView.prototype.checkInputVisibility = function(status) {
        return status === STATUS.DEFAULT ? this.$file.show() : this.$file.hide(), this
    }, RichFileUploadView.prototype.checkCloseIconVisibility = function(status) {
        return status === STATUS.DEFAULT ? this.$cancel.hide() : this.$cancel.show(), this
    }, RichFileUploadView.prototype.checkConfirmButtonVisibility = function(status) {
        var show, _ref1;
        return show = status === STATUS.SUCCESS, "function" == typeof form.checkConfirm && form.checkConfirm(show, null != (_ref1 = this.confirmButtonView) ? _ref1.$el : void 0, this.$el, this.model.get("id")), this
    }, RichFileUploadView.prototype.bindEvents = function() {
        return this
    }, RichFileUploadView.prototype.unbindEvents = function() {
        return this
    }, RichFileUploadView.prototype.onArrowKeyPress = function(direction) {
        return !0
    }, RichFileUploadView.prototype.onEnterKeyPress = function() {
        return this.model.get("status") !== STATUS.DEFAULT || (this.$file.click(), !1)
    }, RichFileUploadView.prototype.onDragover = function() {
        return this.$el.addClass("pre-selected"), this
    }, RichFileUploadView.prototype.onDragleave = function() {
        return this.$el.removeClass("pre-selected"), this
    }, RichFileUploadView
}(App.components.FileUploadView), namespace("App.components", function(exports) {
    return exports.RichFileUploadView = RichFileUploadView
});
var FileUploadFactory;
FileUploadFactory = function() {
    function FileUploadFactory(browser, featureDetector, colorSettings) {
        this.browser = browser, this.featureDetector = featureDetector, this.colorSettings = colorSettings
    }
    return FileUploadFactory.prototype.browser = null, FileUploadFactory.prototype.featureDetector = null, FileUploadFactory.prototype.build = function(fieldData) {
        var fieldModel, s3Uploader;
        return fieldModel = new App.models.FileUploadModel(fieldData), s3Uploader = new App.Service.S3Uploader(fieldModel.get("id"), this.featureDetector, {
            requestCredentialsBaseUrl: "/app/form/" + settings.uid + "/field/uploadCredentials/",
            onUploadProgress: function(progress) {
                return fieldModel.set("progress", progress)
            },
            onSuccess: function(response) {
                return fieldModel.setStatusSuccess(response)
            },
            onError: function() {
                return fieldModel.setStatusError()
            },
            onAbort: function() {
                return fieldModel.setStatusDefault()
            }
        }), this.createFieldView(fieldModel, s3Uploader)
    }, FileUploadFactory.prototype.generateChooseText = function() {
        var text;
        return text = App.Texts["file-upload-choose"], this.featureDetector.fileDragAndDrop() && (text += " " + App.Texts["file-upload-drag"]), text
    }, FileUploadFactory.prototype.getTemplate = function(selector) {
        return _.template($.trim($(selector).html()))
    }, FileUploadFactory.prototype.createFieldView = function(fieldModel, s3Uploader) {
        return "fallback" === this.browser ? this.createFallbackFieldView(fieldModel, s3Uploader) : this.createRichFieldView(fieldModel, s3Uploader)
    }, FileUploadFactory.prototype.getViewOptions = function(fieldModel, s3Uploader) {
        return {
            model: fieldModel,
            s3Uploader: s3Uploader,
            colorSettings: this.colorSettings,
            multiple: this.featureDetector.uploadUsingMultiple(),
            translations: {
                choose: this.generateChooseText(),
                uploading: App.Texts["file-upload-uploading"],
                sizeLimit: App.Texts["file-upload-maxSize"]
            }
        }
    }, FileUploadFactory.prototype.createRichFieldView = function(fieldModel, s3Uploader) {
        var fileReader, options;
        return window.FileReader && (fileReader = new FileReader), options = _.extend({}, this.getViewOptions(fieldModel, s3Uploader), {
            fileReader: fileReader,
            confirmButtonView: this.createConfirmButton(),
            className: "file-upload-box container",
            onRender: App.Utils.setStepClassByLightness,
            isPreview: "field" === ("undefined" != typeof Globals && null !== Globals ? Globals.parent : void 0),
            templates: {
                el: this.getTemplate("#component-file-upload-box"),
                cloudIcon: this.getTemplate("#icon-cloud"),
                fileIcon: this.getTemplate("#icon-file"),
                progressBar: this.getTemplate("#component-file-upload-progress-bar"),
                textStart: this.getTemplate("#component-file-upload-text-start"),
                textUploading: this.getTemplate("#component-file-upload-text-uploading"),
                textPreview: this.getTemplate("#component-file-upload-text-preview")
            }
        }), new App.components.RichFileUploadView(options)
    }, FileUploadFactory.prototype.createFallbackFieldView = function(fieldModel, s3Uploader) {
        var options;
        return options = _.extend({}, this.getViewOptions(fieldModel, s3Uploader), {
            className: "file-upload-box-simple",
            templates: {
                el: this.getTemplate("#component-file-upload-box-simple"),
                progressBar: this.getTemplate("#component-file-upload-progress-bar")
            }
        }), new App.components.FileUploadView(options)
    }, FileUploadFactory.prototype.createConfirmButton = function() {
        return "default" === this.browser ? new App.components.ConfirmButtonView({
            template: this.getTemplate("#component-confirm-button"),
            className: "confirm container",
            buttonView: new App.components.ButtonView({
                model: new App.components.ButtonModel({
                    label: "<span>" + App.Texts["tab-button"] + '</span><span class="confirm"></span>',
                    extra: "",
                    type: "nav",
                    icon: "tick"
                })
            }),
            onRender: App.Utils.setStepClassByLightness
        }) : null
    }, FileUploadFactory
}(), namespace("App.factories", function(exports) {
    return exports.FileUploadFactory = FileUploadFactory
});
var dateFieldFactory = dateField();
! function() {
    var DateFactory = function(fieldData, featureDetection, colours) {
        var model = new App.models.DateModel(fieldData);
        return {
            model: model,
            view: new App.components.DateView({
                model: model,
                featureDetection: featureDetection,
                dateFieldFactory: window.dateFieldFactory,
                highlightColor: colours.secondary
            })
        }
    };
    namespace("App.factories", function(exports) {
        exports.DateFactory = DateFactory
    })
}(),
function() {
    function _isValidDate(isoValue) {
        return !!isoValue && _createDate.call(this, isoValue).isValid()
    }

    function _setValue(isoValue) {
        _resetError.call(this), this.set({
            isoValue: isoValue,
            isFilled: _isFilled(isoValue)
        })
    }

    function _isFilled(isoValue) {
        return !_.isNaN(parseInt(isoValue.replace(/[^0-9 ]/g, "")))
    }

    function _resetError() {
        this.setError(null)
    }

    function _isoValueToSubmitValue(isoValue) {
        return _isValidDate(isoValue) ? _isoValueToTimestamp(isoValue) : null
    }

    function _isoValueToTimestamp(isoValue) {
        return _createDate(isoValue).valueOf()
    }

    function _createDate(isoValue) {
        return moment.utc(isoValue, DEFAULT_DATE_VALUE, !0)
    }

    function _isoValueToDateFormat(isoValue, dateFormat) {
        var format;
        return _isValidDate(isoValue) ? (format = dateFormat.structure.match(/(YYYY|MM|DD)/g).join(dateFormat.separator), moment.utc(isoValue).format(format)) : ""
    }
    var DEFAULT_DATE_VALUE = "YYYY-MM-DD",
        DateModel = App.models.BaseFieldModel.extend({
            defaults: {
                required: !1,
                dateFormat: {
                    structure: "YYYYMMDD",
                    separator: "/"
                },
                isoValue: DEFAULT_DATE_VALUE,
                error: null,
                isFilled: !1
            },
            setValue: function(isoValue) {
                _setValue.call(this, isoValue)
            },
            setError: function(error) {
                this.set("error", error)
            },
            validate: function() {
                var isFilled = this.get("isFilled"),
                    isRequired = this.get("required"),
                    isValid = _isValidDate(this.get("isoValue")),
                    errorKey = null;
                return _resetError.call(this), isFilled ? isValid || (errorKey = "invalid-date") : isRequired && (errorKey = "required"), this.setError(errorKey), !errorKey
            },
            getValue: function() {
                var isoValue = this.get("isoValue"),
                    dateFormat = this.get("dateFormat");
                return {
                    toResult: function() {
                        return _isoValueToSubmitValue(isoValue)
                    },
                    toString: function() {
                        return _isoValueToDateFormat(isoValue, dateFormat)
                    }
                }
            },
            getValueForLogicJumps: function() {
                return _isoValueToSubmitValue(this.get("isoValue"))
            }
        });
    namespace("App.models", function(exports) {
        exports.DateModel = DateModel
    })
}(),
function() {
    var _autoNext = function() {
            window.form.autoNext(!0)
        },
        triggerAndroidBlurOnChange = function() {
            this.options.featureDetection.isAndroid() && this.$input.trigger("blur")
        },
        onValueChange = function(value) {
            this.model.setValue(value), this.model.getValue().toString() ? (this.$input.addClass("filled"), triggerAndroidBlurOnChange.call(this)) : this.$input.removeClass("filled")
        },
        setSelectedTextColour = function(highlightColour) {
            var hexHighlightColour = highlightColour.slice(1, highlightColour.length),
                highLightlightness = $.husl.fromHex(hexHighlightColour)[2];
            this.$input.removeClass("darkText").removeClass("lightText").addClass(highLightlightness > 50 ? "darkText" : "lightText")
        },
        _setUpInput = function(render) {
            var dateFormat = this.model.get("dateFormat");
            this.isNativeInputDateAvailable = this.options.featureDetection.isNativeInputDateAvailable(), this.$el.html(this.template()), this.$input = this.$el.find("input"), this.dateField = this.options.dateFieldFactory(this.$input[0], dateFormat.structure, dateFormat.separator, this.isNativeInputDateAvailable, _.bind(onValueChange, this)), setSelectedTextColour.call(this, this.options.highlightColor), this.designEventBus.on("colour-update", _.bind(function(event, colours) {
                setSelectedTextColour.call(this, colours["secondary-color"])
            }, this)), render && this.render()
        },
        preventTouchScroll = function($input) {
            $(window).on("touchmove.dateField", function(e) {
                if ("INPUT" !== e.target.nodeName) return $input.blur()
            })
        },
        _onInputFocus = function() {
            preventTouchScroll(this.$input)
        },
        DateView = Backbone.View.extend({
            template: _.template('<input type="text"/>'),
            dateField: null,
            initialize: function(options) {
                this.designEventBus = $("#typeform.preview"), this.listenTo(this.model, "change:dateFormat", function() {
                    _setUpInput.call(this, !0)
                }), _setUpInput.call(this)
            },
            bindEvents: function() {
                this.dateField.focus(), this.$el.addClass("ready"), this.isNativeInputDateAvailable && (this.$input.on("blur.dateField", _.bind(_autoNext, this)), this.$input.on("focus.dateField", _.bind(_onInputFocus, this)))
            },
            unbindEvents: function() {
                this.dateField.blur(), this.$el.removeClass("ready"), this.$input.off(".dateField"), $(window).off(".dateField")
            },
            onArrowKeyPress: function() {
                return !1
            },
            onEnterKeyPress: function() {
                return !0
            },
            render: function() {
                return Backbone.View.prototype.render.apply(), this.dateField.render(), this
            }
        });
    DateView.DARK_TEXT_CLASS = "darkText", DateView.LIGHT_TEXT_CLASS = "lightText", namespace("App.components", function(exports) {
        exports.DateView = DateView
    })
}();
var ChoiceModel, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
ChoiceModel = function(_super) {
    function ChoiceModel() {
        return _ref = ChoiceModel.__super__.constructor.apply(this, arguments)
    }
    return __extends(ChoiceModel, _super), ChoiceModel.prototype.defaults = {
        label: "",
        value: null,
        checked: !1,
        preselected: !1,
        percentResponses: null,
        responses: 0
    }, ChoiceModel.prototype.initialize = function() {
        return this.on("change:checked", this.onChangeChecked), this
    }, ChoiceModel.prototype.onChangeChecked = function() {
        return this.attributes.checked && this.set("preselected", !0), this
    }, ChoiceModel.prototype.toogle = function() {
        return this.set("checked", !this.attributes.checked), this
    }, ChoiceModel
}(Backbone.Model), namespace("App.components", function(exports) {
    return exports.ChoiceModel = ChoiceModel
});
var ChoiceView, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
ChoiceView = function(_super) {
    function ChoiceView() {
        return _ref = ChoiceView.__super__.constructor.apply(this, arguments)
    }
    return __extends(ChoiceView, _super), ChoiceView.prototype.tagName = "li", ChoiceView.prototype.template = "", ChoiceView.prototype.model = null, ChoiceView.prototype.className = "choice container", ChoiceView.prototype.onRender = function() {}, ChoiceView.prototype.onCheck = function() {}, ChoiceView.prototype.responsesLevelTemplate = '<div class="level"></div>', ChoiceView.prototype.initialize = function(options) {
        return this.template = _.template(options.template), this.onRender = options.onRender, this.onCheck = options.onCheck, this.listenTo(this.model, "change:checked", this.setCheckedClass, this), this.listenTo(this.model, "change:preselected", this.setPreSelectedClass, this), this.listenTo(this.model, "change:percentResponses", this.renderResponsesLevel, this), this
    }, ChoiceView.prototype.serializeData = function() {
        var data;
        return data = this.model.toJSON(), data.checked = this.model.get("checked") ? "checked" : "", data
    }, ChoiceView.prototype.render = function() {
        return this.setCheckedClass(), this.$el.html(this.template(this.serializeData())), this.renderResponsesLevel(), this.onRender(this.$el), this
    }, ChoiceView.prototype.setCheckedClass = function() {
        return this.setClassForAttr("checked"), this.model.get("checked") && this.onCheck(this.$el), this.$el.find("input").prop("checked", this.model.get("checked")), this
    }, ChoiceView.prototype.setPreSelectedClass = function() {
        return this.setClassForAttr("preselected"), this
    }, ChoiceView.prototype.setClassForAttr = function(attribute) {
        return this.model.get(attribute) ? this.$el.addClass(attribute) : this.$el.removeClass(attribute), this
    }, ChoiceView.prototype.renderResponsesLevel = function() {
        var $percentResponses, percentResponses;
        if (null != (percentResponses = this.model.get("percentResponses"))) return $percentResponses = $(this.responsesLevelTemplate), $percentResponses.css("height", percentResponses + "%"), this.$el.append($percentResponses), this
    }, ChoiceView
}(Backbone.View), namespace("App.components", function(exports) {
    return exports.ChoiceView = ChoiceView
});
var ChoicesCollection, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
ChoicesCollection = function(_super) {
    function ChoicesCollection() {
        return _ref = ChoicesCollection.__super__.constructor.apply(this, arguments)
    }
    return __extends(ChoicesCollection, _super), ChoicesCollection.prototype.model = App.components.ChoiceModel, ChoicesCollection.prototype.options = null, ChoicesCollection.prototype.defaults = {
        startAtOne: !0
    }, ChoicesCollection.prototype.initialize = function(data, options) {
        return this.options = _.extend({}, this.defaults, options), this.on("change:checked", this.onCheck, this), this
    }, ChoicesCollection.prototype.setStartAtOne = function(startAtOne) {
        return this.options.startAtOne = startAtOne, this
    }, ChoicesCollection.prototype.onCheck = function(checkedModel) {
        return this.uncheckOtherModels(checkedModel), this
    }, ChoicesCollection.prototype.uncheckOtherModels = function(checkedModel) {
        if (checkedModel.get("checked")) return this.each(function(model) {
            if (model !== checkedModel) return model.set({
                checked: !1,
                preselected: !1
            })
        }), this
    }, ChoicesCollection.prototype.selectByNumber = function(number) {
        var index;
        return index = this.options.startAtOne ? number - 1 : number, this.selectByIndex(index), this
    }, ChoicesCollection.prototype.selectByIndex = function(index) {
        var _ref1;
        return null != (_ref1 = this.at(index)) && _ref1.toogle(), this
    }, ChoicesCollection.prototype.getPreselectedChoice = function() {
        return this.findWhere({
            preselected: !0
        })
    }, ChoicesCollection.prototype.getPreselectedChoiceIndex = function() {
        return this.indexOf(this.getPreselectedChoice())
    }, ChoicesCollection.prototype.preselect = function(index) {
        var _ref1, _ref2;
        return null != (_ref1 = this.getPreselectedChoice()) && _ref1.set("preselected", !1), null != (_ref2 = this.at(index)) && _ref2.set("preselected", !0), this
    }, ChoicesCollection.prototype.removePreselect = function(index) {
        var _ref1;
        return null != (_ref1 = this.at(index)) && _ref1.set("preselected", !1), !0
    }, ChoicesCollection.prototype.preselectPrevious = function() {
        var index;
        return 0 !== (index = this.getPreselectedChoiceIndex()) && (this.preselect(index - 1), this)
    }, ChoicesCollection.prototype.preselectNext = function() {
        var index;
        return (index = this.getPreselectedChoiceIndex()) !== this.length - 1 && (this.preselect(index + 1), this)
    }, ChoicesCollection.prototype.tooglePreselected = function() {
        var _ref1;
        return null != (_ref1 = this.getPreselectedChoice()) && _ref1.toogle(), this
    }, ChoicesCollection.prototype.containsTwoDigitsChoice = function() {
        return this.options.startAtOne ? this.length >= 10 : this.length > 10
    }, ChoicesCollection.prototype.getChoiceWithLabel = function(label) {
        return this.find(function(choiceModel) {
            return choiceModel.get("label") === label
        })
    }, ChoicesCollection.prototype.setResponses = function(choice) {
        var _this = this;
        return _.each(choice, function(choice) {
            var _ref1;
            return null != (_ref1 = _this.getChoiceWithLabel(choice.label)) ? _ref1.set(choice) : void 0
        }), this
    }, ChoicesCollection.prototype.getSumResponses = function() {
        return this.reduce(function(memo, model) {
            return memo + model.get("responses") * model.get("value")
        }, 0)
    }, ChoicesCollection.prototype.getTotalResponses = function() {
        return this.reduce(function(memo, model) {
            return memo + model.get("responses")
        }, 0)
    }, ChoicesCollection.prototype.getAverageResponses = function() {
        var average, totalResponses;
        return totalResponses = this.getTotalResponses(), average = totalResponses > 0 ? this.getSumResponses() / totalResponses : 0, average.toFixed(2)
    }, ChoicesCollection
}(Backbone.Collection), namespace("App.components", function(exports) {
    return exports.ChoicesCollection = ChoicesCollection
});
var ChoicesView, _ref, __bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
ChoicesView = function(_super) {
    function ChoicesView() {
        return this.renderChoice = __bind(this.renderChoice, this), this.onKeyup = __bind(this.onKeyup, this), this.onClickChoice = __bind(this.onClickChoice, this), this.onMouseleave = __bind(this.onMouseleave, this), this.onMouseover = __bind(this.onMouseover, this), _ref = ChoicesView.__super__.constructor.apply(this, arguments)
    }
    return __extends(ChoicesView, _super), ChoicesView.prototype.tagName = "ul", ChoicesView.prototype.collection = null, ChoicesView.prototype.className = "choices", ChoicesView.prototype.$document = null, ChoicesView.prototype.createChoiceView = null, ChoicesView.prototype.keyboard = null, ChoicesView.prototype.options = null, ChoicesView.prototype.defaults = {
        browser: null
    }, ChoicesView.prototype.initialize = function(options) {
        return this.options = _.extend({}, this.defaults, options), this.$document = $(document), this.createChoiceView = options.createChoiceView, this.keyboard = options.keyboard, this.listenTo(this.collection, "add remove", this.render, this), "fallback" === this.options.browser && this.bindFallbackEvents(), this
    }, ChoicesView.prototype.bindEvents = function() {
        return "default" === this.options.browser ? this.bindDefaultEvents() : "touch" === this.options.browser && this.bindTouchEvents(), this
    }, ChoicesView.prototype.bindDefaultEvents = function() {
        return null != this.keyboard && this.$document.on("keyup.choices", this.onKeyup), this.$el.on("click.choices", ".choice", this.onClickChoice), this.$el.on("mouseover.choices", ".choice", this.onMouseover),
            this.$el.on("mouseout.choices", ".choice", this.onMouseleave), this
    }, ChoicesView.prototype.bindTouchEvents = function() {
        return this.$el.on("touchend.choices", ".choice", this.onClickChoice), this
    }, ChoicesView.prototype.bindFallbackEvents = function() {
        return this.$el.on("change.choices", ".choice", this.onClickChoice), this
    }, ChoicesView.prototype.unbindEvents = function() {
        return this.$el.off(".choices"), this.$document.off(".choices"), this
    }, ChoicesView.prototype.onMouseover = function(evt) {
        var index;
        return index = $(evt.currentTarget).index(), this.collection.preselect(index), this
    }, ChoicesView.prototype.onMouseleave = function(evt) {
        var index;
        return index = $(evt.currentTarget).index(), this.collection.removePreselect(index), this
    }, ChoicesView.prototype.onArrowKeyPress = function(direction) {
        return this.keyboard.isLeftDirection(direction) ? (this.collection.preselectPrevious(), !1) : !this.keyboard.isRightDirection(direction) || (this.collection.preselectNext(), !1)
    }, ChoicesView.prototype.onEnterKeyPress = function() {
        return this.onConfirmPreselect()
    }, ChoicesView.prototype.onConfirmPreselect = function() {
        return null == this.collection.getPreselectedChoice() || (this.collection.tooglePreselected(), !1)
    }, ChoicesView.prototype.onClickChoice = function(evt) {
        var index;
        return index = $(evt.currentTarget).index(), this.collection.selectByIndex(index), this
    }, ChoicesView.prototype.onKeyup = function(evt) {
        return this.keyboard.isSpace(evt) ? this.onConfirmPreselect() : (this.checkNumberKeyup(evt), this)
    }, ChoicesView.prototype.checkNumberKeyup = function(evt) {
        var number;
        return number = this.collection.containsTwoDigitsChoice() ? this.keyboard.getNumberUsingMultipleDigits(evt) : this.keyboard.getNumber(evt), null != number && this.collection.selectByNumber(number), this
    }, ChoicesView.prototype.render = function() {
        return this.$el.empty(), this.collection.forEach(this.renderChoice), this
    }, ChoicesView.prototype.renderChoice = function(model, index) {
        var choiceView, positionClass;
        return positionClass = this.getPositionClass(index), choiceView = this.createChoiceView(model, positionClass), this.appendChoiceView(choiceView.render()), this
    }, ChoicesView.prototype.getPositionClass = function(index) {
        return 0 === index ? "first" : index === this.collection.length - 1 ? "last" : ""
    }, ChoicesView.prototype.appendChoiceView = function(choiceView) {
        return this.$el.append(choiceView.$el), this
    }, ChoicesView
}(Backbone.View), namespace("App.components", function(exports) {
    return exports.ChoicesView = ChoicesView
});
var ScreenCollection;
ScreenCollection = function() {
    function ScreenCollection(screens) {
        this.screens = screens, this.resetActive()
    }
    return ScreenCollection.prototype.screens = null, ScreenCollection.prototype.currentActive = null, ScreenCollection.prototype.get = function() {
        return this.screens
    }, ScreenCollection.prototype.hide = function() {
        _.each(this.screens, function(screen) {
            return screen.hide()
        })
    }, ScreenCollection.prototype.setActiveById = function(id) {
        this.currentActive.isActive = !1, this.currentActive = _.find(this.screens, function(screen) {
            return parseInt(screen.id, 10) === id
        }), this.currentActive.isActive = !0
    }, ScreenCollection.prototype.resetActive = function() {
        this.currentActive = this.screens[0]
    }, ScreenCollection.prototype.open = function() {
        this.currentActive.show(), this.currentActive.open()
    }, ScreenCollection.prototype.resize = function() {
        _.each(this.screens, function(screen) {
            return screen.resizeComponents()
        }), _.each(this.screens, function(screen) {
            return screen.preCalculateContentHeight()
        }), _.each(this.screens, function(screen) {
            return screen.resizeLayout()
        })
    }, ScreenCollection.prototype.isBrandedOutroActive = function() {
        return this.currentActive.isDefaultBranded
    }, ScreenCollection
}(), namespace("App.components", function(exports) {
    return exports.ScreenCollection = ScreenCollection
});
var ConfirmButtonView, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
ConfirmButtonView = function(_super) {
    function ConfirmButtonView() {
        return _ref = ConfirmButtonView.__super__.constructor.apply(this, arguments)
    }
    return __extends(ConfirmButtonView, _super), ConfirmButtonView.prototype.template = null, ConfirmButtonView.prototype.buttonView = null, ConfirmButtonView.prototype.$buttonWrapper = null, ConfirmButtonView.prototype.$text = null, ConfirmButtonView.prototype.onRender = null, ConfirmButtonView.prototype.initialize = function(options) {
        return this.template = options.template, this.buttonView = options.buttonView, this.onRender = options.onRender, this.$el.html(this.template()), this.$buttonWrapper = this.$el.find(".button-wrapper"), this.$text = this.$el.find(".text"), this
    }, ConfirmButtonView.prototype.render = function() {
        return this.renderButton(), this.renderText(), this.onRender(this.$el), this
    }, ConfirmButtonView.prototype.renderText = function() {
        return this.$text.html(App.Texts["button-tip-default"]), this
    }, ConfirmButtonView.prototype.renderButton = function() {
        return this.$buttonWrapper.html(this.buttonView.render().$el), this
    }, ConfirmButtonView
}(Backbone.View), namespace("App.components", function(exports) {
    return exports.ConfirmButtonView = ConfirmButtonView
});
var RankingListTemplate = '  <div class="info-text">    <%- tipText %>  </div>  <ul class="columns ranking-list">  </ul>';
namespace("App.templates", function(exports) {
    exports.RankingListTemplate = RankingListTemplate
});
var RankingChoiceTemplate = '<li class="ranking-list-item ranking-list-item-dropzone container step<%= containerStep %>" data-index="<%= choice.order %>">  <div class="letter">    <span><%= choice.order + 1 %></span>  </div>  <span class="label"><%= choice.item %></span>  <span class="tick"></span>  <div class="aux">    <div class="inset"></div>    <div class="bg"></div>    <div class="bd"></div>    <div class="overlay"></div>  </div>  <div class="hamburger-feedback">    <div class="move-icon">      <div class="arrow">&#x25B2;</div>      <div class="arrow">&#x25BC;</div>    </div>  </div></li>';
namespace("App.templates", function(exports) {
        exports.RankingChoiceTemplate = RankingChoiceTemplate
    }),
    function() {
        function detectTransformProperty() {
            return "transform" in document.body.style ? "transform" : "webkitTransform" in document.body.style ? "webkitTransform" : "mozTransform" in document.body.style ? "mozTransform" : "oTransform" in document.body.style ? "oTransform" : "msTransform" in document.body.style ? "msTransform" : null
        }

        function RankingFieldFactory(onValueChange) {
            this.onValueChange = onValueChange, this.kb = App.Keyboard, this.container = null, this.dragged = null, this.draggable = null, this.droppable = null, this.isDragging = !1, this.placeholder = null, this.state = {
                items: []
            }, this.transformProp = null, this.focusedElement = null, this.selectedElement = null
        }
        var DRAGGED_ITEM_SELECTOR = ".ranking-list-item-dragged",
            DROPZONE_ITEM_SELECTOR = ".ranking-list-item-dropzone",
            DRAGGED_ITEM_CLASS = DRAGGED_ITEM_SELECTOR.substr(1),
            DROPZONE_ITEM_CLASS = DROPZONE_ITEM_SELECTOR.substr(1);
        RankingFieldFactory.prototype.render = function(container, state) {
            this.container = container, this.state = $.extend(this.state, state), this.transformProp = detectTransformProperty(), this.setDraggableList(), this.renderChoices()
        }, RankingFieldFactory.prototype.onError = function(error) {
            console.error(error)
        }, RankingFieldFactory.prototype.update = function(state) {
            this.onValueChange(state), this.render(this.container, state)
        }, RankingFieldFactory.prototype.setDraggableList = function() {
            this.$draggableList = this.container.find(".ranking-list").eq(0)
        }, RankingFieldFactory.prototype.renderChoices = function() {
            this.$draggableList.empty(), _.each(this.state.items, _.bind(this.renderChoice, this))
        }, RankingFieldFactory.prototype.updateState = function() {
            var newState = {
                    items: []
                },
                choices = this.state.items;
            _.each(this.$draggableList.find(".ranking-list-item").get(), function(elm, idx) {
                var index = $(elm).attr("data-index"),
                    choice = choices[index];
                choice.order = idx, newState.items.push(choice)
            }), this.update(newState)
        }, RankingFieldFactory.prototype.startDragAndDrop = function() {
            this.setDraggableElements(), this.bindKeyboardEvents()
        }, RankingFieldFactory.prototype.stopDragAndDrop = function() {
            this.unsetDraggableElements(), this.unsetDroppableElements(), this.unbindKeyboardEvents()
        }, RankingFieldFactory.prototype.setDraggableElements = function() {
            var options = {
                    manualStart: !0,
                    restrict: {
                        restriction: ".ranking-list"
                    }
                },
                holdDuration = Globals.isTouch ? 200 : 0;
            interact.debug().defaultOptions._holdDuration = holdDuration, this.draggable = interact(".ranking-list-item", {
                context: this.$draggableList[0]
            }).draggable(options).on("hold", _.bind(this.onHold, this)).on("dragstart", _.bind(this.onDragStart, this)).on("dragmove", _.bind(this.onDragMove, this)).on("dragend", _.bind(this.onDragEnd, this))
        }, RankingFieldFactory.prototype.unsetDraggableElements = function() {
            this.draggable && (this.draggable.unset(), this.draggable = null)
        }, RankingFieldFactory.prototype.setDroppableElements = function() {
            this.dragged.elm.removeClass(DROPZONE_ITEM_CLASS);
            var options = {
                accept: DRAGGED_ITEM_SELECTOR
            };
            this.droppable = interact(DROPZONE_ITEM_SELECTOR, {
                context: this.$draggableList[0]
            }).dropzone(options).on("dragenter", _.bind(this.onDragEnter, this))
        }, RankingFieldFactory.prototype.unsetDroppableElements = function() {
            this.droppable && (this.droppable.unset(), this.droppable = null), this.dragged && this.dragged.elm.addClass(DROPZONE_ITEM_CLASS)
        }, RankingFieldFactory.prototype.bindKeyboardEvents = function() {
            $(window).on("keyup.ranking", _.bind(this.onKeyUp, this))
        }, RankingFieldFactory.prototype.unbindKeyboardEvents = function() {
            $(window).off("keyup.ranking")
        }, RankingFieldFactory.prototype.onHold = function(event) {
            var interaction = event.interaction;
            interaction.interacting() || interaction.start({
                name: "drag"
            }, event.interactable, event.currentTarget)
        }, RankingFieldFactory.prototype.onDragStart = function(event) {
            event.preventDefault(), "keyup" !== event.type && typeform.Form.scroll.unbindEvents(), this.isDragging = !0, this.$draggableList.find(".ranking-list-item").css({
                "pointer-events": "none"
            }), this.initDraggedElement(event), this.createPlaceholder(), this.setDroppableElements(), this.setInitialDraggedElementPosition(), interact.dynamicDrop(!0)
        }, RankingFieldFactory.prototype.onDragMove = function(event) {
            this.dragged.distance += event.dy, this.dragged.y += event.dy, this.setDraggedElementPosition(), this.setDragDirection()
        }, RankingFieldFactory.prototype.onDragEnd = function(event) {
            event.preventDefault(), interact.dynamicDrop(!1), this.unsetDroppableElements(), this.removePlaceholder(), this.updateState(), this.isDragging = !1, "keyup" !== event.type && typeform.Form.scroll.bindEvents()
        }, RankingFieldFactory.prototype.onDragEnter = function(event) {
            this.dragged.distance = 0, "up" === this.dragged.direction ? this.movePlaceholderUp(event) : this.movePlaceholderDown(event), this.dragged.order = $(event.target).attr("data-index")
        }, RankingFieldFactory.prototype.onKeyUp = function(event) {
            var key = event.keyCode || event.which;
            switch (!0) {
                case this.kb.isEsc(key):
                    this.onPressEsc.call(this, event);
                    break;
                case this.kb.isSpace(key):
                    this.onPressSpace.call(this, event);
                    break;
                case this.kb.isArrowUp(key):
                    this.onPressUp.call(this, event);
                    break;
                case this.kb.isArrowDown(key):
                    this.onPressDown.call(this, event)
            }
        }, RankingFieldFactory.prototype.onPressEsc = function(event) {
            this.focusedElement = null, this.selectedElement = null, this.isDragging && (this.unsetDroppableElements(), this.removePlaceholder()), this.resetFocus()
        }, RankingFieldFactory.prototype.onPressSpace = function(event) {
            if (null !== this.selectedElement) this.selectedElement = null, this.onDragEnd(event);
            else if (null !== this.focusedElement) {
                var selected = this.getFocusedItem();
                this.focusedElement = null, this.selectedElement = selected.index(), this.onDragStart(event)
            } else this.focusedElement = 0, this.setFocus()
        }, RankingFieldFactory.prototype.onPressUp = function(event) {
            if (null !== this.selectedElement) this.movePlaceholderUp(event);
            else {
                if (null === this.focusedElement) return !1;
                this.moveFocusUp()
            }
        }, RankingFieldFactory.prototype.onPressDown = function(event) {
            if (null !== this.selectedElement) this.movePlaceholderDown(event);
            else {
                if (null === this.focusedElement) return !1;
                this.moveFocusDown()
            }
        }, RankingFieldFactory.prototype.moveFocusUp = function(event) {
            this.focusedElement > 0 && (this.focusedElement -= 1), this.updateFocus()
        }, RankingFieldFactory.prototype.moveFocusDown = function(event) {
            this.focusedElement < this.state.items.length - 1 && (this.focusedElement += 1), this.updateFocus()
        }, RankingFieldFactory.prototype.getFocusedItem = function() {
            return this.$draggableList.find(".ranking-list-item").eq(this.focusedElement)
        }, RankingFieldFactory.prototype.getSelectedItem = function() {
            return this.$draggableList.find(".ranking-list-item").not(DRAGGED_ITEM_SELECTOR).eq(this.selectedElement)
        }, RankingFieldFactory.prototype.resetFocus = function() {
            this.$draggableList.find(".ranking-list-item").removeClass("pre-selected")
        }, RankingFieldFactory.prototype.setFocus = function() {
            this.$draggableList.find('[data-index="' + this.focusedElement + '"]').addClass("pre-selected")
        }, RankingFieldFactory.prototype.updateFocus = function() {
            if (null === this.focusedElement) return !1;
            this.resetFocus(), this.setFocus()
        }, RankingFieldFactory.prototype.initDraggedElement = function(event) {
            var choiceElm = $(event.target);
            "keyup" === event.type && (choiceElm = $(this.getSelectedItem())), this.dragged = {
                y: 0,
                distance: 0,
                elm: choiceElm,
                order: parseInt(choiceElm.attr("data-index"), 10)
            }
        }, RankingFieldFactory.prototype.setInitialDraggedElementPosition = function() {
            this.dragged.elm.appendTo(this.$draggableList.get(0)), this.dragged.elm.addClass(DRAGGED_ITEM_CLASS);
            var yPosition = this.placeholder.position().top;
            this.dragged.elm.css({
                position: "absolute",
                top: yPosition + "px",
                width: this.dragged.elm.width()
            })
        }, RankingFieldFactory.prototype.setDraggedElementPosition = function() {
            var elm = this.dragged.elm.get(0),
                yAxisPos = this.dragged.y;
            this.transformProp ? elm.style[this.transformProp] = "translate(0px, " + yAxisPos + "px)" : this.dragged.elm.css({
                display: "block",
                position: "absolute",
                top: yAxisPos + "px"
            })
        }, RankingFieldFactory.prototype.setDragDirection = function() {
            this.dragged.direction = this.dragged.distance > 0 ? "down" : "up"
        }, RankingFieldFactory.prototype.createPlaceholder = function() {
            this.placeholder = this.dragged.elm.clone().removeClass(DROPZONE_ITEM_CLASS).addClass("ranking-list-item-placeholder").insertAfter(this.dragged.elm)
        }, RankingFieldFactory.prototype.removePlaceholder = function() {
            this.dragged.elm.remove(), null !== this.placeholder && this.placeholder.removeClass("ranking-list-item-placeholder").addClass(DROPZONE_ITEM_CLASS), this.placeholder = null
        }, RankingFieldFactory.prototype.movePlaceholderUp = function(event) {
            var target = event.target;
            "keyup" === event.type && (this.selectedElement > 0 && (this.selectedElement -= 1), target = this.getSelectedItem()), this.placeholder.insertBefore(target)
        }, RankingFieldFactory.prototype.movePlaceholderDown = function(event) {
            var target = event.target;
            "keyup" === event.type && (this.selectedElement < this.state.items.length + 1 && (this.selectedElement += 1), target = this.getSelectedItem()), this.placeholder.insertAfter(target)
        }, RankingFieldFactory.prototype.renderChoice = function(choice, index) {
            var templateData = {
                    choice: choice,
                    index: index,
                    containerStep: window.containerStep
                },
                tpl = App.Utils.getTemplate("RankingChoiceTemplate", templateData);
            this.$draggableList.append(tpl)
        }, namespace("App.factories", function(exports) {
            exports.RankingFieldFactory = RankingFieldFactory
        })
    }(),
    function() {
        var RankingFactory = function(fieldData, featureDetection) {
            var model = new App.models.RankingModel(fieldData);
            return {
                model: model,
                view: new App.components.RankingView({
                    model: model,
                    featureDetection: featureDetection
                })
            }
        };
        namespace("App.factories", function(exports) {
            exports.RankingFactory = RankingFactory
        })
    }(),
    function() {
        function _setValue(value, silent) {
            var options = {};
            silent && (options.silent = !0), _resetError.call(this, options), this.set({
                items: value.items,
                isFilled: _isFilled(value.items)
            }, options)
        }

        function _isFilled(choices) {
            return !!choices
        }

        function _resetError(options) {
            this.setError(null, options)
        }
        var RankingModel = App.models.BaseFieldModel.extend({
            defaults: {
                required: !1,
                items: [],
                isFilled: !1
            },
            setValue: function(choices, silent) {
                _setValue.call(this, choices, silent)
            },
            setError: function(error, options) {
                options = options || {}, this.set({
                    error: error
                }, options)
            },
            validate: function() {
                var isFilled = this.get("isFilled"),
                    isRequired = this.get("isRequired"),
                    errorKey = null;
                return _resetError.call(this), !isFilled && isRequired && (errorKey = "required"), this.setError(errorKey), !errorKey
            },
            getValue: function() {
                var choices = {
                        items: this.get("items")
                    },
                    isFilled = this.get("isFilled");
                return {
                    toResult: function() {
                        var items = {},
                            rankingResult = {};
                        return isFilled && (_.each(choices.items, function(choice) {
                            items["choice:" + choice.id] = choice.order + 1
                        }), rankingResult.choices = items), rankingResult
                    },
                    toForm: function() {
                        return choices
                    },
                    toString: function() {}
                }
            },
            getValueForLogicJumps: function() {}
        });
        namespace("App.models", function(exports) {
            exports.RankingModel = RankingModel
        })
    }(),
    function() {
        var _onValueChange = function(value) {
                this.model.setValue(value, !0)
            },
            RankingView = Backbone.View.extend({
                tagName: "div",
                className: "ranking-list-wrapper",
                template: App.Utils.getTemplate("RankingListTemplate"),
                rankingField: null,
                initialize: function(options) {
                    this.rankingField = new App.factories.RankingFieldFactory(_.bind(_onValueChange, this)), this.listenTo(this.model, "change", _.bind(this.renderRankingField, this))
                },
                bindEvents: function() {
                    this.rankingField.startDragAndDrop()
                },
                unbindEvents: function() {
                    this.rankingField.stopDragAndDrop()
                },
                onArrowKeyPress: function() {
                    return !1
                },
                onEnterKeyPress: function() {
                    return !0
                },
                renderRankingField: function() {
                    this.rankingField.render(this.$el, this.model.getValue().toForm())
                },
                render: function() {
                    Backbone.View.prototype.render.apply();
                    var tplData = {
                        tipText: App.Texts["ranking-field-tip"]
                    };
                    return this.$el.html(this.template(tplData)), this.renderRankingField(), this
                }
            });
        namespace("App.components", function(exports) {
            exports.RankingView = RankingView
        })
    }();
var Calculation, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
Calculation = function(_super) {
    function Calculation() {
        return _ref = Calculation.__super__.constructor.apply(this, arguments)
    }
    return __extends(Calculation, _super), Calculation.prototype.defaults = {
        answer: null,
        operation: "",
        value: 0,
        variable: null,
        currentValue: null
    }, Calculation.prototype.operators = {
        add: function(a, b) {
            return a + b
        },
        subtract: function(a, b) {
            return a - b
        },
        multiply: function(a, b) {
            return a * b
        },
        divide: function(a, b) {
            return a / b
        }
    }, Calculation.prototype.evaluate = function(type, currentTotal) {
        return null == type && (type = null), "ranking" === type ? currentTotal = this.evaluateRankingField(this.attributes.currentValue, this.attributes.answer) : (this.isEqual(this.attributes.currentValue, this.attributes.answer) || this.contains(this.attributes.currentValue, this.attributes.answer)) && (currentTotal = this.operators[this.attributes.operation](currentTotal, this.attributes.value)), currentTotal
    }, Calculation.prototype.evaluateRankingField = function(choices, expectedValues) {
        var applicableModification, _this = this;
        return applicableModification = 0, !_.isNull(choices) && !_.isNull(expectedValues) && (_.each(choices.choices, function(value, key) {
            var expected;
            if (expected = JSON.parse(expectedValues), expected.key === key && parseInt(expected.value) === value) return applicableModification = _this.operators[_this.attributes.operation](_this.attributes.value)
        }), applicableModification)
    }, Calculation.prototype.isEqual = function(a, b) {
        return !_.isNull(a) && !_.isNull(b) && (a === b || a.toString() === b.toString())
    }, Calculation.prototype.contains = function(a, b) {
        var choices;
        return !!_.isObject(a) && (choices = a.choices, _.isObject(choices) ? this.containsForMultipleValues(choices, b) : this.containsForSingleValues(choices, b))
    }, Calculation.prototype.containsForMultipleValues = function(choices, b) {
        return _.contains(_.values(choices), b)
    }, Calculation.prototype.containsForSingleValues = function(choices, b) {
        return choices === b
    }, Calculation
}(Backbone.Model), namespace("App.Service.Calculator", function(exports) {
    return exports.Calculation = Calculation
});
var Calculator, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
Calculator = function(_super) {
    function Calculator() {
        return _ref = Calculator.__super__.constructor.apply(this, arguments)
    }
    return __extends(Calculator, _super), Calculator.prototype.defaults = {
        fieldCalculationsCollection: [],
        seedValue: 0,
        total: 0
    }, Calculator.prototype.initialize = function() {
        return this.evaluate()
    }, Calculator.prototype.connect = function(controls) {
        this.attributes.fieldCalculationsCollection.forEach(function(fieldCalculations) {
            var control;
            return control = _.findWhere(controls, {
                id: fieldCalculations.get("fieldId")
            }), fieldCalculations.setControl(control)
        })
    }, Calculator.prototype.hasCalculations = function() {
        return _.some(this.attributes.fieldCalculationsCollection.invoke("hasCalculations"))
    }, Calculator.prototype.getValue = function(fieldId) {
        var total;
        return null == fieldId && (fieldId = null), total = this.attributes.seedValue, this.attributes.fieldCalculationsCollection.find(function(fieldCalculations) {
            var control;
            return control = fieldCalculations.control, null != control && control.isActive && control.isVisible && (total = fieldCalculations.evaluate(total)), fieldCalculations.get("fieldId") === fieldId
        }), total
    }, Calculator.prototype.evaluate = function() {
        this.set({
            total: this.getValue()
        })
    }, Calculator
}(Backbone.Model), namespace("App.Service.Calculator", function(exports) {
    return exports.Calculator = Calculator
});
var CalculatorFactory;
CalculatorFactory = function() {
    function CalculatorFactory() {}
    return CalculatorFactory.build = function(formData) {
        var priceCalculations, priceSeedValue, scoreCalculations;
        return scoreCalculations = new Backbone.Collection, priceCalculations = new Backbone.Collection, _.each(formData.fields, function(field) {
            scoreCalculations.add(new App.Service.Calculator.FieldCalculationsCollection({
                fieldId: field.id,
                calculations: new Backbone.Collection(CalculatorFactory.filterCalculations(field.calculations, "score"), {
                    model: App.Service.Calculator.Calculation
                })
            })), priceCalculations.add(new App.Service.Calculator.FieldCalculationsCollection({
                fieldId: field.id,
                calculations: new Backbone.Collection(CalculatorFactory.filterCalculations(field.calculations, "price"), {
                    model: App.Service.Calculator.Calculation
                })
            }))
        }), priceSeedValue = CalculatorFactory.getPaymentPrice(formData.fields), {
            scoreCalculator: new App.Service.Calculator.Calculator({
                fieldCalculationsCollection: scoreCalculations,
                seedValue: 0
            }),
            priceCalculator: new App.Service.Calculator.Calculator({
                fieldCalculationsCollection: priceCalculations,
                seedValue: priceSeedValue
            })
        }
    }, CalculatorFactory.filterCalculations = function(calculations, variable) {
        return _.filter(calculations, function(calculation) {
            return calculation.variable === variable
        })
    }, CalculatorFactory.getPaymentPrice = function(fields) {
        var paymentField;
        return paymentField = _.find(fields, function(field) {
            return "payment" === field.type
        }), null != paymentField ? paymentField.price : 0
    }, CalculatorFactory
}(), namespace("App.Service.Calculator", function(exports) {
    return exports.CalculatorFactory = CalculatorFactory
});
var FieldCalculationsCollection, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
FieldCalculationsCollection = function(_super) {
    function FieldCalculationsCollection() {
        return _ref = FieldCalculationsCollection.__super__.constructor.apply(this, arguments)
    }
    return __extends(FieldCalculationsCollection, _super), FieldCalculationsCollection.prototype.defaults = {
        fieldId: null,
        calculations: []
    }, FieldCalculationsCollection.prototype.control = null, FieldCalculationsCollection.prototype.setValue = function(value) {
        var _this = this;
        this.attributes.calculations.forEach(function(calculation) {
            var type;
            return calculation.set({
                currentValue: value
            }), type = null != _this.control ? _this.control.type : null, calculation.evaluate(type)
        }), this.evaluate()
    }, FieldCalculationsCollection.prototype.setControl = function(control) {
        var onChange, _this = this;
        if (this.control = control, null != this.control) return "file-upload" === this.control.type ? (onChange = function(value) {
            return _this.setValue(value), typeform.Form.check()
        }, control.subscribeOnValueForCalculatorChange(onChange), this.setValue(this.control.getValueForCalculator())) : this.connectOnValueChange(), this
    }, FieldCalculationsCollection.prototype.connectOnValueChange = function() {
        var _this = this;
        return this.control.$elem.on("change-value", function(event, control) {
            return _this.setValue(control.value)
        }), this
    }, FieldCalculationsCollection.prototype.hasCalculations = function() {
        return this.attributes.calculations.length > 0
    }, FieldCalculationsCollection.prototype.evaluate = function(currentTotal) {
        var type;
        return type = null != this.control ? this.control.type : null, this.attributes.calculations.forEach(function(calculation) {
            currentTotal = calculation.evaluate(type, currentTotal)
        }), currentTotal
    }, FieldCalculationsCollection
}(Backbone.Model), namespace("App.Service.Calculator", function(exports) {
    return exports.FieldCalculationsCollection = FieldCalculationsCollection
});
var JumpsModel, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
JumpsModel = function(_super) {
    function JumpsModel() {
        return _ref = JumpsModel.__super__.constructor.apply(this, arguments)
    }
    return __extends(JumpsModel, _super), JumpsModel.prototype.defaults = {
        id: null,
        origin: null,
        destination: {
            id: null,
            type: ""
        },
        evaluations: []
    }, JumpsModel.prototype.setControls = function(controls) {
        var _this = this;
        if (this.controls = controls, "true" !== this.attributes.evaluations) return _.each(this.attributes.evaluations, function(evaluation) {
            if (_.isObject(evaluation)) return evaluation.controls = _this.controls
        })
    }, JumpsModel.prototype.evaluate = function() {
        var arrayToEval, _this = this;
        return arrayToEval = [], !_.isObject(this.attributes.evaluations) || (_.each(this.attributes.evaluations, function(evaluation) {
            if (null != evaluation.get("operator") && arrayToEval.push(App.Sanitize.sanitize(evaluation.get("operator"))), null != evaluation.get("condition")) return arrayToEval.push(evaluation.evaluate().toString())
        }), eval(arrayToEval.join(" ")))
    }, JumpsModel
}(Backbone.Model), namespace("App.Service.LogicJumps", function(exports) {
    return exports.JumpsModel = JumpsModel
});
var JumpsData, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
JumpsData = function(_super) {
    function JumpsData() {
        return _ref = JumpsData.__super__.constructor.apply(this, arguments)
    }
    return __extends(JumpsData, _super), JumpsData.prototype.getOutgoing = function(id) {
        if (null == id && (id = !1), id) return this.filter(function(jump) {
            return jump.attributes.origin === id
        })
    }, JumpsData.prototype.getWhereOriginIsHiddenFields = function() {
        return this.filter(function(jump) {
            return "hidden" === jump.attributes.originType
        })
    }, JumpsData.prototype.getSubmit = function() {
        return this.filter(function(jump) {
            if ("submit" === jump.toJSON().origin) return jump
        })
    }, JumpsData
}(Backbone.Collection), namespace("App.Service.LogicJumps", function(exports) {
    return exports.JumpsData = JumpsData
});
var LogicJumpsControllerFactory;
LogicJumpsControllerFactory = function() {
    function LogicJumpsControllerFactory() {}
    return LogicJumpsControllerFactory.build = function(jumps, scoreCalculator, priceCalculator, outrosCollection, hiddenFields) {
        var jumpsData, jumpsModels;
        return jumpsModels = _.map(jumps, function(jump) {
            return jump.evaluations = jump.conditions, "true" !== jump.evaluations && (jump.evaluations = _.map(jump.conditions, function(evaluationData) {
                return new App.Service.LogicJumps.EvaluatorFactory(evaluationData, scoreCalculator, priceCalculator, hiddenFields)
            })), new App.Service.LogicJumps.JumpsModel(jump)
        }), jumpsData = new App.Service.LogicJumps.JumpsData(jumpsModels), new App.Service.LogicJumps.LogicJumpsController(jumpsData, outrosCollection)
    }, LogicJumpsControllerFactory
}(), namespace("App.Service.LogicJumps", function(exports) {
    return exports.LogicJumpsControllerFactory = LogicJumpsControllerFactory
});
var EvaluatorFactory;
EvaluatorFactory = function() {
    function EvaluatorFactory(evaluationData, scoreCalculator, priceCalculator, hiddenFields) {
        return "score" === evaluationData.variable || "price" === evaluationData.variable ? new App.Service.LogicJumps.CalculatorConditionEvaluator(evaluationData, {
            calculator: "score" === evaluationData.variable ? scoreCalculator : priceCalculator
        }) : "hidden" === evaluationData.variable ? new App.Service.LogicJumps.HiddenFieldsConditionEvaluator(evaluationData, {
            hiddenFields: hiddenFields
        }) : "file-upload" === evaluationData.fieldType ? new App.Service.LogicJumps.FileUploadConditionEvaluator(evaluationData) : "date" === evaluationData.fieldType ? new App.Service.LogicJumps.DateConditionEvaluator(evaluationData) : new App.Service.LogicJumps.FieldConditionEvaluator(evaluationData)
    }
    return EvaluatorFactory
}(), namespace("App.Service.LogicJumps", function(exports) {
    return exports.EvaluatorFactory = EvaluatorFactory
});
var LogicJumpsController, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments)
    }
};
LogicJumpsController = function() {
    function LogicJumpsController(jumps, outrosCollection) {
        this.jumps = jumps, this.outrosCollection = outrosCollection, this.getDestinationIndex = __bind(this.getDestinationIndex, this), this.jump = __bind(this.jump, this), this.processJump = __bind(this.processJump, this), this.checkForControl = __bind(this.checkForControl, this)
    }
    return LogicJumpsController.prototype.jumps = null, LogicJumpsController.prototype.controls = null, LogicJumpsController.prototype.values = [], LogicJumpsController.prototype.onBackwardJump = function() {}, LogicJumpsController.prototype.setControls = function(controls) {
        var _this = this;
        this.controls = controls, this.jumps.forEach(function(jump) {
            return jump.setControls(_this.controls)
        })
    }, LogicJumpsController.prototype.check = function() {
        var hasJumpedWithHiddenFields;
        this.outrosCollection.resetActive(), (hasJumpedWithHiddenFields = this.checkHiddenFields()) || this.checkFromControlIndex(0)
    }, LogicJumpsController.prototype.checkHiddenFields = function() {
        var jumps;
        return jumps = this.jumps.getWhereOriginIsHiddenFields(), this.processJumps(jumps)
    }, LogicJumpsController.prototype.checkFromControlIndex = function(index) {
        var controls;
        return controls = _.rest(this.controls, index), _.every(controls, this.checkForControl), !0
    }, LogicJumpsController.prototype.checkForControl = function(control) {
        var hasJumped, hasJumps, jumps;
        return control.set("isActive", !0), jumps = this.jumps.getOutgoing(control.id), hasJumps = !_.isEmpty(jumps), hasJumped = this.processJumps(jumps), hasJumps && !hasJumped && this.hasJumpsAndNotJumped(control), !hasJumps
    }, LogicJumpsController.prototype.processJumps = function(jumps) {
        return !_.every(jumps, this.processJump)
    }, LogicJumpsController.prototype.processJump = function(jump) {
        var continueJumpsLoop;
        return continueJumpsLoop = !0, jump.evaluate() && (this.jump(jump.get("origin"), jump.get("destination")), continueJumpsLoop = !1), continueJumpsLoop
    }, LogicJumpsController.prototype.hasJumpsAndNotJumped = function(control) {
        var index;
        return index = _.indexOf(this.controls, control), control.isCompleted ? this.checkFromControlIndex(index + 1) : this.hideControls(index + 1, _.size(this.controls)), !1
    }, LogicJumpsController.prototype.getControlById = function(id) {
        return _.findWhere(this.controls, {
            id: id
        })
    }, LogicJumpsController.prototype.jump = function(controlId, destination) {
        var control, jumpFrom, jumpTo;
        return jumpTo = this.getDestinationIndex(destination), control = this.getControlById(controlId), jumpFrom = _.indexOf(this.controls, control), jumpTo < jumpFrom ? (this.doBackwardJump(control, destination), jumpTo = _.size(this.controls)) : this.checkFromControlIndex(jumpTo), this.hideControls(jumpFrom + 1, jumpTo),
            this.activeOutro(destination), !1
    }, LogicJumpsController.prototype.doBackwardJump = function(control, destination) {
        var destinationControl;
        destinationControl = this.getControlById(destination.id), control.$elem.hasClass("focus") && destinationControl.isActive && this.onBackwardJump(destinationControl)
    }, LogicJumpsController.prototype.hideControls = function(from, to) {
        var i, _i;
        for (i = _i = from; from <= to ? _i < to : _i > to; i = from <= to ? ++_i : --_i) this.controls[i].set("isActive", !1)
    }, LogicJumpsController.prototype.getDestinationIndex = function(destination) {
        var destinationControl, index;
        return "submit" === destination || "outro" === destination.type ? index = _.size(this.controls) : (destinationControl = _.find(this.controls, function(control) {
            return control.id === destination.id
        }), index = _.indexOf(this.controls, destinationControl)), index
    }, LogicJumpsController.prototype.activeOutro = function(destination) {
        "submit" === destination ? this.outrosCollection.setActiveById(0) : "outro" === destination.type && this.outrosCollection.setActiveById(destination.id)
    }, LogicJumpsController.prototype.getOutgoing = function(id) {
        return this.jumps.getOutgoing(id)
    }, LogicJumpsController
}(), namespace("App.Service.LogicJumps", function(exports) {
    return exports.LogicJumpsController = LogicJumpsController
});
var ConditionEvaluator, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
ConditionEvaluator = function(_super) {
    function ConditionEvaluator() {
        return _ref = ConditionEvaluator.__super__.constructor.apply(this, arguments)
    }
    return __extends(ConditionEvaluator, _super), ConditionEvaluator.prototype.defaults = {
        condition: "",
        conditionName: "",
        value: "",
        id: null,
        operator: null
    }, ConditionEvaluator.prototype.controls = null, ConditionEvaluator.prototype.getControl = function() {
        return _.findWhere(this.controls, {
            id: this.attributes.field
        })
    }, ConditionEvaluator.prototype.getLogicValue = function() {
        return this.getControl().getValueForLogicJumps()
    }, ConditionEvaluator
}(Backbone.Model), namespace("App.Service.LogicJumps", function(exports) {
    return exports.ConditionEvaluator = ConditionEvaluator
});
var FieldConditionEvaluator, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    },
    __indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item) return i;
        return -1
    };
FieldConditionEvaluator = function(_super) {
    function FieldConditionEvaluator() {
        return _ref = FieldConditionEvaluator.__super__.constructor.apply(this, arguments)
    }
    return __extends(FieldConditionEvaluator, _super), FieldConditionEvaluator.prototype.evaluate = function() {
        var collectResults, equalityOperator, fieldValue, operator, _this = this;
        return null != (fieldValue = this.getFieldValue()) && (operator = this.getOperator(this.attributes.condition), _.isObject(fieldValue) ? (collectResults = [], equalityOperator = ["===", "=="], _.each(fieldValue, function(value) {
            var conditionResult;
            return conditionResult = eval(App.Sanitize.template(_this.attributes.condition, value)), collectResults.push(conditionResult)
        }), _.reduce(collectResults, function(a, b) {
            return __indexOf.call(equalityOperator, operator) >= 0 ? a || b : a && b
        })) : eval(App.Sanitize.template(this.attributes.condition, fieldValue)))
    }, FieldConditionEvaluator.prototype.getOperator = function(condition) {
        var operator, regex;
        return regex = /%>(.\D*)/, operator = condition.match(regex)[1], operator.match(/\"/g) && (operator = operator.split('"')[1]), operator
    }, FieldConditionEvaluator.prototype.getFieldValue = function() {
        var control;
        if (control = _.findWhere(this.controls, {
                id: this.attributes.field
            }), control.isCompleted) switch (control.type) {
            case "list":
            case "list-image":
                return control.logicValue;
            case "number":
                return parseInt(control.value, 10);
            case "textarea":
                return control.value.replace(/\n/g, "#");
            case "dropdown":
                return control.value.trim();
            default:
                return control.value
        }
    }, FieldConditionEvaluator
}(App.Service.LogicJumps.ConditionEvaluator), namespace("App.Service.LogicJumps", function(exports) {
    return exports.FieldConditionEvaluator = FieldConditionEvaluator
});
var FileUploadConditionEvaluator, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
FileUploadConditionEvaluator = function(_super) {
    function FileUploadConditionEvaluator() {
        return _ref = FileUploadConditionEvaluator.__super__.constructor.apply(this, arguments)
    }
    return __extends(FileUploadConditionEvaluator, _super), FileUploadConditionEvaluator.prototype.evaluate = function() {
        return this.evaluateCondition(this.attributes.conditionName, this.getLogicValue())
    }, FileUploadConditionEvaluator.prototype.evaluateCondition = function(condition, value) {
        return !_.isNull(value) && ("logic-condition-is" === condition ? !0 === value : "logic-condition-is-not" === condition ? !1 === value : void 0)
    }, FileUploadConditionEvaluator
}(App.Service.LogicJumps.ConditionEvaluator), namespace("App.Service.LogicJumps", function(exports) {
    return exports.FileUploadConditionEvaluator = FileUploadConditionEvaluator
});
var CalculatorConditionEvaluator, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
CalculatorConditionEvaluator = function(_super) {
    function CalculatorConditionEvaluator() {
        return _ref = CalculatorConditionEvaluator.__super__.constructor.apply(this, arguments)
    }
    return __extends(CalculatorConditionEvaluator, _super), CalculatorConditionEvaluator.prototype.calculator = null, CalculatorConditionEvaluator.prototype.initialize = function(data, options) {
        return this.calculator = options.calculator
    }, CalculatorConditionEvaluator.prototype.evaluate = function() {
        var calculatorValue, result;
        return calculatorValue = this.calculator.getValue(this.attributes.field), result = eval(App.Sanitize.template(this.attributes.condition, calculatorValue))
    }, CalculatorConditionEvaluator
}(App.Service.LogicJumps.ConditionEvaluator), namespace("App.Service.LogicJumps", function(exports) {
    return exports.CalculatorConditionEvaluator = CalculatorConditionEvaluator
});
var HiddenFieldsConditionEvaluator, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
HiddenFieldsConditionEvaluator = function(_super) {
        function HiddenFieldsConditionEvaluator() {
            return _ref = HiddenFieldsConditionEvaluator.__super__.constructor.apply(this, arguments)
        }
        return __extends(HiddenFieldsConditionEvaluator, _super), HiddenFieldsConditionEvaluator.prototype.calculator = null, HiddenFieldsConditionEvaluator.prototype.initialize = function(data, options) {
            return this.hiddenFields = options.hiddenFields
        }, HiddenFieldsConditionEvaluator.prototype.sanitizeCondition = function(condition, value) {
            return App.Sanitize.template(this.attributes.condition, value)
        }, HiddenFieldsConditionEvaluator.prototype.evaluate = function() {
            var result, sanitizedCondition, value;
            return value = this.hiddenFields.get(this.attributes.hiddenField), "" !== value || '" "' !== this.attributes.value && "" !== this.attributes.value || (value = this.attributes.value), sanitizedCondition = this.sanitizeCondition(this.attributes.condition, value), result = eval(sanitizedCondition)
        }, HiddenFieldsConditionEvaluator
    }(App.Service.LogicJumps.ConditionEvaluator), namespace("App.Service.LogicJumps", function(exports) {
        return exports.HiddenFieldsConditionEvaluator = HiddenFieldsConditionEvaluator
    }),
    function() {
        var operations = {
                "logic-condition-date-is-equal-to": function(a, b) {
                    return a === b
                },
                "logic-condition-date-is-not-equal-to": function(a, b) {
                    return a !== b
                },
                "logic-condition-date-is-before-than": function(a, b) {
                    return a < b
                },
                "logic-condition-date-is-before-or-equal-than": function(a, b) {
                    return a <= b
                },
                "logic-condition-date-is-after-than": function(a, b) {
                    return a > b
                },
                "logic-condition-date-is-after-or-equal-than": function(a, b) {
                    return a >= b
                }
            },
            DateConditionEvaluator = App.Service.LogicJumps.ConditionEvaluator.extend({
                evaluate: function() {
                    var conditionName = this.get("conditionName"),
                        currentValue = this.getLogicValue(),
                        baseValue = parseInt(this.get("value"), 10);
                    return !_.isNull(currentValue) && operations[conditionName](currentValue, baseValue)
                }
            });
        namespace("App.Service.LogicJumps", function(exports) {
            exports.DateConditionEvaluator = DateConditionEvaluator
        })
    }();
var HiddenFields, getParameterByName, parseUrl;
HiddenFields = function() {
    function HiddenFields(keys, url) {
        null == keys && (keys = {}), null == url && (url = window.location.search), this.fields = parseUrl(keys, url)
    }
    return HiddenFields.prototype.fields = {}, HiddenFields.prototype.getAll = function() {
        return this.fields
    }, HiddenFields.prototype.get = function(key) {
        return this.fields[key]
    }, HiddenFields
}(), getParameterByName = function(name, searchString) {
    var regex, results;
    return name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(searchString), null == results ? "" : decodeURIComponent(results[1])
}, parseUrl = function(keys, url) {
    var key, values, _i, _len;

    for (values = {}, _i = 0, _len = keys.length; _i < _len; _i++) key = keys[_i], values[key] = getParameterByName(key, url);
    return values
}, namespace("App.Service", function(exports) {
    return exports.HiddenFields = HiddenFields
});
var Keyboard;
Keyboard = function() {
    function Keyboard() {}
    return Keyboard.prototype.directions = {
        UP: 0,
        DOWN: 1,
        LEFT: 2,
        RIGHT: 3
    }, Keyboard.prototype.keyCodes = {
        key0: 48,
        key9: 57,
        numpad0: 96,
        numpad9: 105,
        space: 32,
        enter: 13
    }, Keyboard.prototype.lastNumber = null, Keyboard.prototype.numberTimeout = null, Keyboard.prototype.numberDelay = 1e3, Keyboard.prototype.getKeyCode = function(evt) {
        return document.all ? evt.keyCode : evt.which
    }, Keyboard.prototype.isSpace = function(evt) {
        return this.getKeyCode(evt) === this.keyCodes.space
    }, Keyboard.prototype.isEnter = function(evt) {
        return this.getKeyCode(evt) === this.keyCodes.enter
    }, Keyboard.prototype.getNumber = function(evt) {
        return this.getNumberFromKeyCode(this.getKeyCode(evt))
    }, Keyboard.prototype.getNumberUsingMultipleDigits = function(evt) {
        var currentNumber, _this = this;
        return clearTimeout(this.numberTimeout), currentNumber = this.getNumberFromKeyCode(this.getKeyCode(evt)), null != this.lastNumber && (currentNumber = 10 * this.lastNumber + currentNumber), this.lastNumber = currentNumber, this.numberTimeout = _.delay(function() {
            return _this.lastNumber = null
        }, this.numberDelay), currentNumber
    }, Keyboard.prototype.getNumberFromKeyCode = function(keyCode) {
        return keyCode >= this.keyCodes.key0 && keyCode <= this.keyCodes.key9 ? keyCode - this.keyCodes.key0 : keyCode >= this.keyCodes.numpad0 && keyCode <= this.keyCodes.numpad9 ? keyCode - this.keyCodes.numpad0 : void 0
    }, Keyboard.prototype.isUpDirection = function(direction) {
        return direction === this.directions.UP
    }, Keyboard.prototype.isDownDirection = function(direction) {
        return direction === this.directions.DOWN
    }, Keyboard.prototype.isLeftDirection = function(direction) {
        return direction === this.directions.LEFT
    }, Keyboard.prototype.isRightDirection = function(direction) {
        return direction === this.directions.RIGHT
    }, Keyboard
}(), namespace("App.Service", function(exports) {
    return exports.Keyboard = Keyboard
});
var S3Uploader, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments)
    }
};
S3Uploader = function() {
        function S3Uploader(fieldId, featureDetector, options) {
            this.fieldId = fieldId, this.featureDetector = featureDetector, this.onUploadAbort = __bind(this.onUploadAbort, this), this.onUploadFailed = __bind(this.onUploadFailed, this), this.onUploadComplete = __bind(this.onUploadComplete, this), this.onXhrLoad = __bind(this.onXhrLoad, this), this.onUploadProgress = __bind(this.onUploadProgress, this), this.uploadFileUsingIframe = __bind(this.uploadFileUsingIframe, this), this.uploadFileUsingXhr = __bind(this.uploadFileUsingXhr, this), this.uploadFile = __bind(this.uploadFile, this), this.onCredentialsSuccess = __bind(this.onCredentialsSuccess, this), this.options = _.extend({}, this.defaults, options), this.uploadData = _.extend({}, this.uploadDataDefaults)
        }
        return S3Uploader.prototype.uploadDataDefaults = {
            AWSAccessKeyId: null,
            acl: null,
            policy: null,
            signature: null,
            key: null,
            file: null
        }, S3Uploader.prototype.featureDetector = null, S3Uploader.prototype.uploadData = null, S3Uploader.prototype.folder = null, S3Uploader.prototype.token = null, S3Uploader.prototype.bucket = null, S3Uploader.prototype.uploadUrl = null, S3Uploader.prototype.fieldId = null, S3Uploader.prototype.credentialsXhr = null, S3Uploader.prototype.fileName = "", S3Uploader.prototype.defaults = {
            requestCredentialsBaseUrl: "",
            onUploadProgress: function() {},
            onSuccess: function() {},
            onError: function() {},
            onAbort: function() {}
        }, S3Uploader.prototype.getUploadUrl = function() {
            return "https://" + this.bucket + ".s3.amazonaws.com/"
        }, S3Uploader.prototype.getRequestCredentialsUrl = function() {
            return this.options.requestCredentialsBaseUrl + this.fieldId + "?uploadStrategy=" + this.getUploadStrategy()
        }, S3Uploader.prototype.getUploadStrategy = function() {
            return this.featureDetector.xhrLevel2() ? "xhr" : "iframe"
        }, S3Uploader.prototype.canContinuouslyUpdateProgress = function() {
            return "xhr" === this.getUploadStrategy()
        }, S3Uploader.prototype.requestCredentials = function() {
            return this.credentialsXhr = $.ajax({
                url: this.getRequestCredentialsUrl()
            }).done(this.onCredentialsSuccess)
        }, S3Uploader.prototype.onCredentialsSuccess = function(response) {
            this.folder = response.folder, this.token = response.token, this.bucket = response.bucket, _.extend(this.uploadData, {
                AWSAccessKeyId: response.key,
                acl: response.acl,
                policy: response.policy,
                signature: response.signature,
                successActionRedirect: response.successActionRedirect
            })
        }, S3Uploader.prototype.generateKey = function(fileName) {
            return this.folder + this.token + "-" + fileName
        }, S3Uploader.prototype.upload = function(fileData, $file, fileInfo) {
            this.$file = $file, this.fileName = fileInfo.fileName, this.uploadData.file = fileData, this.credentialsXhr.done(this.uploadFile)
        }, S3Uploader.prototype.uploadFile = function() {
            this.uploadData.key = this.generateKey(this.fileName), "xhr" === this.getUploadStrategy() ? this.uploadFileUsingXhr() : this.uploadFileUsingIframe()
        }, S3Uploader.prototype.setupXhr = function() {
            this.uploadRequest = new window.XMLHttpRequest, this.uploadRequest.upload && this.uploadRequest.upload.addEventListener("progress", this.onUploadProgress, !1), this.uploadRequest.addEventListener("load", this.onXhrLoad, !1), this.uploadRequest.addEventListener("abort", this.onUploadAbort, !1)
        }, S3Uploader.prototype.uploadFileUsingXhr = function() {
            return this.setupXhr(), this.uploadRequest.open("POST", this.getUploadUrl(), !0), this.uploadRequest.setRequestHeader("Access-Control-Allow-Origin", "*"), this.uploadRequest.send(this.convertToFormData()), this
        }, S3Uploader.prototype.uploadFileUsingIframe = function() {
            var _this = this;
            return this.uploadRequest = $.ajax(this.getUploadUrl(), {
                method: "post",
                crossDomain: !0,
                data: {
                    AWSAccessKeyId: this.uploadData.AWSAccessKeyId,
                    acl: this.uploadData.acl,
                    policy: this.uploadData.policy,
                    signature: this.uploadData.signature,
                    key: this.uploadData.key,
                    success_action_redirect: this.uploadData.successActionRedirect
                },
                files: this.$file,
                iframe: !0,
                processData: !1
            }).complete(function(evt, status) {
                return "success" === status ? _this.onUploadComplete() : "abort" === status ? _this.onUploadAbort() : void 0
            }), this
        }, S3Uploader.prototype.abort = function() {
            this.uploadRequest && this.uploadRequest.abort()
        }, S3Uploader.prototype.convertToFormData = function() {
            var formData;
            return formData = new FormData, _.each(this.uploadData, function(value, key) {
                return formData.append(key, value)
            }), formData
        }, S3Uploader.prototype.onUploadProgress = function(evt) {
            var percentLoaded;
            evt.lengthComputable && (percentLoaded = this.calculatePercent(evt.loaded, evt.total), this.options.onUploadProgress(percentLoaded))
        }, S3Uploader.prototype.calculatePercent = function(amount, total) {
            return 0 === total ? 100 : Math.round(amount / total * 100)
        }, S3Uploader.prototype.onXhrLoad = function() {
            if (4 === this.uploadRequest.readyState) return this.uploadRequest.status >= 200 && this.uploadRequest.status < 300 ? this.onUploadComplete() : this.onUploadFailed()
        }, S3Uploader.prototype.onUploadComplete = function() {
            this.options.onSuccess({
                token: this.token
            })
        }, S3Uploader.prototype.onUploadFailed = function(evt) {
            this.options.onError(evt)
        }, S3Uploader.prototype.onUploadAbort = function() {
            this.options.onAbort()
        }, S3Uploader
    }(), namespace("App.Service", function(exports) {
        return exports.S3Uploader = S3Uploader
    }),
    function() {
        var SubmissionRepository = function(paths, isSubmittable, featureService, performanceLogger) {
            this.paths = paths, this.isSubmittable = isSubmittable, this.featureService = featureService, this.performanceLogger = performanceLogger, this.tokenRetriesCount = 0, this.messageTimeout = 0
        };
        SubmissionRepository.REQUEST_TOKEN_TIMEOUT_IN_SECONDS = 20, SubmissionRepository.REQUEST_SUBMIT_TIMEOUT_IN_SECONDS = 12;
        var toMilliseconds = function(seconds) {
                return 1e3 * seconds
            },
            onTokenRequestResponse = function(response) {
                this.token = response.token, this.landed_at = response.landed_at
            },
            generateExponentialTimeout = function(x) {
                var timeout = toMilliseconds(Math.pow(1.6, x));
                return timeout
            },
            onTokenRequestError = function(data) {
                if (this.featureService.isRetrySubmitEnabled()) {
                    var timeout = generateExponentialTimeout(this.tokenRetriesCount++);
                    _.delay(_.bind(this.getToken, this), timeout)
                }
            },
            makeRequest = function(requestConfig, timeoutSeconds) {
                return this.featureService.isRetrySubmitEnabled() && (requestConfig.timeout = toMilliseconds(timeoutSeconds)), $.ajax(requestConfig)
            },
            submit = function(data) {
                var submitData = _.extend({}, data, {
                        token: this.token
                    }),
                    requestConfig = {
                        method: "POST",
                        url: this.paths.submit,
                        data: {
                            form: submitData
                        },
                        dataType: "json"
                    };
                return makeRequest.call(this, requestConfig, 12)
            };
        SubmissionRepository.prototype.getToken = function() {
            if (this.isSubmittable) {
                var requestConfig = {
                    method: "POST",
                    url: this.paths.token,
                    data: {
                        referer: document.referrer
                    },
                    dataType: "json"
                };
                this.tokenRequest = makeRequest.call(this, requestConfig, 20), this.tokenRequest.done(_.bind(onTokenRequestResponse, this)), this.tokenRequest.fail(_.bind(onTokenRequestError, this))
            }
        }, SubmissionRepository.prototype.retrySubmit = function(data, onSuccess, onError, onSubmissionTakesTooLong, onSubmissionRetry) {
            clearTimeout(this.submitResultTimeout), clearTimeout(this.messageTimeout), this.submit(data, onSuccess, onError, onSubmissionTakesTooLong, onSubmissionRetry)
        }, SubmissionRepository.prototype.submit = function(data, onSuccess, onError, onSubmissionTakesTooLong, onSubmissionRetry) {
            data.landed_at = this.landed_at;
            var submitResult, submitRetriesCount = 0,
                bindToSubmit = _.bind(submit, this, data),
                executeOnSuccess = _.bind(function() {
                    clearTimeout(this.messageTimeout), onSuccess(), this.performanceLogger.typeformSubmitted()
                }, this),
                submitRetryWrapper = function() {
                    var nextTimeout = 0;
                    return _.bind(function() {
                        nextTimeout = generateExponentialTimeout(submitRetriesCount++), $.when(this.tokenRequest).then(bindToSubmit).done(executeOnSuccess).fail(_.bind(function(response) {
                            response.responseJSON ? (onError(response), clearTimeout(this.messageTimeout)) : this.featureService.isRetrySubmitEnabled() && (onSubmissionRetry(nextTimeout, 2 === submitRetriesCount), this.submitResultTimeout = setTimeout(submitResult, nextTimeout))
                        }, this))
                    }, this)
                };
            this.featureService.isRetrySubmitEnabled() && !this.messageTimeoutShown && (this.messageTimeout = setTimeout(onSubmissionTakesTooLong, toMilliseconds(12)), this.messageTimeoutShown = !0), submitResult = submitRetryWrapper.call(this), this.isSubmittable ? submitResult() : onSuccess()
        }, namespace("App", function(exports) {
            exports.SubmissionRepository = SubmissionRepository
        })
    }(),
    function() {
        var FeatureService = function(url, settings) {
            return url || (url = window.location.search), {
                isRetrySubmitEnabled: function() {
                    return settings.featureToggles.retrySubmitEnabled
                },
                isSignupQuestionsFormEnabled: function() {
                    return settings.featureToggles.isSignupQuestionsFormEnabled
                }
            }
        };
        namespace("App.Service", function(exports) {
            exports.FeatureService = FeatureService
        })
    }(),
    function() {
        var url = function() {
            var currentUrl = null;
            return {
                getCurrentUrl: function() {
                    return currentUrl = window.location
                },
                getCurrentUrlSearch: function() {
                    return currentUrl || this.getCurrentUrl(), currentUrl.search
                },
                getEmbedType: function() {
                    return this.getParameterByName("typeform-embed", this.getCurrentUrlSearch())
                },
                getEmbedTypeStandardNaming: function() {
                    var param = this.getParameterByName("typeform-embed", this.getCurrentUrlSearch()),
                        mapping = {};
                    return mapping["embed-widget"] = "standard", mapping["embed-fullpage"] = "fullpage", mapping["popup-drawer"] = "popup", mapping[param]
                },
                getParameterByName: function(name, searchString) {
                    var regex, results;
                    return name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(searchString), results ? decodeURIComponent(results[1]) : ""
                },
                isEmbeddedInIframe: function() {
                    try {
                        return window.self !== window.top
                    } catch (e) {
                        return !1
                    }
                }
            }
        };
        namespace("App.Utils", function(exports) {
            exports.url = url
        })
    }(),
    function(App, namespace) {
        function PerformanceLogger(newRelic, cookies, isEnabled) {
            this.newrelic = window.newrelic || newRelic || App.Logger.dummyNewRelic, this.cookies = cookies, this.isEnabled = isEnabled
        }

        function logTypeformSubmitAction() {
            logAction.call(this, "typeform-submited")
        }

        function applySubmitAttributes() {
            var controls = window.typeform.Form.controls;
            controls && (logNumberOfFieldsDisplayed.call(this, controls), logNumberOfDisplayedFieldsFilledIn.call(this, controls))
        }

        function logFormVersionServed(formVersionServed) {
            logAttribute.call(this, "typeform-version", formVersionServed)
        }

        function logFont(font) {
            logAttribute.call(this, "typeform-font", font.split(":")[0])
        }

        function logCacheTypeServed() {
            logAttribute.call(this, "typeform-cache", this.cookies.getCacheType())
        }

        function logUserAgent(ua) {
            logAttribute.call(this, "typeform-ua", ua)
        }

        function logFieldCountByType(fieldsOfType, fieldType) {
            logAttribute.call(this, fieldType + "-count", fieldsOfType.length)
        }

        function logEmbedType() {
            if (this.urlParser.isEmbeddedInIframe()) {
                var embedType = this.urlParser.getEmbedType() || "embed-custom";
                logAttribute.call(this, "typeform-embed", embedType)
            }
        }

        function logNumberOfFieldsDisplayed(fields) {
            logAttribute.call(this, "number-fields-displayed", getNumberOfFieldsDisplayed(fields))
        }

        function logNumberOfDisplayedFieldsFilledIn(fields) {
            logAttribute.call(this, "number-fields-filledin", getNumberOfDisplayedFieldsFilledIn(fields))
        }

        function logNumberOfChoices(type, fields) {
            logAttribute.call(this, type + "-choices-count", getChoicesCountByType(type, fields))
        }

        function logNumberOfAttachments(type, fields) {
            logAttribute.call(this, "attachment-" + type + "-count", getAttachmentsCountByType(type, fields))
        }

        function logNumberOfScreens(type, screens) {
            logAttribute.call(this, type + "-count", screens.length)
        }

        function logTotalFieldCount(fields) {
            logAttribute.call(this, "total-fields-count", fields.length)
        }

        function logHasBackground(design) {
            logAttribute.call(this, "has-background", !_.isEmpty(design.background))
        }

        function getNumberOfFieldsDisplayed(fields) {
            return _.filter(fields, function(field) {
                return field.isVisible
            }).length
        }

        function getNumberOfDisplayedFieldsFilledIn(fields) {
            return _.filter(fields, function(field) {
                return field.isVisible & field.isCompleted
            }).length
        }

        function getChoicesCountByType(type, fields) {
            return _.reduce(fields, function(memo, field) {
                return field.type === type && (memo += _.keys(field.choices).length), memo
            }, 0)
        }

        function getAttachmentsCountByType(type, fields) {
            return _.reduce(fields, function(memo, field) {
                return field.attachment === type && memo++, memo
            }, 0)
        }

        function logAttribute(key, value) {
            this.isEnabled && this.newrelic.setCustomAttribute(key, value)
        }

        function logAction(action) {
            this.isEnabled && this.newrelic.addPageAction(action)
        }
        PerformanceLogger.prototype.typeformSubmitted = function() {
            applySubmitAttributes.call(this), logTypeformSubmitAction.call(this)
        }, PerformanceLogger.prototype.typeformLoaded = function() {
            logAction.call(this, "typeform-loaded")
        }, PerformanceLogger.prototype.urlParser = App.Utils.url(), PerformanceLogger.prototype.applyLoadedAttributes = function(settings, serialisedForm, navigator) {
            settings && serialisedForm && navigator && (settings.browser && logFormVersionServed.call(this, settings.browser), settings.font && logFont.call(this, settings.font), navigator.userAgent && logUserAgent.call(this, navigator.userAgent), this.cookies && logCacheTypeServed.call(this), serialisedForm.fields && (_.chain(serialisedForm.fields).groupBy("type").each(_.bind(logFieldCountByType, this)), logNumberOfChoices.call(this, "list", serialisedForm.fields), logNumberOfChoices.call(this, "list-image", serialisedForm.fields), logNumberOfAttachments.call(this, "image", serialisedForm.fields), logNumberOfAttachments.call(this, "video", serialisedForm.fields), logTotalFieldCount.call(this, serialisedForm.fields)), serialisedForm.intros && logNumberOfScreens.call(this, "intros", serialisedForm.intros), serialisedForm.outros && logNumberOfScreens.call(this, "outros", serialisedForm.outros), serialisedForm.design && logHasBackground.call(this, serialisedForm.design), logEmbedType.call(this))
        }, namespace("App.Logger", function(exports) {
            exports.PerformanceLogger = PerformanceLogger
        })
    }(App, namespace),
    function() {
        var dummyNewRelic = {
            addPageAction: function(action, args) {},
            setCustomAttribute: function(attr, value) {}
        };
        namespace("App.Logger", function(exports) {
            exports.dummyNewRelic = dummyNewRelic
        })
    }(),
    function() {
        namespace("App.Utils", function(exports) {
            function __StripeService(Stripe, key) {
                function mountCardNumber(name, style) {
                    return cardNumberElement = elements.create("cardNumber", {
                        style: style,
                        classes: classes
                    }), cardNumberElement.mount("#" + name), cardNumberElement
                }

                function mountCardExpiry(name, style) {
                    var cardExpiryElement = elements.create("cardExpiry", {
                        style: style,
                        classes: classes
                    });
                    return cardExpiryElement.mount("#" + name), cardExpiryElement
                }

                function mountCardCvc(name, style) {
                    var cardCvcElement = elements.create("cardCvc", {
                        style: style,
                        classes: classes
                    });
                    return cardCvcElement.mount("#" + name), cardCvcElement
                }

                function submit(details, callback, errback) {
                    stripe.createToken(cardNumberElement, details).then(function(result) {
                        result.error ? errback(result.error) : callback(result.token.id)
                    })
                }
                var cardNumberElement, stripe = Stripe(key),
                    elements = stripe.elements({
                        fonts: [{
                            cssSrc: $("#font").attr("href")
                        }],
                        locale: "auto"
                    }),
                    classes = {
                        focus: "focused",
                        empty: "empty",
                        invalid: "invalid"
                    };
                return {
                    submit: submit,
                    mount: {
                        "card-number": mountCardNumber,
                        "card-expiry": mountCardExpiry,
                        "card-cvc": mountCardCvc
                    }
                }
            }
            var StripeService = null;
            exports.StripeService = function(Stripe, key, forceNew) {
                return (null === StripeService || forceNew) && (StripeService = __StripeService(Stripe, key)), StripeService
            }
        })
    }(),
    function() {
        namespace("App.Utils", function(exports) {
            exports.NullStripeService = {
                mount: {
                    "card-number": function() {},
                    "card-expiry": function() {},
                    "card-cvc": function() {}
                },
                submit: function() {}
            }
        })
    }(),
    function() {
        namespace("App.Utils", function(exports) {
            exports.StripeServiceFactory = {
                getStripeService: function(stripePublishableKey) {
                    return stripePublishableKey = stripePublishableKey || "no-stripe-key", window.Stripe && "fallback" !== Globals.browser ? new App.Utils.StripeService(window.Stripe, stripePublishableKey) : App.Utils.NullStripeService
                }
            }
        })
    }(),
    function() {
        namespace("App.Utils", function(exports) {
            function __PaymentBlockController() {
                function getElementIndex($element) {
                    for (var i = 0, l = registeredElements.length; i < l; i++)
                        if (registeredElements[i][0] === $element[0]) return i;
                    return -1
                }

                function triggerKeydownTab(backward) {
                    var evt = $.Event("keydown.form", {
                        keyCode: TAB_KEY,
                        which: TAB_KEY,
                        shiftKey: backward
                    });
                    $(document).trigger(evt)
                }

                function triggerNavigation($currentElement) {
                    var $targetElement = $(document.activeElement).parents("li");
                    if ($targetElement.length && $targetElement[0] !== $currentElement[0]) {
                        var targetIndex = getElementIndex($targetElement);
                        if (-1 !== targetIndex) {
                            triggerKeydownTab(getElementIndex($currentElement) > targetIndex)
                        }
                    }
                }

                function triggerClick($targetElement) {
                    $targetElement.click()
                }

                function register() {
                    $paymentBlock = $(".questions li.payment-block");
                    for (var $block = $paymentBlock, i = 0; i < 5; i++) registeredElements.push($block), $block = $block.next()
                }
                var $paymentBlock, registeredElements = [];
                return {
                    register: register,
                    triggerNavigation: triggerNavigation,
                    triggerClick: triggerClick
                }
            }
            var PaymentBlockController = null,
                TAB_KEY = 9;
            exports.PaymentBlockController = function() {
                return null === PaymentBlockController && (PaymentBlockController = __PaymentBlockController()), PaymentBlockController
            }
        })
    }(),
    function() {
        var AnswerVariable, HiddenVariable, PriceVariable, ScoreVariable, Variable, VariableFactory, getFormattedValue, _ref, _ref1, _ref2, _ref3, __hasProp = {}.hasOwnProperty,
            __extends = function(child, parent) {
                function Ctor() {
                    this.constructor = child
                }
                for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
                return Ctor.prototype = parent.prototype, child.prototype = new Ctor, child.__super__ = parent.prototype, child
            };
        VariableFactory = function() {
            function VariableFactory(varname) {
                return {}, "var_price" === varname ? new PriceVariable(varname) : "var_score" === varname ? new ScoreVariable(varname) : /^answer_/.test(varname) ? new AnswerVariable(varname) : new HiddenVariable(varname)
            }
            return VariableFactory
        }(), Variable = function() {
            function Variable(varname) {
                this.varname = varname || ""
            }
            return Variable.prototype.setup = function(model, form, hiddenFields, scoreCalculator, priceCalculator, currencyFormatter, numberFormatter) {}, Variable
        }(), PriceVariable = function(_super) {
            function PriceVariable() {
                return _ref = PriceVariable.__super__.constructor.apply(this, arguments)
            }
            return __extends(PriceVariable, _super), PriceVariable.prototype.setup = function(model, form, hiddenFields, scoreCalculator, priceCalculator, currencyFormatter, numberFormatter) {
                var currency, paymentField, price, total;
                paymentField = form.getPaymentField(), null != paymentField ? (currency = paymentField.getCurrency(), total = getFormattedValue(priceCalculator, numberFormatter), price = currencyFormatter.format(currency, total)) : price = "_____", model.set(this.varname, price), priceCalculator.on("change:total", _.bind(function() {
                    return total = getFormattedValue(priceCalculator, numberFormatter), model.set(this.varname, currencyFormatter.format(currency, total))
                }, this))
            }, PriceVariable
        }(Variable), AnswerVariable = function(_super) {
            function AnswerVariable() {
                return _ref1 = AnswerVariable.__super__.constructor.apply(this, arguments)
            }
            return __extends(AnswerVariable, _super), AnswerVariable.prototype.setup = function(destinationModel, form, hiddenFields) {
                var emitter, fieldId;
                fieldId = this.varname.split("_")[1], null != (emitter = _.find(form.controls, function(control) {
                    return control.id == fieldId
                })) && ("file-upload" === emitter.type ? (emitter.getFieldModel(), this.connectOnStatusChange(emitter, fieldId, destinationModel)) : this.connectOnValueChange(emitter, fieldId, destinationModel), emitter.isEmitter = !0)
            }, AnswerVariable.prototype.connectOnStatusChange = function(emitter, fieldId, destinationModel) {
                var onChange = function(value) {
                    destinationModel.set("answer_" + fieldId, value), typeform.Form.check()
                };
                return emitter.subscribeOnValueForPipingChange(onChange), this
            }, AnswerVariable.prototype.connectOnValueChange = function(emitter, fieldId, destinationModel) {
                return emitter.$elem.on("change-value", function(event, control) {
                    return destinationModel.set("answer_" + fieldId, _.escape(control.pipeValue))
                }), this
            }, AnswerVariable
        }(Variable), HiddenVariable = function(_super) {
            function HiddenVariable() {
                return _ref2 = HiddenVariable.__super__.constructor.apply(this, arguments)
            }
            return __extends(HiddenVariable, _super), HiddenVariable.prototype.setup = function(model, form, hiddenFields) {
                var value, varnameWithoutNamespace;
                varnameWithoutNamespace = this.removeNamespace(this.varname), value = _.escape(hiddenFields[varnameWithoutNamespace]), "xxxxx" !== value && "" !== value || (value = "{{" + varnameWithoutNamespace + "}}"), model.set(this.varname, value)
            }, HiddenVariable.prototype.removeNamespace = function(varname) {
                return varname.replace(/^hidden_/, "")
            }, HiddenVariable
        }(Variable), ScoreVariable = function(_super) {
            function ScoreVariable() {
                return _ref3 = ScoreVariable.__super__.constructor.apply(this, arguments)
            }
            return __extends(ScoreVariable, _super), ScoreVariable.prototype.setup = function(model, form, hiddenFields, scoreCalculator, priceCalculator, currencyFormatter, numberFormatter) {
                var total;
                total = getFormattedValue(scoreCalculator, numberFormatter), model.set(this.varname, total), scoreCalculator.on("change:total", _.bind(function() {
                    return total = getFormattedValue(scoreCalculator, numberFormatter), model.set(this.varname, total)
                }, this))
            }, ScoreVariable
        }(Variable), getFormattedValue = function(calculator, numberFormatter) {
            return numberFormatter.formatTo2Decimals(calculator.get("total"))
        }, namespace("App.Utils", function(exports) {
            return exports.Variable = VariableFactory, exports.PriceVariable = PriceVariable, exports.ScoreVariable = ScoreVariable, exports.AnswerVariable = AnswerVariable, exports.HiddenVariable = HiddenVariable
        })
    }.call(this);
var CurrencyFormatter;
CurrencyFormatter = function() {
        function CurrencyFormatter() {}
        return CurrencyFormatter.prototype.currencies = {
            EUR: "€{quantity}",
            GBP: "£{quantity}",
            CHF: "CHF&nbsp;{quantity}",
            NOK: "{quantity}&nbsp;NOK",
            SEK: "{quantity}&nbsp;SEK",
            DKK: "{quantity}&nbsp;DKK",
            KRW: "₩{quantity}",
            everythingElse: "${quantity}"
        }, CurrencyFormatter.prototype.format = function(currencyCode, quantity) {
            return (this.currencies[currencyCode] || this.currencies.everythingElse).replace("{quantity}", quantity)
        }, CurrencyFormatter
    }(), namespace("App", function(exports) {
        return exports.CurrencyFormatter = CurrencyFormatter
    }),
    function() {
        var NumberFormatter = {
            formatTo2Decimals: function(value) {
                var pow = 100,
                    ceil = Math.ceil(value * pow) / pow,
                    floor = Math.floor(value * pow) / pow;
                return pow = 1e3, pow * (ceil - value) >= pow * (value - floor) + (value < 0 ? -1 : 1) ? floor : ceil
            }
        };
        namespace("App", function(exports) {
            return exports.NumberFormatter = NumberFormatter
        })
    }();
var Textfield = function(elem, options) {
    function isEmailAddress(str) {
        var filter = /(^[a-z0-9_.+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$)/i;
        return str.length && filter.test(str)
    }

    function iswebsiteAddress(web) {
        var val = $input.val();
        return /^(https?|ftp):\/\//i.test(web) || $input.val("http://" + val), /^((https?|ftp):)?[^:]*\..*$/.test($input.val())
    }
    var $input, $confirmButton, $span, $item, $spin, min, max, isEmailType, isWebsiteType, isNumberType, prevVal, _this = this,
        showConfirm = !1,
        $result = elem.children(".result");
    this.value = "", this.pipeValue = "", this.isCompleted = !1, this.required = elem.hasClass("required"), this.unique = elem.hasClass("unique"), this.done = !1, this.required, isEmailType = elem.hasClass("email"), isWebsiteType = elem.hasClass("website"), isNumberType = elem.hasClass("number"), this.confirmText = "default", this.attachLimit = {
        "default": 180,
        large: 170,
        small: 155
    }, this.confirmButton = options.confirmButton, this.init = function() {
        $span = elem.find(".question > span"), $item = elem.find(".item").children("span"), $input = elem.find("input"), "" === $span.html() && elem.hide(), $confirmButton = elem.find(".container.confirm"), isWebsiteType && "" === $input.val() && $input.val("http://"), isNumberType && (min = parseInt($input.attr("min")), max = parseInt($input.attr("max")))
    }, this.set = function(attr, value) {
        this[attr] = value, "isActive" === attr || "isVisible" === attr ? this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active") : "index" === attr && value && $item.html(value)
    }, this.bindEvents = function() {
        if (_this = this, "default" == Globals.browser) {
            elem.on("keyup.e keydown.e keypress.e", "input", _inputEvents), $(window).on("scrollstop.e", _scroll);
            var checkForm = function() {
                _this.setValue(), elem.trigger("change-value", _this), typeform.Form.check()
            };
            $input.blur(checkForm)
        } else "touch" == Globals.browser && elem.on("confirm.e", "input", function() {
            "" === $input.val() ? elem.removeClass("filled") : elem.addClass("filled"), setTimeout(function() {
                _this.setValue(), typeform.Form.check(), form.next()
            }, Globals.keyboardTimeout)
        })
    }, this.unbindEvents = function() {
        "default" == Globals.browser && $input.blur(), elem.off(".e").removeClass("ready"), $(window).off(".e")
    }, this.preOpen = function() {
        this.bindEvents()
    }, this.open = function() {
        if (this.done = !0, Globals.useFocus && (_.defer(function() {
                elem.addClass("ready"), $input.focus()
            }), this.checkButton()), isWebsiteType) {
            var val = $input.val();
            "" === val && (val = "http://"), Globals.useFocus && $input.focus(), $input.val("").val(val)
        }
        initialized = !0, showConfirm = !1
    }, this.advanceArrow = function(direction) {
        return App.Utils.isCaretAtStart($input) && direction == App.Keyboard.UP || App.Utils.isCaretAtEnd($input) && direction == App.Keyboard.DOWN
    }, this.advanceTab = function(direction) {
        return !0
    }, this.checkEnter = function() {
        return !0
    }, this.preSelectFirst = function() {
        return !1
    }, this.preSelectLast = function() {
        return !1
    }, this.setValue = function(callback) {
        this.value = $input.val(), this.isCompleted = "" !== this.value, isWebsiteType ? (this.isCompleted = "http://" !== this.value && "" !== this.value, this.pipeValue = this.isCompleted ? this.value : "") : this.pipeValue = this.value, callback && callback()
    }, this.validate = function(callback, showError) {
        if (_this = this, showError = void 0 === showError || showError, showConfirm = !1, this.required && "" === this.value.trim()) return showError && form.error.show(elem, App.Texts.required), Globals.useFocus && $input.focus(), !1;
        if (options.validator && "" !== $input.val()) {
            var customValidationResults = options.validator($input.val());
            return !customValidationResults.isValid && showError && form.error.show(elem, customValidationResults.errorMessage), customValidationResults.isValid && callback && callback(), customValidationResults.isValid
        }
        if (isEmailType && "" !== $input.val().trim() && !isEmailAddress($input.val().toLowerCase().trim())) return showError && form.error.show(elem, App.Texts.email), Globals.useFocus && $input.focus(), !1;
        if (isWebsiteType && (this.required && !iswebsiteAddress($input.val()) || !this.required && "http://" !== $input.val() && "" !== $input.val() && !iswebsiteAddress($input.val()))) return showError && form.error.show(elem, App.Texts.website), Globals.useFocus && $input.focus(), !1;
        if (isNumberType) {
            if ("" !== $input.val() && !/^-?[0-9.,]+$/.test($input.val())) return showError && form.error.show(elem, App.Texts.invalid), !1;
            if ("" !== $input.val() && (min && parseInt($input.val(), 10) < min || max && parseInt($input.val(), 10) > max)) return showError && (translationKey = "minmax", isNaN(min) && (translationKey = "max"), isNaN(max) && (translationKey = "min"), str = App.Texts[translationKey].replace("{{MAX}}", max).replace("{{MIN}}", min), form.error.show(elem, str)), !1
        }
        if (this.unique && "" !== $input.val()) {
            var data = {
                value: $input.val()
            };
            if (hasError = !1, _this.startLoading(), $.ajax(Globals.uniquePath + settings.uid + "/" + elem.attr("id"), {
                    data: data,
                    type: "POST",
                    async: !1,
                    success: function() {},
                    error: function() {
                        showError && form.error.show(elem, App.Texts.duplicated), Globals.useFocus && $input.focus(), hasError = !0
                    },
                    complete: function() {
                        _this.stopLoading()
                    }
                }), hasError) return !1
        }
        return callback && callback(), !0
    }, this.showResult = function() {
        this.value ? $result.show().children("span").html(this.value) : $result.hide()
    }, this.resize = function() {}, this.update = function(obj) {
        var question = obj.question;
        "" === question ? elem.hide() : elem.show(), $span.html(question), $input.val() || $input.unbind(".placeholder").bind("focus .placeholder", function() {
            $(this).val() == App.Texts["default-text"] && $(this).val("").removeClass("placeholder")
        }).bind("blur .placeholder", function() {
            $(this).val() || $(this).val(App.Texts["default-text"]).addClass("placeholder")
        }).val(App.Texts["default-text"]).addClass("placeholder")
    }, this.startLoading = function() {
        "default" == Globals.browser ? _this.confirmButton.startLoading() : ($spin = $("<div class='spin'></div>"), $input.after($spin), opts = {
            lines: 12,
            length: 2.3,
            width: 2.5,
            radius: 8,
            color: $input.css("color"),
            speed: 2.1,
            trail: 60,
            shadow: !1,
            hwaccel: !1
        }, spinner = new Spinner(opts).spin($spin[0]))
    }, this.stopLoading = function() {
        "default" == Globals.browser ? _this.confirmButton.stopLoading() : $spin.remove()
    }, this.checkButton = function() {
        _this.confirmButton.check(this.isFilled(), $confirmButton, $input)
    }, this.isFilled = function() {
        return !(!$input.val() || isWebsiteType && "http://" == $input.val())
    };
    var _inputEvents = function(evt) {
            if (key = document.all ? evt.keyCode : evt.which, "default" == Globals.browser && !elem.hasClass("focus")) return !1;
            if ("keypress" == evt.type) !isNumberType || App.Keyboard.isNumber(key) || evt.ctrlKey || evt.shiftKey || evt.metaKey || App.Keyboard.isShiftOnly(key) || App.Keyboard.isTab(key) || App.Keyboard.isArrowDown(key) || App.Keyboard.isArrowUp(key) || App.Keyboard.isArrowLeft(key) || App.Keyboard.isArrowRight(key) || App.Keyboard.isPageUp(key) || App.Keyboard.isPageDown(key) || App.Keyboard.isEnter(key) || App.Keyboard.isAlt(key) || App.Keyboard.isDelete(key) || App.Keyboard.isSupr(key) || App.Keyboard.isUppercase(key) || App.Keyboard.isEsc(key) || (evt.stopPropagation(), evt.preventDefault(), "default" == Globals.browser && App.ShakeAnimation.shake(elem, onShakeAnimationComplete));
            else if ("keydown" == evt.type) App.Utils.isCaretAtStart($input) || !App.Keyboard.isArrowUp(key) && !App.Keyboard.isArrowLeft(key) || evt.stopPropagation(), App.Utils.isCaretAtEnd($input) || !App.Keyboard.isArrowDown(key) && !App.Keyboard.isArrowRight(key) || evt.stopPropagation(), App.Keyboard.isSpace(key) && evt.stopPropagation(), prevVal = $input.val();
            else if ("keyup" == evt.type && (evt.shiftKey || 9 == key || 13 == key || App.Keyboard.isArrowDown(key) || App.Keyboard.isArrowUp(key) ? (evt.stopPropagation(), evt.preventDefault()) : ("default" == Globals.browser && _this.checkButton(), form.error.hide(elem), elem.removeClass("ko")), isNumberType)) {
                var domEl = $input[0],
                    start = domEl.selectionStart,
                    end = domEl.selectionEnd,
                    contentLength = $input.val().length;
                $input.val($input.val().replace(/[^0-9]/g, ""));
                var numRemovedCharacters = contentLength - $input.val().length;
                domEl.setSelectionRange(start - numRemovedCharacters, end - numRemovedCharacters)
            }
        },
        _scroll = function() {
            showConfirm = !1
        },
        onShakeAnimationComplete = function() {
            $input.focus()
        }
};
$.fn.textfield = function(options) {
    return this.each(function() {
        var element = $(this);
        if (!element.data("control")) {
            var textfield = new Textfield(element, options || {});
            element.data("control", textfield)
        }
    })
};
var Textarea = function(elem, options) {
    function createAutoresize() {
        $textarea.autosize({
            callback: function() {
                center()
            }
        })
    }

    function center() {
        var currentHeight = $textarea.outerHeight();
        currentHeight != savedHeight && savedHeight > 0 && ($(window).scrollTop($(window).scrollTop() + currentHeight - savedHeight), form.updatePositions()), savedHeight = currentHeight
    }
    var $textarea, $confirmButton, $wrapper, $span, $item, _this = this,
        windowHeight = 0,
        savedHeight = 0,
        showConfirm = !1,
        $result = elem.children(".result");
    this.value = "", this.pipeValue = "", this.isCompleted = !1, this.required = elem.hasClass("required"), this.done = !1, this.required, this.confirmText = "textarea", this.attachLimit = {
        "default": 200,
        large: 200,
        small: 120
    }, this.confirmButton = options.confirmButton, this.init = function() {
        $textarea = elem.find("textarea"), $span = elem.find(".question").children("span"), $item = elem.find(".item").children("span"), "" == $span.html() && elem.hide(), $confirmButton = elem.find(".container.confirm"), "default" == Globals.browser && createAutoresize(), $wrapper = elem.children(".wrapper")
    }, this.set = function(attr, value) {
        this[attr] = value, "isActive" === attr || "isVisible" === attr ? this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active") : "index" === attr && value && $item.html(value)
    }, this.bindEvents = function() {
        if (_this = this, Globals.useKeyboardEvents) {
            var checkForm = function() {
                    _this.setValue(), elem.trigger("change-value", _this), typeform.Form.check()
                },
                checkFormWhenEmpty = function() {
                    "" === $(this).val() && checkForm()
                };
            elem.on("keydown.e keyup.e", "textarea", _textareaEvent).on("keyup.e", "textarea", _.debounce(this.checkButton, 200, !0)), $(window).on("scrollstart.e", checkForm), elem.on("keyup.e", "textarea", checkFormWhenEmpty)
        }
        $("body").addClass("confirm-text-textarea"), "default" == Globals.browser ? $wrapper.height("") : "touch" == Globals.browser && elem.on("confirm.e", "textarea", function() {
            "" === $textarea.val() ? elem.removeClass("filled") : elem.addClass("filled"), setTimeout(function() {
                form.next()
            }, Globals.keyboardTimeout)
        }), elem.on("change.e", "textarea", function() {
            _this.setValue(), typeform.Form.check()
        })
    }, this.unbindEvents = function() {
        $("body").removeClass("confirm-text-textarea"), "default" == Globals.browser && $textarea.blur(), $wrapper.height(elem.children(".wrapper").height()), $(window).off(".e"), elem.off(".e").removeClass("ready")
    }, this.preOpen = function() {
        this.bindEvents()
    }, this.open = function() {
        this.done = !0, showConfirm = !1, Globals.useFocus && (_.defer(function() {
            $textarea.focus(), elem.addClass("ready")
        }), this.checkButton()), initialized = !0
    }, this.advanceArrow = function(direction) {
        return App.Utils.isCaretAtStart($textarea) && direction == App.Keyboard.UP || App.Utils.isCaretAtEnd($textarea) && direction == App.Keyboard.DOWN
    }, this.advanceTab = function(direction) {
        return !0
    }, this.checkEnter = function() {
        return !0
    }, this.preSelectFirst = function() {
        return !1
    }, this.preSelectLast = function() {
        return !1
    }, this.setValue = function(callback) {
        this.value = $textarea.val(), this.pipeValue = this.value, this.isCompleted = "" !== this.value, callback && callback()
    }, this.validate = function(callback, showError) {
        return showError = void 0 === showError || showError, setFocus = !Globals.isTouch, showConfirm = !1, "boolean" == typeof callback && (setFocus = callback), this.required && "" == this.value ? (showError && form.error.show(elem, App.Texts.required), setFocus && $textarea.focus(), !1) : (callback && callback(), !0)
    }, this.resize = function() {
        windowHeight = $(window).height()
    }, this.showResult = function() {
        this.value ? $result.show().children("span").html(this.value) : $result.hide()
    }, this.update = function(obj) {
        var question = obj.question;
        "" === question ? elem.hide() : elem.show(), $span.html(question), $textarea.val() || $textarea.unbind(".placeholder").bind("focus .placeholder", function() {
            $(this).val() == App.Texts["default-text"] && $(this).val("").removeClass("placeholder")
        }).bind("blur .placeholder", function() {
            $(this).val() || $(this).val(App.Texts["default-text"]).addClass("placeholder")
        }).val(App.Texts["default-text"]).addClass("placeholder"), createAutoresize()
    }, this.checkButton = function() {
        _this.confirmButton.check(_this.isFilled(), $confirmButton, $textarea)
    }, this.isFilled = function() {
        return "" !== $textarea.val()
    };
    var _textareaEvent = function(evt) {
        var key = document.all ? evt.keyCode : evt.which,
            stopPropagationConditions = [App.Keyboard.isSpace(key), App.Keyboard.isEnter(key) && evt.shiftKey, !App.Utils.isCaretAtStart($textarea) && (App.Keyboard.isArrowUp(key) || App.Keyboard.isArrowLeft(key)), !App.Utils.isCaretAtEnd($textarea) && (App.Keyboard.isArrowDown(key) || App.Keyboard.isArrowRight(key))];
        "keydown" == evt.type ? _.some(stopPropagationConditions, function(condition) {
            return condition
        }) && evt.stopPropagation() : "keyup" == evt.type && (evt.shiftKey || 9 == key || App.Keyboard.isShiftOnly(key) ? (evt.stopPropagation(), evt.preventDefault()) : $textarea.val() ? form.error.hide(elem) : _this.checkButton())
    }
};
$.fn.textarea = function(options) {
    return this.each(function() {
        var element = $(this);
        if (!element.data("control")) {
            var textarea = new Textarea(element, options || {});
            element.data("control", textarea)
        }
    })
};
var Statement = function(elem) {
    var $span, $button;
    elem.find(".container.confirm");
    this.value = "", this.pipeValue = "", this.isCompleted = !0, this.required = !1, this.done = !1, this.confirmText = "default", this.attachLimit = {
        "default": 140,
        large: 130,
        small: 100
    }, this.quoteMarksEnabled = elem.data("model").quoteMarksEnabled, this.init = function() {
        $span = elem.find(".question > span"), $button = elem.find(".button > span"), $quote = elem.find(".item"), "" === $span.html() && elem.hide(), this.setQuotes(this.quoteMarksEnabled)
    }, this.set = function(attr, value) {
        this[attr] = value, "isActive" !== attr && "isVisible" !== attr || (this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active"))
    }, this.bindEvents = function() {
        var evt = "touch" === Globals.browser ? "touchend" : "mouseup";
        elem.on(evt + ".e", ".button", _.debounce(function() {
            return typeform.Form.check(), form.autoNext(), $(this).removeClass("active"), !1
        }, Globals.debounceWait, !0))
    }, this.unbindEvents = function() {
        elem.off(".e")
    }, this.preOpen = function() {
        this.bindEvents()
    }, this.open = function() {
        this.done = !0
    }, this.setQuotes = function(quoteMarks) {
        !1 === quoteMarks ? $quote.hide() : $quote.show()
    }, this.advanceArrow = function(direction) {
        return !0
    }, this.advanceTab = function(direction) {
        return !0
    }, this.checkEnter = function() {
        return !0
    }, this.preSelectFirst = function() {
        return !1
    }, this.preSelectLast = function() {
        return !1
    }, this.setValue = function(callback) {
        callback && callback()
    }, this.validate = function(callback) {
        return callback && callback(), !0
    }, this.showResult = function() {}, this.resize = function() {}, this.update = function(obj) {
        var question = obj.question;
        "" === question ? elem.hide() : elem.show(), "" === obj.button ? $button.html(App.Texts["continue-button"]) : $button.html(obj.button), this.setQuotes(obj.quoteMarksEnabled), $span.html(question)
    }
};
$.fn.statement = function() {
    return this.each(function() {
        var element = $(this);
        if (!element.data("control")) {
            var statement = new Statement(element);
            element.data("control", statement)
        }
    })
};
var Terms = function(elem) {
    function setDimensions() {
        $buttons.css("display", "inline-block"), width = 0, $buttons.each(function() {
            $(this).css("width", ""), $(this).width() > width && (width = $(this).width())
        }), $buttons.css({
            width: width + 5,
            display: "block"
        })
    }

    function selectButtonById(id) {
        var $button = $buttons.eq(id),
            $aux = $buttons.eq(!id);
        $button.hasClass("selected") ? ($button.removeClass("selected"), hasSelection = !1) : (form.error.hide(elem), $button.addClass("selected").children(".aux").selectEffect(2), $aux.removeClass("selected"), hasSelection = !0), elem.data("control").setValue(), typeform.Form.check(), 1 == hasSelection && form.autoNext(!0), enable = $button.hasClass("selected") || $aux.hasClass("selected"), "undefined" != typeof $footerNav && ($footerNav.enable(enable), $tabNavbutton.enable(enable))
    }
    var $span, $item, KEY_YES = 89,
        KEY_NO = 78,
        ready = !1,
        $tabNavbutton = elem.find(".button.nav.next"),
        $keys = elem.find(".keys"),
        $buttons = $keys.children("li"),
        $scrollArea = elem.find(".scroll-area");
    this.value = "", this.pipeValue = "", this.isCompleted = !1, this.required = elem.hasClass("required"), this.done = !1, this.confirmText = "default", this.attachLimit = {
        "default": 170,
        large: 190,
        small: 145
    }, this.init = function() {
        $span = elem.find(".question").children("span"), $item = elem.find(".item").children("span"), "" === $span.html() && elem.hide(), KEY_YES = $buttons.eq(0).children(".letter").children("span").html().charCodeAt(0), KEY_NO = $buttons.eq(1).children(".letter").children("span").html().charCodeAt(0)
    }, this.set = function(attr, value) {
        this[attr] = value, "isActive" === attr || "isVisible" === attr ? this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active") : "index" === attr && value && $item.html(value)
    }, this.bindEvents = function() {
        ready = !0;
        var evt = "touch" === Globals.browser ? "touchend" : "mouseup";
        elem.on(evt + ".e", "li", _.debounce(_click, Globals.debounceWait, !0)), Globals.useKeyboardEvents && $(document).on("keydown.e", _keyboard)
    }, this.unbindEvents = function() {
        ready = !1, elem.off(".e"), $(document).off(".e")
    }, this.preOpen = function() {
        this.bindEvents(), $buttons.removeClass("pre-selected"), useKeyNav && (navType == App.Keyboard.UP && $keys.children(":last-child").addClass("pre-selected"), navType == App.Keyboard.DOWN && $keys.children().eq(0).addClass("pre-selected"))
    }, this.open = function() {
        this.done = !0
    }, this.advanceArrow = function(direction) {
        if ($preSelected = $keys.find(".pre-selected"), $preSelected.removeClass("pre-selected"), direction == App.Keyboard.DOWN || direction == App.Keyboard.UP)
            if ($preSelectedCandidate = direction == App.Keyboard.DOWN ? $preSelected.next("li") : $preSelected.prev("li"), $preSelected.length) {
                if (!$preSelectedCandidate.length) return !0
            } else $preSelectedCandidate.length || ($preSelectedCandidate = direction == App.Keyboard.DOWN ? $keys.children().eq(0) : $keys.children(":last-child"));
        else $preSelectedCandidate = direction == App.Keyboard.RIGHT ? $preSelected.next("li") : $preSelected.prev("li"), $preSelectedCandidate.length || ($preSelectedCandidate = direction == App.Keyboard.RIGHT ? $keys.children().eq(0) : $keys.children(":last-child"));
        return ready && $preSelectedCandidate.addClass("pre-selected"), !1
    }, this.advanceTab = function(direction) {
        return !0
    }, this.checkEnter = function() {
        return !$keys.find(".pre-selected").length || (selectButtonById($keys.find(".pre-selected").index()), !1)
    }, this.preSelectFirst = function() {
        return $keys.children("li:first").addClass("pre-selected"), !0
    }, this.preSelectLast = function() {
        return $keys.children("li:last").addClass("pre-selected"), !0
    }, this.setValue = function(callback) {
        this.value = "", $buttons.eq(0).hasClass("selected") && (this.value = "1"), $buttons.eq(1).hasClass("selected") && (this.value = "0"), this.isCompleted = "" !== this.value, this.pipeValue = function() {
            switch (this.value) {
                case "0":
                    return App.Texts.no;
                case "1":
                    return App.Texts.yes;
                default:
                    return ""
            }
        }.call(this), callback && callback()
    }, this.validate = function(callback, showError) {
        return showError = void 0 === showError || showError, !this.required || "" !== this.value && "0" !== this.value ? (callback && callback(), !0) : (showError && form.error.show(elem, App.Texts.terms), !1)
    }, this.resize = function() {
        "touch" == Globals.browser && $(window).width() < Globals.responsiveThreshold || setDimensions()
    }, this.update = function(obj) {
        var question = obj.question;
        "" === question ? elem.hide() : (elem.show(), setDimensions()), $span.html(question), $scrollArea.html(obj.text)
    };
    var _keyboard = function(evt) {
            key = document.all ? evt.keyCode : evt.which, "keydown" == evt.type && (key == KEY_YES ? selectButtonById(0) : key == KEY_NO ? selectButtonById(1) : App.Keyboard.isSpace(key) ? ($keys.find(".pre-selected").length && selectButtonById($keys.find(".pre-selected").index()), evt.preventDefault()) : (App.Keyboard.isArrowDown(key) || App.Keyboard.isArrowUp(key)) && evt.preventDefault())
        },
        _click = function(evt) {
            return selectButtonById($(this).index()), !1
        }
};
$.fn.terms = function() {
    return this.each(function() {
        var element = $(this);
        if (!element.data("control")) {
            var terms = new Terms(element);
            element.data("control", terms)
        }
    })
};
var YesNo = function(elem) {
    function setDimensions() {
        var width = 0;
        return $buttons.each(function() {
            var currentWidth = $(this).width();
            currentWidth > width && (width = currentWidth)
        }), width
    }

    function selectButtonById(id) {
        var $button = $buttons.eq(id),
            $aux = $buttons.eq(!id);
        $button.hasClass("selected") ? ($button.removeClass("selected"), hasSelection = !1) : (form.error.hide(elem), $button.addClass("selected").children(".aux").selectEffect(2), $aux.removeClass("selected"), hasSelection = !0), elem.data("control").setValue(), typeform.Form.check(), 1 == hasSelection && form.autoNext(!0), enable = $button.hasClass("selected") || $aux.hasClass("selected"), "undefined" != typeof $footerNav && ($footerNav.enable(enable), $tabNavbutton.enable(enable))
    }
    var $span, $item, KEY_YES = 89,
        KEY_NO = 78,
        ready = !1,
        $tabNavbutton = elem.find(".button.nav.next"),
        $keys = elem.find(".keys"),
        $buttons = $keys.children("li");
    this.value = "", this.pipeValue = "", this.isCompleted = !1, this.required = elem.hasClass("required");
    var required = this.required;
    this.done = !1, this.confirmText = "default", this.attachLimit = {
        "default": 170,
        large: 190,
        small: 145
    }, this.init = function() {
        $span = elem.find(".question").children("span"), $item = elem.find(".item").children("span"), KEY_YES = $buttons.eq(0).children(".letter").children("span").html().charCodeAt(0), KEY_NO = $buttons.eq(1).children(".letter").children("span").html().charCodeAt(0), "" === $span.html() && elem.hide(), $tabNavbutton.enable(!required)
    }, this.set = function(attr, value) {
        this[attr] = value, "isActive" === attr || "isVisible" === attr ? this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active") : "index" === attr && value && $item.html(value)
    }, this.bindEvents = function() {
        ready = !0;
        var evt = "touch" === Globals.browser ? "touchend" : "mouseup";
        elem.on(evt + ".e", "li", _.debounce(_click, Globals.debounceWait, !0)), Globals.useKeyboardEvents && $(document).on("keydown.e", _keyboard)
    }, this.unbindEvents = function() {
        ready = !1, elem.off(".e"), $(document).off(".e")
    }, this.preOpen = function() {
        this.bindEvents(), $buttons.removeClass("pre-selected"), useKeyNav && (navType == App.Keyboard.UP && $keys.children(":last-child").addClass("pre-selected"), navType == App.Keyboard.DOWN && $keys.children().eq(0).addClass("pre-selected"))
    }, this.open = function() {
        this.done = !0
    }, this.advanceArrow = function(direction) {
        if ($preSelected = $keys.find(".pre-selected"), $preSelected.removeClass("pre-selected"), direction == App.Keyboard.DOWN || direction == App.Keyboard.UP)
            if ($preSelectedCandidate = direction == App.Keyboard.DOWN ? $preSelected.next("li") : $preSelected.prev("li"), $preSelected.length) {
                if (!$preSelectedCandidate.length) return !0
            } else $preSelectedCandidate.length || ($preSelectedCandidate = direction == App.Keyboard.DOWN ? $keys.children().eq(0) : $keys.children(":last-child"));
        else $preSelectedCandidate = direction == App.Keyboard.RIGHT ? $preSelected.next("li") : $preSelected.prev("li"), $preSelectedCandidate.length || ($preSelectedCandidate = direction == App.Keyboard.RIGHT ? $keys.children().eq(0) : $keys.children(":last-child"));
        return ready && $preSelectedCandidate.addClass("pre-selected"), !1
    }, this.advanceTab = function(direction) {
        return !0
    }, this.checkEnter = function() {
        return !$keys.find(".pre-selected").length || (selectButtonById($keys.find(".pre-selected").index()), !1)
    }, this.preSelectFirst = function() {
        return $keys.children("li:first").addClass("pre-selected"), !0
    }, this.preSelectLast = function() {
        return $keys.children("li:last").addClass("pre-selected"), !0
    }, this.setValue = function(callback) {
        this.value = "", $buttons.eq(0).hasClass("selected") && (this.value = "1"), $buttons.eq(1).hasClass("selected") && (this.value = "0"), this.isCompleted = "" !== this.value, this.pipeValue = function() {
            switch (this.value) {
                case "0":
                    return App.Texts.no;
                case "1":
                    return App.Texts.yes;
                default:
                    return ""
            }
        }.call(this), callback && callback()
    }, this.validate = function(callback, showError) {
        return showError = void 0 === showError || showError, this.required && "" === this.value ? (showError && form.error.show(elem, App.Texts["must-select"]), !1) : (callback && callback(), !0)
    }, this.resize = function(windowWidth) {
        this.maxWidth = null, "touch" == Globals.browser && windowWidth < Globals.responsiveThreshold || (this.maxWidth = setDimensions())
    }, this.applyResize = function() {
        _.isNull(this.maxWidth) || $buttons.css({
            width: this.maxWidth + 5
        })
    }, this.update = function(obj) {
        var question = obj.question;
        "" === question ? elem.hide() : (elem.show(), setDimensions()), $span.html(question)
    };
    var _keyboard = function(evt) {
            key = document.all ? evt.keyCode : evt.which, "keydown" == evt.type && (key == KEY_YES ? selectButtonById(0) : key == KEY_NO ? selectButtonById(1) : App.Keyboard.isSpace(key) ? ($keys.find(".pre-selected").length && selectButtonById($keys.find(".pre-selected").index()), evt.preventDefault()) : (App.Keyboard.isArrowDown(key) || App.Keyboard.isArrowUp(key)) && evt.preventDefault())
        },
        _click = function(evt) {
            return selectButtonById($(this).index()), !1
        }
};
$.fn.yesNo = function() {
    return this.each(function() {
        var element = $(this);
        if (!element.data("control")) {
            var yesNo = new YesNo(element);
            element.data("control", yesNo)
        }
    })
};
var Rating = function(elem) {
    function resize() {
        containerWidth = $icons.width(), margin = Globals.isMobile ? 3 : 7, size = Math.min((containerWidth - totalSteps * margin) / totalSteps, maxFontSize), $icons.css("font-size", size - 3 + "px").children().css({
            width: size
        })
    }

    function addIcons(steps) {
        $icons.empty();
        var label = "",
            back = "";
        $(steps).each(function(i, val) {
            "default" == Globals.browser && (label = "<div class='label fontFamily secondaryColor'><div class='letter'><span>" + val + "</span></div></div>", back = "<div class='icon back'></div>"), $icons.append("<li onclick=\"rate(" + val + ");\"><div class='center-wrapper'><div class='center'><div class='icon'></div>" + back + label + "</div></div></li>")
        }), totalSteps = $(steps).length
    }

    function select($li) {
        $leftSiblings = $li.prevAll(), $rightSiblings = $li.nextAll(), $li.hasClass("selected") && !$li.next(".selected").length ? ($li.removeClass("selected"), isScale || $leftSiblings.removeClass("selected")) : (form.error.hide(elem), $li.selectEffect(2).addClass("selected"), isScale || $leftSiblings.addClass("selected")), _.defer(function() {
            elem.data("control").setValue(), typeform.Form.check(), elem.data("control").value > 0 && form.autoNext(!0)
        }), isScale || $rightSiblings.removeClass("selected")
    }

    function over($li) {
        $li.addClass("hover"), isScale || $li.prev().length && over($li.prev())
    }

    function out($li) {
        $li.add($li.siblings()).removeClass("hover")
    }
    var $navButton, $span, $item, totalSteps, $icons, currentQuestion, $questions, currentQuestion, is1, maxFontSize = 66,
        hasMoveMouse = (new Array, !1);
    this.value = null, this.pipeValue = "", this.isCompleted = !1, this.required = elem.hasClass("required"), this.unique = elem.hasClass("unique"), this.done = !1, this.required, this.confirmText = "default", this.attachLimit = {
        "default": 170,
        large: 135,
        small: 120
    }, isScale = !1, this.init = function() {
        $span = elem.find(".question > span"), $item = elem.find(".item").children("span"), $navButton = elem.find("div.button"), "" === $span.html() && elem.hide(), $icons = elem.find(".icons"), obj = $icons.data("steps"), "undefined" != typeof obj && addIcons(obj.steps), currentQuestion = 0, $questions = elem.find(".questions > li")
    }, this.set = function(attr, value) {
        this[attr] = value, "isActive" === attr || "isVisible" === attr ? this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active") : "index" === attr && value && $item.html(value)
    }, this.bindEvents = function() {
        var evt = "touch" === Globals.browser ? "touchend" : "mouseup";
        elem.on(evt + ".e", ".icons li", _.debounce(_select, Globals.debounceWait, !0)), "default" == Globals.browser && elem.on("mouseover.e mousemove.e mouseleave.e", ".icons li", _mouse), Globals.useKeyboardEvents && $(document).on("keyup.e keydown.e", _documentKeyboard)
    }, this.unbindEvents = function() {
        elem.off(".e"), $(document).off(".e"), $(window).off(".e")
    }, this.preOpen = function() {
        hasMoveMouse = !1, this.bindEvents()
    }, this.open = function() {
        this.done = !0
    }, this.advanceArrow = function(direction) {
        return direction != App.Keyboard.LEFT && direction != App.Keyboard.RIGHT || ($icons.children().removeClass("hover selected"), $selected = $icons.children(".pre-selected:last"), direction == App.Keyboard.LEFT ? ($selected.removeClass("pre-selected"), $candidate = $selected.prev()) : ($candidate = $selected.length ? $selected.next() : $icons.children().eq(0), $candidate.addClass("pre-selected")), !1)
    }, this.advanceTab = function(direction) {
        return !0
    }, this.checkEnter = function() {
        return $candidate = $icons.find(".pre-selected:last"), !$candidate.length || (select($candidate), !1)
    }, this.preSelectFirst = function() {
        return !1
    }, this.preSelectLast = function() {
        return !1
    }, this.setValue = function(callback) {
        selectedIndex = $icons.find(".selected:last").index(), this.value = null, selectedIndex >= 0 && (this.value = selectedIndex + 1), this.pipeValue = this.value || "", elem.find(".hover").removeClass("hover"), this.isCompleted = this.value > 0, callback && callback()
    }, this.validate = function(callback, showError) {
        return showError = void 0 === showError || showError, this.required && null === this.value ? (showError && form.error.show(elem, App.Texts["must-select"]), !1) : (callback && callback(), !0)
    }, this.showResult = function() {}, this.resize = resize, firstResize = !0, this.update = function(obj) {
        var question = obj.question;
        "" === question ? elem.hide() : (elem.show(), firstResize && (resize(), firstResize = !1)), $span.html(question), obj.steps && ($icons.html(), addIcons(obj.steps), resize()), obj.shape && (elem.removeClass(/^icon-/).addClass("icon-" + obj.shape), resize())
    };
    var _select = function(evt) {
            return select($(this)), !1
        },
        _mouse = function(evt) {
            return "mousemove" == evt.type ? hasMoveMouse = !0 : "mouseover" == evt.type ? ($icons.children(".pre-selected").removeClass("pre-selected"), over($(this))) : "mouseleave" == evt.type && out($(this)), !1
        },
        _documentKeyboard = function(evt) {
            key = document.all ? evt.keyCode : evt.which;
            var val;
            "keyup" == evt.type ? ($icons.find(".hover").removeClass("hover"), key >= 48 && key <= 57 ? key - 48 <= totalSteps && (val = key - 47) : key >= 96 && key <= 105 && key - 96 <= totalSteps && (val = key - 95), void 0 !== val && (val -= 1, 0 == val && (is1 ? val = 10 : ($icons.find(".selected").removeClass("selected"), form.autoNext(!0))), is1 = 1 == val, setTimeout(function() {
                is1 = !1
            }, 1e3), 0 != val && select($icons.children().eq(val - 1)))) : App.Keyboard.isSpace(key) && select($icons.find(".pre-selected:last"))
        }
};
$.fn.rating = function() {
    return this.each(function() {
        var element = $(this);
        if (!element.data("control")) {
            var rating = new Rating(element);
            element.data("control", rating)
        }
    })
};
var List = function(elem, options) {
    function resize(windowWidth) {
        isPictureChoice ? _this.setPictureChoiceDimensions() : "touch" == Globals.browser ? (windowWidth >= Globals.responsiveThreshold || _this.isCreditCard) && !_this.isOrientationLandscape() && _this.setMultipleChoiceDimensions() : _this.setMultipleChoiceDimensions()
    }

    function getRow(index) {
        for (i = 0; index >= leftColumn[i];) i++;
        return 0 === i ? 0 : i - 1
    }

    function setMultipleChoiceDimensions() {
        var $lis = $ul.find("li");
        return liWidth = 0, $lis.each(function() {
            var currentWidth = $(this).find(".label").width();
            currentWidth > liWidth && (liWidth = currentWidth)
        }), liWidth += 5
    }

    function savePCDimensions() {
        $ul.find(".image-wrapper > img").each(function() {
            $(this).data("width") || $(this).data("width", $(this).attr("width")).data("height", $(this).attr("height"))
        })
    }

    function checkCustom() {
        $customLi.hasClass("open") ? resetOther() : ($customLi.removeClass("selected").addClass("open"), "default" != Globals.browser || isPictureChoice || (w = Math.max(liWidth, windowInnerWidth / 3), $customLi.css("width", w)), "default" === Globals.browser && $(document).one("mouseup.e", _inputBlur), $otherInput.focus())
    }

    function addCustom() {
        checkCustom();
        var valor = $otherInput.val();
        "" === valor ? (valor = defaultTextOther, elem.removeClass("filled")) : elem.addClass("filled"), $customLi.find("span.val").html(valor), $otherInput.blur(), valor != defaultTextOther && setTimeout(function() {
            select($customLi)
        }, 300)
    }

    function checkSelect($li) {
        $li.hasClass("custom") ? checkCustom() : select($li)
    }

    function select($li) {
        multiple && !hasAlert && setTimeout(function() {
            $multiple.addClass("intermitent").selectEffect(2), hasAlert = !0
        }, 1100), Globals.isTouch || $customLi.hasClass("open") && resetOther(), $li.hasClass("selected") ? $li.removeClass("selected") : (form.error.hide(elem), multiple || $li.siblings(".selected").removeClass("selected"), $li.addClass("selected").children(".aux").selectEffect(2), multiple || _.defer(function() {
            form.autoNext(!0)
        })), elem.data("control").setValue(), typeform.Form.check(), multiple && (0 !== $ul.children(".selected").length ? _this.confirmButton.show($confirm) : _this.confirmButton.hide($confirm))
    }

    function changeDomByMultiple(multiple) {
        multiple ? elem.addClass("multiple") : elem.removeClass("multiple")
    }

    function changeDomByVertical(vertical) {
        vertical ? elem.addClass("vertical") : elem.removeClass("vertical")
    }

    function resetOther() {
        $customLi.removeClass("open"), "default" != Globals.browser || isPictureChoice || $customLi.css("width", liWidth)
    }

    function replaceHtml(oldEl, html) {
        var newEl = oldEl.cloneNode(!1);
        return newEl.innerHTML = html, oldEl.parentNode.replaceChild(newEl, oldEl), newEl
    }
    var isPictureChoice, vertical, $multiple, $span, $item, $ul, $customLi, defaultTextOther, $otherInput, $confirm, multiple, randomize, numItems, supersize, _this = this,
        prevTop = 0,
        hasMove = !1,
        startY = 0,
        hasAlert = !1,
        ready = !1,
        liWidth = 0,
        windowInnerWidth = 0,
        letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        innerPositions = [],
        leftColumn = [];
    this.value = {
        choices: undefined,
        other: ""
    }, this.logicValue = {}, this.pipeValue = "", this.isCompleted = !1, this.isCreditCard = !!elem.attr("id") && elem.attr("id").indexOf("creditCard") > -1, this.required = elem.hasClass("required"), this.multiple = elem.hasClass("multiple"), randomize = elem.hasClass("randomize"), supersize = elem.hasClass("supersize"), this.vertical = elem.hasClass("vertical"), this.done = !1, multiple = this.multiple, this.required, vertical = this.vertical, isPictureChoice = elem.hasClass("list-image"), this.confirmText = "default", this.attachLimit = multiple ? {
        "default": 165,
        large: 165,
        small: 124
    } : {
        "default": 138,
        large: 132,
        small: 97
    }, this.confirmButton = options.confirmButton, this.init = function() {
        var self = this;
        $span = elem.find(".question").children("span"), $item = elem.find(".item").children("span"), $multiple = elem.find(".multiple"), "" === $span.html() && elem.hide(), $ul = elem.find("ul"), $customLi = $ul.children(".custom"), randomize && $ul.children("li").not(".custom").shuffle().each(function(index, li) {
            $(li).find(".letter > span").html(letters[index])
        }), numItems = $ul.children().length, $otherInput = elem.find(".custom :text"), defaultTextOther = elem.find("li.custom").find("span.val").html(), $confirm = elem.find(".container.confirm"), isPictureChoice && (savePCDimensions(), !0 === Globals.isIOs && (this.IOSGifLayer = this.createIOSGifLayer()), elem.find(".columns img").lazyload({
            effect: "fadeIn",
            event: "lazyload",
            load: function() {
                var img = $(this);
                img.data("loaded", !0), self.isImageAGif(img) && ("default" === Globals.browser && self.applyFrezzeGif(img), !0 === Globals.isIOs && self.addGifToLayer(img))
            }
        })), changeDomByMultiple(multiple), changeDomByVertical(vertical), windowInnerWidth = window.innerWidth
    }, this.set = function(attr, value) {
        this[attr] = value, "isActive" === attr || "isVisible" === attr ? this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active") : "index" === attr && value && $item.html(value)
    }, this.bindEvents = function() {
        ready = !0, Globals.useKeyboardEvents && $(document).on("keydown.e keyup.e", _documentKeydown), "touch" == Globals.browser ? elem.on("touchstart.e touchmove.e touchend.e", "li", _selectLi).on("confirm.e", "input", function() {
            setTimeout(function() {
                _okCustom()
            }, Globals.keyboardTimeout)
        }) : "default" == Globals.browser && elem.on("mouseup.e", "li", _.debounce(function(e) {
            e.stopPropagation(), _selectLi(e)
        }, Globals.debounceWait, !0)).on("mouseup.e", "input", _inputMouseUp).on("keydown.e keyup.e", "input", _inputKeyboard).on("mouseup.e", ".ok-confirm .button", _okCustom)
    }, this.unbindEvents = function() {
        $ul.children(".pre-selected").removeClass("pre-selected"), ready = !1, $(document).off(".e"), elem.off(".e"), resetOther()
    }, this.preOpen = function() {
        this.bindEvents(), useKeyNav && (navType != App.Keyboard.UP && navType != App.Keyboard.DOWN || (navType == App.Keyboard.UP && ($preselected = $ul.children(":last-child")), navType == App.Keyboard.DOWN && ($preselected = $ul.children().eq(0)), $preselected.addClass("pre-selected"), form.centerElement(elem, $preselected))), $multiple.removeClass("intermitent")
    }, this.open = function() {
        this.done = !0, $ul.find(".selected").length || (hasAlert = !1, isPictureChoice && elem.find("img").trigger("lazyload"))
    }, this.advanceArrow = function(direction) {
        if ($preSelected = $ul.find(".pre-selected"), $preSelected.length) {
            if (direction == App.Keyboard.LEFT && (0 === $preSelected.index() ? $preSelectedCandidate = $ul.children(":last-child") : $preSelectedCandidate = $preSelected.prev()), direction == App.Keyboard.RIGHT && ($preSelected.index() == $ul.children(":last-child").index() ? $preSelectedCandidate = $ul.children().eq(0) : $preSelectedCandidate = $preSelected.next()), direction == App.Keyboard.UP) {
                if (preSelectedRow = getRow($preSelected.index()), preSelectedColumn = $preSelected.index() - leftColumn[preSelectedRow], 0 === preSelectedRow) return !0;
                candidateIndex = leftColumn[preSelectedRow - 1] + preSelectedColumn, $preSelectedCandidate = $ul.children().eq(candidateIndex)
            }
            if (direction == App.Keyboard.DOWN) {
                if (preSelectedRow = getRow($preSelected.index()), preSelectedColumn = $preSelected.index() - leftColumn[preSelectedRow], "undefined" == typeof leftColumn[preSelectedRow + 1]) return !0;
                candidateIndex = leftColumn[preSelectedRow + 1] + preSelectedColumn, candidateIndex > $ul.children(":last-child").index() && (candidateIndex = $ul.children(":last-child").index()), $preSelectedCandidate = $ul.children().eq(candidateIndex)
            }
        } else if ($preSelectedCandidate = direction == App.Keyboard.RIGHT || direction == App.Keyboard.DOWN ? $ul.children().eq(0) : $ul.children(":last-child"), direction == App.Keyboard.UP) return !0;
        offset = $preSelectedCandidate.offset().top - window.pageYOffset, $(window).height() - 100 < offset ? form.center(offset - $(window).height() / 2) : offset < 100 && form.center(-offset), $ul.children(".hover").removeClass("hover"), $preSelectedCandidate.addClass("pre-selected"), $preSelected.removeClass("pre-selected")
    }, this.advanceTab = function(direction) {
        return !0
    }, this.checkEnter = function() {
        var $pre = elem.find(".pre-selected");
        return !($pre.length && !$pre.hasClass("selected")) || (checkSelect($pre), !1)
    }, this.preSelectFirst = function() {
        return $ul.children("li:first").addClass("pre-selected"), !0
    }, this.preSelectLast = function() {
        return $ul.children("li:last").addClass("pre-selected"), !0
    }, this.setValue = function(callback) {
        var selected, $selected, values = [];
        this.multiple ? ($selected = $ul.children(".selected:not(.custom)"), $selected.length && (selected = {}, $selected.each(function() {
            id = $(this).attr("id"), selected["choice:" + id] = $(this).find(':hidden[name="value"]').val(), values.push(id)
        }))) : ($selected = $ul.children(".selected"), selected = $selected.find(':hidden[name="value"]').val(), values.push($selected.attr("id"))), this.value.choices = selected, this.logicValue = values, $customLi.is(".selected") && $otherInput.val() ? ("undefined" == typeof this.value.choices && (this.value.choices = {}), this.multiple && (this.value.choices["choice:other"] = "!other"), this.value.other = $otherInput.val(), this.logicValue.push(this.value.other)) : this.value.other = "", this.isCompleted = !_.isEmpty(this.value.choices) || "" !== this.value.other, this.pipeValue = this.getPipeValue(this.value), callback && callback()
    }, this.getPipeValue = function(value) {
        return "undefined" == typeof value.choices ? values = [""] : "string" == typeof value.choices ? values = [value.choices] : values = _.values(value.choices), "undefined" != typeof value.choices && "" !== value.other && values.push(value.other), values = _.without(values, "!other"), values = _.map(values, function(value) {
            return /^!choice/.test(value) ? value.split("!choice:")[1] : value
        }), values.join(", ")
    }, this.validate = function(callback, showError) {
        return showError = void 0 === showError || showError, this.required && 0 === $ul.children(".selected").length ? (showError && form.error.show(elem, App.Texts["must-select"]), !1) : (callback && callback(), !0)
    }, this.resize = function(windowWidth) {
        resize(windowWidth)
    }, this.select = function($li) {
        select($li)
    }, this.triggerLazyload = function() {
        this.$elem.find(".image-wrapper img").each(function() {
            $(this).trigger("lazyload")
        })
    }, this.load = function() {
        var self = this;
        this.$elem.find(".image-wrapper img").each(function() {
            var img = $(this);
            "" !== img.attr("src") && self.isImageAGif(img) && (self.isImageLoaded(img) ? self.restartGif(img) : img.data("focus", !0))
        })
    }, this.restartGif = function(img) {
        "touch" == Globals.browser ? setTimeout(function() {
            var src = img.attr("src");
            img.removeAttr("src").attr("src", src)
        }, 10) : img.trigger("focusenter")
    }, this.pause = function() {
        var self = this;
        this.$elem.find(".image-wrapper img").each(function() {
            var img = $(this);
            self.isImageAGif(img) && img.trigger("focusleave")
        })
    }, this.isImageAGif = function($img) {
        var originalImage = $img.data("original");
        return !(!originalImage || "gif" !== originalImage.slice(-3))
    }, this.applyFrezzeGif = function($img) {
        this.frezzeGif($img), freezeframe.run($img, $img.data("focus")), this.resizeFreezeContainer($img)
    }, this.frezzeGif = function($img) {
        $img.addClass("freezeframe")
    }, this.createIOSGifLayer = function() {
        var gifLayer = $("<div />").addClass("ios-picture-choice-gif-layer");
        return $("body").append(gifLayer), gifLayer
    }, this.addGifToLayer = function(img) {
        var gif = $("<img />");
        gif.attr("src", img.attr("src")), gif.css({
            "margin-left": -(img.width() - 1),
            "margin-top": -(img.height() - 1),
            height: img.height(),
            width: img.width()
        }), this.IOSGifLayer.append(gif)
    }, this.resizeFreezeContainer = function($img) {
        var freezeContainer = $img.parent();
        freezeContainer.css("position", "absolute"), freezeContainer.css("width", $img.width()), freezeContainer.css("height", $img.height()), freezeContainer.css("margin-left", $img.css("margin-left")), freezeContainer.css("margin-top", $img.css("margin-top")), freezeContainer.css("top", "50%"), freezeContainer.css("left", "50%")
    }, this.isImageLoaded = function($img) {
        return !!$img.data("loaded")
    }, this.update = function(obj) {
        self = this;
        var question = obj.question;
        if ("" === question ? elem.hide() : elem.show(), $span.html(question), "undefined" != typeof obj.options) {
            isPictureChoice || $ul.empty();
            var arrayOptions = obj.options;
            randomize = obj.randomize, supersize = obj.supersize;
            (arrayOptions.length < $ul.children().length || randomize) && $ul.empty(), $customLi.remove();
            var cont = 0;
            if (isPictureChoice) {
                for (var i in arrayOptions) {
                    var caption = obj.labelsEnabled ? obj.options[i].caption : "",
                        picture = supersize ? obj.options[i].picturesupersize : obj.options[i].picture,
                        width = supersize ? obj.options[i].widthsupersize : obj.options[i].width,
                        height = supersize ? obj.options[i].heightsupersize : obj.options[i].height;
                    "" === caption && "" === picture || ($li = $ul.children().eq(i), $li.length ? ($li.find(".caption").html(caption), $li.find(".image-wrapper > img").attr("src") != picture && $li.find(".image-wrapper > img").attr({
                        src: picture,
                        width: width,
                        height: height
                    }).data({
                        width: width,
                        height: height
                    })) : ($imgWrapper = $('<div class="image-wrapper"></div>'), $img = $('<img src="' + picture + '" width="' + width + '" height="' + height + '" style="display:block"/>'), $img.data({
                        width: width,
                        height: height
                    }), $li = $('<li class="secondaryColorBorder container"><div class="tick-wrapper"></div><span class="tick"></span><div class="text"><div class="secondaryColor label"><div class="secondaryColor letter"><span>' + letters[cont] + '</span></div><div class="caption">' + caption + '</div></div></div><div class="aux secondaryColorBorder"><div class="inset"></div><div class="bg"></div><div class="bd"></div><div class="overlay"></div></div></li>'), $ul.append($li.prepend($imgWrapper.append($img)))), cont++)
                }
                _.defer(function() {
                    resize(), self.applyResize()
                })
            } else {
                var liHTML = "";
                for (var j in arrayOptions) {
                    var val = obj.options[j];
                    "" !== val && (liHTML += '<li class="secondaryColorBorder container"><div class="aux secondaryColorBorder"><div class="inset"></div><div class="bg"></div><div class="bd"></div><div class="overlay"></div></div><div class="secondaryColor letter"><span>' + letters[cont++] + '</span></div><span class="secondaryColor label">' + val + '</span><span class="secondaryColor tick"></span></li>')
                }
                $ul[0] = replaceHtml($ul[0], liHTML), resize(), this.applyResize()
            }
        }
        obj.other && (isPictureChoice ? ($customLi = $('<li class="custom secondaryColorBorder container"> <div class="tick-wrapper"></div> <span class="tick"></span> <div class="image-wrapper"><img src="https://s3-eu-west-1.amazonaws.com/typeform-media-static/other.png" width="124" height="115"> <span class="val">' + App.Texts.other + '</span> <input class="other-field secondaryColor" type="text" autocomplete="off"> <div class="button-wrapper ok-confirm"> <div class="button fontFamily nav tick enabled">   </div> </div> </div> <div class="text"> <div class="secondaryColor label"> <div class="secondaryColor letter"><span>' + letters[cont++] + '</span></div> </div> </div> <div class="aux secondaryColorBorder "> <div class="inset"></div> <div class="bg"></div> <div class="bd"></div> <div class="overlay"></div> </div></li>'), $ul.append($customLi), savePCDimensions(), resize(), this.applyResize()) : ($customLi = $('<li class="custom secondaryColorBorder container"> <input type="hidden" name="value" value="!other" autocomplete="off"> <div class="secondaryColor letter"><span>' + letters[cont++] + '</span></div> <span class="secondaryColor label ellipsis"><span class="val">' + App.Texts.other + '</span></span> <input class="other-field secondaryColor" type="text" autocomplete="off"> <div class="button-wrapper ok-confirm"> <div class="button fontFamily nav tick enabled">  </div> </div> <span class="secondaryColor tick"></span> <div class="aux secondaryColorBorder "> <div class="inset"></div> <div class="bg"></div> <div class="bd"></div> <div class="overlay"></div> </div> <div class="clear"></div> </li>'), $ul.append($customLi))), $otherInput = $customLi.find("input:text"), defaultTextOther = App.Texts.other, "undefined" != typeof obj.multiple && (multiple = obj.multiple, changeDomByMultiple(obj.multiple), resize(), this.applyResize()), "undefined" != typeof obj.vertical && (vertical = obj.vertical, changeDomByVertical(obj.vertical), resize(), this.applyResize()), ("undefined" != typeof obj.options || obj.other) && App.Utils.setContainerColor(App.Utils.getCssValue("backgroundColor", "background-color"), App.Utils.getCssValue("secondaryColor", "color"))
    }, this.setMultipleChoiceDimensions = function() {
        this.maxWidth = setMultipleChoiceDimensions()
    }, this.applyResize = function() {
        var $lis = null;
        if (isPictureChoice) {
            var numImages = this.getNumImagesPerRow(this.containerWidth, supersize, Globals.browser),
                itemWidth = parseInt(this.containerWidth / numImages, 10) - 25;
            $ul.find(".image-wrapper").each(function() {
                _this.resizePictureChoice($(this), supersize, itemWidth, this.containerWidth)
            }), liWidth = itemWidth
        } else this.vertical && "touch" === Globals.browser || ($lis = $ul.find("li"), $lis.css("width", this.maxWidth))
    }, this.setPictureChoiceDimensions = function() {
        var width = $ul.width();
        Globals.isTouch || (width -= 20), this.containerWidth = width
    }, this.getNumImagesPerRow = function(containerWidth, supersize, browser) {
        var breakpoints = [{
                condition: containerWidth < 500,
                columns: 3
            }, {
                condition: containerWidth < 360,
                columns: 2
            }, {
                condition: supersize,
                columns: 2
            }, {
                condition: containerWidth < 500 && supersize && "touch" === browser,
                columns: 1
            }, {
                condition: containerWidth < 350 && supersize,
                columns: 1
            }],
            numImages = 0;
        return breakpoints.filter(function(test) {
            return test.condition
        }).map(function(validCondition) {
            numImages = validCondition.columns
        }), numImages || 4
    }, this.resizePictureChoice = function($container, supersize, itemWidth, containerWidth) {
        supersize ? $container.css({
            width: itemWidth,
            height: .75 * itemWidth
        }) : $container.css({
            width: itemWidth,
            height: itemWidth
        }), $img = $container.children("img"), defaultImageWidth = parseInt($img.data("width"), 10), defaultImageHeight = parseInt($img.data("height"), 10), dimensions = this.calculatePictureChoiceImage(itemWidth, supersize, defaultImageWidth, defaultImageHeight), $img.css({
            marginLeft: -dimensions.width / 2,
            marginTop: -dimensions.height / 2,
            width: dimensions.width,
            height: dimensions.height
        })
    }, this.calculatePictureChoiceImage = function(itemWidth, supersize, defaultImageWidth, defaultImageHeight) {
        var width, height, ratio = supersize ? .75 : 1;
        return defaultImageWidth * ratio > defaultImageHeight ? (height = defaultImageHeight * itemWidth / defaultImageWidth, width = itemWidth) : defaultImageWidth == defaultImageHeight ? height = width = defaultImageHeight * (itemWidth * ratio) / defaultImageWidth : (width = defaultImageWidth * (itemWidth * ratio) / defaultImageHeight, height = itemWidth * ratio), (width > defaultImageWidth || height > defaultImageHeight) && (width = defaultImageWidth, height = defaultImageHeight), {
            width: Math.round(width),
            height: Math.round(height)
        }
    }, this.isOrientationLandscape = function() {
        return window.matchMedia("(orientation: landscape)").matches
    }, this.sortKeyboardNavigation = function() {
        innerPositions = [], leftColumn = [], $ul.children().each(function(index, li) {
            currentTop = $(li).position().top, prevTop != currentTop && (arrIndex = innerPositions.push(currentTop), leftColumn.push(index), prevTop = currentTop)
        })
    };
    var _documentKeydown = function(evt) {
            if (!elem.hasClass("focus")) return !1;
            if (key = document.all ? evt.keyCode : evt.which, "keydown" == evt.type)
                if (evt.ctrlKey || evt.metaKey || evt.preventDefault(), key >= 65 && key <= 90) $key = elem.find("li:eq(" + (key - 65) + ")"), $key.length && checkSelect($key);
                else {
                    if (App.Keyboard.isSpace(key)) {
                        var $pre = elem.find(".pre-selected");
                        return $pre.length && checkSelect($pre), !1
                    }
                    if ("8" == key) {
                        var $pre = $ul.children(".pre-selected");
                        $pre.length && $pre.hasClass("selected") && checkSelect($pre)
                    }
                }
        },
        _inputKeyboard = function(evt) {
            evt.stopPropagation(), key = document.all ? evt.keyCode : evt.which, "keydown" == evt.type && (App.Keyboard.isTab(key) && evt.shiftKey ? (evt.preventDefault(), addCustom()) : App.Keyboard.isTab(key) && !evt.shiftKey || App.Keyboard.isEnter(key) ? (evt.preventDefault(), addCustom()) : App.Keyboard.isEsc(key) && ($otherInput.val(""), addCustom()))
        },
        _selectLi = function(e) {
            if (oe = e.originalEvent, "touchstart" == e.type) hasMove = !1, startY = oe.touches[0].pageY;
            else if ("touchmove" == e.type) hasMove = Math.abs(startY - oe.touches[0].pageY) > 20;
            else if ("touchend" == e.type || "mouseup" == e.type) {
                if (hasMove) return !0;
                e.stopPropagation(), checkSelect($(e.currentTarget))
            }
        },
        _okCustom = function(e) {
            return addCustom(), !1
        },
        _inputBlur = function(e) {
            resetOther()
        },
        _inputMouseUp = function(e) {
            e.stopPropagation()
        }
};
$.fn.list = function(options) {
        return this.each(function() {
            var element = $(this);
            if (!element.data("control")) {
                var list = new List(element, options || {});
                element.data("control", list)
            }
        })
    },
    function($) {
        this.Dropdown = function() {
            function Dropdown(element, options) {
                this.options = $.extend({}, defaults, options), this.$elem = $(element), this.$question = this.$elem.find(".question > span"), this.$item = this.$elem.find(".item > span"), this.$select = this.$elem.find("select"), this.required = this.$elem.hasClass("required"), this.$confirm = this.$elem.find(".container.confirm"), this.$active = !1, this.value = "", this.pipeValue = "", -1 !== navigator.userAgent.indexOf("Mac OS X") ? this.isMac = !0 : this.isMac = !1
            }
            var defaults, removeAccents, setDropdownHeight, _controlHeight, _inputEvents, _mousewheel, _open, _reset, _touch;
            return defaults = {
                awesomise: !1,
                openAnswer: !1,
                Scroll: !1
            }, Dropdown.prototype.attachLimit = {
                "default": 180,
                large: 160,
                small: 120
            }, !1, Dropdown.prototype.init = function(str) {
                var $notFound, $wrapper, self;
                return self = this, this.data = [], this.options.awesomise ? (this.$select.children("option").map(function(index, option) {
                    if (index > 0) return self.data.push($(this).attr("value"))
                }), this.$input = $("<input class='secondaryColor' type='text' placeholder='" + App.Texts["type-select"] + "'/>"), $wrapper = $("<div class='input-wrapper'><a href='#' class='cross secondaryColor'><span>☓</span></a><a href='#' class='triangle'><span></span></a></div>"), $notFound = $('<div class="not-found"><div class="text secondaryColor">' + App.Texts["not-found"] + "</div></div>"), this.$select.after($wrapper.append(this.$input, $notFound)), this.$select.remove(), this.$input.typeahead({
                    minLength: 0,
                    items: 400,
                    wrapper: '<div class="dropdown-wrapper nano"></div>',
                    menu: '<ul class="typeahead dropdown-menu nano-content"></ul>',
                    item: '<li class="container step' + window.containerStep + '"><a class="secondaryColor" href="#"></a><span class="secondaryColor tick"></span><div class="aux secondaryColorBorder"><div class="inset"></div><div class="bg"></div><div class="bd"></div><div class="overlay"></div></div></li>',
                    source: this.data,
                    matcher: function(item) {
                        return ~removeAccents(item.toLowerCase()).indexOf(removeAccents(this.query.toLowerCase()))
                    },
                    updater: function(item) {
                        return self.$active && self.$active.removeClass("selected"), self.$active = self.$nanoScroll.find(".active"), self.$active.addClass("selected").children(".aux").selectEffect(2), setTimeout(function() {
                            return self.$nanoScroll.hide(0), self.setValue(), typeform.Form.check(), form.autoNext(!1)
                        }, 700), item
                    },
                    onProcess: function(results) {
                        return results ? self.$elem.removeClass("not-found") : self.$elem.addClass("not-found")
                    },
                    onDropdownShow: function() {
                        var limit;
                        return self.$elem.addClass("dropdown-show"), $("body").addClass("focus-current"), form.error.hide(self.$elem), setTimeout(function() {
                            return self.$nanoScroll.css("height", self.$input.data("dropdown-height")).show(0), self.$nanoScroll.nanoScroller()
                        }, 0), setTimeout(function() {
                            return self.$nanoScroll.css("height", self.$input.data("dropdown-height")).show(0), self.$nanoScroll.nanoScroller()
                        }, 1e3), limit = self.position.next - 10, window.pageYOffset < limit && (self.$nanoScroll.hide(0), self.options.Scroll.scrollToPos(limit, function() {
                            return setTimeout(function() {
                                return self.$nanoScroll.show(0)
                            }, 150)
                        })), $(window).on("mousewheel.typeahead", self, _mousewheel), self.$elem.off(".triangle").on("click.triangle", ".triangle", self, !1)
                    },
                    onDropdownHide: function() {
                        return self.$elem.removeClass("dropdown-show"), $("body").removeClass("focus-current"), $(window).off("mousewheel.typeahead"), self.$nanoScroll.hide(0), setTimeout(function() {
                            return self.$elem.off(".triangle").on("click.triangle", ".triangle", self, _open)
                        }, 200)
                    },
                    onActive: function($li) {
                        var liOffset;
                        return $li.addClass("active"), liOffset = $li[0].offsetTop, self.$nanoContent.stop(!0, !0).animate({
                            scrollTop: liOffset - self.$input.data("dropdown-height") / 2
                        }, 200)
                    }
                }, setTimeout(function() {
                    return self.$nanoScroll = self.$elem.find(".dropdown-wrapper"), self.$nanoContent = self.$nanoScroll.children(".nano-content"), self.$nanoScroll.nanoScroller({
                        contentClass: "dropdown-menu",
                        preventPageScrolling: !0
                    })
                }, 1e3))) : this.$select.after("<div class='dropdown-icon'></div>")
            }, Dropdown.prototype.set = function(attr, value) {
                if (this[attr] = value, "isActive" !== attr && "isVisible" !== attr || (this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active")), "index" === attr && value) return this.$item.html(value)
            }, Dropdown.prototype.bindEvents = function() {
                var _this = this;
                return this.options.awesomise ? (this.$input.on("keyup.e keydown.e", this, _inputEvents), this.$elem.on("click.e", "input", this, _open).on("click.triangle", ".triangle", this, _open).on("click.e", ".cross", this, _reset).on("change.e input.e", "input", function() {
                    return _this.setValue(), typeform.Form.check()
                }), $(window).on("scrollstop.e", this, _controlHeight)) : (this.$select.on("change.e", this, _touch), Globals.isIPad ? void 0 : this.$select.on("touchstart.e blur.e", _touch))
            }, Dropdown.prototype.unbindEvents = function() {
                return this.options.awesomise ? (this.$input.blur().off(".e"), $(window).off(".e"), this.$elem.off(".triangle")) : (this.$select.off(".e"), this.$select.blur()), this.$elem.off(".e")
            }, Dropdown.prototype.preOpen = function() {
                return this.bindEvents()
            }, Dropdown.prototype.open = function() {
                var _this = this;
                if (this.done = !0, this.options.awesomise && (setDropdownHeight(this), Globals.useFocus)) return _.defer(function() {
                    return _this.$input.focus()
                })
            }, Dropdown.prototype.advanceArrow = function(direction) {}, Dropdown.prototype.advanceTab = function(direction) {
                return !0
            }, Dropdown.prototype.checkEnter = function() {
                return !1
            }, Dropdown.prototype.preSelectFirst = function() {
                return !1
            }, Dropdown.prototype.preSelectLast = function() {
                return !1
            }, Dropdown.prototype.setValue = function(callback) {
                if (this.options.awesomise ? this.value = this.$input.val() : this.value = this.$select.val(), this.pipeValue = this.value, this.isCompleted = "" !== this.value, callback) return callback()
            }, Dropdown.prototype.validate = function(callback, showError) {
                var result;
                return showError = void 0 === showError || showError, this.required && "" === this.value ? (showError && form.error.show(this.$elem, App.Texts.required), !1) : this.options.awesomise && "" !== this.value && !(this.options.openAnswer || (result = this.$input.val(), !this.data.every(function(option) {
                    return result !== option
                }))) ? (showError && form.error.show(this.$elem, App.Texts["type-select"]), !1) : (callback && callback(), !0)
            }, Dropdown.prototype.resize = function(callback, showError) {}, Dropdown.prototype.showResult = function(callback, showError) {}, Dropdown.prototype.update = function(obj) {
                var question;
                if (question = obj.question, "" === question ? this.$elem.hide() : (this.$elem.show(), this.$question.html(question)), this.options.awesomise) return this.$input.data("typeahead").source = obj.options
            }, removeAccents = function(r) {
                return r = r.replace(new RegExp("\\s", "g"), ""), r = r.replace(new RegExp("[àáâãäå]", "g"), "a"), r = r.replace(new RegExp("æ", "g"), "ae"), r = r.replace(new RegExp("ç", "g"), "c"), r = r.replace(new RegExp("[èéêë]", "g"), "e"), r = r.replace(new RegExp("[ìíîï]", "g"), "i"), r = r.replace(new RegExp("ñ", "g"), "n"), r = r.replace(new RegExp("[òóôõö]", "g"), "o"), r = r.replace(new RegExp("œ", "g"), "oe"), r = r.replace(new RegExp("[ùúûü]", "g"), "u"), r = r.replace(new RegExp("[ýÿ]", "g"), "y"), r = r.replace(new RegExp("\\W", "g"), "")
            }, setDropdownHeight = function(self) {
                var h, offset;
                return offset = 112, "field" === Globals.parent && (offset = 50), h = $(window).height() - self.$input.offset().top + window.pageYOffset - offset, self.$input.data("dropdown-height", h), h
            }, !1, _inputEvents = function(e) {
                var key, self;
                return key = document.all ? e.keyCode : e.which, self = e.data, (App.Keyboard.isArrowLeft(key) || App.Keyboard.isArrowRight(key)) && e.stopPropagation(), "keydown" === e.type ? !App.Keyboard.isEnter(key) : "keyup" === e.type ? (form.error.hide(self.$elem), !0) : void 0
            }, _open = function(e) {
                var self;
                return self = e.data, self.$input.focus().data("typeahead").lookup(), !1
            }, _reset = function(e) {
                var self;
                return self = e.data, self.$elem.removeClass("not-found"), self.$input.val("").focus(), !1
            }, _touch = function(e) {
                var self, _this = this;
                return self = e.data, "change" === e.type ? ($(this).blur(), self.setValue(), typeform.Form.check(), form.autoNext("fast")) : "touchstart" === e.type ? ($("body").addClass("dropdown-focus"), $(window).on("touchmove.w", function(e) {
                    if ("INPUT" !== e.target.nodeName && "TEXTAREA" !== e.target.nodeName) return $(_this).blur()
                })) : "blur" === e.type || "focusout" === e.type ? ($("body").removeClass("dropdown-focus"), $(window).off(".w")) : void 0
            }, _controlHeight = function(e) {
                var h, self;
                if (self = e.data, h = setDropdownHeight(self), "undefined" != typeof self.$nanoScroll) return self.$nanoScroll.css("height", h)
            }, _mousewheel = function(e, deltaY) {
                var self, sliderY;
                return self = e.data, sliderY = self.isMac ? -deltaY : 40 * -deltaY, self.$nanoScroll.children().scrollTop(self.$nanoScroll.children().scrollTop() + sliderY), !1
            }, Dropdown
        }(), $.fn.dropdown = function(options) {
            var args;
            return args = $.makeArray(arguments).slice(1), this.each(function() {
                var obj;
                return obj = $.data(this, "control"), obj ? "string" == typeof options ? obj[command].apply(obj, args) : void 0 : $.data(this, "control", new Dropdown(this, options))
            })
        }
    }(jQuery);
var Group;
Group = function() {
        function Group($elem, model, templates, currencyFormatter, priceCalculator, numberFormatter) {
            var _this = this;
            this.$elem = $elem, this.model = model, this.templates = templates, this.currencyFormatter = currencyFormatter, this.priceCalculator = priceCalculator, this.numberFormatter = numberFormatter, this.has_button = null != this.$elem.data("button"), this.subQuestions = [], this.$span = this.$elem.find(".question > span"), this.$item = this.$elem.find(".item > span"), this.$button_wrap = this.$elem.find(".button-wrap"), this.checkButton(), "" === this.$span.html() && this.$elem.hide(), this.isPaymentField() && (this.model.set("filled", !1), this.compileTemplates(), this.model.on("change:price change:currency", this.renderStripeDescription, this), this.priceCalculator.on("change:total", function() {
                return model.set({
                    price: _this.priceCalculator.get("total")
                })
            }), this.paymentBlockController = App.Utils.PaymentBlockController(), this.paymentBlockController.register(), "touch" === Globals.browser && (this.has_button = !0, this.$button_wrap.show()))
        }
        return Group.prototype.$elem = null, Group.prototype.$span = null, Group.prototype.$item = null, Group.prototype.$button_wrap = null, Group.prototype.value = "", Group.prototype.pipeValue = "", Group.prototype.isCompleted = !0, Group.prototype.required = !1, Group.prototype.done = !1, Group.prototype.confirmText = "default", Group.prototype.attachLimit = {
            "default": 140,
            large: 130,
            small: 100
        }, Group.prototype.stripeTemplates = null, Group.prototype.isPaymentField = function() {
            return null != this.model.get("price") && null != this.model.get("currency")
        }, Group.prototype.init = function() {
            if (this.isPaymentField()) return this.renderStripeDescription()
        }, Group.prototype.addSubquestion = function(child) {
            var _this = this;
            child.$elem.on("change-value", function() {
                return _this.model.set("filled", _this.isFilled())
            }), this.subQuestions.push(child)
        }, Group.prototype.getSubquestions = function() {
            return this.subQuestions
        }, Group.prototype.getActiveAndVisibleSubquestions = function() {
            return _.where(this.subQuestions, {
                isVisible: !0,
                isActive: !0
            })
        }, Group.prototype.isFilled = function() {
            var cardNumber;
            return this.isPaymentField ? !(cardNumber = _.find(this.subQuestions, function(control) {
                return "cardNumber" === control.model.get("name")
            })) || cardNumber.isFilled() : _.some(this.getValues(), function(value) {
                return null != value && "" !== value
            })
        }, Group.prototype.getPrice = function() {
            var _this = this;
            return {
                amount: this.model.get("price"),
                currency: this.model.get("symbol"),
                toString: function() {
                    return _this.model.get("symbol") + _this.model.get("price")
                }
            }
        }, Group.prototype.getCurrency = function() {
            return this.model.get("currency")
        }, Group.prototype.getValues = function() {
            var values, _this = this;
            return values = {}, _.each(this.subQuestions, function(control) {
                return _this.isPaymentField() ? "textfield" === control.type ? values[control.model.get("name")] = control.value : void 0 : values[control.model.get("name")] = _.isObject(control.value) ? control.value.choices || "" : control.value
            }), values
        }, Group.prototype.compileTemplates = function() {
            return this.stripeTemplates = {
                priceSentence: _.template(_.unescape(App.Texts.payment_description_price)),
                stripeBanner: _.template(_.unescape(App.Texts.payment_description_stripe)),
                stripeDescription: _.template(this.templates.stripeDescription)
            }
        }, Group.prototype.renderStripeDescription = function() {
            var priceSentence, stripeBanner, stripeDescription, total;
            total = this.numberFormatter.formatTo2Decimals(this.model.get("price")), priceSentence = this.stripeTemplates.priceSentence({
                price: this.currencyFormatter.format(this.model.get("currency"), total)
            }), stripeBanner = this.stripeTemplates.stripeBanner({
                logo: this.templates.stripeLogo
            }), stripeDescription = this.stripeTemplates.stripeDescription({
                price: priceSentence,
                advice: App.Texts.payment_description_advice,
                stripeBanner: stripeBanner
            }), null != this.$stripeDescription ? this.$stripeDescription.html(stripeDescription) : (this.$stripeDescription = $($.parseHTML(stripeDescription)), this.$elem.find(".control").prepend(this.$stripeDescription))
        }, Group.prototype.set = function(attr, value) {
            this[attr] = value,
                "isActive" === attr || "isVisible" === attr ? this.isVisible && this.isActive ? this.$elem.addClass("active") : this.$elem.removeClass("active") : "index" === attr && value && this.$item.html(value)
        }, Group.prototype.bindEvents = function() {
            var evt;
            evt = "touch" === Globals.browser ? "touchend" : "mouseup", this.$elem.on(evt + ".e", ".button", _.debounce(function() {
                return typeform.Form.check(), form.autoNext(), $(this).removeClass("active"), !1
            }, Globals.debounceWait, !0))
        }, Group.prototype.unbindEvents = function() {
            return this.$elem.off(".e")
        }, Group.prototype.preOpen = function() {
            return this.bindEvents()
        }, Group.prototype.open = function() {
            return this.done = !0
        }, Group.prototype.advanceArrow = function(direction) {
            return !0
        }, Group.prototype.advanceTab = function(direction) {
            return !0
        }, Group.prototype.checkEnter = function() {
            return !0
        }, Group.prototype.preSelectFirst = function() {
            return !1
        }, Group.prototype.preSelectLast = function() {
            return !1
        }, Group.prototype.setValue = function(callback) {
            callback && callback()
        }, Group.prototype.validate = function(callback) {
            return callback && callback(), !0
        }, Group.prototype.resize = function() {}, Group.prototype.checkButton = function() {
            this.has_button ? this.$button_wrap.show() : this.$button_wrap.hide()
        }, Group.prototype.update = function(obj) {
            var button_text, question;
            null != obj.price && null != obj.currency && this.model.set({
                price: obj.price,
                currency: obj.currency
            }), question = obj.question, "" === question ? this.$elem.hide() : this.$elem.show(), "undefined" != typeof obj.button && (this.has_button = !_.isNull(obj.button)), this.checkButton(), (this.has_button || "touch" === Globals.browser) && (button_text = "" === obj.button ? App.Texts["continue-button"] : obj.button, this.$button_wrap.find(".button > span").html(button_text)), this.$span.html(question), obj.placeholder && "undefined" == typeof this.$placeholder && (this.$placeholder = $("<div id='placeholder'></div>").html(obj.placeholder), this.$elem.append(this.$placeholder))
        }, Group
    }(), namespace("App.Control", function(exports) {
        return exports.Group = Group
    }),
    function() {
        var StripeElement = function(elem, options) {
            var $confirmButton, $input, $overlay, $stripeForm, $fixedFooter, $visuallyHiddenInput, stripeElement, _this = this,
                isEmpty = !0,
                isErrorVisible = !1,
                paymentBlockController = App.Utils.PaymentBlockController(),
                stripeService = options.stripeService,
                type = options.type;
            this.done = !1, this.isCompleted = !1, this.confirmText = "default", this.confirmButton = options.confirmButton, this.required = elem.hasClass("required"), this.$item = elem.find(".item > span"), this.inputUpperCentered = !1;
            var _toRGBA = function(color, opacity) {
                    return color.replace("rgb", "rgba").replace(")", "," + opacity + ")")
                },
                _fetchStylesFromForm = function() {
                    var $formInput = $(".input input"),
                        style = {
                            base: {
                                color: $formInput.css("color"),
                                fontFamily: $formInput.css("fontFamily"),
                                fontSize: $formInput.css("fontSize"),
                                fontSmoothing: "antialiased",
                                lineHeight: $formInput.css("lineHeight"),
                                "::placeholder": {
                                    color: _toRGBA($formInput.css("color"), .4)
                                }
                            },
                            invalid: {
                                color: $formInput.css("color")
                            }
                        };
                    return "touch" === Globals.browser && (style.base.fontSmoothing = "auto"), {
                        style: style,
                        formInput: $formInput
                    }
                },
                _mountStripeElement = function() {
                    return stripeService.mount[type]("stripe-" + type, _fetchStylesFromForm().style)
                },
                _updateStripeElement = function(style) {
                    stripeElement.update({
                        style: style
                    })
                },
                _showError = function(message) {
                    form.error.show(elem, message), isErrorVisible = !0
                },
                _hideError = function() {
                    form.error.hide(elem), isErrorVisible = !1
                },
                _displayHeaderAndFooter = function(display) {
                    display ? ($(".header").show(), $fixedFooter.show()) : ($(".header").hide(), $fixedFooter.hide())
                },
                _addOkButton = function() {
                    var buttonTemplate = $('<div class="button-wrapper"><div class="button nav enabled">' + App.Texts["tab-button"] + "</div></div>");
                    return $input.append(buttonTemplate), buttonTemplate
                },
                _onWindowResizeHandler = function() {
                    var newStyle = _fetchStylesFromForm().style;
                    _updateStripeElement(newStyle)
                },
                _onChangeHandler = function(event) {
                    _this.isCompleted = event.complete, isEmpty = event.empty, event.error ? _showError(App.Texts[event.error.code] || event.error.message) : (_this.checkButton(), _hideError())
                },
                _onBlurHandler = function() {
                    paymentBlockController.triggerNavigation(elem)
                },
                _onClickHandler = function(event) {
                    paymentBlockController.triggerClick(elem), event.stopPropagation()
                },
                _onSubmitHandler = function() {
                    var event = $.Event("keydown.form", {
                        keyCode: 13,
                        which: 13
                    });
                    $(document).trigger(event)
                },
                _forceBlurInput = function() {
                    stripeElement.blur(), $visuallyHiddenInput.focus(), $visuallyHiddenInput.blur()
                },
                _resetElementPosition = function() {
                    setTimeout(function() {
                        _this.$elem.css({
                            paddingTop: _this.paddingTop,
                            paddingBottom: _this.paddingBottom
                        })
                    }, 100)
                },
                _onTouchConfirmHandler = function(event) {
                    event.stopPropagation(), elem.toggleClass("filled", !_this.isEmpty()), _resetElementPosition(), _forceBlurInput(), setTimeout(function() {
                        if (_this.error) return void _showError(App.Texts[_this.error.code] || _this.error.message);
                        typeform.Form.check(), form.next()
                    }, Globals.keyboardTimeout)
                },
                _onChangeTouchHandler = function(event) {
                    _this.isCompleted = event.complete, isEmpty = event.empty, _this.error = event.error
                },
                _centerInputFocusScroller = function(pos) {
                    Globals.isAndroid && (_this.paddingTop = _this.paddingTop || _this.$elem.css("padding-top"), _this.paddingBottom = _this.paddingTop || _this.$elem.css("padding-bottom"), setTimeout(function() {
                        _this.$elem.css({
                            paddingTop: parseInt(_this.paddingTop, 10) + pos + "px",
                            paddingBottom: parseInt(_this.paddingBottom, 10) - pos + "px"
                        })
                    }, 100))
                },
                _onFocusTouchHandler = function() {
                    if (_this.bluring) return _forceBlurInput(), void _resetElementPosition();
                    _hideError(), _this.preventScroll = !0, _centerInputFocusScroller(-125), _displayHeaderAndFooter(!1)
                },
                _onBlurTouchHandler = function() {
                    _this.bluring = !0, _this.preventScroll = !1, _forceBlurInput(), _resetElementPosition(), setTimeout(function() {
                        _displayHeaderAndFooter(!0), _this.bluring = !1
                    }, Globals.keyboardTimeout)
                },
                _onBodyScrollTouchHandler = function(event) {
                    _displayHeaderAndFooter(!0), _this.preventScroll && event.preventDefault()
                };
            this.init = function() {
                if ($stripeForm = elem.find(".stripe-elements-form-wrapper"), stripeElement = _mountStripeElement(), $input = elem.find(".StripeElement"), "" === elem.find(".question > span").html() && elem.hide(), "touch" === Globals.browser) {
                    _this.okButton = _addOkButton();
                    var styles = _fetchStylesFromForm().formInput;
                    $input.css({
                        color: styles.css("borderColor")
                    })
                }
                "default" === Globals.browser && ($overlay = elem.find(".stripe-element-overlay"), $overlay.on("click", _onClickHandler)), $confirmButton = elem.find(".container.confirm"), $visuallyHiddenInput = elem.find(".visually-hidden"), $fixedFooter = $("#fixed-footer")
            }, this.set = function(attr, value) {
                this[attr] = value, "isActive" === attr || "isVisible" === attr ? this.isVisible && this.isActive ? elem.addClass("active") : elem.removeClass("active") : "index" === attr && value && _this.$item.html(value)
            }, this.setValue = function(callback) {
                callback && callback()
            }, this.bindEvents = function() {
                "default" === Globals.browser && (stripeElement.on("blur", _onBlurHandler), stripeElement.on("change", _onChangeHandler), $stripeForm.on("submit", _onSubmitHandler), $overlay.hide()), "touch" === Globals.browser && ($fixedFooter.show(), stripeElement.on("blur", _onBlurTouchHandler), stripeElement.on("change", _onChangeTouchHandler), stripeElement.on("focus", _onFocusTouchHandler), _this.okButton.on("touchstart", _onTouchConfirmHandler), $("body").on("scroll", _onBodyScrollTouchHandler)), $(window).on("resize", _onWindowResizeHandler)
            }, this.unbindEvents = function() {
                stripeElement.blur(), "default" === Globals.browser && (stripeElement.off("blur", _onBlurHandler), stripeElement.off("change", _onChangeHandler), $stripeForm.off("submit", _onSubmitHandler), $overlay.show()), "touch" === Globals.browser && (stripeElement.off("blur", _onBlurTouchHandler), stripeElement.off("change", _onChangeTouchHandler), stripeElement.off("focus", _onFocusTouchHandler), _this.okButton.off("touchstart", _onTouchConfirmHandler)), $(window).off("resize", _onWindowResizeHandler)
            }, this.preOpen = function() {
                this.bindEvents()
            }, this.open = function() {
                _this.done = !0, Globals.useFocus && (_.defer(function() {
                    elem.addClass("ready"), "default" === Globals.browser && stripeElement.focus()
                }), _this.checkButton())
            }, this.advanceArrow = function(direction) {
                return App.Utils.isCaretAtStart($input) && direction === App.Keyboard.UP || App.Utils.isCaretAtEnd($input) && direction === App.Keyboard.DOWN
            }, this.advanceTab = function() {
                return !0
            }, this.checkEnter = function() {
                return !0
            }, this.preSelectFirst = function() {
                return !1
            }, this.preSelectLast = function() {
                return !1
            }, this.validate = function(callback, showError) {
                return showError = void 0 === showError || showError, _this.required && _this.isEmpty() ? (showError ? _showError(App.Texts.required) : _hideError(), Globals.useFocus && "default" === Globals.browser && stripeElement.focus(), !1) : _this.isEmpty() || _this.isFilled() ? (callback && callback(), !0) : (isErrorVisible || (showError ? _showError(App.Texts.required) : _hideError()), !1)
            }, this.showResult = function() {}, this.resize = function() {}, this.update = function() {}, this.startLoading = function() {}, this.stopLoading = function() {}, this.checkButton = function() {
                "default" === Globals.browser && _this.confirmButton.check(_this.isFilled(), $confirmButton, $input)
            }, this.isFilled = function() {
                return _this.isCompleted
            }, this.isEmpty = function() {
                return isEmpty
            }, this.isFocused = function() {
                return !!$input.hasClass("focused")
            }
        };
        $.fn.stripeElement = function(options) {
            var element = $(this);
            if (!element.data("control")) {
                var stripeElement = new StripeElement(element, options);
                element.data("control", stripeElement)
            }
        }
    }();
var ButtonModel, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
ButtonModel = function(_super) {
    function ButtonModel() {
        return _ref = ButtonModel.__super__.constructor.apply(this, arguments)
    }
    return __extends(ButtonModel, _super), ButtonModel.prototype.defaults = {
        label: "",
        extra: "",
        type: "",
        enabled: !0,
        sending: !1
    }, ButtonModel
}(Backbone.Model), namespace("App.components", function(exports) {
    return exports.ButtonModel = ButtonModel
});
var ButtonView, _ref, __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent) __hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype, child.prototype = new ctor, child.__super__ = parent.prototype, child
    };
ButtonView = function(_super) {
    function ButtonView() {
        return _ref = ButtonView.__super__.constructor.apply(this, arguments)
    }
    return __extends(ButtonView, _super), ButtonView.prototype.model = null, ButtonView.prototype.className = "button", ButtonView.prototype.tagName = "div", ButtonView.prototype.events = {
        click: "onClick",
        touchend: "onTouchend"
    }, ButtonView.prototype.defaults = {
        translations: {
            and: "and"
        }
    }, ButtonView.prototype.initialize = function(options) {
        return this.options = _.extend({}, this.defaults, options), this.listenTo(this.model, "change:label change:extra", this.renderText, this), this.listenTo(this.model, "change:sending", this.renderSending, this), this.listenTo(this.model, "change:type", this.setTypeClass, this), this.listenTo(this.model, "change:enabled", this.setEnabledClass, this), this
    }, ButtonView.prototype.render = function() {
        return this.renderText(), this.setTypeClass(), this.setEnabledClass(), this
    }, ButtonView.prototype.renderText = function() {
        this.$el.html(this.getFullText())
    }, ButtonView.prototype.renderSending = function() {
        this.model.get("sending") ? (this.$el.width(this.$el.width()), this.$el.html("...")) : (this.$el.width("auto"), this.renderText())
    }, ButtonView.prototype.getFullText = function() {
        var text;
        return text = this.model.get("label"), _.isEmpty(this.model.get("extra")) || (_.isEmpty(text) || (text += this.options.translations.and), text += this.model.get("extra")), text
    }, ButtonView.prototype.setTypeClass = function() {
        this.$el.removeClass(this.model.previous("type")), this.$el.addClass(this.model.get("type"))
    }, ButtonView.prototype.setEnabledClass = function() {
        this.model.get("enabled") ? this.$el.addClass("enabled") : this.$el.removeClass("enabled")
    }, ButtonView.prototype.onClick = function(e) {
        this.trigger("click")
    }, ButtonView.prototype.onTouchend = function(e) {
        this.trigger("touchend")
    }, ButtonView.prototype.show = function() {
        return this.$el.show(), this
    }, ButtonView.prototype.hide = function() {
        return this.$el.hide(), this
    }, ButtonView
}(Backbone.View), namespace("App.components", function(exports) {
    return exports.ButtonView = ButtonView
});
var AppFactory, UrlModelFactory, isBuildPreview, isDesignPreview, __bind = function(fn, me) {
    return function() {
        return fn.apply(me, arguments)
    }
};
UrlModelFactory = App.UrlModelFactory, AppFactory = function() {
        function AppFactory($typeform) {
            var _ref;
            this.$typeform = $typeform, this.prefillAnswers = __bind(this.prefillAnswers, this), this.buildScreen = __bind(this.buildScreen, this), window.Globals = {
                accountId: settings.accountId,
                browser: settings.browser,
                pageTransitionDelay: 300,
                keyboardTimeout: 500,
                debounceWait: 200,
                useKeyboardEvents: "default" === settings.browser,
                useKeyboardScroll: !1,
                useFocus: "default" === settings.browser && "field" !== settings.parent,
                isTouch: "default" !== settings.browser,
                responsiveThreshold: "default" === settings.browser ? 0 : 600,
                isMobile: "touch" === settings.browser && $(window).width() < 600,
                uniquePath: settings.uniquePath,
                uid: settings.uid,
                userId: settings.userId,
                accountPlan: settings.accountPlan,
                token: settings.token,
                language: settings.language,
                hiddenFieldsEnabled: settings.hiddenFieldsEnabled,
                signupPath: settings.signupPath,
                parent: settings.parent,
                lessPath: settings.lessPath,
                showLogo: settings.showLogo,
                isEmbed: !1,
                embedOptions: {},
                prefilledAnswer: null,
                isIe9: !1,
                isIOs: !1,
                isAndroid: !1,
                isChrome: !1,
                isFirefox: !1,
                hasBackground: null != (null != (_ref = serializedForm.design) ? _ref.background : void 0),
                isIPad: !1,
                vendor: /webkit/i.test(navigator.appVersion) ? "-webkit-" : /firefox/i.test(navigator.userAgent) ? "-moz-" : "opera" in window ? "-O-" : ""
            }, this.detectBrowser(), this.setupEmbed(), this.prefillAnswers()
        }
        return AppFactory.prototype.$typeform = null, AppFactory.prototype.observer = null, AppFactory.prototype.browser = null, AppFactory.prototype.build = function() {
            var controlsFactory, currencyFormatter, featureService, hiddenFields, hiddenKeys, logicJumpsController, numberFormatter, outrosCollection, paymentField, priceCalculator, resizeWindow, scoreCalculator, stripeService, submissionRepository, submitButton, texts, typeform, updateSubmitButtonText, _ref, _ref1, _this = this;
            return this.observer = _.extend({}, Backbone.Events), this.browser = settings.browser, texts = {}, $("#texts").children().each(function() {
                return texts[$(this).attr("id")] = $(this).html()
            }).end().remove(), window.App.Texts = texts, submitButton = new App.components.ButtonView({
                translations: {
                    and: texts.and
                },
                model: new App.components.ButtonModel({
                    type: "general hover-effect",
                    label: texts["submit-button"],
                    enabled: !0
                })
            }), currencyFormatter = new App.CurrencyFormatter, numberFormatter = App.NumberFormatter, outrosCollection = this.buildOutrosCollection(), hiddenKeys = {}, settings.hiddenFieldsEnabled && (hiddenKeys = settings.hiddenFields), settings.redirectAfterSubmitEnabled && (settings.redirectUrlModel = UrlModelFactory(settings.redirectAfterSubmitUrl)), hiddenFields = new App.Service.HiddenFields(hiddenKeys, window.location.search), _ref = App.Service.Calculator.CalculatorFactory.build(serializedForm), scoreCalculator = _ref.scoreCalculator, priceCalculator = _ref.priceCalculator, logicJumpsController = App.Service.LogicJumps.LogicJumpsControllerFactory.build(jumps, scoreCalculator, priceCalculator, outrosCollection, hiddenFields), stripeService = App.Utils.StripeServiceFactory.getStripeService(settings.stripePublishableKey), controlsFactory = new App.ControlsFactory(serializedForm.fields, this.browser, currencyFormatter, priceCalculator, new App.Utils.FeatureDetector(Modernizr, window, this.browser, App.Utils.BrowserDetector), settings, numberFormatter, stripeService), featureService = App.Service.FeatureService(window.location.href, settings), submissionRepository = new App.SubmissionRepository(window.settings.paths, window.settings.collect, featureService, window.App.IocContainer.performanceLogger), submissionRepository.getToken(), typeform = new App.Typeform(this.$typeform, logicJumpsController, scoreCalculator, priceCalculator, submitButton, settings, currencyFormatter, numberFormatter, controlsFactory, this.observer, outrosCollection, hiddenFields, window.App.IocContainer.performanceLogger, submissionRepository, featureService), paymentField = null != (_ref1 = typeform.Form) ? _ref1.getPaymentField() : void 0, updateSubmitButtonText = function() {
                var currency, formatedPrice, total;
                if (null != paymentField) return currency = paymentField.getCurrency(), total = numberFormatter.formatTo2Decimals(priceCalculator.get("total")), formatedPrice = currencyFormatter.format(currency, total), paymentField.isFilled() ? submitButton.model.set("extra", texts.pay.replace("{{amount}}", formatedPrice)) : submitButton.model.set("extra", "")
            }, updateSubmitButtonText(), priceCalculator.on("change:total", updateSubmitButtonText), null != paymentField && (paymentField.model.on("change:filled", updateSubmitButtonText), paymentField.required && "fallback" === this.browser && (submitButton.$el.off("click"), submitButton.$el.removeClass("enabled").addClass("disabled"))), "field" === settings.parent && (superframe.initUpdateEvent && superframe.initUpdateEvent(function(evt, obj) {
                return _this.$typeform.trigger("updateControl", [obj])
            }), resizeWindow = function() {
                return $("#preview").css("height", superframe.innerHeight)
            }, $(window).bind("resize", resizeWindow), resizeWindow()), typeform
        }, AppFactory.prototype.buildOutrosCollection = function() {
            var outros, _this = this;
            return outros = [], this.$typeform.find(".outro").each(function(index, outro) {
                return outros.push(_this.buildScreen(outro))
            }), new App.components.ScreenCollection(outros)
        }, AppFactory.prototype.buildScreen = function(screen) {
            var $screen, options;
            return $screen = $(screen), options = {
                browser: this.browser,
                url: $screen.find("#redirect-button-url").val()
            }, "fallback" === this.browser ? new App.FallbackScreen($screen, options) : new App.Screen($screen, this.observer, options)
        }, AppFactory.prototype.prefillAnswers = function() {
            var prefilledAnswer, urlUtils, _this = this;
            urlUtils = App.Utils.url(), "" !== (prefilledAnswer = urlUtils.getParameterByName("prefilled_answer", urlUtils.getCurrentUrlSearch())) && (Globals.prefilledAnswer = prefilledAnswer, $(window).ready(function() {
                return $("body").one("form-ready", function() {
                    return setTimeout(_this.prefillFirstOpinionScale.bind(_this, prefilledAnswer), 500)
                })
            }))
        }, AppFactory.prototype.prefillFirstOpinionScale = function(answer) {
            var firstQuestion;
            return firstQuestion = $(".questions").children().first(), $(firstQuestion).find(".component-choices .choice").each(function(index, el) {
                var lbl;
                if (lbl = $(el).find(".label"), lbl.text() === answer) return Globals.isTouch ? $(el).trigger("touchend") : $(el).trigger("click")
            })
        }, AppFactory.prototype.setupEmbed = function() {
            var $body;
            if (App.Utils.url().isEmbeddedInIframe()) return Globals.isEmbed = !0, Globals.embedOptions = this.getEmbedOptions(), $body = $("body"), Globals.embedOptions.backgroundOpacity < 100 && ($body.addClass("transparent-background"), $("#background").css("opacity", Globals.embedOptions.backgroundOpacity / 100)), Globals.embedOptions.hideHeaders && $body.addClass("hide-headers"), Globals.embedOptions.hideFooter && $body.addClass("hide-footer"), Globals.embedOptions.fadeBottom ? Globals.embedOptions.backgroundOpacity < 100 || Globals.hasBackground ? $("#typeform").find(".form").addClass("fade-questions") : $("#typeform").find(".form").append('<div class="faded-mask-bottom"/>') : void 0
        }, AppFactory.prototype.getEmbedOptions = function() {
            var options, urlUtils;
            return options = {}, urlUtils = App.Utils.url(), options.backgroundOpacity = parseInt(urlUtils.getParameterByName("embed-opacity", urlUtils.getCurrentUrlSearch())), options.hideHeaders = "true" === urlUtils.getParameterByName("embed-hide-headers", urlUtils.getCurrentUrlSearch()), options.hideFooter = "true" === urlUtils.getParameterByName("embed-hide-footer", urlUtils.getCurrentUrlSearch()), options.fadeBottom = "true" === urlUtils.getParameterByName("embed-fade-bottom", urlUtils.getCurrentUrlSearch()), options.embedIsWidget = "embed-widget" === urlUtils.getEmbedType(), options
        }, AppFactory.prototype.detectBrowser = function() {
            if (navigator.userAgent.match(/msie/i) ? navigator.userAgent.match(/9/) && (Globals.isIe9 = !0, $("body").addClass("ie9")) : -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") ? $("body").addClass("safari") : navigator.userAgent.match(/firefox/i) && $("body").addClass("mozilla"), /(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
                if (Globals.isIOs = !0, $("body").addClass("ios"), /CriOS/i.test(navigator.userAgent) && (Globals.isChrome = !0), /(iPad)/i.test(navigator.userAgent) && (Globals.isIPad = !0), /(iPhone|iPod)/i.test(navigator.userAgent)) return $("body").addClass("iphone")
            } else if (/(Android)/i.test(navigator.userAgent) && (Globals.isAndroid = !0, $("body").addClass("android"), /Chrome/i.test(navigator.userAgent) && (Globals.isChrome = !0, $("body").addClass("chrome")), /Firefox/i.test(navigator.userAgent))) return Globals.isFirefox = !0
        }, AppFactory
    }(), $(function() {
        var appFactory;
        return appFactory = new AppFactory($("#typeform")), window.typeform = appFactory.build()
    }), isDesignPreview = function(parentPage) {
        return "design" === parentPage
    }, isBuildPreview = function(parentPage) {
        return "field" === parentPage
    }, namespace("App.IocContainer", function(exports) {
        var cookiesAdapter, isEnabled;
        return isEnabled = null != window.settings && !isDesignPreview(window.settings.parent) && !isBuildPreview(window.settings.parent), cookiesAdapter = new App.Utils.CookiesAdapter(window.Cookies), exports.performanceLogger = new App.Logger.PerformanceLogger(window.newrelic, cookiesAdapter, isEnabled), exports.performanceLogger.applyLoadedAttributes(window.settings, serializedForm, navigator)
    }),
    function() {
        var UserAnalytics = {};
        UserAnalytics.sendSubmitEvent = function() {
            this.sendEvent("TypeformSubmit", document.title)
        }, UserAnalytics.sendQuestionPassedEvent = function(fieldName) {
            this.sendEvent("TypeformQuestionPassed", fieldName)
        }, UserAnalytics.sendEvent = function(eventLabel, eventArg) {
            var formUID = Globals.uid;
            formHasGA && ga("send", "event", formUID, eventLabel, eventArg)
        }, namespace("App.Utils", function(exports) {
            exports.UserAnalytics = UserAnalytics
        })
    }(),
    function() {
        var Tracking = function() {
            var isStartConversationSent = !1,
                cookieUserId = null,
                events = {
                    START_CONVERSATION: "start_conversation",
                    PRESENT_CONVERSATION: "present_conversation"
                },
                getAccountId = function() {
                    return settings.accountId
                },
                getFormId = function() {
                    return settings.formId
                },
                getFormUid = function() {
                    return settings.uid
                },
                getWorkspaceOwnerId = function() {
                    return settings.accountId
                },
                getUserId = function() {
                    return settings.userId
                },
                getUserCookie = function() {
                    return Cookies.get("ajs_user_id") || null
                },
                init = function() {
                    //trackingClient.initRenderer(settings.appBehaviourKey)
					return  null;
                },
                hasConversationStarted = function() {
                    return isStartConversationSent
                },
                isFirstConversation = function(uid) {
                    var key = "visited-" + uid,
                        isFirst = !0;
                    try {
                        isFirst = null == localStorage.getItem(key)
                    } catch (_) {
                        console.warn("It looks like you have localStorage disabled")
                    }
                    return isFirst
                },
                markVisitedForm = function(uid) {
                    var key = "visited-" + uid;
                    try {
                        localStorage.setItem(key, !0)
                    } catch (_) {}
                },
                resetUser = function() {
                    analytics.reset(), null !== cookieUserId && "null" !== cookieUserId && trackingClient.identify(parseInt(cookieUserId, 10), null, {
                        integrations: {
                            Intercom: !1,
                            GoogleAnalytics: !1
                        }
                    })
                },
                startConversation = function() {
                    var eventData = {
                        event: events.START_CONVERSATION,
                        respondent_method: "web_renderer",
                        is_first_conversation: isFirstConversation(getFormUid()),
                        natero_feature_name: "start_conversation",
                        embedding_mode: null,
                        distribution_channel: null
                    };
                    Globals.isEmbed && (eventData.embedding_mode = App.Utils.url().getEmbedTypeStandardNaming(), eventData.headers_displayed = !Globals.embedOptions.hideHeaders, eventData.footers_displayed = !Globals.embedOptions.hideFooter, eventData.transparency = 100 - (Globals.embedOptions.backgroundOpacity || 100), eventData.width = window.innerWidth, eventData.height = window.innerHeight), Globals.prefilledAnswer && (eventData.distribution_channel = "email"), trackAsCreator(eventData), isStartConversationSent = !0, markVisitedForm(getFormUid())
                },
                presentConversation = function() {
                    if (!Globals.prefilledAnswer) {
                        trackAsCreator({
                            event: events.PRESENT_CONVERSATION,
                            distribution_channel: "standard"
                        })
                    }
                },
                trackAsCreator = function(eventData) {
                    if (cookieUserId = getUserCookie(), getUserId() === cookieUserId) return void(isStartConversationSent = !0);
                    eventData.account_id = getAccountId(), eventData.userId = getUserId(), eventData.ws_owner_account_id = getWorkspaceOwnerId(), eventData.form_id = getFormId(), eventData.form_uid = getFormUid() 
					/*trackingClient.identify(parseInt(getUserId(), 10), null, {
                        integrations: {
                            Intercom: !1,
                            GoogleAnalytics: !1
                        }
                    })*/
					, setTimeout(function() {
                        //trackingClient.sendEvent(eventData.event, eventData), 
						clearTimeout(this.resetUserTimeout), this.resetUserTimeout = setTimeout(resetUser, 1e3)
                    }, 1e3)
                };
            return {
                hasConversationStarted: hasConversationStarted,
                init: init,
                startConversation: startConversation,
                presentConversation: presentConversation
            }
        };
        namespace("App", function(exports) {
            var tracking = new Tracking;
            return tracking.init(), exports.Tracking = tracking
        })
    }();