/**
 * @name frame
 * @author MateBook13
 * @description frame
 * @date 2022/11/14
 */
const fs = require('fs')
const log = require('electron-log')
const path = require('path')


const {
    ipcRenderer
} = require('electron')
const svg = new Vue({
    el: '#app',
    data: {
        title: "hello",
        hello: "你好",
        url: "../../../static/images/app3.ico",
        cssHref: [
            {
                url: "./layout/topBarLayout.css"
            },
            {
                url: "./layout/listBarLayout.css"
            }
        ]
    },
    methods: {
        setImg(e, num) {
            this.cssHref[0].url = "./layout/listBarLayout.css"
        }
    },
    watch: {
        cssHref: {
            deep: true,
            handler(oldValue, newValue) {

            }
        }
    }
});