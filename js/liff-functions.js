function getProfile() {
    liff
        .getProfile()
        .then(profile => {
            console.log(JSON.stringify(profile));
            window.alert(JSON.stringify(profile));
        })
        .catch(e => {
            console.log(e);
            window.alert(e);
        });
}

function getAccessToken() {
    window.alert(liff.getAccessToken());
}

function getContext() {
    window.alert(JSON.stringify(liff.getContext()));
}

function sendMessage() {
    liff
        .sendMessages([{
            "type": "flex",
            "altText": "this is a flex message",
            "contents": {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": "https://www.terrabkk.com/images/articles/0000199608/e4f99d238a12f7425796a8f9212511da.jpg",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "action": {
                        "type": "uri",
                        "uri": "http://linecorp.com/"
                    }
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                            "type": "text",
                            "text": "Brown Cafe",
                            "weight": "bold",
                            "size": "xl"
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "margin": "md",
                            "contents": [{
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                },
                                {
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                },
                                {
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                },
                                {
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                },
                                {
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                },
                                {
                                    "type": "text",
                                    "text": "4.0",
                                    "size": "sm",
                                    "color": "#999999",
                                    "margin": "md",
                                    "flex": 0
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "margin": "lg",
                            "spacing": "sm",
                            "contents": [{
                                    "type": "box",
                                    "layout": "baseline",
                                    "spacing": "sm",
                                    "contents": [{
                                            "type": "text",
                                            "text": "Place",
                                            "color": "#aaaaaa",
                                            "size": "sm",
                                            "flex": 1
                                        },
                                        {
                                            "type": "text",
                                            "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                                            "wrap": true,
                                            "color": "#666666",
                                            "size": "sm",
                                            "flex": 5
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "spacing": "sm",
                                    "contents": [{
                                            "type": "text",
                                            "text": "Time",
                                            "color": "#aaaaaa",
                                            "size": "sm",
                                            "flex": 1
                                        },
                                        {
                                            "type": "text",
                                            "text": "10:00 - 23:00",
                                            "wrap": true,
                                            "color": "#666666",
                                            "size": "sm",
                                            "flex": 5
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [{
                            "type": "button",
                            "style": "link",
                            "height": "sm",
                            "action": {
                                "type": "uri",
                                "label": "CALL",
                                "uri": "https://linecorp.com"
                            }
                        },
                        {
                            "type": "button",
                            "style": "link",
                            "height": "sm",
                            "action": {
                                "type": "uri",
                                "label": "WEBSITE",
                                "uri": "https://linecorp.com"
                            }
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [],
                            "margin": "sm"
                        }
                    ],
                    "flex": 0
                }
            }
        }])
        .then(() => {
            window.alert("Message has been sent");
        })
        .catch(e => {
            window.alert(e);
        });
}

function login() {
    liff.login();
}

function scanCode() {
    liff
        .scanCode()
        .then(result => {
            window.alert(JSON.stringify(result));
        })
        .catch(e => {
            window.alert(e);
        });
}

function openWindow() {
    liff.openWindow({
        url: "https://sirateek.me",
        external: true
    });
}

function closeWindow() {
    liff.closeWindow();
}

function logout() {
    if (liff.isLoggedIn()) {
        liff.logout();
        window.alert("Successfully to Logout");
        location.reload();
    }
}

function shareTargetPicker() {
    liff
        .shareTargetPicker([{
            "type": "flex",
            "altText": "this is a flex message",
            "contents": {
                "type": "bubble",
                "hero": {
                    "type": "image",
                    "url": "https://www.terrabkk.com/images/articles/0000199608/e4f99d238a12f7425796a8f9212511da.jpg",
                    "size": "full",
                    "aspectRatio": "20:13",
                    "aspectMode": "cover",
                    "action": {
                        "type": "uri",
                        "uri": "http://linecorp.com/"
                    }
                },
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                            "type": "text",
                            "text": "Brown Cafe",
                            "weight": "bold",
                            "size": "xl"
                        },
                        {
                            "type": "box",
                            "layout": "baseline",
                            "margin": "md",
                            "contents": [{
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                },
                                {
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                },
                                {
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                },
                                {
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                },
                                {
                                    "type": "icon",
                                    "size": "sm",
                                    "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                },
                                {
                                    "type": "text",
                                    "text": "4.0",
                                    "size": "sm",
                                    "color": "#999999",
                                    "margin": "md",
                                    "flex": 0
                                }
                            ]
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "margin": "lg",
                            "spacing": "sm",
                            "contents": [{
                                    "type": "box",
                                    "layout": "baseline",
                                    "spacing": "sm",
                                    "contents": [{
                                            "type": "text",
                                            "text": "Place",
                                            "color": "#aaaaaa",
                                            "size": "sm",
                                            "flex": 1
                                        },
                                        {
                                            "type": "text",
                                            "text": "Miraina Tower, 4-1-6 Shinjuku, Tokyo",
                                            "wrap": true,
                                            "color": "#666666",
                                            "size": "sm",
                                            "flex": 5
                                        }
                                    ]
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "spacing": "sm",
                                    "contents": [{
                                            "type": "text",
                                            "text": "Time",
                                            "color": "#aaaaaa",
                                            "size": "sm",
                                            "flex": 1
                                        },
                                        {
                                            "type": "text",
                                            "text": "10:00 - 23:00",
                                            "wrap": true,
                                            "color": "#666666",
                                            "size": "sm",
                                            "flex": 5
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                "footer": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": [{
                            "type": "button",
                            "style": "link",
                            "height": "sm",
                            "action": {
                                "type": "uri",
                                "label": "CALL",
                                "uri": "https://linecorp.com"
                            }
                        },
                        {
                            "type": "button",
                            "style": "link",
                            "height": "sm",
                            "action": {
                                "type": "uri",
                                "label": "WEBSITE",
                                "uri": "https://linecorp.com"
                            }
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [],
                            "margin": "sm"
                        }
                    ],
                    "flex": 0
                }
            }
        }])
        .then(() => {
            alert("Shared to the friend(s) you picked");
        })
        .catch(function(res) {
            alert(res);
        });
}