"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./public/images/SkillatriaHeartLogo.png
/* harmony default export */ const SkillatriaHeartLogo = ({"src":"/_next/static/media/SkillatriaHeartLogo.c6562500.png","height":353,"width":1061,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEUhOZgiRZEiQ5IiTIsnj1speW8hN5omhGMp+D44AAAACHRSTlM8U0tpQw8oVtut4q8AAAAJcEhZcwAALEoAACxKAXd6dE0AAAAaSURBVAiZY2BiZ2RgYGNgYGBmYWJkYmVkBAABWgAkGPQH/gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./components/Header.js









function Header() {
    // const [expand, setExpand] = useState(false);
    const { isOpen , onOpen , onClose  } = (0,react_.useDisclosure)();
    const navData = [
        {
            label: "Home",
            href: "/"
        },
        {
            label: "Portfolio",
            options: [
                {
                    label: "Web Development",
                    href: "portfolio/webdevelopment"
                },
                {
                    label: "Graphic Design",
                    href: "portfolio/graphicdesign"
                },
                {
                    label: "Video Editing",
                    href: "portfolio/videoediting"
                },
                {
                    label: "Photography",
                    href: "portfolio/photography"
                }, 
            ]
        },
        {
            label: "About us",
            href: "/about"
        },
        {
            label: "Contact us",
            href: "/contact"
        }, 
    ];
    // const router = Router();
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            align: "center",
            justify: "space-between",
            // 
            p: 3,
            shadow: "md",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    position: "relative",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: SkillatriaHeartLogo,
                        alt: "Skillatria Logo",
                        height: 60,
                        width: 200
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    justify: "space-evenly",
                    marginRight: 6,
                    gap: [
                        3,
                        6
                    ],
                    display: {
                        base: "none",
                        md: "flex"
                    },
                    children: navData.map((item, index1)=>{
                        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            children: item.label === "Portfolio" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuButton, {
                                        children: [
                                            item.label,
                                            /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.ChevronDownIcon, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuList, {
                                        children: item.options.map((option, index)=>{
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: option.href,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                            children: option.label
                                                        })
                                                    })
                                                }, index)
                                            }));
                                        })
                                    })
                                ]
                            }, index1) : /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: item.href,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: item.label
                                })
                            }, index1)
                        }));
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    display: {
                        md: "none"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
                            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.HamburgerIcon, {}),
                            "aira-label": "Hamburger Icon",
                            onClick: onOpen,
                            my: 1,
                            variant: "ghost"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Drawer, {
                            placement: 'right',
                            onClose: onClose,
                            isOpen: isOpen,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerOverlay, {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.DrawerContent, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerHeader, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.HStack, {
                                                justifyContent: 'flex-end',
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.CloseButton, {
                                                    onClick: onClose
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(react_.DrawerBody, {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                                align: "center",
                                                flexDirection: "column",
                                                gap: 3,
                                                height: "full",
                                                children: navData.map((item, index2)=>{
                                                    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                        children: item.label === "Portfolio" ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                                                py: 2,
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                                                        rightIcon: /*#__PURE__*/ jsx_runtime_.jsx(icons_namespaceObject.ChevronDownIcon, {}),
                                                                        children: "Portfolio"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuList, {
                                                                        children: item.options.map((option, index)=>{
                                                                            return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                                    href: option.href,
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                                                            children: option.label
                                                                                        })
                                                                                    })
                                                                                }, index)
                                                                            }));
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                                            onClick: ()=>{
                                                                onClose();
                                                            },
                                                            py: 2,
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                                href: item.href,
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: item.label
                                                                })
                                                            })
                                                        }, index2)
                                                    }));
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/Footer.js






function Footer() {
    const portfolio = [
        {
            label: "Web Development",
            href: "portfolio/webdevelopment"
        },
        {
            label: "Graphic Design",
            href: "portfolio/graphicdesign"
        },
        {
            label: "Video Editing",
            href: "portfolio/videoediting"
        },
        {
            label: "Photography",
            href: "portfolio/photography"
        }, 
    ];
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
            py: 6,
            bg: 'blue.100',
            mt: 6,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.SimpleGrid, {
                columns: {
                    base: 1,
                    md: 2,
                    lg: 4
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        p: 6,
                        mx: "auto",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                    src: SkillatriaHeartLogo,
                                    alt: "Skillatria Logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                children: "Skillatria provides you the solution of your businesses to grow it digitally with its creativity and services."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        justify: 'center',
                        mx: "auto",
                        p: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                children: "Portfolio"
                            }),
                            portfolio.map((item, index)=>{
                                return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: item.href,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: item.label
                                        })
                                    }, index)
                                }));
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                        justify: 'center',
                        mx: "auto",
                        p: 6,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                children: "Contact us"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "tel:",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: "Whatsapp"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    }));
};

;// CONCATENATED MODULE: ./pages/_app.js





function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61], () => (__webpack_exec__(433)));
module.exports = __webpack_exports__;

})();