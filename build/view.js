/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../bpl-tools/Advanced/generateCSS.js":
/*!********************************************!*\
  !*** ../bpl-tools/Advanced/generateCSS.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationFn: () => (/* binding */ animationFn),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateCSS: () => (/* binding */ generateCSS)
/* harmony export */ });
/* harmony import */ var _utils_getCSS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getCSS */ "../bpl-tools/utils/getCSS.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/data */ "../bpl-tools/utils/data.js");


const dimensionCSS = dimension => {
  const {
    padding,
    margin
  } = dimension || {};
  const pCSS = p => (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.isValidCSS)('padding', (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.getBoxCSS)(p));
  const mCSS = m => (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.isValidCSS)('margin', (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.getBoxCSS)(m));
  return {
    desktop: pCSS(padding?.desktop) + mCSS(margin?.desktop),
    tablet: pCSS(padding?.tablet) + mCSS(margin?.tablet),
    mobile: pCSS(padding?.mobile) + mCSS(margin?.mobile)
  };
};
const borderShadowCSS = borderShadow => {
  const {
    normal,
    hover
  } = borderShadow || {};
  const stateGenerate = state => {
    const {
      border,
      radius,
      shadow
    } = state || {};
    const radiusCSS = radius ? (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.isValidCSS)('border-radius', (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.getBoxCSS)(radius)) : '';
    const shadowCSS = shadow ? `box-shadow: ${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.getMultiShadowCSS)(shadow)};` : '';
    return (0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.getBorderBoxCSS)(border) + radiusCSS + shadowCSS;
  };
  return {
    normal: stateGenerate(normal),
    hover: stateGenerate(hover)
  };
};
const visibilityCSS = visibility => {
  const {
    zIndex,
    overflow
  } = visibility || {};
  const overflowCSS = overflow ? `overflow: ${overflow};` : '';
  const zIndexCSS = device => zIndex?.[device] ? `z-index: ${zIndex[device]};` : '';
  return {
    desktop: zIndexCSS('desktop') + overflowCSS,
    tablet: zIndexCSS('tablet'),
    mobile: zIndexCSS('mobile')
  };
};
const responsiveCSS = (responsive, isBackend) => {
  const {
    desktop = false,
    tablet = false,
    mobile = false
  } = responsive || {};
  const css = isBackend ? 'opacity: 0.5;' : 'display: none;';
  const resCSS = val => val ? css : '';
  return {
    desktop: resCSS(desktop),
    tablet: resCSS(tablet),
    mobile: resCSS(mobile)
  };
};
const transitionCSS = (background, borderShadow) => {
  const {
    transition: bgT = 0.4
  } = background || {};
  const {
    transition: bsT = 0.4
  } = borderShadow || {};
  return `transition: background ${bgT}s, border ${bsT}s, border-radius ${bsT}s, box-shadow ${bsT}s;`;
};
const animationFn = (animation, id) => {
  const element = document.getElementById(id);
  if (element && animation && animation?.type) {
    element.setAttribute('data-aos', animation.type);
    element.setAttribute('data-aos-duration', animation.duration || 0.4);
    element.setAttribute('data-aos-delay', animation.delay || 0);
  }
};
const generateCSS = (id, advanced, isBackend = false) => {
  const {
    dimension,
    background,
    borderShadow,
    animation,
    visibility,
    responsive,
    css = ''
  } = advanced || {};
  const selector = `#${id} > div`;
  !isBackend && animationFn(animation, id);
  const dCSS = dimensionCSS(dimension).desktop + visibilityCSS(visibility).desktop + transitionCSS(background, borderShadow);
  const tCSS = dimensionCSS(dimension).tablet + visibilityCSS(visibility).tablet + responsiveCSS(responsive, isBackend).tablet;
  const mCSS = dimensionCSS(dimension).mobile + visibilityCSS(visibility).mobile + responsiveCSS(responsive, isBackend).mobile;
  const nCSS = borderShadowCSS(borderShadow).normal;
  const hCSS = borderShadowCSS(borderShadow).hover;
  const resCSS = responsiveCSS(responsive, isBackend).desktop;
  return `
		${dCSS || nCSS ? `${selector} {
			${dCSS}
			${nCSS}
		}` : ''}
		${hCSS ? `${selector}:hover {
			${hCSS}
		}` : ''}

		${resCSS ? `${_utils_data__WEBPACK_IMPORTED_MODULE_1__.deskBreakpoint} {
			${selector}{
				${resCSS}
			}
		}` : ''}

		${tCSS ? `${_utils_data__WEBPACK_IMPORTED_MODULE_1__.tabBreakpoint} {
			${selector}{
				${tCSS}
			}
		}` : ''}

		${mCSS ? `${_utils_data__WEBPACK_IMPORTED_MODULE_1__.mobileBreakpoint} {
			${selector}{
				${mCSS}
			}
		}` : ''}

		${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.getAdvBGCSS)(background?.normal, selector)}
		${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.getAdvBGCSS)(background?.hover, selector, true)}
		${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.getOverlayCSS)(background?.overlay, selector)}
		${(0,_utils_getCSS__WEBPACK_IMPORTED_MODULE_0__.getOverlayCSS)(background?.hoverOverlay, selector, true)}

		${css}
	`.replace(/\s+/g, ' ');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateCSS);

/***/ }),

/***/ "../bpl-tools/utils/data.js":
/*!**********************************!*\
  !*** ../bpl-tools/utils/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deskBreakpoint: () => (/* binding */ deskBreakpoint),
/* harmony export */   mobileBreakpoint: () => (/* binding */ mobileBreakpoint),
/* harmony export */   tabBreakpoint: () => (/* binding */ tabBreakpoint)
/* harmony export */ });
const deskBreakpoint = '@media only screen and (min-width: 1025px)';
const tabBreakpoint = '@media only screen and (min-width: 641px) and (max-width: 1024px)';
const mobileBreakpoint = '@media only screen and (max-width: 640px)';

/***/ }),

/***/ "../bpl-tools/utils/functions.js":
/*!***************************************!*\
  !*** ../bpl-tools/utils/functions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   getBoxValue: () => (/* binding */ getBoxValue),
/* harmony export */   getImageSizes: () => (/* binding */ getImageSizes),
/* harmony export */   isExist: () => (/* binding */ isExist),
/* harmony export */   tabController: () => (/* binding */ tabController),
/* harmony export */   updateData: () => (/* binding */ updateData)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "../bpl-tools/node_modules/immer/dist/immer.mjs");

const getBoxValue = object => Object.values(object).join(" ");
const getImageSizes = (image, imageSizes) => {
  if (!image) return [];
  let options = [];
  const sizes = image.media_details.sizes;
  for (const key in sizes) {
    const imageSize = imageSizes.find(s => s.slug === key);
    if (imageSize) {
      options.push({
        label: imageSize.name,
        value: sizes[key].source_url
      });
    }
  }
  return options;
};
const tabController = () => {
  setTimeout(() => {
    const panelBodies = document.querySelectorAll(".bPlPanelBody:not(.itemPanelBody) > h2 > button");
    panelBodies.forEach(item => {
      item.addEventListener("click", clickEveryItem);
    });
    function clickEveryItem() {
      this.removeEventListener("click", clickEveryItem);
      panelBodies.forEach(item => {
        if (item.getAttribute("aria-expanded") === "true" && !item.isEqualNode(this)) {
          item.click();
        }
      });
      setTimeout(() => {
        this.addEventListener("click", clickEveryItem);
      }, 500);
    }
  }, 500);
};
const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(attr, draft => {
      if (Array.isArray(draft[currentProp]) && (draft === null || draft === undefined)) {
        draft = {};
      }
      draft[currentProp] = value;
    });
  }
  return (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(attr, draft => {
    if (draft === null || draft === undefined) {
      draft = {};
    }
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
const isExist = value => {
  if (value === undefined || value === null || value === "") {
    return false;
  }
  if (Array.isArray(value) && value.length === 0) {
    return false;
  }
  if (typeof value === "object" && Object.keys(value).length === 0) {
    return false;
  }
  if (typeof value === "string" && value.trim() === "") {
    return false;
  }
  if (typeof value === "number" && value === 0) {
    return false;
  }
  return true;
};

/***/ }),

/***/ "../bpl-tools/utils/getCSS.js":
/*!************************************!*\
  !*** ../bpl-tools/utils/getCSS.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdvBGCSS: () => (/* binding */ getAdvBGCSS),
/* harmony export */   getBackgroundCSS: () => (/* binding */ getBackgroundCSS),
/* harmony export */   getBorderBoxCSS: () => (/* binding */ getBorderBoxCSS),
/* harmony export */   getBorderCSS: () => (/* binding */ getBorderCSS),
/* harmony export */   getBoxCSS: () => (/* binding */ getBoxCSS),
/* harmony export */   getColorsCSS: () => (/* binding */ getColorsCSS),
/* harmony export */   getGradientCSS: () => (/* binding */ getGradientCSS),
/* harmony export */   getIconCSS: () => (/* binding */ getIconCSS),
/* harmony export */   getMultiShadowCSS: () => (/* binding */ getMultiShadowCSS),
/* harmony export */   getOverlayCSS: () => (/* binding */ getOverlayCSS),
/* harmony export */   getSeparatorCSS: () => (/* binding */ getSeparatorCSS),
/* harmony export */   getShadowCSS: () => (/* binding */ getShadowCSS),
/* harmony export */   getSpaceCSS: () => (/* binding */ getSpaceCSS),
/* harmony export */   getTypoCSS: () => (/* binding */ getTypoCSS),
/* harmony export */   isValidCSS: () => (/* binding */ isValidCSS)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "../bpl-tools/utils/data.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "../bpl-tools/utils/functions.js");


const isValidCSS = (p, v) => (0,_functions__WEBPACK_IMPORTED_MODULE_1__.isExist)(v) ? `${p}: ${v};` : '';
const getBackgroundCSS = (bg, isSolid = true, isGradient = true, isImage = true) => {
  const {
    type = 'solid',
    color = '',
    gradient = '',
    image = {},
    position = '',
    attachment = '',
    repeat = '',
    size = '',
    overlayColor = ''
  } = bg || {};
  const styles = 'gradient' === type && isGradient ? isValidCSS('background', gradient) : 'image' === type && isImage ? `background: url(${image?.url});
				${isValidCSS('background-color', overlayColor)}
				${isValidCSS('background-position', position)}
				${isValidCSS('background-size', size)}
				${isValidCSS('background-repeat', repeat)}
				${isValidCSS('background-attachment', attachment)}
				${isValidCSS('background-repeat', repeat)}
				background-blend-mode: overlay;` : isSolid && isValidCSS('background', color);
  return styles;
}; // PHP version in Stepped Content

const getBorderCSS = border => {
  const {
    width = '0px',
    style = 'solid',
    color = '',
    side = 'all',
    radius = '0px'
  } = border || {};
  const borderSideCheck = s => {
    const bSide = side?.toLowerCase();
    return bSide?.includes('all') || bSide?.includes(s);
  };
  const noWidth = width === '0px' || !width;
  const borderCSS = `${width} ${style} ${color}`;
  const styles = `
		${noWidth ? '' : ['top', 'right', 'bottom', 'left'].map(side => borderSideCheck(side) ? `border-${side}: ${borderCSS};` : '').join('')}
		${!radius ? '' : `border-radius: ${radius};`}
	`;
  return styles;
};
const getBorderBoxCSS = border => {
  if (!border) return '';
  const generateBorderCSS = borderObj => {
    const {
      color = '#000000',
      style = 'solid',
      width = '0px'
    } = borderObj;
    return `${width} ${style} ${color}`;
  };
  if ('object' === typeof border && !Array.isArray(border)) {
    if (border.hasOwnProperty('top') || border.hasOwnProperty('right') || border.hasOwnProperty('bottom') || border.hasOwnProperty('left')) {
      const sides = ['top', 'right', 'bottom', 'left'];
      return sides.map(side => border[side] ? `border-${side}: ${generateBorderCSS(border[side])};` : '').join(' ').trim();
    } else {
      return isValidCSS('border', generateBorderCSS(border));
    }
  }
  return '';
};
const getColorsCSS = colors => {
  const {
    color = '#333',
    bgType = 'solid',
    bg = '',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = colors || {};
  const styles = `
		${color ? `color: ${color};` : ''}
		${gradient || bg ? isValidCSS('background', 'gradient' === bgType ? gradient : bg) : ''}
	`;
  return styles;
};
const getIconCSS = (icon, isSize = true, isColor = true) => {
  const {
    fontSize = 16,
    colorType = 'solid',
    color = 'inherit',
    gradient = 'linear-gradient(135deg, #4527a4, #8344c5)'
  } = icon || {};
  const colorCSS = 'gradient' === colorType ? `color: transparent; background-image: ${gradient}; -webkit-background-clip: text; background-clip: text;` : isValidCSS('color', color);
  const styles = `
		${!fontSize || !isSize ? '' : isValidCSS('font-size', fontSize ? `${fontSize}px` : '')}
		${isColor ? colorCSS : ''}
	`;
  return styles;
};
const getMultiShadowCSS = (value, type = 'box') => {
  let styles = '';
  value?.map((item, index) => {
    const {
      hOffset = '0px',
      vOffset = '0px',
      blur = '0px',
      spreed = '0px',
      color = '#7090b0',
      isInset = false
    } = item || {};
    const inset = isInset ? 'inset' : '';
    const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
    const isComa = index + 1 >= value.length ? '' : ', ';
    styles += 'text' === type ? `${offsetBlur} ${color}${isComa}` : `${offsetBlur} ${spreed} ${color} ${inset}${isComa}`;
  });
  return styles || 'none';
};
const getSeparatorCSS = separator => {
  const {
    width = '50%',
    height = '2px',
    style = 'solid',
    color = '#bbb'
  } = separator || {};
  const styles = `
		width: ${width};
		${'0px' === height && '0em' === height && '0rem' === height ? '' : `border-top: ${height} ${style} ${color};`}
	`;
  return styles;
};
const getShadowCSS = (shadow, type = 'box') => {
  const {
    hOffset = '0px',
    vOffset = '0px',
    blur = '0px',
    spreed = '0px',
    color = '#7090b0',
    isInset = false
  } = shadow || {};
  const inset = isInset ? 'inset' : '';
  const offsetBlur = `${hOffset} ${vOffset} ${blur}`;
  const styles = 'text' === type ? `${offsetBlur} ${color}` : `${offsetBlur} ${spreed} ${color} ${inset}`;
  return styles || 'none';
};
const getSpaceCSS = space => {
  const {
    side = 2,
    vertical = '0px',
    horizontal = '0px',
    top = '0px',
    right = '0px',
    bottom = '0px',
    left = '0px'
  } = space || {};
  const styles = 2 === side ? `${vertical} ${horizontal}` : `${top} ${right} ${bottom} ${left}`;
  return styles;
};
const getTypoCSS = (selector, typo, isFamily = true) => {
  const {
    fontFamily = 'Default',
    fontCategory = 'sans-serif',
    fontVariant = 400,
    fontWeight = 400,
    isUploadFont = true,
    fontSize = {
      desktop: 15,
      tablet: 15,
      mobile: 15
    },
    fontStyle = 'normal',
    textTransform = 'none',
    textDecoration = 'auto',
    lineHeight = '135%',
    letterSpace = '0px'
  } = typo || {};
  const isEmptyFamily = !isFamily || !fontFamily || 'Default' === fontFamily;
  const desktopFontSize = fontSize?.desktop || fontSize;
  const tabletFontSize = fontSize?.tablet || desktopFontSize;
  const mobileFontSize = fontSize?.mobile || tabletFontSize;
  const styles = `
		${isEmptyFamily ? '' : `font-family: '${fontFamily}', ${fontCategory};`}
		${isValidCSS('font-weight', fontWeight)}
		${isValidCSS('font-size', desktopFontSize ? `${desktopFontSize}px` : '')}
		${isValidCSS('font-style', fontStyle)}
		${isValidCSS('text-transform', textTransform)}
		${isValidCSS('text-decoration', textDecoration)}
		${isValidCSS('line-height', lineHeight)}
		${isValidCSS('letter-spacing', letterSpace)}
	`;

  // Google font link
  const linkQuery = !fontVariant || 400 === fontVariant ? '' : '400i' === fontVariant ? ':ital@1' : fontVariant?.includes('00i') ? `: ital, wght@1, ${fontVariant?.replace('00i', '00')} ` : `: wght@${fontVariant} `;
  const link = isEmptyFamily ? '' : `https://fonts.googleapis.com/css2?family=${fontFamily?.split(' ').join('+')}${linkQuery.replace(/ /g, '')}&display=swap`;
  return {
    googleFontLink: !isUploadFont || isEmptyFamily ? '' : `@import url(${link});`,
    styles: `${selector}{
			${styles}
		}
		${_data__WEBPACK_IMPORTED_MODULE_0__.tabBreakpoint} {
			${selector}{
				${isValidCSS('font-size', tabletFontSize ? `${tabletFontSize}px` : '')}
			}
		}
		${_data__WEBPACK_IMPORTED_MODULE_0__.mobileBreakpoint} {
			${selector}{
				${isValidCSS('font-size', mobileFontSize ? `${mobileFontSize}px` : '')}
			}
		}`.replace(/\s+/g, ' ').trim()
  };
};
const getBoxCSS = val => {
  if (!val) return '';
  if (typeof val === 'string') return val;
  if (typeof val === 'object' && !Array.isArray(val)) {
    const order = ['top', 'right', 'bottom', 'left'];
    const values = order.map(side => val[side] || '');
    const allEmpty = values.every(value => !value);
    return allEmpty ? '' : order.map(side => val[side] || '0').join(' ');
  }
  return '';
};

// Murad Wahid
const getGradientCSS = gradient => {
  const {
    type,
    radialType,
    colors,
    centerPositions,
    angel
  } = gradient || {};
  if (gradient) {
    const gradientColors = colors?.map(({
      color,
      position
    }) => `${color} ${position}%`);
    const liner = `linear-gradient(${angel}deg, ${gradientColors})`;
    const radial = `radial-gradient(${radialType} at ${centerPositions?.x}% ${centerPositions?.y}%,${gradientColors})`;
    return isValidCSS('background', type === 'linear' ? liner : radial);
  }
  return '';
};
const getImagePosition = img => {
  const {
    position = 'center center',
    xPosition = 0,
    yPosition = 0,
    attachment = '',
    repeat = 'no-repeat',
    size = 'cover',
    customSize = '0px'
  } = img || {};
  const cd = v => 'initial' !== v || (0,_functions__WEBPACK_IMPORTED_MODULE_1__.isExist)(v);
  return `
		${cd(position) ? `background-position: ${'custom' === position ? `${xPosition} ${yPosition}` : position};` : ''}
		${attachment && cd(attachment) ? `background-attachment: ${attachment};` : ''}
		${cd(repeat) ? `background-repeat: ${repeat};` : ''}
		${cd(size) ? `background-size: ${'custom' === size ? `${customSize} auto` : size};` : ''}
	`;
};
const getImageCSS = (img = {}) => {
  if (img) {
    return {
      desktop: (0,_functions__WEBPACK_IMPORTED_MODULE_1__.isExist)(img.url) ? `background-image: url(${img.url}); ${getImagePosition(img?.desktop)}` : '',
      tablet: (0,_functions__WEBPACK_IMPORTED_MODULE_1__.isExist)(img.url) ? getImagePosition(img?.tablet) : '',
      mobile: (0,_functions__WEBPACK_IMPORTED_MODULE_1__.isExist)(img.url) ? getImagePosition(img?.mobile) : ''
    };
  }
  return '';
};
const getVideoCSS = (video, selector) => {
  const {
    url,
    loop
  } = video || {};
  const parentEl = document.querySelector(selector);
  const el = parentEl?.querySelector('.bPlVideo');
  const videoEl = document.createElement('video');
  videoEl.muted = true;
  videoEl.autoplay = true;
  videoEl.classList.add('bPlVideo');
  if (!el) {
    if (parentEl && url) {
      videoEl.innerHTML = `<source src=${url}></source>`;
      parentEl.appendChild(videoEl);
    }
  }
  videoEl.loop = loop;
  videoEl.play();
  return `${selector} .bPlVideo{
		left: 0;
		min-height: 100%;
		min-width: 100%;
		position: absolute;
		width: -webkit-fill-available;
		top: 0;
		z-index: 0;
	}`;
};
const getAdvBGCSS = (background, selector, isHover = false) => {
  const {
    type = 'color',
    color,
    gradient,
    img,
    video
  } = background || {};
  const bgCSS = type === 'color' ? isValidCSS('background', color) : type === 'gradient' ? getGradientCSS(gradient) : type === 'image' ? getImageCSS(img).desktop : '';
  const tablet = type === 'image' ? getImageCSS(img).tablet : '';
  const mobile = type === 'image' ? getImageCSS(img).mobile : '';
  const sl = isHover ? `${selector}:hover` : selector;
  return `
		${type === 'video' ? getVideoCSS(video, selector) : ''}

		${sl}{
			${bgCSS}
		}

		${_data__WEBPACK_IMPORTED_MODULE_0__.tabBreakpoint} {
			${sl}{
				${tablet}
			}
		}
		${_data__WEBPACK_IMPORTED_MODULE_0__.mobileBreakpoint} {
			${sl}{
				${mobile}
			}
		}
	`.replace(/\s+/g, ' ').trim();
};
const getOverlayCSS = (overlay, selector, isHover = false) => {
  const {
    isEnabled,
    colors,
    opacity = 1,
    blend,
    filter = '',
    blur = 0,
    brightness = 100,
    contrast = 100,
    saturation = 100,
    hue = 0
  } = overlay || {};
  const filterCSSValue = `${100 !== brightness ? `brightness(${brightness}%)` : ''} ${100 !== contrast ? `contrast(${contrast}%)` : ''} ${100 !== saturation ? `saturate(${saturation}%)` : ''} ${0 !== blur ? `blur(${blur}px)` : ''} ${0 !== hue ? `hue-rotate(${hue}deg)` : ''}`;
  const filterCSS = `${filter}: ${filter ? filterCSSValue : ''}; -webkit-${filter}: ${filter ? filterCSSValue : ''};`;
  const sl = isHover ? `${selector}:hover::after` : `${selector}::after`;
  return isEnabled ? `
		${selector}::after{
			content: '';
			position: absolute;
			inset: 0;
		}
		${getAdvBGCSS(colors, sl, false)}
		${sl}{
			${isValidCSS('opacity', opacity)}
			${isValidCSS('mix-blend-mode', blend)}
			${filterCSS}
		}
	`.replace(/\s+/g, ' ').trim() : '';
};

/***/ }),

/***/ "./src/Components/Backend/Panel/DynamicTag/DynamicTag.js":
/*!***************************************************************!*\
  !*** ./src/Components/Backend/Panel/DynamicTag/DynamicTag.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DynamicTag = ({
  tagName: DynamicTag,
  value,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(DynamicTag, {
    dangerouslySetInnerHTML: {
      __html: value
    },
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicTag);

/***/ }),

/***/ "./src/Components/Common/NoHeading/NoHeading.js":
/*!******************************************************!*\
  !*** ./src/Components/Common/NoHeading/NoHeading.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const NoHeading = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '14px 0px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      margin: '0px'
    }
  }, "No headings were found on this page!"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoHeading);

/***/ }),

/***/ "./src/Components/Common/Styles/ListStyle.js":
/*!***************************************************!*\
  !*** ./src/Components/Common/Styles/ListStyle.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const ListStyle = ({
  attributes,
  id
}) => {
  const {
    sticky,
    slideTitle,
    slideList,
    boxList
  } = attributes;
  const blockWrapper = `#${id}`;
  const listBlWrapper = `${blockWrapper} .list-container`;
  const titleWrapper = `${listBlWrapper} .list-title`;
  const title = `${titleWrapper} .list-title-heading`;
  const listItems = `${listBlWrapper} .list-items`;
  const list = `${listItems} .list-item`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
${title}{
padding-top:${slideTitle.space.desktop};
padding-bottom:${slideTitle.spaceBottom.desktop};
margin:0px;
}
${list}{
margin-left: 10px;
margin-bottom:${slideList.space.desktop};
position: relative;
}


${list}>a::before{
content: "";
left: 0;
top: 50%;
transform: translateY(-50%);
height:20px;
width:3px;
background-color:${boxList.nBarColor ? boxList.nBarColor : "#ccc"} !important;
position: absolute;
transition: background .3s ease-in-out;
}
${list} a.item-active::before{
background-color:${boxList.hBarColor} !important;
}
${list}>a:hover::before{
background: ${boxList.hBarColor} !important;
}
${list}>a{
color:${boxList.nTxtColor};
padding-left: 30px;
transition: all .3s ease-in-out;
text-decoration:none;
font-size:${slideList.fontSize.desktop}
}
${list}>a:hover {
color: ${boxList.hTxtColor} !important;
}
${list} a.item-active{
color: ${boxList.hTxtColor} !important;
}
${listBlWrapper}.sticky {
z-index: ${sticky.zIndex.desktop} !important;
position:fixed;
}

${["left", "right"].map(val => `${listBlWrapper}.sticky.${val}{
${val}:${sticky[val].desktop};
}`).join("")}

${["top", "bottom"].map(val => `${listBlWrapper}.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")}
${sticky.verticalAlign === "center" ? `${listBlWrapper}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}

@media screen and (min-width: 1024px) {
${title}{
padding-top:${slideTitle.space.desktop};
padding-bottom:${slideTitle.spaceBottom.desktop}
}
${list}{
margin-bottom:${slideList.space.desktop};
}
${list}>a{
font-size:${slideList.fontSize.desktop}
}

${listBlWrapper}.sticky {
z-index: ${sticky.zIndex.desktop} !important;
position:${sticky?.device.includes("Desktop") ? "fixed" : "initial"};
}

${["left", "right"].map(val => `${listBlWrapper}.sticky.${val}{
${val}:${sticky[val].desktop};
}`).join("")}

${["top", "bottom"].map(val => `${listBlWrapper}.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")}

${sticky.verticalAlign === "center" ? `${listBlWrapper}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}

}
@media only screen and (min-width:641px) and (max-width: 1024px) {

${title}{
padding-top:${slideTitle.space.tablet};
padding-bottom:${slideTitle.spaceBottom.tablet}
}
${list}{
margin-bottom:${slideList.space.tablet};
}
${list}>a{
font-size:${slideList.fontSize.tablet}
}
${listBlWrapper}.sticky {
z-index: ${sticky.zIndex.tablet} !important;
position:${sticky?.device.includes("Tablet") ? "fixed" : "initial"};
}
${["left", "right"].map(val => `${listBlWrapper}.sticky.${val}{
${val}:${sticky[val].tablet};
}`).join("")}
${["top", "bottom"].map(val => `${listBlWrapper}.sticky.${val}{
${val}:${sticky[val].tablet}
}`).join("")}

${sticky.verticalAlign === "center" ? `${listBlWrapper}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}

}
@media only screen and (max-width: 640px) {
${title}{
padding-top:${slideTitle.space.mobile};
padding-bottom:${slideTitle.spaceBottom.mobile};
}
${list}{
margin-bottom:${slideList.space.mobile};
}
${list}>a{
font-size:${slideList.fontSize.mobile}
}
${listBlWrapper}.sticky {
z-index: ${sticky.zIndex.mobile} !important;
position:${sticky?.device.includes("Mobile") ? "fixed" : "initial"};
}

${["left", "right"].map(val => `${listBlWrapper}.sticky.${val}{
${val}:${sticky[val].mobile};
}`).join("")}
${["top", "bottom"].map(val => `${listBlWrapper}.sticky.${val}{
${val}:${sticky[val].mobile}
}`).join("")}

${sticky.verticalAlign === "center" ? `${listBlWrapper}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
}
`);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListStyle);

/***/ }),

/***/ "./src/Components/Common/Styles/SlideStyle.js":
/*!****************************************************!*\
  !*** ./src/Components/Common/Styles/SlideStyle.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../bpl-tools/utils/getCSS */ "../bpl-tools/utils/getCSS.js");

/* eslint-disable no-unused-vars */


const SlideStyle = ({
  attributes,
  id
}) => {
  const {
    slideTitle,
    slideList,
    sticky,
    boxList
  } = attributes;
  const blockSl = `#${id}`;
  const slideContainer = `${blockSl} .slide-container`;
  const titleWrapper = `${slideContainer} .slide-titleSubWrapper`;
  const subTitleWrapper = `${titleWrapper} .slide-title`;
  const title = `${subTitleWrapper} .slide-title-heading`;
  const slideListWrapper = `${slideContainer} .slide-list-items`;
  const list = `${slideListWrapper} .slide-list`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
${subTitleWrapper} {
  margin-top:${slideTitle.space.desktop};
  margin-bottom: ${slideTitle.spaceBottom.desktop};
}
${subTitleWrapper}::after {
  background-color: ${slideTitle.slideBarColor};
}

${list} {
  margin-bottom:${slideList.space.desktop};
}

${list}>a{
  color:${boxList.nTxtColor};
  font-size:${slideList.fontSize.desktop};
}
${list} a:hover{
    color:${boxList.hTxtColor};
}
${list} .item-active{
  color:${boxList.hTxtColor} !important;
}
${list}::after {
  background-color: ${boxList.nBarColor};
}
${slideContainer}:hover .slide-list::after{
  background-color:${boxList.hBarColor};
} 
${slideContainer}.sticky {
  z-index: ${sticky.zIndex.desktop} !important;
}
${["left", "right"].map(val => `${slideContainer}.sticky.${val}{
${val}:${sticky[val].desktop};
}`).join("")}
${["top", "bottom"].map(val => `${slideContainer}.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")}
${sticky.verticalAlign === "center" ? `${slideContainer}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}

        
@media screen and (min-width: 1024px) {
${slideContainer}.sticky {
  z-index: ${sticky.zIndex.desktop} !important;
  position:${sticky.device.includes("Desktop") ? "fixed" : "initial"};
}

${["left", "right"].map(val => `${slideContainer}.sticky.${val}{
  ${val}:${sticky[val].desktop};
}`).join("")}
${["top", "bottom"].map(val => `${slideContainer}.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")}
        ${sticky.verticalAlign === "center" ? `${slideContainer}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}

        ${subTitleWrapper} {
  margin-top:${slideTitle.space.desktop};
  margin-bottom: ${slideTitle.spaceBottom.desktop};
}
        ${list} {
          margin-bottom:${slideList.space.desktop};
        }
        ${slideListWrapper}>${list}>a{
          font-size:${slideList.fontSize.desktop};
        }
        }

@media only screen and (min-width:641px) and (max-width: 1024px) {
        ${slideContainer}.sticky {
          z-index: ${sticky.zIndex.tablet} !important;
          position:${sticky.device.includes("Tablet") ? "fixed" : "initial"};
        }
        ${["left", "right"].map(val => `${slideContainer}.sticky.${val}{
            ${val}:${sticky[val].tablet};
          }`).join("")}
        ${["top", "bottom"].map(val => `${slideContainer}.sticky.${val}{
        ${val}:${sticky[val].tablet}
        }`).join("")}
        ${sticky.verticalAlign === "center" ? `${slideContainer}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${subTitleWrapper} {
          margin-top:${slideTitle.space.tablet};
          margin-bottom: ${slideTitle.spaceBottom.tablet};
        }
        ${list} {
          margin-bottom:${slideList.space.tablet};
        }
        ${list}>a{
          font-size:${slideList.fontSize.tablet};
        }
        }

        @media only screen and (max-width: 640px) {
        ${slideContainer}.sticky {
          z-index: ${sticky.zIndex.mobile} !important;
          position:${sticky.device.includes("Mobile") ? "fixed" : "initial"};
        }

${["left", "right"].map(val => `${slideContainer}.sticky.${val}{
    ${val}:${sticky[val].mobile};
  }`).join("")}
  ${["top", "bottom"].map(val => `${slideContainer}.sticky.${val}{
  ${val}:${sticky[val].mobile}
  }`).join("")}
        ${sticky.verticalAlign === "center" ? `${slideContainer}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${subTitleWrapper} {
          margin-top:${slideTitle.space.mobile};
          margin-bottom: ${slideTitle.spaceBottom.mobile};
        }
        ${list} {
          margin-bottom:${slideList.space.mobile};
        }
        ${list}>a{
          font-size:${slideList.fontSize.mobile};
        }
        }

          `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlideStyle);

/***/ }),

/***/ "./src/Components/Common/Styles/Style.js":
/*!***********************************************!*\
  !*** ./src/Components/Common/Styles/Style.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  id
}) => {
  const {
    header,
    boxList,
    markup,
    sticky
  } = attributes;
  const blockWrapper = `#${id}`;
  const accordion = `${blockWrapper} .accordion`;
  const titleWrapper = `${accordion} .accordion-title`;
  // eslint-disable-next-line no-unused-vars
  const title = `${titleWrapper} .content-table-title`;
  const panelWrapper = `${accordion} .panel`;
  const panelLists = `${panelWrapper} .panel-table-container-order-list`;
  const panelItem = `${panelLists} .panel-table-list-items`;
  const listSl = `${blockWrapper} ol>li>a.table-content-anchor-list`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
        ${listSl}:hover{
          color:${boxList.hTxtColor} !important; 
          text-decoration:${boxList.hTxtDecoration ? "underline" : "none"} !important;
        }
        ${listSl}{
          color:${boxList.nTxtColor} !important;
          text-decoration:${boxList.nTxtDecoration ? "underline" : "none"};
          margin-left:5px;
        }
        ${accordion}.sticky {
          z-index: ${sticky.zIndex.desktop} !important;

          position:fixed;
        }
        ${["left", "right"].map(val => `${accordion}.sticky.${val}{
            ${val}:${sticky[val].desktop};
          }`).join("")}

      ${["top", "bottom"].map(val => `${accordion}.sticky.${val}{
        ${val}:${sticky[val]?.desktop}
        }`).join("")}
        ${sticky.verticalAlign === "center" ? `${accordion}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
      ${markup.view === "decimal" ? `
          
        ${panelLists}{
          list-style-type:decimal;
          margin:0px;
          margin-left:${boxList.padding.desktop?.left};
        }
        ${panelItem}::marker{
          color:${markup.color};
          font-size:${markup.markupSize.desktop};
        }
        ` : `
        ${panelLists}{
          list-style-type:none;
        }
        ${panelLists}>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        ${panelItem}>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.desktop} !important;
        }
        `}
      ${titleWrapper}{
        background:${header.bgColor};
        border-bottom: ${header.separatorWidth}px solid ${header.separatorColor};
        margin-bottom:-2px;
      }
      ${accordion}>.panel{
        ${boxList.maxHeight.desktop > 0 ? "max-height:" + boxList.maxHeight.desktop + "px;" : ""}
        ${boxList.maxHeight.desktop > 0 ? "overflow-y:auto;" : ""}
        
        
      }
      a.table-content-anchor-list.item-active{
        color:${boxList.hTxtColor} !important;
      }
      ${panelItem}{
        padding-top:${boxList.padding.desktop?.top};
        padding-bottom:${boxList.padding.desktop?.bottom};
        padding-right:${boxList.padding.desktop?.right};
      }
      ${panelLists}{
        padding-left:${boxList.padding.desktop?.left};
        padding-top:10px;
      }
      ${panelItem}::marker{
          font-size: 40px;
        }
      @media screen and (min-width: 1024px) {
        ${accordion}.sticky {
          z-index: ${sticky.zIndex.desktop} !important;
          position:${sticky?.device.includes("Desktop") ? "fixed" : "initial"};
        }
        ${["left", "right"].map(val => `${accordion}.sticky.${val}{
            ${val}:${sticky[val].desktop};
          }`).join("")}
        ${["top", "bottom"].map(val => `${accordion}.sticky.${val}{
        ${val}:${sticky[val].desktop}
        }`).join("")}
        ${sticky.verticalAlign === "center" ? `${accordion}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${panelWrapper}{
          ${boxList.maxHeight.desktop > 0 ? "max-height:" + boxList.maxHeight.desktop + "px;" : ""}
          ${boxList.maxHeight.desktop > 0 ? "overflow-y:auto;" : ""}
      }
      ${panelItem}{
        padding-top:${boxList.padding.desktop?.top};
        padding-bottom:${boxList.padding.desktop?.bottom};
        padding-right:${boxList.padding.desktop?.right};
      }
      ${panelLists}{
        padding-left:${boxList.padding.desktop?.left};
      }
      ${markup.view === "decimal" ? `
          
        ${panelLists}{
          list-style-type:decimal;
          margin:0px;
          margin-left:${boxList.padding.desktop?.left};
        }
        ${panelItem}::marker{
          color:${markup.color};
          font-size:${markup.markupSize.desktop};
        }
        ` : `
        ${panelLists}{
          list-style-type:none;
        }
        ${panelLists}>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        ${panelItem}>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.desktop} !important;
        }
        `}
      }
      @media only screen and (min-width:641px) and (max-width: 1024px){
        ${accordion}.sticky {
          z-index: ${sticky.zIndex.tablet} !important;
          position:${sticky.device.includes("Tablet") ? "fixed" : "initial"};
        }
      ${["left", "right"].map(val => `${accordion}.sticky.${val}{
          ${val}:${sticky[val].tablet};
        }`).join("")}
        ${["top", "bottom"].map(val => `${accordion}.sticky.${val}{
        ${val}:${sticky[val].tablet}
        }`).join("")}
        ${sticky.verticalAlign === "center" ? `${accordion}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${panelWrapper}{
          ${boxList.maxHeight.tablet > 0 ? "max-height:" + boxList.maxHeight.tablet + "px;" : ""}
          ${boxList.maxHeight.tablet > 0 ? "overflow-y:auto;" : ""}
        }
      ${panelItem}{
        padding-top:${boxList.padding.tablet?.top};
        padding-bottom:${boxList.padding.tablet?.bottom};
        padding-right:${boxList.padding.tablet?.right};
      }
      ${panelLists}{
        padding-left:${boxList.padding.tablet?.left};
      }
      ${markup.view === "decimal" ? `
          
        ${panelLists}{
          list-style-type:decimal;
          margin:0px;
          margin-left:${boxList.padding.tablet?.left};
        }
        ${panelItem}::marker{
          color:${markup.color};
          font-size:${markup.markupSize.tablet};
        }
        ` : `
        ${panelLists}{
          list-style-type:none;
        }
        ${panelLists}>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        ${panelItem}>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.tablet} !important;
        }
        `}

      }
      @media only screen and (max-width: 640px) {
        ${accordion}.sticky {
          z-index: ${sticky.zIndex.mobile} !important;
          position:${sticky.device.includes("Mobile") ? "fixed" : "initial"};
        }
        ${["left", "right"].map(val => `${accordion}.sticky.${val}{
          ${val}:${sticky[val].mobile};
        }`).join("")}
        ${["top", "bottom"].map(val => `${accordion}.sticky.${val}{
          ${val}:${sticky[val].mobile}
          }`).join("")}
          ${sticky.verticalAlign === "center" ? `${accordion}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
        ${panelWrapper}{
          ${boxList.maxHeight.mobile > 0 ? "max-height:" + boxList.maxHeight.mobile + "px;" : ""}
          ${boxList.maxHeight.mobile > 0 ? "overflow-y:auto;" : ""}
        }
      ${panelItem}{
        padding-top:${boxList.padding.mobile?.top};
        padding-bottom:${boxList.padding.mobile?.bottom};
        padding-right:${boxList.padding.mobile?.right};
      }
      ${panelLists}{
        padding-left:${boxList.padding.mobile?.left};
      }
      ${markup.view === "decimal" ? `
        ${panelLists}{
          list-style-type:decimal;
          margin:0px;
          margin-left:${boxList.padding.mobile?.left};
        }
        ${panelItem}::marker{
          color:${markup.color};
          font-size:${markup.markupSize.mobile};
        }
        ` : `
        ${panelLists}{
          list-style-type:none;
        }
        ${panelLists}>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        ${panelItem}>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.mobile} !important;
        }
        `}
      }
      `));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/Components/Common/Styles/TimelineStyle.js":
/*!*******************************************************!*\
  !*** ./src/Components/Common/Styles/TimelineStyle.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../bpl-tools/utils/getCSS */ "../bpl-tools/utils/getCSS.js");



const TimelineStyle = ({
  attributes,
  id
}) => {
  const {
    sticky,
    slideTitle,
    slideList,
    boxList
  } = attributes;
  const blockSl = `#${id}`;
  const timelineSl = `${blockSl} .timeline-container`;
  const titleContainer = `${timelineSl} .timeline-title-container`;
  const timelineTitle = `${titleContainer} .timeline-title`;
  const timelineItems = `${timelineSl} .timeline-list-items`;
  const timelineItem = `${timelineItems} .timeline-list`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
${timelineItems} {
  height: 90%;
  list-style: none;
  position: relative;
  margin-left: 10px;
  border-left: 2px dashed ${boxList.treeColor};
}
${timelineTitle} {
  padding-top:${slideTitle.space.desktop};
  padding-bottom: ${slideTitle.spaceBottom.desktop};
}
${timelineItem} {
  margin-bottom:${slideList.space.desktop};
  margin-left:25px;
}

${timelineItem}>a {
  text-decoration: none;
  font-size:${slideList.fontSize.desktop}
}
${timelineItem} a.item-active{
  color:${boxList.hTxtColor} !important;
}
${timelineItem}>a.item-active::before{
  background-color:${boxList.hTxtColor}
}
${timelineItem}>a::before {
  position: absolute;
  left: 0;
  transform: translateX(-50%);
  width: ${boxList.dotSize}px;
  height: ${boxList.dotSize}px;
  border: 6px solid #e7e7e7;
  background-color: #b1b0b0;
  border-radius: 50%;
  -webkit-box-shadow: ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getMultiShadowCSS)(boxList.dotShadow)};
  box-shadow: ${(0,_bpl_tools_utils_getCSS__WEBPACK_IMPORTED_MODULE_1__.getMultiShadowCSS)(boxList.dotShadow)};
  content: "";
  transition: background .3s ease-in-out;
}
${timelineItem}>a{
  color:${boxList.nTxtColor} !important;
}
${timelineItem}>a:hover {
  color:${boxList.hTxtColor} !important;
  transition: color .2s ease-in-out;
}

${timelineItem}>a:hover::before {
  background-color:${boxList.hTxtColor};
}
${timelineSl}.sticky {
  z-index: ${sticky.zIndex.desktop} !important;

  position:fixed;
}
${["left", "right"].map(val => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].desktop};
}`).join("")}
${["top", "bottom"].map(val => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")}
${sticky.verticalAlign === "center" ? `${timelineSl}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}


@media screen and (min-width: 1024px) {

${timelineTitle} {
  padding-top:${slideTitle.space.desktop};
  padding-bottom: ${slideTitle.spaceBottom.desktop};
}
${timelineItem} {
  margin-bottom:${slideList.space.desktop};
  margin-left:25px;
}
${timelineItem}>a {
  text-decoration: none;
  font-size:${slideList.fontSize.desktop}
}
${timelineSl}.sticky {
  z-index: ${sticky.zIndex.desktop} !important;
  position:${sticky.device.includes("Desktop") ? "fixed" : "initial"};
}
${["left", "right"].map(val => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].desktop};
}`).join("")}
${["top", "bottom"].map(val => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")}
${sticky.verticalAlign === "center" ? `${timelineSl}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}  
}
@media only screen and (min-width:641px) and (max-width: 1024px) {
${timelineTitle} {
  padding-top:${slideTitle.space.tablet};
  padding-bottom: ${slideTitle.spaceBottom.tablet};
}
${timelineItem} {
  margin-bottom:${slideList.space.tablet};
}
${timelineItem}>a {
  font-size:${slideList.fontSize.tablet}
}
${timelineSl}.sticky {
  z-index: ${sticky.zIndex.tablet} !important;
  position:${sticky.device.includes("Tablet") ? "fixed" : "initial"};
}

${["left", "right"].map(val => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].tablet};
}`)}

${["top", "bottom"].map(val => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].tablet}
}`).join("")}
${sticky.verticalAlign === "center" ? `${timelineSl}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}

}
@media only screen and (max-width: 640px) {

${timelineTitle} {
  padding-top:${slideTitle.space.mobile};
  padding-bottom: ${slideTitle.spaceBottom.mobile};
}
${timelineItem} {
  margin-bottom:${slideList.space.mobile};
}
${timelineItem}>a {
  font-size:${slideList.fontSize.mobile}
}
${timelineSl}.sticky {
  z-index: ${sticky.zIndex.mobile} !important;
  position:${sticky.device.includes("Mobile") ? "fixed" : "initial"};
}

${["top", "bottom"].map(val => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].mobile}
}`).join("")}
${sticky.verticalAlign === "center" ? `${timelineSl}.sticky.center{top:50%;  transform: translateY(-50%)}` : null}
${["left", "right"].map(val => `${timelineSl}.sticky.${val}{
${val}:${sticky[val].mobile};
}`)}
}
`));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimelineStyle);

/***/ }),

/***/ "./src/Components/Frontend/ListFront.js":
/*!**********************************************!*\
  !*** ./src/Components/Frontend/ListFront.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Backend_Panel_DynamicTag_DynamicTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Backend/Panel/DynamicTag/DynamicTag */ "./src/Components/Backend/Panel/DynamicTag/DynamicTag.js");
/* harmony import */ var _Common_NoHeading_NoHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/NoHeading/NoHeading */ "./src/Components/Common/NoHeading/NoHeading.js");
/* harmony import */ var _Common_Styles_ListStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Styles/ListStyle */ "./src/Components/Common/Styles/ListStyle.js");





const ListFront = ({
  attributes,
  id
}) => {
  const {
    title,
    slideTitle,
    tagName,
    sticky,
    headings
  } = attributes;
  const [contentsAttr, setContentsAttr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [rendered, setRendered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const root = document.body;
    const selectorString = tagName.join(", ");
    const headingsEl = root.querySelectorAll(`${selectorString}`);
    for (let index = 0; index < headingsEl.length; index++) {
      const currentHeading = headings.find(heading => heading.tag === headingsEl[index].tagName && heading.contents === headingsEl[index].textContent);
      if (currentHeading) {
        const span = document.createElement("span");
        span.setAttribute("id", currentHeading.id);
        headingsEl[index].insertAdjacentElement("beforebegin", span);
      }
    }
    const url = window.location.hash;
    setTimeout(() => {
      const activeSection = document.querySelector(`[href='${url}']`);
      activeSection?.click();
    }, 1000);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_Styles_ListStyle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    id: id
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: () => setRendered(!rendered),
    className: `list-container poppinsFont ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "list-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Backend_Panel_DynamicTag_DynamicTag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "list-title-heading",
    style: {
      color: slideTitle.titleColor
    },
    tagName: title.tag,
    value: title.text
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, headings?.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "list-items"
  }, Array.from(headings).map((headingElement, idx) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "list-item",
    key: idx
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: () => setContentsAttr(idx),
    className: `${idx === Number(contentsAttr) ? "item-active" : ""}`,
    href: `#${headingElement.id}`
  }, headingElement.contents))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_NoHeading_NoHeading__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListFront);

/***/ }),

/***/ "./src/Components/Frontend/SliderFront.js":
/*!************************************************!*\
  !*** ./src/Components/Frontend/SliderFront.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Backend_Panel_DynamicTag_DynamicTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Backend/Panel/DynamicTag/DynamicTag */ "./src/Components/Backend/Panel/DynamicTag/DynamicTag.js");
/* harmony import */ var _Common_NoHeading_NoHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/NoHeading/NoHeading */ "./src/Components/Common/NoHeading/NoHeading.js");
/* harmony import */ var _Common_Styles_SlideStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Styles/SlideStyle */ "./src/Components/Common/Styles/SlideStyle.js");





const SliderFront = ({
  attributes,
  id
}) => {
  const [contentsAttr, setContentsAttr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [rendered, setRendered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    title,
    tagName,
    sticky,
    headings,
    slideTitle
  } = attributes;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const root = document.body;
    const selectorString = tagName.join(", ");
    const headingsEl = root.querySelectorAll(`${selectorString}`);
    for (let index = 0; index < headingsEl.length; index++) {
      const currentHeading = headings.find(heading => heading.tag === headingsEl[index].tagName && heading.contents === headingsEl[index].textContent);
      if (currentHeading) {
        const span = document.createElement("span");
        span.setAttribute("id", currentHeading.id);
        headingsEl[index].insertAdjacentElement("beforebegin", span);
      }
    }
    const url = window.location.hash;
    setTimeout(() => {
      const activeSection = document.querySelector(`[href='${url}']`);
      activeSection?.click();
    }, 1000);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_Styles_SlideStyle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    id: id
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: () => setRendered(!rendered),
    className: `slide-container poppinsFont ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign} `
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slide-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Backend_Panel_DynamicTag_DynamicTag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "slide-title-heading",
    style: {
      color: slideTitle.titleColor
    },
    tagName: title.tag,
    value: title.text
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, headings?.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "slide-list-items"
  }, Array.from(headings).map((headingElement, idx) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "slide-list",
    onClick: () => setContentsAttr(idx),
    key: idx
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `${idx === Number(contentsAttr) ? "item-active" : ""}`,
    href: `#${headingElement.id}`
  }, headingElement.contents))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_NoHeading_NoHeading__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderFront);

/***/ }),

/***/ "./src/Components/Frontend/TableFront.js":
/*!***********************************************!*\
  !*** ./src/Components/Frontend/TableFront.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Backend_Panel_DynamicTag_DynamicTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Backend/Panel/DynamicTag/DynamicTag */ "./src/Components/Backend/Panel/DynamicTag/DynamicTag.js");
/* harmony import */ var _Common_NoHeading_NoHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/NoHeading/NoHeading */ "./src/Components/Common/NoHeading/NoHeading.js");
/* harmony import */ var _Common_Styles_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Styles/Style */ "./src/Components/Common/Styles/Style.js");





const TableFront = ({
  attributes,
  id
}) => {
  const accordion = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const titleRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const accordionPanel = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [contentsAttr, setContentsAttr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [rendered, setRendered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [accordionHeight, setAccordionHeight] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    header,
    title,
    tagName,
    minimize,
    markup,
    sticky,
    headings
  } = attributes;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const root = document.body;
    const selectorString = tagName.join(", ");
    const headingsEl = root.querySelectorAll(`${selectorString}`);
    for (let index = 0; index < headingsEl.length; index++) {
      const currentHeading = headings.find(heading => heading.tag === headingsEl[index].tagName && heading.contents === headingsEl[index].textContent);
      if (currentHeading) {
        const span = document.createElement("span");
        span.setAttribute("id", currentHeading.id);
        headingsEl[index].insertAdjacentElement("beforebegin", span);
      }
    }
    const url = window.location.hash;
    setTimeout(() => {
      const activeSection = document.querySelector(`[href='${url}']`);
      activeSection?.click();
    }, 1000);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAccordionHeight(accordionPanel?.current?.scrollHeight + "px");
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_Styles_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggle: toggle,
    attributes: attributes,
    id: id
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: () => setRendered(!rendered),
    ref: accordion,
    className: `accordion poppinsFont ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: titleRef,
    onClick: () => setToggle(!toggle),
    className: "accordion-title"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Backend_Panel_DynamicTag_DynamicTag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "content-table-title",
    style: {
      margin: "0",
      color: header.txtColor
    },
    tagName: title?.tag,
    value: title?.text
  }), minimize.toggle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !toggle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    style: {
      color: header.iconColor
    },
    className: minimize.collapseIcon
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    style: {
      color: header.iconColor
    },
    className: minimize.expandIcon
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: accordionPanel,
    style: {
      height: toggle ? minimize.toggle ? "0px" : accordionHeight : accordionHeight
    },
    className: "panel"
  }, headings?.length > 1 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ol", {
    className: "panel-table-container-order-list"
  }, headings.map((headingElement, idx) => headingElement.contents.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "panel-table-list-items",
    onClick: () => setContentsAttr(idx),
    key: idx
  }, markup.view !== "decimal" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    style: {
      fontSize: "10px"
    },
    className: `${markup.icon}`
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: `table-content-anchor-list ${idx === contentsAttr ? "item-active" : ""}`,
    href: `#${headingElement.id}`
  }, headingElement.contents))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_NoHeading_NoHeading__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableFront);

/***/ }),

/***/ "./src/Components/Frontend/TableOfContent.js":
/*!***************************************************!*\
  !*** ./src/Components/Frontend/TableOfContent.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListFront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListFront */ "./src/Components/Frontend/ListFront.js");
/* harmony import */ var _SliderFront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderFront */ "./src/Components/Frontend/SliderFront.js");
/* harmony import */ var _TableFront__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableFront */ "./src/Components/Frontend/TableFront.js");
/* harmony import */ var _TimelineFront__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TimelineFront */ "./src/Components/Frontend/TimelineFront.js");





const TableOfContent = ({
  attributes,
  id
}) => {
  const {
    theme
  } = attributes;
  switch (theme) {
    case "slide":
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SliderFront__WEBPACK_IMPORTED_MODULE_2__["default"], {
        attributes: attributes,
        id: id
      });
    case "timeline":
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TimelineFront__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes,
        id: id
      });
    case "list":
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ListFront__WEBPACK_IMPORTED_MODULE_1__["default"], {
        attributes: attributes,
        id: id
      });
    default:
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TableFront__WEBPACK_IMPORTED_MODULE_3__["default"], {
        attributes: attributes,
        id: id
      });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableOfContent);

/***/ }),

/***/ "./src/Components/Frontend/TimelineFront.js":
/*!**************************************************!*\
  !*** ./src/Components/Frontend/TimelineFront.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Backend_Panel_DynamicTag_DynamicTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Backend/Panel/DynamicTag/DynamicTag */ "./src/Components/Backend/Panel/DynamicTag/DynamicTag.js");
/* harmony import */ var _Common_NoHeading_NoHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/NoHeading/NoHeading */ "./src/Components/Common/NoHeading/NoHeading.js");
/* harmony import */ var _Common_Styles_TimelineStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Styles/TimelineStyle */ "./src/Components/Common/Styles/TimelineStyle.js");





const TimelineFront = ({
  attributes,
  id
}) => {
  const {
    title,
    slideTitle,
    tagName,
    sticky,
    headings
  } = attributes;
  const [contentsAttr, setContentsAttr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [rendered, setRendered] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const root = document.body;
    const selectorString = tagName.join(", ");
    const headingsEl = root.querySelectorAll(`${selectorString}`);
    for (let index = 0; index < headingsEl.length; index++) {
      const currentHeading = headings.find(heading => heading.tag === headingsEl[index].tagName && heading.contents === headingsEl[index].textContent);
      if (currentHeading) {
        const span = document.createElement("span");
        span.setAttribute("id", currentHeading.id);
        headingsEl[index].insertAdjacentElement("beforebegin", span);
      }
    }
    const url = window.location.hash;
    setTimeout(() => {
      const activeSection = document.querySelector(`[href='${url}']`);
      activeSection?.click();
    }, 1000);
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_Styles_TimelineStyle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attributes: attributes,
    id: id
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    onClick: () => setRendered(!rendered),
    className: `timeline-container poppinsFont ${sticky.toggle ? "sticky" : ""} ${sticky.horizonAlign} ${sticky.verticalAlign}  `
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "timeline-title-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Backend_Panel_DynamicTag_DynamicTag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "timeline-title",
    style: {
      color: slideTitle.titleColor
    },
    tagName: title.tag,
    value: title.text
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, headings?.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "timeline-list-items"
  }, Array.from(headings).map((headingElement, idx) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "timeline-list",
    key: idx
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    onClick: () => setContentsAttr(idx),
    className: `${idx === Number(contentsAttr) ? "item-active" : ""}`,
    href: `#${headingElement.id}`
  }, headingElement.contents))))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Common_NoHeading_NoHeading__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimelineFront);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "../bpl-tools/node_modules/immer/dist/immer.mjs":
/*!******************************************************!*\
  !*** ../bpl-tools/node_modules/immer/dist/immer.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ Immer2),
/* harmony export */   applyPatches: () => (/* binding */ applyPatches),
/* harmony export */   castDraft: () => (/* binding */ castDraft),
/* harmony export */   castImmutable: () => (/* binding */ castImmutable),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   current: () => (/* binding */ current),
/* harmony export */   enableMapSet: () => (/* binding */ enableMapSet),
/* harmony export */   enablePatches: () => (/* binding */ enablePatches),
/* harmony export */   finishDraft: () => (/* binding */ finishDraft),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   immerable: () => (/* binding */ DRAFTABLE),
/* harmony export */   isDraft: () => (/* binding */ isDraft),
/* harmony export */   isDraftable: () => (/* binding */ isDraftable),
/* harmony export */   nothing: () => (/* binding */ NOTHING),
/* harmony export */   original: () => (/* binding */ original),
/* harmony export */   produce: () => (/* binding */ produce),
/* harmony export */   produceWithPatches: () => (/* binding */ produceWithPatches),
/* harmony export */   setAutoFreeze: () => (/* binding */ setAutoFreeze),
/* harmony export */   setUseStrictShallowCopy: () => (/* binding */ setUseStrictShallowCopy)
/* harmony export */ });
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  true ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : 0;
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (t === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if ( true && childValue === targetObject)
    die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if ( true && isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if ( true && prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push(
      'Sets cannot have "replace" patches.',
      function(op) {
        return "Unsupported patch operation: " + op;
      },
      function(path) {
        return "Cannot apply patch, path doesn't resolve: " + path;
      },
      "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
    );
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}

//# sourceMappingURL=immer.mjs.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Frontend_TableOfContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Frontend/TableOfContent */ "./src/Components/Frontend/TableOfContent.js");
/* harmony import */ var _bpl_tools_Advanced_generateCSS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bpl-tools/Advanced/generateCSS */ "../bpl-tools/Advanced/generateCSS.js");





document.addEventListener('DOMContentLoaded', () => {
  const tableOfContentEls = document.querySelectorAll('.wp-block-b-blocks-table-of-content');
  tableOfContentEls.forEach(tableOfContentEl => {
    const attributes = JSON.parse(tableOfContentEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(tableOfContentEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
      dangerouslySetInnerHTML: {
        __html: `${(0,_bpl_tools_Advanced_generateCSS__WEBPACK_IMPORTED_MODULE_4__["default"])(tableOfContentEl.id, attributes.advanced, false)}`
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Frontend_TableOfContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: tableOfContentEl.id
    })));
    tableOfContentEl?.removeAttribute('data-attributes');
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map